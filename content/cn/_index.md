---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/11/17
breadcrumbs: false
next: /2026-11/2026-11-17
description: "腾讯 Hy4-Flash 以 224B 总参数开源，单任务成本约 ¥0.26，接近 Claude Haiku 满意度但价格更低。 从多个栏目看，今天的更新集中在压低推理成本和把 Agent 塞进真实工作流两件事上。 开发者今天值得先试 WorkBuddy 免费版跑自己的典型任务，再看 NVIDIA…"
cascade:
  type: docs
---

## **今日摘要**

```
腾讯 Hy4-Flash 以 224B 总参数开源，单任务成本约 ¥0.26，接近 Claude Haiku 满意度但价格更低。
从多个栏目看，今天的更新集中在压低推理成本和把 Agent 塞进真实工作流两件事上。
开发者今天值得先试 WorkBuddy 免费版跑自己的典型任务，再看 NVIDIA/SkillEvaluator 能否接进现有 Agent 技能层。
```

## **🔥 今日焦点 TOP 10**

### 1. 腾讯 Hy4-Flash 开源，成本约为竞品 1/18

**开源多模态模型发布。** 腾讯[发布 Hy4-Flash 的结构与评测数据](https://www.bestblogs.dev/en/status/2122389243628794016?utm_source=rss&utm_medium=feed&utm_campaign=resources&entry=rss_article_item)：总参数 224B，每 token 仅激活 **12B**，支持 100 万 token 上下文。85 位用户完成 259 个日常任务的盲测显示，满意度 2.79/4，接近 Claude Haiku 的 2.81，单任务成本约 ¥0.26。KV 缓存较 Hy3 缩小至 **1/24**，正跑批量任务的开发者可以先在 WorkBuddy 免费版试用。

![Hy4-Flash 价格与评测对比](https://pbs.twimg.com/media/HXOo8M6acAAqGFQ.jpg "Hy4-Flash 价格与评测对比")

---

### 2. Qwen4-Max 推出，任务成本降至 1.67 美元

**阿里旗舰模型完成更新。** [Qwen 官方博客](https://qwen.ai/blog?id=qwen4-max)给出结构：主干 2.4 万亿参数，每 token 激活 **710 亿**，支持百万 token 上下文。内部 Work360 基准显示，平均任务成本从 4.43 美元降至 **1.67 美元**，降幅约 62%。Live Delivery 功能让长任务提前交出可用草稿；Live Delivery 插件已开放源码，但 Max 权重本身尚未公开。


![Qwen4-Max 推出，任务成本降至 1.67 美元 · 原文封面](https://img.alicdn.com/imgextra/i4/O1CN01OXv3EM1FN8t9W4P79_!!6000000000474-2-tps-80-80.png "Qwen4-Max 推出，任务成本降至 1.67 美元 · 原文封面")

---

### 3. 豆包"找店"上线，从搜店到下单一次完成

**豆包将地图图层融入 AI 对话。** 据 AIBase [报道豆包"找店"功能详情](https://www.aibase.com/zh/news/32342)，商家可批量标注地图，用户能在同一对话内按预算和人数筛店、比价、团购下单和一键导航。这是 AI 助手向线下**本地生活延伸**的具体落地，压缩了从信息到到店消费的中间步骤。想替代大众点评做餐饮决策的用户，今天可以打开豆包试这个入口。

![豆包 App 上线“找店”:商家批量标注地图，团购下单与一键导航在对话内闭环](https://pic.chinaz.com/picmap/202308181515111389_0.jpg "豆包 App 上线“找店”:商家批量标注地图，团购下单与一键导航在对话内闭环")

---

### 4. August 完成 1200 万美元融资，代替患者打医院电话

**AI 医疗助手获 Sequoia 和 Accel 投资。** Gorden Sun 的推文[介绍 August 的核心功能与融资背景](https://x.com/Gorden_Sun/status/2122375605186687369)：已服务 **950 万以上**用户，可自动拨打医院预约最早网内号源、比较药价并安排送药、审计医疗账单并申诉保险拒付，并提供完整通话转录。融资金额 **1200 万美元**，目前开放候补名单，服务范围限于美国医疗体系。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2122370428652212224/vid/avc1/3840x2160/6vgUwQDIJyA2j60R.mp4?tag=29"></video>

---

### 5. 黄仁勋离任后英伟达接班难题曝光

**Steve Blank 分析领导力交接的结构性挑战。** 文章[梳理英伟达三次转型的接班难点](https://steveblank.com/2026/11/15/whats-next-for-nvidia/)：CUDA、深度学习、整机数据中心系统三次变革均涉及客户和商业模式重构，而当前约 **60 名**直接下属的决策架构难以由继任者原样复制。作者认为大客户自研芯片趋势和 CUDA 现有优势，可能同时掩盖长期创新风险。这是作者的解释框架，不是经完整样本验证的结论。


![黄仁勋离任后英伟达接班难题曝光 · 原文封面](https://steveblank.com/wp-content/uploads/2026/11/nvidia-reinventions-1024x677.jpg "黄仁勋离任后英伟达接班难题曝光 · 原文封面")

---

### 6. Altman 谈英伟达：担保仍值钱，英雄也有缺点

**Sam Altman 在 Yahoo Finance 访谈中回应黄仁勋离任。** 宝玉在 X 上[整理了这段访谈的关键内容](https://x.com/dotey/status/2122428858380980580)：**Altman** 表示对黄仁勋的处境有强烈个人共鸣，"很难想象没有黄仁勋的 AI 革命"。主持人提及英伟达为 OpenAI 俄亥俄数据中心提供了最高 **1050 亿美元**担保，Altman 表示市场仍然信任这份担保，但措辞留有余地。这段话是 Altman 个人表态，不代表 OpenAI 官方政策。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2122418191540310016/vid/avc1/1920x1080/93nU8gy4fWESUpAl.mp4?tag=29"></video>

---

### 7. 开发者反映 Codex 体验下滑，Astra 两月未更新

**多名开发者指出 Codex 近期可用性明显变差。** 橘 AI 在即刻[汇总了用户对 Codex 的集中反馈](https://m.okjike.com/originalPosts/6af9d2fe3ce945612e1b55fe)：体验"**难用到了一个新的境界**"，同时 Astra 已约 **2 个月**未推送更新。帖子还转述了"蒸馏 OpenAI 模型可能导致自家模型能力下降"的说法，这属于社区观察，尚无 OpenAI 官方说明。正在用 Codex 做主力编程工具的开发者可以关注后续排行榜数据再做判断。

---

### 8. MIT 数字制造课程纳入 AI Agents 与 Edge AI 模块

**MIT CBA 2026 年课程加入 AI 相关专题。** [课程公开入口](https://pub.cba.mit.edu/863.26/site/)显示，MAS.863 覆盖从 CAD、嵌入式编程到 AI agents、**Edge AI** 和 EDA 的完整路线，十二月进行系统集成与项目展示。AI 相关模块是课程补充专题之一，主体仍是实体数字制造技术，不是生成式 AI 专课。想系统了解"**软件 + 硬件 + AI**"交叉实践的人，可以查阅课程公开入口和往年项目记录。

---

### 9. Hy4-Flash 比 DeepSeek 还便宜，但质量待 Arena 验证

**开发者对 Hy4-Flash 价格持惊讶态度。** 向阳乔木在 X [发帖分享对 Hy4-Flash 价格的第一反应](https://x.com/vista8/status/2122226904975712667)，称其比 **DeepSeek** 更便宜，WorkBuddy 目前可**免费**使用。他指出现有数据仅来自用户盲测，真实质量尚未经 Arena 类排行榜验证，计划等榜单更新后再下结论。这是个人初步判断，不是完整评测。

![Hy4-Flash 价格与 DeepSeek 对比截图](https://pbs.twimg.com/media/HXOpiAfb0AAQEAU.jpg "Hy4-Flash 价格与 DeepSeek 对比截图")

---

### 10. Codex 权限三档：Full Access 流畅但让开发者"心里发慌"

**开发者对 Codex 工具调用权限的真实反馈。** V2EX 一位用户[整理了 Codex 三档权限的日常体验](https://www.v2ex.com/t/1257520#reply9)：Ask for approval 弹窗过于频繁，Approve for me 在工具调用时仍会中断，**Full** Access 运行流畅但操作边界**难以预测**。这是自动化程度和可控性之间真实的权衡，没有最优解。正在上手 Codex 的开发者可以先从 Approve for me 起步，摸清模型行为边界再决定是否上调权限。

---

## **⌘ 开源 TOP 项目**

### mvanhorn/last30days-skill：跨平台多源话题研究技能

这是一个 AI 代理技能，可同时检索 Reddit、X、YouTube、HN、Polymarket 及开放网络，生成有据可依的综合摘要。[mvanhorn/last30days-skill 核心代码已公开](https://github.com/mvanhorn/last30days-skill)，今日新增 **135 Stars**，累计总星 68122。适合需要定期追踪特定话题、希望把多源信息聚合进 Agent 工作流的开发者。


![mvanhorn/last30days-skill：跨平台多源话题研究技能 · README 展](https://raw.githubusercontent.com/mvanhorn/last30days-skill/main/media/pr-assets/last30days-ad.gif "mvanhorn/last30days-skill：跨平台多源话题研究技能 · README 展")

---

### NVIDIA/SkillEvaluator：AI 代理技能质量评估框架

NVIDIA 开源的多层级评估框架，核心功能包括质量门禁、语义重叠检测、合成评估数据集生成和实时代理行为影响测量🔒。[NVIDIA/SkillEvaluator 仓库](https://github.com/NVIDIA/SkillEvaluator)今日新增 **873 Stars**，累计 2691 Stars，是当日日榜涨星最快的项目之一。正在为 Agent 系统构建 skill/plugin 层的团队，可用它在上线前做自动化质量检查。

---

### google-research/paper-orchestra：多代理自动化论文写作框架

Google Research 开源的多代理框架，专门用于自动化 AI 研究论文的写作流程。[google-research/paper-orchestra 已公开核心代码](https://github.com/google-research/paper-orchestra)，今日新增 **313 Stars**，累计 1515 Stars。适合需要快速生成研究草稿、或希望在研究流程中引入多 Agent 协作的学术团队和研究型开发者。


![google-research/paper-orchestra：多代理自动化论文写作框架 · R](https://raw.githubusercontent.com/google-research/paper-orchestra/main/assets/overview.png "google-research/paper-orchestra：多代理自动化论文写作框架 · R")

---
## **◉ 社媒精选**

### 评论尸：Notion 数据层让它成为跨 Agent 记忆首选

评论尸在即刻[分享了自己用 Notion 构建跨 Agent 记忆层的实践](https://m.okjike.com/originalPosts/6afa912a38389f599382db62)：在 Notion 里建立有增删改查规则的数据库，接入多个 Agent，让不同工具共用同一份上下文。他认为 Notion 胜过 Google Drive 和 Obsidian 的关键是数据层完备性，所有替代品目前都只是 Notion 的子集。对正在搭建多 Agent 工作流的人，这个思路可以直接借鉴，不需要等官方功能。

![Notion 跨 Agent 记忆层架构示意](https://cdnv2.ruguoapp.com/FidKha_6c0Lx24_t_ZHoNz58epelv3.jpg "Notion 跨 Agent 记忆层架构示意")

---

## **😄 AI趣闻**

### 脚本和测试都写好了，AI 验收说：没交

用 **SoduWork** 跑了一个 CSV 校验任务，脚本写完、测试跑过，文件已经老老实实躺在工作目录里。系统发起**自动验收**，翻出固定版本的交付清单一比对——[清单上只列了 CSV 文件，脚本和测试根本不在列](https://juejin.cn/post/7708478489645285402)——判定：**未交付**，打回返修。文件就在本机，验收却说没见着，大概是清单写好那一刻，世界就已经定格了。

![脚本和测试都写好了，AI 验收说：没交 · 原文配图](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/1b8c9cfaeab94abdbe27ff08c8d47d2f~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5LiA5Y-q54mb5Y2a:q75.awebp?rk3s=f64ab15b&x-expires=1795404897&x-signature=eu4bHDPfo02yw%2BAe3BogIo5Pxf8%3D "脚本和测试都写好了，AI 验收说：没交 · 原文配图")

## **❓ 相关问题**

### 用 Codex 做编程任务，Full Access 权限到底能不能开？

**Codex 的 Full Access 模式让模型不经确认直接执行工具调用，日常任务流畅，但操作边界难以预测。** V2EX 的[用户讨论显示 Approve for me 是更稳妥的起点](https://www.v2ex.com/t/1257520#reply9)，只有在低风险可回滚环境里跑熟了再考虑放开。 如果你已有账号可以正常使用、只是会员快到期，可以对照 [爱窝啦·AI账号店的 ChatGPT Pro 100刀档 充值续费（月卡）](https://www.aivora.cn/products/xu-fei-chong-zhi-yue-ka-dao) 的交付说明，看看是否适合自己的用法。