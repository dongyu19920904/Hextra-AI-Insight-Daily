const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const config = read("hugo.yaml");
const radarEntry = read("layouts/partials/custom/ai-radar-entry.html");

test("AI 日报导航和实时快讯统一使用爱窝啦 ai雷达域名", () => {
  assert.match(config, /name: 爱窝啦 ai雷达\s+url: "https:\/\/radar\.aivora\.cn\/"/);
  assert.match(radarEntry, /\$radarURL := "https:\/\/radar\.aivora\.cn\/"/);
  assert.match(radarEntry, /爱窝啦 ai雷达刚刚捕获/);
  assert.doesNotMatch(config, /dongyu19920904\.github\.io\/ai-news-radar/);
  assert.doesNotMatch(radarEntry, /dongyu19920904\.github\.io\/ai-news-radar/);
});
