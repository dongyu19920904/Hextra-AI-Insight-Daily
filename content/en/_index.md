---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/4/8
breadcrumbs: false
next: /2026-04/2026-04-08
description: "每日自动汇总最新 AI 行业动态，帮中文用户用最低成本玩转 ChatGPT、Claude、Cursor、Augment 等 AI 工具。由爱窝啦 AI 账号店提供支持。"
cascade:
  type: docs
---

## **今日摘要**

```
Anthropic 发布 Claude Mythos，数学竞赛题正确率从 42% 飙到 97.6%，代码修复能力也全线碾压 GPT-5.4 和 Gemini 3.1 Pro。
收入同步炸裂：年化 300 亿，单月新增 110 亿，已经超过 OpenAI——而且这个斜率还在加速。
普通用户暂时用不上最强模型，但今天这份日报值得从头看到尾。
```

## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览

> 💡 **提示**：想第一时间体验文中提到的最新 AI 模型（Claude 4.5、GPT、Gemini 3 Pro）？没有账号？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 领个号，一分钟上手，售后无忧。

## **今日AI资讯**

### **👀 只有一句话**
Anthropic 用一个普通人用不上的模型，悄悄把收入干到了 300 亿——还超过了 OpenAI。

### **🔑 3 个关键词**
#Anthropic封神 #收入逆袭 #安全攻防

---

## **🔥 重磅 TOP 10**

### 1. [Claude Mythos Preview 发布：USAMO 数学从 42% 直接拉到 97.6%](https://x.com/dotey/status/2041608128022901233)

以前大家觉得 AI 做数学竞赛题顶多及格，Mythos 直接交了一份接近满分的卷子。USAMO 2026 数学证明从 42.3% 跳到 97.6%，代码修复 SWE-bench Verified 从 80.8% 升到 93.9%，超长上下文 GraphWalks BFS 从 38.7% 翻到 80%。对比 GPT-5.4 和 Gemini 3.1 Pro，几乎全线第一，而且领先幅度动辄两位数。Anthropic 说这是他们训练过的最大模型，能力提升速度是此前趋势线的 4 倍。坏消息：普通用户暂时用不上，这个模型目前只开放给 Project Glasswing 的合作伙伴。

![image](https://pbs.twimg.com/media/HFU_voPW4AEk_Bi?format=jpg&name=orig)

### 2. [Project Glasswing：Anthropic 把最强模型交给苹果、微软、亚马逊等 12 家巨头专门找漏洞](https://x.com/Gorden_Sun/status/2041679003460030737)

不是卖模型，是组了个"漏洞猎人联盟"。Anthropic 宣布 Project Glasswing，把 Claude Mythos Preview 交给 12 家科技巨头，专门用来扫描和修复关键软件漏洞。官方说 Mythos 找漏洞的能力已经超过了"除最顶尖安全研究员以外的所有人类"。这个定位很聪明——不是替代安全工程师，而是先把那些没人盯的角落扫一遍。AI 从写代码到审代码，这一步走得比很多人预期的快。

### 3. [Anthropic 年化收入突破 300 亿，超过 OpenAI](https://x.com/dotey/status/2041307413777883484)

16 个月前还是 10 亿，今天 300 亿。从 190 亿到 300 亿只用了一个月，单月新增 110 亿年化收入。OpenAI 目前月收入约 20 亿、年化约 240 亿——Anthropic 已经在数字上超过了它的"母体"。财富 10 强里有 8 家是 Claude 客户，年消费超百万美元的企业客户不到两个月从 500 家翻倍到 1000 家。这条增长曲线的斜率，比大多数人想象的陡得多。

### 4. [Hermes Agent：上线不到两个月，GitHub 近三万星，被认为是 OpenClaw 第一个真正对手](https://x.com/dotey/status/2041585514873037167)

Nous Research 二月底开源，四月初已经快三万星。Hermes Agent 和 OpenClaw（龙虾）都能接 Telegram、Discord、Slack、WhatsApp，都支持多模型切换，都走 MIT 协议。但设计哲学不同：OpenClaw 是"调度中心"，管消息怎么送到 Agent；Hermes 是"执行引擎"，核心是 Agent 自己怎么越来越强，靠的是闭环学习循环（closed learning loop）。想自托管一个会自我进化的 AI 助理，这个项目现在值得认真看一眼。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2026756064591376384/vid/avc1/2344x2160/dM84VnNdTTvDZgyA.mp4?tag=21"></video>

### 5. [MemPalace：30 倍无损压缩，AI 终于有了真正的"记忆宫殿"](https://x.com/Gorden_Sun/status/2041463284763906287)

AI 记忆一直是个两难：让模型自己决定记什么，关键信息会丢；全量加载，上下文窗口直接爆。MemPalace 的思路是"全存+结构化检索"，用自研 AAAK 压缩方法实现 30 倍无损压缩，日常只占 170 个 token，需要时才按需唤醒。完全开源，本地运行，不调任何外部 API，任何 LLM 都能解析。值得一提的是，这个项目的创建者之一是《生化危机》女演员 Milla Jovovich——对，就是那个打丧尸的。

![image](https://pbs.twimg.com/media/HFS8Bc3bIAA4qBh?format=jpg&name=orig)

### 6. [Runway 接入 Seedance 2.0：文字、图片、视频、音频全能输入，生成多镜头视频](https://x.com/Gorden_Sun/status/2041526201085493255)

标题"打不过就加入"说的是：Runway 把字节跳动的 Seedance 2.0 直接集成进来了。现在 Runway 用户可以用文字、图片、视频或音频作为输入，生成带完整音效和对话的多镜头视频序列。目前对 Unlimited 和 Enterprise 用户开放（美国以外地区）。视频生成的竞争已经卷到"谁的生态更大"这个层面，平台方开始直接引入竞品能力，这个信号挺有意思。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2041512955620085760/vid/avc1/1920x1080/GmvM4O_YgnUnoex6.mp4?tag=21"></video>

### 7. [Waza：给工程师的极简 Claude Code 技能包，装完即用](https://x.com/Gorden_Sun/status/2041517120501207212)

现有的 Claude Code 技能包（Superpowers、gstack 这类）功能堆得太重，配置项一堆，很多工程师装完根本不知道从哪下手。Waza 反其道而行，只提炼真正高频的工程习惯：思考、审查、调试、写文档，没有框架依赖，没有复杂配置，开箱即用。对于只想安静写代码、不想折腾工具链的工程师来说，这个"够用就好"的设计哲学本身就是一种稀缺。

![image](https://pbs.twimg.com/media/HFTs_dba0AAjD4S?format=jpg&name=orig)

### 8. [Karpathy 的 LLM Wiki 方案：让 AI 把你散落各处的收藏整理成结构化知识库](https://x.com/dotey/status/2041509264221483449)

收藏夹里躺着几百条"以后再看"的链接，大概是每个人的通病。Karpathy 的方案不只是把信息汇聚到一处，而是让 LLM 把这些点状信息整理成结构化的知识图谱——这一步以前只能靠人工打 tag、建分类，现在 AI 来做。Codepilot 用户已经晒出了整理后的 Obsidian 笔记图谱，视觉上相当震撼。Karpathy 还放出了更详细的实现方案，链接在 GitHub Gist 上，感兴趣的可以直接去扒。

![image](https://pbs.twimg.com/media/HFUDOeIacAAOg-u?format=jpg&name=orig)

### 9. [Chrome 正式支持侧边竖排 Tab：右键窗口，两秒搞定](https://x.com/dotey/status/2041633861671551031)

等了不知道多少年，Chrome 终于原生支持竖排标签页了。操作极简：右键任意窗口 → "Show Tabs Vertically"，立刻生效。对于同时开几十个 Tab 的重度用户来说，横排 Tab 挤成一排找不到的痛苦终于有了官方解法。不是 AI 新闻，但今天刷屏程度不输任何模型发布。

![image](https://pbs.twimg.com/media/HFUh5Pqa8AAql7d?format=jpg&name=orig)

### 10. [GLM 5.1 悄悄开源了，假期期间上线 HuggingFace](https://x.com/Gorden_Sun/status/2041556095060394336)

没有发布会，没有预热，GLM 5.1 就这么在假期期间静默上线了 HuggingFace。国产开源大模型的更新节奏越来越快，而且越来越习惯"低调放出来让社区自己发现"这种方式。具体能力提升幅度目前社区还在测，但对于需要本地部署中文模型的开发者来说，值得第一时间去跑一跑。

---

- **[开源]** [Hermes Agent GitHub](https://x.com/dotey/status/2041585514873037167) - 闭环学习设计让 Agent 越用越强，这个思路比单纯的多平台接入更值得关注
- **[产品]** [DeepSeek 更新了](https://x.com/Gorden_Sun/status/2041546907546530247) - 低调更新，具体变化社区还在挖，有在用的可以去感受一下
- **[研究]** [MemPalace GitHub](https://x.com/Gorden_Sun/status/2041463284763906287) - 30 倍无损压缩这个数字如果属实，对长期记忆方案的影响不小，值得跟进验证
- **[其他]** [否定别人的想法算不上什么本事](https://x.com/dotey/status/2041180255000449527) - 那幅四格漫画说的是会议室里最常见的场景，AI 时代更需要"护火苗"的人
- **[其他]** [学 AI 得自己练，看别人游泳学不会游泳](https://x.com/dotey/status/2041162452155371649) - 这句话值得贴在每个 AI 培训课的开头

---

### [实际现在的 AI 培训只需要教一件事：如何稳定订阅上 Claude](https://x.com/Gorden_Sun/status/2041549868301418717)

有人在 AI 培训课上认真讲提示词技巧、讲工作流搭建、讲 Agent 原理——结果学员最后问的问题是："老师，Claude 怎么付款？"这条推文的评论区大概是今天最有共鸣的地方。Anthropic 收入 300 亿、财富 10 强 8 家都是客户，但对普通用户来说，最高的门槛可能就是那张信用卡。

---

## **🔮 AI趋势预测**

### Claude Mythos 向普通用户开放

- **预测时间**：2026年Q2-Q3
- **预测概率**：70%
- **预测依据**：今日新闻 [Claude Mythos Preview 发布](https://x.com/dotey/status/2041608128022901233) + Anthropic 历史上通常在企业/合作伙伴先行验证后 1-3 个月内向 Pro 用户开放新模型，Mythos 目前处于 Preview 阶段，节奏与此前 Opus 系列一致

### Anthropic 年化收入突破 500 亿

- **预测时间**：2026年Q3
- **预测概率**：65%
- **预测依据**：今日新闻 [Anthropic 年化收入 300 亿](https://x.com/dotey/status/2041307413777883484) + 过去三个月增速分别为：140→190→300 亿，月均增量在加速，企业客户翻倍速度也在提升，按当前斜率推算 Q3 触及 500 亿概率较高

### AI 安全漏洞检测成为大模型标配能力

- **预测时间**：2026年Q2
- **预测概率**：75%
- **预测依据**：今日新闻 [Project Glasswing](https://x.com/Gorden_Sun/status/2041679003460030737) + Anthropic 把最强模型专门用于漏洞检测，这个信号会触发 Google、OpenAI 跟进，安全能力将从"加分项"变成旗舰模型的标配评测维度

### 开源 Agent 框架迎来整合潮

- **预测时间**：2026年Q2
- **预测概率**：60%
- **预测依据**：今日新闻 [Hermes Agent 近三万星](https://x.com/dotey/status/2041585514873037167) + 当前开源 Agent 框架数量已经过多，社区开始出现"选择疲劳"，头部项目（Hermes、OpenClaw 等）将通过功能互补或合并来收拢生态，类似早期前端框架整合的路径

---

## **❓ 相关问题**

### 如何体验 Claude Mythos Preview？

Claude Mythos Preview 目前属于 Anthropic 的 Project Glasswing 专项计划，仅对苹果、微软、亚马逊等合作企业开放，普通用户暂时无法直接使用。现阶段想体验 Anthropic 最新旗舰能力，可以通过 Claude Pro 订阅使用当前最强的公开版本，但国内用户面临支付和账号注册门槛。

**解决方案**：访问 **[爱窝啦 Aivora](https://aivora.cn)** 获取成品 Claude 账号，极速发货，售后无忧，省去折腾支付的麻烦。