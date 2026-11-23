import { createHash } from 'node:crypto';
import { appendFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repo = 'dongyu19920904/Hextra-AI-Insight-Daily';
const first = '2026-11-23';
const maxBlob = 128 * 1024;
const dayRE = /^\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])$/;
const articleRE = /^content\/(cn|en)\/(?:(opportunity|account-opportunity)\/)?(\d{4}-\d\d)\/(\d{4}-\d\d-\d\d)\.md$/;
const shaRE = /^[0-9a-f]{40}$/;
const homeKeys = new Set(['linkTitle', 'title', 'breadcrumbs', 'next', 'description', 'cascade']);
const pageKeys = new Set(['linkTitle', 'title', 'date', 'weight', 'breadcrumbs', 'comments', 'description']);

function requireValue(value, problem) {
  if (!value) throw new Error(problem);
  return value;
}

function dayValid(day) {
  if (!dayRE.test(day)) return false;
  const dt = new Date(`${day}T00:00:00Z`);
  return Number.isFinite(dt.valueOf()) && dt.toISOString().slice(0, 10) === day;
}

function unpack(bytes, path, keys) {
  const text = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
  const block = requireValue(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(text), `Missing front matter: ${path}`);
  const body = text.slice(block[0].length).trim();
  requireValue(text.length > 0 && !text.includes('\0') && body, `Invalid body: ${path}`);
  const prose = text.replace(/<(?:https?|mailto):[^<>\s]+>/gi, '');
  requireValue(!/\{\{[<%]|<\s*\/?[A-Za-z][\w:-]*(?=[\s/>])|<\s*!--|\]\s*\(\s*<?(?:javascript|data|vbscript):/i.test(prose), `Non-Markdown or unsafe link: ${path}`);
  const fields = new Map();
  let cascadeSeen = false;
  for (const line of block[1].split(/\r?\n/)) {
    if (line === '  type: docs' && fields.get('cascade') === '' && !cascadeSeen) {
      cascadeSeen = true;
      continue;
    }
    const setting = requireValue(/^([A-Za-z]+):[ \t]*(.*)$/.exec(line), `Unexpected front matter structure: ${path}`);
    const [, key, value] = setting;
    requireValue(keys.has(key) && !fields.has(key) && !/^[&*!{|>\[]/.test(value), `Unknown or complex front matter: ${path}`);
    fields.set(key, value);
  }
  requireValue(fields.get('title'), `Missing title: ${path}`);
  if (fields.has('cascade')) requireValue(cascadeSeen && fields.get('cascade') === '', `Unexpected cascade: ${path}`);
  return { fields, body };
}

export async function planImport({ entries, readBlob, today }) {
  requireValue(dayValid(today), 'Invalid build date');
  const indexed = new Map(entries.map(entry => [entry.path, entry]));
  const files = new Map();
  const skipped = [];
  async function load(path) {
    const entry = indexed.get(path);
    requireValue(entry?.type === 'blob' && entry.mode === '100644' && shaRE.test(entry.sha)
      && Number.isSafeInteger(entry.size) && entry.size > 0 && entry.size <= maxBlob, `Invalid source entry: ${path}`);
    const bytes = await readBlob(entry);
    const gitOid = createHash('sha1').update(`blob ${bytes.length}\0`).update(bytes).digest('hex');
    requireValue(bytes.length === entry.size && gitOid === entry.sha, `Source bytes failed Git hash check: ${path}`);
    return bytes;
  }

  const homePath = 'content/cn/_index.md';
  const homeBytes = await load(homePath);
  const home = unpack(homeBytes, homePath, homeKeys);
  const next = /^\/(?<month>\d{4}-\d\d)\/(?<day>\d{4}-\d\d-\d\d)$/.exec(home.fields.get('next'))?.groups;
  requireValue(next?.month === next?.day?.slice(0, 7) && dayValid(next?.day ?? '')
    && next.day >= first && next.day <= today, 'Unexpected source homepage pointer');
  const latest = next.day;
  const latestPage = `content/cn/${next.month}/${latest}.md`;
  if (latest === first) {
    requireValue(indexed.get(homePath)?.sha === '8ae2c51ee9687a3470a463d3ddd64ad0f73eac1f'
      && indexed.get(latestPage)?.sha === 'f997fc1e180055c56649108fc252cc6331c9c4e0'
      && indexed.get(`daily/${first}.md`)?.sha === '1b1939929918cbf807e3b5b608676839a812b6d5',
    'The November 23 original must match the verified blobs');
  }
  const staged = [];
  for (const entry of entries) {
    const [, lang, section, month, day] = articleRE.exec(entry.path) ?? [];
    if (!day || !dayValid(day) || !day.startsWith(`${month}-`) || day < first || day > latest) continue;
    if (day === first && !section && lang === 'cn' && latest > first) continue;
    if (day === first && entry.path !== latestPage) continue;
    staged.push({ entry, section, month, day, lang });
  }
  requireValue(staged.length <= 1024, 'Review the release baseline before extending the archive import');
  for (const { entry, section, month, day, lang } of staged) {
    let bytes;
    let article;
    try {
      bytes = await load(entry.path);
      article = unpack(bytes, entry.path, pageKeys);
      requireValue(article.fields.get('date') === `${day}T00:00:00+08:00`, `Mismatched article date: ${entry.path}`);
    } catch (error) {
      if (lang === 'cn' && !section) throw error;
      skipped.push(entry.path);
      continue;
    }
    if (lang === 'cn' && !section) {
      const raw = await load(`daily/${day}.md`);
      requireValue(article.body === raw.toString('utf8').trim(), `Unmatched source and article: ${entry.path}`);
      if (entry.path === latestPage) {
        requireValue(article.body === home.body && article.body.includes('## **\u4eca\u65e5\u6458\u8981**'), 'Incomplete source home or daily article');
      }
    }
    if (day === first) continue;
    files.set(entry.path, bytes);
    if (month > first.slice(0, 7)) {
      const monthIndex = `content/${lang}/${section ? section + '/' : ''}${month}/_index.md`;
      files.set(monthIndex, Buffer.from(`---\ntitle: ${month}\nweight: ${1 - Number(month.replace('-', ''))}\nbreadcrumbs: false\nsidebar:\n  open: true\n---\n`));
    }
  }
  requireValue(staged.some(row => row.entry.path === latestPage), 'Dated homepage target not found');
  if (latest > first) files.set(homePath, homeBytes);
  return { files, latest, skipped };
}

async function request(path, maxBytes = 8 * 1024 * 1024) {
  const response = await fetch(`https://api.github.com/repos/${repo}/${path}`, {
    redirect: 'error', signal: AbortSignal.timeout(15000),
    headers: { Accept: 'application/vnd.github+json', Authorization: `Bearer ${process.env.GH_TOKEN}` },
  });
  requireValue(response.ok, `Source GitHub read failed: HTTP ${response.status}`);
  const reader = response.body.getReader();
  let bytes = 0;
  const chunks = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    bytes += value.byteLength;
    requireValue(bytes <= maxBytes, 'GitHub response exceeded publication limit');
    chunks.push(value);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

async function main() {
  requireValue(process.env.GITHUB_REPOSITORY === repo && process.env.GITHUB_REF === 'refs/heads/codex/ai-daily-publishing', 'Only the dedicated publication branch may import content');
  requireValue(process.env.GH_TOKEN, 'Missing short-lived read token');
  const ref = (await request('git/ref/heads/main', 8192)).object?.sha;
  requireValue(shaRE.test(ref), 'Missing immutable source revision');
  const metadata = await request(`git/trees/${ref}?recursive=1`);
  requireValue(!metadata.truncated && Array.isArray(metadata.tree), 'Incomplete source tree; build stopped');
  const now = new Date(Date.now() + 8 * 3600000).toISOString().slice(0, 10);
  const picked = await planImport({ entries: metadata.tree, today: now, readBlob: async entry => {
    const blob = await request(`git/blobs/${entry.sha}`, 2 * maxBlob);
    requireValue(blob.encoding === 'base64' && blob.sha === entry.sha, 'Unexpected GitHub blob metadata');
    return Buffer.from(blob.content, 'base64');
  }});
  for (const [path, bytes] of picked.files) {
    const dest = resolve(process.cwd(), path);
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, bytes);
  }
  console.log(`Prepared ${picked.latest}, source ${ref}, Markdown files ${picked.files.size}`);
  if (process.env.GITHUB_OUTPUT) await appendFile(process.env.GITHUB_OUTPUT, `day=${picked.latest}\nsource=${ref}\n`);
  for (const path of picked.skipped) console.warn(`::warning::Skipped invalid secondary report ${path}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
