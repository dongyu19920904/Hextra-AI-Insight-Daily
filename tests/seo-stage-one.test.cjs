const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

test('daily H1 retains the brand and exposes the dated article title only off the homepage', () => {
  const template = read('layouts/partials/custom/daily-masthead.html');
  assert.equal((template.match(/<h1>/g) || []).length, 1);
  assert.match(template, /data-text="爱窝啦 AI 日报"/);
  assert.match(template, /if not \.IsHome[\s\S]*ai-daily-masthead__edition[\s\S]*\.Title \| plainify/);
});

test('October 21 source images remain images rather than Setext titles in all published copies', () => {
  const files = ['daily/2026-10-21.md', 'content/cn/2026-10/2026-10-21.md'];
  if (/date: 2026-10-21T/.test(read('content/cn/_index.md'))) files.push('content/cn/_index.md');
  for (const file of files) {
    const text = read(file);
    assert.doesNotMatch(text, /!\[[^\r\n]+\]\([^\r\n]+\)\r?\n---/);
  }
});

test('Codex guide keeps publication date, official evidence and one verified shop destination', () => {
  const text = read('content/cn/guides/codex-subscription-vs-api.md');
  assert.match(text, /date: 2026-10-13T17:30:00\+08:00/);
  assert.match(text, /lastmod: 2026-10-22T00:00:00\+08:00/);
  assert.match(text, /codex login status/);
  assert.match(text, /https:\/\/learn.chatgpt.com\/docs\/auth/);
  assert.match(text, /https:\/\/help.openai.com\/en\/articles\/9039756-/);
  const links = [...text.matchAll(/\]\((https:\/\/(?:www\.)?aivora.cn\/[^)]+)\)/g)].map(m => m[1]);
  assert.deepEqual(links, ['https://www.aivora.cn/products/cheng-pin-hao-yue-ka']);
  assert.doesNotMatch(text, /^# /m);
});

// Set HUGO_TEST_PUBLIC_DIR to run these checks against any production build.
test('built daily, guide, archives and opportunity preserve canonical/schema and H1 boundaries', {
  skip: !process.env.HUGO_TEST_PUBLIC_DIR,
}, () => {
  const publicDir = process.env.HUGO_TEST_PUBLIC_DIR;
  const htmlFor = route => fs.readFileSync(path.join(publicDir, route, 'index.html'), 'utf8');
  for (const route of ['', '2026-10/2026-10-21', '2026-09/2026-09-30', '2026-10', 'guides/codex-subscription-vs-api', 'opportunity/2026-10/2026-10-21']) {
    const html = htmlFor(route);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, route);
    assert.match(html, new RegExp(`rel=["']?canonical["']?[^>]*href=["']?https://news\\.aivora\\.cn/${route ? route + '/' : ''}`), route);
    const schemas = [...html.matchAll(/<script[^>]*type=["']?application\/ld\+json["']?[^>]*>([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
    if (route !== '2026-10') assert.ok(schemas.length, route);
    if (/^2026-\d\d\//.test(route)) {
      assert.match(html, /ai-daily-masthead__edition/);
      assert.ok(schemas.some(s => s['@type'] === 'BlogPosting'), route);
      const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1].replace(/<[^>]*>/g, '').trim();
      const article = schemas.find(s => s['@type'] === 'BlogPosting');
      assert.ok(h1.includes(article.headline), route);
    } else {
      assert.doesNotMatch(html, /class=["']?ai-daily-masthead__edition/);
    }
    if (route.includes('codex-subscription')) assert.ok(schemas.some(s => s['@type'] === 'TechArticle'));
    assert.doesNotMatch(html, /<h2[^>]*>\s*<figure/);
  }
});
