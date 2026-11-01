const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

test('news metadata uses existing rendered images only on Chinese dated daily pages', () => {
  const helper = read('layouts/partials/utils/daily-image.html');
  assert.match(helper, /\.IsPage \(eq \.Language\.Lang "zh"\)/);
  assert.match(helper, /\$\.Content/);
  assert.match(helper, /htmlUnescape/);
  assert.doesNotMatch(helper, /GetRemote|resources\.Get|https?:\/\/[^"\s]+/);
  const head = read('layouts/partials/custom/head-end.html');
  assert.match(head, /if and \$isDaily \(eq \.Language\.Lang "zh"\)/);
  assert.match(head, /"isPartOf"/);
});

test('daily issue discovery uses existing page identity rather than a hardcoded date', () => {
  const masthead = read('layouts/partials/custom/daily-masthead.html');
  assert.match(masthead, /\.Params\.next/);
  assert.match(masthead, /\$\.Site\.GetPage/);
  assert.match(masthead, /data-preserve-date/);
  assert.match(masthead, /\$edition\.RelPermalink/);
  assert.doesNotMatch(masthead, /2026-[0-9]{2}-[0-9]{2}/);
});

test('archive headline extraction accepts plain and linked Markdown, using Hugo rendering', () => {
  const archive = read('layouts/archive/list.html');
  assert.match(archive, /\$page\.RenderString/);
  assert.doesNotMatch(archive, /1\\\.\\s\+\\\[/);
});

const built = process.env.HUGO_TEST_PUBLIC_DIR;
const builtHtml = route => fs.readFileSync(path.join(built, route, 'index.html'), 'utf8');
const schemas = html => [...html.matchAll(/<script[^>]*type=["']?application\/ld\+json["']?[^>]*>([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
const attrValue = html => (html.match(/=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/)?.slice(1).find(v => v !== undefined) || '').replaceAll('&amp;', '&');
const latest = fs.readdirSync(path.join(root, 'content/cn')).filter(m => /^\d{4}-\d{2}$/.test(m)).flatMap(m => fs.readdirSync(path.join(root, 'content/cn', m)).filter(f => /^\d{4}-\d{2}-\d{2}\.md$/.test(f)).map(f => `${m}/${f.slice(0, -3)}`)).sort().at(-1);

test('built daily metadata matches a real visible image and the unchanged site identity', { skip: !built }, () => {
  const html = builtHtml(latest);
  const article = schemas(html).find(s => s['@type'] === 'BlogPosting');
  const firstImage = html.match(/<figure\b[^>]*>\s*<img\b[^>]*\bsrc=(?:"([^"]+)"|'([^']+)'|([^\s>]+))/);
  assert.ok(firstImage, 'latest issue has an actual source image');
  const expected = firstImage.slice(1).find(Boolean).replaceAll('&amp;', '&');
  assert.equal(article.image.url, expected);
  assert.equal(article.isPartOf['@id'], 'https://news.aivora.cn/#website');
  for (const name of ['og:image', 'twitter:image']) {
    const meta = html.match(new RegExp(`<meta[^>]*(?:property|name)=["']?${name}["']?[^>]*content=(?:"[^"]*"|'[^']*'|[^\\s>]+)`))?.[0];
    assert.ok(meta, name);
    assert.equal(attrValue(meta.slice(meta.indexOf('content='))), expected, name);
  }
});

test('built homepage and date expose a stable dated link, date and editorial disclosure', { skip: !built }, () => {
  const date = latest.split('/').at(-1);
  for (const route of ['', latest]) {
    const html = builtHtml(route);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1);
    assert.match(html, new RegExp(`datetime=["']?${date}["']?[^>]*data-preserve-date`));
    assert.match(html, new RegExp(`class=["']?ai-daily-edition-link["']?[^>]*href=["']?/${latest}/`));
    assert.match(html, /来源与编辑说明/);
  }
});

test('built archive exposes the latest plain-text headline without repeating the whole SEO title', { skip: !built }, () => {
  const source = read(`content/cn/${latest}.md`);
  const heading = source.match(/^###\s+1\.\s+(.+)$/m)[1].trim();
  assert.match(builtHtml('archive'), new RegExp(heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
});

test('unrelated pages retain their original social image and have no daily issue controls', { skip: !built }, () => {
  for (const route of ['en', 'about', 'timeline', 'opportunity/2026-11/2026-11-01']) {
    const html = builtHtml(route);
    assert.doesNotMatch(html, /ai-daily-edition-link/);
    const article = schemas(html).find(s => s['@type'] === 'BlogPosting');
    if (article) assert.equal(article.isPartOf, undefined, route);
    assert.match(html, /logo-dark\.png/);
  }
});
