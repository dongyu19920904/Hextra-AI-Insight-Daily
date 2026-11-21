---
linkTitle: AI Daily
title: AI 日报 2026/11/21：DeepSeek 前核心作者开源个人 Agent、Claude 携手数学家提交黎曼猜想证明
breadcrumbs: false
next: /2026-11/2026-11-21
description: "Anthropic募资81.3B创IPO纪录，Claude联合数学家提交黎曼猜想证明。 个人Agent开源项目和设计方法论集中亮相，但模型版本间行为差异开始显现。 先试Linger开源Agent，再核实Sol 6.2拒审AI代码是否影响你的项目。"
cascade:
  type: docs
---


## **今日摘要**

```
Anthropic募资81.3B创IPO纪录，Claude联合数学家提交黎曼猜想证明。
个人Agent开源项目和设计方法论集中亮相，但模型版本间行为差异开始显现。
先试Linger开源Agent，再核实Sol 6.2拒审AI代码是否影响你的项目。
```

## **🔥 今日焦点 TOP 10**

### 1. DeepSeek 前核心作者开源个人 Agent

**张博开源了 Linger。** 36氪报道中，[DeepSeek 前核心作者开源个人 Agent](https://www.36kr.com/p/4077377119245191)，方向是运行在电脑本地的 Personal Agent。它直接操控浏览器、邮件、日历，无需重新登录各类服务🖥️。**支持第三方模型接入**，RTX 3060 可以 **45.5 tokens/秒**跑 125B 参数模型，全部代码开源。

![Linger 项目界面展示](https://img.36krcdn.com/hsossms/20261120/v2_f067d7ec145e4b1094d8d16ca42cc87f@5091053_oswg395636oswg1080oswg1202_img_000?x-oss-process=image/format,jpg/interlace,1 "Linger 项目界面展示")

---

### 2. Claude 携手数学家提交黎曼猜想证明

**Anthropic 数学家与 Claude 联合提交了黎曼猜想的 Lean 形式化证明。** 📐 社区随即在[Claude 携手数学家提交黎曼猜想证明](https://m.okjike.com/originalPosts/6b007341320fd7e1b5b0776a)中记录，验证者动用 128 核 CPU、244GB 内存，下载了全部 14 个压缩包，共 **175,187 个 Lean 源文件**。截至发帖时已完成 **26,088/26,329 个构建任务**，暂无构建失败。最终定理和公理依赖审计仍在进行，结论尚待确认。

![黎曼猜想 Lean 证明编译进度截图](https://cdnv2.ruguoapp.com/Fgyy9I3g0QvdB7YNX3C215GABrqRv3.jpeg "黎曼猜想 Lean 证明编译进度")

---

### 3. 谷歌 Genie 4 世界模型开放 API 访问

**谷歌 Genie 4 已可通过 API 访问。** 歸藏在推文中转述，[谷歌 Genie 4 世界模型开放 API 访问](https://x.com/op7418/status/2123522128180027723)，是谷歌面向开发者开放的**首个世界模型**🔮。入口为 ai.studio/**genie**，开发者可据此构建新型世界模型体验。

![Genie 4 世界模型 API 访问界面](https://images.weserv.nl?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FHXhEHPZb0AAp8n_%3Fformat%3Djpg%26name%3Dorig "Genie 4 世界模型 API 访问界面")

---

### 4. ChatGPT 语音输入取消 10 分钟时长限制

**ChatGPT 语音输入体验大幅升级。** AIBase 报道显示，[OpenAI 新增了实时听写功能](https://www.aibase.com/zh/news/32445)，边说话边出字，录完可即时修改润色🎙️。同时取消了原有的 **10 分钟**时长上限，可靠性也有所提升。功能正在全平台陆续推送，普通用户均可使用。

---

### 5. Manus 产品负责人在北大公开核心决策

**Manus 产品设计思路首次对外公开讲述。** 🧭 产品负责人 hidecloud 本周在北京大学讲授 AI 产品创新课，[即刻分享的课程记录](https://m.okjike.com/originalPosts/6b00227376ca3521aa4f5a38)中坦诚说明了 **Manus** 诞生前后的**关键决策与设计思想**。受众是一批 AI Native 的潜在创始人。正在做 Agent 类产品的开发者可参考。

![Manus 产品负责人北大授课现场](https://picasso-static.xiaohongshu.com/fe-platform/e6214e4fbfae2cf14d634d4296916e8a5eaefdf4.png "Manus 产品负责人北大授课现场")

---

### 6. Anthropic 完成史上最大规模 IPO

**Anthropic IPO 募资金额创历史纪录。** 📊 BestBlogs.dev 整理的报道显示，[此次 IPO 募资 $81.3B](https://www.bestblogs.dev/en/article/879c6383ed?utm_source=rss&utm_medium=feed&utm_campaign=resources&entry=rss_article_item)，超越此前 SpaceX 的记录。开盘估值达 **$2T**，开盘价较发行价高出 **34%**。CEO Dario Amodei 表示将安全置于速度之前。IPO 恰逢谷歌发布 Gemini 4 Neon，外界关注竞争时机与市场定位的讨论。


![Anthropic 完成史上最大规模 IPO · 原文封面](https://www.bestblogs.dev/en/article/879c6383ed/opengraph-image?696e70e5d7b1d782 "Anthropic 完成史上最大规模 IPO · 原文封面")

---

### 7. Sol 6.2 拒绝对 AI 生成代码做审查

**Sol 6.2 对全量 AI 提交历史的项目拒绝 Review。** 💻 V2EX 用户在[实测帖中记录](https://www.v2ex.com/t/1258613#reply1)，当项目全部提交均由 AI 完成时，使用 Codex 调用 Sol 6.2 执行代码审查会被直接拒绝。**切换回 Sol 6.1** 则无此问题，原因目前不明。正在用 AI 全程开发项目的开发者需要留意此类**版本行为差异**。

![Sol 6.2 拒绝 Review AI 生成代码的截图](https://i.imgant.com/v2/glqt1xW.png "Sol 6.2 拒绝 Review AI 代码的截图")

---

### 8. 用户报告 GPT 6.2 输出质量明显下滑

**多名用户反映 GPT 6.2 能力出现退步。** 💬 即刻用户 Ani_无限 在[实测记录](https://m.okjike.com/originalPosts/6b0002443ce945612ec70423)中描述，以往一句话可完成的任务，6.2 版本**说十遍也达不到预期**，单日额度同时更快耗尽。这是用户体感，非官方说明；**OpenAI 尚未给出解释**。频繁依赖 ChatGPT 完成重复任务的用户，可暂时对比旧版本或调整提示词。

---

### 9. Personal Agent 评判标准被重新提出

**优秀 Agent 的核心是理解用户的全局目标。** 📏 产品研究者 Jeremy 在[Personal Agent 评判标准被重新提出](https://m.okjike.com/originalPosts/6b004eca136b2761c63e274d)中指出，Agent 的关键不在于完成多长的任务，而在于能否跨越阶段理解用户**真正想要什么**。现有 memory 机制遵循"**就近原则**"，只优化近期局部目标，忽视全局一致性。正在设计 Agent 记忆系统的开发者可参考这一判断。

---

### 10. 提示词优化有效解决 AI 翻译读感生硬

**针对 AI 翻译"不说人话"，提示词有效。** 📝 即刻用户灵有志在[提示词优化有效解决 AI 翻译读感生硬](https://m.okjike.com/originalPosts/6aff5bec38389f599308655f)中记录，通过控制变量逐一测试多个模型和提示词组合，最终**找到一套可用**的中文长文翻译指令。测试环境是**沉浸式翻译插件 + GLM-4-9B-0414**，附有对比截图。常读英文长文的用户可直接参考该指令。

![我差点放弃让AI说人话，直到一件事发生 哪怕上了大学，我的英语还是很差，就是目不识丁的程度 不过](https://cdnv2.ruguoapp.com/FsSEWR6x4oXr1zHE-BN2AyluoqZ8v3.png "我差点放弃让AI说人话，直到一件事发生 哪怕上了大学，我的英语还是很差，就是目不识丁的程度 不过")

---

## **⚡ 产品与功能更新**

### Suno 进军视频生成，底层来自 MiniMax

**美国 AI 音乐平台 Suno 宣布推出视觉创作工具。** 据[量子位报道](https://www.qbitai.com/2026/11/511722.html)，新工具名为 Visuals，**底层模型来自中国 MiniMax**🎬。这是 Suno 从音乐生成向多模态扩展的第一步，也是 MiniMax 视频能力的一次海外落地。已在使用 Suno 做音乐创作的用户可关注该功能的开放进展。

---
## **◉ 社媒精选**

### AI 博士生遭 ICE 拘留，签证身份是关键

**普林斯顿 AI 博士生 Eva 因签证状态被拘留。** 📄 宝玉转发的推文中，[Wong Carrie 介绍了 Eva 的具体情况](https://x.com/dotey/status/2123863778114818381)：Eva 是 MIT 数学与 AI 双学士，平均绩点 **4.9/5**，目前在普林斯顿读神经网络方向博士，曾在 Meta、Microsoft AI 和 IBM Research 实习。她的问题在于 **F1 签证已过期**、处于绿卡等待期，这一状态已导致多起类似事件。学校已派律师介入，无犯罪记录的情况下预计很快获释。

![ICE 拘留事件相关信息](https://images.weserv.nl?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FHXlTgiUaAAIIPfY%3Fformat%3Djpg%26name%3Dorig "AI 博士生遭 ICE 拘留事件信息")

---

### Gemini 3.5 Transcribe 语音编辑能力接入 API

**谷歌将语音编辑技术向开发者开放。** Google Gemini 官方账号宣布，[Gemini 3.5 Transcribe 的语音编辑能力已接入 Gemini API](https://x.com/GeminiApp/status/2123849209204048025)，这是 Gboard Rambler 和 macOS 版 Gemini App 背后的同一套技术🗣️。开发者可据此构建支持**语音编辑、改写和翻译**现有文本的应用，无需用户手动输入。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2123826913835708416/vid/avc1/1920x1080/yZ056TQJyS7H6wmc.mp4?tag=29"></video>

---

## **😄 AI趣闻**

### 元素周期表排到 AI 模型命名上了

**Gemini** 🧪 下一个模型叫 **Helium**，再下一个估计叫 **Silicon**——Google 这是打算把元素周期表当版本号用。Omar Sanseviero 在[确认新模型即将发布的推文](https://x.com/osanseviero/status/2123323209135308996)里只留了四个字："Shipping will continue"。氦之后是锂，锂之后是铍，各位可以先把元素表背熟，方便追更。

## **❓ 相关问题**

### ChatGPT 实时听写，要买 Plus 才能用吗？

**不用为了听写开 Plus。** [当天的更新报道](https://www.aibase.com/zh/news/32445)说普通账号也在分批开放范围内。输入框有麦克风就先试，[听写转成的文字能改完再发](https://help.openai.com/en/articles/12168547-voice-dictation-faq)。本来就准备给自己的账号续 Plus，先查半价资格，符合再看[爱窝啦·AI账号店的 ChatGPT Plus 半价月卡](https://www.aivora.cn/products/chatgpt-plus-half-price-renewal-monthly)。
