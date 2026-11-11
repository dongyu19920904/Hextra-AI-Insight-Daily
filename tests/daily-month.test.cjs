const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

test('month improvement is isolated to Chinese calendar sections, not the daily generator', () => {
  const list = read('layouts/docs/list.html');
  assert.match(list, /\$isDailyMonth := and \.IsSection \(eq \.Language\.Lang "zh"\)/);
  assert.match(list, /if \$isDailyMonth[\s\S]*partial "custom\/daily-month.html"/);
  const month = read('layouts/partials/custom/daily-month.html');
  assert.match(month, /sort \$issues "date" "desc"/);
  assert.match(month, /"date" \.File\.BaseFileName/);
  assert.match(month, /\$page\.RenderString/);
  assert.doesNotMatch(month, /\.Date\.Format|\.ByDate/);
  assert.match(month, /<time datetime="\{\{ \.date \}\}" data-preserve-date>/);
  assert.doesNotMatch(month, /GetRemote|resources\.Get|2026-11|script|iframe/);
});

test('growth follow-up has a discoverable state and distinguishes release from measured growth', () => {
  const rules = read('AGENTS.md');
  assert.match(rules, /OPERATING-STATE\.md/);
  assert.match(rules, /LESSONS\.md/);
  const state = read('docs/seo-geo/OPERATING-STATE.md');
  assert.match(state, /增长状态：待量测/);
  assert.match(state, /不是常驻进程/);
});

const publicDir = process.env.HUGO_TEST_PUBLIC_DIR;
test('built calendar pages contain actual date links, scoped descriptions and readable headlines', { skip: !publicDir }, () => {
  for (const month of ['2026-11', '2026-10', '2025-06']) {
    const html = fs.readFileSync(path.join(publicDir, month, 'index.html'), 'utf8');
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1);
    assert.match(html, new RegExp(`<h1>${month} AI 日报</h1>`));
    assert.match(html, /class=["']?daily-month-issues/);
    const items = [...html.matchAll(/<li><time datetime=["']?(\d{4}-\d{2}-\d{2})["']?[^>]*>[^<]+<\/time>\s*<a href=["']?([^"'\s>]+)["']?>([^<]+)<\/a>/g)];
    assert.ok(items.length > 0, `${month} cannot be a 200-only empty directory`);
    const dates = items.map(m => m[1]);
    assert.deepEqual(dates, [...dates].sort().reverse());
    assert.equal(new Set(dates).size, dates.length);
    for (const [, date, href, headline] of items) {
      assert.equal(href, `/${month}/${date}/`);
      assert.ok(fs.existsSync(path.join(publicDir, month, date, 'index.html')));
      assert.ok(headline.trim());
      assert.doesNotMatch(headline, /\*\*|\]\(/);
    }
    assert.match(html, /按日期查看本月/);
    if (month === '2026-11') assert.match(items.find(item => item[1] === '2026-11-11')?.[3] || '', /Anthropic 同日发布两款新模型/);
    assert.match(html, new RegExp(`rel=["']?canonical["']?[^>]*href=["']?https://news\\.aivora\\.cn/${month}/`));
  }
});

test('daily articles, homepage, opportunity and English calendar do not receive the month block', { skip: !publicDir }, () => {
  for (const route of ['', '2026-11/2026-11-11', 'opportunity', 'en/2026-10']) {
    const html = fs.readFileSync(path.join(publicDir, route, 'index.html'), 'utf8');
    assert.doesNotMatch(html, /daily-month-issues/);
  }
});
