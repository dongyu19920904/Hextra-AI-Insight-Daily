const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const read = (file) => fs.readFileSync(path.join(__dirname, '..', file), 'utf8');

test('mobile more menu and footer share the three configured navigation destinations', () => {
  const links = read('layouts/partials/custom/explore-links.html');
  assert.match(links, /\.Site\.Menus\.main/);
  assert.match(links, /slice "ai-radar" "ai-timeline" "ai-opportunity"/);
  assert.match(links, /with \.PageRef/);
  assert.doesNotMatch(links, /20\d\d-\d\d-\d\d/);
  const masthead = read('layouts/partials/custom/daily-masthead.html');
  assert.match(masthead, /<details class="mobile-explore">/);
  assert.match(masthead, /<summary>更多<\/summary>/);
  assert.match(masthead, /partial "custom\/explore-links.html"/);
  assert.match(read('layouts/partials/custom/footer.html'), /partial "custom\/explore-links.html" \$pageContext/);
});

test('mobile entry stays collapsed by default and cannot obscure daily content', () => {
  assert.doesNotMatch(read('layouts/partials/custom/daily-masthead.html'), /<details[^>]*\bopen\b/);
  const css = read('assets/css/custom.css');
  assert.match(css, /\.mobile-explore\s*\{\s*display: none;/);
  assert.match(css, /@media \(max-width: 767px\) \{\s*\.mobile-explore\s*\{\s*display: block;/);
  const rules = css.slice(css.indexOf('.mobile-explore {'), css.indexOf('.footer-links {'));
  assert.doesNotMatch(rules, /position:\s*(?:fixed|absolute)|background:/);
});
