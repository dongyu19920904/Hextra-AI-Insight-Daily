---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/9/17
breadcrumbs: false
next: /2026-09/2026-09-17
description: "GPT-6 Astra 在 ARC-AGI-3 半私有测试集拿到 99.9% 后测试方案作废,混合架构在具身仿真中拉开 64% 差距。 语音推理、判断型模型、团队协作智能体和本地 RSI 部署正在把 AI 从单点演示拆解到具体工作环节。 今天先看 TOP 10 里的混合架构测评和 TypeSafe…"
cascade:
  type: docs
---

## **今日摘要**

```
GPT-6 Astra 在 ARC-AGI-3 半私有测试集拿到 99.9% 后测试方案作废,混合架构在具身仿真中拉开 64% 差距。
语音推理、判断型模型、团队协作智能体和本地 RSI 部署正在把 AI 从单点演示拆解到具体工作环节。
今天先看 TOP 10 里的混合架构测评和 TypeSafe AI 的 Jev 模型,再决定现有任务是否需要换架构或专用判断层。
```

## **🔥 今日焦点 TOP 10**

### 1. GPT-6 Astra 在 ARC-AGI 测试中接近满分

**测试接近饱和。** **GPT-6** Astra 在 [ARC-AGI-3 半私有测试集上拿到 99.9% 成绩](https://www.36kr.com/p/3985494895115010)，OpenAI 称已完全饱和。ARC Prize 创始人宣布原定方案作废，需要重新拟题。下一阶段将考察模型能否**发明新概念**，而不只是识别模式。这份成绩让预设评估路线图提前失效。

![GPT-6 Astra 测试成绩](https://img.36krcdn.com/hsossms/20260916/v2_ece3191cd78f43d1af0f4b5b8194ab6e@1743780481_oswg278145oswg1080oswg474_img_000?x-oss-process=image/format,jpg/interlace,1 "GPT-6 Astra 测试成绩")

### 2. 混合架构在具身仿真测试中拉开 64% 差距

**具身能力出现分层。** 银河通用团队在 [GitHub 发布的仿真测评](https://www.36kr.com/p/3985769854974977)显示，混合 GPT-6 Astra 的架构拿到 **62.6 分**，第二名仅 38.26 分。测评用 GPT-6 Astra 提供语义判断，与 π₀.₅ 的物理交互形成互补。混合模式让 GPT-6 Astra 在 π₀.₅ 候选动作中二选一或自己修正。**64% 的性能差距**被报告认为是架构层面的降维打击。

![具身智能测评对比](https://img.36krcdn.com/hsossms/20260916/v2_c4008a38c6bc4bc6a25f433773b022b7@5888275_oswg219946oswg1080oswg757_img_000?x-oss-process=image/format,jpg/interlace,1 "具身智能测评对比")

### 3. Gemini 3.8 Live Extended Thinking 登顶语音对话榜

**边说边推理。** 谷歌发布 Gemini 3.8 Live 和 3.8 Live Extended Thinking。Extended Thinking 版本在 [语音对话排行榜排第一](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-live-gemini-3-8-live-extended-thinking/)，**支持实时读取视频画面**。演示中用户边画边说，模型**实时做出产品 Demo**。多模态实时交互能力仍是 Gemini 的一线优势。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2100070339757895681/vid/avc1/2784x1566/ee4-fE0VB0t_lpBm.mp4?tag=29"></video>

### 4. TypeSafe AI 推出只做判断不生成文本的模型

**专注快速决策。** ChatGPT 联合发明人 Diogo Almeida 创办的 TypeSafe AI 发布 System One 模型 Jev。Jev [放弃文本生成能力](https://x.com/dotey/status/2100109937237987823)，专门输出带校准概率的结构化结果。响应速度 **70 到 500 毫秒**，成本比主流模型低 **40 到 400 倍**。模型用新训练方法 RLCD 构建，输入非结构化数据后只做分类、打分、路由和提取。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2099925575637057536/vid/avc1/1920x1080/cy2CDedAjnEfjJZk.mp4?tag=29"></video>

### 5. 字节发布豆包 2.1 Pro 0915 版并在飞书引入团队智能体

**模型与协作能力更新。** 火山引擎 [升级豆包大模型至 0915 版本](https://www.aibase.com/zh/news/31096)，强化证据溯源与数据核验。多模态编程能力增强，支持**代码仓库分析与修复测试**。飞书 8.0 引入团队智能体"豆包工作伙伴"，推动 AI 从个人助手向团队协作转变。生数科技同步发布 Vidu S2 视频模型，**支持实时编辑**、动态参考图与头显适配。vivo 蓝心大模型也宣布全面升级。

![豆包模型更新](https://upload.chinaz.com/2026/0916/6392516321569739717694142.jpg "豆包模型更新")

### 6. Anthropic 解释 Claude 文本水印的工作方式

**统计痕迹不改选词。** Anthropic **发布技术说明**，解释 Claude 用的 [SynthID-Text 水印方案](https://t.me/aigc1024/24641)如何工作。模型选词时用密钥改变随机数来源，在输出中留下统计痕迹。水印**不会让模型选它本来不会选的词**，只在模型本就犹豫的候选中起作用。事后拿密钥核对选词序列，能算出这段是 Claude 写的概率。

### 7. 机器之心质疑自我进化 Agent 的得分提升来源

**可能只是多试几次。** 机器之心发文分析 [Harness Evolution 的测试方法](https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651057510&idx=2&sn=8e1bea2b097f6ec4c012b75cf0ccfacb)，质疑自我进化 Agent 的得分提高可能只是因为比普通 Agent **多获得了几次尝试机会**。文章提出：当自我进化 Agent 得分**提高时**，需要区分是真的学会了更好的工作方式，还是因为更多尝试带来的概率优势。

### 8. 向阳乔木参加教育与 AI 大会

**教育场景探讨。** 向阳乔木在杭州良渚 [参加教育与 AI 大会](https://x.com/vista8/status/2100023854307717449)。会场聚集大量教师和校长，讨论 AI 在教育场景的应用。

![教育与 AI 大会现场](https://pbs.twimg.com/media/HSTIkAvagAAZbBL.jpg "教育与 AI 大会现场")

---

### 9. Vibe coding 后测试跑得慢的优化思路

**精准测试与分级策略。** 姚金刚分享代码产出快后测试变慢的 [优化方法](https://x.com/dotey/status/2100315717555925367)。团队一天上线 **50 次**，至少跑 300 轮测试。建议做精准测试，记录每个测试实际经过的代码，源码变更后反查影响哪些测试。还可以做测试分级，高频 CI 跑**核心路径与新增测试**，其余测试有代码变更时每小时集中跑一轮。

![测试优化思路](https://pbs.twimg.com/media/HSPVqF-a0AAQP2K?format=jpg&name=orig "测试优化思路")

### 10. 歸藏给折叠屏做了角度触发的时钟应用

**折叠到特定角度自动展示。** 歸藏开发了一个 [安卓折叠屏应用](https://x.com/op7418/status/2100179069585461507)，只要折叠到对应角度就会**自动触发展示样式**。目前有**日历时钟和番茄钟**。应用用原生 Material Design 风格。

![折叠屏时钟应用](https://pbs.twimg.com/media/HSVVjTsaoAA-BLq?format=jpg&name=orig "折叠屏时钟应用")
## **⚡ 产品与功能更新**

### AI 桌面交互方式可能快速普及

**桌面操作形式变化。** Telegram 频道转述称 [AI 桌面交互方式可能快速普及](https://t.me/aigc1024/24631)。具体产品形态、演示或上线计划未在转述中披露。

---
## **⌘ 开源 TOP 项目**

### anthropics/knowledge-work-plugins：知识工作者插件仓库

anthropics/knowledge-work-plugins 收录了 [面向知识工作者在 Claude Cowork 中使用的开源插件](https://github.com/anthropics/knowledge-work-plugins)。当日新增 **110 Stars**，总计 24283 Stars。适合需要在 Claude Cowork 环境中扩展功能的知识工作者。

### Tencent/WeKnora：文档转 RAG 与推理代理平台

Tencent/WeKnora 是 [开源 LLM 知识平台](https://github.com/Tencent/WeKnora)，将原始文档转换为可查询的 RAG、自主推理代理和自维护 Wiki。当日新增 **1197 Stars**，总计 25289 Stars。适合需要构建企业知识库或文档问答系统的团队。

### jamiepine/voicebox：AI 语音工作室

jamiepine/voicebox 是 [开源 AI 语音工作室](https://github.com/jamiepine/voicebox)，支持克隆、听写和创作。当日新增 **417 Stars**，总计 54380 Stars。适合需要语音克隆或语音内容创作的开发者。

---
## **◉ 社媒精选**

### 向阳乔木推荐严肃阅读工作流

**从找书到内化的完整链路。** 向阳乔木 [推荐了一篇严肃阅读工作流文章](https://x.com/vista8/status/2100306504419266748)，覆盖找书工具、扫描版 PDF 转 EPUB、沉浸阅读端，以及**内化到 Flomo 或 Obsidian** 的完整链路。文章还收录了 Qiaomu Reader 插件，并推荐 Z-Library 和 Anna's Archive 两个图书资源站。

---
## **❓ 相关问题**

### Gemini 3.8 Live Extended Thinking 国内怎么用？

Gemini 3.8 Live Extended Thinking 通过 Google AI Studio 或 Google Cloud Vertex AI 提供。国内用户访问 Google 服务需要符合网络访问条件。具体订阅要求、地区限制与定价未在官方公告中明确披露。

需要进一步比较当前公开的 AI 账号或订阅服务时，可查看 [**爱窝啦·AI账号店**](https://www.aivora.cn/)；商品、价格与可用状态以官网实时页面为准。