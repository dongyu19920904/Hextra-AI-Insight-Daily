---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/1/24
breadcrumbs: false
next: /2026-01/2026-01-24
description: "每日自动汇总最新 AI 行业动态，帮中文用户用最低成本玩转 ChatGPT、Claude、Cursor、Augment 等 AI 工具。由爱窝啦 AI 账号店提供支持。"
cascade:
  type: docs
---

## **今日摘要**

```
OpenAI 要从你用 AI 赚的钱里抽成，制药公司用他们技术研发新药得分利润，这波操作让所有 API 创业者开始重算成本。

英伟达工程师开源全球首个完全由 AI 生成的深度学习框架，连论文都是 AI 写的，贾扬清称这是"软件开发的 AlphaGo 时刻"。

Agent 编程时代来了，GitHub 和 Anthropic 都把 AI 助手搬进终端，开发者不用再切换窗口写代码了。
```



## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览



> 💡 **提示**：想第一时间体验文中提到的最新 AI 模型（Claude 4.5、GPT、Gemini 3 Pro）？没有账号？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 领个号，一分钟上手，售后无忧。

# 今日AI资讯

## 👀 只有一句话

OpenAI 要从你用 AI 赚的钱里抽成了，这次不是卖工具，而是分利润。

## 🔑 3 个关键词

#商业模式巨变 #开源狂欢 #Agent编程时代

---

## 🔥 重磅 TOP 10

### 1. [OpenAI 新商业模式曝光：AI 帮你赚钱，我要分成](https://www.theinformation.com/newsletters/applied-ai/openai-plans-take-cut-customers-ai-aided-discoveries?rc=jn0pp4)

**就在大家以为 OpenAI 只靠卖 API 赚钱的时候，他们突然甩出了一个炸弹。** OpenAI CFO Sarah Friar 在达沃斯论坛上透露，未来如果制药公司用 OpenAI 的技术研发出新药，OpenAI 将从药物收益中抽成。这不是卖软件，而是「价值共享」——你发财了，我也要分一杯羹。这种模式可能会扩展到能源、金融等领域。听起来很美好？但问题来了：如果你用 Photoshop 做设计，Adobe 要对你的每件作品抽成，你愿意吗？这种「从卖工具到分利润」的转变，可能会彻底改写 AI 行业的游戏规则。对于那些基于 OpenAI API 构建业务的初创公司来说，成本计算逻辑将被彻底颠覆。更讽刺的是，OpenAI 自己的模型还因为训练数据版权问题被《纽约时报》等起诉，现在却要从用户的知识产权中抽成。这波操作，真是让人看不懂。

![图片](https://cdnv2.ruguoapp.com/FtRYchEW5HJ1VyklqDrJuB5heDG2v3.jpg)

---

### 2. [阿里通义千问开源 Qwen3-TTS：97ms 超低延迟，3 秒克隆音色](https://github.com/QwenLM/Qwen3-TTS)

**以前做语音合成，要么延迟高到让人抓狂，要么音色克隆效果像机器人。** 现在阿里通义千问开源了 Qwen3-TTS，端到端延迟低至 97ms，3 秒就能克隆音色，还支持跨语言、跨方言零损失迁移。更绝的是，你可以用一句话「凭空」设计全新音色——比如「给我一个温柔的女声，带点磁性」，AI 就能生成。这套模型采用 Dual-Track 双轨架构，适合直播互动、实时翻译等场景。对于需要实时语音交互的应用来说，这简直是降维打击。开发者狂喜，终于不用为了低延迟和音质二选一了。

![图片](https://upload.chinaz.com/2026/0123/6390476498580606227153232.png)

---

### 3. [英伟达工程师开源 VibeTensor：全球首个完全由 AI 生成的深度学习框架](https://github.com/NVlabs/vibetensor)

**这是一个让人细思极恐的项目。** 英伟达杰出工程师许冰开源了 VibeTensor，这是全球首个完全由 AI 智能体生成的深度学习系统——没有一行人类编写的代码。从 Python/Node.js 的上层绑定，到 C++ 核心调度器，再到最底层的 CUDA 内存管理，全部由 AI 完成。更夸张的是，连论文都是 AI 写的。虽然性能还无法与 PyTorch 抗衡（部分场景慢了 1.7 到 6.2 倍），但它证明了 AI 已经能够构建复杂的系统软件。陈天奇和贾扬清都点赞了这个项目，贾扬清甚至说这是「软件开发的 AlphaGo 时刻」。不过，许冰也坦诚地指出了「弗兰肯斯坦效应」——AI 能确保每个局部子系统正确，但拼凑成全局系统时会产生意想不到的性能瓶颈。这就像 AI 能写出每一块砖，但盖房子的时候总是漏风。未来的程序员，可能不再是写代码，而是写 Prompt。

![图片](https://pbs.twimg.com/media/G_Xi_RrbkAAyK56?format=png&name=orig)

---

### 4. [OpenAI 发布 ChatGPT Atlas 浏览器重大更新：支持标签页分组，搜索模式实现「自动导航」](https://www.aibase.com/zh/news/24894)

**OpenAI 的 Mac 浏览器 ChatGPT Atlas 迎来重磅升级。** 新增标签页分组功能，支持垂直标签页优化，让多任务浏览更整洁。更牛的是「自动模式」——系统会根据你的查询内容，在 ChatGPT 和 Google 搜索引擎之间自动切换。比如你问「今天天气怎么样」，它会直接调用 Google；问「如何用 Python 写一个爬虫」，它会切换到 ChatGPT。这种智能导航，让你不用再手动选择搜索引擎。此外，Atlas 还深度集成了 macOS 键盘文本替换和 iCloud 密码扩展，进一步优化了从主流浏览器的迁移体验。对于重度 AI 用户来说，这是一个值得尝试的工具。

---

### 5. [马斯克达沃斯首秀：Optimus 机器人 2027 年公售，将开启「家庭标配」时代](https://www.aibase.com/zh/news/24894)

**马斯克在达沃斯论坛上首次亮相，透露了 Optimus 机器人的商业化时间表。** 他表示 2027 年将向公众出售该机器人，届时其性能将达到极高水平。到 2026 年底，Optimus 将具备执行复杂工业任务的能力，但初期生产将面临「S 型曲线」的挑战。马斯克预测，随着 AI 和机器人的普及，全球经济将迎来史无前例的「丰裕时代」。不过，Optimus 的成功仍需可扩展的制造证据和清晰的单位经济效益。想象一下，未来每个家庭都有一个 Optimus 帮你做家务、带孩子、甚至陪你聊天。这听起来像科幻小说，但马斯克说这是 2027 年的现实。

---

### 6. [腾讯发布 2025 年反舞弊通报：AI 建模助力精准打击，70 余起案件浮出水面](https://www.aibase.com/zh/news/24894)

**腾讯用 AI 抓内鬼，效果拔群。** 2025 年全年，腾讯通过 AI 分析工具构建动态风险模型，查处了 70 余起舞弊案件，90 余人被解聘，20 余人涉嫌犯罪被移送公安机关。腾讯还公布了「永不合作主体清单」，15 家公司因舞弊被列入黑名单。这套 AI 反舞弊系统能够主动发现与精准打击舞弊行为，比传统人工审查效率高得多。对于企业来说，这是一个值得借鉴的案例——AI 不仅能帮你赚钱，还能帮你省钱。

---

### 7. [GitHub Copilot CLI 发布：将 Copilot 编码代理的强大功能直接带到你的终端](https://github.com/github/copilot-cli)

**GitHub 把 Copilot 搬到了终端里。** 现在你可以直接在命令行中使用 Copilot，无需打开 IDE。这对于需要频繁在终端中操作的开发者来说，简直是福音。你可以用自然语言问 Copilot「如何删除所有 .log 文件」，它会直接生成对应的命令。这种「所见即所得」的体验，让编程变得更加流畅。对于那些习惯用终端工作的开发者来说，这是一个不容错过的工具。

---

### 8. [Anthropic 开源 Claude Code：驻留在终端中的代理编码工具](https://github.com/anthropics/claude-code)

**Claude Code 是一个驻留在你终端中的代理编码工具。** 它理解你的代码库，并通过执行日常任务、解释复杂代码和处理 git 工作流程来帮助你更快地编码——所有这些都通过自然语言命令完成。比如你可以说「帮我重构这个函数」，Claude Code 会自动分析代码并给出优化建议。这种「AI 助手」模式，让编程变得更加高效。对于那些需要频繁处理复杂代码的开发者来说，这是一个值得尝试的工具。

---

### 9. [DeepSeek 开源 FlashMLA：高效的多头潜在注意力内核](https://github.com/deepseek-ai/FlashMLA)

**DeepSeek 开源了 FlashMLA，这是一个高效的多头潜在注意力内核。** 它能够显著提升大模型的推理速度，尤其是在处理长上下文时。对于那些需要处理大规模数据的应用来说，这是一个非常实用的工具。DeepSeek 一直在推理效率方面做得很好，这次开源 FlashMLA，进一步巩固了他们在这一领域的领先地位。

---

### 10. [微软开源 VibeVoice：开源前沿语音 AI](https://github.com/microsoft/VibeVoice)

**微软开源了 VibeVoice，这是一个前沿的语音 AI 工具。** 它支持多种语音任务，包括语音识别、语音合成、语音克隆等。对于那些需要构建语音应用的开发者来说，这是一个非常实用的工具。微软在语音 AI 领域一直有深厚的积累，这次开源 VibeVoice，进一步降低了语音 AI 的使用门槛。

---

## 📌 值得关注

**[产品]** [Agentation 正式发布](https://github.com/benjitaylor/agentation) - 让 AI 编程指哪打哪，通过将 Agent 与 Annotation 结合，为 AI 编码助手提供精准的网页结构透视能力。

**[商业]** [亚马逊再传大规模裁员](https://www.aibase.com/zh/news/24894) - 本轮或减员 1.6 万人，AI 自动化成主因，主要集中在总部高薪岗位。

**[研究]** [腾讯联合清华、北大提出 Render-of-Thought (RoT)](https://arxiv.org/abs/2601.14750) - 将文本推理步骤「渲染」为图像的视觉嵌入，实现 3-4 倍的 Token 压缩率。

**[开源]** [OpenBMB 开源 UltraRAG v3](https://github.com/OpenBMB/UltraRAG) - 用于构建复杂和创新 RAG 管道的低代码 MCP 框架。

**[开源]** [Remotion 开源](https://github.com/remotion-dev/remotion) - 使用 React 以编程方式制作视频，适合需要批量生成视频的场景。

---

## 😄 AI 趣闻

### [科技爱好者周刊（第 382 期）：独立软件的黄昏](https://telegra.ph/weekly-382-01-23)

今天最有意思的文章来自阮一峰老师的科技爱好者周刊。他提到，独立软件的时代可能正在走向黄昏。以前，很多程序员靠出售独立软件谋生，但现在 AI 的出现让这一切变得不确定。AI 可以帮你写代码、生成内容，甚至自动化很多任务。那么，独立软件开发者的未来在哪里？阮老师认为，未来的程序员可能不再是写代码，而是写 Prompt。这篇文章值得每个开发者深思。

![图片](https://cdn4.telesco.pe/file/Cv19F0SxqJohMMyW8p0zYaC0RGAiebJH0vzLjZWDQKbElTBKGbkFvzM7TP3NTNFxcuiHdL28bKpwQLvog0FDszXEUonl_ok4DlFgDhZ94JM86SaC5pwCwCUGTFcypUcnpBpO365fRUmoYel4mOGBlz0Ahvs_PpjXcJW7m2SbpUrryw_hZZBgXk44HskmhzM1YQUvTqRB5BAAuoJryKiwP7TIpJ8OgmKk7Z5W9Jz2Mc9yUcA9usqBcoXduv_DicfjOuO1C-Gg2NVHRWrm-alUDMwCoDs3KxsaY1SiFl_0g9IHbygIEqBKEgQfnvqfTGzWGiGhqS_Lz7s9HpQ0vCrcvA.jpg)

---

## ❓ 相关问题

### 如何体验 OpenAI 的 ChatGPT Atlas 浏览器？

ChatGPT Atlas 目前仅支持 Mac 平台，需要下载安装后才能使用。对于国内用户，可能面临下载困难或账号注册限制。

**解决方案**：访问 **[爱窝啦 Aivora](https://aivora.cn)** 获取成品账号，极速发货,售后无忧。