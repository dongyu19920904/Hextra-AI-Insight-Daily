"""Incremental EN updates. Failed translations never overwrite published content."""
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess
import time
import urllib.error
import urllib.request

import yaml

STATE = Path('.github/en-translation-state.json')
EXCLUDED = ('timeline/', 'guides/')


def git(*args):
    return subprocess.check_output(['git', *args], text=True, encoding='utf-8').strip()


def split_document(text):
    match = re.match(r'\A---\s*\n(.*?)\n---\s*\n?(.*)\Z', text, re.S)
    if not match:
        raise ValueError('Missing front matter')
    metadata = yaml.safe_load(match[1])
    if not isinstance(metadata, dict):
        raise ValueError('Invalid front matter')
    return metadata, match[2]


def digest(text):
    return hashlib.sha256(text.encode('utf-8')).hexdigest()


def select_files(root, state, changed):
    candidates = set(changed) | set(state.get('pending', []))
    for source in (root / 'content/cn').rglob('*.md'):
        relative = source.relative_to(root / 'content/cn').as_posix()
        if not (root / 'content/en' / relative).exists():
            candidates.add(relative)
    result = []
    for relative in sorted(candidates):
        path = Path(relative)
        if path.is_absolute() or '..' in path.parts or path.suffix != '.md' or relative.startswith(EXCLUDED):
            continue
        source = root / 'content/cn' / path
        if not source.is_file():
            continue
        text = source.read_text(encoding='utf-8')
        if state.get('reviewed', {}).get(relative) == digest(text):
            continue
        result.append(relative)
    return result


def validate_translation(source, response):
    if response.get('stop_reason') != 'end_turn':
        raise ValueError('Incomplete API response; keeping existing EN')
    output = ''.join(b.get('text', '') for b in response.get('content', []) if b.get('type') == 'text').strip()
    if output.startswith('```'):
        output = re.sub(r'^```[^\n]*\n|\n```$', '', output)
    original, source_body = split_document(source)
    translated, body = split_document(output)
    if source_body.strip() and len(body.strip()) < len(source_body.strip()) * 0.35:
        raise ValueError('Translation body missing or too short')
    urls = lambda text: set(re.findall(r'https?://[^\s<>"\)]+', text))
    if not urls(source_body).issubset(urls(body)):
        raise ValueError('Source URL missing or changed')
    if len(re.findall(r'^### ', body, re.M)) != len(re.findall(r'^### ', source_body, re.M)):
        raise ValueError('Article heading count changed')
    for key in ('title', 'linkTitle', 'description'):
        if key in original:
            value = translated.get(key)
            if not isinstance(value, str) or (original[key] and not value.strip()):
                raise ValueError('Translated metadata missing: ' + key)
            original[key] = value
    # Dates, indexing policy, aliases and other Hugo settings stay deterministic.
    if isinstance(original.get('next'), str) and original['next'] and not original['next'].startswith('/en/'):
        original['next'] = '/en/' + original['next'].lstrip('/')
    return '---\n' + yaml.safe_dump(original, allow_unicode=True, sort_keys=False).strip() + '\n---\n' + body.lstrip()


def request_translation(source):
    key = os.environ.get('ANTHROPIC_API_KEY')
    if not key:
        raise ValueError('ANTHROPIC_API_KEY is missing')
    endpoint = os.environ.get('ANTHROPIC_API_URL', '').rstrip('/') or 'https://www.runtoken.ai'
    payload = {
        'model': os.environ.get('ANTHROPIC_MODEL', 'claude-sonnet-5'),
        'max_tokens': 8192,
        'messages': [{'role': 'user', 'content': (
            'Translate this complete Hugo Markdown document into natural English. '
            'Translate title, linkTitle, description and prose; preserve all other YAML values, '
            'dates, heading structure, links, image/video URLs and shortcodes exactly. '
            'Keep the brand 爱窝啦·AI账号店 unchanged. Do not add facts, omit sections, '
            'reorder news, strengthen claims or rewrite evidence. Return only the document, '
            'including its YAML front matter.\n\n' + source
        )}],
    }
    request = urllib.request.Request(endpoint + '/v1/messages', data=json.dumps(payload).encode(), headers={
        'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key,
        'anthropic-version': '2023-06-01',
    })
    for attempt in range(3):
        try:
            with urllib.request.urlopen(request, timeout=180) as response:
                return json.load(response)
        except urllib.error.HTTPError as error:
            if error.code != 429 or attempt == 2:
                raise RuntimeError('Translation HTTP status ' + str(error.code)) from None
            time.sleep(2 ** attempt)


def update_files(root, state, changed, revision, translate=request_translation, limit=8):
    pending = select_files(root, state, changed)
    failed = []
    for index, relative in enumerate(pending):
        if index >= limit:
            failed.append(relative)
            continue
        source = (root / 'content/cn' / relative).read_text(encoding='utf-8')
        try:
            output = validate_translation(source, translate(source))
            target = root / 'content/en' / relative
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text(output, encoding='utf-8')
            print('Translated:', relative)
        except Exception as error:
            print('::warning::EN retained, retry queued:', relative, type(error).__name__, str(error)[:160])
            failed.append(relative)
    return {'source_commit': revision, 'pending': failed}


if __name__ == '__main__':
    root = Path.cwd()
    state = json.loads(STATE.read_text(encoding='utf-8'))
    revision = git('rev-parse', 'HEAD')
    changes = git('diff', '--name-only', '--diff-filter=AM', state['source_commit'], revision, '--', 'content/cn').splitlines()
    changed = [path.removeprefix('content/cn/') for path in changes]
    if changed or select_files(root, state, []):
        next_state = update_files(root, state, changed, revision)
        STATE.write_text(json.dumps(next_state, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
    else:
        print('No source changes; no translation or state commit needed.')
