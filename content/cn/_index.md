---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/11/18
breadcrumbs: false
next: /2026-11/2026-11-18
description: "OpenAI 发布 GPT-6.2 双版本，AMD 以 82 亿美元完成收购 World Labs，李飞飞正式出任执行副总裁。 模型成本每季度降约 47%，各家同步把更多能力开放给 API，整个生态正在把\"用 AI\"的门槛往下压。 今天先看 DeepSeek API 开放清单和 FrontierH…"
cascade:
  type: docs
---

## **今日摘要**

```
OpenAI 发布 GPT-6.2 双版本，AMD 以 82 亿美元完成收购 World Labs，李飞飞正式出任执行副总裁。
模型成本每季度降约 47%，各家同步把更多能力开放给 API，整个生态正在把"用 AI"的门槛往下压。
今天先看 DeepSeek API 开放清单和 FrontierHarness 评测数据，再决定现有编程 Agent 组合要不要调整。
```

## **🔥 今日焦点 TOP 10**

### 1. GPT-6.2 双模型发布，主打专业与效率

**GPT-6.2 正式上线。** [OpenAI 官方发布了 Astra 和 Sol 两个版本](https://openai.com/index/introducing-gpt-6-2-astra-sol)，覆盖 ChatGPT Work、Codex 和 API 三个接入渠道。两款模型均强调 **更低 token 成本**，Astra 侧重专业输出与编程，Sol 主打超快速响应🚀。Sam Altman 特别点名 6.2 Sol ultrafast，称其为日常使用的首选。

![GPT-6.2 发布公告](https://i.imgur.com/PW1vRTV.png "GPT-6.2 Astra 和 Sol 发布公告")

---

### 2. 李飞飞正式加入 AMD 任执行副总裁

**World Labs 被 AMD 收购交割完成。** [李飞飞正式加入 AMD 任执行副总裁](https://www.36kr.com/p/4073110549517189)，**AMD** 于 11 月 13 日完成全部交割，向 SEC 提交了 Form 8-K/A 补充文件予以确认。交易对价约 **82 亿美元全股票**，前后仅用 46 天完成签约到交割。李飞飞出任 AMD 执行副总裁兼首席科学家，直接向苏姿丰汇报。

![苏姿丰与李飞飞同框](https://img.36krcdn.com/hsossms/20261117/v2_f4cfc50064054b1ea80c82623d16101a@5091053_oswg1260257oswg1080oswg1161_img_000?x-oss-process=image/format,jpg/interlace,1 "苏姿丰与李飞飞在 World Labs 庆祝现场")

---

### 3. DeepSeek 全家桶 API 开放，联网搜索可直接调用

**DeepSeek 把 App 内能力全部 API 化。** [掘金这篇整理](https://juejin.cn/post/7708954185542172710)列出了**开放的核心能力**：联网搜索、深度思考、文件输入、**OCR、ASR、TTS**，以及内容安全审核🔒。DeepSeek 同时开源了一个可用 API Key 直接复刻的网页版前端。开发者现在可以通过 Anthropic Messages、OpenAI Responses 或 OpenAI Chat Completions 三种协议接入。

![DeepSeek 全家桶 API 能力列表](https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/ffaac5eab87842df9d0ddfa68259912d~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5rKJ6buY546L5LqM:q75.awebp?rk3s=f64ab15b&x-expires=1795485949&x-signature=cYRroK1J%2BdtG1y41GSHhUm6Wf38%3D "DeepSeek 全家桶 API 能力一览")

---

### 4. FrontierHarness v1.1：换模型时也该换 Harness

**同一 Harness 换模型后排名剧烈波动。** [FrontierHarness Eval v1.1 报告](https://runta.com/blog/introducing-frontierharness-eval-v1-1/)用 83B token、27,**280 次** Agent 运行完成了 22 个 Harness × 5 个模型 × 62 项任务的测试矩阵。核心发现是：**Codex CLI** 在 GLM-5.3 下排成本第 1，换到 Kimi-K3 后跌至第 16。中位数 Harness 在不同模型间的成本排名移动了 11 位。正在选型编程 Agent 组合的团队值得参考这份数据。


![FrontierHarness v1.1：换模型时也该换 Harness · 原文配图](https://runta.com/blog/introducing-frontierharness-eval-v1-1/harness-scatter-all-models.png "FrontierHarness v1.1：换模型时也该换 Harness · 原文配图")

---

### 5. 自然意志举办国内首次具身智能线下测试活动

**国内具身智能公司首次举办公开体验活动。** [即刻用户曼祺_火柴Q 现场记录](https://m.okjike.com/originalPosts/6afc1414136b2761c6c80a4f)显示，自然意志机器人完成了从手指摘戒指、跨手套戴，到用工具碰远处物体等精细操作演示。机器人在任务失败后会**自动纠错重试**，表现出一定规划能力。活动因场地限制有人数上限，后续还会陆续举办，感兴趣可在报名链接申请。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://videocdnv2.ruguoapp.com/ljKyzuOi-CCJiMi0Xdq133dz24wH.mp4?sign=8f4f7383691c006517b21215a867e4a6&t=6afcf562"></video>

---

### 6. AI 模型成本每季度下降约 47%

**模型调用成本的下降速度超过大多数技术曲线。** [Epoch AI 数据经卫夕整理转述](https://m.okjike.com/originalPosts/6afba0ab136b2761c6bb2888)显示，2023 年以来同等智能水平的模型成本每季度降约 **47%**，折算为年度降幅**约 13 倍**。这一速度比 DNA 测序快 4 倍，比计算芯片快 6 倍。正在评估 AI 工具预算的团队，今年的成本假设可能已经明显过时。

![模型成本下降速度对比图](https://cdnv2.ruguoapp.com/FocuUtlzPyVxqVDnWbIOBl872e95v3.png "Epoch AI：AI 模型成本下降速度与其他技术对比")

---

### 7. Google AI Studio 支持一键生成全栈 Android 应用

**Google AI Studio 新增全栈 Android 应用构建能力。** [BestBlogs.dev 整理的功能说明](https://www.bestblogs.dev/en/article/508849646a?utm_source=rss&utm_medium=feed&utm_campaign=resources&entry=rss_article_item)显示，开发者输入一条提示词即可生成可用于生产环境的 Kotlin 应用，自动配备 Cloud Firestore 数据库和 Google Sign-In 鉴权。新增功能还包括**支持实时音频**的高清模拟器、截图一键调试和直接发布到 Google Play。尚无官方公告明确具体**上线时间和地区限制**。


![Google AI Studio 支持一键生成全栈 Android 应用 · 原文封面](https://www.bestblogs.dev/en/article/508849646a/opengraph-image?696e70e5d7b1d782 "Google AI Studio 支持一键生成全栈 Android 应用 · 原文封面")

---

### 8. Sam Altman 点名 6.2 Sol ultrafast 为日常首选

**GPT-6.2 Sol 的超快速模式已扩展至 Pro 200 计划。** [Sam Altman 在 Twitter 表示](https://x.com/sama/status/2122798039899263456)，6.2 Sol ultrafast 是他"**日常大多数事情**"的首选模型，并转发了对 Pro 200 扩展 ultrafast 的确认。与候选 1 形成补充：具体到订阅层级，**Pro 200 用户** 现在可以使用 Sol 的超快速版本。已订阅 Pro 200 的用户今天可以切换试用。

---

### 9. LobeHub 在 Agent 中引入经验层沉淀机制

**Agent 经验无法跨任务保留的问题有了新思路。** [即刻用户 Max_means_best 分享](https://m.okjike.com/originalPosts/6afbdf24e04066f7ed094998)了 LobeHub 自进化功能的设计：让 Agent 把任务中的成功路径和失败教训写入一个 **Experience Layer（经验层）**，而不仅依赖 Skill 文件。测试显示，这套机制能处理之前难以解决的部分任务类型。目前这一功能仍在迭代中，作者表示尚未**覆盖所有任务场景**。

![LobeHub 经验层架构示意](https://cdnv2.ruguoapp.com/FsBtSIbbx0JyQXWbUo8Avi_2baDdv3.png "LobeHub Agent 自进化与经验层机制示意")

---

### 10. 用户批评 AI 产品体验因更新而变形

**GPT 图像生成效果的前后落差引发用户质疑。** [用户批评 AI 产品体验因更新而变形](https://m.okjike.com/originalPosts/6afc46301bfae23f38ef86fc)附上对比截图，指出当前 GPT 生成的概念图质量"**还不如代码画**"，并提出购买时的产品与更新后的产品已不是同一个东西。这个抱怨指向一个已有多人提及的问题：**模型能力在无通知的情况下被调整**，用户缺乏版本固定选项。

![GPT 图像生成前后对比](https://cdnv2.ruguoapp.com/FnrF6BXduJxwLs11MncQOrbqgfz6v3.png "用户对比 GPT 生成图像质量变化")

---

## **⌘ 开源 TOP 项目**

### elementalsouls/Claude-BugHunter：漏洞挖掘技能包

**专为红队和漏洞赏金设计的 Claude Code 技能集。** [elementalsouls/Claude-BugHunter 已公开全部 82 项技能和 15 条斜杠命令](https://github.com/elementalsouls/Claude-BugHunter)，内置 681 个已披露漏洞报告模式，覆盖 24 类核心漏洞类别。今日新增 **1005 颗 Stars**，累计 9287 颗。适合做外部渗透测试或漏洞赏金的安全研究者，使用前需确认目标在授权范围内。

---

### cursor/plugins：Cursor 官方插件规范

**Cursor 官方开放了插件规范和标准插件仓库。** [cursor/plugins 是 Cursor 团队维护的 TypeScript 仓库](https://github.com/cursor/plugins)，包含官方插件规范文档和参考实现，今日新增 **201 颗 Stars**，累计 16900 颗。开发者现在可以按照规范为 Cursor 编写自定义插件，扩展 AI 编辑器的集成能力🔌。

---

### obra/superpowers：智能体开发方法论框架

**一套面向 Agent 软件开发的可操作技能框架。** [obra/superpowers 以 Shell 脚本为主](https://github.com/obra/superpowers)，提供一套可直接落地的智能体开发方法论，今日新增 **1917 颗 Stars**，累计星标已达 319329 颗，热度显著。适合希望在 AI 辅助软件开发工作流中引入更系统化实践的工程师参考。

---
## **◉ 社媒精选**

### T3 Code 用户：界面比官方客户端更省心

**开发者向阳乔木分享了 T3 Code 的日常使用体验。** [他的推文](https://x.com/vista8/status/2122598270920966380)提到，T3 Code 支持切换调用不同 Harness，包括 Codex 和 Claude Code，他目前主要通过配置 CC Switch 与官方订阅分开使用。同时他购买了 Factory AI 订阅用于隔离风险。谷歌模型本次获得他的积极评价，但 Gemini 客户端 Antigravity 被评为"垃圾"。

![T3 Code 界面截图](https://pbs.twimg.com/media/HXT7pP2aAAAoPfJ.jpg "向阳乔木分享的 T3 Code 操作界面")

---

### 从 Claude 常驻 Agent 指南学到的省 token 技巧

**卡尔的AI沃茨把 Anthropic 的常驻 Agent 设计拆成了五个组件。** [即刻这条帖子](https://m.okjike.com/originalPosts/6afbda91136b2761c6c80a4f)描述了一个具体场景：他的 Grok Bot 升级到 Super 后，75% 的额度被空转定时任务消耗。他参考 Anthropic 新出的常驻 Agent 指南，将"事件收件箱 + 定时器 + 状态感知"的组件化思路移植到其他 Personal Agent，最终为 Grok Bot **省下了 55% 的使用额度**。运行多个常驻 Agent 的用户可以参考这个拆解思路优化轮询频率。

---

## **😄 AI趣闻**

### 省了55%，代价是先读懂一份官方指南

Grok Bot 升了 **Super** 档，15倍额度，结果发现 **75%** 都烧在了"没动静也要认真跑一遍"的定时任务上——没任何更新，它还是会花半小时跑完，最后郑重交出一份「[暂无重大更新，以下是目前进展概览](https://m.okjike.com/originalPosts/6afbda91136b2761c6c1e3f9)」。后来照着 Anthropic 的常驻智能体指南，把"没变化就别动"的逻辑抄进提示词，额度掉了 **55%**。省钱秘籍的第一步，是先承认自己之前白花了多少钱。

## **❓ 相关问题**

### GPT-6.2 发布，Codex 现在更适合做哪类编程任务？

**可以先从自动补全或代码审查入手跑一个小任务。** [OpenAI 的这次模型升级](https://openai.com/index/introducing-gpt-6-2-astra-sol)强调了 Codex 在编程和效率上的改进。想通过 API 接入 Codex 试用的，可看[爱窝啦·AI账号店的 CodeX 中转](https://www.aivora.cn/products/codex-relay-credit-packages)，新账号或续费均可。