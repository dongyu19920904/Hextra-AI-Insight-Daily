---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/2/11
breadcrumbs: false
next: /2026-02/2026-02-11
description: "每日自动汇总最新 AI 行业动态，帮中文用户用最低成本玩转 ChatGPT、Claude、Cursor、Augment 等 AI 工具。由爱窝啦 AI 账号店提供支持。"
cascade:
  type: docs
---

## **今日摘要**

```
开源TTS家族一口气放出5个模型，对话语音生成在竞技场评测里直接干翻豆包和Gemini。
Seedance 2.0能吃产品截图自动出Apple风格宣传片，视频生成这块基本无敌了。
开源党又赢麻了，想做有声书和配音视频的赶紧去试。
```



## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览



> 💡 **提示**：想第一时间体验文中提到的最新 AI 模型（Claude 4.5、GPT、Gemini 3 Pro）？没有账号？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 领个号，一分钟上手，售后无忧。

## **今日AI资讯**

### **👀 只有一句话**
开源TTS家族一口气放出5个模型，对话语音生成直接干翻豆包和Gemini。

### **🔑 3 个关键词**
#开源狂欢 #视频生成炸裂 #程序员焦虑

---

## **🔥 重磅 TOP 10**

### 1. [MOSS-TTS家族全开源：5个模型一次放出](https://linux.do/t/topic/1592317)

以前想做个有声书、配音视频，要么花大价钱买商业TTS，要么忍受机器人味儿十足的免费方案。现在MOSI.AI和OpenMOSS团队一口气开源了5个语音生成模型，从长文本朗读到多人对话、从音色设计到实时流式TTS全覆盖。最狠的是对话模型MOSS-TTSD v1.0，在竞技场评测里直接战胜了豆包和Gemini 2.5 Pro。8B参数的旗舰模型支持中英混合、拼音精细控制，1.7B的轻量版本适合实时场景。开源党又赢麻了。

![图片](https://linux.do/uploads/default/optimized/4X/b/b/f/bbf44dda721ae3486368943ab819446a6d71dc93_2_690x341.jpeg)

### 2. [Seedance 2.0产品宣传片能力炸裂](https://x.com/op7418/status/2021245204963946917)

做产品宣传片最头疼的是什么？找素材、剪节奏、配文字，一套下来没个三五天搞不定。Seedance 2.0现在能直接吃产品截图，自动抽象关键词、编排展示逻辑，一次生成就是Apple风格的成片。图片文字全能对上，各种风格节奏都能驾驭。有人用它给Claude Code桌面端做了个广告片，单次生成，效果惊艳。视频生成这块，基本无敌了。

### 3. [Shannon：全自动AI黑客达到96%漏洞发现率](https://github.com/KeygraphHQ/shannon)

安全测试工程师可能要睡不着了。Shannon是一个全自动的AI黑客工具，专门用来发现Web应用的真实漏洞。在无提示、源码感知的XBOW基准测试中，成功率达到了96.15%。不需要人工指导，丢进去就能自己挖洞。虽然这对防守方是噩梦，但换个角度想，企业终于能用AI来给自己做渗透测试了。Star数已经快2万。

### 4. [千问发布Qwen-Image-2.0：文字生成能力大幅提升](https://x.com/Gorden_Sun/status/2021167665335685520)

AI画图最让人抓狂的就是文字渲染，要么糊成一团，要么直接乱码。千问新发布的Qwen-Image-2.0专门强化了这块，能生成带文字的PPT和漫画，分辨率直接拉到2K。官方说年后会开源，目前只能在官网体验。虽然整体还比不上Banana Pro，但对于需要快速出图的场景已经够用了。

![图片](https://pbs.twimg.com/media/HAyhPeEboAA7zoq?format=jpg&name=orig)

### 5. [Google开源langextract：从非结构化文本提取结构化信息](https://github.com/google/langextract)

处理一堆乱七八糟的文档，想从里面抽出关键信息？以前要写一堆正则表达式，现在Google开源了langextract，用LLM直接提取结构化数据，还能精确定位信息来源、生成交互式可视化。Star数已经2.8万，Python库直接pip安装就能用。做数据清洗和文档处理的同学可以关注下。

### 6. [draw.io官方推出MCP Server和Claude Code Skill](https://linux.do/t/topic/1602943)

画UML图这件事终于能让AI代劳了。draw.io官方刚推出了MCP Server，配合Claude Code使用，一句话就能生成专业的流程图、时序图。有开发者还基于官方提示词做了个Skill版本，Token消耗更少。输入"画一个TCP连接流程时序图"，自动生成HTML文件并在浏览器渲染。开发者画图效率直接起飞。

![图片](https://linux.do/uploads/default/optimized/4X/e/4/9/e4972a88c600f768ff361433898e6ef0a480276c_2_690x425.jpeg)

### 7. [GitHub发布gh-aw：智能体工作流正式落地](https://github.com/github/gh-aw)

GitHub官方出手了。gh-aw是GitHub推出的智能体工作流工具，让AI Agent能够直接在GitHub生态里跑起来。虽然Star数刚过1300，但这是官方产品，意味着Agent开发终于有了标准化的基础设施。配合Copilot和Actions，自动化开发流程又近了一步。

### 8. [Pydantic团队开源Monty：专为AI设计的Python解释器](https://github.com/pydantic/monty)

Pydantic团队用Rust写了个Python解释器，专门给AI用。Monty的特点是轻量、安全，适合在沙箱环境里执行AI生成的代码。4500+ Star说明社区很买账。以后让AI写代码、跑代码，安全性终于有保障了。

### 9. [小爱音箱语音通知工具：AI任务完成自动播报](https://linux.do/t/topic/1594256)

"妈妈再也不用担心长任务有没有完成啦"——这个工具让你的小爱音箱变成AI助手的通知器。支持CLI、TUI、MCP、Webhook多种方式，配合Claude Code使用，任务完成自动语音播报。在AGENTS.md里加一句"每次完成任务用音响通知我"，小爱就会喵喵叫着告诉你代码写完了。

![图片](https://linux.do/uploads/default/optimized/4X/5/c/c/5cc457a3b10cce1142471010d74548ee43ed9f5d_2_690x354.png)

### 10. [Kaku终端：为AI Coding打造的极速终端](https://x.com/vista8/status/2021223842421608884)

Tw93大佬送出的新年礼物。Kaku是一款用Rust开发的终端工具，速度接近Alacritty，但支持多Tab和分屏。专门为AI Coding场景设计，一边跑Claude Code，一边用Codex Review，底部还能看git diff。开箱即用，不需要任何配置。颜值在线，速度在线。

![图片](https://pbs.twimg.com/media/HAzUQUOaAAIontU.jpg)

---

## **📌 值得关注**

- **[产品]** [AionUi：全天候AI协作工具](https://github.com/iOfficeAI/AionUi) - 支持Gemini CLI、Claude Code、Codex等一堆AI工具的本地协作平台，Star 1.4万
- **[开源]** [awesome-llm-apps合集更新](https://github.com/Shubhamsaboo/awesome-llm-apps) - 9.3万Star的LLM应用精选，AI Agent和RAG应用一网打尽
- **[开源]** [Claude Code复合工程插件](https://github.com/EveryInc/compound-engineering-plugin) - 官方出品，8000+ Star
- **[研究]** [dexter：深度金融研究自主智能体](https://github.com/virattt/dexter) - 1.4万Star，金融分析师的AI替身
- **[工具]** [drawdb：在线数据库图表编辑器](https://github.com/drawdb-io/drawdb) - 3.6万Star，免费简洁的ER图工具
- **[观点]** [AI时代学英语还有没有用？](https://x.com/dotey/status/2021320674237874554) - 宝玉老师的深度分析，翻译工具降低门槛但不会让能力变得一文不值

---

## **📊 更多动态**

| # | 类型 | 标题 | 链接 |
|---|------|------|------|
| 1 | 开源 | TradingAgents中文增强版金融交易框架 | [GitHub](https://github.com/hsliuping/TradingAgents-CN) |
| 2 | 开源 | GitButler版本控制客户端 | [GitHub](https://github.com/gitbutlerapp/gitbutler) |
| 3 | 教程 | Claude Code产品经理交互式课程 | [GitHub](https://github.com/carlvellotti/claude-code-pm-course) |
| 4 | 资源 | 免费LLM API资源列表 | [GitHub](https://github.com/cheahjs/free-llm-api-resources) |
| 5 | 开源 | 65个Claude Code全栈开发技能 | [GitHub](https://github.com/Jeffallan/claude-skills) |
| 6 | 讨论 | Qwen3 Max海外定价比国内贵4倍 | [Linux.do](https://linux.do/t/topic/1602890) |
| 7 | 吐槽 | Gemini Fast又降智了 | [Linux.do](https://linux.do/t/topic/1602887) |

---

## **😄 AI趣闻**

### ["AI不会取代程序员"和"刚被裁员找工作"同框了](https://x.com/dotey/status/2021279898770288761)

今天最讽刺的一幕：有人在社交媒体上义正言辞地说"AI根本不会取代程序员，说AI取代程序员的不是傻就是坏"，结果个人简介写着"刚被layoff了需要找工作"。网友评论：这段子编的不错，至少值5粒大米 😂

![图片](https://pbs.twimg.com/media/HA0GcUvWsAAIiCK?format=png&name=orig)

---

## **🔮 AI趋势预测**

### 开源TTS将在3个月内成为主流选择
- **预测时间**：2026年Q2
- **预测概率**：75%
- **预测依据**：今日新闻[MOSS-TTS家族全开源](https://linux.do/t/topic/1592317)显示开源TTS已在客观指标上超越商业方案，加上年后千问图像模型也将开源，开源生态正在加速成熟

### AI视频生成将进入"一句话出片"时代
- **预测时间**：2026年3月
- **预测概率**：70%
- **预测依据**：今日新闻[Seedance 2.0产品宣传片能力](https://x.com/op7418/status/2021245204963946917)展示了从截图到成片的全自动流程，视频生成的易用性门槛正在快速降低

### Agent开发工具链将迎来标准化
- **预测时间**：2026年Q1-Q2
- **预测概率**：65%
- **预测依据**：今日新闻[GitHub发布gh-aw智能体工作流](https://github.com/github/gh-aw)表明大厂开始布局Agent基础设施，配合MCP协议的普及，标准化进程正在加速

---

## **❓ 相关问题**

### 如何体验 Qwen-Image-2.0？

Qwen-Image-2.0 目前只能在千问官网使用，官方表示年后会开源。对于国内用户，可以直接访问 chat.qwen.ai 体验。

**解决方案**：如需使用其他AI工具如ChatGPT、Claude等，访问 **[爱窝啦 Aivora](https://aivora.cn)** 获取成品账号，极速发货，售后无忧。