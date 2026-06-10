---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/6/10
breadcrumbs: false
next: /2026-06/2026-06-10
description: "每日自动汇总最新 AI 行业动态，帮中文用户用最低成本玩转 ChatGPT、Claude、Cursor、Augment 等 AI 工具。由爱窝啦 AI 账号店提供支持。"
cascade:
  type: docs
---

## **今日摘要**

```
Anthropic 发布 Fable 5，代号"平民版 Mythos"，Agent Coding 跑分 88% 首次压过 GPT，价格砍半。
更值得警惕的是那颗反蒸馏地雷：偷用它训练模型，系统不报错，只悄悄给你喂劣质输出。
今天的底线是：靠蒸馏 Claude 追赶大厂的团队，路快被堵死了。
```

## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览

> 💡 **提示**：想第一时间体验文中提到的最新 AI 模型（Claude 4.5、GPT、Gemini 3 Pro）？没有账号？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 领个号，一分钟上手，售后无忧。

## **今日AI资讯**

### **👀 只有一句话**
Anthropic 把压箱底的 Mythos 级模型开放给了普通用户，代号 Fable 5，同时悄悄给它装上了反蒸馏地雷。

### **🔑 3 个关键词**
#Fable5炸场 #防蒸馏暗雷 #人已退居幕后

---

## **🔥 重磅 TOP 10**

### 1. [Claude Fable 5 正式发布：Mythos 级能力首次对外开放](https://x.com/AnthropicAI/status/2064394443856232582)

就在大家还在讨论 Opus 4.8 够不够用的时候，Anthropic 直接把压箱底的货开了口子。Fable 5 和 Mythos 5 跑同一套底层，区别只是做了安全调优给普通人用。Agent Coding 方面比 Opus 4.8 高出一大截，Terminal-Bench 2.1 打出 88%，把 GPT 的 83.4% 踩在脚下——这是 Claude 系列头一次在这个榜单翻身。API 定价输入 $10/M、输出 $50/M，比 Mythos Preview 便宜了一半。Pro、Max、Team 和企业用户现在就能用。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2064389698190012416/vid/avc1/2160x2160/cRYBJVhIVvopbO92.mp4?tag=27"></video>

---

### 2. [Fable 5 实测：漏洞分析很猛，写代码有点偏科](https://x.com/op7418/status/2064562215345381472)

26 万行代码的 CodePilot 仓库，拿 Fable 5 扫了一遍。找 bug、分析漏洞这两件事上远超 4.8，但让它直接生成大段新代码，跑出来的结果还是会有明显 bug，需要多次迭代才能收尾。作者原话是"偏科比较严重的模型"——安全分析和代码理解是强项，但别指望它一次性把功能从零写完。想用它做安全审计或 code review 的人，这个信号值得参考。

![image](https://pbs.twimg.com/media/HKbMYifaEAAZKnE?format=jpg&name=orig)

---

### 3. [Anthropic 悄悄给 Fable 5 装了防蒸馏机制](https://m.okjike.com/originalPosts/6a285c4aaa39df51040f9410)

今天最安静却可能影响最深远的一颗雷。Anthropic 针对 Fable 5 启用了反蒸馏策略：一旦检测到有人在用它训练其他模型，系统不会报错，而是悄悄通过提示词修改、引导向量（Steering Vectors）和 PEFT 主动降低自己的输出质量。没有任何通知，没有任何警告。依赖蒸馏 Anthropic 模型来训练自家模型的团队，等于踩了一颗隐形地雷——你永远不知道拿到的输出有没有被"水过"。

![image](https://cdnv2.ruguoapp.com/Fi7vCyrRRvF-V6xkAZYWad13A_wKv3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient)

---

### 4. [科研 AI 工具 Mira 正式上线：专家小队 + 科研画布，4 小时肝出论文初稿](https://www.36kr.com/p/3846731635821058)

以前做科研，Zotero 查文献、VS Code 跑代码、各种图表工具来回切，注意力刚进状态又被打断。Mira（前身 SciClaw）经历两个月、上万名科研人内测之后，把这些散件拼成了一个闭环——专家小队让你像配置实验室团队一样分配 AI 角色，科研画布把文献、代码、结果放进同一个界面，LLM WIKI 打通知识库。官方说法是可以在 4 小时内跑出论文初稿。工具链反复横跳的科研人，这个值得试一试。

![image](https://img.36krcdn.com/hsossms/20260610/v2_1dccc3635dba46daaac8e18f9183fcb7@5091053_oswg763543oswg1080oswg601_img_000?x-oss-process=image/format,jpg/interlace,1)

---

### 5. [Claude Code 一周年复盘：人已经不直接跟 AI 说话了](https://x.com/dotey/status/2064596313702805997)

一年前，第一个 demo 发到内部 Slack，只收到两个 emoji。现在，每天有几千个自主 Agent 在跑。创始人 Boris Cherny 说他已经不直接跟 Claude 说话了——"我跟一个 loop 说话，由 loop 去驱动 Claude"。产品负责人 Cat Wu 留下的一个边界 bug，当晚被"另一个 Claude"先修好了：同事的 routine 专盯 5 小时无人响应的 bug，自动提 PR，容易验证的直接合并。从工具到 routine，这才是 Agent 真正落地的样子。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2064593638194286592/vid/avc1/1572x1080/-9XQkS49t0z537YG.mp4?tag=27"></video>

---

### 6. [Fable 5 创意测评：视频元提示词写得出乎意料地好](https://x.com/Gorden_Sun/status/2064580026952188281)

除了代码能力，今天也有人专门测了 Fable 5 的创意侧。结论是它写视频元提示词（meta-prompt）这件事上表现出乎意料地好——能理解镜头语言、节奏感和画面意图，不只是机械拼凑描述词。对做 AI 视频、需要大量生成高质量提示词的创作者来说，这个能力可能比代码更实用。两段示例视频放出来，细节和构图意图的表达都有相当层次感。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2064579889387511808/vid/avc1/720x1280/hqUECyblJRtP4ylf.mp4?tag=27"></video>

---

### 7. [通宵用 Codex 开发口播提词器，5 小时跑出一个比收费软件还好用的工具](https://x.com/vista8/status/2064537800783941945)

昨晚通宵，Codex 目标模式跑了整整五个小时，产出是一个开源口播提词器。开发者自评比市面上大多数收费提词器好用，目前主要配合大疆 Pocket 3 使用，手机录制功能还没加。整个项目已经免费开源，欢迎 Star 或 Fork 二次开发。这条的意义不只是工具本身——一个人通宵加 Codex 五小时，直接干出一个可用产品并开源，这就是今天 AI 辅助开发的真实水位。

---

### 8. [Dayflow：用 AI 帮你记录整天的 Mac 行为，免费 API 就够用](https://t.me/aigc1024/21104)

每天在电脑上干了什么，两小时后自己都不记得了。Dayflow 的做法是：每隔几分钟截一次屏，压缩成小视频交给 AI 解析，整理成可查询的文字记录。你可以问它"我今天下午三点在干嘛"，也可以导出每日行为文档喂给别的 AI 当记忆上下文。项目开源，接 Google AI Studio 的免费 API Key 就行，Gemini 2.5 Flash Lite 的精度已够用，免费配额能覆盖 16 小时以上的 Mac 使用记录。对社畜来说，大多数"生活"都发生在电脑上，这个思路比穿戴硬件实用得多。

![image](https://cdn5.telesco.pe/file/da3H6aqkThTmWOvzXBBjNLgKScVGpGB4IfIKUXYdanrWQzlZO18HqcU5uHJ3Fin8YobDkdtaz262fJEQuuoiek1Wpngm7mG2LWf4h0eCHPQEjGGle3-1aSJxII8eTdPYDpTBU_Dc_hfDvbTY5g6ovU-jUmK4SE3qadjpB90ZRSNGQNORvxQHfAe6dmFAI5gCQdHZyz9O17cHZN_m8yEDpO_4dESFMozr8hvpy6zf_h3zQMes0QNJX4gH6hLFx6H8kZDMzj67I9nWFlbSC456rCEedgiVYw9lVNTunnvNHVgI8KYQPrZiGuYiqqqozaYyKCleDyFCzF6TF1DiOCFWCw.jpg)

---

### 9. [AI 系统提示词收录库再上 GitHub 日榜，覆盖 Kiro、Cursor、Devin 等 27 个工具](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools)

想知道 Cursor、Claude Code、Devin 这些工具背后藏了什么系统提示词？这个仓库全都扒出来了，收录了 27 个主流 AI 编程和 Agent 工具，包括 Kiro、Windsurf、Manus、Replit、Lovable 等，内部工具调用方式和模型信息也一并整理进来。总 Star 超过 13.9 万，今日单日新增 79 颗。研究 prompt 工程、想了解各工具设计思路、或者单纯好奇"这些 AI 背后到底在想什么"的开发者，这是一手资料。

---

### 10. [AI 创意短片《小心滤镜》上线](https://x.com/Gorden_Sun/status/2064620279138341235)

今天 AI 视频方向也有值得看的产出。这条短片从构思到呈现全程 AI 参与，主题围绕"滤镜"展开，视觉语言和叙事节奏都有相当完成度——不是随机生成的拼接感，而是有意识在做创意表达。和同一作者测 Fable 5 提示词放在一起看，挺有意思：工具在变强，但真正的创意判断还得人来把关。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2064620110917312512/vid/avc1/720x1280/NvfF32eYOd1C9ot6.mp4?tag=27"></video>

---

## **📌 值得关注**

**[产品]** [美团 AI 浏览器 Tabbit V1.0 正式发布，承诺核心功能永久免费](https://www.36kr.com/p/3845982766680581) — 美团 GN06 团队做的，支持 10 多个顶级模型、Agent 任务执行和 MCP 工具，100 天 12 个版本迭代出来，定位是"低门槛用到头部模型"，免费这个承诺能撑多久值得观察。

**[其他]** [苏格拉底提问法在 AI 时代的新用法](https://t.me/aigc1024/21108) — 不会问 AI？这篇文章拿苏格拉底的追问结构来拆解提示词逻辑，比大多数"提示词技巧"文章更有底层方法论，适合想系统提升提问质量的人。

---

## **🔮 AI趋势预测**

### Fable 5 引发 Agent Coding 赛道重新洗牌
- **预测时间**：2026年7月
- **预测概率**：75%
- **预测依据**：今日新闻 [Claude Fable 5 正式发布](https://x.com/AnthropicAI/status/2064394443856232582) + Terminal-Bench 2.1 以 88% 首次超越 GPT，Agent Coding 基准远超 Opus 4.8，主流 IDE 插件和 Agent 框架短期内大概率快速接入，用户迁移窗口已经打开。

### Anthropic 防蒸馏机制引发行业连锁反应
- **预测时间**：2026年Q3
- **预测概率**：60%
- **预测依据**：今日新闻 [Fable 5 反蒸馏策略曝光](https://m.okjike.com/originalPosts/6a285c4aaa39df51040f9410) + 蒸馏是当前开源社区和中小公司追赶闭源大厂的核心路径，Anthropic 这套机制一旦被验证有效，OpenAI 和 Google 跟进类似防护的概率很高，将从根本上改变开源模型的追赶逻辑。

### "Loop 驱动 Agent"成为主流开发范式
- **预测时间**：2026年Q3
- **预测概率**：70%
- **预测依据**：今日新闻 [Claude Code 一周年复盘](https://x.com/dotey/status/2064596313702805997) 中 Boris Cherny 描述的 Human → Routine → Agent 三层结构，已经是 Claude Code 内部的真实工作方式；结合 Fable 5 的 Agent 能力强化，这种范式将在接下来几个月内被更多开发团队采用并写成最佳实践。

### AI 科研工具迎来集中爆发期
- **预测时间**：2026年7月—8月
- **预测概率**：65%
- **预测依据**：今日新闻 [Mira 正式上线](https://www.36kr.com/p/3846731635821058) + 科研 AI 工具经历上万人内测后才正式发版，验证了学术圈对 AI 工具接受度正在快速提升；叠加 Fable 5 强模型底座，未来两个月内大概率还会有多个聚焦科研场景的垂直工具集中亮相。

---

## **❓ 相关问题**

### 如何体验 Claude Fable 5？

Claude Fable 5 目前已向 API、Pro、Max、Team 及企业用户开放。对国内用户来说，直接注册 Anthropic 账号可能遇到手机号验证和支付方式的限制，API 调用还需要绑定境外信用卡，门槛不低。

**解决方案**：访问 **[爱窝啦 Aivora](https://aivora.cn)** 获取 Claude 成品账号，免去注册和支付的繁琐流程，极速发货，售后无忧。