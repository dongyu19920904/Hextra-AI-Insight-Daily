---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/11/28
breadcrumbs: false
next: /2026-11/2026-11-28
description: "港科大与混元联合发布Rosetta，解决多模态模型叠加新能力时的灾难性遗忘，代码与权重完整开源。 从开源工具到商业服务，今天的更新都在争着降低同一件事的门槛：让AI能力真正嵌进具体工作而非停在演示。 开发者今天优先看Rosetta和diagram-design两个开源项目，前者影响多模态训练策略，…"
cascade:
  type: docs
---

## **今日摘要**

```
港科大与混元联合发布Rosetta，解决多模态模型叠加新能力时的灾难性遗忘，代码与权重完整开源。
从开源工具到商业服务，今天的更新都在争着降低同一件事的门槛：让AI能力真正嵌进具体工作而非停在演示。
开发者今天优先看Rosetta和diagram-design两个开源项目，前者影响多模态训练策略，后者可以直接插进现有工作流用。
```

## **🔥 今日焦点 TOP 10**

### 1. 港科大与混元联合解决多模态灾难性遗忘

**训新能力不用从头重训。** 腾讯混元与香港科技大学联合提出 Rosetta，机器之心报道这项[港科大与混元联合解决多模态灾难性遗忘](https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651076720&idx=2&sn=d375259d0dfaea462ea23093a9ae08bd)从架构层面应对灾难性遗忘🧠。给视觉语言模型叠加图像生成能力后，原有语言能力不再退化。全套预训练、推理、评测代码及模型权重已**完整开源**，支持**单卡至千卡**集群规模。在已有基模上叠加新能力的团队，可以直接取用这套方案。

![Rosetta 原生多模态预训练架构示意](https://wechat2rss.bestblogs.dev/img-proxy/?k=2b680dab&u=https%3A%2F%2Fmmbiz.qpic.cn%2Fsz_mmbiz_jpg%2F5L8bhP5dIqFNaTmwmH0NKVnZ8BDK958BFWJoVLuM6vhqXWwYlBkiaVMGDNr75MCmUIXXvVAlc6q8ZQGhWHIWH06Ipzb3DABD0KHyAa7Ihajc%2F0%3Fwx_fmt%3Djpeg "Rosetta 原生多模态预训练架构示意")

---

### 2. AMD RDNA 专用补丁让 llama.cpp 本地推理提速

**AMD 显卡跑本地模型，有专属优化分支。** 一位开发者测试了[AMD RDNA 专用补丁让 llama.cpp 本地推理提速](https://devnull.land/amd-specific-llama-cpp)，优化涵盖多词元预测、预填充和量化解码⚡。测试硬件是以 eGPU 接入的 **AMD R9700**，模型为 Qwen3.8-27B 的 Q6\_K\_L GGUF 量化版。这组数字只代表该特定硬件与模型的结果，其他显卡或模型能否同等受益尚未验证。使用 AMD GPU 做**本地推理的开发者**，可以对照自己的硬件评估是否值得切换。

---

### 3. 自托管爱好者借助 AI 代理把配置时间压缩到半天

**配置一台新服务器从一周缩到半天，AI 代理降低的是前期组合成本。** 博主 Jan-Lukas Else 在[个人文章](https://janlukas.blog/posts/ai-self-hosting)中描述，他把 Docker Compose 和系统配置纳入 Git 版本控制，配合编程代理完成初次设置。家用服务器跑 **NixOS**，VPS 用 Git **自动构建**的 Debian bootc 镜像，依赖升级由 Renovate 提交后自动部署🔧。作者强调，新增服务的漏洞和维护负担仍需自行承担，生成的变更也要看懂再合并。有自托管需求但被配置复杂度劝退的人，这个思路可以参考。

---

### 4. 让聊天助手编写 AI 模型群聊吐槽你的提示走红

**让单个模型模拟"多个 AI 在群里议论你"，意外成了自我观察工具。** Construct22 的[页面介绍了这个角色扮演提示玩法](https://construct22.com/)：在有聊天历史的助手上，以 ChatGPT、Claude、Gemini 等角色口吻生成一段 WhatsApp 群聊💬。这并不连接真实账户，所有内容由单一模型根据已有上下文生成。页面展示了一份经翻译和去识别化处理的真实样本，其中一个"**群友**"指出用户为了走半小时路先造了一套分析平台，最后**没出门**。有读者反馈结果意外戳中了自己的使用习惯。

---

### 5. AI 原生增长代理公司 valid.co 按结果计费引发关注

**有公司开始直接按增长结果向 B 端客户收费。** 即刻用户 JeffreyJing 在[观察帖中介绍](https://m.okjike.com/originalPosts/6b0a4c81320fd7e1b5bb0f85) valid.co 提供 Performance Creative、AI 虚拟 KOL 和 Media Buying 三条产品线，按约定的**播放量或用户增量**收费，媒体购买从投放预算分成📄。公司 2023 年成立，团队约 40 人，据帖子描述已服务数十家企业客户。以上数据来自社媒转述，尚无官方披露的一手数据支撑。对在意广告 ROI 的中小品牌，这类"**买结果不买工具**"的模式值得持续观察。

---

### 6. 歸藏的 AI 游戏进入冯骥推荐合集

**AI 做游戏的能力边界，最近又被推了一步。** 开发者歸藏在推文中提到，自己此前用 Fable 5.2 一下午生成的 3D 动作游戏，出现在了《黑神话》制作人冯骥[推荐的 Fable 5.2 游戏合集](https://x.com/op7418/status/2126314043912904967)里🎮。整个游戏包含模型、场景、动作设计和优化，全部打包在一个 **30 MB** 的 HTML 文件中。演示视频和截图已公开，可玩版本托管在 GitHub Pages。这是个人实测，不代表所有场景都能复现同等效果。

![哇！居然在《黑神话》制作人冯骥推荐的这个 Fable 5.2 游戏合集里找到了我自己做的游戏！ ](https://pbs.twimg.com/media/HYIujUiaIAABu8k?format=jpg&name=orig "哇！居然在《黑神话》制作人冯骥推荐的这个 Fable 5.2 游戏合集里找到了我自己做的游戏！ ")

---

### 7. AI 研究自动化节奏，两位研究者公开亮出不同判断

**AI 接管研究的时间表，业内没有共识。** Kokotajlo 与 Erdil 在 Dwarkesh Patel 的[访谈中正面交锋](https://www.bestblogs.dev/en/video/84ba65cfe?utm_source=rss&utm_medium=feed&utm_campaign=resources&entry=rss_article_item)：前者认为自动化研究员落地后迭代可能**快速加速**，争取时间对对齐研究有实质价值📄。后者则怀疑单靠软件在算力固定条件下能维持多久的反馈循环。核心分歧在于，训练改进能否在更大规模复现，可能需要巨量算力才能确认。关注 AI 安全与研究进展节奏的从业者，这段讨论影响当前资源优先级的判断。


![AI 研究自动化节奏，两位研究者公开亮出不同判断 · 原文封面](https://www.bestblogs.dev/en/video/84ba65cfe/opengraph-image?1f5282cc6c19f66f "AI 研究自动化节奏，两位研究者公开亮出不同判断 · 原文封面")

---

### 8. 湾区 AI 从业者与美国中部的感知落差被一条帖子说破

**同在美国，对 AI 的感知几乎活在两个世界。** Telegram 频道 AI探索指南中[一条简短帖子](https://t.me/aigc1024/27530)描述了一个场景：湾区 AI 从业者回家乡，和当地人聊 AI，对方的第一反应是"**你在说什么**"📄。这条帖子是个人观察，没有数据支撑。但它直接点出了对内容创作者、教育者和开发者都有实际影响的现实：AI 渗透程度的**地域差距**，远比多数从业者默认的更大。面向非技术圈受众做 AI 产品或教育的人，值得把这个落差纳入预期。

---

### 9. 美国年轻人对 AI 从业者的反感情绪出现在社媒讨论中

**部分美国年轻人明确表示不愿与 AI 行业从业者交往。** 即刻圈子中[美国年轻人对 AI 从业者的反感情绪出现在社媒讨论中](https://mp.weixin.qq.com/s/OVhEs5IqTcA9VUoa9aoOfA)提到这一民意走向，原始数据来源和调查方法在现有摘要中未列明📄。这条信息目前属于社媒转述，尚无可核实的完整调查报告支撑具体数字。对在公众场合谈论 AI 的从业者而言，这类**情绪信号**值得留意，尤其是面向非技术圈子的场合。

![美国年轻人对 AI 从业者态度的相关报道配图](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vXUelfKjHMiaz9seCzG687mKwfQXKDnicnYEhrgYvUOB0YMA7EWEbrphz2lDPcc9XokH1tPxl165XZTLXgjsElceMbiabSnQYR7MQPzR8hwdQA/0?wx_fmt=jpeg "美国年轻人对 AI 从业者态度的相关报道配图")

---

### 10. 用户开源自打磨 PPT Skill，核心思路是锁风格不锁排版

**上传一张模板截图就能生成风格一致的 PPT。** LINUX DO 用户 forguse 在[社区帖子](https://linux.do/t/topic/3261236)中**发布了开源方案**：只需上传 PPT 模板甚至截图，即可生成保留风格但排版自由的幻灯片🖥️。为防止模型"偷懒"，作者在流程中加入了**大量检查与自评分**步骤，对科研类和艺术海报类 PPT 均有适配。项目已按社区要求完整开源。宣称的效果需要自行测试验证，尚无第三方对比数据。

---

## **⌘ 开源 TOP 项目**

### jingyaogong/minimind：两小时从零训 64M 大模型

**想从头理解大模型训练，这个项目把门槛压到了最低。** [jingyaogong/minimind 提供完整的 64M 参数语言模型训练流程](https://github.com/jingyaogong/minimind)，官方描述声称可在两小时内跑完🧠。今日新增 **660 Stars**，总 Stars 已达 **72,353**。适合正在学习 LLM 预训练原理或需要轻量实验平台的研究者和学生，不适合期待生产级性能的场景。


![jingyaogong/minimind：两小时从零训 64M 大模型 · README 展示图](https://raw.githubusercontent.com/jingyaogong/minimind/master/images/minimind-3.gif "jingyaogong/minimind：两小时从零训 64M 大模型 · README 展示图")

---

### cathrynlavery/diagram-design：给 AI 编程工具准备的 52 种图表

**写代码时让 AI 画图总得到奇怪结果，这个模板库专门解决这个问题。** [cathrynlavery/diagram-design 收录了 52 种专为 Claude Code、Codex、Cursor 等工具设计的图表](https://github.com/cathrynlavery/diagram-design)，全部使用自包含 HTML + SVG 格式，无依赖、无冗余🖼️。今日新增 **725 Stars**，总 Stars 达 **74,608**。适合需要在 AI 辅助开发流程中生成风格统一技术图表的开发者直接取用。


![cathrynlavery/diagram-design：给 AI 编程工具准备的 52 · R](https://raw.githubusercontent.com/cathrynlavery/diagram-design/main/docs/hero/hero-light.webp "cathrynlavery/diagram-design：给 AI 编程工具准备的 52 · R")

---

### mjmirza/app-store-compliance：125 条拒审模式与修复方案

**上架前的合规检查，往往比开发本身更容易踩坑。** [mjmirza/app-store-compliance 整理了 125 个已记录的拒审模式及修复方案](https://github.com/mjmirza/app-store-compliance)，包含隐私清单、数据安全检查，以及 **117 个**跟踪截止日期，涵盖 EU AI 法案、DSA、COPPA 等合规要求📄。今日新增 **530 Stars**，总 Stars 为 **8,108**。同时提供适用于 AI 编程代理的技能接口，适合独立开发者和小团队在提交前做自查。


![mjmirza/app-store-compliance：125 条拒审模式与修复方案 · RE](https://raw.githubusercontent.com/mjmirza/app-store-compliance/main/assets/first-try-approval.png "mjmirza/app-store-compliance：125 条拒审模式与修复方案 · RE")

---
## **◉ 社媒精选**

### 火花工坊创始人聊为什么要做 AI 技能复用社区

**好的 AI 工作流磨出来后散落在聊天记录里，这个问题有人在认真解决。** 即刻用户沉着宇宙在[碎碎念帖中描述火花工坊的初衷](https://m.okjike.com/originalPosts/6b092be2136b2761c62d917f)：把真正跑通的实践封装成可复用的 Agent Skill，涵盖职场周报写作、小说设定控制和短视频生产等具体场景💡。目前平台已搭建技能库、实测提示词等四个模块，均为团队自用后整理。这是创始人的自述，实际使用效果需要自行评估。

![火花工坊 HuohuaHub 技能库界面截图](https://cdnv2.ruguoapp.com/Fo8vSpH0Nev2cF7D1_W33jc4YEJ5v3.png "火花工坊 HuohuaHub 技能库界面截图")

## **😄 AI趣闻**

### 大肥鱼突然给你出账单，但暂时不收钱

聊天框底部悄悄多了个硬币图标，点开全是明细：输入多少 Token、缓存命中没有、输出花了几厘钱，连上下文占了多少空间都画了个进度圈🧩。作者去[实测了一句"你好咩"的完整账单](https://www.36kr.com/p/4087642670725760)，**DeepSeek** 秒回一句粤语，合计 **0.000426 元**。账算得明明白白，收款二维码还没出现。

![大肥鱼突然给你出账单，但暂时不收钱 · 原文配图](https://img.36krcdn.com/hsossms/20261127/v2_2711c78222d24d5da1961860ce3e84db@000000_oswg81767oswg664oswg796_img_000?x-oss-process=image/format,jpg/interlace,1 "大肥鱼突然给你出账单，但暂时不收钱 · 原文配图")

## **❓ 相关问题**

### 用 Codex 画系统流程图，有现成的图表样式可以直接参考吗？

**可以先从现成 SVG 模板入手，改几个节点就能跑起来。** [这个含 52 种图表的开源库](https://github.com/cathrynlavery/diagram-design)专为 Codex 等工具设计，纯 HTML+SVG，无依赖。想让 ChatGPT 辅助调整图表样式，已有账号可续 [爱窝啦·AI账号店的 ChatGPT Plus｜充值续费【月卡】](https://www.aivora.cn/products/chong-zhi-xu-fei-yue-ka-1)。