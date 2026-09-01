const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const config = fs.readFileSync(path.join(__dirname, "..", "hugo.yaml"), "utf8");

function readMainMenuEntries(source) {
  const mainStart = source.indexOf("  main:");
  const mainEnd = source.indexOf("\nparams:", mainStart);
  const mainMenu = `${source.slice(mainStart, mainEnd)}\n    - identifier: __end__\n`;
  const blocks = [...mainMenu.matchAll(/^    - identifier:\s+(\S+)\s*\r?\n([\s\S]*?)(?=^    - identifier:)/gm)];

  return blocks.map(([, identifier, body]) => {
    const rawWeight = body.match(/^      weight:\s+([^\r\n]+)$/m)?.[1];
    const weight = Number(rawWeight);

    assert.ok(Number.isInteger(weight), `${identifier} must use an integer menu weight`);
    return { identifier, weight };
  });
}

test("main navigation prioritizes AI Radar and AI Timeline", () => {
  const entries = readMainMenuEntries(config);
  const sortedIdentifiers = entries
    .sort((left, right) => left.weight - right.weight)
    .map(({ identifier }) => identifier);

  assert.deepEqual(sortedIdentifiers, [
    "ai-radar",
    "ai-timeline",
    "documentation",
    "bioai-daily",
    "personal-home",
    "about",
    "ai-opportunity",
    "aivora-store",
    "search",
  ]);
});
