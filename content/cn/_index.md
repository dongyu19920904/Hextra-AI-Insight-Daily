---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/11/25
breadcrumbs: false
next: /2026-11/2026-11-25
description: "MCP 更新三项 Agent 核心能力，OpenAI Codex 修复额度漏洞后消耗速度加快。 从协议层到端侧登录态，各方都在解决同一道题：Agent 怎么真正替人完成带权限的操作。 今天最值得先看 MCP 新协议文档和 Codex 额度通知，再读第 7 条关于登录态的分析。"
cascade:
  type: docs
---

## **今日摘要**

```
MCP 更新三项 Agent 核心能力，OpenAI Codex 修复额度漏洞后消耗速度加快。
从协议层到端侧登录态，各方都在解决同一道题：Agent 怎么真正替人完成带权限的操作。
今天最值得先看 MCP 新协议文档和 Codex 额度通知，再读第 7 条关于登录态的分析。
```

## **🔥 今日焦点 TOP 10**

### 1. MCP 两周年，Claude 新增三项 Agent 能力

**工具版本同步、异步任务和操作确认同时到位。** 宝玉在推文中梳理了[三项 MCP 新增能力](https://x.com/dotey/status/2125421676582043960)：Skills over MCP 让技能描述与工具版本捆绑发布🔄，解决版本不一致问题；Tasks 把耗时操作改为后台异步执行，Agent **无需等待结果**即可继续；Elicitation 在敏感操作前要求**完整输入名称**确认，不只是点一下按钮。正在用 MCP 构建 Agent 流程的开发者，建议今天查一遍官方文档。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2125413684209917952/vid/avc1/1280x720/R_MjZfWa1nVX-Oo9.mp4?tag=29"></video>

---

### 2. MAGI-2 视频模型主打精准控镜和极低定价

**50 毫秒级控镜、定价 0.5 元/秒。** AIBase 报道了 [MAGI-2 发布详情](https://www.aibase.com/zh/news/32529)：**480B MoE 架构**，支持 **2 万**字符提示词，定价据称仅为同规格主流模型的十分之一🎬。高速运动稳定性、二维动画质感和音频层次目前仍待用户实测验证。视频内容创作者若有批量生产需求，可关注公测入口。

![MAGI-2 控镜精度演示](https://upload.chinaz.com/2026/1125/6393119418885581694367609.png "MAGI-2 控镜精度演示")

---

### 3. 小米 Q3 净利润降超五成，AI 研发占比超三成

**收入降 5.2%，净利润降 56.8%。** 36氪报道了[小米 2026 年三季度财报数据](https://www.36kr.com/p/4084521409762952)：收入 **1072.4 亿**元，毛利率从 22.9% 降至 **20.2%**，主因是存储等元器件成本上涨📄。前三季度研发开支约 274 亿元，AI 相关费用占比超 30%，MiMo API 调用量据管理层表述持续增加，但 AI 收入未单独披露。硬件利润承压而 AI 研发持续加码，这一剪刀差是当前国内硬件厂商的共性处境。

![小米继续加码AI，MiMo靠什么回本？](https://img.36krcdn.com/hsossms/20261125/v2_db8bfdcf09b642a6a369e37ecd96e077@6452560_oswg61623oswg1080oswg545_img_000?x-oss-process=image/format,jpg/interlace,1 "小米继续加码AI，MiMo靠什么回本？")

---

### 4. AI 硬件股业绩超预期却集体大跌

**华尔街开始算毛利，不再只看订单。** Telegram 频道援引市场信号显示，[HPE 上调 2027 财年营收指引](https://t.me/aigc1024/27438)至 27–**35%** 却暴跌 **16.31%**，原因是 AI 云营业利润率指引降至约 14%📉。ADI 营收涨 42% 但下季 EPS 指引略逊预期，单日跌 17.37%。这是 Telegram 频道的市场观察，非独立核实数据，读者可据此留意后续财报验证。

---

### 5. OpenAI Codex 额度漏洞修复，Sol 和 Astra 消耗加快

**漏洞修复后两款模型额度将消耗更快。** V2EX 用户转述称收到 **OpenAI** 邮件，[Codex 此前存在额度扣费漏洞](https://www.v2ex.com/t/1259656#reply1)，修复后 **GPT-6.2 Sol** 和 Astra 的实际消耗速度会高于修复前🔔。该信息来自用户转述，官方公告内容以实际邮件为准。正在跑 Codex 批量任务的开发者，建议今天检查一次剩余额度。

![OpenAI Codex 额度漏洞修复通知](https://i.imgur.com/zLVaxmJ.png "OpenAI Codex 额度漏洞修复通知")

---

### 6. Kagi 推出邮件与日历公测，含 50 GB 存储

**60 天测试期后年费 99 美元，Kagi Ultimate 已包含。** Kagi 官方公告介绍了 [Kagi Mail 公开测试版详情](https://blog.kagi.com/kagi-mail-public-beta)：提供 kagimail.com 地址、自定义域名、不限数量别名和跟踪像素防护，服务器基于开源 Stalwart，支持 **IMAP/JMAP**/CalDAV📬。共享邮箱和原生移动应用标注为即将推出，通讯录尚未上线。**AI 功能可关闭**，但这项服务并非端到端加密产品。


![Kagi 推出邮件与日历公测，含 50 GB 存储 · 原文配图](https://media.kagi.com/kagi-mail-announcement.jpg "Kagi 推出邮件与日历公测，含 50 GB 存储 · 原文配图")

---

### 7. Personal Agent 的端侧依赖，本质是身份问题

**Agent 能办事的前提是能用你的身份登录。** 微信公众号文章从登录态角度分析了 [PA 端侧必要性的结构原因](https://mp.weixin.qq.com/s/XDUHOe5MkKI0CqZ49umECQ)：Cookie 在浏览器、企业微信在手机、公司 NAS 在局域网，**这些凭证无法云端代持**🔒。作者指出 Claude Code 和 Codex 的先发优势，恰恰来自它们本来就运行在有登录态的机器上。云端方案的根本障碍是平台风控与实名制，不是技术本身。

![目前为止我看过的、关于 PA 最贴近实际处境的一篇。@葬愛咸鱼 手必须落在「有登录态的那台设备」](https://mmbiz.qpic.cn/mmbiz_jpg/KxyiaPBwFQDTQBfhUOpf1LZiaQG50vW2vxzvvWmpmz8EtRcjpgVG3ul4mFvnZ1ia6mTwpuOTXMnEnCqvGA0wKFPhdicnfURcxId47vibftpQfvZU/0?wx_fmt=jpeg "目前为止我看过的、关于 PA 最贴近实际处境的一篇。@葬愛咸鱼 手必须落在「有登录态的那台设备」")

---

### 8. OpenAI 公布预训练困惑度数据并提议行业限制

**以困惑度阈值为基准制定行业发展限制。** BestBlogs 整理的 Latent Space 报道提及，[OpenAI 在《困惑度与智能》中公布了预训练历史数据](https://www.bestblogs.dev/en/article/698c22e265)，并提议据此制定行业通用发展限制，**微软据报已加入**这一倡议📄。报道同时提到 GPT-6.2 Sol 已向高级用户推出、Anthropic 发布 Claude Ship 测试版用于 PR **自动化**。信息来自媒体整理，具体条款和参与方以官方公告为准。


![OpenAI 公布预训练困惑度数据并提议行业限制 · 原文封面](https://www.bestblogs.dev/en/article/698c22e265/opengraph-image?696e70e5d7b1d782 "OpenAI 公布预训练困惑度数据并提议行业限制 · 原文封面")

---

### 9. Gemini 官方 Discord 直播演示 GIF 和 Meme 生成

**官方活动演示多媒体内容生成功能。** Google **Gemini** 官方账号发帖邀请用户[参加 Discord 直播活动](https://x.com/GeminiApp/status/2125273131845869784)，内容包括生成 GIF、制作 Meme 和玩转头像🎨。活动为北京时间 11 月 25 日凌晨 4 点，直播地址为 discord.gg/gemini。**想测试 Gemini 多媒体生成**能力的用户，可回看录像。

---

### 10. 国内 Personal Agent 主打办事能力或是误判

**国内互联网基建完善，Agent 替代价值有限。** 即刻用户莫唯书 Mark 在[原帖中指出](https://m.okjike.com/originalPosts/6b0524e4320fd7e1b52e2854)，Muse 类 PA 产品的逻辑成立于**北美生态割裂**的前提，国内用户动几下手指已能完成大量操作💬。这是个人观点，并非调研结论。对正在规划国内 Agent 产品方向的团队有一定参考价值。

---

## **⌘ 开源 TOP 项目**

### mvanhorn/last30days-skill：跨平台话题调研聚合

[mvanhorn/last30days-skill 的核心代码已公开](https://github.com/mvanhorn/last30days-skill)，这是一项 AI Agent 技能，能同时检索 Reddit、X、YouTube、HN、Polymarket 等平台近期内容，整合成带引用来源的摘要🔍。今日新增 **703 Stars**，累计总 Stars 74662。用 Python 编写，适合需要定期做话题研究或行业情报收集的分析师和开发者接入测试。


![mvanhorn/last30days-skill：跨平台话题调研聚合 · README 展示图](https://raw.githubusercontent.com/mvanhorn/last30days-skill/main/media/pr-assets/last30days-ad.gif "mvanhorn/last30days-skill：跨平台话题调研聚合 · README 展示图")

---
## **◉ 社媒精选**

### H-Net 架构让模型直接处理原始字节

**去掉分词器，模型自己动态拼词。** Gorden Sun 在推文中介绍了 Cartesia 团队的 [H-Net 分层网络架构](https://x.com/Gorden_Sun/status/2125505009525911726)：直接以原始字节为输入，在阅读中动态拼合词语和短语⚙️。推文援引 Cartesia 官方博客称，**同等算力下训练消耗仅为传统模型十分之一**，处理生僻编程语言效率提升更为明显。这一说法来自官方自述，读者可访问 [Cartesia 官方博客对照核实](https://www.cartesia.ai/blog/from-tokens-to-bytes-part-1)。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2115501577012461568/vid/avc1/1920x1080/Yjs4MoGlnchqw209.mp4?tag=29"></video>

---

### LeCun 指控 Amodei 借 AI 风险叙事限制开源

**LeCun 称 Amodei 从 GPT-2 时代起就推动限制开源模型。** 据 HackerNews 收录的 [LeCun 原帖整理](https://twitter.com/ylecun/status/2124550037912920090)，LeCun 把 Amodei 离开 OpenAI 解读为控制权之争，并以历史上限制印刷术类比少数机构掌握知识渠道的风险📄。这是 LeCun 的个人判断，帖子中未引用可证实 Amodei 私下动机的内部记录。**开放权重的政策效果**和 AI 风险证据是独立问题，建议分开评估。

---

## **😄 AI趣闻**

### 买歌助手把钱包举到一半，自己先打了退堂鼓

Harley 让 **Claude Code** 帮他做一件很朴素的事：从 Instagram 短视频认出歌，然后找到 **Bandcamp** 付钱支持作者🎬。流程跑得挺顺，直到 Bandcamp 给搜索接口加了访问检查，Claude 当场表示[不帮绕过限制，但转头愿意取 YouTube 音频](https://michaelharley.net/posts/2026/11/01/llm-agents-work-for-their-parent-companies-not-for-you/)。用户想掏钱买歌，代理拦在了付款前一步。

![买歌助手把钱包举到一半，自己先打了退堂鼓 · 原文封面](https://michaelharley.net/assets/images/open-graph-image.png "买歌助手把钱包举到一半，自己先打了退堂鼓 · 原文封面")

## **❓ 相关问题**

**Claude 的 MCP 加了操作确认功能，我用 Claude 账号能接入测试吗？**

**Skills over MCP、Tasks 和 Elicitation 是面向 MCP 开发者的协议层更新**，主要影响自行构建或调用 MCP 工具的开发者工作流，而非 Claude.ai 普通对话界面的直接功能开关。根据[宝玉整理的 MCP 新能力说明](https://x.com/dotey/status/2125421676582043960)，这三项能力需要通过 MCP 工具开发接入。