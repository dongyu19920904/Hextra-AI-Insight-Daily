---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/9/26
breadcrumbs: false
next: /2026-09/2026-09-26
description: "DeepSeek 桌面版源码放出、蚂蚁清华 9B 模型让对话和任务可以同时跑、高通全押智能体平台 Opus 5.5 拉长上下文、GPT-6 优化缓存、训练成本降到百元级，都在争夺同一件事：让模型真正进入工作流 今天先看 DeepSeek 桌面端和 Together 训练教程，再决定是否迁移调试环境…"
cascade:
  type: docs
---

## **今日摘要**

```
DeepSeek 桌面版源码放出、蚂蚁清华 9B 模型让对话和任务可以同时跑、高通全押智能体平台
Opus 5.5 拉长上下文、GPT-6 优化缓存、训练成本降到百元级，都在争夺同一件事：让模型真正进入工作流
今天先看 DeepSeek 桌面端和 Together 训练教程，再决定是否迁移调试环境或试跑一次低成本训练
```

## **🔥 今日焦点 TOP 10**

### 1. DeepSeek Harness 发布桌面预览版

**双节假期放更新。** 据 36氪报道,[DeepSeek Harness 发布桌面预览版](https://www.36kr.com/p/3998199345500040),官方代码明确写出了更新源 download.**deepseek**.com。apps/desktop 目录在 8 月底就已出现完整架构。正在等 Harness **本地调试功能的开发者**，可以今天试试桌面版操作体验。

![DeepSeek Harness 桌面端界面](https://img.36krcdn.com/hsossms/20260925/v2_e61251f8e08f432b8ce6163923cfa956@000000_oswg694111oswg1080oswg608_img_000?x-oss-process=image/format,jpg/interlace,1 "DeepSeek Harness 桌面端界面")

---

### 2. 蚂蚁清华开源 9B 实时对话模型

**多轮对话能异步处理任务了。** 据量子位报道,[蚂蚁清华开源 9B 实时对话模型](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247927071&idx=3&sn=ca0c54154bbd2cfa22d37afcf2cf2153),参数量 **9B**。模型用一套 Harness 打通前后台，在查资料、跑任务时仍能听懂用户追问并及时回应。需要边办事边对话的开发者，可以今天去仓库看实现机制。

![Realtime-Venus 工作流程](https://mmbiz.qpic.cn/mmbiz_jpg/A6fTew8FFGFoVt1hKI5TC1o0PPJMagbVhPvYicAnDwJP8WxUzsmKV3G99clAJLFyDCyTcF7YzqMjNA1ojVHt1HbzGNIxDdLIbsQQicr5NJNv8/300?wxtype=jpeg&wxfrom=0 "Realtime-Venus 工作流程")

---

### 3. Claude Opus 5.5 与 GPT-6 Luna 押注不同技术路线

**两家都在找新突破点。** 据 36氪分析,[Claude Opus 5.5 与 GPT-6 Luna 押注不同技术路线](https://www.36kr.com/p/3998565950330503),前者借鉴混元长上下文，后者参考 DeepSeek 的缓存优化。Artificial Analysis 数据显示，Opus 5.5 在 max 档位下平均每题输出 **11.9 万个 token**。两个新模型都在尝试通过不同的技术路线**降低算力成本**并提升智能表现。

![Opus 5.5 输出 token 统计](https://img.36krcdn.com/hsossms/20260925/v2_1ac30d50fe9c40b5bfe1f04db0d3f7ee@6119835_oswg363752oswg1080oswg669_img_000?x-oss-process=image/format,jpg/interlace,1 "Opus 5.5 输出 token 统计")

---

### 4. 腾讯 AI 助手 QClaw 宣布停运

**又一个大厂 AI 产品退场。** 据 36氪报道,[QClaw 将于 2026 年 12 月 24 日零点停止服务](https://www.36kr.com/p/3997508606972040),用户可在 **2027 年 3 月** 24 日前下载备份，官方建议迁移至 WorkBuddy。停运原因是业务发展调整、整合资源。正在使用 **QClaw** 的用户，今天可以开始备份数据并评估替代方案。

![QClaw 停运公告](https://img.36krcdn.com/hsossms/20260924/v2_1696fbe2c6ed47b986a9b75cea40a0d2@000000_oswg12214oswg422oswg47_img_000?x-oss-process=image/format,jpg/interlace,1 "QClaw 停运公告")

---

### 5. 国内大模型进入算力与推理资源紧张期

**旧毛掉了，新毛还没长齐。** 一位即刻用户分析,[国内大模型正在经历尴尬期](https://m.okjike.com/originalPosts/6ab66bd6756bbb66589f6d37)。阿里在云栖大会提到未来可能训练 **5T 到 10T** 参数规模的模型，Kimi、GLM 也在继续增大规模。但训练卡增长速度跟不上模型规模，推理资源也成为现实限制。正在规划模型训练的团队，需要今天重新评估算力资源和推理成本。

![国内大模型算力瓶颈分析](https://cdnv2.ruguoapp.com/Fq9O5uTOmVCnqsRBNrzvS5a0DBHqv3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient "国内大模型算力瓶颈分析")

---

### 6. Meta 押注可穿戴设备成为下一代 AI 入口

**扎克伯格的真正目标不是手机。** 一位即刻用户分析,[Meta 押注可穿戴设备成为下一代 AI 入口](https://m.okjike.com/originalPosts/6ab5f040756bbb6658924f8e)。硅谷共识认为手机只是阶段性形态，真正的下一代平台是眼镜、手表、耳机、戒指这类可穿戴设备。但硬件入口要成立，前提是生态内有足够多且足够聪明的服务。**Meta** 在 PC 和移动互联网时代都错过了操作系统，这次想提前布局。

![Meta 可穿戴设备战略](https://cdnv2.ruguoapp.com/FsFPDsKcjzt8_TJC6Vi_-NUJODb8v3.jpg "Meta 可穿戴设备战略")

---

### 7. Together AI 推出低成本模型训练教程

**100 元人民币训练一个类 Jev 模型。** 向阳乔木在推文中介绍,[Together AI 推出低成本模型训练教程](https://x.com/vista8/status/2103180006935724482),使用 Huggingface 上 8 个公开数据集、**3.8 万条数据**，耗时 **25 分钟**、成本约 **17 美元**。虽然像在推广平台，但这个成本确实让个人开发者可以今天就试试从零训模型。

![Together AI 训练教程截图](https://pbs.twimg.com/media/HS_-G97aEAA8JLc.jpg "Together AI 训练教程截图")

---

### 8. Today AI 推送个性化新闻但引发成本担忧

**精准推送的代价有多高?** 一位即刻用户分享,[Today AI 推送个性化新闻但引发成本担忧](https://m.okjike.com/originalPosts/6ab628ec141b85b2925e0c5a)。用户认为这种设计很好，但同时担心后台成本太高、公开数据质量容易被污染。这种产品的定价和信息源置信度，是当前个性化 AI 新闻服务需要解决的问题。

![Today AI 推送示例](https://cdnv2.ruguoapp.com/FpECmV3Ysw6UfRb36AlSbS2hpKqMv3.heic "Today AI 推送示例")

---

### 9. Google 计划下周发射搭载 TPU 的卫星

**AI 芯片要上太空跑推理了。** 宝玉在推文中介绍,[Google 计划下周发射搭载 TPU 的卫星](https://x.com/dotey/status/2103283524962795707),发射定在 **10 月 1 日**。卫星装了 **4 块 TPU**，太阳能板只提供约 **1 千瓦电力**。芯片跑 **15 分钟**就得停下来降温，设计寿命约一年。Google 想验证能不能把 AI 数据中心搬到太空，利用近地轨道太阳能发电量最多可达地面 8 倍的优势。

---

### 10. Claude 订阅建议改用美区苹果商店

**尼日利亚区已经不便宜了。** Gorden Sun 在推文中建议,[Claude 订阅现在推荐美区苹果商店](https://x.com/Gorden_Sun/status/2103398735946682498),尼日利亚区价格优势已经不明显。他分享了订阅流程截图，并表示自己和身边朋友开的账号都用得稳稳的，封号没有传得那么严重。正在考虑订阅 **Claude** 的用户，可以今天参考这个建议选择支付渠道。

![是时候再搬出这张图了，不过尼日利亚区已经不便宜了，推荐美区苹果商店](https://pbs.twimg.com/media/HFozKcjakAElOJA?format=png&name=orig "是时候再搬出这张图了，不过尼日利亚区已经不便宜了，推荐美区苹果商店")

---
## **⌘ 开源 TOP 项目**

### anthropics/claude-plugins-official:官方插件目录

**Anthropic 管理的高质量插件合集。** [anthropics/claude-plugins-official 已公开核心代码](https://github.com/anthropics/claude-plugins-official),当天新增 **83** Stars，总 Stars **36936**。这是 Anthropic 官方管理的 Claude Code 插件目录。需要扩展 Claude 能力的开发者，可以今天从这个仓库找可信插件。

---

### anthropics/skills:智能体技能库

**公共代码库让智能体技能可复用。** [anthropics/skills 已公开核心代码](https://github.com/anthropics/skills),当天新增 **189** Stars，总 Stars **178318**。这是 Anthropic 维护的智能体技能公共代码库。正在构建智能体应用的开发者，可以今天去看看有哪些可直接调用的技能模块。

---

### androoAGI/starnet:实时像素艺术工作站

**本地优先的桌面智能体平台。** [androoAGI/starnet 已公开核心代码](https://github.com/androoAGI/starnet),当天新增 **93** Stars，总 Stars **475**。这是一个实时像素艺术工作站，真实的 AI 智能体在其中执行真实工作。自带密钥，可以实时观察你的团队运作。喜欢像素艺术或想试试本地智能体协作的开发者，今天可以部署体验。

---
## **◉ 社媒精选**

### Opus 5.5 智能对比视频展示显著提升

**开悟般的智能跃升。** 向阳乔木在推文中转发,[ego 发布的 Opus 5.5 对比宣传视频展示了显著的智能提升](https://x.com/vista8/status/2103287782890463378)。视频中 Claude Opus 5.5 的表现被形容为"开悟了",对比相当残酷。想直观看到新模型能力变化的开发者，可以今天看看这个对比演示。

---

### DeepSeek Harness 官方客户端配合开源浏览器插件

**最好的开源浏览器控制插件。** 向阳乔木在推文中介绍,[DeepSeek Harness 出了官方 GUI 客户端后，可以配合 OpenCLI-MCP 使用](https://x.com/vista8/status/2103167843751829561)。这是一个全新的 MCP 2.0 架构浏览器控制插件，使用体验打平 codex 插件，速度更快。需要给 Harness 加上浏览器控制能力的开发者，今天可以试试这个组合。

## **😄 AI趣闻**

### AI 终于学会一心二用

你让 AI 帮忙查个资料，话音刚落又想起来要补充点啥，结果它还在那儿一本正经地"正在查询中"——这种尴尬以后可能少了。蚂蚁和清华刚开源的 **Realtime-Venus**（**9B 模型**）用一套 **Harness 框架**实现了[对话和任务异步并行处理](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247927071&idx=3&sn=ca0c54154bbd2cfa22d37afcf2cf2153&chksm=e9a83e524a37a517bac798385a4d98af4b030f7d0e8adb3653fbfc23164a5dc1585f58f6c41d&scene=0&xtrack=1#rd)，你说你的，它干它的，互不耽误。终于不用憋着等它把上一句处理完了。