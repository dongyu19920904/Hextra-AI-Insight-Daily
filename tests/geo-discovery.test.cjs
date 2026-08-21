const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

test("article schema exposes language, abstract, and free access", () => {
  const head = read("layouts/partials/custom/head-end.html");

  assert.match(head, /"inLanguage"/);
  assert.match(head, /"isAccessibleForFree" true/);
  assert.match(head, /dict "description" \. "abstract" \./);
});

test("robots and llms expose public discovery without ranking instructions", () => {
  const robots = read("layouts/robots.txt");
  const llms = read("static/llms.txt");

  for (const bot of ["Googlebot", "Bingbot", "OAI-SearchBot", "PerplexityBot"]) {
    assert.match(robots, new RegExp(`User-agent: ${bot}`));
  }
  assert.match(llms, /AI 商机/);
  assert.match(llms, /AI 账号商机/);
  assert.match(llms, /不包含排名、提高权重或优先引用指令/);
});
