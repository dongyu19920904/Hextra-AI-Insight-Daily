const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const publishedCopies = [
  "daily/2026-08-12.md",
  "content/cn/2026-08/2026-08-12.md",
  "content/cn/_index.md",
  "content/en/2026-08/2026-08-12.md",
  "content/en/_index.md",
  "content/ja/2026-08/2026-08-12.md",
  "content/ja/_index.md",
];
const localImages = [
  "/images/daily/2026-08-12/claude-watermark.jpg?v=2",
  "/images/daily/2026-08-12/wechat-xiaowei-ai-review.jpg?v=2",
];

test("2026-08-12 published copies use the repaired local images", () => {
  for (const relativePath of publishedCopies) {
    const markdown = fs.readFileSync(path.join(root, relativePath), "utf8");

    for (const imagePath of localImages) {
      assert.ok(markdown.includes(imagePath), `${relativePath} should reference ${imagePath}`);
    }
    assert.doesNotMatch(markdown, /50748815f7184cddbaf454b16588fa37|7dca940a967a44d981aa62ae5a996c19/);
  }
});

test("repaired local images are non-empty JPEG files", () => {
  for (const publicPath of localImages) {
    const imagePath = publicPath.split("?")[0];
    const image = fs.readFileSync(path.join(root, "static", imagePath));
    assert.ok(image.length > 10_000, `${publicPath} should contain a real image`);
    assert.deepEqual([...image.subarray(0, 3)], [0xff, 0xd8, 0xff]);
  }
});
