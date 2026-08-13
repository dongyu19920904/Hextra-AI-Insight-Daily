---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/8/13
breadcrumbs: false
next: /2026-08/2026-08-13
description: "DeepSeek V4 Pro 0813 编程基准 DeepSWE 从 12.8 跳至 62.7，腾讯同日以 5 倍 ARR 收购 Manus。 模型性能、收购估值、开源工具三条线同步在压缩：能力在涨，钱却越来越难给贵。 今天先跑 V4 Pro 的实际 Agent 任务视频，再看 ppt-mast…"
cascade:
  type: docs
---


## **今日摘要**

```
DeepSeek V4 Pro 0813 编程基准 DeepSWE 从 12.8 跳至 62.7，腾讯同日以 5 倍 ARR 收购 Manus。
模型性能、收购估值、开源工具三条线同步在压缩：能力在涨，钱却越来越难给贵。
今天先跑 V4 Pro 的实际 Agent 任务视频，再看 ppt-master 和 ragflow 是否能进你的工作流。
```

## **🔥 今日焦点 TOP 10**

### 1. DeepSeek V4 Pro 正式版 0813 全面超越预览版

**性能全面跃升。** [即刻上流传的测试截图](https://m.okjike.com/originalPosts/6a7ca276756bbb665884a10a)显示，V4 Pro 0813 在多项基准上已接近或超越 Fable 5。其中 **DeepSWE 从 12.8 飙到 62.7**，Cybergym 从 52.7 升至 83.3，均超过 Opus 4.8。正在评估编程代理方案的团队，今天可以重跑一次基准对比。

![DeepSeek V4 Pro 0813 基准测试成绩对比](https://cdnv2.ruguoapp.com/Fka75UDJ3usROeD5K8bsOQBDp0LLv3.jpg "DeepSeek V4 Pro 0813 基准测试成绩对比")

---

### 2. 腾讯收购 Manus 估值仅为 ARR 5 倍

**AI 独角兽估值倍数在快速收缩。** [腾讯收购 Manus 估值仅为 ARR 5 倍](https://m.okjike.com/originalPosts/6a7c1e3f6b81353536e34338)称，Manus ARR 已从去年 12 月的 1 亿美元升至 4 亿美元，腾讯此次交易的 ARR 倍数却仅约 **5 倍**，远低于 Meta 收购时的 20 倍。对比之下，SpaceX 收购 Cursor 的估值倍数达 15 倍。一级市场对 AI 应用的定价逻辑已经悄然分化。

![腾讯收购 Manus 估值倍数对比](https://cdnv2.ruguoapp.com/Fkg8ZhfZrzECcz8tdCVFnPULzTWZv3.jpg "腾讯收购 Manus 估值倍数对比")

---

### 3. 腾讯微信团队发布独立大模型 WeLM

**腾讯其实有两套大模型体系。** [向阳乔木在 X 上转发的微信官方公告](https://x.com/vista8/status/2087570351643640306)显示，微信团队独立发布了 WeLM 系列模型，核心强调**资源效率**，与混元体系并行存在。WeLM 由 Weixin 团队自主研发，定位与混元不同。开发者若需接入微信生态 AI 能力，这是一个新的候选路径。

![WeLM 模型发布公告截图](https://pbs.twimg.com/media/HPhSo2XbsAAolei.jpg "WeLM 模型发布公告截图")

---

### 4. 牛津团队用进化策略替代反向传播训练 RWKV-7

**后训练方式出现新路线。** [即刻上热传的论文链接](https://m.okjike.com/originalPosts/6a7c125c4ab087a83878215a)指向牛津大学团队的研究，他们以进化策略（ES）替代反向传播，将 RWKV-7 用作大规模并行后训练主干。这条路线绕开了梯度计算的内存瓶颈。对资源受限的研究者而言，这提供了一种可大规模并行化的训练替代思路。

![牛津 RWKV-7 进化策略训练论文图示](https://cdnv2.ruguoapp.com/FhTZXQkdh0oJcNFqWxWUOguRM3kQv3.jpg "牛津 RWKV-7 进化策略训练论文图示")

---

### 5. ppt-master 让 AI 直接生成原生 PPT 文件

**AI 生成 PPT 不再只是图片导出。** [GitHub 日榜项目 ppt-master](https://github.com/hugohe3/ppt-master) 将文档或主题转化为含原生形状、切换动画、数据图表和演讲者备注音频的真实 .pptx 文件。支持套用用户自己的 .pptx 模板，总 Stars 已达 **45567**，今日新增 **476**。需要批量生成汇报材料的产品经理和分析师可以直接试用。

---

### 6. Agent+X 与 X+Agent 的路线之争正在显现

**谁主导工作流，决定了谁拥有入口。** [即刻上这篇《接口与入口》的讨论](https://m.okjike.com/originalPosts/6a7c8aae89d3060ffe99402f)将当前 AI 产品格局归结为两条路线：以 Agent 为中枢对接各类工具，还是由现有产品内嵌 Agent 能力。两条路线对应的商业控制权截然不同。正在选择产品形态的创业者和产品经理，今天值得重新审视自己押的是哪条路。

![Agent+X 与 X+Agent 路线图示](https://cdnv2.ruguoapp.com/FmLeq0Ap_pxL3hHKEShzQ6gVQ19Xv3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient "Agent+X 与 X+Agent 路线对比图示")

---

### 7. diagram-design 为 Claude Code 提供 29 种图表模板

**Claude Code 用户的图表痛点有了专项方案。** [GitHub 日榜项目 cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) 提供 29 种纯 HTML + SVG 编辑图表，无阴影、无 Mermaid 依赖，今日新增 **2855** Stars，总 Stars **10392**。面向在 Claude Code 中需要嵌入可编辑图表的开发者，可直接引用独立 HTML 文件。

---

### 8. macro-inc/macro 将邮件、聊天与 AI 代理整合进一个工作台

**团队协作工具正在被 AI 记忆重新组织。** [GitHub 日榜项目 macro-inc/macro](https://github.com/macro-inc/macro) 用 @ 链接和**共享 AI 记忆**把电子邮件、聊天、文档、任务、代理、通话和 CRM 整合在一个工作空间，今日新增 **227** Stars。适合希望减少工具切换成本、统一团队上下文的小型工程团队试部署。

---

### 9. Linux 官方 ChatGPT 桌面版正式上线

**Linux 用户终于不用靠浏览器凑合了。** [Linux 官方 ChatGPT 桌面版正式上线](https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651049903&idx=2&sn=990f91c4c42502ed58aa303d7ceff9c5)确认 OpenAI 推出了官方 ChatGPT Linux 桌面版。此前 Mac 和 Windows 版已先行上线，Linux 版本是最晚补齐的平台缺口。日常在 Linux 环境下工作的开发者可以去 OpenAI 官网下载安装。

![ChatGPT Linux 桌面版界面截图](https://wechat2rss.bestblogs.dev/img-proxy/?k=170105bb&u=https%3A%2F%2Fmmbiz.qpic.cn%2Fsz_mmbiz_jpg%2F5L8bhP5dIqEg5FibbaKeQMDQCppbFBMBCCFNKicYlgpvk1mCdtk1v60ynaKgW7jMXwKewFiaEmsxuNLKbJ00kklw1GNC4Ot568RQtze1dzqFicA%2F0%3Fwx_fmt%3Djpeg "ChatGPT Linux 桌面版界面截图")

---

### 10. Codex 额度明日重置，今天还能继续薅

**每月重置周期又到了。** [Codex 额度明日重置，今天还能继续薅](https://www.v2ex.com/t/1233839#reply7)显示 OpenAI Codex 的免费额度将在 8 月 13 日再次重置。对已用完当月额度的开发者来说，今天是补上剩余任务的窗口期。重置后额度归零，新的一期可以继续使用。

![Codex 额度重置通知截图](https://i.imgur.com/h3dITDT.png "Codex 额度重置通知截图")

---

## **⌘ 开源 TOP 项目**

### infiniflow/ragflow：企业级 RAG + Agent 引擎

**开源 RAG 引擎的生产级选择。** [infiniflow/ragflow 在 GitHub 上已积累 87545 Stars](https://github.com/infiniflow/ragflow)，今日新增 **139**，是目前开源 RAG 生态中 Stars 最多的项目之一。它将检索增强生成与 Agent 能力融合，提供完整的上下文管理层，而不只是一个检索组件。需要在私有数据上构建可靠问答或知识库代理的团队，值得作为首选框架评估。

---
## **◉ 社媒精选**

### 向阳乔木实测 V4 Pro 0813 完成网站部署和 3D 游戏

**真实任务跑通了，不只是 benchmark。** 向阳乔木[在 X 上发布了三个任务的实测视频](https://x.com/vista8/status/2087577905081823559)：用 DeepSeek V4 Pro 0813 调用 3 个 Skill 完成网站开发和子域名上线，生成 60 种设计风格的 Bento 卡片图，以及用 Three.js 生成 3D 打砖块游戏。帖子获得 **94 个点赞**，浏览量超 **2.7 万**。对需要判断 V4 Pro 实际 Agent 能力的开发者，这几个视频比跑分更直观。

---

### 歸藏实测 V4 Pro 图像生成：滑动变祖器拉满

**图像生成质量有了新参照点。** 歸藏（guizang.ai）[在 X 上分享了 DeepSeek V4 Pro 0813 的图像输出截图](https://x.com/op7418/status/2087583794819956750)，配文"滑动变祖器拉满"，直觉判断生成效果大幅提升。素材同步展示了测试成绩图，与 benchmark 数据相互印证。对图像生成场景有需求的产品开发者，可以结合这条实测帖和官方数据一起判断。

![歸藏实测 V4 Pro 0813 图像输出](https://pbs.twimg.com/media/HPiWZUmbYAALaQF?format=jpg&name=orig "歸藏实测 V4 Pro 0813 图像输出")

---

### 宝玉转发梁文锋视频引发热议

**DeepSeek 创始人的公开亮相引爆讨论。** 宝玉[在 X 上转发了一段梁文锋的视频](https://x.com/dotey/status/2087657735319888051)，配文"他真的我哭死"，情绪拉满。视频来自 Max For AI 账号，内容涉及 DeepSeek 创始人的公开表态。帖子侧面反映了社区对 DeepSeek 团队的高度关注，也是 V4 Pro 上线当天情绪最集中的一条信号。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2087594991921348608/vid/avc1/1926x1080/fJHBuGz78dPmRKQ5.mp4?tag=29"></video>

---
## **😄 AI趣闻**

### 模型命名用了明天的日期，作者自己也懵了

向阳乔木 8 月 12 日下午拿到了 DeepSeek V4 Pro 的新版本，兴冲冲写下"喜大普奔"，[随即在帖子里](https://x.com/vista8/status/2087565229224034521)追问：但是今天还是 8 月 12 日啊，为什么要叫 **0813**？模型还没发布就已经活在明天，价格表倒是当下时态——百万 tokens 输出 **6 元**，并发上限仅 **500**，注意：官方说最近会涨价。发布方给模型起了个来自未来的名字，开发者只好对着昨天的日期用明天的模型。

---
## **❓ 相关问题**

### DeepSeek V4 Pro 国内怎么用？

**DeepSeek V4 Pro 0813 已通过 DeepSeek 官网和 API 开放访问。** 国内用户可直接访问 [DeepSeek 官方平台](https://www.deepseek.com/) 使用网页版，开发者可通过官方 API 调用，模型名称为 `DeepSeek-V4-Pro-0813`。当前 API 价格为：百万 tokens 输入（缓存命中）0.025 元、输入（缓存未命中）3 元、输出 6 元，并发上限 500，官方提示价格近期将上涨。无需境外账号，国内实名注册即可使用。

| 使用方式 | 适合谁 | 主要限制 |
|---|---|---|
| 官网网页版 | 普通用户、快速体验 | 并发有限，无 API 控制 |
| API 调用 | 开发者、企业接入 | 并发上限 500，价格近期上调 |

需要进一步比较当前公开的 AI 账号或订阅服务时，可查看 [**爱窝啦·AI账号店**](https://www.aivora.cn/)；商品、价格与可用状态以官网实时页面为准。
