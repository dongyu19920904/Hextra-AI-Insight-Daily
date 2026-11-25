---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/11/25
breadcrumbs: false
next: /2026-11/2026-11-25
description: "MCP 协议新增异步任务和操作确认机制，Codex 扣费漏洞修复后额度消耗明显加快。 各栏目都在逼近同一个边界：Agent 能做什么取决于它住在哪、能持有哪些凭证。 今天先核实 Codex 实际消耗速率，再读第 6 条 Personal Agent 身份框架，再决定部署路径。"
cascade:
  type: docs
---

## **今日摘要**

```
MCP 协议新增异步任务和操作确认机制，Codex 扣费漏洞修复后额度消耗明显加快。
各栏目都在逼近同一个边界：Agent 能做什么取决于它住在哪、能持有哪些凭证。
今天先核实 Codex 实际消耗速率，再读第 6 条 Personal Agent 身份框架，再决定部署路径。
```

## **🔥 今日焦点 TOP 10**

### 1. MCP 两周年，Claude 新增三项协议能力

**MCP 协议迎来重要更新。** 宝玉在推文中解释了[三项新能力的具体含义](https://x.com/dotey/status/2125421676582043960)。Skills over MCP 解决 Skill 与 MCP 版本不同步的问题。Tasks 把耗时操作改为**异步后台执行**，Agent 无需等待结果。Elicitation 在敏感操作前要求**手动输入完整资源名称**🔒，防止 Agent 误删仓库。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2125413684209917952/vid/avc1/1280x720/R_MjZfWa1nVX-Oo9.mp4?tag=29"></video>

---

### 2. MAGI-2 发布，定价 0.5 元每秒主打控镜

**AI 视频控镜精度显著提升。** 据 AIBase [报道，MAGI-2 采用 480B MoE 架构](https://www.aibase.com/zh/news/32529)，支持 **2 万字符**提示词，主打 50 毫秒级切镜控制。定价 0.5 元/秒，报道称仅为同规格主流模型的十分之一。高速运动稳定性和音频层次**仍待验证**🎬，建议小批量测试后再决定是否替换现有工作流。

![MAGI-2 控镜演示截图](https://upload.chinaz.com/2026/1125/6393119418885581694367609.png "MAGI-2 控镜演示截图")

---

### 3. OpenAI 修复 Codex 扣费漏洞，额度消耗加快

**Codex 额度扣费逻辑已被修正。** 💻 一位用户在 V2EX 发帖称[收到 OpenAI 邮件说明此次修复](https://www.v2ex.com/t/1259656#reply1)。修复后 **GPT-6.2 Sol** 和 Astra 的实际额度消耗速度比之前更快。该信息来自用户转述邮件，尚无官方公告页面直接确认。正在用 Codex **跑批量任务**的开发者，建议今天检查一次额度使用情况。

![Codex 额度修复邮件截图](https://i.imgur.com/zLVaxmJ.png "Codex 额度修复邮件截图")

---

### 4. AI 硬件股业绩超预期却集体大跌

**AI 硬件股估值逻辑正在切换。** Telegram 频道整理显示，[AI 硬件股业绩超预期却集体大跌](https://t.me/aigc1024/27438)。原因是内存等元器件涨价，非 GAAP 毛利率降至 **38.2%**。ADI 营收涨 42%，仅因下季 EPS 指引偏低就单日跌 **17.37%**📄。市场关注点已从"AI 订单有没有"转向"硬件厂商能留多少毛利"。

---

### 5. 黄仁勋宣布回归 NVIDIA CEO 一职

**黄仁勋宣布在辞职 11 天后重任 NVIDIA CEO。** 📄 BestBlogs 整理报道显示，[此次复任已获董事会批准](https://www.bestblogs.dev/en/article/698c22e265)，事件还涉及美国高级官员。同期报道还提到 OpenAI 公布预训练困惑度历史数据，并提议以困惑度阈值作为**行业通用发展限制**，微软据报已加入该倡议。涉及官员的背景细节目前仅来自媒体整理，官方表述**尚待核实**。


![黄仁勋宣布回归 NVIDIA CEO 一职 · 原文封面](https://www.bestblogs.dev/en/article/698c22e265/opengraph-image?696e70e5d7b1d782 "黄仁勋宣布回归 NVIDIA CEO 一职 · 原文封面")

---

### 6. Personal Agent 的端侧身份困境被系统拆解

**Agent 离不开本地设备，根本原因是身份凭证。** ⚙️ 一篇微信文章从实际场景指出，[Cookie 在浏览器、企微在手机、公司 NAS 在局域网](https://mp.weixin.qq.com/s/XDUHOe5MkKI0CqZ49umECQ)，这些凭证没有一样能云端代持。Claude Code、Codex 占先，是因为它们本来就住在**有登录态的设备**上。**云端方案的障碍是平台风控**，而非技术本身。正在规划 Agent 部署路径的开发者，这篇文章的框架值得参考。

![Personal Agent 端侧身份分析示意](https://mmbiz.qpic.cn/mmbiz_jpg/KxyiaPBwFQDTQBfhUOpf1LZiaQG50vW2vxzvvWmpmz8EtRcjpgVG3ul4mFvnZ1ia6mTwpuOTXMnEnCqvGA0wKFPhdicnfURcxId47vibftpQfvZU/0?wx_fmt=jpeg "Personal Agent 端侧身份分析示意")

---

### 7. 小米 Q3 净利润同比降 56.8%，AI 研发占比超三成

**小米营收与毛利同步承压。** 📌 据 36氪报道，[小米 Q3 收入 1072.4 亿元，同比降 5.2%](https://www.36kr.com/p/4084521409762952)，经调整净利润 48.8 亿元，同比降 **56.8%**，毛利率从 22.9% 降至 20.2%。前三季度研发开支约 274 亿元，**AI 研发占比超 30%**。MiMo API 调用量据管理层称持续增加，但具体收入规模尚未单独披露。

![小米 Q3 财报数据](https://img.36krcdn.com/hsossms/20261125/v2_db8bfdcf09b642a6a369e37ecd96e077@6452560_oswg61623oswg1080oswg545_img_000?x-oss-process=image/format,jpg/interlace,1 "小米 Q3 AI 研发与营收数据")

---

### 8. Kagi Mail 公开测试版上线，含 50 GB 存储

**Kagi 推出邮件与日历服务公测版。** 📦 官方公告显示，[Kagi Mail 公开测试版上线，含 50 GB 存储](https://blog.kagi.com/kagi-mail-public-beta)，存储空间 **50 GB**，基于开源 Stalwart 构建。测试期 60 天，之后年费 **99 美元**，Kagi Ultimate 订阅已包含。共享邮箱和原生移动应用标注为即将推出，AI 功能可关闭，公告未声明端到端加密。


![Kagi Mail 公开测试版上线，含 50 GB 存储 · 原文配图](https://media.kagi.com/kagi-mail-announcement.jpg "Kagi Mail 公开测试版上线，含 50 GB 存储 · 原文配图")

---

### 9. Gemini 举办 Discord 直播演示 GIF 和头像生成

**Google Gemini 在 Discord 举办了一场生成演示活动。** 官方推文显示，[该活动于北京时间 11 月 25 日凌晨进行](https://x.com/GeminiApp/status/2125273131845869784)，内容包括生成 **GIF**、制作 meme 和**自定义头像**🎨。活动以直播形式在 Gemini Discord 服务器进行。感兴趣的用户可前往 discord.gg/gemini 查看录像或参与后续活动。

---

### 10. 国内 Personal Agent 该不该主打办事能力？

**一则观点认为国内 PA 的核心优势不在办事效率。** ⚙️ 即刻用户莫唯书 Mark 在帖子中指出，[国内 Personal Agent 该不该主打办事能力？](https://m.okjike.com/originalPosts/6b0524e4320fd7e1b52e2854)，这些条件在国内并不成立。**国内用户几下手指**就能完成的事，PA 未必能形成差异化优势。这是个人观点，提供了评估国内 AI Agent 产品定位的一个视角。

---

## **◎ 行业变化与个人影响**

### 华人 CV 学者离开苹果二次创业，聚焦空间与物理 AI

**一位在苹果工作的华人计算机视觉研究者宣布创业。** 📊 据量子位报道，[新方向聚焦下一代空间与物理 AI](https://www.qbitai.com/2026/11/512498.html)，复杂场景**三维建模成本**据报降至 10 美元以内。具体技术路径和团队规模尚未披露。对正在寻找低成本 3D 建模方案的开发者，这个方向值得持续跟进。

---
## **⌘ 开源 TOP 项目**

### mvanhorn/last30days-skill：跨平台话题研究摘要

**这个 Agent Skill 能跨六个平台同时调研话题。** [mvanhorn/last30days-skill 支持同时检索 Reddit、X、YouTube、HN、Polymarket 及开放网络](https://github.com/mvanhorn/last30days-skill)，综合生成有据可查的摘要🔍。项目用 Python 编写，当日新增 **703 Stars**，总 Stars 达 74,604。适合需要快速聚合多平台舆情或研究背景信息的开发者直接接入 MCP 生态试用。


![mvanhorn/last30days-skill：跨平台话题研究摘要 · README 展示图](https://raw.githubusercontent.com/mvanhorn/last30days-skill/main/media/pr-assets/last30days-ad.gif "mvanhorn/last30days-skill：跨平台话题研究摘要 · README 展示图")

---
## **◉ 社媒精选**

### H-Net 架构直接处理原始字节，省去人工分词

**Cartesia 团队提出的 H-Net 把分词器从训练流程中移除。** Gorden Sun 在推文中介绍，[H-Net 让模型直接读取最底层字节](https://x.com/Gorden_Sun/status/2125505009525911726)，边读边动态拼出词语和短语。Cartesia 官方博客称，同等算力下达到相同水平消耗的训练算力仅为传统模型的**十分之一**，处理生僻编程语言效率提升更明显🧬。上述数字来自 Cartesia 自述，尚未经过独立复现验证。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2115501577012461568/vid/avc1/1920x1080/Yjs4MoGlnchqw209.mp4?tag=29"></video>

### LeCun 公开指责 Amodei 借 AI 风险叙事限制开源

**LeCun 在 X 上直接点名批评 Amodei 利用风险话语争夺模型控制权。** 据 HN 对该帖子的整理，[LeCun 称 Amodei 从 GPT-2 时代起就推动对开放模型的限制](https://twitter.com/ylecun/status/2124550037912920090)，并以限制印刷术作类比📄。LeCun 的表述是**个人推断**，未提供可核实的内部记录。这场争论的本质是 AI 治理路线与开放模型政策的分歧，两人立场和证据应分别评估。

---

## **😄 AI趣闻**

### 花钱雇的助手，替房东办事

Harley 想搭个小工具：从 Instagram 短视频认出歌，再去 **Bandcamp** 找到付费购买的链接，把钱送到独立音乐人手里🎙️。流程跑得挺顺，直到 Bandcamp 加了访问检查——**Claude** [拒绝协助绕过，原流程卡住](https://michaelharley.net/posts/2026/11/01/llm-agents-work-for-their-parent-companies-not-for-you/)。换一条路试试，换成抓 YouTube 音频，Claude 却没有异议。Harley 说他订阅这个代理是为了给音乐人付钱，结果发现它对"谁不能动"和"谁可以动"有自己的一本账。

![花钱雇的助手，替房东办事 · 原文封面](https://michaelharley.net/assets/images/open-graph-image.png "花钱雇的助手，替房东办事 · 原文封面")

## **❓ 相关问题**

**Codex 额度修复后消耗变快，怎么安排用量更稳？**

**Codex 的扣费漏洞修复后，GPT-6.2 Sol 和 Astra 的真实消耗速度已比之前更快**，这一变化来自用户[收到的 OpenAI 修复邮件](https://www.v2ex.com/t/1259656#reply1)。建议先用小批量任务跑一次，测出当前实际消耗速率，再决定后续用量节奏。