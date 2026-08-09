const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

test("时间线对每期日报实行真实的三节点上限", () => {
  const template = read("layouts/timeline/list.html");

  assert.match(template, /\$dailyNodeCount := 0/);
  assert.match(
    template,
    /and \$url \$isKeyNode \(lt \$dailyNodeCount \$maxNodesPerDay\)/,
  );
  assert.match(template, /\$dailyNodeCount = add \$dailyNodeCount 1/);
});

test("时间线输出与可见节点一致的 CollectionPage 和 ItemList schema", () => {
  const template = read("layouts/timeline/list.html");

  assert.match(template, /"@type" "CollectionPage"/);
  assert.match(template, /"@type" "ItemList"/);
  assert.match(template, /"itemListElement" \$schemaItems/);
  assert.match(template, /"dateModified"/);
  assert.match(template, /AI 时间线如何筛选关键事件/);
  assert.match(template, />\s*来源证据\s*/);
});

test("时间线 sitemap lastmod 取最近一期日报日期", () => {
  const sitemap = read("layouts/sitemap.xml");

  assert.match(sitemap, /eq \.Type "timeline"/);
  assert.match(sitemap, /first 1 \$dailyPages/);
  assert.match(sitemap, /\$lastmod = \$latestDaily\.Date/);
  assert.match(sitemap, /Sitemap\.Disable/);
  assert.match(sitemap, /range \.Translations/);
});

test("未完整本地化的英文时间线不进入索引或 hreflang", () => {
  const english = read("content/en/timeline/_index.md");
  const head = read("layouts/partials/custom/head-end.html");

  assert.match(english, /noindex:\s*true/);
  assert.match(english, /sitemap:\s*\n\s+disable:\s*true/);
  assert.match(head, /if not \(\.Params\.noindex \| default false\)/);
});

test("中文时间线说明范围、来源和日报上下文", () => {
  const chinese = read("content/cn/timeline/_index.md");
  const llms = read("static/llms.txt");

  assert.match(chinese, /最近 7 期/);
  assert.match(chinese, /来源链接/);
  assert.match(chinese, /日报上下文/);
  assert.match(llms, /\[AI 时间线\]\(https:\/\/news\.aivora\.cn\/timeline\/\)/);
});
