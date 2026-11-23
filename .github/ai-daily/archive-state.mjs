import { readdir, stat, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const stateFile = 'ai-daily-release-state.json';
const dayRE = /^\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])$/;
const monthRE = /^\d{4}-(?:0[1-9]|1[0-2])$/;
const prefixes = ['', 'en', 'opportunity', 'account-opportunity', 'en/opportunity', 'en/account-opportunity'];
const articlePath = /^(?:(?:en\/)?(?:opportunity\/|account-opportunity\/)?)(\d{4}-\d{2})\/(\d{4}-\d{2}-\d{2})\/index\.html$/;

function requireValue(value, message) {
  if (!value) throw new Error(message);
}

function validState(value) {
  return value?.version === 1 && dayRE.test(value.latest) && /^[0-9a-f]{40}$/.test(value.source)
    && Array.isArray(value.articles) && value.articles.length <= 10000
    && value.articles.every(path => {
      if (typeof path !== 'string') return false;
      const match = articlePath.exec(path);
      return match && dayRE.test(match[2]) && match[2].startsWith(`${match[1]}-`);
    });
}

export function checkArchive(current, prior) {
  requireValue(validState(current), 'Invalid local publication manifest');
  const nextPaths = new Set(current.articles);
  requireValue(nextPaths.has(`${current.latest.slice(0, 7)}/${current.latest}/index.html`), 'Latest date is missing from the built archive');
  if (prior === null) {
    const chineseDates = current.articles.filter(path => /^\d{4}-\d{2}\//.test(path));
    requireValue(current.latest === '2026-11-23' && chineseDates.length === 536,
      'Production archive manifest missing; must not replace a newer or unknown release');
    return;
  }
  requireValue(validState(prior), 'Invalid currently published archive manifest');
  requireValue(prior.latest <= current.latest, 'Do not move the homepage to an older edition');
  const lost = prior.articles.find(path => !nextPaths.has(path));
  requireValue(!lost, `Refusing to unpublish existing archive article: ${lost}`);
}

export async function readBuiltArchive(root, latest, source) {
  const articles = [];
  for (const prefix of prefixes) {
    const base = join(root, prefix);
    const months = await readdir(base, { withFileTypes: true }).catch(error => {
      if (error.code === 'ENOENT' && prefix) return [];
      throw error;
    });
    for (const month of months.filter(entry => entry.isDirectory() && monthRE.test(entry.name))) {
      const days = await readdir(join(base, month.name), { withFileTypes: true });
      for (const day of days.filter(ent => ent.isDirectory() && dayRE.test(ent.name) && ent.name.startsWith(`${month.name}-`))) {
        const key = [prefix, month.name, day.name, 'index.html'].filter(Boolean).join('/');
        const data = await stat(join(root, key)).catch(error => {
          if (error.code === 'ENOENT') return null;
          throw error;
        });
        if (data?.isFile() && data.size > 0) articles.push(key);
      }
    }
  }
  return { version: 1, latest, source, articles: articles.sort() };
}

async function main() {
  const [publicPath, latest, source] = process.argv.slice(2);
  requireValue(publicPath === 'public', 'Unexpected output directory');
  const current = await readBuiltArchive(publicPath, latest, source);
  const response = await fetch(`https://news.aivora.cn/${stateFile}`, {
    redirect: 'error', signal: AbortSignal.timeout(15000), headers: { 'Cache-Control': 'no-cache' },
  });
  requireValue(response.ok || response.status === 404, `Cannot confirm prior live archive: ${response.status}`);
  let prior = null;
  if (response.ok) {
    const reader = response.body.getReader();
    const chunks = [];
    let length = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      length += value.byteLength;
      requireValue(length <= 1024 * 1024, 'Live archive manifest exceeds expected size');
      chunks.push(value);
    }
    prior = JSON.parse(Buffer.concat(chunks).toString('utf8'));
  }
  checkArchive(current, prior);
  await writeFile(join(publicPath, stateFile), JSON.stringify(current) + '\n');
  console.log(`Archive checked: ${current.articles.length} dated pages, ${latest}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
