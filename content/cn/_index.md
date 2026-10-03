---
linkTitle: AI Daily
title: AI 日报 2026/10/2：GPT-6 Astra 六小时破解拿破仑密信、Claude Code 推出 Mod 自定义工作流
breadcrumbs: false
next: /2026-10/2026-10-02
description: "GPT-6 Astra 用六小时破解拿破仑 217 年密信，Claude Code 和 OpenAI Dot 分别推出插件与桌面智能体。 产品端争夺桌面权限与本地任务，开源端把 Agent 技能和多模型调用做成标准化工具，底层存储因 AI 训练需求在两年后更紧。 今天先试 Claude Code…"
cascade:
  type: docs
---


## **今日摘要**

```
GPT-6 Astra 用六小时破解拿破仑 217 年密信，Claude Code 和 OpenAI Dot 分别推出插件与桌面智能体。
产品端争夺桌面权限与本地任务，开源端把 Agent 技能和多模型调用做成标准化工具，底层存储因 AI 训练需求在两年后更紧。
今天先试 Claude Code 的 Mod 拦截与 JEV-27B-VL 快思考模式，再看美光供需预测决定采购节奏。
```

## **🔥 今日焦点 TOP 10**

### 1. GPT-6 Astra 六小时破解拿破仑密信

**217 年悬案破解了。** 一位 AI 工程师将 1809 年拿破仑的密信图片交给 GPT-6 Astra，[GPT-6 Astra 六小时破解拿破仑密信](https://www.36kr.com/p/4007160336027525)。这封信曾霸占权威密码网站 Cryptiana 未解榜单，图片分辨率仅 **1202×1836 像素**，每个符号平均只占 **19 个像素**。AI 读出排兵布阵图，还补全了拿破仑回忆录中被删减 160 年的半句御旨。

![1809 年拿破仑密信手绘符号](https://img.36krcdn.com/hsossms/20261001/v2_a930d30a374c4a46960bd0dc002a4236@000000_oswg640355oswg689oswg833_img_000?x-oss-process=image/format,jpg/interlace,1 "1809 年拿破仑密信手绘符号")

### 2. Claude Code 推出 Mod 自定义工作流

**AI 助手能装插件了。** Anthropic 为 **Claude** Code 上线 Mod 功能，[Claude Code 推出 Mod 自定义工作流](https://x.com/dotey/status/2105840601195311216)。Mod 可以在 AI 读文件、运行命令等环节拦截并改写操作，**不会编程也能让 Claude Code 自己写好 Mod** 并即时生效🔧。这让固定流程变成可定制的工作台，适合需要审查 AI 权限或强制执行团队规范的开发者。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2105840119873773568/vid/avc1/1080x1920/wuJnhEIhfHH53HuE.mp4?tag=29"></video>

### 3. OpenAI 发布 Dot 智能体连本地电脑

**ChatGPT 的 Agent 走到桌面了。** CodeX Pro 付费用户更新后可使用 Dot，它调用 **GPT-6 Astra** 模型。[栗噔噔实测显示 Dot 能连本地电脑和邮箱主动找任务](https://m.okjike.com/originalPosts/6abde687cfb5d08b3ef5bf72)，聊天不扣额度，执行任务才扣。Dot 继承 ChatGPT 长期记忆，但无法连 Apple Health。适合已订阅 CodeX Pro、希望 AI 主动处理邮件和**本地文件的用户**。

![Dot 界面截图](https://cdnv2.ruguoapp.com/FvKmsXWnQ688KSCTpgudCEsmkG0Av3.png "Dot 界面截图")

### 4. JEV-27B-VL 用快慢双模处理图像

**开源多模态模型有两套推理路径。** **JEV-27B-VL** 面对选择题和分类任务时，[JEV-27B-VL 用快慢双模处理图像](https://x.com/Gorden_Sun/status/2105680223547310284)，遇到复杂图表则切换到逐步分析模式📊。模型支持 **图片输入**，可用于视频推荐和游戏场景。快思考模式让分类任务响应速度提升数十倍，适合需要实时判断的开发者。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2105680172255227904/vid/avc1/1280x720/GEyVK4xXiSm8jNpG.mp4?tag=29"></video>

### 5. 用户把播客暴论一键制作成传播海报

**MCP 让播客内容变成视觉素材。** 向阳乔木开发的 MCP 能抓取海外播客转写文本，[推文展示了将《词元之外》最新暴论生成 PDF 和海报](https://x.com/vista8/status/2105806116433346650)的全过程。用户可以把任意播客观点转成传播素材，省去手动排版。开发者计划迭代后开源，适合需要快速制作播客笔记或社交分享图的内容团队。

![播客暴论生成的海报示例](https://pbs.twimg.com/media/HTlTIAIbsAAeAaj.jpg "播客暴论生成的海报示例")

### 6. Cursor 公开插件规范与官方插件仓库

**编辑器插件生态开放了。** Cursor 在 GitHub 发布 [plugins 仓库公开插件规范和官方插件代码](https://github.com/cursor/plugins)，当天新增 **150 Stars**，总星标达 **9334**。开发者可以按规范编写 TypeScript 插件，扩展 Cursor 的 AI 辅助能力。适合想为团队定制编辑器功能或开发第三方插件的工程师。

### 7. 美光 CEO 预计 2027-2028 年内存供需更紧

**AI 训练推高存储需求。** 美光 CEO 在财年第四季电话会上判断，[美光 CEO 预计 2027-2028 年内存供需更紧](https://www.techpowerup.com/353296/micron-ceo-says-memory-supply-will-be-much-tighter-in-2027-and-2028-than-in-2026)。美光 **2027 年超过 75%** 产出已向客户承诺，爱达荷 ID2 工厂要到 **2028 年末** 才开始晶圆产出💾。当季 DRAM 价格涨幅在十几个百分点高段。正在规划 AI 集群或大规模采购的企业需要提前锁定供应。

### 8. 大脑行波研究揭示复杂时空协调模式

**波动不只是背景噪声。** **2026 年 4 月**发表于 Nature Communications 的研究利用癫痫患者颅内电极，[大脑行波研究揭示复杂时空协调模式](https://www.quantamagazine.org/surprisingly-complex-waves-reveal-the-brains-inner-workings-20260930/)🌊。虚拟环境寻物任务比回忆文字更常出现 **旋转波**，前后传播方向与记忆编码、回忆切换相关。这些发现尚未解决因果问题，但为理解大脑短时协调提供新视角。

### 9. Karpathy 建议用受控语言和图表解读 LLM 输出

**让 AI 输出更易监督。** Andrej **Karpathy** 提出用 ASD-STE100 受控语言、图表、HTML 和定制视频来解析 LLM 生成内容，[BestBlogs.dev 整理了其推文中的多种技术](https://www.bestblogs.dev/en/status/2105819303471976479?utm_source=rss&utm_medium=feed&utm_campaign=resources&entry=rss_article_item)。他认为随着 AI 能力增强，人类角色将转向 **高层次监督和管理定制化软件产物**📊。适合需要审查 AI 生成代码或文档的团队。

### 10. 科班程序员才认识的东西引发讨论

**老工具重新进入视野。** AI探索指南频道发起话题，[称只有科班出身的程序员才认识某个开发工具](https://t.me/aigc1024/25300)，引发 AI Coding 用户讨论。帖子未公开具体工具名称，但暗示传统计算机教育与 AI 辅助编程之间存在知识断层。适合关心 AI 时代编程教育变化的开发者和教育者。

---

## **⌘ 开源 TOP 项目**

### obra/superpowers：Agent 技能框架与开发方法论

**软件开发流程工具化了。** [obra/superpowers 提供 Agent 技能框架和配套开发方法](https://github.com/obra/superpowers)，当天新增 **455 Stars**，总星标达 **294022**。项目用 Shell 实现，帮助开发者将 AI Agent 能力模块化并集成到实际工作流。适合正在搭建 Agent 系统、需要标准化技能管理的团队。

### tile-ai/tilelang：GPU 内核开发专用 DSL

**简化高性能内核编写。** [tile-ai/tilelang 是为 GPU、CPU 和加速器设计的领域专用语言](https://github.com/tile-ai/tilelang)，当天新增 **163 Stars**，总星标 **8136**。项目用 Python 实现，帮助开发者快速编写高性能计算内核⚡。适合 AI 框架开发者和需要自定义算子的研究团队。

---

## **❓ 相关问题**

### Cursor Plugins 是什么项目，解决什么问题?

这是 [Cursor 插件规范及官方插件仓库](https://github.com/cursor/plugins),定义了如何为 Cursor 编辑器开发扩展功能的技术标准。它与 VS Code 插件不同:Cursor Plugins 专为 AI 辅助编程场景设计，规范了插件如何与 Cursor 的 AI 能力交互，而不是通用编辑器扩展机制。仓库包含插件规范文档和官方维护的参考实现。
