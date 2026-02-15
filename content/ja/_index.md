---
linkTitle: AI Daily
title: AI Daily-AI资讯日报
breadcrumbs: false
next: /2026-02/2026-02-13
description: "每日自动汇总最新 AI 行业动态，帮中文用户用最低成本玩转 ChatGPT、Claude、Cursor、Augment 等 AI 工具。由爱窝啦 AI 账号店提供支持。"
cascade:
  type: docs
---

## **今日摘要**

```
字节憋了21个月终于亮出豆包2.0完全体，Pro/Lite/Mini三款模型加专属代码模型，个人免费。
神经科学开发者搞出本地记忆系统，AI 终于能跨对话记住你是谁了。
监管约谈八大平台叫停红包大战，国产模型卷完价格该卷产品了。
```



## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览



> 💡 **提示**：想第一时间体验文中提到的最新 AI 模型（Claude 4.5、GPT、Gemini 3 Pro）？没有账号？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 领个号，一分钟上手，售后无忧。

## **今日AI资讯**

### **👀 只有一句话**
豆包大模型2.0正式发布，字节全家桶终于亮出完全体。

### **🔑 3 个关键词**
#豆包2.0 #记忆系统 #开源工具

---

## **🔥 重磅 TOP 10**

### 1. [整整21个月，豆包大模型正式进入2.0时代！](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247869232&idx=1&sn=9ffe8b03cb9bfd2b6682eecc89063ada&chksm=e95fece6cebd6fabbab0bdabc2717201e17fd13777b3213cf1f6f4e144f57f523f5cd8d157e5&scene=0&xtrack=1#rd)

还记得 Seedance 2.0 和 Seedream 5.0 Lite 那波热度吗？字节终于把完全体拿出来了。豆包大模型2.0包含 Pro、Lite、Mini 三款通用模型，外加专为开发者定制的 Seed 2.0 Code。多模态、Agent 能力、推理编程一个不落。21个月的等待，这次字节是真的憋了个大招。对于想用国产模型做全栈开发的朋友，这可能是目前最香的免费方案。

### 2. [字节全家桶 Seed 2.0 + TRAE 玩转 Skill](http://www.ruanyifeng.com/blog/2026/02/seed-2.0.html)

阮一峰老师亲自下场写教程了。用 Seed 2.0 配合 TRAE 编程工具，十分钟就能搞定一个 ASCII 转 Excalidraw 手绘风格的 Web 应用。更绝的是 Skill 机制——把常用提示词打包成技能文件，随时调用。加载 Anthropic 的前端设计技能，页面瞬间从"能用"变"好看"。再配合 Vercel deploy 技能，一键发布到线上。个人用户免费，这波字节确实卷到位了。

![图片](https://cdn.beekka.com/blogimg/asset/202602/bg2026021401.webp)

### 3. [开源 nocturne memory：遵循神经科学的 AI 本地记忆系统](https://linux.do/t/topic/1616409)

搞神经科学的开发者做了个有意思的东西。这个 MCP 记忆系统用 URI 路径管理 AI 的记忆，就像浏览网页一样自然。AI 访问 `core://salem` 这个路径时，只会看到当前层内容和下一层目录，不会一股脑把所有记忆塞进上下文。短短几天，他的 AI 就自己创建了151条记忆路径。最实用的效果？他的 Gemini 3 模型终于不再天天 PUA 他了。SQLite 本地存储，跨对话、跨模型都能保持记忆。

![图片](https://linux.do/uploads/default/optimized/4X/c/3/9/c397009b505fee7d77ac996b2763b1c1ef42dfa6_2_690x344.png)

### 4. [Anthropic CEO 最新访谈：8条反共识观点](https://mp.weixin.qq.com/s/LPsOMQcA6py8BIn3RmV0_g)

Dario Amodei 说了句让人细思极恐的话：最让他惊讶的是，技术在按指数级爆发，公众却还在讨论传统的无聊议题，完全没意识到巨变将至。这位 Anthropic CEO 的访谈里还有7条反共识观点，每一条都值得反复咀嚼。当大多数人还在争论 AI 会不会取代工作时，真正的变革可能已经在悄悄发生了。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/gKN4h2FXXV1MQ1mm2uB6Y4OejucMpXdZF637dNEbd5oBXmDyJRBvuEAQ5icZo8tGpkUEZUtYbZa33uxmickZibJCyqeiaqayyO7Kelw0aF82cR0/0?wx_fmt=jpeg)

### 5. [又搞了个 Skill：让 AI 盯着90个高质量信息源写日报](https://linux.do/t/topic/1615965)

受够了二手 AI 资讯？这位开发者直接对接 Karpathy 推荐的92个技术博客，让 AI 自动筛选、评分、生成中文摘要。2505篇文章经过时间过滤剩60篇，AI 打分后精选5篇。降噪比 167:1，每167篇里挑1篇值得看的。还加了数据可视化——分类饼图、高频关键词条形图，趋势一目了然。项目已开源，想摆脱信息排泄链末端的朋友可以试试。

![图片](https://linux.do/uploads/default/optimized/4X/c/6/b/c6b2869f2d70b9e752d80f884ee06abdeccf8720_2_690x385.jpeg)

### 6. [Minimax 部分 Skills 抄袭 Kimi 和开源社区？](https://linux.do/t/topic/1616263)

有人导出了 GLM、Kimi、Minimax 三家的官方 Skills，发现 Minimax 的代码里居然有 Kimi 字样，相似度高达81.8%。更离谱的是，小红书上有人发现自己写的合同审核助手被 Minimax 直接拿去用了，连署名都没有。虽然 Minimax 已经道歉删除，但这波操作确实让人对 Agent 生态的版权问题打了个问号。三家的 Agent 模式都没做防护，AI 遇到导出问题还会自己帮忙修复。

![图片](https://linux.do/uploads/default/optimized/4X/2/0/9/20952da341d477a327a99f2e7c65a7dde6086241_2_690x343.png)

### 7. [Codex 硬编码 PowerShell 导致乱码？教你用 Bash 绕过](https://linux.do/t/topic/1615892)

Windows 用户用 Codex 写代码，注释全是乱码？罪魁祸首是 PowerShell 的 GB2312 编码。官方把 Codex 硬编码成只能用 PowerShell，没有任何官方办法可以改。但有人在源码里找到了一个小口子：开启 unified_exec 模式后，exec_command 工具会暴露一个 Shell 参数。在 AGENTS.md 里加一行指令，就能强制每次调用 Git Bash。不用重编译40分钟，两步搞定。

![图片](https://linux.do/uploads/default/optimized/4X/c/5/0/c50ddefc44c19071faee13061301759d43720d36_2_450x500.png)

### 8. [一周 6000+ Star！nanoclaw 轻量开源平替火了](https://mp.weixin.qq.com/s?__biz=MzUxNjg4NDEzNA==&mid=2247531315&idx=1&sn=dcc41e589c929c0a0989795a1d8a0e29)

500行 TypeScript 打造的极简 AI 助手框架。和 nanochat 不同，nanoclaw 主打安全隔离——每个对话 Session 都运行在独立的 Apple 容器里。AI 想乱删文件？只能删掉沙盒里的临时文件，伤不到你的系统。作者说得好：他不仅想要一个能干活的 AI，更想要一个不让他提心吊胆的 AI。克隆仓库后运行 `/setup`，Claude Code 会帮你处理一切。

![图片](https://wechat2rss.bestblogs.dev/img-proxy/?k=2967c159&u=https%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_png%2FM2ibDBMdECU0Bmo4Fbiaxibvz40PIDGibzH1eKaRRicbt46CC42HjjM9GZjCSDUwic1mgfD0nSygInico12YkMFSDVic9MUFm0kfEicj8rcnPGKSV9Yw%2F640%3Fwx_fmt%3Dpng%26from%3Dappmsg)

### 9. [AI 红包大战被喊停，市场监管总局约谈八大平台](https://m.okjike.com/originalPosts/69906a98e6f2a23d0d12d2fb)

前段时间闹得满城风雨的 AI 红包大战，终于被叫停了。2月13日，市场监管总局约谈阿里、抖音、百度、腾讯、京东、美团、淘宝闪购、DeepSeek 八家企业。主题很明确：杜绝"内卷式"竞争。有意思的是，DeepSeek 确实没参与红包大战，所以除它之外其他家都被点名。会后还单独留下某代表沟通。官方态度很清楚：别整这些有的没的，先把模型做好。

![图片](https://cdnv2.ruguoapp.com/Fr_a2yfLRTnaKzDtf_n0QdXFbPLfv3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient)

### 10. [Chrome DevTools MCP：面向编程代理的浏览器调试工具](https://github.com/ChromeDevTools/chrome-devtools-mcp)

Chrome 官方出品，专门给 AI 编程代理用的开发者工具。已经拿下 25000+ Star。以后让 AI 帮你调试前端代码，它能直接操作 Chrome DevTools 了。这对于 Agent 自动化测试、网页爬取、前端开发辅助都是重大利好。想象一下：你描述一个 bug，AI 自己打开控制台、定位问题、修复代码，全程不用你动手。

---

## **📌 值得关注**

- **[产品]** [Gina：可视化讲题 Agent](https://linux.do/t/topic/1616459) - vibe-code 产物，上下文维护是真的难
- **[产品]** [tambo：React 生成式 UI SDK](https://github.com/tambo-ai/tambo) - 9500+ Star，做 AI 应用前端的可以看看
- **[开源]** [rowboat：带记忆功能的 AI 协作助手](https://github.com/rowboatlabs/rowboat) - 6000 Star，开源 Agent 又一选择
- **[开源]** [letta-code：记忆优先的编程代理](https://github.com/letta-ai/letta-code) - 1200 Star，主打记忆能力
- **[开源]** [wifi-densepose：WiFi 穿墙人体追踪](https://github.com/ruvnet/wifi-densepose) - 6000+ Star，用普通路由器实现全身追踪，有点科幻
- **[研究]** [清华新框架让大模型学会精读略读](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247869232&idx=3&sn=e53d395451087f989957c55c18a5e4c5) - 12倍端到端加速，基准评分翻倍
- **[研究]** [中国 AI 突破300年亲吻数难题](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247869232&idx=2&sn=ebacb986de42bd8404c005c0a7b9eec5) - 情人节最硬核的 Kiss

---

## **😄 AI趣闻**

### [朋友在小红书看到的智谱 GLM 5，笑死](https://linux.do/t/topic/1615875)

智谱的 GLM 5 被网友玩坏了。有人让它列出"年度编程语言 Top10"，结果它给出的列表里居然有表情包。评论区已经笑成一片，有人说这是"AI 的幽默感觉醒"，也有人说"这就是为什么我们还需要人类程序员"。😂

![图片](https://linux.do/uploads/default/optimized/4X/d/8/d/d8d608d533b5d6020c773de9901724e59502486b_2_227x499.jpeg)

---

## **🔮 AI趋势预测**

### 字节 Seed 生态将快速扩张
- **预测时间**：2026年Q1-Q2
- **预测概率**：75%
- **预测依据**：今日新闻[豆包大模型2.0发布](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247869232&idx=1&sn=9ffe8b03cb9bfd2b6682eecc89063ada) + 字节全家桶（Seed 2.0 + TRAE + Skill）已形成闭环，免费策略将吸引大量开发者

### AI Agent 记忆系统成为标配
- **预测时间**：2026年3-4月
- **预测概率**：70%
- **预测依据**：今日新闻[nocturne memory](https://linux.do/t/topic/1616409)、[rowboat](https://github.com/rowboatlabs/rowboat)、[letta-code](https://github.com/letta-ai/letta-code) 等多个记忆系统项目同时火爆，说明市场需求强烈

### 国内 AI 红包/补贴大战暂时熄火
- **预测时间**：2026年Q1
- **预测概率**：85%
- **预测依据**：今日新闻[市场监管总局约谈八大平台](https://m.okjike.com/originalPosts/69906a98e6f2a23d0d12d2fb) + 监管态度明确，短期内各家会收敛

---

## **❓ 相关问题**

### 如何体验豆包大模型 2.0？

豆包大模型 2.0 目前可通过字节的 TRAE 编程工具免费使用，支持 Seed-2.0-Code 等多款模型。国内用户可直接下载 TRAE 体验。

**解决方案**：如需体验 Claude、GPT 等海外模型，访问 **[爱窝啦 Aivora](https://aivora.cn)** 获取成品账号，极速发货，售后无忧。