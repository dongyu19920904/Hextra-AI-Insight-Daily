---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/8/15
breadcrumbs: false
next: /2026-08/2026-08-15
description: "智谱 GLM-5.3 纯靠后训练再度提升，MiniMax 开源 5 分钟音乐模型，两件事同日落地。 从模型迭代到开源工具，今天的动作都在降低开发者的接入门槛而非提升算力门槛。 先看 GLM-5.3 技术博客和 ego-lite 仓库，再决定是否调整现有 Agent 的模型和浏览器方案。"
cascade:
  type: docs
---


## **今日摘要**

```
智谱 GLM-5.3 纯靠后训练再度提升，MiniMax 开源 5 分钟音乐模型，两件事同日落地。
从模型迭代到开源工具，今天的动作都在降低开发者的接入门槛而非提升算力门槛。
先看 GLM-5.3 技术博客和 ego-lite 仓库，再决定是否调整现有 Agent 的模型和浏览器方案。
```

## **🔥 今日焦点 TOP 10**

### 1. GLM-5.3 发布，网络安全能力大幅跃升

**只靠后训练就又强了一截。** 智谱 Z.ai 在[官方技术博客](https://z.ai/blog/glm-5.3)宣布 GLM-5.3 正式发布，基于 743B 基础模型后训练，无需重新预训练。本次重点提升了网络安全防御和终端任务、大代码库修复等长程 Agentic 能力。正在跑代码 Agent 或有网络安全需求的开发者，可以直接去 z.ai 查技术细节。

![GLM-5.3 发布公告](https://pbs.twimg.com/media/HPqGDYVXAAEtyrV.jpg "GLM-5.3 发布公告")

---

### 2. MiniMax 开源音乐模型 Music3，可生成 5 分钟歌曲

**MiniMax 把音乐模型也开源了。** 开发者 Gorden Sun 在[MiniMax 开源音乐模型 Music3，可生成 5 分钟歌曲](https://x.com/Gorden_Sun/status/2088103125492363503)中演示了 MiniMax-Music3 的实际效果，模型已发布在 Hugging Face，可在线体验。最长支持 5 分钟歌曲，提示词可精细控制歌曲结构、人声、节奏和歌词。继开源视频模型 H3 后，MiniMax 的音频能力也完整开放，创作者和开发者今天就能上手。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2088102905916338177/vid/avc1/1280x720/vFIWUG7eihoQ4dxO.mp4?tag=29"></video>

---

### 3. Gemini 3.7 Flash 接入 Spark，多步工作流更稳

**Spark 底层换芯，工具调用能力明显提升。** [Google Gemini 官方账号](https://x.com/GeminiApp/status/2088405195516710953)转发了用户的实测视频，Gemini 3.7 Flash 现已为 Spark 提供支持。新模型在多步、多技能工作流中成功率更高，工具调用准确性也有改善。用 Spark 处理每周重复任务的用户，现在是更新提示词、跑一遍新流程的好时机。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2088276759284203520/vid/avc1/1560x800/JGCj7zo0VAYR_-7b.mp4?tag=29"></video>

---

### 4. ChatGPT 电脑版上线操作历史功能

**ChatGPT 开始记录你在电脑上做了什么。** 开发者 Gorden Sun 整理的[ChatGPT 电脑版上线操作历史功能](https://learn.chatgpt.com/docs/customization/computer-history)显示，ChatGPT 桌面端新增了 Computer History，能自动将操作行为转化为记忆，用于接续工作、查找近期内容和复用工作流。目前仅 **Pro 订阅和企业用户**可用。需要跨会话保持上下文的重度用户，可以在桌面端设置里开启这项功能。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2087996446595485696/vid/avc1/3840x2160/2iL13PIzQoVpntqE.mp4?tag=29"></video>

---

### 5. Cursor 开源插件规范，生态扩展正式起步

**Cursor 把插件接口开放给社区了。** [cursor/plugins 仓库](https://github.com/cursor/plugins)今日进入 GitHub 日榜，包含官方插件规范与示例，当日新增 41 颗星，总星数 2810。这意味着开发者可以按照官方规范为 Cursor 编写扩展，而不再依赖非官方 hack 方案。希望深度定制编辑器工作流的开发者，今天可以先把规范文档读一遍。

---

### 6. Pi 上下文压缩方案曝光：有损但高效

**Pi 的上下文压缩比想象中更朴素。** 开发者宝玉在[Pi 上下文压缩方案曝光：有损但高效](https://x.com/dotey/status/2088330456022311109)中解读了 Pi 团队工程师的博文，核心做法就是用 prompt 让 LLM 总结历史对话，再保留 system prompt 和最近几轮工具调用，其余全部丢弃。这是一种**有损压缩**，没有历史检索机制做兜底。对于自己在做 Agentic 应用的开发者，这套方案值得参考，但需要评估精度损失的可接受范围。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2087859598371758080/vid/avc1/1100x618/RHMSCDQbfCalaHIv.mp4?tag=29"></video>

---

### 7. AI 短剧半年内卷殆尽，开始批量出海

**AI 短剧的国内红利期已经结束。** 来自即刻的[AI 短剧半年内卷殆尽，开始批量出海](https://m.okjike.com/originalPosts/6a7ef418e6f140582509a838)指出，AI 短剧从真正产业化到利润被压缩殆尽只用了半年，从业者正在批量转向海外市场寻找增量空间。这一速度与互联网早期内容创业的压缩时间线基本一致。正在评估 AI 短剧方向的创业者，现在入局需要从一开始就规划出海路径。

![AI短剧国内竞争态势](https://cdnv2.ruguoapp.com/FrQm__LZEjr2bdNtfXUVQ3R7oX6mv3.jpg "AI短剧国内竞争态势")

---

### 8. DeepSeek Harness 开源，Pi 作者评价颇高

**DeepSeek Harness 让老玩家也感到眼前一亮。** 开发者宝玉分享了[Pi 作者 Armin Ronacher 的评价](https://x.com/dotey/status/2088282286529618286)，后者称这是首次在这个领域看到真正令人受到启发、想重新审视自己技术选择的开源项目。Harness 是 DeepSeek 用于模型测评的开源框架，不完美但思路新颖。做模型评测或 Benchmark 工程的开发者可以去看看它在哪些设计上做了不同的取舍。

![DeepSeek Harness 评价截图](https://pbs.twimg.com/media/HPsRfMoXcAAYgWI?format=jpg&name=orig "DeepSeek Harness Pi作者评价")

---

### 9. 马斯克预测 2031 年 AI 总智能超越全人类

**马斯克在《经济学人》采访中给出了 5 年时间线。** [AI探索频道整理的采访内容](https://t.me/aigc1024/23171)显示，马斯克判断约 2031 年 AI 将在几乎所有事情上超越人类，唯一例外是"成为人类本身"，并将这个阶段描述为"惊人丰裕的时代"。他同时表示，只有第三次世界大战这个量级的灾难才能打断进程。这是马斯克的个人判断，不是技术路线图，但 5 年这个时间节点已经具体到可以跟踪验证。

---

### 10. 具身机器人数采有效率惨到仅剩 10%

**花一个半月清洗数据，有效率只剩一成。** [AI探索频道转载的行业案例](https://t.me/aigc1024/23176)描述了一家具身机器人公司的真实遭遇：批量采购数据后，半支团队被抽调做了六周数据清洗，最终能喂进模型的有效数据只有 **10%**。这个问题在具身数采圈子里越来越普遍，数据质量比数据数量更值得关注。正在规划具身数据采集的团队，应该先把清洗流程和有效率目标算清楚，再决定采购量。

---

## **⌘ 开源 TOP 项目**

### citrolabs/ego-lite：专为 AI 智能体的自动化浏览器

[citrolabs/ego-lite 已开放全部核心代码](https://github.com/citrolabs/ego-lite)，今日新增 **165 颗星**，总星数达到 10366。这个 JavaScript 项目的核心能力是让 Codex、Claude Code 等 AI 智能体直接共用已登录的浏览器状态，无需重新授权，零配置启动。需要让 Agent 执行需要登录态的网页操作、又不想被频繁验证码打断的开发者，可以优先试这个方案。

---

### lightningpixel/modly：本地 GPU 生成 3D 模型的桌面应用

[lightningpixel/modly 项目](https://github.com/lightningpixel/modly)今日新增 **579 颗星**，是今日日榜增速最快的 AI 项目之一，总星数 5938。这款 TypeScript 桌面应用支持从图片或提示词生成 3D 模型，全程跑在本地 GPU 上，数据不出机器。有 3D 内容创作需求、希望避免云端 API 费用或隐私问题的设计师和独立开发者，可以直接下载试用。

---
## **◉ 社媒精选**

### 用 Codex 分析 X 推荐算法，六条创作规则颠覆认知

**转发比点赞权重更高，钩子开头反而是减分项。** 开发者歸藏在[分析帖](https://x.com/op7418/status/2088172365750645091)中用 Codex 解读了 X 开源的完整推荐算法代码，整理出六条可直接执行的创作建议。最反直觉的两点是：把重要内容放在推串第二条而非第一条会降低曝光；点赞的算法权重远低于回复、引用和关注。长期靠点赞诱导维持账号的运营者，需要重新评估发帖策略。

![X推荐算法分析要点](https://pbs.twimg.com/media/HPqrcsWa0AAl7mC?format=jpg&name=orig "X推荐算法六条创作建议")

---

### 独立开发者用 AI 模拟行业流程，隔天收到一单

**"假装做这个行业"找到了真实痛点。** 开发者宝玉转发了[独立开发者 William 的复盘帖](https://x.com/dotey/status/2088342622129516847)，他用 AI 的 computer use 能力模拟真实行业工作流，把每一个 AI 卡壳的节点记录下来，再针对这些卡点做工具类 Web 应用，结果几乎隔一天就能收到一笔订单。这个方法的本质是用 AI 跑通行业流程来发现工具缺口，而不是靠主观猜测用户需求。

![独立开发者AI工具变现复盘](https://pbs.twimg.com/media/HPsnFvUaEAAQufo?format=jpg&name=orig "用AI模拟行业流程找产品缺口")

---

### GLM-5.3 后训练数版本还能继续提升引发关注

**连续几个版本都只后训练，却能一直变强。** 开发者 Gorden Sun 在[GLM-5.3 发布的第一手整理](https://x.com/Gorden_Sun/status/2088137013287673950)中指出，智谱这次依然没有重新预训练，仍然在 743B 基础模型上做后训练迭代。他特别标注了后续将会开源的信息，这对不想付费调 API 的研究者和开发者来说是值得等待的节点。

![GLM-5.3发布信息](https://pbs.twimg.com/media/HPqGDYVXAAEtyrV?format=jpg&name=orig "GLM-5.3 技术重点")

---
## **😄 AI趣闻**

### 神经外科博士生用 GPT-5.6 解开 20 年数学悬案

协和医院神经外科博士生金山木，本科读的是北大地质，没有系统学过高等数学。他自学了一段时间矩阵分析，然后[用 ChatGPT 5.6 解决了 Crouzeix 猜想](https://x.com/dotey/status/2088162385638912109)——一个 2004 年提出、悬而未决超过 20 年的数值线性代数核心难题。数学家 Steven Strogatz 公开发帖确认，Crouzeix 本人也认可了这个证明。从地质到神经外科再到数值分析，这位同学的简历大概需要一张 A4 纸才能画完时间线。

---
## **❓ 相关问题**

### GLM-5.3 国内怎么用？

GLM-5.3 目前可通过智谱 [Z.ai 官网](https://z.ai/blog/glm-5.3)了解技术细节，API 调用渠道为智谱开放平台。官方公告确认后续会开源，开源后可通过 Hugging Face 或智谱 GitHub 仓库直接下载权重本地部署。现阶段主要面向开发者和安全研究人员，普通用户可通过智谱旗下产品体验模型能力。

需要进一步比较当前公开的 AI 账号或订阅服务时，可查看 [**爱窝啦·AI账号店**](https://www.aivora.cn/)；商品、价格与可用状态以官网实时页面为准。
