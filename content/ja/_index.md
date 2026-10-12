---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/10/11
breadcrumbs: false
next: /2026-10/2026-10-11
description: "TypeSafe AI 三周估值涨至75亿美元，Jev 模型直接返回结构化决策而非文本，发布3天生成量破万亿token。 多个栏目同时指向一件事：Agent 的价值正从通用能力转移到它绑定了哪套数据生态。 今天先看第8条横评和第5条播客，再决定手头的 Agent 工具是否值得续费。"
cascade:
  type: docs
---

## **今日摘要**

```
TypeSafe AI 三周估值涨至75亿美元，Jev 模型直接返回结构化决策而非文本，发布3天生成量破万亿token。
多个栏目同时指向一件事：Agent 的价值正从通用能力转移到它绑定了哪套数据生态。
今天先看第8条横评和第5条播客，再决定手头的 Agent 工具是否值得续费。
```

## **🔥 今日焦点 TOP 10**

### 1. 不输出文本的 AI 模型三周估值暴涨 37 倍

**直接返回决策，不走文本。** [不输出文本的 AI 模型三周估值暴涨 37 倍](https://www.36kr.com/p/4019993444503425)，Jev 于 9 月 15 日发布，开发公司 TypeSafe AI 完成 **8.7 亿**美元融资，由 a16z 领投，估值达 75 亿美元。发布仅 3 天，生成量达 **1 万亿 token**，财富 500 强中已有约三分之一企业接入。需要把 LLM 输出接入结构化决策流程的后端开发者，今天可以关注 Jev 的 API 接口设计。

![TypeSafe AI 融资与 Jev 模型架构概览](https://img.36krcdn.com/hsossms/20261010/v2_e26c4224bd40478ebeb9098755983a9c@000000_oswg48441oswg1080oswg626_img_000?x-oss-process=image/format,jpg/interlace,1 "TypeSafe AI 融资与 Jev 模型架构概览")

---

### 2. 用纯代码完成 3D 龙建模，LLM 独立处理全流程

**LLM 生成完整 3D 建模代码。** 即刻用户在[用纯代码完成 3D 龙建模，LLM 独立处理全流程](https://m.okjike.com/originalPosts/6aca700e756bbb6658acc03d)中记录了整个过程：LLM 仅凭代码完成一次细节极为丰富的 3D 龙建模，从几何构建到材质全部由模型独立输出。博主随手让 Grok Bot 把整条复杂推文串拉取并重排成中文长文，**概念解析与相关链接**一并补全。对需要消化密集技术推文的用户，这是一个可**即时复用**的手机阅读工作流。

![Grok Bot 将推文串重排为中文长文的截图](https://cdnv2.ruguoapp.com/FpGv_r1xaNB0sPUfrjtaUHN67r2Tv3.jpeg "Grok Bot 将推文串重排为中文长文的截图")

---

### 3. Codex 额度按美东时间每日重置

**Codex 重置时间有地区差。** V2EX 用户在[Codex 额度按美东时间每日重置](https://www.v2ex.com/t/1247751#reply4)中确认，Codex 额度在北京时间 15:00–16:00 附近刷新，对应的是美东 EOD（End of Day）。这意味着国内用户**不必等到次日凌晨**，下午刷新后即可继续使用。重度 Codex 用户可以据此安排任务，把消耗大的批量任务放在**重置后的时间段运行**。

![Codex 额度重置时间截图](https://i.imgur.com/Aq4xVN7.png "Codex 额度重置时间截图")

---

### 4. Manus 新用户首日体验引发产品讨论热潮

**Manus 正在扩大开放。** 即刻用户余一在[入职第一天的记录贴](https://m.okjike.com/originalPosts/6aca487e756bbb6658a88371)中描述了加入 Manus 后的产品感受，并**开放讨论使用案例**与需求反馈。**产品、体验与商业化路径**均在讨论范围内。想了解 Manus 实际使用感受的用户，可以直接在该帖下参与交流。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://videocdnv2.ruguoapp.com/lsZ5N_p3cqt1iQe-utvzC6JitBPo.mp4?sign=9253a7a483b76fc8f4196e26766cc948&t=6acb204d"></video>

---

### 5. YouMind 创始人谈 AI 应用如何不被模型吞噬

**AI 应用的生存压力来自两端。** YouMind 创始人玉伯在[YouMind 创始人谈 AI 应用如何不被模型吞噬](https://m.okjike.com/originalPosts/6ac97f3e756bbb66589314ae)中系统梳理了 AI 应用面临的处境：模型厂商从上方降维打击，垂直玩家从下方蚕食行业 know-how，**中间层通用应用**最难突围。他的判断是：护城河在于绑定特定数据生态，而非追求"**什么都能干**"。正在做 AI 应用或评估投资方向的人可以参考这个取景框。

---

### 6. REA 把逆向分析能力接入编程智能体

**智能体可以直接读汇编和调用关系了。** REA（Reverse Engineer Anything）通过 MCP 协议为编程智能体提供逆向分析接口，详见 [rea.tools 官网](https://rea.tools/)。智能体发出请求后，REA 返回**伪代码、字符串、调用图**等结构化结果，智能体据此解释程序行为并继续追踪。深度原生分析仍需本机安装 Ghidra 或 IDA；分析在**本地进行**，但结果会交给所连模型，其数据政策仍适用。

---

### 7. AI 让人际交流动力正在悄悄流失

**AI 生成越多，人与人的交换越少。** 工程师 Fernando Borretti 在[这篇长文](https://borretti.me/article/no-man-is-an-island)中提出，知识共同体依赖他人的反馈、引用与协作来维持长期动力；当读者被模型替代，分享文章和开源代码的意义也随之稀薄。他担心即使每个人都能用 AI 产出更多，**真正持续研究与创造的人**反而减少。这是作者的个人判断，文中没有系统调查数据支撑。

---

### 8. 四款 AI 智能体横评：入口、计费和中间层困境

**普通用户视角的 Agent 大实话。** 即刻用户苏小晚在[四款 AI 智能体横评：入口、计费和中间层困境](https://m.okjike.com/originalPosts/6acafa95141b85b2927fd9d2)中使用了 Manus、Muse、豆包办公和 WorkBuddy 之后，给出三点判断：智能体的核心竞争力是它绑定了哪套企业数据；**按积分计费**把任务成本的不确定性转嫁给了用户，这是企业采购最大的障碍；中间层通用智能体夹在模型厂商和垂直应用之间，处境最尴尬。选 Agent 工具的企业用户，第一个问题应该是"**它接的是公司哪套数据**"。

---

### 9. tensorflow 登上今日 GitHub 趋势榜

**TensorFlow 再度获得社区关注。** [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) 今日新增 **26 颗** Stars，累计已达 **200797 Stars**。作为覆盖训练与推理的开源机器学习框架，它在大量生产部署场景中仍是主力选项。正在评估基础框架选型的团队，可以结合 TensorFlow 与 JAX 的现状对比后再做决定。

---

### 10. AI 协作中的认知消耗值得正视

**AI 的问题超出人的认知边界时，最让人心累。** 产品设计师少楠在[即刻这条帖子](https://m.okjike.com/originalPosts/6acaddd6756bbb6658b7323e)中描述了一种真实的协作疲劳：AI 频繁抛出超出使用者当前知识范围的问题，而又不得不给出答案，这种**模棱两可的应对状态**持续积累后会造成明显心理负担。这个观察对长期重度使用 AI 协作工具的从业者有参考价值，提示"**任务分解清晰度**"比工具本身更值得优先处理。

---

## **⚡ 产品与功能更新**

### MiniMax M3 的稀疏注意力设计让长上下文更快

**稀疏注意力加块级检索，降低显存压力。** MiniMax 研究员 Olive Song 在[这场技术分享](https://www.bestblogs.dev/en/video/427fee254?utm_source=rss&utm_medium=feed&utm_campaign=resources&entry=rss_article_item)中解释了 M3 的核心设计：轻量索引分支先筛选候选 token，主分支只计算这部分，块级检索让显存读取更连续。从零开始同时训练图文的策略，在相同文本 token 预算下基本保住了文本能力🔊。讲者自述预填充和解码比全量注意力更快，但具体基准测试口径未在演讲中公开。

---
## **⌘ 开源 TOP 项目**

### mksglu/context-mode：AI 编程代理的上下文压缩器

**减少 98% 工具输出噪音，会话记忆可持久化。** [mksglu/context-mode 的核心能力](https://github.com/mksglu/context-mode)是沙箱化工具输出，通过 MCP + hooks 在 17 个平台上强制执行路由，让 AI 编程代理在长任务中不因上下文膨胀而降速。今日新增 **178 颗 Stars**，累计 26461 Stars。频繁跑长上下文编程任务、发现 Token 消耗失控的开发者，今天可以直接试用。

---

### hugohe3/ppt-master：文档一键转原生 PowerPoint

**输入主题或文档，输出带动画和旁白的 .pptx 文件。** [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) 支持原生形状、过渡动画🎞️、数据驱动图表和演讲者备注音频，并兼容自定义 .pptx 模板。今日新增 **461 颗 Stars**，累计 59787 Stars，是今日日榜新增最多的 AI 项目。需要批量制作内容型 PPT 的运营和咨询人员，可以拿一份真实文档先跑一遍看效果。

---

### huggingface/transformers：多模态模型的统一推理与训练框架

**文本、视觉、音频、多模态，一个框架全覆盖。** [huggingface/transformers](https://github.com/huggingface/transformers) 提供最先进模型的模型定义，支持从推理到训练的完整流程，是目前社区使用最广的模型加载标准之一。今日新增 **96 颗 Stars**，累计 167392 Stars。需要快速接入新模型或切换多模态能力的研究者和工程师，Transformers 仍是最低摩擦的起点。

---
## **◉ 社媒精选**

### 歸藏：AI 开源与游戏破解的讨论早已有迹可循

**"一切都会被开源"话题突然火了，但不是第一次被讨论。** 博主歸藏在[这条推文](https://x.com/op7418/status/2109159416599883861)中指出，关于 AI 开源必然性和游戏破解的议题，Next Token 播客在此前几天就已详细讨论过，今天才在更大范围内传播。他整理了播客中的几个核心观点并配图总结。**行业信号往往早于传播高峰**，关注一手内容比等热搜更有效率。

![Next Token 播客核心观点摘要](https://pbs.twimg.com/media/HUU9TYoaIAAycUV?format=jpg&name=orig "Next Token 播客核心观点摘要")

---

### 向阳乔木：Codex Computer Use 剪辑 1 分钟视频花了 27 分钟

**能跑通，但速度完全不能用于生产。** 向阳乔木在[这条实测推文](https://x.com/vista8/status/2109088491451900130)中记录了用 Codex 的 Computer Use 功能操作剪映自动剪辑的全过程：一段不到 1 分钟的视频，整个流程耗时 **27 分钟**。他的结论是自己打算改写一个专用 Skill，直接走录屏到剪辑的流水线，预计会快很多。这条实测说明 Computer Use 的通用路径目前仍有明显性能瓶颈，值得等专用工作流成熟后再评估。

![Codex Computer Use 操作剪映的实测截图](https://pbs.twimg.com/media/HUT8OCKawAExbW2.jpg "Codex Computer Use 操作剪映的实测截图")

---

### 宝玉转述：magpie 新功能为每个 Agent 单独调优 Token 压缩

**千人千面的 Token 配置，不是一个参数适用所有人。** 宝玉在[这条转发帖](https://x.com/dotey/status/2108972823440220375)中引用了 magpie 的观点：Claude Code 等工具的上下文压缩阈值并没有一个普遍最优解，每个 Agent 和用户的使用习惯差异会导致截然不同的最优配置。magpie 新推出的"为你调优"功能，用本地真实调用数据回放压缩阈值和缓存时长，计算出**对当前用户最省 Token** 的配置组合。长时间跑 Claude Code 任务、发现额度消耗过快的开发者，可以关注这个工具。

![magpie 本地调优功能示意图](https://pbs.twimg.com/media/HUQ6WLWbUAAfzqi?format=jpg&name=orig "magpie 本地调优功能示意图")

---

## **😄 AI趣闻**

### 架构师头衔还没捂热，Claude已经开始投简历了

产品发布会上总爱说"赋能"，但 **Claude Code Projects** 这次直接把目标写进了 Readme：替换架构师。**Pro 和 Max 用户**昨天一觉醒来，发现候补名单直接清空、全员放行——连 waitlist 都懒得慢慢排了。用法也简单粗暴：你只管扔一个[演示中把庞大任务甩给 Claude 自动规划拆解的完整流程](https://x.com/Gorden_Sun/status/2108941921926382035)，剩下的它自己想。**4 分钟**的官方上手视频看完，有人已经开始更新简历了——不是 Claude，是旁边坐着的架构师。

## **❓ 相关问题**

### Codex 会员用 Computer Use 操控剪映，跑完一个视频要等半小时，有办法提速吗？

**慢不是会员的问题，是让 AI 逐帧"看屏幕操作"本身就慢。** 今天[这个实测](https://x.com/vista8/status/2109088491451900130)里，不到一分钟的视频花了 27 分钟，根源在于 Computer Use 要靠截图识别界面再逐步点击，每一步都有延迟。换个思路：把剪辑逻辑写成 Skill，让代码直接调用剪映或 ffmpeg 的命令行接口，绕过界面操作，速度差距会很明显。Codex 账号的额度分配可以参考[官方定价页](https://developers.openai.com/codex/pricing/)，确认适合跑代码任务再入手；需要账号的可以看[爱窝啦·AI账号店的 Codex 商品](https://www.aivora.cn/products)。