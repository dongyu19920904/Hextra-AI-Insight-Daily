---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/8/17
breadcrumbs: false
next: /2026-08/2026-08-17
description: "ChatGPT Pro 接通 GitHub 后可自动 clone 仓库并以用户名义提交 PR。 各工具都在压缩人工介入节点：Codex 自动续跑、AI 直接推代码、小模型降低视觉任务门槛。 今天先试 ChatGPT GitHub 插件，再用额度检测工具核查 Codex 用量是否缩水。"
cascade:
  type: docs
---

## **今日摘要**

```
ChatGPT Pro 接通 GitHub 后可自动 clone 仓库并以用户名义提交 PR。
各工具都在压缩人工介入节点：Codex 自动续跑、AI 直接推代码、小模型降低视觉任务门槛。
今天先试 ChatGPT GitHub 插件，再用额度检测工具核查 Codex 用量是否缩水。
```

## **🔥 今日焦点 TOP 10**

今日合格 AI 相关素材共 6 条（TOP 候选 4、5 属泛生活内容，TOP 候选 7 属商业投资语录，均不与 AI 直接相关），实际只能输出 6 条。

### 1. ScienceDiscovery 宣称把科研幻觉降至零

**科研 AI 新基准出炉。** 机器之心的[ScienceDiscovery 宣称把科研幻觉降至零](https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651050586&idx=2&sn=005d605a168bfbea6afdb2136fe639fe)称，ScienceDiscovery 以 BiomniBench-DA 为验证基准，宣称幻觉检测指标达到业界 SOTA。该工具定位一站式 AI 科研工作台，涵盖文献检索、数据分析和报告生成环节。**做生物医学研究**的用户可关注 BiomniBench-DA 的具体评测方法，再判断是否值得接入。

![ScienceDiscovery AI科研工作台界面](https://wechat2rss.bestblogs.dev/img-proxy/?k=97ed75af&u=https%3A%2F%2Fmmbiz.qpic.cn%2Fsz_mmbiz_png%2FKmXPKA19gW889cR13aBX42evqQIRibKlicoCrHPEpT0tQiceNphESCa2eJTqstP8G0yqMTkeMFrOGue6kOyCKdTkA%2F640%3Fwx_fmt%3Dpng%26from%3Dappmsg "ScienceDiscovery AI科研工作台界面")

---

### 2. 有工具可测 Codex 周额度是否真的缩水

**有人发现 Codex 额度悄悄缩了。** V2EX 上一位用户分享了[一个本地检测工具](https://www.v2ex.com/t/1234799#reply1)，通过读取本地 codex 文件把用量折算成 API 等价价值。帖子中的示例截图显示，重置前周额度约值 **160 美元**，重置后只剩 **100 美元**。正在用 Claude Codex 跑重度任务的开发者，可以下载工具自测一次。

![Codex额度当量检测示例](https://i.imgur.com/7jYNaJW.png "Codex额度当量检测示例")

---

### 3. 99 美元订阅可能同时拿到多个高价值权益

**一个订阅捆绑多项高价工具。** 即刻上流传的[帖子](https://m.okjike.com/originalPosts/6a81f536cfb5d08b3e9ff245)称，每月 **99 美元**可订阅包含 Grok Harvey、Cursor Ultra、Grok Bot 独立额度及 Twitter Premium+ 的套餐。该帖声称折算市值超过 500 美元，但上述比较均来自社媒转述，无官方定价页面直接对比确认。想薅这个套餐的用户，建议先到 Grok 官网核实当前订阅页面的实际内容再付款。

---

### 4. Cohere 发布 2.4B 多模态小模型

**Cohere 开源了一个轻量视觉模型。** Gorden Sun 的[Cohere 发布 2.4B 多模态小模型](https://x.com/Gorden_Sun/status/2089012345691611394)介绍，North-Micro-Vision-Instruct 仅有 **2.4B 参数**，适合 OCR、图片描述和视觉定位等轻量任务，已上传至 Hugging Face。评测显示其整体得分低于 Qwen3.5-2B，Qwen 在小模型赛道的领先优势依然明显。对计算资源有限、只需基础视觉能力的开发者来说，这是一个可以快速试验的低成本选项。

![North-Micro-Vision-Instruct评测对比](https://pbs.twimg.com/media/HP2phtLawAAprtA?format=jpg&name=orig "North-Micro-Vision-Instruct评测对比")

---

### 5. ChatGPT Pro 可直接连 GitHub 提交 PR

**ChatGPT 接管了代码提交流程。** 宝玉在推文中实测，[ChatGPT Pro 连接 GitHub 插件后](https://x.com/dotey/status/2089072890104725788)，可以自动 clone 仓库、分析代码、制定方案并以用户名义提交 PR，中间只需确认一次权限。需要先在 ChatGPT 设置的 Plugins 里手动绑定 GitHub 账号才能激活。想让 AI 直接帮写并合并代码的 Pro 用户，今天可以去设置里开启连接试试。

---

### 6. SandAI 开源 114B 参数音视频同步模型

**北京三呆科技开源了新一代视频生成模型。** Gorden Sun 的[SandAI 开源 114B 参数音视频同步模型](https://x.com/Gorden_Sun/status/2088997857751871831)介绍，MAGI-2 Preview 采用 **MoE 架构**，总参数 114B、激活参数 6B，能生成音视频同步的 10 秒短片，代码和模型权重均已公开。评测认为生成画面偏油腻，效果仍在打磨中。有视频生成需求的研究者可以先拉模型跑一跑，和 GAGA-1 做对比。

---

## **⚡ 产品与功能更新**

### Claude Code 5 小时限制到期可自动续跑

**限额重置后不再需要手动干预。** 宝玉转发 Anthropic 官方的[公告推文](https://x.com/dotey/status/2088877534859473370)，Claude Code Desktop 新增"自动继续"勾选框，主 Agent 和子 Agent 达到 5 小时上限后均可自动接续，无需手动输入 return 或重开子任务。这对需要长时间跑代码审查或大规模重构的用户尤为实用，开启方式是在 Claude Code 设置中勾选对应选项。

---
## **◉ 社媒精选**

### 99 美元订阅捆绑教程：有人做了一张流程图

**歸藏整理了操作步骤，减少试错成本。** 他在[这条推文](https://x.com/op7418/status/2089049616667103648)里发布了图文教程，说明如何用 99 美元订阅拿到 Grok Harvey、Cursor Ultra 和 Twitter Premium+ 的组合权益，并附上了新旧账号操作路径的区别说明。注意相关价值对比均来自社媒，未见官方定价页面交叉验证，实际权益以 Grok 官网当前订阅页面为准。

![Grok Harvey订阅套餐说明图](https://pbs.twimg.com/media/HP3LbMvakAAExZX?format=jpg&name=orig "Grok Harvey订阅套餐说明图")

---
## **😄 AI趣闻**

### 让 Fable 5 优化性能，它优化完还是慢

宝玉用自己的字幕工具 BaoCut 做了一场活体实验。他[反复让 Codex 和 Fable 分析转录瓶颈](https://x.com/dotey/status/2088838461511839844)，每次都能收到一份有理有据的优化方案——多开 workers、预热子进程，听起来头头是道。按方案改完，效果"似乎有，但不明显"。最后他自己翻数据包，发现问题出在输出的 JSON 太长，生成和校验耗时居然是大头。AI 给的方案没有一条提到这个。结论是：让模型框架内做极致优化，它很努力；但如果答案在框架外，它只会一直帮你把框架内的路走完。

---
## **❓ 相关问题**

### Grok Harvey 国内怎么用？需要什么账号？

Grok Harvey 目前由 xAI 官网提供，订阅入口在 [grok.com](https://grok.com) 的定价页面。官方页面信息需以当前实际展示为准，社媒流传的"99 美元可得多项权益"说法尚未经官方公告直接确认，建议访问官网核实当前订阅等级和包含内容后再付款。国内用户访问 xAI 服务通常需要境外网络环境，支付一般需要境外银行卡。

需要进一步比较当前公开的 AI 账号或订阅服务时，可查看 [**爱窝啦·AI账号店**](https://www.aivora.cn/)；商品、价格与可用状态以官网实时页面为准。