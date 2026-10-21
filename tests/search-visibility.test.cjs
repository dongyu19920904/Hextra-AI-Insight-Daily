const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');

test('homepage metadata is independent of rewritten daily front matter', () => {
  const description = read('layouts/partials/utils/page-description.html');
  assert.ok(description.indexOf('.IsHome') < description.indexOf('.Description'));
  assert.match(read('themes/hextra/layouts/_partials/head.html'), /homeSeoTitle/);
  assert.match(read('themes/hextra/layouts/_partials/opengraph.html'), /utils\/page-description/);
});

test('only empty taxonomies are excluded by the shared index policy', () => {
  const policy = read('layouts/partials/utils/search-noindex.html');
  assert.match(policy, /slice "taxonomy" "term"/);
  assert.match(policy, /eq \(len \.Pages\) 0/);
  assert.match(read('layouts/sitemap.xml'), /utils\/search-noindex/);
  assert.match(read('themes/hextra/layouts/_partials/head.html'), /utils\/search-noindex/);
});

test('favicon uses the existing brand ICO instead of embedded multi-megabyte SVGs', () => {
  const icons = read('layouts/partials/favicons.html');
  assert.match(icons, /favicon\.ico/);
  assert.doesNotMatch(icons, /href=.*favicon.*\.svg/);
  assert.ok(fs.statSync(path.join(root, 'static/favicon.ico')).size < 150000);
});

test('editorial identity has no inherited author or obsolete offers', () => {
  assert.doesNotMatch(read('hugo.yaml') + read('layouts/partials/custom/head-end.html'), /justlikemaki@qq|@justlikemaki/);
  for (const language of ['cn', 'en']) {
    const about = read(`content/${language}/about.md`);
    assert.match(about, /爱窝啦·AI账号店/);
    assert.doesNotMatch(about, /4\.5|9\.9|aiwoola/);
  }
  assert.match(read('layouts/partials/custom/head-end.html'), /AboutPage/);
  assert.match(read('layouts/partials/custom/head-end.html'), /ContactPage/);
});

test('guides have explicit sources, dates, one relevant shop link and no body H1', () => {
  for (const slug of ['claude-web-vs-code', 'codex-subscription-vs-api']) {
    const doc = read(`content/cn/guides/${slug}.md`);
    assert.match(doc, /date: 2026-10-13/);
    const modified = doc.match(/^lastmod: (\S+)/m)?.[1];
    assert.ok(modified && Date.parse(modified) >= Date.parse('2026-10-13T00:00:00+08:00'));
    assert.match(doc, /https:\/\/(support\.claude\.com|help\.openai\.com)/);
    assert.equal((doc.match(/\]\(https:\/\/www\.aivora\.cn\//g) || []).length, 1);
    assert.doesNotMatch(doc, /^# /m);
    assert.match(doc, /商业关系说明/);
  }
});

test('EN date and home no longer describe Muse Wonder as music generation', () => {
  for (const file of ['content/en/2026-10/2026-10-13.md', 'content/en/_index.md']) {
    const doc = read(file);
    assert.match(doc, /Muse Wonder for Personal and Professional Agents/);
    assert.doesNotMatch(doc, /Muse Wonder Music|music AI research/);
  }
});

function analyticsFixture(href, placement = '.content', fail = false) {
  const handlers = {}, events = [], rel = new Set(['noreferrer']);
  const anchor = {
    href,
    relList: { remove: v => rel.delete(v), add: v => rel.add(v) },
    closest: selector => selector === 'a[href]' || selector === placement ? anchor : null,
  };
  const window = {
    location: { href: 'https://news.aivora.cn/2026-10/2026-10-13/?private=ignored', pathname: '/2026-10/2026-10-13/' },
    gtag: (...args) => { if (fail) throw new Error('blocked'); events.push(args); },
    umami: { track: (...args) => events.push(args) },
  };
  const document = { querySelectorAll: () => [anchor], addEventListener: (name, handler) => handlers[name] = handler };
  vm.runInNewContext(read('assets/js/core/shop-clicks.js'), { window, document, URL });
  return { anchor, rel, events, click: (type = 'click', button = 0) => handlers[type]({ type, button, target: anchor }) };
}

test('store clicks retain origin referral and emit path-only placement events', () => {
  for (const [selector, expected] of [['.content', 'article'], ['.footer-wrapper', 'footer'], ['nav, .sidebar-container', 'navigation']]) {
    const page = analyticsFixture('https://www.aivora.cn/products/tool?private=secret', selector);
    page.click();
    assert.equal(page.rel.has('noreferrer'), false);
    assert.equal(page.rel.has('noopener'), true);
    assert.equal(page.anchor.referrerPolicy, 'strict-origin-when-cross-origin');
    assert.equal(page.events[0][2].placement, expected);
    assert.equal(page.events[0][2].target, '/products/tool');
    assert.doesNotMatch(JSON.stringify(page.events), /secret|private/);
  }
});

test('other origins, credentials and lookalike domains are untouched', () => {
  for (const href of ['https://www.aivora.cn.evil.test/', 'https://example.org/', 'http://www.aivora.cn/', 'https://user:pass@www.aivora.cn/']) {
    const page = analyticsFixture(href);
    page.click();
    assert.equal(page.rel.has('noreferrer'), true);
    assert.equal(page.events.length, 0);
  }
});

test('analytics failure cannot block navigation; middle click records once, right click never', () => {
  const page = analyticsFixture('https://www.aivora.cn/', '.content', true);
  assert.doesNotThrow(() => page.click());
  page.click('auxclick', 1);
  page.click('auxclick', 2);
  assert.equal(page.events.length, 2);
});
