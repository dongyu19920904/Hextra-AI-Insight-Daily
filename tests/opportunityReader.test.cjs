const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { execFileSync } = require('node:child_process');
const path = require('node:path');
const root = path.resolve(__dirname, '..');

test('opportunity stylesheet is scoped and loaded only by the opportunity masthead', () => {
  const css = readFileSync(path.join(root, 'assets/css/opportunity-reader.css'), 'utf8');
  // Browser verification additionally walks CSSStyleRules and queries the main daily DOM.
  const selectors = css.replace(/\/\*[\s\S]*?\*\//g, '').match(/[^{}]+\{/g)
    .map((rule) => rule.slice(0, -1).trim()).filter((rule) => !rule.startsWith('@'));
  for (const selector of selectors.flatMap((rule) => rule.split(','))) {
    assert.ok(selector.trim().startsWith('.ai-opportunity-layout '), selector);
  }
  const partial = readFileSync(path.join(root, 'layouts/partials/custom/opportunity-masthead.html'), 'utf8');
  assert.match(partial, /resources.Get "css\/opportunity-reader.css"/);
  const hits = execFileSync('git', ['grep', '-l', 'opportunity-reader.css', '--', 'layouts'], { cwd: root, encoding: 'utf8' }).trim();
  assert.equal(hits, 'layouts/partials/custom/opportunity-masthead.html');
});

test('main daily components do not load the opportunity-specific stylesheet', () => {
  for (const file of ['assets/css/custom.css', 'layouts/docs/single.html', 'layouts/partials/custom/daily-masthead.html', 'layouts/partials/custom/head-end.html']) {
    assert.doesNotMatch(readFileSync(path.join(root, file), 'utf8'), /resources.Get "css\/opportunity-reader.css"/, file);
  }
});
