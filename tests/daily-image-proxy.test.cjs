const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const renderHook = fs.readFileSync(
  path.join(root, "layouts", "_default", "_markup", "render-image.html"),
  "utf8"
);

test("daily image hook bypasses weserv only for known incompatible source hosts", () => {
  assert.match(renderHook, /i\.imgur\.com/);
  assert.match(renderHook, /wechat2rss\.bestblogs\.dev/);
  assert.match(renderHook, /not \$bypassProxy/);
  assert.match(renderHook, /images\.weserv\.nl/);
  assert.doesNotMatch(renderHook, /pbs\.twimg\.com.*proxyBypassHosts/);
});
