---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/8/27
breadcrumbs: false
next: /2026-08/2026-08-27
description: "OpenAI 自研芯片能效比碾压英伟达，具身智能 Noe-0 跳过遥操数据直接控制机器人，Stability AI 拿版权方资金后开源路线可能终结。 产品更新、开源工具和行业变化都在争夺同一件事：用更低成本把 AI 真正塞进生产环节，无论是推理、控制还是内容生成。 今天先看智谱 Ox-Alpha…"
cascade:
  type: docs
---

## **今日摘要**

```
OpenAI 自研芯片能效比碾压英伟达，具身智能 Noe-0 跳过遥操数据直接控制机器人，Stability AI 拿版权方资金后开源路线可能终结。
产品更新、开源工具和行业变化都在争夺同一件事：用更低成本把 AI 真正塞进生产环节，无论是推理、控制还是内容生成。
今天先看智谱 Ox-Alpha 性价比实测和 Apodex 免费文档产出质量，再决定是否调整现有模型选型或任务外包方案。
```

## **🔥 今日焦点 TOP 10**

### 1. OpenAI 自研推理芯片能效比全面超越英伟达

**推理成本降了。** 据即刻用户发布的技术细节，[OpenAI 自研推理芯片能效比全面超越英伟达](https://m.okjike.com/originalPosts/6a8e598fb3ac5118b34a5c8e)。在相同功耗下，它的每瓦吞吐量**碾压英伟达 Blackwell**，跑 DeepSeek R1 可达 **700+ token/s/用户**。这款芯片从 2024 年中开始设计到流片只用了 **16 个月**，是通用推理芯片，能跑各种第三方模型。量产爬坡会在 2027 年开始，大部分产能预计明年年底铺开。

![OpenAI 芯片性能对比](https://cdnv2.ruguoapp.com/FlJSuNyZrvD8f7M4fKCvrNNWOVvvv3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient "OpenAI 芯片性能对比")

### 2. 具身智能模型 Noe-0 无需本体数据就能控制机器人

**遥操瓶颈有解了。** 据机器之心报道，[具身智能模型 Noe-0 无需本体数据就能控制机器人](https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651052471&idx=1&sn=d3b4a21fc8f28738b7e9fd7606a75d83)。模型通过视频理解任务目标，直接生成动作序列，不依赖特定机器人的历史数据。这意味着新硬件团队可以跳过耗时的遥操数据采集环节，直接部署控制策略。

![Noe-0 模型架构](https://wechat2rss.bestblogs.dev/img-proxy/?k=316244be&u=https%3A%2F%2Fmmbiz.qpic.cn%2Fsz_mmbiz_jpg%2F5L8bhP5dIqEpXwHicxmc5fcic9Jib8kMaFRNC5eeI0msxNeC4FV9RtqLP6GnJ4ia3IFlb48yNtwssJiaVwtxC4UcLMicicicDvNHyU5ibFZnqv0Hssfg%2F0%3Fwx_fmt%3Djpeg "Noe-0 模型架构")

### 3. 智谱 Ox-Alpha 价格低于 V4 Flash 但视觉能力完爆

**性价比新标杆出现。** 歸藏在推文中实测发现，[智谱 Ox-Alpha 价格低于 V4 Flash 但视觉能力完爆](https://x.com/op7418/status/2092655955037376886)，但**视觉理解能力完爆后者**。测试视频显示，**Ox-Alpha** 在图像细节识别和多模态推理任务中表现明显更强。正在选型多模态 API 的开发者可以今天重新对比一次成本与效果。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2092655822010720256/vid/avc1/1080x1440/o1uQiImeNn6bXjYL.mp4?tag=29"></video>

### 4. Chrome 内置 Gemini 支持框选屏幕区域精准提示

**提示词更准了。** Google **Gemini** 官方演示显示，[Chrome 内置 Gemini 支持框选屏幕区域精准提示](https://x.com/GeminiApp/status/2092742955677466831)。用户不必手动描述页面内容，直接圈出想调整的部分就能生成精确指令。这个功能对需要频繁修改设计稿或网页布局的用户特别实用。

![Chrome Gemini 框选功能](https://pbs.twimg.com/media/HQrHr3VXcAA0ldg?format=jpg&name=orig "Chrome Gemini 框选功能")

### 5. T3 Code 把 Agent 和模型选择器整合到一起

**切换模型不用跳界面了。** 歸藏在推文中提到，[T3 Code 把 Agent 和模型选择器整合到一起](https://x.com/op7418/status/2092447707378123126)。用户可以在同一个界面快速切换不同能力的模型和 Agent 配置，不必在多个窗口间跳转。**Code** Pilot 已经参考这个思路更新了交互。

![T3 Code 选择器界面](https://pbs.twimg.com/media/HQneBB2a0AAtIFQ?format=jpg&name=orig "T3 Code 选择器界面")

### 6. Apodex 能把复杂科研任务推进到可检查交付物

**调研任务交给 AI 跑完了。** 向阳乔木在推文中实测，[Apodex 能把复杂科研任务推进到可检查交付物](https://x.com/vista8/status/2092391737675370948)。他用它生成了 **8 万字讲故事技巧课程**、**6 万字 Linux 学习手册**，以及上传 CSV 数据后的洞察分析报告。系统会动态决定何时汇总，所有中间产出可追溯。适合需要处理大量文献、数据和深度调研的科研与分析工作。

![Apodex 任务执行界面](https://pbs.twimg.com/media/HQmrDknaYAAJ86l.jpg "Apodex 任务执行界面")

### 7. Apodex 免费提供部分高质量文档下载

**能直接看到产出质量。** 向阳乔木在推文中分享，[Apodex 免费提供部分高质量文档下载](https://x.com/vista8/status/2092392285464129855)。这些文档质量很高，涵盖安装配置、插件使用和实际应用技巧。注册就送积分，能用于**免费测试文献核查**、数据分析等复杂任务。

![Apodex 文档示例](https://pbs.twimg.com/media/HQmro8laYAAiI6_.jpg "Apodex 文档示例")

### 8. 某开发者用 AI 自动剪辑出完整电影解说

**剪辑流程跑通了。** 向阳乔木在推文中展示，[他用 AI 自动生成了《楚门的世界》电影解说视频](https://x.com/vista8/status/2092607385902981620)。TTS 使用开源模型，画面与解说词同步完成。他提到如果换用更好的 TTS，效果会更接近人工制作。正在尝试影视解说**自动化的创作者**可以参考这个工作流。

### 9. 某 GitHub 项目一周拿下两万 Stars

**增长速度很快。** 某即刻用户在帖子中提到，[某 GitHub 项目一周拿下两万 Stars](https://m.okjike.com/originalPosts/6a8efaec141b85b292398da8)。具体项目名和功能未公开，但增长速度说明社区对 DeepSeek 生态工具的需求很强。

![项目 Stars 增长截图](https://cdnv2.ruguoapp.com/Fpq58mVMF_P9WnOAV1M7pRmSXzBvv3.png "项目 Stars 增长截图")

### 10. Telegram 用户计划出租闲置相机设备

**AI 让设备吃灰了。** 某 **Telegram** 用户在频道中表示，[Telegram 用户计划出租闲置相机设备](https://t.me/aigc1024/23634)。他打算支摊出租或出镜做视频，把设备用起来。这条帖子反映了部分创作者工作流向 AI 工具转移后的真实状态。

---

## **⚡ 产品与功能更新**

### 精心整理的 RSS 订阅源合集上线

**一键订阅 718 个优质信源。** Telegram 频道分享了一个[覆盖 AI、工程、新闻、研究等 14 个类别的 RSS 订阅源合集](https://t.me/aigc1024/23621)。每个源都经过三轮实测验证能正常抓取，还精选出"精华 200"方便快速上手。下载 OPML 文件导入任意阅读器即可批量订阅，适合需要追踪多领域动态的从业者。

---
## **◎ 行业变化与个人影响**

### Stability AI 融资 7600 万美元并与版权方深度合作

**开源路线可能结束。** 据 Gorden Sun 转述 Variety 报道，[Stability AI 完成 7600 万美元 B 轮融资](https://x.com/Gorden_Sun/status/2092444046275027283)，投资方包括**环球音乐、华纳音乐、索尼音乐和 EA**。双方签订合作协议，Stability AI 将使用这些巨头的正版曲库和 IP 训练创作者专用工具。自 2024 年新 CEO 上任以来累计融资 **2.32 亿美元**，但未来战略重点是联合版权方开发受法律保护的工具，估计不会再开源。

![Stability AI 融资公告](https://pbs.twimg.com/media/HQk5OrZXMAAOGmx?format=png&name=orig "Stability AI 融资公告")

---
## **⌘ 开源 TOP 项目**

### anthropics/claude-plugins-official：官方 Claude Code 插件目录

**高质量插件都在这。** [anthropics/claude-plugins-official 是 Anthropic 官方管理的插件目录](https://github.com/anthropics/claude-plugins-official)，收录了经过审核的 Claude Code 高质量插件。今日新增 **308 Stars**，累计 **34,358 Stars**。正在使用 Claude Code 的开发者可以从这里找到稳定可靠的扩展工具。

### DietrichGebert/ponytail：让 AI 代理像懒散高级开发者一样思考

**最好的代码是不写的代码。** [DietrichGebert/ponytail 让 AI 代理模拟房间里最懒的高级开发者思维](https://github.com/DietrichGebert/ponytail)，优先寻找不写代码就能解决问题的方案。今日新增 **1,598 Stars**，累计 **112,561 Stars**。适合希望减少不必要代码、提高决策质量的团队试用。

---
## **◉ 社媒精选**

### 腾讯开源多模态 Embedding 模型 WeMM-Embedding-9B

**同量级表现最优。** Gorden Sun 在推文中介绍，[腾讯开源了基于 Qwen3.5 构建的 9B 参数多模态嵌入模型 WeMM-Embedding-9B](https://x.com/Gorden_Sun/status/2092541722165440730)。模型支持文本、图像、视频、视觉文档及图文视频交错输入，不支持音频。在同量级模型中表现最优，已在 Hugging Face 公开。

![WeMM-Embedding-9B 性能对比](https://pbs.twimg.com/media/HQozme3b0AA_ule?format=jpg&name=orig "WeMM-Embedding-9B 性能对比")

### Chrome 内置 Gemini 支持框选屏幕实时预览调整效果

**调整前能看到效果了。** Google Gemini 官方演示显示，[Chrome 中的 Gemini 可以框选屏幕部分区域，实时预览调整后的效果](https://x.com/GeminiApp/status/2092718702550790207)。用户不必反复修改提示词试错，直接看到结果再决定是否应用。适合需要快速迭代视觉方案的设计师和前端开发者。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2092661121765289984/vid/avc1/1080x1080/q7sh0eL0-Tu2DVSs.mp4?tag=29"></video>

---

## **😄 AI趣闻**

### OpenAI 自研芯片跑起了《毁灭战士》

**OpenAI** 公布了自研推理芯片 Jalapeño 的测试结果，[这块芯片不仅能跑 DeepSeek R1 和 Kimi 2.5](https://x.com/op7418/status/2092449498245272002)，甚至还能运行《毁灭战士》游戏。从设计到流片只用了 **16 个月**，每瓦吞吐量全面碾压英伟达 Blackwell，**响应速度提升一大半**。芯片是通用的，谁的模型都能跑——就是不知道《毁灭战士》算不算大语言模型。

## **❓ 相关问题**

### OpenAI 自研芯片 Jalapeño 国内能用吗?

OpenAI 的 Jalapeño 芯片目前仅为工程样品阶段，量产爬坡计划在 2027 年开始，大部分产能预计在 2027 年底铺开。这款芯片主要用于 OpenAI 自有数据中心的推理服务优化，不直接面向个人用户或第三方数据中心销售。国内用户能否体验到由该芯片支持的服务，取决于 OpenAI 未来在中国市场的服务可用性和合规进展;目前 OpenAI 的 API 服务在国内需通过特定渠道访问，具体可用状态以官方公告为准。

需要进一步比较当前公开的 AI 账号或订阅服务时，可查看 [**爱窝啦·AI账号店**](https://www.aivora.cn/)；商品、价格与可用状态以官网实时页面为准。