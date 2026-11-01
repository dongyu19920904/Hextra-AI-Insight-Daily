# AI 日报 SEO/GEO：取证与最小实施方案

日期：2026-11-01（北京时间）。仅限 AI 日报；排名目标不是工程完成承诺。

## 1. 安全基线与真实链路

- 前端原目录 `D:\GitHub\Hextra-AI-Insight-Daily`：`main`，跟踪 `origin/main`，刷新远端后 ahead 0 / behind 2013；存在 promo 模板修改、古诗文件删除和作者资料未跟踪目录，均不触碰。
- 后端原目录 `D:\GitHub\CloudFlare-AI-Insight-Daily`：`main`，ahead 1 / behind 355；已有工作流、prompt、评分、校验和 wrangler 等 13 个修改文件，均不触碰。
- 两个 origin 都是 `dongyu19920904` 的 SSH 仓库；upstream 是原作者，不向 upstream 提交。
- 前端安全 worktree：`D:\CodexWorktrees\Hextra-AI-Insight-Daily-seo-geo-20261101`，`codex/daily-seo-geo-20261101`，基于 `6325dcea7c7d1c3cf1d158865b9dfb1bb6467cf0`。
- 该提交的 [Pages 工作流 41277836066](https://github.com/dongyu19920904/Hextra-AI-Insight-Daily/actions/runs/41277836066) 已成功；直接 HTTP 与浏览器确认首页和 [11 月 1 日期页](https://news.aivora.cn/2026-11/2026-11-01/) 已是今天。
- 后端远端 `6a05fa6a79b152afd0666801a53f139d588668ca`。本轮只读，不建立后端实施分支，不部署 Worker。
- 原链路：现有 Worker/补偿工作流 → `scheduled.js` 提交 `daily/日期.md`、日期页、月目录、中文首页 → 前端 main push → Pages/Hugo。SEO 变化只落在前端模板和回归测试，Markdown 原文不改。
- 公共抓取工具曾返回 10 月 31 日缓存；直接 HTTP 和独立浏览器均返回 11 月 1 日，不能据此指控今天未发布。

## 2. 搜索与后台证据

### 观察条件

2026-11-01 晚间，独立 BrowserOS neo，桌面 Chromium；中文界面、Asia/Shanghai 时区。Google 处于已登录状态，查询带 `hl=zh-CN&pws=0`，页脚显示“不是个性化搜索结果”，IP 推断位置为日本东京都品川区。不是中国大陆匿名样本，不能代表所有人的排名。Bing 使用 `setlang=zh-hans`，账号状态未确认；Bing Webmaster Tools 未登录，只读取公开结果。

### 真实搜索结果

| 引擎 / 查询 | 本次观察的自然结果前三 | 本站 |
| --- | --- | --- |
| Google / AI日报 | news.aibase.com/zh/daily；AIBase 另一条 URL；GitHub 原作者后端仓库 | 首屏提取 9 条普通结果，未见本站 |
| Bing / AI日报 | aidaily.fyi/zh；www.aibase.com/zh/daily；aihot.news/daily | 前 10 条未见本站 |
| Google / AI资讯日报 | Gorden Sun Notion 日报；GitHub 原作者后端；news.aibase.com/zh/daily | 首屏提取 9 条普通结果，未见本站 |
| Bing / AI资讯日报 | aidaily.fyi/zh；AIBase；AIHOT | 前 10 条未见本站 |

AI 概览与普通结果分开观察，不将其中推荐顺序计为自然排名。其他查询及补充观察另见结果记录；不将通用搜索 API 当作 Google/Bing 排名。

### Google Search Console（已有授权，只读）

- 属性：`https://news.aivora.cn/`。
- 已只读核对默认三个月、最近 28 天及前 28 天的点击、曝光、CTR 和位置。详细经营数据仅保留在 `D:\CodexReports\daily-seo-geo-20261101\private-audit-plan.md`，不提交到公开仓库。
- 对比样本很小，不能据此宣称持续降权。比较图的无障碍摘要出现 Invalid Date，日期以日期选择器和已核对的 28 天单期报告为准。
- 首页 URL Inspection 明确显示 `URL is on Google`、`Page is indexed`。这比仅用 `site:` 搜索更能确认首页的索引状态，不等于目标词已有排名。
- 可见 28 天查询表未见“AI日报”；存在品牌等查询。可见查询表不含所有匿名查询，不能把未显示当严格零曝光。
- 页面索引报告标记更新于 2026-10-23：已收录与未收录页面均存在。未收录原因包括已抓取暂未收录、noindex、404、重定向、Google 选择其他 canonical，数量保存在本地证据。
- 报告包含中文、英文、商机和历史账号商机，不能把未收录全部归于本轮 AI 日报，也不能将预期迁移/noindex 页面全部改成 index。
- 样本中有 `/2026-09/2026-09-06/`、`/2026-02/2026-02-08/` 等真实日报。页面已抓取不等于已收录，增加 sitemap 提交不能保证解决。
- 平均位置是已有曝光查询的汇总，不代表“AI日报”的排名。尚无证据支持算法惩罚或“域名失效”的判断。

### HTTP / 页面检查

首页、最新一期、前一期、10 月目录和归档均为 HTTP 200；canonical 自指、robots 为 index/follow。robots.txt 允许通用、Googlebot、Bingbot、OAI-SearchBot 和 PerplexityBot；没有调整训练机器人政策的必要。

`/sitemap.xml` 是有效多语言索引，指向 `/zh/sitemap.xml` 和 `/en/sitemap.xml`；不能因为索引只有几百字节就判定 sitemap 缺页。保留现有路径和策略。

## 3. 竞争页面能学什么

- [AIBase](https://news.aibase.com/zh/daily)：栏目任务清楚，日期/主题摘要指向各期，产品发现入口形成连续阅读；不能据此认定布局或某个标题是其排名原因。
- [GitHub 原项目](https://github.com/justlovemaki/CloudFlare-AI-Insight-Daily)：公开实现和来源说明可核对，是与新闻站不同的搜索意图；不复制其关键词和 README 充当新闻内容。
- [AI Daily FYI](https://aidaily.fyi/zh)：明确当天日期、往期、话题和来源，多种阅读入口；本轮借鉴“当期身份清楚”，不照搬其整套实时数据产品。
- [AIHOT](https://aihot.news/daily)：日/周/月归档和主题入口清楚。本站已有归档，先修归档内的头条文字，而不是再建一套目录。
- [原作者日报](https://hex2077.dev/docs/)：月与日的上下文明确；当前本站视觉已经有自己的成熟基线，本轮不再换字体/配色。

以上为页面观察，不编造竞争流量、外链数量、权威评分或成交表现。外部口碑与独特编辑价值需要长期建设，不能由 schema 代替。

## 4. 已证实的问题与实施优先级

| 级别 | 证据 / 位置 | 最小动作 | 边界与验收 |
| --- | --- | --- | --- |
| P1 | `layouts/archive/list.html` 只匹配 `### 1. [标题](链接)`；现在正文是 `### 1. 纯文本标题` | 兼容两种真实格式，优先呈现当期第一条新闻标题 | 仅归档；不改原文、排序、日期或 URL；检查旧格式、纯文本和无头条 |
| P1 | 日期页 BlogPosting 无 image，OG/Twitter 固定站点 logo；正文已有真实配图 | 只在中文日报日期页从已渲染正文取真实首图，复用到新闻元数据；无图继续保留既有品牌图，不编造照片 | 不新增网络采集/模型调用；不影响其他栏目或正文图片渲染；测试实体转义、无图及跳过非图片媒体 |
| P1 | `daily-masthead.html` 的日期没有 datetime，也不是当期永久链接；编辑说明主要藏在导航 | 中文首页/日期页增加可核查日期、日期页链接及来源/编辑说明入口 | 沿用现有组件和字体，不加卡片、不改变正文；跨月、手机和两个主题回归 |
| P2 | 日期页有 Article 身份但与 WebSite 的实体关联不明确 | 在中文日报元数据中关联同一 WebSite 身份，保留实际作者/运营者与日期 | 只补真实结构，不制造专家资历、FAQPage 或评分 |
| 后续 | 已抓取暂未收录与目标查询曝光低 | 使用本次基线评估独特编辑价值、自然外部引用和意图覆盖 | 不在本轮改生成 prompt、扩大篇幅、批量关键词页或重写历史文章 |

## 5. 文件与不做事项

拟修改：`layouts/archive/list.html`、`layouts/partials/custom/daily-masthead.html`、`layouts/partials/custom/head-end.html`；增加小型日报元数据/头条提取 partial 和针对性测试。仅在实测需要时调整主题 head 的日报专用预览指令，并保证其他页面输出不变。

不改：任何后端文件、定时配置、模型/API、采集/评分/发布校验、正文/FAQ/商品链接、主站、商机、时间线、导航顺序、日夜 CSS、字体、全站 canonical 或 robots/noindex 政策。首页仍展示当期全文，日期页仍保留独立 URL；是否调整两者重复结构另需证据和批准。

## 6. 验证、发布与回滚

- [x] 保护原始工作区，核实远端和线上日期，建立独立 worktree。
- [x] 初始 Node 检查 37 通过、0 失败、1 个构建 HTML 检查待 Hugo 构建后补跑。
- [x] 留存基线 Hugo 输出，再补测试与最小实现；本次输出/浏览器缓存置于 D 盘。
- [x] 现有全量 Node 测试 + 新测试 + production Hugo 构建，45/45 通过、零跳过。
- [x] 对比最新/前期/历史/归档及共享栏目 HTML；抽样英文首页、商机、时间线、月份、关于、站点地图及 robots 字节不变。归档模板用于两种语言的日报归档，不改其他栏目正文。
- [x] 1440px / 390px 日夜检查通过；手机浏览器报告约 391 CSS px，截图按 390px 输出，无横向内容溢出。现有第一张正文图解码成功。纯前端例外，不调用模型重新生成。
- [ ] 单独提交，SSH 正常快进发布到用户前端 main；如远端有新日报，合并最新远端并重验，不覆盖自动生成的文章。
- [ ] 跟踪原 Pages 工作流与线上 HTML，不把 CI 成功等同于排名改善。仅使用既有、适用的索引通知，禁止批量轰炸。
- [ ] 结果报告写明提交、页面、验证、未测项及回滚点；不创建后台自动化。

回滚：单独 revert 本轮前端实施提交并沿原 Pages 流程发布；不 reset main，不回退新日报数据或后端稳定提交。保留本次审计、测试和必要截图；仅清理本次临时构建。

## 7. 后续测量

第 7/28/56 天以同样环境复查核心查询、首页/日期页曝光和点击、收录样本、站内到商店的现有出站点击；AI 引用单独记录。无 Bing 后台授权时标为未测，不将引用次数当自然排名或订单。首要增长限制仍可能是内容差异化和外部认可，不能承诺以上小修直接带来第一。

官方依据：[Google AI 搜索基础要求](https://developers.google.com/search/docs/appearance/ai-features)、[Bing AI Performance 指标边界](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/)。
