---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/3/22
breadcrumbs: false
next: /2026-03/2026-03-22
description: "每日自动汇总最新 AI 行业动态，帮中文用户用最低成本玩转 ChatGPT、Claude、Cursor、Augment 等 AI 工具。由爱窝啦 AI 账号店提供支持。"
cascade:
  type: docs
---

## **今日摘要**

```
英伟达开源30B参数模型，仅3B激活就拿下三枚国际竞赛金牌，消费级显卡也能跑竞赛级推理。
Cursor被扒出底层偷用Kimi开源模型却不标注，Kimi白捡几百万曝光，Cursor信誉翻车。
小模型碾压大块头，套壳不透明翻车——今天的教训：效率和诚实才是硬通货。
```



## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览



> 💡 **提示**：想第一时间体验文中提到的最新 AI 模型（Claude 4.5、GPT、Gemini 3 Pro）？没有账号？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 领个号，一分钟上手，售后无忧。

## **今日AI资讯**

### **👀 只有一句话**
英伟达用30B参数拿下三枚国际竞赛金牌，小模型正在碾压大块头。

### **🔑 3 个关键词**
#小模型逆袭 #VibeCoding心法 #Cursor乌龙收场

---

## **🔥 重磅 TOP 6**

### 1. [英伟达开源 Nemotron-Cascade-2：30B 参数，3B 激活，斩获三枚国际竞赛金牌](https://x.com/Gorden_Sun/status/2035274882280308881)

想象一下：一个"瘦子"走上举重台，旁边站着 671B 的 DeepSeek-V3.2 大块头——结果瘦子一样举起了金牌。英伟达刚开源的 Nemotron-Cascade-2 就干了这事：总参数 30B、实际激活仅 3B，却拿下国际数学奥林匹克、智力竞赛、计算机竞赛三枚金牌。代码能力甚至超过 Qwen3.5-35B-A3B。这意味着什么？以后你在消费级显卡上跑本地模型，也能获得竞赛级推理能力。模型已上 HuggingFace，手痒的朋友可以直接下载试玩。小模型时代，效率才是王道。

![image](https://pbs.twimg.com/media/HD6_skgboAE7OsQ?format=jpg&name=orig)

### 2. [Cursor Composer 2 乌龙事件复盘：Kimi 成最大赢家，Cursor 信誉受损](https://x.com/dotey/status/2035132139893588140)

这场闹剧终于有了定论。事情很简单：Cursor 发布 Composer 2 时只字不提底层用了开源模型，结果被人扒出来——原来是 Fireworks AI 基于 Kimi/Moonshot 的开源模型做的 RL 微调。赢家和输家很明确：**Kimi 零成本收获几百万曝光**，证明自家开源模型强到能被顶级编程工具选做底座；Fireworks AI 也借机从"推理服务商"升级为"有全参数 RL 能力的基础设施公司"；唯独 Cursor 挨了一顿骂，信誉折损不小。这件事给所有 AI 产品一个教训：**用开源没问题，但藏着掖着就是自找麻烦。**

### 3. [Claude Code 小技巧：一行配置去掉烦人的 co-author 标签](https://x.com/dotey/status/2035411263375765753)

用 Claude Code 提交代码的朋友应该都注意到了——每次 git commit 都会被自动加上 Claude 的 co-author 署名，搞得你的 GitHub 贡献图全是 AI 的脸。有人发现了一个巧妙的解法：在 `~/.claude/settings.json` 里加一行 `"attribution": { "commit": "", "pr": "" }` 就搞定。有趣的是，OpenAI 的 Codex 压根不加这个标签。有人调侃这是 Anthropic 的"品牌植入策略"——让全 GitHub 都看到 Claude 的名字。不管怎样，不想被"署名"的开发者，现在有办法了。

![image](https://pbs.twimg.com/media/HD87citbwAAHD3g?format=jpg&name=orig)

### 4. [Vibe Coding 实战心法：文件拆分是让 AI 写出靠谱代码的关键](https://x.com/dotey/status/2035437709544579525)

"为什么 AI 写的代码总是到处拼凑、前后矛盾？"——如果你也有这个困扰，响马和 yetone 的经验可能值得一听。核心观点只有一个：**把复杂架构拆成小文件，让 AI 能根据文件名索引到一个装进单次上下文的自洽逻辑**，远比让它猜测全局状态要稳定得多。yetone 补充了两个拆分信号：逻辑被多处复用时、状态流转过于复杂时。响马甚至说自己"几乎每天都会要求 AI 重构一部分代码"。这不是 AI 的问题，是人如何引导 AI 的问题。Vibe Coding 不是放手不管，而是学会给 AI 搭好脚手架。

### 5. [Codepilot 配置避坑指南：为什么你按文档配了还是不生效](https://x.com/op7418/status/2035180804410941655)

这条特别实用。很多人用 Codepilot 配置第三方服务商时踩了同一个坑：把 OpenAI 的兼容链接填进了 Anthropic 的配置栏——看起来填对了，实际上接口根本对不上。作者检查日志后发现，问题出在用户混淆了不同服务商的 API 端点格式。正确做法是：如果用智谱等默认服务商，只填一个 Token 就够了；如果用第三方 Anthropic，一定要确认填的是 Anthropic 格式的链接而非 OpenAI 兼容格式。听起来简单？但这个问题的咨询量大到作者专门发了一条长帖。**配置前多看一眼日志，能省你两小时排查时间。**

![image](https://pbs.twimg.com/media/HD5pyIobIAAi-pg?format=jpg&name=orig)

### 6. [一位 AI 创业者的融资复盘：合成数据赛道的得与失](https://x.com/dotey/status/2035403905056583799)

这篇复盘读完让人五味杂陈。一位 solo founder 从 2024 年 7 月开始做合成数据，拿到 150 万美元真实订单，客户包括国内外大厂和 AI 公司，股权干净得几乎完美——但就是因为"不够坚定"，没认真推进融资。被一位 VC 半开玩笑的一句"左脚踩右脚怎么上天"动摇了信心，又被朋友劝"安心赚钱就好"。结果错过了最佳融资窗口。作者反思："如果那时候认真聊 10 家，第一轮拿 200-300 万美元并不难。"**创业最贵的成本不是钱，是犹豫。** 这篇适合所有正在创业路上纠结的朋友细读。

---

## **📌 值得关注**

- **[开源]** [Skill 即软件：用一万条推文积累做出文本形态的"软件"](https://x.com/dotey/status/2035071792860086646) — 把你的知识沉淀变成可复用的 AI skill，思路很有意思
- **[产品]** [Nano Banana 2 生成效果惊艳，用来做壁纸刚刚好](https://x.com/Gorden_Sun/status/2035027169924243862) — 山水远景、自定义配色，AI 绘画已经到了"能直接当壁纸"的水平
- **[其他]** [腾讯把"装虾"营销吹到了海底捞](https://m.okjike.com/originalPosts/69bd562e167d3b2dc8574c09) — 云服务器 × 火锅店联动，这波跨界属实没看懂
- **[产品]** [有人在 Nintendo Switch 上跑起了 Claw AI](https://x.com/Gorden_Sun/status/2035007422893547573) — 吃灰 Switch 终于有了新用途，教程明天发布

---

## **😄 AI趣闻**

### [有人在 Nintendo Switch 上跑 AI 了，吃灰主机党狂喜](https://x.com/Gorden_Sun/status/2035007422893547573)

全球第一个在 Nintendo Switch 上跑起来的 Claw AI！网友锐评："别人的 Switch 在跑 AI，我的 Switch 在积灰。" 原 po 还承诺明天发教程。评论区已经有人在盘算：要不要趁机高价卖掉吃灰的 Switch… 😂

![image](https://pbs.twimg.com/media/HD3GUtAaYAAeo73?format=jpg&name=orig)

---

## **🔮 AI趋势预测**

### 小参数竞赛级模型将在本地部署场景爆发
- **预测时间**：2026年 Q2
- **预测概率**：75%
- **预测依据**：今日新闻 [英伟达开源 Nemotron-Cascade-2](https://x.com/Gorden_Sun/status/2035274882280308881) 证明 3B 激活参数就能拿竞赛金牌 + 近期 Qwen、DeepSeek 等也在激进压缩模型体积，消费级硬件跑高质量推理的门槛正在快速降低

### Cursor 类编程工具的模型透明度将成为行业标准
- **预测时间**：2026年 4-5月
- **预测概率**：60%
- **预测依据**：今日新闻 [Cursor Composer 2 乌龙事件](https://x.com/dotey/status/2035132139893588140) 引发开发者对底层模型知情权的强烈诉求 + 开源社区对"套壳不标注"的容忍度越来越低，预计会有更多工具主动披露模型来源

### 合成数据赛道将迎来新一轮融资热
- **预测时间**：2026年 Q2
- **预测概率**：55%
- **预测依据**：今日新闻 [合成数据创业者融资复盘](https://x.com/dotey/status/2035403905056583799) 反映该赛道已有真实大厂订单需求 + 随着模型训练对高质量数据的饥渴加剧，VC 对合成数据的认知正从"左脚踩右脚"转向"刚需基础设施"

---

## **❓ 相关问题**

### 如何体验 Claude Code？

Claude Code 目前需要 Anthropic 的 Max 订阅计划才能使用完整功能。对于国内用户，可能面临支付方式受限或账号注册困难的问题。

**解决方案**：访问 **[爱窝啦 Aivora](https://aivora.cn)** 获取成品账号，极速发货，售后无忧。