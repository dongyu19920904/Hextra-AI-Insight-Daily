const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const sidebarPath = path.join(
  __dirname,
  '..',
  'themes',
  'hextra',
  'layouts',
  '_partials',
  'sidebar.html',
);

test('sidebar only renders date children for the active archive month', () => {
  const template = fs.readFileSync(sidebarPath, 'utf8');

  assert.equal((template.match(/\$isArchiveSection\s*:=/g) || []).length, 2);
  assert.equal((template.match(/if \$shouldOpen/g) || []).length >= 4, true);
  assert.match(template, /findRE "\^\[0-9\]\{4\}-\[0-9\]\{2\}\$"/);
  assert.match(template, /\$openByConfig := and \(\.Params\.sidebar\.open\) \(not \$isArchiveSection\)/);
});
