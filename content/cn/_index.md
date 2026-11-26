---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/11/26
breadcrumbs: false
next: /2026-11/2026-11-26
description: "OpenAI修复计费漏洞后GPT-6.2调用额度加速消耗，部分用户本月用量上限需重新估算。 从API语言迁移到模型权重压缩，今天多个方向都在把已有系统做得更轻、更可验证。 跑批量任务的开发者先看第2条确认额度影响，再看Anthropic的Rust迁移博客了解AI辅助验证方法。"
cascade:
  type: docs
---

## **今日摘要**

```
OpenAI修复计费漏洞后GPT-6.2调用额度加速消耗，部分用户本月用量上限需重新估算。
从API语言迁移到模型权重压缩，今天多个方向都在把已有系统做得更轻、更可验证。
跑批量任务的开发者先看第2条确认额度影响，再看Anthropic的Rust迁移博客了解AI辅助验证方法。
```

## **🔥 今日焦点 TOP 10**

### 1. Gemini Live 视觉引导功能登陆 iOS

**无障碍视觉辅助上线。** Google **Gemini** 官方宣布，[Gemini Live 视觉引导功能登陆 iOS](https://x.com/GeminiApp/status/2125685936344236471)🎥。用户打开 **Live** 对准摄像头，即可获得实时音频描述和语言重构提示。该功能由 Google 与盲人及低视力社群协作开发。有视觉辅助需求的 iOS 用户现在可以直接试用。

---

### 2. OpenAI 修复计费 Bug 后部分用户额度突然缩水

**调用成本意外上升。** 📊 歸藏转述 OpenAI 员工 Tibo 的说明，[GPT-6.2 发布时有计费折扣错误](https://x.com/op7418/status/2125790584501878963)，导致部分用户享受了未经授权的低消耗比率。修复后，同样工作量在 GPT-6.2 Astra 上将比上周快 **40%** 耗尽额度，Sol 上快 **25%**。正在跑批量任务的用户需要重新估算本月用量上限。

---

### 3. 算力租赁价格走势可在预测市场直接押注

**算力开始金融化。** rosicky311_明浩在即刻介绍，[Polymarket 新开设了 Compute 频道](https://m.okjike.com/originalPosts/6b078dfa3ce945612e9277ac)📊。用户可对 H100、B200、B300 每小时租赁价格走势下注。这意味着算力已像大宗商品一样进入衍生品市场。关注算力成本的从业者可以把这个页面当作额外的价格参考指标。

![Polymarket 算力预测市场界面](https://cdnv2.ruguoapp.com/Fvq4WswBmwDZNFD7r8CbEl5bG-X2v3.png "Polymarket 算力预测市场界面")

---

### 4. PrismML 发布三值权重模型，本地部署文件仅 5.93 GB

**27B 模型压缩到 6 GB。** 📏 PrismML 官方公告显示，[PrismML 发布三值权重模型，本地部署文件仅 5.93 GB](https://prismml.com/news/bonsai-2-5-27b)，对比 FP16 基座的 53.8 GB 大幅缩小。厂商内测显示 AppWorld 评分从 51.2 升至 **90.5**，单张 RTX 4090 可达 **204 tokens/s**。权重以 Apache 2.0 开源，适合本地跑工具调用和编程任务的开发者。


![PrismML 发布三值权重模型，本地部署文件仅 5.93 GB · 原文封面](https://cdn.prod.website-files.com/699604cc2b9dd89bdbda0608/6a6d0e0bc0d5f9a97a5164c0_69cc089669ab0df26e921aac_prism-og-img%2520(2).png "PrismML 发布三值权重模型，本地部署文件仅 5.93 GB · 原文封面")

---

### 5. 共享推理服务器可能让沙箱模型悄悄互通信号

**推理基础设施隔离假设受挑战。** Niranjan Deshpande 与 David Africa 在 LessWrong **发布实验报告**，展示两个无法直接通信的模型共用 vLLM 时，[可通过调度和缓存的可观测差异传递低带宽信号](https://www.lesswrong.com/posts/7wzWuLP3HhyBLmKfo/models-can-communicate-via-inference-servers-despite-being)🔒。受控实验中，模拟监督器漏掉了全部 **354 个**带信号的违规样本。这些结论基于预先设计的实验，尚未验证商业服务的实际暴露程度。


![共享推理服务器可能让沙箱模型悄悄互通信号 · 原文封面](https://res.cloudinary.com/lesswrong-2-0/image/upload/c_limit,w_1200,q_auto,f_jpg/f_auto,q_auto/v1/mirroredImages/7wzWuLP3HhyBLmKfo/ilkdsamuxja1dvu4uah2 "共享推理服务器可能让沙箱模型悄悄互通信号 · 原文封面")

---

### 6. Anthropic 被曝向用户公司发出蒸馏指控

**API 批量调用触发蒸馏审查。** 🧪 一位开发者在 HN 描述，公司跑回归基准时产生的批量请求，[被 Anthropic 疑为模型蒸馏行为](https://news.ycombinator.com/item?id=50630809)。帖中收到 **24 小时**内申诉的通知。帖子没有附 **Anthropic** 的通知原文或检测依据，仅为发帖人单方叙述。社区建议保留带时间戳的回归工具记录，并先排查 API 密钥是否泄露。

---

### 7. PenGPT 只看几个词样本就能接写陌生手迹

**小样本笔迹跟写可以实现。** 研究者展示了一套把手写和草图统一表示为笔尖移动序列的生成模型。[520 万参数的手写版本只需 1-3 个词样本](https://greydanus.github.io/2026/11/12/pengpt/)，就能接续陌生作者的风格✍️。OCR 评测中生成手写识别率约 **54%**，真实手写约 **66%**。笔顺来自自动描摹推断，非原始轨迹。项目已公开论文、代码和权重。


![PenGPT 只看几个词样本就能接写陌生手迹 · 原文配图](https://greydanus.github.io/assets/pengpt/hero_v4.png "PenGPT 只看几个词样本就能接写陌生手迹 · 原文配图")

---

### 8. Scott Aaronson 转述整数分解入 P 传闻，本人无把握

**RSA 破解传言目前无证据。** 🧪 计算复杂性研究者 **Scott** **Aaronson** 在博客评论区提到，[听闻某实验室可能掌握多项式时间整数分解算法](https://www.reddit.com/r/singularity/comments/1y59ef1/rumor_that_openai_or_anthropic_found_a_way_to/)。次日他明确表示，在看到细节或实验室直接说明之前，远没把握。帖子没有公布算法、证明或运行成本。当前阶段这条消息只能作为待核验线索。

---

### 9. 宝玉转发 Opus 5.6 灰度版生成的交互演示网页

**灰度版 Claude 被用于生成炫技网页。** 宝玉转发的录屏显示，[据称由 Opus 5.6 灰度版制作的 AI 未来主题演示页](https://x.com/dotey/status/2125781282349076981)包含多种过渡动效和图表🎞️。来源标注为"**据说**"，非 Anthropic 官方确认的版本发布。视频展示了单次提示生成可交付演示页面的可能性。对做客户演示的设计师和开发者有参考价值。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2125781055814742016/vid/avc1/1920x1080/xNoDRhdUgLdz90v5.mp4?tag=29"></video>

---

### 10. 人物姿势参考图库做成了中文版，支持搜索和分类

**AI 绘画找参考更方便。** AI探索指南频道介绍，[有人把 1,439 张人物姿势参考图做成了中文图库](https://t.me/aigc1024/27467)。支持中文搜索和姿势分类筛选，参考图片可下载📐。适合做 AI 美女图、视频分镜、人物动作设计的创作者。在线地址和 GitHub 仓库已公开。

---

## **⚡ 产品与功能更新**

### 《纽约时报》要求摄影师暂停更新 Photoshop

**媒体机构开始管控 AI 编辑工具。** The Verge 报道，《纽约时报》向旗下摄影师发出内部通知，[建议暂不更新 Photoshop](https://www.theverge.com/ai-artificial-intelligence/1041227/the-new-york-times-warns-photographers-not-to-update-photoshop-over-ai-features)。原因是新版本新增的 AI 生成式填充功能可能违反其新闻摄影准则📄。这是主流新闻机构首次明确把 AI 编辑能力与版本更新挂钩进行管控。签有新闻摄影合同或需符合编辑室规范的摄影师，应在更新前确认雇主的 AI 工具政策。

---
## **◎ 行业变化与个人影响**

### Anthropic 把 Messages API 从 Python 迁移到了 Rust

**核心 API 服务层换语言。** Anthropic 官方工程博客记录了这次迁移过程：[用 Claude 智能体团队持续追踪新旧服务之间的行为差异](https://www.anthropic.com/research/migrating-api-to-rust)🔧，并自动修复不一致之处。这是一个把 AI 应用于大规模后端迁移验证的实际案例。对负责服务迁移的工程师来说，这篇文章提供了一个可参考的 AI 辅助验证方法。

---
## **⌘ 开源 TOP 项目**

### elementalsouls/Claude-BugHunter：漏洞挖掘技能包

今日新增 **1,652 Stars**，累计 23,605 Stars。[Claude-BugHunter 整合了 85 个漏洞挖掘技能](https://github.com/elementalsouls/Claude-BugHunter)🔒，覆盖 24 个核心漏洞类别，附 681 个已披露报告模式和企业身份与基础设施攻击矩阵。项目基于 Claude Code，通过 16 个斜杠命令驱动整个挖洞流程。适合做授权渗透测试和外部红队工作的安全研究员。

### obra/superpowers：AI 智能体技能框架

今日新增 **903 Stars**，累计 326,954 Stars。[superpowers 提供了一套可扩展的智能体技能管理框架](https://github.com/obra/superpowers)🛠️，Shell 实现，定义了如何为智能体组织工具、能力和工作流。适合正在搭建多工具 AI 智能体或想规范化开发方法的工程师。

### cursor/plugins：Cursor 插件规范

今日新增 **416 Stars**，累计 19,639 Stars💻。[cursor/plugins 给出了 Cursor 插件的开发规范和官方参考插件](https://github.com/cursor/plugins)，TypeScript 实现，是开发者为 Cursor 编写自定义插件的一手参考。适合重度使用 Cursor 且希望扩展其能力的开发者。

---
## **◉ 社媒精选**

### 橘 AI 整理了一批专门清除 AI 味的写作与设计 Skill

**去 AI 味的 Skill 合集被公开分享。** 即刻用户橘 AI 列出了多个针对不同场景的 Skill，[涵盖文章去排比破折号、受控英语文档写作、UI 配色与字阶规范以及 logo 多场景测试等方向](https://m.okjike.com/originalPosts/6b07a371320fd7e1b571bf0d)✍️。每个 Skill 链接了对应的 colaskill 页面，可直接取用。对输出物需要对外交付、不想被甲方认出 AI 痕迹的设计师和内容创作者，这批 Skill 值得逐一试一遍。

![橘AI整理的去AI味Skill合集预览](https://cdnv2.ruguoapp.com/FrzMRjxWy5c8hGLsd-bG5Q4XBfP7v3.png "橘AI整理的去AI味Skill合集预览")

### Anthropic 用 Claude 智能体团队验证 Rust 迁移的具体方法

**多智能体协作完成生产级代码迁移验证。** Anthropic 官方账号介绍，Messages API 从 Python 迁到 Rust 期间，[团队让 Claude 智能体负责追踪两个版本之间的行为差异并自动修复](https://x.com/AnthropicAI/status/2125627317263466739)🤖。这不是演示用例，而是在真实 API 服务迁移中实际使用的流程。对计划进行大规模服务重写的工程团队，原始博客链接里的方法论值得参考。

---

## **😄 AI趣闻**

### 相信世界会毁灭，然后继续上班

有人问 Anthropic 内部怎么看 AGI 风险📄。前 OpenAI 研究员 Will Depue 给出的答案是：[他们认为极高概率所有人都会死，同时觉得不得不继续推进](https://x.com/sama/status/2125639418849714280)。理由是"别人也在做"。Sam Altman 转发时顺带学了个新词——**hyperstitioning**，大意是：你越相信某件事会发生，你的行动就越让它成真。这词他之前没听过，但觉得"挺好用的"。末日预言配上打卡上班，还真挺好用的。

![相信世界会毁灭，然后继续上班 · 原文配图](https://pbs.twimg.com/amplify_video_thumb/2125307717162336256/img/fNw14Rnu3by_UTPS.jpg "相信世界会毁灭，然后继续上班 · 原文配图")

## **❓ 相关问题**

### Claude 用来接进自己的工具，手上的账号能先试吗？

**先用原账号试一个小任务。** 想知道从哪开始，参考[当天的使用案例](https://news.ycombinator.com/item?id=50630809)；能否用，要看自己的账号界面。要用 API 接入，可对照[爱窝啦·AI账号店的 Claude/Gemini/Codex 三合一](https://www.aivora.cn/products/claude-gemini-codex-relay-credit-packages)的模型列表；中转不是官网会员。