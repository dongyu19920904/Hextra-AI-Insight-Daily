# AI 日报与 AI 商机 SEO 实施方案（2026-09-20）

## 1. 范围与基线

- 仅修改 `Hextra-AI-Insight-Daily` 与 `CloudFlare-AI-Insight-Daily`。
- 内容范围仅限 AI 日报与 `/opportunity/` AI 商机。
- 不修改 `www.aivora.cn`、AI 账号商机、AI 生命延续学、个人主页、AI 雷达和 AI 时间线。
- 两个原始工作目录均有分叉或未提交改动。本轮从最新 `origin/main` 创建 D 盘独立 worktree，原目录不做任何改写。
- 线上抽样基线：日报日期页已有 canonical、独立 description、BlogPosting/Breadcrumb 结构化数据和可抓取正文；主要短板是搜索标题过于通用、AI 商机 description 固定、通用 FAQ 被强制补写，以及侧栏在每页输出过多历史日期节点。

## 2. 目标

1. 保持每天定时生成和现有内容路径稳定。
2. 让搜索标题直接说明当天最重要的真实主题，不生成关键词堆砌标题。
3. 让 AI 商机 description 反映当天直接结论，而不是每天使用同一句模板。
4. FAQ 只在存在真实问题和足够来源时发布；缺少合格 FAQ 时不补通用模板，也不阻塞主体日报。
5. 仅渲染当前展开月份的日期子树，降低日期页 HTML/DOM 体积，同时保留月份入口和当前月份浏览能力。

## 3. 最小修改清单

### 后端

- `src/contentUtils.js`
  - 增加确定性的日报 SEO 标题、商机 SEO 标题和商机 description 提取函数。
  - 只从已生成正文的真实标题/直接结论中提取，不让模型生成 URL 或额外事实。
- `src/handlers/scheduled.js`
  - 日报与 AI 商机提交时使用上述元数据函数。
  - 同步覆盖当前主链路和兼容链路；不修改 schedule routing、cron、账号商机提交函数。
  - repair 提示词将 FAQ 从“强制”改为“有官方或一手证据才写”。
- `src/prompt/summarizationPromptStepZero.js`
  - FAQ 改为可选；禁止用重复通用问答凑 SEO 页面。
  - 社交来源中的收入、市场份额、估值、融资、价格、额度和政策数字不得直接升级为确定事实。
- `src/dailyMarkdownAssembly.js`、`src/dailySectionSanitizer.js`
  - 停止在模型漏写 FAQ 时追加固定模板；保留对已有 FAQ 的清理和主站链接边界。
- `src/publishValidation.js`
  - FAQ 缺失不再是发布失败；FAQ 存在时仍检查内容和链接边界。
- 对应 Node tests
  - 覆盖元数据提取、无 FAQ 可发布、已有 FAQ 仍受约束，以及账号商机代码未被改动。

### 前端

- `themes/hextra/layouts/_partials/sidebar.html`
  - 归档月份只有在当前页所属月份或真正活动节点时才输出日期子树。
  - 非当前月份仍显示月份链接，点击可进入月目录；不删除历史内容，不修改 URL。
- `tests/sidebar-archive-pruning.test.cjs`
  - 锁定归档月份延迟展开逻辑，避免后续主题升级恢复全量 DOM。

## 4. 明确不做

- 不批量创建关键词页、标签页、FAQ 页或机器翻译页。
- 不修改现有正文视觉、日夜主题、图片代理、搜索和导航顺序。
- 不修改 AI 账号商机 prompt、评分、校验、发布或迁移逻辑。
- 不增加新的模型调用、网络抓取或 Cloudflare 定时任务。
- 不把主站链接塞进每个栏目；全局导航和页脚保持现状。

## 5. 验证顺序

1. 运行后端全量 Node tests，重点检查日报、AI 商机、schedule routing 和失败隔离。
2. 运行前端现有 Node tests。
3. 使用 Hugo production build，并检查最新日报与最新商机页面：
   - canonical、description、结构化数据存在；
   - 页面仅有一个可见 H1；
   - 历史月份入口仍存在，非当前月份不再内嵌全部日期；
   - HTML 体积较基线明显下降。
4. 用固定 Markdown 样本验证 SEO 标题和 description，不触发正式日报生成，不覆盖线上内容。
5. 仅在上述验证通过后提交并通过 SSH 推送。部署沿用仓库原流程，不手动改线上内容。

## 6. 风险与回滚

- 风险：侧栏不再允许在日期页直接展开所有历史月份。缓解方式：月份链接、归档页和站内搜索继续可用，当前月份日期保持可见。
- 风险：标题提取遇到异常正文。缓解方式：保留当前固定标题作为确定性回退。
- 风险：FAQ 省略后少一次正文主站链接。该变化是有意的，避免近似页面和不相关导流；全局导航与页脚品牌入口仍保留。
- 回滚点：前后端各自独立提交，可单独回滚；不需要改数据库、Cloudflare secret 或内容路径。
