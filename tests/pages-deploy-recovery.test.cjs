const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');
const vm = require('node:vm');

const workflow = fs.readFileSync(path.join(__dirname, '../.github/workflows/pages.yaml'), 'utf8');

async function checkDeployment({ status = 'deployment_cancelled', httpStatus = 200, error, invalidJson = false } = {}) {
  const match = workflow.match(/node <<'PAGES_RECOVERY'\r?\n([\s\S]*?)\r?\n\s*PAGES_RECOVERY/);
  assert.ok(match, 'The real workflow recovery script must be exercised');
  const script = match[1].replace(/^          /gm, '');
  const writes = [];
  const requests = [];
  const messages = [];
  const process = {
    env: {
      GITHUB_API_URL: 'https://api.github.com',
      GITHUB_REPOSITORY: 'owner/daily',
      GITHUB_SHA: 'abc123',
      GITHUB_OUTPUT: '/mock/output',
      GH_TOKEN: 'test-token',
    },
    exitCode: 0,
  };
  await vm.runInNewContext(script, {
    process,
    AbortSignal,
    console: { log: (message) => messages.push(message), error: (message) => messages.push(message) },
    require: (name) => {
      assert.equal(name, 'node:fs');
      return { appendFileSync: (file, value) => writes.push({ file, value }) };
    },
    fetch: async (url, options) => {
      requests.push({ url, options });
      if (error) throw new Error(error);
      return {
        ok: httpStatus >= 200 && httpStatus < 300,
        status: httpStatus,
        json: async () => {
          if (invalidJson) throw new Error('Invalid JSON');
          return { status };
        },
      };
    },
  });
  return { process, writes, requests, messages };
}

test('a cancelled Pages deployment enables exactly one retry of the existing artifact', async () => {
  const result = await checkDeployment();
  assert.equal(result.process.exitCode, 0);
  assert.deepEqual(result.writes, [{ file: '/mock/output', value: 'retry=true\n' }]);
  assert.equal(result.requests.length, 1);
  assert.equal(result.requests[0].url, 'https://api.github.com/repos/owner/daily/pages/deployments/abc123');
  assert.equal(result.requests[0].options.headers.Authorization, 'Bearer test-token');
  assert.ok(result.requests[0].options.signal instanceof AbortSignal);
  assert.ok(!result.messages.some((message) => message.includes('test-token')));
});

test('an already successful Pages deployment is not submitted again', async () => {
  const result = await checkDeployment({ status: 'succeed' });
  assert.equal(result.process.exitCode, 0);
  assert.deepEqual(result.writes, []);
});

for (const status of ['deployment_failed', 'deployment_perms_error', 'deployment_content_failed', 'deployment_lost', 'syncing_files', 'deployment_queued', undefined]) {
  test(`Pages status ${status} fails without submitting another deployment`, async () => {
    const result = await checkDeployment({ status: status ?? null });
    assert.equal(result.process.exitCode, 1);
    assert.deepEqual(result.writes, []);
  });
}

for (const httpStatus of [401, 403, 404, 500]) {
  test(`status lookup HTTP ${httpStatus} fails without retry or permission escalation`, async () => {
    const result = await checkDeployment({ httpStatus });
    assert.equal(result.process.exitCode, 1);
    assert.deepEqual(result.writes, []);
  });
}

test('network and malformed status responses fail closed', async () => {
  for (const options of [{ error: 'Read timed out' }, { invalidJson: true }]) {
    const result = await checkDeployment(options);
    assert.equal(result.process.exitCode, 1);
    assert.deepEqual(result.writes, []);
    assert.equal(result.requests.length, 1);
  }
});

test('workflow only checks a failed deployment and never retries a cancelled workflow', () => {
  assert.match(workflow, /id: deployment\s+continue-on-error: true\s+uses: actions\/deploy-pages@v4/);
  assert.match(workflow, /id: pages_recovery\s+if: \$\{\{ !cancelled\(\) && steps\.deployment\.outcome == 'failure' \}\}/);
  assert.match(workflow, /id: deployment_retry\s+if: \$\{\{ !cancelled\(\) && steps\.pages_recovery\.outputs\.retry == 'true' \}\}/);
  assert.equal((workflow.match(/uses: actions\/deploy-pages@v4/g) || []).length, 2);
  assert.match(workflow, /url: \$\{\{ steps\.deployment_retry\.outputs\.page_url \|\| steps\.deployment\.outputs\.page_url \}\}/);
  assert.match(workflow, /timeout-minutes: 25/);
  assert.match(workflow, /AbortSignal\.timeout\(15000\)/);
});

test('recovery keeps existing schedule, single-deployment concurrency and permissions', () => {
  assert.equal((workflow.match(/- cron:/g) || []).length, 1);
  assert.match(workflow, /- cron: '0 \*\/4 \* \* \*'/);
  assert.match(workflow, /group: "pages"\s+cancel-in-progress: false/);
  assert.match(workflow, /contents: read\s+pages: write\s+id-token: write/);
  const deploy = workflow.slice(workflow.indexOf('  deploy:'));
  assert.match(deploy, /needs: build/);
  assert.doesNotMatch(deploy, /wrangler|workflow_dispatch|git push|checkout|ANTHROPIC|OPENAI/);
});
