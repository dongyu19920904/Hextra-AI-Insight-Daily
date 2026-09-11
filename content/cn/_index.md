---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/9/11
breadcrumbs: false
next: /2026-09/2026-09-11
description: "谷歌 TPU 推理成本比英伟达 B200 低三到五成，Gemini 桌面版上线 Windows，Codex Pro 订阅已停止供应。 音乐模型、交易代理和编程助手都在争夺同一件事：用自然语言控制专业领域的精细操作。 今天先看 Codex 停售影响调用预算，再试 Gemini 快捷键能否替代现有工作…"
cascade:
  type: docs
---

## **今日摘要**

```
谷歌 TPU 推理成本比英伟达 B200 低三到五成，Gemini 桌面版上线 Windows，Codex Pro 订阅已停止供应。
音乐模型、交易代理和编程助手都在争夺同一件事：用自然语言控制专业领域的精细操作。
今天先看 Codex 停售影响调用预算，再试 Gemini 快捷键能否替代现有工作流。
```

## **🔥 今日焦点 TOP 10**

### 1. 谷歌 TPU 推理成本比英伟达 B200 低三到五成

**每百万 Token 便宜了。** SemiAnalysis 发布的第三方测算显示，谷歌第七代 TPU Ironwood [每百万 Token 成本仅需 0.181 美元](https://www.36kr.com/p/3976975500227072)，英伟达 B200 为 0.222 美元，B300 高达 0.276 美元。在相同模型负载下，TPU 每美元性能最高领先 B200 达 **50%**，对 B300 的优势接近 **96%**。这是黄仁勋五个月前公开挑战后，TPU 首次提交推理性能数据。

![外部TCO口径下每百万token成本对比](https://img.36krcdn.com/hsossms/20260910/v2_a20dded13ada4206a502d4949433f5d2@5091053_oswg47194oswg1080oswg647_img_000?x-oss-process=image/format,jpg/interlace,1 "外部TCO口径下每百万token成本对比")

### 2. Gemini 桌面版上线 Windows 按快捷键即开

**按键呼出助手。** Gemini 应用现已[在 Windows 平台提供下载](https://x.com/GeminiApp/status/2098090692098834867)，按 **Alt + Space** 可在任意工作场景直接调用。官方演示包括快速核查文档、为演示文稿生成标题。多步任务可交给 Gemini Spark **自动处理**。这是 Gemini 继移动端后首次推出原生 PC 应用。

![Gemini Windows 应用界面](https://pbs.twimg.com/media/HR3lGcBawAEI1np?format=jpg&name=orig "Gemini Windows 应用界面")

### 3. Suno V6 支持自然语言编辑段落和混音

**音乐模型开放精细控制。** 向阳乔木实测显示，**Suno** V6 [支持用自然语言调整段落、歌词和混音参数](https://x.com/vista8/status/2097861616897605907)，并新增音频、图片、视频多模态输入。官方称与华纳、BMG 合作开发，音质更清晰，歌词更精准。新版提供均衡、wild 和 mini 三个模型变体。自然语言编辑功能需开通 **30 美元最高档会员**，在 Studio 界面使用。

### 4. Minimax 开源音乐模型开头表现超 Suno

**开源模型追近商业对手。** Gorden Sun 使用相同提示词测试后发现，[Minimax-Music3 在开头部分表现优于 Suno V6](https://x.com/Gorden_Sun/status/2097898431398531151)，但副歌环节略逊。**Minimax**-Music3 最长可生成 **5 分钟歌曲**，支持通过提示词编排结构、人声、节奏和歌词。项目已开源，为次于 Suno V5.5 的第二强音乐模型。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2097898155761422336/vid/avc1/824x1464/UoQd6BVb0eivvX7I.mp4?tag=29"></video>

### 5. Codex 200 美元 Pro 订阅暂停供应

**高级订阅卖断货。** V2EX 用户确认，Tibo 在 X 平台证实 [Codex 的 200 美元 Pro 计划已停止供应](https://www.v2ex.com/t/1241191#reply4)。已开通用户暂不受影响。按目前趋势，Tibo 手动**重置额度的操作**可能大幅减少甚至停止。调用量大的开发者需要提前规划替代方案。

![Codex Pro 停售截图](https://i.v2ex.co/Gt6Np99Z.png "Codex Pro 停售截图")

### 6. 免费图片放大站可将 AI 生成图拉至万像素

**打印分辨率补上了。** 向阳乔木用 GPT Image 2.5 生成三张图后，[发现一个可将图片放大 10 倍的免费站点](https://x.com/vista8/status/2098079031791096310)。处理后单张从 20M 升至 100M，像素过万。**免费账户**可处理 **3 张**，换浏览器或清 Cookie 后可继续使用。适合需要高分辨率输出的创作者。

![AI生成图放大效果](https://pbs.twimg.com/media/HR3fE7AaQAElI8n.jpg "AI生成图放大效果")

### 7. 开源 AI 交易代理可在千个市场自主操作

**机器开始自己交易。** alsk1992/CloddsBot 是一个[基于 Claude 构建的自托管交易代理](https://github.com/alsk1992/CloddsBot)，可在 Polymarket、Kalshi、Binance、Hyperliquid、Solana DEX 和 **5 条 EVM 链**上自主运作。项目支持扫描优势、即时执行和自动风险管理。当天新增 **277 Stars**，总 Stars 达 1643。适合量化交易开发者试验。

### 8. 冯·诺伊曼瓶颈仍在制约现代计算架构

**底层设计限制从未解决。** 36氪整理的技术分析指出，[当前所有计算设备仍受制于 CPU 与内存之间的数据传输瓶颈](https://www.36kr.com/p/3977086976127235)。从手机到云服务器的多层技术栈看似坚固，实际都依赖这一 **70 年前**的基础设计。文章用"**牙签上的 IT 帝国**"比喻行业现状。AI 推理和训练的性能天花板，很大程度取决于这个底层限制能否突破。

![IT架构底层限制示意](https://img.36krcdn.com/hsossms/20260910/v2_8baccad5cbb54048a41bab8ccf2426e6@5667365_oswg581223oswg1105oswg1761_img_png?x-oss-process=image/quality,q_90/format,jpg/interlace,1 "IT架构底层限制示意")

### 9. 频道分享 GPT-Image 生成手绘工程科普图提示词

**信息图有模板了。** 频道 aigc1024 整理了一套[用于生成竖版手绘工程科普信息图的提示词](https://t.me/aigc1024/24358)。要求以笔记本纸为背景，主体采用石墨铅笔工程插画风格，配蓝色圆珠笔手写标注。提示词明确了透视角度、排线密度、颜色克制和标签布局规则。适合需要快速产出技术说明图的创作者。

### 10. 乔布斯 1990 年访谈中 12 条预判全部兑现

**35 年前看透了科技走向。** 频道 aigc1024 回顾了[乔布斯在 1990 年提出的 12 条核心预判](https://t.me/aigc1024/24365)，**覆盖远程协作**、边缘算力、隐形技术和去中心化团队。当时传真机和固定电话仍是主流，他却精准预测了 PC 普及、智能手机爆发和 AI 落地三个阶段的关键趋势。这些预判在过去三十年间全部兑现。

---

## **⚡ 产品与功能更新**

### Stripe 以 70 亿美元收购 AI 模型中转站 OpenRouter

**支付巨头抢 AI 流量入口。** 频道 aigc1024 报道，Stripe [以 70 亿美元收购了接入 400 多个模型的 OpenRouter](https://t.me/aigc1024/24353)。OpenRouter 拥有 **800 万用户**，负责 AI 请求中转和费用计量。Stripe 希望将支付能力嵌入未来大规模 Agent 调用场景，形成从模型选择到支付结算的完整链条。OpenRouter CEO Alex 曾将自家产品形容为"AI 领域的 Stripe"，这次收购算是强强联手。

---
## **⌘ 开源 TOP 项目**

### obra/superpowers：智能体技能框架与开发方法论

obra/superpowers 收录了[一套实际有效的智能体技能框架和软件开发方法论](https://github.com/obra/superpowers)。项目用 Shell 编写，当天新增 732 Stars，总 Stars 达 284698。适合正在构建或优化 AI Agent 工作流的开发者参考。

### Tencent/teamai-cli：让团队成为 AI 原生团队

Tencent/teamai-cli 提供了[让团队快速接入 AI 能力的命令行工具](https://github.com/Tencent/teamai-cli)。项目用 TypeScript 编写，当天新增 841 Stars，总 Stars 达 3787。适合希望在现有开发流程中集成 AI 的技术团队。

---
## **◉ 社媒精选**

### Cognition 发布基于 Kimi K3 训练的 SWE-2 模型

**编程模型能力全面提升。** Gorden Sun 介绍，Cognition 旗下 AI 编程产品 Devin [发布了基于 Kimi K3 训练的 SWE-2 模型](https://x.com/Gorden_Sun/status/2098089254010405115)，各项能力显著超过原模型。订阅会员本月免费使用，值得充一笔会员薅羊毛。Cursor 被收购后不再需要后训练开源模型，Kimi 模型找到了新的应用场景。

![SWE-2 模型介绍](https://pbs.twimg.com/media/HR3oX-3awAMpMKj?format=jpg&name=orig "SWE-2 模型介绍")

### 向阳乔木用 Codex 开发三个 Obsidian 插件

**GPT6-Astra 让开发加速。** 向阳乔木称，GPT6-Astra 上线后 [Codex Token 用量激增](https://x.com/vista8/status/2098116466285682757)，已完成三个 Obsidian 插件开发。包括 RSS 订阅器、支持所有格式的 AI 电子书伴读和通用 AI 助手，另有一个给 Agent 用的网页发布器。两个插件已上架，其余将于本周或下周陆续开源。

![Obsidian 插件开发截图](https://pbs.twimg.com/media/HR4AQ48acAAu4uq.jpg "Obsidian 插件开发截图")

### Gemini Windows 应用快捷键呼出助手

**桌面 AI 助手常驻后台。** 谷歌官方演示显示，[Gemini Windows 应用通过 Alt + Space 快捷键调用](https://x.com/GeminiApp/status/2098090725477105980)，可在任意应用场景中直接提供 AI 辅助。演示包括文档核查、标题生成和多步任务自动处理。这一交互方式类似操作系统级快捷启动器。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2098084232241528835/vid/avc1/1080x1080/QnbAFgLh-0sKKBqP.mp4?tag=29"></video>

---
## **😄 AI趣闻**

### 深度搜索工具选对了研究效率飙升

向阳乔木日常使用两个 Deep Research 工具。一个是 Apodex，内容精炼有效。另一个是网页版 GPT 6 Pro，内容超丰富。他偶尔用下 Gemini，但[发现质量真的很一般](https://x.com/vista8/status/2098120086431449209)。如果想学习或调研，深度搜索工具还是很实用的——前提是你得选对。不然就是花时间看一堆没营养的内容，还不如直接问 GPT。

![Deep Research 工具对比](https://pbs.twimg.com/media/HR4ENfAaIAA8amH.jpg "Deep Research 工具对比")

---
## **❓ 相关问题**

### Gemini 桌面版 Windows 用户怎么用？

直接从官方渠道下载 Gemini Windows 应用，安装后按 Alt + Space 即可在任意场景调用。应用支持快速核查文档、生成演示标题或将多步任务交给 Gemini Spark 自动处理。[官方演示视频](https://x.com/GeminiApp/status/2098090692098834867)展示了三种典型用法：快速帮助、深度工作和智能体协作。

需要进一步比较当前公开的 AI 账号或订阅服务时，可查看 [**爱窝啦·AI账号店**](https://www.aivora.cn/)；商品、价格与可用状态以官网实时页面为准。