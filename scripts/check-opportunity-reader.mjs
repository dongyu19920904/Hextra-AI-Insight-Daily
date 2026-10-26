import assert from 'node:assert/strict';
import http from 'node:http';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { readFile, stat, mkdir, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const roots = {
  before: process.argv[2], after: process.argv[3], sample: process.argv[4],
};
for (const root of Object.values(roots)) assert.ok(path.resolve(root || '').startsWith('D:\\CodexCache\\runs\\opportunity-editorial-20261026-'));
const output = path.resolve(process.argv[5] || 'D:/CodexReports/opportunity-editorial-20261026');
assert.ok(output.startsWith('D:\\CodexReports\\opportunity-editorial-20261026'));
await mkdir(output, { recursive: true });
const sourceRoot = new URL('../', import.meta.url);
const baseline = 'db613297d419ce0b8378a85f8e48414ffbd30d86';
for (const file of ['assets/css/custom.css', 'layouts/docs/single.html', 'layouts/partials/custom/daily-masthead.html', 'layouts/partials/custom/head-end.html']) {
  const old = execFileSync('git', ['show', `${baseline}:${file}`], { cwd: sourceRoot, encoding: 'utf8' }).replaceAll('\r\n', '\n');
  assert.equal((await readFile(new URL(file, sourceRoot), 'utf8')).replaceAll('\r\n', '\n'), old, file);
}
const css = await readFile(new URL('../assets/css/opportunity-reader.css', import.meta.url), 'utf8');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.woff2': 'font/woff2', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg' };
const servers = [];
async function serve(root) {
  const server = http.createServer(async (request, response) => {
    try {
      const route = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
      let file = path.resolve(root, '.' + route);
      assert.ok(file === root || file.startsWith(root + path.sep));
      if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
      response.writeHead(200, { 'content-type': types[path.extname(file)] || 'application/octet-stream' });
      response.end(await readFile(file));
    } catch { response.writeHead(404); response.end('Not found'); }
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  servers.push(server);
  return `http://127.0.0.1:${server.address().port}`;
}

const hashes = [];
const protectedPages = ['index.html', '2026-10/2026-10-26/index.html', '2026-10/2026-10-25/index.html', 'timeline/index.html', 'account-opportunity/index.html', 'robots.txt', 'sitemap.xml'];
for (const file of protectedPages) {
  const before = await readFile(path.join(roots.before, file));
  const after = await readFile(path.join(roots.after, file));
  assert.ok(before.equals(after), `Main daily protected output changed: ${file}`);
  hashes.push({ file, sha256: createHash('sha256').update(after).digest('hex') });
}
process.env.CAMOUFOX_INSTALL_DIR = 'D:/CodexTools/Browsers/Camoufox';
const { Camoufox } = await import('file:///D:/CodexTools/Browsers/camofox-browser/node_modules/camoufox-js/dist/index.js');
const checks = [];
let browser;
try {
  const origins = Object.fromEntries(await Promise.all(Object.entries(roots).map(async ([name, root]) => [name, await serve(path.resolve(root))])));
  browser = await Camoufox({ executable_path: 'D:/CodexTools/Browsers/Camoufox/camoufox.exe', headless: true, exclude_addons: ['UBO'], os: 'windows', locale: 'zh-CN', window: [1440, 1000], timeout: 45000 });
  for (const width of [1440, 390]) for (const dark of [false, true]) {
    const context = await browser.newContext({ viewport: { width, height: 1000 }, colorScheme: dark ? 'dark' : 'light' });
    await context.addInitScript((isDark) => localStorage.setItem('color-theme', isDark ? 'dark' : 'light'), dark);
    const page = await context.newPage();
    for (const [name, origin] of Object.entries(origins)) {
      const response = await page.goto(origin + '/opportunity/2026-10/2026-10-25/', { waitUntil: 'domcontentloaded', timeout: 30000 });
      assert.equal(response.status(), 200);
      await page.evaluate(() => document.fonts.ready);
      await page.waitForFunction((isDark) => document.documentElement.classList.contains('dark') === isDark, dark);
      const metrics = await page.evaluate(() => {
        const summary = document.getElementById('直接结论')?.closest('h2')?.nextElementSibling;
        const body = document.querySelector('.ai-opportunity-content');
        const overflowing = [...body.querySelectorAll('h2,h3,p,li,a')].filter((el) => el.scrollWidth > el.clientWidth + 2 && getComputedStyle(el).display !== 'inline').map((el) => el.textContent.slice(0, 60));
        return { h1: document.querySelectorAll('h1').length, width: innerWidth, documentWidth: document.documentElement.scrollWidth, overflowing,
          summaryColumns: getComputedStyle(summary).gridTemplateColumns, bodyFont: getComputedStyle(body).fontFamily, bodyText: body.textContent,
          bodyTextLength: body.textContent.length,
          canonical: document.querySelector('link[rel="canonical"]')?.href,
          schema: [...document.querySelectorAll('script[type="application/ld+json"]')].map((el) => JSON.parse(el.textContent)['@type']),
          sourceLinks: [...body.querySelectorAll('a[href^="https://github.com/"]')].map((el) => ({ label: el.textContent, url: el.href, underline: getComputedStyle(el).textDecorationLine })),
          stylesheet: [...document.querySelectorAll('link[rel="stylesheet"]')].some((el) => el.href.includes('opportunity-reader.')) };
      });
      assert.equal(metrics.h1, 1);
      assert.ok(metrics.documentWidth <= width, JSON.stringify(metrics));
      assert.deepEqual(metrics.overflowing, []);
      assert.equal(metrics.canonical, 'https://news.aivora.cn/opportunity/2026-10/2026-10-25/');
      assert.ok(metrics.schema.includes('BlogPosting'));
      assert.equal(metrics.stylesheet, name !== 'before');
      if (name !== 'before') assert.equal(metrics.summaryColumns.split(' ').length, width > 640 ? 2 : 1);
      assert.equal(metrics.sourceLinks.length, 2);
      assert.ok(metrics.sourceLinks.every((link) => link.underline.includes('underline')));
      if (name === 'sample') {
        assert.match(metrics.bodyText, /是否有付费意向/);
        assert.doesNotMatch(metrics.bodyText, /有本次候选输入未提供付费意向/);
      }
      const image = `${name}-${width}-${dark ? 'dark' : 'light'}.png`;
      await page.screenshot({ path: path.join(output, image), fullPage: false });
      const mainHeading = page.locator('h2').filter({ has: page.locator('#今日主推') });
      await mainHeading.scrollIntoViewIfNeeded();
      await page.screenshot({ path: path.join(output, `detail-${image}`) });
      delete metrics.bodyText;
      checks.push({ name, width, dark, ...metrics, image });
    }
    await page.goto(origins.after + '/2026-10/2026-10-26/', { waitUntil: 'domcontentloaded' });
    const isolation = await page.evaluate((sourceCss) => {
      const style = document.createElement('style'); style.textContent = sourceCss; document.head.append(style);
      const selectors = [];
      function visit(rules) { for (const rule of rules) { if (rule.selectorText) selectors.push(rule.selectorText); if (rule.cssRules) visit(rule.cssRules); } }
      visit(style.sheet.cssRules);
      const matches = selectors.filter((selector) => document.querySelector(selector));
      style.remove();
      return { matches, loaded: [...document.querySelectorAll('link[rel="stylesheet"]')].some((el) => el.href.includes('opportunity-reader.')) };
    }, css);
    assert.deepEqual(isolation.matches, []);
    assert.equal(isolation.loaded, false);
    checks.push({ name: 'main-daily-isolation', width, dark, ...isolation });
    await context.close();
  }
  await writeFile(path.join(output, 'verification.json'), JSON.stringify({ hashes, checks, paidCalls: 0, productionWrites: 0 }, null, 2));
  console.log(JSON.stringify({ protectedOutputsUnchanged: hashes.length, browserChecks: checks.length, screenshots: 24, paidCalls: 0, productionWrites: 0 }));
} finally {
  await browser?.close();
  await Promise.all(servers.map((server) => new Promise((resolve) => server.close(resolve))));
}
