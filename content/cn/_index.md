---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/11/25
breadcrumbs: false
next: /2026-11/2026-11-25
description: "Claude 为 MCP 两周年新增三项 Agent 能力，同步落地版本绑定与敏感操作确认机制。 硬件财报和模型架构同时在算同一笔账：投入之后能留住多少，成本结构正在成为新的竞争核心。 开发者今天优先看第 6 条身份凭证分析，再决定 Agent 工作流该跑在本机还是云端。"
cascade:
  type: docs
---

## **今日摘要**

```
Claude 为 MCP 两周年新增三项 Agent 能力，同步落地版本绑定与敏感操作确认机制。
硬件财报和模型架构同时在算同一笔账：投入之后能留住多少，成本结构正在成为新的竞争核心。
开发者今天优先看第 6 条身份凭证分析，再决定 Agent 工作流该跑在本机还是云端。
```

## **🔥 今日焦点 TOP 10**

### 1. MCP 两周年，Claude 新增三项 Agent 能力

**MCP 版本协同与权限确认同步落地。** 宝玉在推文中解释了[三项新能力的具体含义](https://x.com/dotey/status/2125421676582043960)：Skills over **MCP** 把 Skill 与 MCP 绑定发布，解决版本错位问题；Tasks 让 Agent 把耗时操作转为**后台异步执行**；Elicitation 在敏感操作前要求用户完整输入操作对象名称🔒。三项能力面向用 Claude 构建 Agent 工作流的开发者，可减少版本错位和误操作风险。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2125413684209917952/vid/avc1/1280x720/R_MjZfWa1nVX-Oo9.mp4?tag=29"></video>

---

### 2. MAGI-2 视频模型发布，定价 0.5 元/秒

**视频生成定价大幅下探。** 据 AIBase 报道，[MAGI-2 采用 480B MoE 架构](https://www.aibase.com/zh/news/32529)，宣称控镜响应延迟约 **50 毫秒**，定价 **0.5 元/秒**。厂商自述该价格仅为同规格主流模型的十分之一🎬，但这一比较来自厂商说法，尚无独立验证。高速运动稳定性和音频层次等能力仍待验证。

![MAGI-2 视频模型控镜演示](https://upload.chinaz.com/2026/1125/6393119418885581694367609.png "MAGI-2 视频模型控镜演示")

---

### 3. 归藏演示 Neon + MAGI-2 双向工作流

**视频与网页生成可以互为参考输入。** 归藏在推文中展示了[两套代码与视频互转的组合](https://x.com/op7418/status/2125531570622828617)：用谷歌 **Neon** 生成带动效的网页，再把网页交给视频模型做镜头参考；或反向用语言模型生成带人物动作的网页🎬，再将其作为 MAGI-2 的运动参考。演示同时调用了 LibTV MCP 进行工具连接。对探索"**代码生成视频**"链路的前端开发者有参考价值。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2125531134906023936/vid/avc1/1920x1080/WEVHwXOjdHSuYdIo.mp4?tag=29"></video>

---

### 4. AI 硬件股业绩超预期反遭重挫

**市场开始计算 AI 硬件能留住多少毛利。** Telegram 频道 AI 探索指南整理显示，[HPE 下季营收增速指引升至 27–35%](https://t.me/aigc1024/27438)，但 AI 云营业利润率指引降至约 **14%**，非 GAAP 毛利率环比跌至 **38.2%**📄，单日股价跌 16.31%。ADI 营收涨 42% 却因 EPS 指引偏低跌去 17.37%。以上数字来自频道整理，以官方财报为准。

---

### 5. 小米前三季度 AI 研发占比超三成，主业毛利率承压

**AI 投入与硬件利润之间的张力正在扩大。** 📌 据 36氪报道，[小米 2026 年 Q3 经调整净利润同比下降 56.8%](https://www.36kr.com/p/4084521409762952)，毛利率从 22.9% 降至 **20.2%**。前三季度研发开支约 274 亿元，AI 相关研发费用占比超 **30%**。MiMo 大模型 API 调用量和 AI 相关收入增长，但具体规模仍未单独披露。

![小米 Q3 财报数据](https://img.36krcdn.com/hsossms/20261125/v2_db8bfdcf09b642a6a369e37ecd96e077@6452560_oswg61623oswg1080oswg545_img_000?x-oss-process=image/format,jpg/interlace,1 "小米 Q3 AI 研发占比与毛利率变化")

---

### 6. Personal Agent 的真正瓶颈在端侧身份凭证

**Agent 能办事的前提是借用你的身份证。** 一篇微信文章分析了[这个身份凭证的结构性问题](https://mp.weixin.qq.com/s/XDUHOe5MkKI0CqZ49umECQ)：Cookie 在浏览器、企业微信在手机、公司 NAS 在局域网，这些凭证没有一样能云端代持🔒。因此 Claude Code、Codex 等原生运行在本机的工具有先发优势。云端方案的可行前提是平台允许持久 session，但当前风控会将其识别为机器。

![Personal Agent 身份凭证分析](https://mmbiz.qpic.cn/mmbiz_jpg/KxyiaPBwFQDTQBfhUOpf1LZiaQG50vW2vxzvvWmpmz8EtRcjpgVG3ul4mFvnZ1ia6mTwpuOTXMnEnCqvGA0wKFPhdicnfURcxId47vibftpQfvZU/0?wx_fmt=jpeg "Personal Agent 身份凭证必须留在端侧")

---

### 7. 黄仁勋复出，OpenAI 公开预训练困惑度数据

**多条 AI 行业消息集中于同一周期。** 据 BestBlogs.dev 整理的[Latent Space 文章报道](https://www.bestblogs.dev/en/article/698c22e265)，黄仁勋在宣布辞职 **11 天**后重返 NVIDIA CEO 职位📄。OpenAI 发布预训练困惑度历史数据，并提议以困惑度阈值作为行业发展限制的基准，微软据报加入了该倡议。文章还提及 GPT-6.2 Sol 和 Gemini 4 Neon 等模型，但均为媒体整理，以各厂商官方**发布为准**。


![黄仁勋复出，OpenAI 公开预训练困惑度数据 · 原文封面](https://www.bestblogs.dev/en/article/698c22e265/opengraph-image?696e70e5d7b1d782 "黄仁勋复出，OpenAI 公开预训练困惑度数据 · 原文封面")

---

### 8. LeCun 公开批评 Amodei 借风险叙事垄断控制权

**开源与闭源阵营的分歧在监管语境下持续激化。** **LeCun** 在 X 上发帖，[将 Amodei 离开 OpenAI 解读为控制权之争](https://twitter.com/ylecun/status/2124550037912920090)，并以限制印刷术作类比表达对少数机构掌握知识渠道的担忧📄。帖文本身未提供可核实的内部记录，也未具体评估哪项监管提案限制哪些模型。HN 上的讨论区分了高管动机推断与开放权重政策效果这两个独立问题。

---

### 9. Kagi Mail 公开测试，提供邮件与日历服务

**Kagi 将隐私导向的邮件服务推向公测。** 📌 据官方博客公告，[Kagi Mail 提供 50 GB 存储和不限数量别名](https://blog.kagi.com/kagi-mail-public-beta)，支持自定义域名及 IMAP、JMAP 和 CalDAV，可搭配第三方客户端。测试期 **60 天**，之后年费 **99 美元**，Kagi Ultimate 用户已包含。AI 功能可关闭，但共享邮箱和原生移动应用尚未上线，兼容协议不等同于端对端加密承诺。


![Kagi Mail 公开测试，提供邮件与日历服务 · 原文配图](https://media.kagi.com/kagi-mail-announcement.jpg "Kagi Mail 公开测试，提供邮件与日历服务 · 原文配图")

---

### 10. Gemini 官方 Discord 活动演示 GIF 与头像生成

**Gemini 官方账号邀请用户参与 Discord 直播。** Google **Gemini** 官方推文宣布，[Gemini 官方 Discord 活动演示 GIF 与头像生成](https://x.com/GeminiApp/status/2125273131845869784)，**Discord** 频道地址为公开可加入的 discord.gg/gemini🎨。活动时间为太平洋时间 11 月 24 日中午。这是官方社区活动公告，未包含新功能或模型更新的技术细节。

---

## **⌘ 开源 TOP 项目**

### mvanhorn/last30days-skill：跨平台多源研究摘要

**一个 Skill 可以同时检索六个平台。** [mvanhorn/last30days-skill 已公开核心代码](https://github.com/mvanhorn/last30days-skill)，这个 AI Agent 技能可跨 Reddit、X、YouTube、HN、Polymarket 及全网抓取任意主题近 30 天的讨论🔍，并综合生成有据可查的摘要。项目用 Python 编写，当日新增 **950 Stars**，累计 **74,754 Stars**。适合需要定期追踪特定话题、又不想逐平台手动筛查的研究者和内容从业者试用。


![mvanhorn/last30days-skill：跨平台多源研究摘要 · README 展示图](https://raw.githubusercontent.com/mvanhorn/last30days-skill/main/media/pr-assets/last30days-ad.gif "mvanhorn/last30days-skill：跨平台多源研究摘要 · README 展示图")

---
## **◉ 社媒精选**

### H-Net 架构让模型直接处理原始字节

**去掉分词器后，模型自己动态切词。** Gorden Sun 在推文中介绍了 Cartesia 团队开发的 H-Net，[官方博客说明该架构以原始字节为输入](https://www.cartesia.ai/blog/from-tokens-to-bytes-part-1)，在读取过程中自适应聚合字符🔬。据帖文引用的官方说明，同等算力下达到同等性能时，训练消耗约为传统分词模型的十分之一，但该数字为厂商自述。DNA 序列和图像也在测试场景之内。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2115501577012461568/vid/avc1/1920x1080/Yjs4MoGlnchqw209.mp4?tag=29"></video>

---

### Anthropic Fellows 重回神经元可解释性研究

**可解释性研究方向重新聚焦到最基本的单元。** Anthropic 官方账号发帖，[介绍了 Fellows 项目的新研究方向](https://x.com/AnthropicAI/status/2125365268381929637)：早期工作从神经元出发，但因单个神经元对多个无关输入都会激活等问题而被大多数研究者放弃🔬。这项新研究重新回到神经元视角，试图解决此前未能处理的问题。研究方向与模型安全直接相关，具体结论以论文发布为准。

---

## **😄 AI趣闻**

### 帮你买歌的 AI，先问了问卖歌的那边

想用 **Claude Code** 搭个小工具：从 Instagram 短视频认出歌，再找到 **Bandcamp** 页面付钱支持独立音乐人🎙️。流程跑得挺顺，直到 Bandcamp 给搜索接口加了访问检查——[Claude 拒绝帮忙绕过、原流程当场卡住](https://michaelharley.net/posts/2026/11/01/llm-agents-work-for-their-parent-companies-not-for-you/)。换一条路试试，**YouTube 音频**那边它倒是愿意搭把手。想用 AI 帮你花钱支持音乐人，得先看看 AI 答不答应。

![帮你买歌的 AI，先问了问卖歌的那边 · 原文封面](https://michaelharley.net/assets/images/open-graph-image.png "帮你买歌的 AI，先问了问卖歌的那边 · 原文封面")

## **❓ 相关问题**

**Claude 新增了 MCP 能力，现在用哪种方式接入最稳？**

根据宝玉的[实测解说推文](https://x.com/dotey/status/2125421676582043960)，Skills over MCP 把 Skill 与 MCP 绑定发布，从源头解决版本错位问题；Elicitation 要求完整输入操作对象名称，适合有写入或删除操作的 Agent 工作流。