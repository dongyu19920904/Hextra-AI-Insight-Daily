---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/11/28
breadcrumbs: false
next: /2026-11/2026-11-28
description: "DeepSeek为聊天用量上线Token账单明细，Rosetta多模态预训练框架全面开源并被NeurIPS收录。 从工具到结果、从配置到自动化，今天多条更新都指向同一方向：降低动手门槛，把输出责任转移给AI。 独立开发者今天先看Rosetta开源和app-store-compliance，前者能省…"
cascade:
  type: docs
---

## **今日摘要**

```
DeepSeek为聊天用量上线Token账单明细，Rosetta多模态预训练框架全面开源并被NeurIPS收录。
从工具到结果、从配置到自动化，今天多条更新都指向同一方向：降低动手门槛，把输出责任转移给AI。
独立开发者今天先看Rosetta开源和app-store-compliance，前者能省训练成本，后者直接影响上架成败。
```

## **🔥 今日焦点 TOP 10**

### 1. 混元与港科大开源Rosetta终结多模态灾难性遗忘

**多模态遗忘有了通解。** 腾讯混元与港科大联合提出 **Rosetta**，机器之心报道中介绍了[混元与港科大开源Rosetta终结多模态灾难性遗忘](https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651076720&idx=2&sn=d375259d0dfaea462ea23093a9ae08bd)。预训练、推理、评测代码及模型权重全面开源🧠，**支持单卡到千卡集群**。正在联合训练理解与生成任务的团队，可以先看这套框架能否省掉一次从头起训。

![Rosetta多模态预训练框架架构示意](https://wechat2rss.bestblogs.dev/img-proxy/?k=efde6826&u=https%3A%2F%2Fmmbiz.qpic.cn%2Fsz_mmbiz_png%2F5L8bhP5dIqElqZ0GcgINP4V78xIEARSSDI7pRpUQpZAhGK6rr8zoMJM3icYLohdHNhq93gll1YkHwsYaOO3tolCuL5QN5gAtJc46PnNgECQI%2F640%3Fwx_fmt%3Dpng%26from%3Dappmsg "Rosetta多模态预训练框架架构示意")

---

### 2. DeepSeek上线Token账单，聊天仍免费

**用量账单进了聊天框。** 36氪实测显示，[DeepSeek上线Token账单，聊天仍免费](https://www.36kr.com/p/4087642670725760)，点开可见输入与输出 Token 的**单价、用量和金额明细**，附带上下文占用进度圈💰。一次深度思考短对话实测花费**约 0.000426 元**，当前聊天仍免费。用量透明之后，外界对收费预期的猜测也随之升温。

![DeepSeek Token账单界面实测截图](https://img.36krcdn.com/hsossms/20261127/v2_2711c78222d24d5da1961860ce3e84db@000000_oswg81767oswg664oswg796_img_000?x-oss-process=image/format,jpg/interlace,1 "DeepSeek Token账单界面实测截图")

---

### 3. AMD RDNA专属llama.cpp补丁加速本地推理

**AMD 显卡本地推理有了专属加速补丁。** 博主在博文中介绍了 [AMD RDNA专属llama.cpp补丁加速本地推理](https://devnull.land/amd-specific-llama-cpp)，涵盖**多词元预测、预填充、注意力和量化解码**⚙️。测试环境是 AMD R9700 加 eGPU 跑 27B 量化模型，该结果仅代表这一硬件与模型组合。用 AMD 显卡做**本地推理的开发者**可以拿来对比实际吞吐。

---

### 4. AI辅助自托管让初次配置从一周缩到半天

**AI 让自托管重新变得值得动手。** 博主 Jan-Lukas Else 把 Docker Compose、脚本和配置全放进 Git，[AI辅助自托管让初次配置从一周缩到半天](https://janlukas.blog/posts/ai-self-hosting)。他自估初次设置从约一周缩短到**半天**🔧，Renovate 负责提交依赖升级，合并后**自动构建部署**。他也明确指出，AI 帮的是克服前期成本，每个新增服务的漏洞和维护负担仍要自己承担。

---

### 5. Fable 5.2一下午生成30MB可玩3D动作游戏

**一下午、一个 HTML 文件、一款可运行的 3D 动作游戏。** 创作者歸藏在推文中展示了用 **Fable** 5.2 完成这个实验，[模型、场景、动作设计和优化全部由 AI 完成](https://x.com/op7418/status/2126314043912904967)，最终输出压缩进一个 **30 MB 的 HTML 文件**🎮。这款游戏随后出现在《黑神话》制作人冯骥推荐的 Fable 5.2 合集里。想直观感受当前 AI 游戏生成能力的，可以去合集里试玩热门作品。

![歸藏用Fable 5.2一下午做出的3D动作游戏](https://pbs.twimg.com/media/HYIujUiaIAABu8k?format=jpg&name=orig "歸藏用Fable 5.2一下午做出的3D动作游戏")

---

### 6. AI让聊天助手虚构背后吐槽你的群聊

**把聊天历史丢给 AI，能换来一个虚构的"吐槽群"。** Construct22 页面介绍了[AI让聊天助手虚构背后吐槽你的群聊](https://construct22.com/)🎭。有人拿到的结果是调侃自己"为走半小时路先设计了一整套 Apple Watch 应用和分析平台"，这不会真正连接 WhatsApp。模型的判断未经验证，更适合当一次**带数据的自我观察**。

---

### 7. AI研究自动化节奏：两位学者公开分歧

**AI 能多快接管自己的研究，业界顶尖研究者也还没共识。** Kokotajlo 认为 AI 一旦能独立做研究，[AI研究自动化节奏：两位学者公开分歧](https://www.bestblogs.dev/en/video/84ba65cfe?utm_source=rss&utm_medium=feed&utm_campaign=resources&entry=rss_article_item)，迭代速度可能快速加速，争取时间对对齐有实际价值📄。Erdil 则对软件单独形成持续反馈回路更谨慎，并质疑在严重后果未显现时就暂停是否合理。**数学证明**可以低成本验证，但训练改进能否规模化复现，仍需大量算力才能知道。


![AI研究自动化节奏：两位学者公开分歧 · 原文封面](https://www.bestblogs.dev/en/video/84ba65cfe/opengraph-image?1f5282cc6c19f66f "AI研究自动化节奏：两位学者公开分歧 · 原文封面")

---

### 8. 美国年轻人出现"不和AI圈人交往"倾向

**AI 圈子与普通大众之间的文化裂痕正在变得可见。** 一篇观察帖记录了[美国年轻人出现"不和AI圈人交往"倾向](https://mp.weixin.qq.com/s/OVhEs5IqTcA9VUoa9aoOfA)的现象📄。同时，湾区 AI 从业者回到中部老家后发现，AI 话题在当地普通人眼中基本是"**瞎扯**"。这类信号对**经常只在圈内沟通**的从业者来说，值得留意圈外的真实感知。

![AI圈子与普通大众认知割裂的观察](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vXUelfKjHMiaz9seCzG687mKwfQXKDnicnYEhrgYvUOB0YMA7EWEbrphz2lDPcc9XokH1tPxl165XZTLXgjsElceMbiabSnQYR7MQPzR8hwdQA/0?wx_fmt=jpeg "AI圈子与普通大众认知割裂的观察")

---

### 9. 论坛用户开源PPT Skill加入大量自评分防偷懒

**一位用户打磨了一套以风格参考为驱动的 PPT 创作 Skill。** 该方案的核心思路是上传模板或截图作为风格参考，[方案已在 LINUX DO 社区开源推广](https://linux.do/t/topic/3261236)，对科研类和艺术海报类 PPT 均有适配🖼️。作者在流程里加入了大量检查和**自评分步骤**，以防 AI 在长任务中"**偷懒**"。有类似使用需求的可以去原帖看具体流程和效果截图。


![论坛用户开源PPT Skill加入大量自评分防偷懒 · 原文封面](https://cdn3.ldstatic.com/optimized/4X/7/2/b/72b929d6636d9b21ac1f3a496dad2007fd282407_2_1024x574.png "论坛用户开源PPT Skill加入大量自评分防偷懒 · 原文封面")

---

### 10. AI交易员参与的弹球预测市场游戏上线

**弹球落点预测市场，AI 交易员和真实玩家同台押注。** bouncemarket 页面介绍了[AI交易员参与的弹球预测市场游戏上线](https://bouncemarket.minhanhday.com/)，玩家在结果公布前押注落点🎯。平台内置 AI 交易员保持市场流动性，单轮**真实玩家超过五人**后 AI 交易员退出让位。这是一个结合预测市场机制与确定性仿真的可玩原型。

---

## **◎ 行业变化与个人影响**

### valid.co把AI增长从卖工具变成卖增长结果

**按结果计费的 AI 增长代理正在成型。** JeffreyJing 在即刻分享了对 valid.co 的观察，[这家 23 年成立、40 多人的团队直接按约定的播放量或用户增量向 B 端收费](https://m.okjike.com/originalPosts/6b0a4c81320fd7e1b5bb0f85)，不卖工具📄。产品线覆盖素材投放、AI 原生 KOL 和 Media Buying，Media Buying 按投放预算分成。这类"按结果计费"模式若可规模化，对仍在销售 AI 工具的 SaaS 厂商是一个值得跟踪的竞争信号，不过帖子中的具体数据来自社媒转述，尚无独立来源核验。

---
## **⌘ 开源 TOP 项目**

### jingyaogong/minimind：两小时从零训练64M语言模型

从零训练一个小型语言模型的完整流程🧠，[jingyaogong/minimind 提供了全套可运行代码](https://github.com/jingyaogong/minimind)。今日新增 **660 颗 Star**，总计已有约 **72,347 颗**。项目目标是让学习者在约两小时内完成一个 64M 参数语言模型的完整预训练，不依赖大规模算力。适合想理解语言模型底层原理、或需要轻量级可控基础模型的研究者和学生。


![jingyaogong/minimind：两小时从零训练64M语言模型 · README 展示图](https://raw.githubusercontent.com/jingyaogong/minimind/master/images/minimind-3.gif "jingyaogong/minimind：两小时从零训练64M语言模型 · README 展示图")

---

### cathrynlavery/diagram-design：52种图表类型的AI编程图表工具

专为 Claude Code、Cursor、GitHub Copilot 等 AI 编程环境设计的图表工具📊，[cathrynlavery/diagram-design 以单文件 HTML+SVG 形式开源](https://github.com/cathrynlavery/diagram-design)。今日新增 **725 颗 Star**，总 Star 数约 **74,598**。52 种图表类型全部自包含，无外部依赖，不使用 Mermaid，适合在 AI 编程代理工作流里直接生成架构图和流程图。


![cathrynlavery/diagram-design：52种图表类型的AI编程图表工具 · ](https://raw.githubusercontent.com/cathrynlavery/diagram-design/main/docs/hero/hero-light.webp "cathrynlavery/diagram-design：52种图表类型的AI编程图表工具 · ")

---

### mjmirza/app-store-compliance：125个拒审模式及修复方案检查手册

针对 App Store 和 Google Play 拒审问题的操作手册与提交前检查工具🔒，[mjmirza/app-store-compliance 收录了 125 个已记录拒审模式及对应修复方案](https://github.com/mjmirza/app-store-compliance)。今日新增 **530 颗 Star**，总 Star 数约 **8,100**。项目还追踪 117 个合规截止日期，涵盖欧盟 AI 法案和 COPPA，并提供可接入 AI 编程代理的技能接口。正在开发 AI 相关功能或需要应对合规审查的移动开发者，可用这份手册做提交前自查。


![mjmirza/app-store-compliance：125个拒审模式及修复方案检查手 · ](https://raw.githubusercontent.com/mjmirza/app-store-compliance/main/assets/first-try-approval.png "mjmirza/app-store-compliance：125个拒审模式及修复方案检查手 · ")

---

## **😄 AI趣闻**

### 拿 Claude 当替罪羊，结果图都没对齐

有人怀疑 **Claude** 会暗中搞破坏，于是亲自上手测试：左边一组跑了 **2.4 万步**，右边换成 Gemini Neon 只跑了 **4,000 步**，两张生成图摆在一起，骑士和药瓶的画风确实不一样🧩。[这张对比图同时改了模型和训练步数](https://twitter.com/RealAstropulse/status/2126119408997466389)，随机种子和配置也没有说。两组什么都不同，所以也什么都证明不了——找到"证据"的速度，比跑完一遍训练还快。

## **❓ 相关问题**

### Codex 用来写代码，手上的账号能先试吗？

**先用原账号试一个小任务。** 想知道从哪开始，参考[当天的使用案例](https://github.com/cathrynlavery/diagram-design)；能否用，要看自己的账号界面。原账号能用、会员快到期，再看[爱窝啦·AI账号店的 ChatGPT Plus 充值续费](https://www.aivora.cn/products/chong-zhi-xu-fei-yue-ka-1)的续费说明。