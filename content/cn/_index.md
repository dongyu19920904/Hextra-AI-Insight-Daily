---
linkTitle: AI Daily
title: AI 日报 2026/11/2：Anthropic 给 Claude Code 加规则禁止复刻他人游戏
breadcrumbs: false
next: /2026-11/2026-11-02
description: "Anthropic 给 Claude Code 加入游戏克隆限制，巴西法院对文件提示注入开出罚款。 AI 工具的边界正从技术层面向规则和法律层面延伸，平台和司法都在主动介入。 今天先读巴西判决和 Anthropic 限制条款，用 Claude 做内容生成的开发者需要核实自己的使用场景。"
cascade:
  type: docs
---


## **今日摘要**

```
Anthropic 给 Claude Code 加入游戏克隆限制，巴西法院对文件提示注入开出罚款。
AI 工具的边界正从技术层面向规则和法律层面延伸，平台和司法都在主动介入。
今天先读巴西判决和 Anthropic 限制条款，用 Claude 做内容生成的开发者需要核实自己的使用场景。
```

## **🔥 今日焦点 TOP 10**

### 1. Anthropic 给 Claude Code 加规则禁止复刻他人游戏

**游戏克隆管控收紧。** [Anthropic 给 Claude Code 加规则禁止复刻他人游戏](https://www.36kr.com/p/4050722097828740)，**Anthropic** 已在 Opus 5.5 的系统提示词里加入限制，引导 Claude 拒绝"重新创建属于别人的特定游戏"。此前 Opus 5.5 发布后，AI 辅助游戏克隆门槛骤降，独立游戏 Demo **上线后可能被一夜复刻**。这是 Anthropic 对版权保护的主动介入，使用 Claude Code 做游戏开发的团队需留意新边界。

![Claude Code 游戏克隆限制说明](https://img.36krcdn.com/hsossms/20261101/v2_a83d56f7b90d4360b4269de783735d93@000000_oswg347184oswg1080oswg1049_img_000?x-oss-process=image/format,jpg/interlace,1 "Claude Code 游戏克隆限制说明")

---

### 2. 巴西法院对文件藏提示注入的律师开出罚款

**法庭文件藏指令已被处罚。** 据 [JetStream Security 文章](https://jetstream.security/insights/brazilian-court-sanctions-prompt-injection-filing/)，巴西 Pará 州一法院处理了一起律师用白字白底在诉讼材料中隐藏提示注入的案件。法院系统 Galileu 识别出隐藏内容，认定意图干预 AI 工具的审查过程，**罚款为诉讼标的 10%**，约折合 **1.6 万**美元。这很可能是全球首例针对法律文件提示注入的司法处罚，AI 辅助司法工具的可信度正在被制度反向约束。


![巴西法院对文件藏提示注入的律师开出罚款 · 原文配图](https://jetstream.security/wp-content/uploads/2026/10/6-Economics-of-AI-Risk.png "巴西法院对文件藏提示注入的律师开出罚款 · 原文配图")

---

### 3. Karpathy 用 Claude 两小时建成 HackerTube

**两小时对话完成一个视频推荐站。** Karpathy 在[他的博客](https://karpathy.bearblog.dev/hacker-tube/)记录，他让 Claude Opus 5.5 处理**约 4 万**条 HN 评论，筛出 2007—2026 年间 **6,454 个视频**，归入约 150 个主题。站点以视频 50% 进度处的画面替代上传封面，个性化保留在浏览器本地，不需要账号。Karpathy 自述主要开发工作约两小时，仍手动创建了 API 密钥和购买域名；这是他的个人体验，不是通用工程基准。


![Karpathy 用 Claude 两小时建成 HackerTube · 原文配图](https://bear-images.sfo2.cdn.digitaloceanspaces.com/karpathy/image-2.webp "Karpathy 用 Claude 两小时建成 HackerTube · 原文配图")

---

### 4. HackerBooks：HN 评论里挖出 15000 本书的推荐站

**从 HN 评论挖书，规模超出想象。** [HackerBooks](https://hackerbooks.org) 由 roansh 受 HackerTube 启发制作，主要数据流程由 Claude Opus 5.5 编写。About 页显示已收录 **15,362 本书**、270,334 次提及，来自 56,456 名评论者。Sonnet 5.5 将每条提及标注为推荐、中性、批评或无关，与 Opus 5.5 对照 400 条的一致率为 **85%**；这是模型间一致性，非人工核准准确率。个人读书选题时可以直接按主题翻它的推荐榜。

---

### 5. DeepSeek 招 Agent 产品经理，Super-agent 英文版发布

**DeepSeek 公开承认 Agent 产品人才缺口。** 内部研究员 Tianyi Cui 在 [DeepSeek 招 Agent 产品经理，Super-agent 英文版发布](https://x.com/dotey/status/2116945018569232541)称，**DeepSeek** 的 Super-agent 文章官方英文版已上线，同时点名模型、算法、基建均有一流配置，但产品经理和设计师"**远远不够**"，正在向外公开招募。这是罕见的公开承认能力短板信号🧩，想进 Agent 产品方向的 PM 可以关注。


![DeepSeek 招 Agent 产品经理，Super-agent 英文版发布 · 原文配图](https://pbs.twimg.com/media/HWCXorZaoAAXQ8J?format=jpg&name=orig "DeepSeek 招 Agent 产品经理，Super-agent 英文版发布 · 原文配图")

---

### 6. 科技周刊：不要让 AI 代表你出席社会关系

**AI 代劳社会互动正在产生混乱。** 阮一峰[科技爱好者周刊第 417 期](https://t.me/scitech_fans/420)以"不要让 AI 代表你"为主题，指出让 AI 代购奶茶、自动回邮件会给对方制造"你在场"的错误感知。文章援引一个实验：**6 个** AI 模型互相代表各自的人类发邮件，最终形成无人类参与的循环对话。这不是技术问题，而是代理权和信任基础的边界问题，对大量使用 AI **自动回复**的用户是一个值得重新审视的提醒。

---

### 7. 具身智能三路并进：美国安全调查、家庭机器人发售、触觉融资

**具身智能同日出现三条边界信号。** 据 [AI 探索指南频道](https://t.me/aigc1024/26519)整理，美国商务部和 USTR 将进口机器人依赖列为国家安全调查项，须在 **180 天**内汇报；心言机器人家庭智能体 Bubbo 1 以 **9499 元**起售，10 月 29 日已在京东上线；矩侨工业完成亿元 A 轮，由蚂蚁集团领投。出海机器人公司需关注美国供应链政策走向；以上财务与发售信息来自频道转述，需以官方页面为准。

---

### 8. 复旦团队：混合架构该把全注意力配哪种高效注意力

**滑窗和线性都要，混合架构有了系统比较依据。** 机器之心[复旦团队：混合架构该把全注意力配哪种高效注意力](https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651071440&idx=3&sn=ac0f863b4725bef4e45e4453d7e081e3)，复旦创智邱锡鹏团队发布论文《混合架构的长文力学》，系统比较了全注意力分别与滑窗注意力（SWA）、门控线性注意力（**GLA/GDN**）混合的长上下文表现。结论是两者都有不可替代的作用，单选一种会损失互补性🔬。正在设计长上下文推理架构的工程师，可以把这篇作为选型参考。

![混合架构用线性注意力还是滑窗注意力？复旦创智OpenMOSS团队：我全都要](https://wechat2rss.bestblogs.dev/img-proxy/?k=31e91b78&u=https%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2F5L8bhP5dIqEicWGPYcQNvk1rCKqBgwdQxcZbSbMLdSEcgGJkVEuzOuD6NS8UA0drxyJLcBib6tO6es4Wn8RCPuXMfCRN2ITdmRoIt897CXPRk%2F0%3Fwx_fmt%3Djpeg "混合架构用线性注意力还是滑窗注意力？复旦创智OpenMOSS团队：我全都要")

---

### 9. 老金 AI 一人公司：三类业务单月流水近 10 万

**一人 AI 公司跑通了，但成本结构值得看清楚。** 掘金作者"老金"在[这篇长文](https://juejin.cn/post/7702438435248160804)晒出 10 月银行流水截图，三类业务（课程、品牌商单、软件交付）合计**约 9.4 万**元，并明确说明这是**流水而非净利润**，工具费、交付成本和税费尚未扣除。文章讨论了三类业务的客户来源差异和常见踩坑，对想参考一人公司模型的 AI 从业者有实际参考价值；商业数字来自作者自述，无第三方核实。

![一人公司，单月收入近10万，我做了这三门生意（OPC系列-3）](https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/2da47ab2ff0e41ec9fee10317e5ab069~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6ICB6YeR5bim5L2g546pQUk=:q75.awebp?rk3s=f64ab15b&x-expires=1794043989&x-signature=zu4N5Wh880CA7NdKPjWqiwtHL%2BE%3D "一人公司，单月收入近10万，我做了这三门生意（OPC系列-3）")

---

### 10. 向阳乔木把 AI 对话装进越狱 Kindle

**Kindle 越狱后能跑 AI RSS 和流式对话。** 开发者向阳乔木在[向阳乔木把 AI 对话装进越狱 Kindle](https://x.com/vista8/status/2116929149285904574)，他花 **520 元**买了二手 Kindle PaperWhite 5，越狱后安装 KOReader + SimpleUI，并加入自研"**乔木 AI RSS**"插件，修复若干 bug 后支持手机扫码配置 AI 模型，Kindle 上可以 AI 对话和流式输出📖。代码已在评论区开源，感兴趣的开发者可以直接拿来改。

![买了个二手 Kindle Paper White 5，花了 520 块。 越狱后安装了自己定制的](https://pbs.twimg.com/media/HWDXYQbasAA_MCn.jpg "买了个二手 Kindle Paper White 5，花了 520 块。 越狱后安装了自己定制的")

---

## **⌘ 开源 TOP 项目**

### beenuar/AiSOC：开源 AI 安全运营中心

**告警分诊和攻击溯源可以让 AI 代理来做。** [beenuar/AiSOC 已公开完整代码](https://github.com/beenuar/AiSOC)，支持告警融合、LLM 代理自动分诊、MITRE ATT&CK 调查，并提供逐步可回放的决策账本。今日新增 **446 Stars**，累计 6218 Stars。项目可自托管，无需额外 API 密钥，内置 MCP 服务器，适配 Claude、Cursor 和 Continue，MIT 许可。适合安全运营团队或想搭建个人 SOC 的开发者试用。


![beenuar/AiSOC：开源 AI 安全运营中心 · README 展示图](https://raw.githubusercontent.com/beenuar/AiSOC/main/apps/web/public/demo/hero.gif "beenuar/AiSOC：开源 AI 安全运营中心 · README 展示图")

---

### patchy631/ai-engineering-hub：LLM 与 RAG 实战教程库

**代码能跑、场景真实是这个库的核心价值。** [patchy631/ai-engineering-hub](https://github.com/patchy631/ai-engineering-hub) 用 Jupyter Notebook 收录了 LLM 微调、RAG 流水线和 AI Agent 落地的深度教程，今日新增 **1191 Stars**，累计 40,241 Stars，是今日日榜涨幅最快的 AI 项目。适合正在从零搭 RAG 或调试 Agent 的工程师直接 clone 运行。


![patchy631/ai-engineering-hub：LLM 与 RAG 实战教程库 · R](https://raw.githubusercontent.com/patchy631/ai-engineering-hub/main/assets/ai-eng-hub.gif "patchy631/ai-engineering-hub：LLM 与 RAG 实战教程库 · R")

---

### kornia/kornia：面向空间 AI 的几何视觉库

**几何变换和相机模型有了 GPU 原生支持。** [kornia/kornia](https://github.com/kornia/kornia) 是基于 PyTorch 的几何计算机视觉库，覆盖单应变换、相机模型、3D 旋转等算子，今日新增 **101 Stars**，累计 11,786 Stars。做空间推理、SLAM 或多视角三维重建的开发者，可以用它替代部分 OpenCV 几何模块，同时保留自动微分能力。


![kornia/kornia：面向空间 AI 的几何视觉库 · README 展示图](https://github.com/kornia/data/raw/main/kornia_banner_pixie.png "kornia/kornia：面向空间 AI 的几何视觉库 · README 展示图")

---
## **◉ 社媒精选**

### Twitter 设计师的 Stageshow Skill 优化 UI 动效产出

**一个 Skill 可以让 AI 生成的 UI 元素质量明显提升。** 设计师 Benji Taylor 发布了 Stageshow，[歸藏在 X 平台](https://x.com/op7418/status/2116711094622593292)转发并附上了视频演示，展示了该 Skill 在动效、交互体验和 Bento Grid 排版上的改善效果。安装方式为 `npx skills add benjitaylor/skills --skill stageshow`。素材只展示了演示视频，实际集成结果需自行测试；有 UI 生成需求的开发者可以先跑一次对比。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2116591037816971264/vid/avc1/2784x1944/CQhIlZl1gbvNSIkA.mp4?tag=29"></video>

---

## **😄 AI趣闻**

### Karpathy 用 AI 帮你从 4300 万条评论里挖出真正值得看的 YouTube 视频

周末闲不住，**Karpathy** 把一个"看什么视频"的日常困扰做成了项目：他用 **Claude Code** 配合 **Opus 5.5**，把 Hacker News 上攒了多年的 **4300 万条评论**过了一遍，最终筛出 **6454 个视频推荐**，做成一个叫 HackerTube 的网站，不用登录就能直接用。缩略图还特意取视频中段，不用那种被运营商P过的封面。[Karpathy 本人描述了从建 VPS 到买域名全程让 Claude 帮他部署的细节](https://www.bestblogs.dev/en/status/2116957135661945283?utm_source=rss&utm_medium=feed&utm_campaign=resources&entry=rss_article_item)，顺手感叹：以前要几个月的项目，现在一个周末就完了。

## **❓ 相关问题**

### AiSOC 属于什么类型的工具，和传统 SIEM 有什么区别？

**AiSOC 是一个可自托管的开源 AI 安全运营中心，用 LLM 代理完成告警融合分诊和 MITRE ATT&CK 调查。** [该项目](https://github.com/beenuar/AiSOC) 为每一步代理操作提供可回放的决策账本，传统 SIEM 则主要靠规则做关联分析，缺少对调查推理过程的完整记录。它内置 MCP 服务器，支持 Claude、Cursor 和 Continue 接入。
