# AI 商机阅读体验：2026-10-26

## 边界

前端基线 `db613297d419ce0b8378a85f8e48414ffbd30d86`，分支 `codex/opportunity-editorial-20261026`。只改商机 masthead 的样式加载和一份商机作用域 CSS。主日报、账号商机迁移入口、导航、日期页内容、共享主题、图片/链接 hook、SEO/schema、robots/sitemap 均未修改。

## 具体改动

- 继续使用现有 masthead、字体、日夜变量、黄色判断与关键词、蓝色带下划线的证据链接，不叠加完整正文皮肤。
- 商机摘要桌面双列、390px 单列；主判断先读，行动和停止条件随后。
- 六组字段使用较安静的独立标签与细分隔，保留正文关键词，不把整页变成粗体字段墙。
- 标题宽度和字号受约束；长链接可换行；不增加脚本或运行时依赖。
- CSS 仅由 `layouts/partials/custom/opportunity-masthead.html` 经 Hugo resources/minify/fingerprint 加载；所有规则都以 `.ai-opportunity-layout` 为作用域。
- 标题锚点实际位于 h2 内部的 span，因此使用 `h2:has(> #直接结论)`，不假定 id 在 h2 本身。当前浏览器支持此选择器；旧浏览器不支持时回到现有单列摘要，不影响正文。

## 验收

- 常规前端测试：36 通过，1 个需显式指定构建目录的既有检查默认跳过；本轮新增 2 项均通过。
- Hugo 0.147.9 基线、修改后和离线样稿构建成功。
- 启用旧构建后合并检查时，主页已有 `<h2><figure>` 嵌套导致失败；同一检查在修改前也失败。没有为本轮商机改动而修主日报或放宽原断言。
- 浏览器 16 场景通过，24 张截图；覆盖桌面/390px、双主题、前后与样稿，手工查看手机双主题及正文截图，未发现溢出或遮挡。
- 7 份主日报等受保护构建输出逐字节一致。新 CSS 未在主日报加载，所有新选择器对主日报 DOM 命中为零。

产物目录：`D:\CodexReports\opportunity-editorial-20261026`。其中 `sample-390-light.png` / `sample-390-dark.png` 为离线样稿手机首屏，`detail-sample-*` 为正文，`verification.json` 为逐项指标。不是线上新文章。

## 联动与发布

配套后端工作区：`D:\CodexWorktrees\CloudFlare-AI-Insight-Daily-opportunity-20261026`。完整方案、资源选择、样稿、真实商机 handler mock 验证见其 `docs/opportunity/`。

本轮没有推送、部署或付费模型生成。账号商机实际已迁至供货雷达，不在当前范围。后续发布仍须先审阅商机真实预览，并处理或明确记录已有构建后检查问题；不能以本轮样式优化为理由触发主日报生成或改模型线路。

复验：用 D 盘缓存包装器执行 `node --test tests/*.test.cjs`，再使用现有 Hugo。`scripts/check-opportunity-reader.mjs` 接收 before/after/sample 三个 D 盘构建目录及报告目录，启动仅回环临时服务器，结束后自动关闭浏览器和服务。样稿的多语言 contentDir 覆盖只存在 D 盘临时 JSON，生产 `hugo.yaml` 不变。

清理限制：本次四个 `D:\CodexCache\runs\opportunity-editorial-20261026-*` 构建/内容目录的删除命令被工具策略拒绝，未改换方式重试，目录暂留 D 盘。报告与截图属于交付物，继续保留；没有为本任务修改全局缓存位置或清理未知目录。
