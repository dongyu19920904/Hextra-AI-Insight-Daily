const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}

test("AI Daily removes account merchant entry points", () => {
  const config = fs.readFileSync(path.join(root, "hugo.yaml"), "utf8");
  const home = fs.readFileSync(path.join(root, "themes", "hextra", "layouts", "home.html"), "utf8");
  const llms = fs.readFileSync(path.join(root, "static", "llms.txt"), "utf8");
  assert.doesNotMatch(config, /identifier:\s+ai-account-opportunity/);
  assert.doesNotMatch(home, /\/account-opportunity\//);
  assert.doesNotMatch(llms, /news\.aivora\.cn\/account-opportunity/);
});

test("all historical account reports are migration stubs with supply canonicals", () => {
  const accountRoot = path.join(root, "content", "cn", "account-opportunity");
  const reports = walk(accountRoot).filter((file) => /^\d{4}-\d{2}-\d{2}\.md$/.test(path.basename(file)));
  assert.equal(reports.length, 134);
  for (const file of reports) {
    const date = path.basename(file, ".md");
    const content = fs.readFileSync(file, "utf8");
    assert.match(content, /^noindex:\s+true$/m);
    assert.match(content, /^excludeSearch:\s+true$/m);
    assert.match(content, /^layout:\s+account-opportunity-redirect$/m);
    assert.match(content, new RegExp(`^canonical: https://supply\\.aivora\\.cn/opportunities/${date}$`, "m"));
    assert.doesNotMatch(content, /^##\s+/m);
  }
});
