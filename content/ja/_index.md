---
linkTitle: AI Daily
title: AI Daily-AI资讯日报
breadcrumbs: false
next: /2026-01/2026-01-24
description: "每日自动汇总最新 AI 行业动态，帮中文用户用最低成本玩转 ChatGPT、Claude、Cursor、Augment 等 AI 工具。由爱窝啦 AI 账号店提供支持。"
cascade:
  type: docs
---

## **今日摘要**

```
OpenAI 终于坐不住了，Sam Altman 预告下周起 Codex 密集更新，要跟 Claude Code 正面刚。
Cursor 被挖出内置"寸止"功能，AI 写完代码会主动问你意见；一句话生成 MV 的全自动流水线也跑通了。
AI 编程工具神仙打架，等等党准备好钱包，开发者赶紧去试用新功能。
```



## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览



> 💡 **提示**：想第一时间体验文中提到的最新 AI 模型（Claude 4.5、GPT、Gemini 3 Pro）？没有账号？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 领个号，一分钟上手，售后无忧。

## **今日AI资讯**

### **👀 只有一句话**
Sam Altman 放话：下周开始，Codex 要搞大事情了。

### **🔑 3 个关键词**
#OpenAI反击战 #Cursor隐藏技能 #一句话生成MV

---

## **🔥 重磅 TOP 10**

### 1. [OpenAI 下周起密集发布 Codex 编码模型更新](https://x.com/op7418/status/2015071971047014422)

就在 Claude Code 和 Cursor 抢尽风头的时候，Sam Altman 终于坐不住了。他亲自发推预告：**接下来一个月，Codex 相关的重磅更新会接连放出，下周就开始。** 这话说得相当有底气——"We hope you will be delighted"。同时他还透露，OpenAI 即将达到网络安全准备框架的"高级"水平。看来 OpenAI 不打算把 AI 编程这块蛋糕拱手让人，等等党们，准备好钱包了吗？

![图片](https://pbs.twimg.com/media/G_b5JIbb0AA7LNw?format=jpg&name=orig)

---

### 2. [Cursor 内置"寸止"功能：不装 MCP 也能交互式反馈](https://linux.do/t/topic/1510648)

你可能不知道，Cursor 藏了个宝贝工具叫 **AskQuestion**。以前想让 AI 在关键节点停下来问你意见，得装个 MCP 插件。现在发现这功能是内置的！效果就是 AI 写完代码不会直接跑路，而是弹出选项让你确认或补充需求。帖子里还附了一套完整的提示词模板，核心思路是：**强制 AI 每次回复后都调用 AskQuestion 询问反馈，禁止它自作主张结束对话。** 懒人福音，少装一个插件。

![图片](https://linux.do/uploads/default/optimized/4X/c/8/a/c8add8cbb6b6933760f510c8f388e8d65f1c12e3_2_362x500.png)

---

### 3. [Gemini CLI + Chrome MCP：复刻 Manus 同款任务流](https://linux.do/t/topic/1510644)

想让 AI 直接操控你正在用的 Chrome 浏览器？这篇教程手把手教你实现。**核心是开启 Chrome 的远程调试端口（9222），然后用 Chrome MCP Tools 让 Gemini 接管浏览器。** 接管之后能干啥？截图分析 UI、诊断页面性能、检查控制台报错、提取网页数据、甚至自动点击按钮。整个流程跟 Manus 那种 Agent 操作网页的效果几乎一样，但完全免费。推荐模型：Gemini 3 Flash/Pro 或者英伟达免费的 GLM 4.7。

![图片](https://linux.do/uploads/default/optimized/4X/a/a/1/aa103395cd105aad1550b23aff7c2a51d3c9642b_2_596x500.jpeg)

---

### 4. [一句话生成音乐 MV：Suno + Whisper + 即梦全自动流水线](https://x.com/vista8/status/2015151552080777327)

"帮我写首关于程序员加班的歌，做成 MV。" 这种需求以前得折腾好几个小时，现在一句话搞定。**流程是：大模型写歌词 → 逆向 Suno API 生成音乐 → Whisper 转写带时间轴 → 大模型纠错并生成视觉描述 → 即梦生图 → FFmpeg 合成视频。** 作者还把两年前的 Suno 逆向库用 Opus 修复了，现在支持最新的 V5 模型（代号"乌鸦"）。虽然歌词可能有点 2B，但整个自动化流程是真的香。

![图片](https://pbs.twimg.com/media/G_c1npQaMAA5ThU.jpg)

---

### 5. [Claude Code 字幕神器：一句话下载视频 + 双语字幕](https://x.com/dotey/status/2014986632366112912)

以前给视频加双语字幕，得用 Arctime 打轴、剪映翻译、还得学 ASS 语法。现在？**一句话："帮我下载这个视频，加中英双语字幕，英文绿色中文黄色，放视频上方。"** 几分钟后，1080p 视频 + 精准对齐的字幕直接能用。这个 omni-captions-skills 直接用 Claude 翻译，不需要额外配置 LLM。安装命令：`npx skills add https://github.com/lattifai/omni-captions-skills`。字幕党狂喜。

![图片](https://pbs.twimg.com/media/G_akNr2boAAXLuz?format=jpg&name=orig)

---

### 6. [VibeMark：一键给图片加 AI 水印，让任何照片变成"AI 生成"](https://linux.do/t/topic/1510542)

这个工具的用途有点……微妙。**它能给任何图片添加各大 AI 平台的官方水印**——谷歌的十字芒星、豆包、即梦、通义万相、智谱清言，甚至还能自定义。为什么要这么做？作者说得很直白："当你有一些图片不想被知道是自己拍的，就可以加个水印说是 AI 生成的。" 😂 纯前端静态网页，数据不上传，支持批量处理。开源地址在 GitHub，想玩的自己去找。

![图片](https://linux.do/uploads/default/optimized/4X/a/8/3/a83c054d912a48307494648cc0d6140d19cad923_2_690x341.jpeg)

---

### 7. [fast-tavern：在酒馆之外使用酒馆的提示词处理逻辑](https://linux.do/t/topic/1510520)

SillyTavern（酒馆）的提示词生态已经相当成熟了——预设、世界书、角色卡、正则脚本、宏变量，一套组合拳下来效果拉满。**但问题是，这套逻辑只能在酒馆里用。** 现在有人把它抽出来做成了独立库，支持 TypeScript 和 Python。这意味着你可以在自己的项目里复用酒馆的提示词组装流程，不用重复造轮子。对于想做角色扮演类应用的开发者来说，这是个大利好。

---

### 8. [开源 Banana Pro 涩图翻译项目：绕过审核的骚操作](https://linux.do/t/topic/1510546)

Banana Pro 能翻译漫画，但遇到涩图就罢工。**这位老哥想了个绝招：不把完整涩图发给 AI，而是只把有台词的部分切片发过去。** AI 看不到敏感内容，自然就不会拒绝。翻译完的文字再自动回填到原图。整个流程：上传图片 → 圈出台词区域 → 调用 Banana Pro API 翻译 → 回填原图。虽然有点"曲线救国"，但确实能用。

![图片](https://linux.do/uploads/default/optimized/4X/3/2/f/32f8ab46a8a862525e59e5c0f373fe53989df018_2_334x500.jpeg)

---

### 9. [非程序员 AI 编程指南：Ben 的一天速成手册](https://m.okjike.com/originalPosts/6974cba9c5a1d4e649443856)

如果你不是程序员，但想用 AI 写代码，这份指南必看。**它不只讲 AI 编程工具，还把 Git 版本控制、终端命令、环境变量、依赖管理这些基础知识都讲清楚了。** 作者 Ben 是 Ben's Bites 的创始人，写东西一向通俗易懂。核心观点：AI 能帮你写代码，但你得知道代码跑在什么环境里、怎么管理版本、出了问题怎么回滚。一天时间，从小白到能跟 AI 协作，值得收藏。

![图片](https://cdnv2.ruguoapp.com/FqFaUC42bT9GmlQ7gA9p1a1ZOq9dv3.png)

---

### 10. [baoyu-skills 项目迭代模式：发现问题 → 分析 → 让 AI 解决 → 验证](https://x.com/dotey/status/2015149067068711222)

宝玉老师分享了他维护开源项目的工作流。**核心是把"发现问题-分析问题-解决问题-验证结果"这个循环跑起来，其中"解决问题"这步直接交给 Claude Code。** 比如今天他发现 commit messages 都是无意义的版本号，就让 AI 把每个模块的变更拆成独立 commit。几句话描述清楚需求，AI 自己去改代码，改完他再验证。这种人机协作模式，效率高得离谱。

![图片](https://pbs.twimg.com/media/G_c8DW_WAAARb4W?format=jpg&name=orig)

---

## **📌 值得关注**

- **[产品]** [腾讯 CodeBuddy IDE 注册送三个月云服务器](https://linux.do/t/topic/1510517) - 里面模型只有 Gemini 和 GPT，但白嫖服务器还是香的
- **[开源]** [Tavily Proxy：多账号轮询版 Tavily MCP](https://linux.do/t/topic/1510634) - 每个账号每月 1000 积分，多号轮询无限续杯
- **[开源]** [FinRobot：金融分析 AI Agent 平台](https://github.com/AI4Finance-Foundation/FinRobot) - 5.2K Star，用 LLM 做量化分析
- **[工具]** [OpenCode 编程 AI 实测项目](https://linux.do/t/topic/1510629) - Claude Code 替代方案，正在测试 GPT-5-mini
- **[研究]** [免费 ChatGPT vs 免费 Gemini 对比](https://www.v2ex.com/t/1188051#reply3) - 问小说人物，Gemini 完胜

---

## **😄 AI趣闻**

### [加拿大代表签错位置的历史名场面](https://m.okjike.com/originalPosts/6974eb088d804fc1ef54da4c)

如果你觉得自己今天犯了大错，记住这个故事：**1945 年签署日本投降文件时，加拿大代表把自己的名字签在了法国代表那一栏。** 这可是决定二战结束的历史文件啊！所以下次 AI 帮你写代码写错了，别太自责——人类在更重要的场合也会犯更离谱的错。😂

![图片](https://cdnv2.ruguoapp.com/Fh47-0bk53dPpk37MCXY_tr1Bp8Ev3.png)

---

## **🔮 AI趋势预测**

### OpenAI Codex 重大更新发布
- **预测时间**：2025年1月底-2月初
- **预测概率**：85%
- **预测依据**：今日新闻 [Sam Altman 预告 Codex 更新](https://x.com/op7418/status/2015071971047014422) + 明确说"下周开始"，时间节点非常清晰

### AI 编程工具进入"Skills/插件"生态竞争阶段
- **预测时间**：2025年Q1
- **预测概率**：75%
- **预测依据**：今日多条新闻涉及 Claude Code Skills（字幕、音乐 MV、baoyu-skills）+ Cursor 内置工具被挖掘，说明生态正在快速成熟

### 浏览器自动化 Agent 工具爆发
- **预测时间**：2025年Q1
- **预测概率**：70%
- **预测依据**：今日新闻 [Gemini CLI + Chrome MCP 教程](https://linux.do/t/topic/1510644) + Manus 类产品持续火热，技术门槛正在降低

---

## **❓ 相关问题**

### 如何体验 Claude Code 的 Skills 功能？

Claude Code 的 Skills 功能需要订阅 Claude Pro 或使用 API。对于国内用户，可能面临支付困难或账号注册限制。

**解决方案**：访问 **[爱窝啦 Aivora](https://aivora.cn)** 获取成品账号，极速发货，售后无忧。