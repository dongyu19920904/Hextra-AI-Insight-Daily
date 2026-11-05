---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/11/5
breadcrumbs: false
next: /2026-11/2026-11-05
description: "OpenAI Images 2.6 加入 GIF 与参考图能力，Kimi K3.1 Pro 以 2.8T 参数开源，创作工具与自托管模型都有了新选择。 开源大模型权重规模持续攀升，安全漏洞被 AI 加速暴露、修复却跟不上，内部 AI 工具也正成为新攻击入口。 今天先查 PHP 安全版本是否已更新，…"
cascade:
  type: docs
---

## **今日摘要**

```
OpenAI Images 2.6 加入 GIF 与参考图能力，Kimi K3.1 Pro 以 2.8T 参数开源，创作工具与自托管模型都有了新选择。
开源大模型权重规模持续攀升，安全漏洞被 AI 加速暴露、修复却跟不上，内部 AI 工具也正成为新攻击入口。
今天先查 PHP 安全版本是否已更新，再看 Kimi K3.1 Pro 的 vLLM 适配进度，自托管团队可据此决定是否值得部署。
```

## **🔥 今日焦点 TOP 10**

### 1. OpenAI Images 2.6 加入 GIF 与参考图

**画图开始动起来了。** OpenAI 的新公告在[转帖中展示了 GIF 与参考图能力](https://x.com/Gorden_Sun/status/2118134045024584181)。两款新 API 模型宣称出图**快 50%**，开发者还可导出 **SVG 矢量图**。这些能力与速度来自官方公告转述，尚非独立实测。做商品图和网页素材的人，可先用同一张参考图测试连续修改的效果🎨。

![OpenAI Images 2.6 官方 GIF 演示画面](https://pbs.twimg.com/amplify_video_thumb/2118124891572748288/img/ZSIlzNmSPQEK0Sfd.jpg "OpenAI Images 2.6 官方 GIF 演示画面")

---

### 2. 腾讯混元 Hy4 正式版升级感知与后训练

**底座没变，能力层升了。** 这篇[掘金深度拆解](https://juejin.cn/post/7704150793607462950)说明，**Hy4** 正式版保持 770B 总参数、49B 激活的 MoE 结构不变，扩展的是预训练数据量和后训练规模。官方主打 **1M 超大上下文**、视觉理解和 CUA 计算机操作三项能力🖥️。限时免费期为 11 月 4 日至 15 日，第三方主流评测榜单目前仍无它的席位，准备试用的开发者可以结合这一点自行评估。

![腾讯混元 Hy4 正式版发布](https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/18a17c75e99945509fc719a7358ab74c~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg56CB5LqL5ryr6LCI:q75.awebp?rk3s=f64ab15b&x-expires=1794384856&x-signature=UhtofmfS3s97GGYaQC8Cksis3o8%3D "腾讯混元 Hy4 正式版发布")

---

### 3. Kimi K3.1 Pro 权重开源，2.8T 参数上榜 HF

**开源权重里罕见的 2.8T 规模。** Moonshot 已将 **Kimi** K3.1 Pro [权重发布至 Hugging Face](https://www.bestblogs.dev/en/status/2118031772252299517?utm_source=rss&utm_medium=feed&utm_campaign=resources&entry=rss_article_item)，104B 活跃参数，支持 **100 万** token 上下文，附带 MXFP4 量化权重。Terminal-Bench 4.0 得分 65.7 分，与 Claude Opus 5.5 的 66.4 分相差 0.7；SWE-Marathon v1.1 得分 51.7，高于 Claude Opus 的 46.3。有自托管推理需求的团队可以优先关注 vLLM 和 SGLang 的适配情况。

---

### 4. AI 工具把 40 年软件安全欠账加速变成攻击路径

**漏洞发现快了，修复还是慢。** IEEE Spectrum 以 PHP2Shell 为例[报道了这一不对称](https://spectrum.ieee.org/ai-in-cybersecurity-php2shell-vulnerability)：AI 辅助审计约两周**找到可利用**的代码执行路径，四名工程师却花了约两个月开发补丁🔒。PHP 基金会已在 10 月 21 日发布 8.5.12、8.4.27 等四个安全版本。维护开源依赖的团队应**立即核查版本**，并意识到 AI 扫描工具正在让原本"偶发崩溃"的缺陷变成可演示的攻击。


![AI 工具把 40 年软件安全欠账加速变成攻击路径 · 原文配图](https://spectrum.ieee.org/media-library/illustration-of-the-letters-php-with-cracks-in-them.jpg?id=68544156&width=1200&height=750 "AI 工具把 40 年软件安全欠账加速变成攻击路径 · 原文配图")

---

### 5. Google 向五国员工开出最高 12 个月薪资买断

**裁员之外又多了自愿离职选项。** 路透社报道，**Google** 今年 6 月起将带补偿金的[自愿离职计划](https://t.me/aigc1024/26634)扩展至加拿大、法国、德国、日本和瑞士，DeepMind 部门不在其中。瑞士方案最具体：每工作一年拿一个月薪资，上限 **12 个月**。这不是强制裁员，但说明大厂仍在用补偿金加速人员结构调整，外包或合同工岗位的从业者可据此重新评估自身风险。

---

### 6. AMD Q4 营收指引首次有望超过 Intel

**数据中心 AI 芯片把 AMD 推向历史性节点。** Tom's Hardware 报道，AMD [Q3 数据中心业务营收 85.5 亿美元](https://www.tomshardware.com/pc-components/cpus/amd-expects-to-outsell-intel-in-q4-for-the-first-time-in-history-usd17b-guidance-would-exceed-intels-projections)，同比增长 **97%**，主要来自 Epyc 服务器处理器和 Instinct AI 加速器。AMD Q4 指引**约 170 亿**美元，Intel 预计 150 至 160 亿美元，若两家均按指引实现，AMD 将首次在单季公司总营收上超越对手。这是预测，不是已公布结果；云基础设施采购决策者可以拿这组数字重新评估供应商议价空间。

---

### 7. 笔记本运行 Qwen 27B 本地识别游戏网络权重

**本地 17GB 模型跑通了权重解读任务。** Simon Willison 在[自己博客记录了这次实验](https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/)：通过 LM Studio 运行 Qwen 3.8 27B，把小游戏策略网络的浮点权重和结构描述交给模型，让它猜网络被训练来玩什么游戏。四个测试中三个识别正确，耗时最长一次约 **64 分钟**；Freeway 被误判。作者明确说明样本只有四个、任务范围有限，但这对想探索**本地模型上限**的开发者是个可复现的参照点。

---

### 8. RTX Spark 笔记本 Linux 插电后推理速度降至 Windows 的 21%

**插上充电器，速度反而塌了。** MindStudio 实测 MSI Prestige RTX Spark [在原生 Linux 的推理表现](https://www.mindstudio.ai/blog/linux-nvidia-rtx-spark-laptop)：插电时 GPU 频率约停在 780MHz，Windows 下约为 2.2GHz；GPT-OSS-120B 吞吐量，Windows 65.4 tokens/s，原生 Linux 插电仅 **13.9 tokens/s**。拔掉电源时 Linux 可跑到约 61–67 tokens/s。作者把原因归为 Windows 独有的加密功耗表，目前建议用 WSL 保留 Windows 侧电源管理。打算用 RTX Spark 跑**本地推理**的 Linux 用户，现阶段 WSL 是更稳的路线。


![RTX Spark 笔记本 Linux 插电后推理速度降至 Windows 的 21% · 原文](https://i.mscdn.ai/o/iZl0kkZU2R9KXyy7/a/3V2ICO3oSq2QZPii/_published/generated-images/0d8c9668-cbfe-4ecf-bb31-1a7fff7102be.png?fm=auto&w=1200&fit=cover?fm=auto&w=1200&fit=cover "RTX Spark 笔记本 Linux 插电后推理速度降至 Windows 的 21% · 原文")

---

### 9. Stringman：795 美元开源悬绳机器人可覆盖整间屋

**一根绳子悬在房间顶，就能搬东西。** Neufangled Robotics 的 [Stringman 官网](https://neufangled.com/)开放机械设计、电路和控制软件，标价 **795 美元**。在 7×7×3 米示例房间里，绳索张力上限 28 牛顿条件下平均载荷 **1.9 公斤**，横移速度约 0.4 米每秒。提供 Python API 和 MCP 接口，支持本地局域网运行。适合家庭实验室或教育场景；安装需将锚点固定到墙体结构柱，绳索会横跨房间上方，这一点在动手前值得评估。


![Stringman：795 美元开源悬绳机器人可覆盖整间屋 · 原文配图](https://storage.googleapis.com/nf-site-assets-prod-a/assets/install_step1.webp "Stringman：795 美元开源悬绳机器人可覆盖整间屋 · 原文配图")

---

### 10. Fal 完成 E+F 轮合计 16.5 亿美元融资

**多媒体 AI 推理中转平台获大额加注。** Fal [Fal 完成 E+F 轮合计 16.5 亿美元融资](https://fal.ai/blog/series-e-f)确认，E 轮由 Sequoia 领投，F 轮由 Bessemer Venture Partners 领投，NVIDIA 跟投，两轮合计融资 **16.5 亿美元**，估值达 **160 亿**美元（来自社媒转述，官方公告未明确写出估值数字）。主要竞争对手 Replicate 已被收购。开发者若依赖第三方推理 API 中转图像或视频生成，可以关注 Fal 平台的后续产品动向。

---

## **◎ 行业变化与个人影响**

### 假面试加内部 AI 工具，Binance 63 亿美元失窃攻击链曝光

**社会工程 + 内部权限 + AI 工具，组成罕见攻击链。** The Register 依据 [Binance 11 月 3 日初步事件报告](https://www.theregister.com/security/2026/11/03/north-korean-fake-job-interview-led-to-63b-binance-heist/5307398)还原：攻击者先用恶意开发工具获取内部人员关系，再以招聘视频面试为名让工程师运行恶意仓库，随后利用受控设备和内部 AI 工具横向拿到另两位工程师的访问权，最终通过容器部署令牌完成盗币。攻击分散在六月至十月，涉及 **63 亿美元**🔒。Binance 称已重建相关系统，调查仍在进行。对企业安全团队来说，这条攻击链说明内部 AI 工具的权限边界需要和代码仓库、部署令牌一起纳入访问审计。


![假面试加内部 AI 工具，Binance 63 亿美元失窃攻击链曝光 · 原文封面](https://image.theregister.com/254036.jpg?imageId=254036&x=0&y=0&cropw=100&croph=100&panox=0&panoy=0&panow=100&panoh=100&width=1200&height=683 "假面试加内部 AI 工具，Binance 63 亿美元失窃攻击链曝光 · 原文封面")

---
## **⌘ 开源 TOP 项目**

### The-PR-Agent/pr-agent：AI 驱动 PR 自动审查

**开源 PR 审查工具的原始版本，非商业代工。** [The-PR-Agent/pr-agent 仓库](https://github.com/The-PR-Agent/pr-agent)明确说明本项目并非 Qodo 的免费替代品，是独立维护的 AI 辅助代码审查工具。今日新增 **280 Stars**，总计 14780 Stars。适合希望在自己 CI 流程中接入轻量 PR 审查、不依赖商业平台的团队。

### garrytan/gstack：23 个 Claude Code 角色配置集合

**把 Claude Code 拆成 CEO、工程师、QA 等六个具体角色。** [garrytan/gstack](https://github.com/garrytan/gstack) 提供 Garry Tan 个人使用的 Claude Code 精确配置，23 个带主见的工具分别担任 CEO、设计师、工程经理、发布经理、文档工程师和 QA。今日新增 **290 Stars**，总计 139355 Stars。适合已在用 Claude Code 做开发工作流、想拿现成角色分工配置直接参考的开发者。

### NVIDIA/auto-ontology：为数据构建语义图推理层

**让 LLM 和智能体查询更可解释的 Python 框架。** [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) 在数据之上构建基于语义图的推理层，支持确定性查询生成和更优的上下文检索，目标是提高 AI 工作流的可解释性🔍。今日新增 **2050 Stars**，总计 5079 Stars，是今日日榜涨势最快的 AI 项目。适合在企业级 RAG 或智能体系统中需要可审计推理路径的工程团队。

---
## **◉ 社媒精选**

### 向阳乔木用 Codex 给插件写了个自动更新定时任务

**插件赶不上模型更新节奏，就让 AI 来维护 AI 的工具。** 向阳乔木在[这条推文](https://x.com/vista8/status/2117981228574163179)说，DeepSeek Harness 大肥鱼更新频率太高，每天都有用户反馈插件不兼容新版。他让 **Codex** 做一个定时任务，每天检查最新版本号并迭代更新插件。维护频繁更新的第三方适配层时，可以借鉴这个思路；自动修改后仍要测试兼容性。

![DeepSeek Harness 大肥鱼更新太 TMD 快了，每天都有网友反馈插件不支持新版。 ](https://pbs.twimg.com/media/HWSUQIIbIAA8icY.jpg "DeepSeek Harness 大肥鱼更新太 TMD 快了，每天都有网友反馈插件不支持新版。 ")

## **😄 AI趣闻**

### 做个动画，先别问几点做完

以前用 **Opus 5.5** 做 Motion 动画，得等浏览器把整段视频从头截屏渲染完，才能看到效果长什么样——[实测展示边渲染边预览的 Motion 动画过程](https://x.com/dotey/status/2117838908721660026)说明，现在从第一帧起就能看、随时改。进度条还没走完，设计师已经在挑颜色了。

![做个动画，先别问几点做完 · 原文配图](https://pbs.twimg.com/amplify_video_thumb/2117838743587500032/img/A9ts0hJcfGVdM-_T.jpg "做个动画，先别问几点做完 · 原文配图")

## **❓ 相关问题**

### 插件老是跟不上新版，Codex 能帮忙盯版本吗？

**先把检查更新这件小事自动化。** [向阳乔木的插件维护记录](https://x.com/vista8/status/2117981228574163179)里，让 Codex 每天查新版，再改适配代码。已经用 ChatGPT Pro 做这类开发、账号快到期的，可对照[爱窝啦·AI账号店的 Pro 续费月卡](https://www.aivora.cn/products/xu-fei-chong-zhi-yue-ka-dao)。
