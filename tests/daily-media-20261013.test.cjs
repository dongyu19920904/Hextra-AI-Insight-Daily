const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const copies = ['daily/2026-10-13.md','content/cn/2026-10/2026-10-13.md','content/cn/_index.md'];

test('October 13 copies include source-backed news, README and quoted fun images', () => {
  for (const file of copies) {
    const text = fs.readFileSync(path.join(root,file),'utf8');
    for (const expected of ['efd3aba7ff/opengraph-image','GettyImages-2264559974-640x426.jpg',
      'glm-legal/img_v3_0216d_9eebe67c','nomevisualizzato-justice-4592723_1920.jpg',
      '/images/daily/2026-10-13/telegram-aigc1024-25740.jpg',
      'open-webui/open-webui/main/demo.png','microsoft/BitNet/main/assets/performance.png',
      'HUa4gztbcAAhp_y?format=jpg&name=orig',
      'introducing-muse-wonder/social/muse-wonder-social-v1.webp']) assert.ok(text.includes(expected), `${file}: ${expected}`);
    assert.doesNotMatch(text,/!\[[^\]]*\]\([^\n]*(?:img.shields.io|profile_images)/);
  }
});

test('October 13 Meta item matches the official agent model announcement', () => {
  for (const file of copies) {
    const text = fs.readFileSync(path.join(root,file),'utf8');
    const item = text.split('### 6. ')[1].split('### 7. ')[0];
    assert.match(item,/个人与专业智能体/);
    assert.match(item,/https:\/\/research.meta.ai\/blog\/muse-wonder/);
    assert.doesNotMatch(item,/音乐生成|音乐 AI/);
  }
});

test('October 13 Telegram archive contains actual nonempty JPEG bytes', () => {
  const bytes = fs.readFileSync(path.join(root,'static/images/daily/2026-10-13/telegram-aigc1024-25740.jpg'));
  assert.ok(bytes.length > 10000);
  assert.deepEqual([...bytes.subarray(0,3)],[255,216,255]);
});
