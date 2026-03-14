---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/3/15
breadcrumbs: false
next: /2026-03/2026-03-15
description: "每日自动汇总最新 AI 行业动态，帮中文用户用最低成本玩转 ChatGPT、Claude、Cursor、Augment 等 AI 工具。由爱窝啦 AI 账号店提供支持。"
cascade:
  type: docs
---

## **今日摘要**

```
Claude 百万上下文正式开放且不加价，召回率 78% 碾压 GPT-5.4 的 36%，单次能塞 600 页 PDF。
xAI 只剩 2 位创始人，马斯克承认"一开始就没建对"，从 Cursor 紧急挖人补血。
Chrome 146 内置 WebMCP，网页直接变 Agent 接口，浏览器操控不再需要第三方扩展。
```



## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览



> 💡 **提示**：想第一时间体验文中提到的最新 AI 模型（Claude 4.5、GPT、Gemini 3 Pro）？没有账号？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 领个号，一分钟上手，售后无忧。

## **今日AI资讯**

### **👀 只有一句话**
Claude 百万上下文正式开放且不加价，xAI 大换血只剩 2 位创始人，Chrome 146 让 Agent 直接操控浏览器。

### **🔑 3 个关键词**
#上下文革命 #xAI危机 #浏览器Agent

---

## **🔥 重磅 TOP 5**

### 1. [Claude Opus 4.6 和 Sonnet 4.6 百万上下文正式开放，且不加价](https://claude.com/blog/1m-context-ga)

以前处理大型项目，上下文一超 20 万 token 就得加钱，现在直接给你 100 万，价格还是老样子。Opus 4.6 输入 $5、输出 $25（每百万 token），Sonnet 4.6 是 $3/$15，9K 和 900K token 单价完全一样。

更实在的是，单次能塞 600 页 PDF（之前只能 100 页），速率限制也不会因为请求变长而卡你。Opus 4.6 在百万 token 长度下的召回率 78.3%，碾压 GPT-5.4 的 36.6%。Cognition（Devin 背后的公司）说，以前大型代码差异得分批处理，现在一次送入，代码审查质量直接起飞。Claude Code 的 Max、Team 用户默认开启百万上下文，对话压缩频率大幅降低，更多历史得以完整保留。

![image](https://pbs.twimg.com/media/HDTovvJaMAI8jWP?format=png&name=orig)

---

### 2. [Chrome 146 原生支持 WebMCP，Agent 可直接操控浏览器](https://x.com/Gorden_Sun/status/2032839325235425310)

以前让 AI 操控浏览器，要么启动单独的 Chrome 实例，要么装第三方扩展，现在 Chrome 146 直接内置了 WebMCP。网页本身就是 MCP Server，前端 JS 直接变成 Agent 接口，不需要额外的 Python/Node 后端。

相比之前基于 CDP（Chrome DevTools Protocol）的方案，WebMCP 更省 token，准确率更高。只要网站不封号，通用网页操作对 Agent 来说不再是难题。开启方法：打开 `chrome://flags/#enable-webmcp-testing`，勾选启用即可。

![image](https://pbs.twimg.com/media/HDYYHvVa0AArh-A?format=jpg&name=orig)

---

### 3. [xAI 大换血：12 位联合创始人只剩 2 位，马斯克承认"一开始就没建对"](https://x.com/dotey/status/2032588861063168334)

马斯克本周在 X 上公开表态：xAI"一开始就没建对，正在从头重建。"本周联合创始人戴自航（Zihang Dai）离职，张国栋（Guodong Zhang）也告知同事即将离开。加上此前已经走的 Jimmy Ba、Tony Wu、Greg Yang、Toby Pohlen 等人，2023 年成立时的 12 位联合创始人如今只剩 Manuel Kroiss 和 Ross Nordeen 两人。

直接原因是 xAI 的 AI 编程产品表现不佳，Grok 聊天机器人和编程工具始终未能在付费用户中打开市场，与 Claude Code 和 Codex 差距明显。马斯克从 SpaceX 和 Tesla 调派管理人员进驻 xAI，审查员工工作，并解雇了一些被认为表现不达标的人。更魔幻的是，马斯克上月提拔前 DeepMind 研究员 Toby Pohlen 负责数字智能体项目，声称这是公司"最重要的方向"，结果 Pohlen 16 天后就走了。

与此同时，xAI 也在紧急补血，从 AI 编程明星公司 Cursor 挖来了两名高管 Andrew Milich 和 Jason Ginsberg，两人将直接向马斯克汇报。Cursor 目前年化收入已达 20 亿美元，是 AI 编程赛道最炙手可热的公司之一。

![image](https://pbs.twimg.com/media/HDU0M0BXUAAtdEt?format=png&name=orig)

---

### 4. [Google 地图大幅更新：Ask Maps 对话式问答 + 沉浸式 3D 导航](https://blog.google/products-and-platforms/products/maps/ask-maps-immersive-navigation/)

Google 地图新增两个核心功能：Ask Maps（对话式地图问答）和 Immersive Navigation（沉浸式导航）。Ask Maps 能处理多条件、个性化的复杂查询，例如"手机快没电了，哪里能充电又不用排长队买咖啡？"底层整合了超过 3 亿个地点信息和 5 亿+贡献者的评论数据，回答中包含预计到达时间和真人实用建议。

Immersive Navigation 提供全新 3D 视图，实时反映周围建筑、立交桥和地形，关键路段会标注车道线、人行横道、红绿灯和停车标志。智能缩放和透明建筑效果帮助提前预判复杂转弯和变道，开车再也不用担心错过出口。

---

### 5. [Claude 交互式 UI 原理逆向分析及开源实现](https://michaellivs.com/blog/reverse-engineering-claude-generative-ui/)

这篇文章逆向了 Claude 交互式 UI 的原理：本质是工具调用，交互式 UI 的部分直接注入 DOM 渲染，没有使用 iframe 的方式，所以能实现流式渲染。为了保证渲染效果，严格限定了 UI 规范，例如禁止渐变和阴影等。

开源的这个方案比较简单粗暴，直接使用了 iframe，缺点是不能实时渲染且笨重，优点是兼容各家 LLM。开源方案 Github：https://github.com/CopilotKit/OpenGenerativeUI

![image](https://pbs.twimg.com/media/HDYNVrUaMAQE1L9?format=jpg&name=orig)

---

## **📌 值得关注**

- **[产品]** [Codepilot 飞书桥接服务更新](https://m.okjike.com/originalPosts/69b5259a25bae5661277f23a) - 现在几乎可以拉齐飞书官方插件在聊天里的所有体验，流式输出、卡片式结果、带按钮的权限通知卡片
- **[产品]** [Codex APP 支持换肤了](https://x.com/Gorden_Sun/status/2032843686682439909) - 科技以换肤为本，里面有一个叫"Absolutely"的皮肤，显然是暗讽 Claude
- **[开源]** [Reddit CLI 工具发布](https://github.com/jackwener/rdt-cli) - 可以直接在终端里看 feed、逛 subreddit、搜索帖子、读评论树、导出结果，甚至做 upvote/save/subscribe
- **[研究]** [Wholembed v3：超高性能的多模态检索模型](https://mixedbread.com/blog/wholembed-v3) - 能同时检索文本、图片、音频、视频，首个超越 BM25 的大模型
- **[产品]** [Claude 支持生成可交互的图表](https://x.com/Gorden_Sun/status/2032408187568275683) - 免费用户也能用，直接在聊天对话框里展示

---

## **😄 AI趣闻**

### [360 龙虾卫士都来了](https://m.okjike.com/originalPosts/69b53b178b5d34000de1ce5c)

没绷住，360 龙虾卫士都来了🤣 看来 AI 时代，连杀毒软件都要卷起来了。

![image](https://cdnv2.ruguoapp.com/Flbwok-VDgZlC4ZO8Mx2jOj7m3q2v3.heic?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient/heic-exif/1/format/jpeg)

---

## **🔮 AI趋势预测**

### GPT-5 或 Claude 5 系列模型发布
- **预测时间**：2026年Q2
- **预测概率**：70%
- **预测依据**：Claude 百万上下文正式开放 + xAI 大换血表明竞争加剧，OpenAI 和 Anthropic 都在加速迭代，根据历史发布节奏，春季是重大更新的窗口期

### AI Agent 操控浏览器成为标配
- **预测时间**：2026年4月
- **预测概率**：80%
- **预测依据**：今日新闻 [Chrome 146 原生支持 WebMCP](https://x.com/Gorden_Sun/status/2032839325235425310) + 浏览器厂商开始原生支持 Agent 操控，技术成熟度已达到临界点

### AI 编程工具市场重新洗牌
- **预测时间**：2026年Q2
- **预测概率**：65%
- **预测依据**：今日新闻 [xAI 大换血](https://x.com/dotey/status/2032588861063168334) + Cursor 年化收入 20 亿美元，xAI 从 Cursor 挖人表明市场格局正在剧烈变化

---

## **❓ 相关问题**

### 如何体验 Claude Opus 4.6 和 Sonnet 4.6 的百万上下文？

Claude Opus 4.6 和 Sonnet 4.6 的百万上下文目前需要 Claude Max、Team 或 Enterprise 账号才能使用。对于国内用户，可能面临支付困难或账号注册限制。

**解决方案**：访问 **[爱窝啦 Aivora](https://aivora.cn)** 获取成品账号，极速发货,售后无忧。