---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/8/19
breadcrumbs: false
next: /2026-08/2026-08-19
description: "Cursor推出代码托管平台Origin，实测单仓库每秒22.6次提交，直接对标GitHub。 OpenAI数学突破、OpenViking开源记忆库、CI估值暴涨，多个方向同时指向Agent工程化提速后的验证与基础设施缺口。 今天先看Cursor Origin能否替代GitHub管理并行Agent…"
cascade:
  type: docs
---


## **今日摘要**

```
Cursor推出代码托管平台Origin，实测单仓库每秒22.6次提交，直接对标GitHub。
OpenAI数学突破、OpenViking开源记忆库、CI估值暴涨，多个方向同时指向Agent工程化提速后的验证与基础设施缺口。
今天先看Cursor Origin能否替代GitHub管理并行Agent仓库，再核算CI隐性成本是否已超出预算。
```

## **🔥 今日焦点 TOP 10**

### 1. Cursor 发布代码托管平台 Origin 对标 GitHub

**Origin 正式上线。** 据微信公众号报道，[Cursor 发布代码托管平台 Origin 对标 GitHub](https://mp.weixin.qq.com/s/7VObdoSSP4L-cWYPfJOOXg)，与 Cursor 深度打通，仓库可从 GitHub 无缝迁移。宝玉在推文中补充技术细节：单仓库实测每秒 **22.6 次提交**，全球同步延迟低于 **400 毫秒**。技术底座来自 Cursor 2025 年底收购的 Graphite 团队。正在用 GitHub 管理 AI Agent 并行工程的开发者，今天可以直接迁移仓库体验。

![Cursor 发布代码托管平台 Origin](http://mmbiz.qpic.cn/mmbiz_jpg/bNb2HYvrfWPGibVfw9IlicPxZfsZs23VVz3gTRuQW7g1NibI2OQvT1E7kMfnj3rDg7Swr1sgLlC41OE32EZMHjRMAWxWXdYQGrjTdBjbCZ3Djw/0?wx_fmt=jpeg "Cursor Origin 代码托管平台发布")

---

### 2. OpenAI 发布十项数学成果推翻 80 年猜想

**AI 推翻了悬了 80 年的猜想。** 据 36氪报道，[OpenAI 发布十项数学成果推翻 80 年猜想](https://www.36kr.com/p/3943531098504579)，包括推翻埃尔德什平面单位距离猜想。菲尔兹奖得主 Timothy Gowers 得知后以为 AI 证明了猜想，整晚调整世界观，第二天才发现是**找到了反例**。他随后在博客中写道：AI 找反例比证出定理更让他安心，因为"**输得起**"才是 AI 的真实优势。

![OpenAI 发布十项数学成果](https://img.36krcdn.com/hsossms/20260817/v2_2fbfcdd1ec764388a0ec4fb67b021545@5888275_oswg60866oswg1080oswg377_img_000?x-oss-process=image/format,jpg/interlace,1 "OpenAI 数学成果发布")

---

### 3. 美团全员养虾每日消耗上千万元后公开反思

**全员 AI 推广翻车了。** 宝玉转述凤凰网科技，[美团 CEO 王莆中公开复盘 AI 变革失误](https://x.com/dotey/status/2089505447673794649)：今年 2—3 月全员"养虾运动"导致**每日消耗上千万元**，AI 产生的谬误还**干扰了真实经营**。这是国内头部互联网公司首次公开反思激进 AI 推广策略。正在推行内部全员 AI 的团队，今天值得对照这份教训检查推广节奏。

![美团全员养虾复盘](https://pbs.twimg.com/media/HP6ENEZaQAA4csy?format=jpg&name=orig "美团全员养虾反思复盘")

---

### 4. Gemini 免费上线全套 SAT 模拟测试

**Gemini 官方推出免费 SAT 练习。** Google Gemini 官方账号发帖介绍，[Gemini 免费上线全套 SAT 模拟测试](https://x.com/GeminiApp/status/2089868397593162093)，做完立即给出逐题反馈，可追问 Gemini 解释错题。题目来自 Princeton Review **严格审核内容**，**无需额外订阅**。备考 SAT 的学生今天直接在 Gemini 中输入 "I want to take a practice SAT test" 即可开始。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/tweet_video/HQCHpNFXcAAL0RO.mp4"></video>

---

### 5. 工业富联半年净赚 237 亿净利率只有 4%

**AI 服务器卖爆，整机厂赚的是辛苦钱。** 据 36氪报道，[工业富联 2026 年上半年营收 5578 亿元](https://www.36kr.com/p/3944309176237441)，净利润 237 亿，平均每天净赚 **1.31 亿元**，但净利率仅 **4.26%**。分析师指出真正高利润藏在 GPU、HBM 高速内存、液冷散热等上游零部件。关注 AI 硬件投资机会的人，今天可以把视线从整机厂移向上游零部件供应商。

![工业富联 AI 服务器营收利润对比](https://img.36krcdn.com/hsossms/20260818/v2_b1808527d89c4549b672436c62cfe1f0@000000_oswg684947oswg1000oswg516_img_000?x-oss-process=image/format,jpg/interlace,1 "工业富联半年营收利润数据")

---

### 6. 豆包手机跨国远程操控电脑功能获实测验证

**手机指挥另一个国家的电脑找文档。** 宝玉在推文中实测，[豆包跨设备 Agent 完成了从国内手机操控美国电脑](https://x.com/dotey/status/2089590302910587116)、找出文档并发到飞书的全流程。使用前提是手机和电脑**登录同一豆包账号**，并在电脑端**允许手机连接**。宝玉认为设计思路与 Codex 接近，某些本土化功能有所超越。

![豆包跨设备 Agent 操作界面](https://pbs.twimg.com/media/HP-3O2LWwAASXvJ?format=jpg&name=orig "豆包手机指挥电脑端 Agent 实测")

---

### 7. AI 视频工具让参观博物馆的游客做出科普短片

**普通游客用 AI 做出恐龙演化科普视频。** 向阳乔木（@vista8）发帖分享，[AI 视频工具让参观博物馆的游客做出科普短片](https://x.com/vista8/status/2089586999124803822)，帖子获近 **5000 次浏览**。这条实测说明 AI 视频生成已进入"**随手可用**"阶段。对非专业创作者来说，今天可以试着把一次出行记录变成一段有内容的科普视频。

---

### 8. AI 服务代码 CI 基础设施公司估值涨近十倍

**AI 写代码越多，测试验证成本越高。** 据 36氪报道，[AI 服务代码 CI 基础设施公司估值涨近十倍](https://www.36kr.com/p/3944514235455111)，直接驱动因素是 AI 编程普及后代码量激增。AI 每分钟可生成数百行代码，但**上线前**的集成测试流程无法跳过。工程团队今天值得把 **CI 成本**单独列入 AI 编程的隐性账单重新核算。

---

### 9. OpenViking：火山引擎开源 AI Agent 记忆数据库

**字节跳动火山引擎开源了 Agent 记忆层。** 宝玉在推文中介绍，[OpenViking：火山引擎开源 AI Agent 记忆数据库](https://github.com/volcengine/OpenViking)，今日新增 **213 星**，总星数已达 **29379**。它的定位是 AI Agent 的自进化上下文数据库，解决多 Agent 系统持久化记忆的核心痛点。正在搭建多 Agent 系统的开发者今天可以直接试用。

---

### 10. 柯洁装弱智破解围棋 AI 的视频引发热议

**先装傻，再逆转，AI 被"蠢哭"了。** 宝玉转发一段视频，声称柯洁发现了让 AI 围棋包赢的策略：[前期故意走出弱智棋路带着 AI 一起"弱智"，再趁机反杀](https://x.com/dotey/status/2089708520404828524)。宝玉本人注明"这是 **2023 年**的视频，**现在估计不行了**"。网友神评："懂了，我上去下一半，柯洁再下一半，我们俩真厉害。"

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2089617311414247424/vid/avc1/1440x1080/fCIhhgsGn_zhuix-.mp4?tag=29"></video>

---

## **⚡ 产品与功能更新**

### 《牛来》热潮蔓延至 AI Skill 圈催生同款生成工具

**爆款 IP 带动第三方 AI Skill 扎堆出现。** 据 [AIGC1024 频道整理](https://t.me/aigc1024/23276)，目前已出现至少三个同款 Skill：图片换牛头、转牛来画风，以及把一句描述变成 **15 秒荒诞动画预告片**。这些工具为第三方开发者所作，非官方出品。对用 AI Skill 追热点感兴趣的创作者，可以在频道原帖找到对应链接自行体验。

---
## **◎ 行业变化与个人影响**

### 企业微信开放 CLI 与 MCP 能力接入主流 AI Agent

**企业微信对 AI Agent 开放了十大办公能力模块。** Gorden Sun 在推文中指出，[企业微信此次升级支持 WorkBuddy、DeepSeek Harness 等主流 Agent 直接调用文档、邮件、会议等能力](https://x.com/Gorden_Sun/status/2089624102466359438)。他同时提醒：飞书单一 CLI 已可覆盖 Claude 和 Codex 插件列表里的 **十几个 Connector**，在国内场景搭建 AI 工作流的开发者，今天值得重新评估飞书 CLI 的替代空间。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2089567208133529600/vid/avc1/1280x720/HFMqD3C-slZXXNS6.mp4?tag=29"></video>

---
## **⌘ 开源 TOP 项目**

### bojieli/ai-agent-book：AI Agent 设计与工程实践教材

**一本讲 AI Agent 的开源书，附代码和 PDF。** [bojieli/ai-agent-book 今日新增 543 星，总星数达 39113](https://github.com/bojieli/ai-agent-book)，收录李博杰所著全书正文、编译版 PDF 与按章配套代码。内容覆盖设计原理与工程实践，适合想系统学习 Agent 而不只看零散教程的开发者，今天可以直接克隆对照阅读。

### chaitanyagiri/munder-difflin：本地多智能体测试框架

**在本地验证多 Agent 交互，不依赖云端服务。** [chaitanyagiri/munder-difflin 今日新增 306 星，总星数 2032](https://github.com/chaitanyagiri/munder-difflin)，用 TypeScript 实现，定位是本地多智能体测试框架。正在开发 Agent 应用、需要上线前验证多 Agent 协作逻辑的工程师，今天可以用它替代手动搭测试环境。

---
## **◉ 社媒精选**

### 技术图片生成 Skill 四个月跑到万星

**一个无聊周末做出来的 Skill，跑到了 1 万星。** 向阳乔木（@vista8）在推文中分享，[烟花老师开源的 fireworks-tech-graph 正式突破 10000 星](https://x.com/vista8/status/2089577680522063957)，历时仅四个月，支持 **12 种风格**和 SVG、PNG、GIF 多种格式。项目起点是"一个无聊的周末和对痛点的重新思考"。需要批量生成技术类图表的开发者可以去仓库直接试用。

![fireworks-tech-graph 突破万星](https://pbs.twimg.com/media/HP-Lc66XoAA16yF.jpg "fireworks-tech-graph 技术图片生成 Skill 突破 1 万星")

### Cumora 开源：Agent 与人类平等出现在同一个群里

**Agent 会背着你开会、主动找事做。** Gorden Sun 介绍，[yetone 开源的 Cumora 是多 Agent 协作通讯空间](https://x.com/Gorden_Sun/status/2089661398976811350)，界面类似 Slack，但 Agent 与人类身份平等，会自发聊天、认领任务，甚至在你不 @ 它时主动发言。想试验 Agent 驱动团队协作的开发者，今天可以前往 github.com/yetone/cumora 克隆体验。

![Cumora 多 Agent 协作界面](https://pbs.twimg.com/media/HP_38Kda4AACHRS?format=jpg&name=orig "Cumora 多 Agent 协作通讯空间")

---

## **😄 AI趣闻**

### GitHub 刚做完的事，Cursor 说要重做一遍——但这次是给 AI 用的

某程序员打开 **Cursor** 新上线的代码托管平台 **Origin**，发现界面和 GitHub 长得差不多，但翻到性能数据愣住了：[Compile 大会演示中跑出了单仓库每秒 22.6 次提交、每小时 29.6 万次克隆](https://x.com/dotey/status/2089412415108600221)，全球同步延迟低于 **400 毫秒**。这些数字对人类开发者几乎毫无意义——毕竟你一天能提交几次？但如果同时有**十几个 AI Agent** 在同一个仓库里并行开分支、提 PR，传统 Git 平台分分钟变成瓶颈。Origin 底层来自 Cursor 收购的 Graphite 团队，专门搞堆叠式 PR 并行处理。换句话说，GitHub 是为人设计的，Origin 是为机器设计的——你只是顺带也能用。

## **❓ 相关问题**

### Cursor Origin 国内怎么用？

Cursor 官方已在推特宣布 Origin 正式上线，支持直接从 GitHub 迁移仓库，欢迎所有开发者体验。目前公开素材中有官方推特公告和宝玉整理的技术说明，尚无官方文档给出明确的地区限制或付费要求；Cursor 本体在国内可访问，Origin 作为配套平台理论上同样可用，但具体账号要求和配额以官方后续文档为准。

需要进一步比较当前公开的 AI 账号或订阅服务时，可查看 [**爱窝啦·AI账号店**](https://www.aivora.cn/)；商品、价格与可用状态以官网实时页面为准。
