---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/3/5
breadcrumbs: false
next: /2026-03/2026-03-05
description: "每日自动汇总最新 AI 行业动态，帮中文用户用最低成本玩转 ChatGPT、Claude、Cursor、Augment 等 AI 工具。由爱窝啦 AI 账号店提供支持。"
cascade:
  type: docs
---

## **今日摘要**

```
Anthropic CEO内部备忘录直接炮轰 OpenAI 五角大楼合同是"安全剧场"，AI两巨头从技术竞争打到政治站队。
CLI 工具集体爆发：Google 全家桶、OpenAI Codex 纷纷上命令行，AI Agent 正在用一句话接管你的桌面和终端。
写代码的时代正在变成"说代码"的时代，开发者该学的不是新语言，是怎么下指令。
```



## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览



> 💡 **提示**：想第一时间体验文中提到的最新 AI 模型（Claude 4.5、GPT、Gemini 3 Pro）？没有账号？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 领个号，一分钟上手，售后无忧。

## **今日AI资讯**

### **👀 只有一句话**
今天是CLI 工具和 Agent Skills 的狂欢日——AI 正在接管你的桌面、终端和整个工作流。

### **🔑 3个关键词**
#Agent接管桌面 #Skill生态爆发 #OpenAI与Anthropic互撕

---

## **🔥 重磅 TOP 10**

### 1. [Anthropic CEO内部备忘录炮轰 OpenAI：五角大楼合同是"安全剧场"](https://x.com/dotey/status/2029330655633363452)

AI圈今天最大的瓜来了。Anthropic CEO 达里奥·阿莫迪在内部备忘录里直接点名 OpenAI，说布罗克曼夫妇给特朗普捐了 2500 万美元，而Anthropic 一分没捐，也没给"独裁者式吹捧"。更狠的是，他把 OpenAI 刚拿下的五角大楼合同称为"安全剧场"——意思就是那些安全承诺全是演给外界看的。两家顶级 AI 公司从技术竞争升级到政治立场对撞，这个裂痕只会越来越深。我的判断：这不是口水仗，是路线之争。

![图片](https://pbs.twimg.com/media/HCl3zNBbIAAVbO_?format=png&name=orig)

### 2. [OpenAI Codex App 正式登陆 Windows，自带原生智能体沙箱](https://x.com/dotey/status/2029308744795082981)

Windows 开发者等了多久？终于来了。Codex App 现在原生支持 Windows，兼容 PowerShell、Git Bash、WSL，覆盖了大部分人的开发习惯。但最值得说的不是兼容性，而是安全设计——通过操作系统级控制，AI 只能在你指定的目录里写文件，默认断网，除非你手动放行。这套沙箱方案 OpenAI 还直接开源了，用Rust 写的。以前让 AI 帮你写代码总担心它乱搞文件系统，现在至少有个笼子了。开发者狂喜。

![图片](https://pbs.twimg.com/media/HClY67cbkAAe5xr?format=jpg&name=orig)

### 3. [TuriX-CUA：让 AI 像人一样操作你的 Mac和 Windows 桌面](https://mp.weixin.qq.com/s?__biz=MzUxNjg4NDEzNA==&mid=2247531901&idx=1&sn=2bdc913f95cfa0523f715a29f8cdd687)

想象一下：你跟 AI 说"帮我在 Discord 找到老板发的表格，生成柱状图，插到 PPT 里，然后回复老板"——它就真的一步步帮你干了。TuriX-CUA 做的就是这件事。和浏览器插件不同，它直接操控整个桌面环境，人能点的地方它都能点，不需要目标软件提供 API。架构上把 AI 拆成四个角色（大脑、执行者、规划者、记忆），还能用不同模型分别承担，灵活度拉满。已经上了 OpenClaw 的 Skill 广场，排名第一。

![图片](https://wechat2rss.bestblogs.dev/img-proxy/?k=135d5a52&u=https%3A%2F%2Fmmbiz.qpic.cn%2Fsz_mmbiz_png%2FM2ibDBMdECU2j8DY3ISSRicxMHZ5pr1Sl94qbEjpIibocSpqGUOpeLH3kWxicWuiaeutxXibllTldG79VOrUa70fSiaS1ibsdoCWrFiblaIyITGwW1ibA%2F640%3Fwx_fmt%3Dpng%26from%3Dappmsg)

### 4. [Google发布 Workspace CLI：用命令行操作 Google 全家桶，还能接入 Claude Code](https://x.com/vista8/status/2029412769192395104)

Google 用Rust 写了一个官方命令行工具，一条命令安装，直接在终端操作 Drive、Gmail、日历、Sheets、Docs。关键是什么？它可以作为 Claude Code 的 Skill 直接接入。也就是说，你现在可以跟 Claude 说"帮我查下明天的日程"、"把这个文件传到 Google Drive"，它直接帮你搞定。2026 年果然是 CLI 工具爆发之年，AI Agent 正在把各种服务的"遥控器"统一成一句自然语言。

![图片](https://pbs.twimg.com/media/HCnWkL8akAA9Xn8.jpg)

### 5. [OpenAI 开源 Symphony：自主编码Agent 的调度服务架构](https://www.bestblogs.dev/en/status/2029357891858383023)

三个人，五个月，一百万行代码。这不是段子，是OpenAI 内部 Symphony 项目的真实数据。现在他们把这套系统开源了。核心理念叫"Harness Engineering"——工程师不写代码，只设计环境和反馈循环。六层架构（策略、配置、协调、执行、集成、观测）加上基于WORKFLOW.md 的任务调度，没有持久化数据库。听起来很激进，但这可能就是软件开发流水线的未来形态。对于想搞 Agent 编程的团队来说，这是目前最值得研究的参考架构之一。

### 6. [Claude Code 创建者专访：100% AI驱动工作流，每天 20-30 个PR](https://www.bestblogs.dev/video/8f3d453)

Boris Cherny，Claude Code 的创建者，在最新访谈里说了一句让我愣住的话："我没有手动修改过任何一行代码。" 他每天用并行 AI 智能体提交 20-30 个 PR，全部由Opus 4.5 和 Claude Code 完成。他把当前AI 革命比作印刷机的发明——印刷机没有消灭抄写员，而是催生了"作者"这个全新职业。程序员不会消失，但角色正在从"写代码的人"变成"定义意图的人"。Anthropic 内部连财务人员都在用Claude Code 做原型。这个转变比我们想象的快。

### 7. [微软开源多模态推理模型 Phi-4-reasoning-vision-15B](https://x.com/Gorden_Sun/status/2029370931236487478)

微软在视觉推理赛道又放了一