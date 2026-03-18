---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/3/19
breadcrumbs: false
next: /2026-03/2026-03-19
description: "每日自动汇总最新 AI 行业动态，帮中文用户用最低成本玩转 ChatGPT、Claude、Cursor、Augment 等 AI 工具。由爱窝啦 AI 账号店提供支持。"
cascade:
  type: docs
---

## **今日摘要**

```
OpenAI 一口气扔出 Mini 和 Nano 两个小模型，速度快价格低，Agent 时代的基建算是齐了。
Midjourney V8 速度暴涨 5 倍还能直出 2K 高清，AI 绘画开始卷速度了。
今天信息量有点大，重点看前三条，开发者可以开始折腾 Agent 了。
```



## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览



> 💡 **提示**：想第一时间体验文中提到的最新 AI 模型（Claude 4.5、GPT、Gemini 3 Pro）？没有账号？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 领个号，一分钟上手，售后无忧。

## **今日AI资讯**

### **👀 只有一句话**
OpenAI 一口气发了两个小模型，Midjourney V8 也来了，今天的 AI 圈有点热闹。

### **🔑 3 个关键词**
#小模型狂飙 #AI绘画升级 #开源工具

## **🔥 重磅 TOP 10**

### 1. [OpenAI 发布 GPT-5.4 Mini 和 Nano](https://x.com/op7418/status/2034074865226207510)

以前跑个复杂任务，要么慢要么贵。现在 OpenAI 把 GPT-5.4 的能力塞进了两个小模型：Mini 专门干代码助手和 UI 解析，Nano 负责分类、数据抽取这些简单活。性能上 Mini 已经接近 GPT-5.4 本体，但价格只要 0.75 美元/百万 Token（输入），比大模型便宜太多。最关键的是速度快，适合做子 Agent 并行执行。OpenAI 这是在下一盘大棋：大模型规划，小模型执行，Agent 时代的基础设施算是搭好了。

![image](https://cdnv2.ruguoapp.com/FpPd-HtraUgY-Ev-yP6qz5AZRyWlv3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient)

### 2. [Midjourney V8 正式发布](https://x.com/op7418/status/2034069787719176219)

等了这么久，Midjourney V8 终于来了。跑了几张图，发现基础风格跟 V7 差别不大，但在复杂提示词遵循、文字渲染、个性化风格参考上都有明显提升。最爽的是速度提升了 5 倍，还支持 2K HD 模式直出高清图。对设计师来说，这意味着从草图到成品的时间又缩短了一大截。目前在 Midjourney alpha 网站上测试，兼容 V7 的各种设置和资产，老用户可以无缝切换。

![image](https://cdnv2.ruguoapp.com/FoZ4Lp8CKTwJa6WtkQ0a26J_1dfav3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient)

### 3. [Anthropic 内部 Skills 使用指南曝光](https://x.com/op7418/status/2034082485798314489)

Claude Code 创建者写了篇长文，揭秘 Anthropic 内部怎么用 Skills。很多人以为 Skills 就是写个 Markdown 文档，其实不是。Skills 是一个文件夹，里面可以放脚本、资源文件、数据，甚至注册钩子函数。Anthropic 内部现在有数百个 Skills 在用，从 API 文档到部署流程全覆盖。他们把这些经验总结成九种类型：库与 API 参考、工作流程、代码规范、调试指南等。对开发者来说，这相当于拿到了一份"如何让 AI 更懂你的项目"的实战手册。

![image](https://cdnv2.ruguoapp.com/Fn9uoyHXbdgjtplxNP46EOLE4wcev3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient)

### 4. [阿里开源 OpenSandbox 沙箱平台](https://x.com/Gorden_Sun/status/2033941005368774953)

Agent 跑起来最怕的就是把系统搞崩。阿里开源了 OpenSandbox，专门给 AI 应用提供沙箱环境。提供多语言 SDK + 统一 API，集成 Chrome 无头浏览器、Playwright 自动化，支持运行 Claude Code、Gemini CLI 等 Agent，基本开箱即用。对开发者来说，这意味着可以放心让 Agent 折腾，不用担心它把生产环境搞炸。Docker/Kubernetes 运行，部署也很方便。

![image](https://pbs.twimg.com/media/HDoCjpZaoAAPt7-?format=jpg&name=orig)

### 5. [Foundation-1 开源 AI 音乐生成模型](https://x.com/Gorden_Sun/status/2033943515080864234)

基于 Stable Audio 微调，能生成没有人声的纯音乐，效果非常好。最关键的是只需要 7G 显存，本地就能跑。能生成可循环的片段音乐，适合做游戏配乐、视频 BGM。对独立开发者和小团队来说，这意味着不用再花钱买版权音乐了，自己生成就行。模型已经上传到 Hugging Face，直接下载就能用。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2033943132870733824/vid/avc1/1920x1080/hl_FBQwwwHai2vMZ.mp4?tag=21"></video>

### 6. [微软考虑起诉亚马逊和 OpenAI](https://x.com/dotey/status/2034348355518603343)

OpenAI 和亚马逊达成了一项 500 亿美元的云计算协议,微软不干了。核心争议在于：OpenAI 与微软有独家云服务条款，所有 API 调用必须通过 Azure。但亚马逊和 OpenAI 搞了个"有状态运行时环境"（SRE），部署在 AWS 的 Bedrock 平台上，声称这不违反合同。微软态度很强硬："我们清楚合同内容，如果他们违约，我们就起诉。" 这场官司如果打起来，可能会重新定义云服务独家协议的边界。

### 7. [迪士尼雪宝机器人技术栈曝光](https://x.com/dotey/status/2033942205694353638)

迪士尼的雪宝机器人不只是个玩具，背后是一整套 NVIDIA + DeepMind 的技术栈。硬件用 Jetson 边缘 AI 芯片，在 Omniverse 虚拟平台训练，用 Newton 物理引擎适应真实世界，最后迁移到真实机器人。语言和大脑用的是 Gemini 模型。整条链路：虚拟训练 → 物理仿真 → Sim-to-Real 迁移 → 边缘推理 → 真实行走。这套流程不只是做个会走路的玩偶，更像是在探索"如何让机器人在真实世界自然行动"的通用方案。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2033834612208844800/vid/avc1/1920x1080/hXebCjGlWdNHhas3.mp4?tag=21"></video>

### 8. [LazyCut 开源终端视频剪辑工具](https://x.com/dotey/status/2034320225533845778)

一个在终端运行的视频剪辑工具，标记起始时间点，能导出可控制宽高比的剪辑片段。非常简洁，适合快速剪辑。对经常需要处理视频素材的开发者来说，这比打开 Premiere 或 Final Cut 快多了。GitHub 上已经开源，直接 clone 下来就能用。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/tweet_video/HDta966aUAE0Vr8.mp4"></video>

### 9. [Lenny 开放全部 Newsletter 数据](https://x.com/dotey/status/2034055226559180835)

Newsletter 大神 Lenny Rachitsky 把 350+ 篇文章 + 300+ 期播客转录全部开放了，整理成 AI 友好的 Markdown 文件，还附赠 MCP server + GitHub 仓库。几个月前他只放了播客转录，就有人做出了 RPG 游戏、育儿智慧网站、Twitter bot 等 50+ 个项目。现在数据量更大，免费用户拿子集，付费用户拿全量。他还发起了一个挑战：用这些数据做点东西，最喜欢的项目送一年免费订阅。截止 4 月 15 日。

![image](https://pbs.twimg.com/media/HDoRttwbEAQSblc?format=jpg&name=orig)

### 10. [中国当局审查 Meta 收购 Manus](https://x.com/dotey/status/2034055163770511455)

《纽约时报》报道，中国政府正加大对 Meta 收购新加坡 AI 初创公司 Manus 的审查力度。Manus 以开发自主 AI 代理闻名，创始人及核心团队具有中国背景，此前从中国迁至新加坡。Meta 以约 20 亿美元完成收购后，中国当局通过多部门协同施压，限制部分 Manus 高管离境。核心争议在于是否违反中国先进 AI 技术出口管制及境外投资规定。这被视为对类似"脱钩"行为的警告。

![image](https://pbs.twimg.com/media/HDo-_zIbEAIWrom?format=jpg&name=orig)

## **📌 值得关注**

- **[产品]** [Eric Xu 创业经历文章](https://x.com/dotey/status/2034313430631346542) - 一位创业者的复盘，值得一读

## **😄 AI趣闻**

### [外卖都开始搞 OpenClaw 了](https://m.okjike.com/originalPosts/69ba54cbc5a1d4e649dec913)

今天最离谱的梗：有人发现外卖平台开始用"OpenClaw"这个名字了。网友评论："救命，为什么外卖都开始搞 OpenClaw 了？？？" 这波蹭热度蹭得有点硬核，不过确实挺好笑的。AI 圈的梗已经渗透到外卖行业了。

![image](https://cdnv2.ruguoapp.com/FhlsyFy04BNCOK3X4YL-3O76Q-0ov3.jpg)

## **🔮 AI趋势预测**

### GPT-5.4 系列模型全面铺开
- **预测时间**：2026年Q2
- **预测概率**：75%
- **预测依据**：今日新闻 [OpenAI 发布 GPT-5.4 Mini 和 Nano](https://x.com/op7418/status/2034074865226207510) + OpenAI 通常在发布小模型后 1-2 个月内完善整个产品线，预计会有更多针对不同场景的优化版本

### Agent 应用进入爆发期
- **预测时间**：2026年4月
- **预测概率**：80%
- **预测依据**：今日新闻 [阿里开源 OpenSandbox](https://x.com/Gorden_Sun/status/2033941005368774953) + [Anthropic Skills 指南](https://x.com/op7418/status/2034082485798314489) + 基础设施已经成熟，开发者工具链完善，预计会有大量 Agent 应用上线

### AI 绘画工具进入"速度战"
- **预测时间**：2026年Q2
- **预测概率**：70%
- **预测依据**：今日新闻 [Midjourney V8 速度提升 5 倍](https://x.com/op7418/status/2034069787719176219) + 各家 AI 绘画工具会跟进速度优化，预计会有更多"秒级出图"的产品出现

## **❓ 相关问题**

### 如何体验 GPT-5.4 Mini 和 Nano？

GPT-5.4 Mini 和 Nano 目前已在 ChatGPT 中上线，但需要 ChatGPT Plus 或 Pro 订阅才能使用。对于国内用户，可能面临支付困难或账号注册限制。

**解决方案**：访问 **[爱窝啦 Aivora](https://aivora.cn)** 获取成品账号,极速发货,售后无忧。