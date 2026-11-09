---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/11/9
breadcrumbs: false
next: /2026-11/2026-11-09
description: "Claude Code 权限文件在 GitHub 批量泄露凭据，同期英伟达 CEO 间谍疑云触发董事会独立调查。 基准评测被微调题目撕开近50分差距，模型路由成本压缩到四分之一，暗示评估与计费逻辑都在松动。 今天先核实本地 .claude/settings.local.json 是否进了 Git，…"
cascade:
  type: docs
---

## **今日摘要**

```
Claude Code 权限文件在 GitHub 批量泄露凭据，同期英伟达 CEO 间谍疑云触发董事会独立调查。
基准评测被微调题目撕开近50分差距，模型路由成本压缩到四分之一，暗示评估与计费逻辑都在松动。
今天先核实本地 .claude/settings.local.json 是否进了 Git，再看 MaxxBench 研究决定手头 SWE 分数还能不能信。
```

## **🔥 今日焦点 TOP 10**

### 1. Claude Code 权限文件在 GitHub 泄露逾千份凭据

**权限文件可能藏着密码。** Apiiro [Claude Code 权限文件在 GitHub 泄露逾千份凭据](https://apiiro.com/blog/coding-agents-leaking-secrets-github-dont-ask-again)，发现 **1,122 份**含疑似真实凭据。触发路径是：用户永久批准含密命令后，完整命令写入权限文件，随提交推送公开🔒。研究团队未实际连接目标主机，凭据是否仍有效尚未验证。**本地开发者今天**可检查该文件是否被 Git 跟踪，并将其加入 `.gitignore`。

---

### 2. MaxxBench 改题后模型得分差距翻超一倍

**换个文件名要求，分数能差将近一半。** Gavin Lo 与 Justin Lo 发布 [MaxxBench 改题后模型得分差距翻超一倍](https://maxxbench.unlap.ai/research/why-maxxbench/)，参考补丁中位数只增加 **17 行**。Claude Opus 5.5 与 Gemini 3.8 Flash 原本 DeepSWE 得分均约 74%，在 MaxxBench 上分别为 76.4% 和 53.4%。15 组配置的最大差距从 20.9 扩大到 **48.3 个百分点**。评估基准采购方可据此重新审视现有 SWE 分数的参考价值。


![MaxxBench 改题后模型得分差距翻超一倍 · 原文封面](https://maxxbench.unlap.ai/social-card.png "MaxxBench 改题后模型得分差距翻超一倍 · 原文封面")

---

### 3. ChatGPT 中文区出现大规模封号，疑因地区访问收紧

**昨晚起大批中文账号遭封。** V2EX 社区[集中反馈 ChatGPT 中文区出现规模封号](https://www.v2ex.com/t/1255265#reply5)，流传原因指向来自未支持国家的访问。这与 OpenAI 历来对不受**支持地区**的处理方式一致，非官方说法尚未经官方确认。**受影响用户**短期内可检查账号绑定地区，避免通过异常 IP 登录。

---

### 4. GitHub 用 Copilot Fusion 重构智能体时代模型调度

**Copilot Fusion 接管任务驱动的模型路由。** 微软 CoreAI 高管 Jay Parikh 接受 Latent.Space 访谈，介绍 [GitHub 用 Copilot Fusion 重构智能体时代模型调度](https://www.bestblogs.dev/en/status/2119244385867251955?utm_source=rss&utm_medium=feed&utm_campaign=resources&entry=rss_article_item)。核心挑战是把 **Token 消耗**与实际交付成果挂钩，而非按用量计费。这套架构面向的是 **2.25 亿**开发者、年均 343 亿次提交规模。关注代理编程成本的工程师可参考这套定价逻辑的走向。

---

### 5. 小模型先判再路由 Opus，身份解析成本降至四分之一

**难题才交给 Opus，简单任务自己消化。** Hightouch [实测混合 Jev 路由方案做身份合并审查](https://hightouch.com/blog/llm-judges-identity-resolution)：在简单集上准确率 **98.8%**，每千项成本 **0.88 美元**，单用 Opus 5.5 则是 3.86 美元。困难集上混合方案与 Opus 准确率相近，成本优势收窄至约 1.8 倍。关键限制是特定提示词、阈值与合成分布的结果，不能直接推广到所有场景。


![小模型先判再路由 Opus，身份解析成本降至四分之一 · 原文配图](https://hightouch.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fpwmfmi47%2Fproduction%2F9a5d7191d614c824c822ec90672adaf424699d3d-2400x1256.png%3Fw%3D1600&w=640&q=75 "小模型先判再路由 Opus，身份解析成本降至四分之一 · 原文配图")

---

### 6. DeepSeek Harness 日活突破 154 万，第三方生态借势曝光

**154 万日活让插件开发者跟着涨了一波曝光。** 设计师歸藏在推文中提到，**DeepSeek** Harness 团队[主动推荐了她的歸藏设计插件](https://x.com/op7418/status/2119432018450870276)并附上平台日活数据。**154 万日活**是社媒转述数字，未见官方数据页佐证。对工具开发者而言，头部 AI 平台的推荐位曝光效应已相当可观。

![DeepSeek Harness 推荐歸藏设计插件](https://pbs.twimg.com/media/HWm8L45aMAAT5RS?format=jpg&name=orig "DeepSeek Harness 推荐歸藏设计插件")

---

### 7. 英伟达 CEO 黄仁勋承认出轨，董事会启动独立调查

**黄仁勋公开承认出轨，间谍疑云触发调查。** 彭博披露黄仁勋致全员信全文，他承认对妻子不忠，英伟达董事会[宣布成立独立委员会调查其是否成为外国情报行动目标](https://x.com/dotey/status/2119540611179323431)。起因是美国情报部门认定与其关系密切的新加坡高管 **Alice Huang** 疑为中国情报人员。黄仁勋信中未点名对方，也未提及间谍指控；调查结论尚未公布。


![英伟达 CEO 黄仁勋承认出轨，董事会启动独立调查 · 原文配图](https://pbs.twimg.com/media/HWoe8MOWMAEPUQL?format=jpg&name=orig "英伟达 CEO 黄仁勋承认出轨，董事会启动独立调查 · 原文配图")

---

### 8. AI 陪伴与真实关系的核心差距：它不需要你

**AI 陪伴轻松上瘾，恰因为它没有需求。** 即刻用户 Melodyue [在观察帖中指出](https://m.okjike.com/originalPosts/6af076cdb8cb8d00dd08cd93)，AI 与真实关系的核心差别不在不确定性，而在于真实的人也有需求，需要你走出自己的世界去回应。**双向付出**才能积累信任、默契与共同经历，这种"**复利**"AI 无法提供。这个视角对 AI 陪伴产品的设计与用户留存逻辑有参考意义。

---

### 9. AI for Science 商业溢价本质是三种过渡期赤字税

**AI4S 的高溢价有结构性解释，但终局是自我注销。** 即刻用户 WinshareTom [拆解了 AI for Science 商业溢价的来源](https://m.okjike.com/originalPosts/6af0372412205832da293837)：智能赤字催生"**指导费**"、验证赤字催生"解释费"、流程赤字催生**"协调费"**，三种费用都会随技术成熟消散。作者认为 AI4S 纯粹作为软件工具的终局是自我注销，只有融入具体业务资产变现才能跑通商业化。这是个人观点，对评估 AI4S 投资节奏有参考价值。

---

### 10. macOS 本地知识图谱含 181 类实体，家庭关系也建档

**你的 Mac 一直在给你建档，包括家庭关系评分。** Eighth Rank 研究者逆向分析 macOS，[发现本地有 51 个 SQLite 数据库](https://8rank.ai/game/apple-intelligence-personal-knowledge-graph)，主图使用 **181 类实体**与 278 种谓词，记录来源、置信度和时间。两组 XGBoost 分类器用 **144 项特征**推断家庭关系，评分另存于 `entityTagging.db`，含 17 个关系列。数据库明文存储，目录受 TCC 全盘访问保护；研究基于 macOS 26.6.2，相关组件自 macOS 13 起存在🔒。

---

## **⌘ 开源 TOP 项目**

### dsx-ai-factory/nvke：裸金属 GPU 集群的 K8s 管理平面

GPU 裸金属节点加入 Kubernetes 集群时，缺少统一调度层是常见痛点。[dsx-ai-factory/nvke 公开了 NVIDIA GPU 裸金属节点的 Kubernetes 管理平面核心代码](https://github.com/dsx-ai-factory/nvke)，用 Go 编写。今日新增 **345 Stars**，总计 851 Stars。适合有自建 GPU 集群、正在评估裸金属 K8s 方案的 MLOps 工程师试用。

### anthropics/claude-quickstarts：Claude API 可部署应用快速入门

想用 Claude API 搭一个能真正跑起来的应用，[anthropics/claude-quickstarts 提供从 API 接入到可部署应用的 Python 示例集合](https://github.com/anthropics/claude-quickstarts)。今日新增 32 Stars，总计已达 **19,416 Stars**。适合刚接触 Claude API 的开发者和想快速验证集成方案的工程师上手参考。

### google-deepmind/mujoco：DeepMind 维护的通用物理模拟器

训练机器人或强化学习智能体时，物理仿真环境的精度直接影响 Sim-to-Real 迁移效果。[google-deepmind/mujoco 是多关节接触动力学模拟器](https://github.com/google-deepmind/mujoco)，C++ 实现，今日新增 41 Stars，总计 **16,418 Stars**。适合做机器人控制、运动规划和具身智能研究的团队作为仿真底座。


![google-deepmind/mujoco：DeepMind 维护的通用物理模拟器 · REA](https://raw.githubusercontent.com/google-deepmind/mujoco/main/banner.png "google-deepmind/mujoco：DeepMind 维护的通用物理模拟器 · REA")

---
## **◉ 社媒精选**

### 谷歌 DeepMind 预告数周内将发布科学 AI 重要进展

**DeepMind 副总裁暗示相变级突破即将亮相。** DeepMind 研究副总裁 Pushmeet Kohli 发帖称，旗下多个项目正在经历科学发现速度的"**真实相变**"，Gorden Sun 在推文中转述了[这则关于 DeepMind 科学 AI 即将发布的预告](https://x.com/Gorden_Sun/status/2119412090742165895)，并指出"未来几周"的发布将呈现一瞥。这是个人预告，不代表官方产品公告，具体方向和发布节奏未披露。关注 AI for Science 的研究者可标记这个时间窗口。

![谷歌 DeepMind 预告科学 AI 进展](https://pbs.twimg.com/media/HWmp9JTaQAARQAj?format=jpg&name=orig "谷歌 DeepMind 预告科学 AI 进展")

## **😄 AI趣闻**

### 嫌别人改太多

Caleb 长期用 AI 编程助手写代码，数了数发现一年里发了 **244 个版本**，超过 **四分之三**在改系统提示和工具描述。他搬到 Pi，大约 **20 分钟**就写好一个跨标签页传选区的扩展，[记录了这次从 Claude Code 迁到 Pi 的过程](https://caleb.software/posts/claude-to-pi.html)。嫌别人改太多，自己上手更勤快。

## **❓ 相关问题**

### Gemini 跑编程任务时，怎么验证它真的理解了需求而不是套路作答？

**先改一处细节再让它重新解题。** [MaxxBench 的需求扰动测试](https://maxxbench.unlap.ai/research/why-maxxbench/)发现 Gemini Flash 得分大幅下滑，说明小改动就能暴露模型是否在背答案。想自己试，可以用[爱窝啦·AI账号店的 Gemini Pro 成品号3-12个月 随机发](https://www.aivora.cn/products/nian-ka-zhi-bao-yi-yue)开始测，这是独立成品号，不是旧号续费。