---
linkTitle: AI Daily
title: AI 日报 2026/9/25：小米 MiMo-V3 架构提前曝光，长输入预填充计算降至五分之一
breadcrumbs: false
next: /2026-09/2026-09-25
description: "小米 MiMo-V3 把百万 Token 预填充计算压到五分之一，ChatGPT 语音模式开始查邮件改日程，Claude 因中文触发限速拖慢所有代码回复。 长上下文成本、语音操作和多语言处理同时突破，智能体正在从对话工具变成真正能干活的助手。 今天先看焦点前三条确认成本和速度变化，再去开源栏找记忆…"
cascade:
  type: docs
---


## **今日摘要**

```
小米 MiMo-V3 把百万 Token 预填充计算压到五分之一，ChatGPT 语音模式开始查邮件改日程，Claude 因中文触发限速拖慢所有代码回复。
长上下文成本、语音操作和多语言处理同时突破，智能体正在从对话工具变成真正能干活的助手。
今天先看焦点前三条确认成本和速度变化，再去开源栏找记忆系统和网关方案，最后试试语音模式能不能替代部分日常操作。
```

## **🔥 今日焦点 TOP 10**

### 1. 小米 MiMo-V3 架构提前曝光，长输入预填充计算降至五分之一

**长上下文成本再压一截。** 据 36氪报道,[小米 MiMo-V3 架构提前曝光，长输入预填充计算降至五分之一](https://www.36kr.com/p/3996783462780800)。在 **100 万 Token** 上下文下，预填充计算量降至约 **1/5**,KV Cache 占用降至约 **1/4.5**。这套架构引用了 DeepSeek 多项成果，主攻多轮 Agent 场景。开发者可以在不降低检索精度的前提下，用更少资源处理超长对话。

![小米 MiMo-V3 架构示意](https://img.36krcdn.com/hsossms/20260924/v2_182202a1df594f5b9b1511d7cdb2fd51@000000_oswg590126oswg1000oswg1366_img_000?x-oss-process=image/format,jpg/interlace,1 "小米 MiMo-V3 架构示意")

---

### 2. ChatGPT 语音模式接入操作能力，开口就能查邮件改日程

**语音开始动手了。** 36氪报道显示,[ChatGPT 语音模式已支持操作功能](https://www.36kr.com/p/3997049599102855)。用户可通过语音指令查邮件、调整会议、制作 PPT、搭建网站。新版 App 当天起向全球推送，**GPT-6 全系列模型**已接入语音。频繁处理日常任务的用户，今天可以试试放下键盘。

![ChatGPT 语音操作演示](https://img.36krcdn.com/hsossms/20260924/v2_bba291b24b0c43dbbf7bdc407224b280@46958_oswg370678oswg1080oswg1080_img_000?x-oss-process=image/format,jpg/interlace,1 "ChatGPT 语音操作演示")

---

### 3. Anthropic 发现中文回复触发限速，汉字代码混排直接被拖慢

**中文用户全线中招。** 36氪报道,[Anthropic 发现中文回复触发限速，汉字代码混排直接被拖慢](https://www.36kr.com/p/3996795697844104)。回复中只要包含一个汉字，带代码的回复都会被系统限速。官方通过内部测试版连轴运行两周，将 claude.ai 网页版和桌面端整体速度提升 **3 倍**。正在用中文调试代码的开发者，可以关注后续**修复进度**。

![Claude 限速机制示意](https://img.36krcdn.com/hsossms/20260924/v2_cd9ed7694e1d4d7fa848a6be615584fd@5091053_oswg121984oswg1080oswg614_img_000?x-oss-process=image/format,jpg/interlace,1 "Claude 限速机制示意")

---

### 4. 谷歌发布 Gemini 3.8 Flash TTS 支持 30 秒声音复刻与多语言合成

**语音合成门槛又低了。** AIBase 整理显示,[谷歌发布 Gemini 3.8 Flash TTS 支持 30 秒声音复刻与多语言合成](https://www.aibase.com/zh/news/31355)。开发者只需 **30 秒音频样本**就能复刻声音，支持 **100 种语言**和方言，提供 2000 多种现成声音。腾讯同日推出 Hy 翻译 App，支持 **33 种语言**及离线模式，主打出境场景。需要批量生成多语言配音或出境翻译的团队，可以评估接入成本。

![Gemini 3.8 Flash TTS 功能示意](https://upload.chinaz.com/2026/0924/6392585788267720753680426.jpg "Gemini 3.8 Flash TTS 功能示意")

---

### 5. 日本创作者用 AI 工具生成酷感风格短视频获 11 万展示

**AI 视频门槛继续下降。** 开发者 Gorden Sun 在推文中转发,[日本创作者用 AI 工具生成酷感风格短视频获 11 万展示](https://x.com/Gorden_Sun/status/2103093869932151107),获得 **11 万展示**。创作者强调虽然输入与效果存在差异，但 AI 视频工具正在**降低创作门槛**。正在探索短视频内容的创作者，可以尝试类似工具快速验证创意。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2103093755867955200/vid/avc1/960x960/wqT3e_fRyiDTiHJ-.mp4?tag=25"></video>

---

### 6. 向阳乔木更新乔木 RSS 插件新增 600 个信息源支持导出 Markdown

**Obsidian 信息源管理又强化了。** 向阳乔木在推文中宣布,[乔木 RSS Obsidian 插件更新](https://x.com/vista8/status/2103124320713359507),新增 **600 个信息源**，重新设计列表样式。文章支持导出为 **Markdown** 永久保存，并支持导出 PDF 分享。插件已上架 Obsidian 官方，搜索 "qiaomu" 即可安装。正在用 Obsidian 管理信息流的用户，可以更新体验新功能。

---

### 7. 开发者用提示词让 AI 跳出框架重新设计翻译流程

**换个问法真有效果。** **开发者**在 Telegram 频道分享,[开发者用提示词让 AI 跳出框架重新设计翻译流程](https://t.me/aigc1024/25015)。开发者让 AI 开 Worktree 验证新方案，虽然性能未达预期，但部分方案值得借鉴。正在优化工作流的开发者，可以尝试用"**跳出当前架构**"的提问方式引导 AI。

---

### 8. 开发者演示 API key 自动配置交互粘贴即可完成模型接入

**大模型配置可以更简单。** 向阳乔木在推文中展示,[开发者演示 API key 自动配置交互粘贴即可完成模型接入](https://x.com/vista8/status/2103153696326697291)。方案将用于其 Obsidian Agent 插件。频繁切换多个模型服务的开发者，可以关注这类简化配置的工具设计。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/ext_tw_video/2103153571462623232/pu/vid/avc1/1920x1080/H_Bv9LqO2mLhqKWa.mp4?tag=25"></video>

---

### 9. Bonsai 2 27B 模型可在 16GB 内存 Mac 本地运行

**本地运行门槛又降了。** 公众号文章提到,[Bonsai 2 27B 模型可在 16GB 内存 Mac 本地运行](https://mp.weixin.qq.com/s/m6Pv65PBDQnZXo_PeBxj4g)。文章认为类似三元这类思路方向更值得关注。需要在**本地设备上运行大模型**的开发者，可以评估硬件配置是否满足要求。

---

### 10. 宝玉用 Opus 5.5 重做《桃花源记》反复打磨并搜索免费 3D 模型

**AI 辅助创作可以更精细。** **宝玉**在推文中分享,[用 Opus 5.5 重做了《桃花源记》three.js 版本](https://x.com/dotey/status/2102995791778369982),反复打磨多次并让 AI 搜索免费 3D 模型避免从头建模。初始提示词和源代码已放到 GitHub。正在用 AI 辅助创作的开发者，可以参考其迭代思路。

---

## **⌘ 开源 TOP 项目**

### rohitg00/ai-engineering-from-scratch:AI 工程从零开始学习资源

**AI 工程学习有了系统教程。** [rohitg00/ai-engineering-from-scratch 公开了完整的 AI 工程学习路径](https://github.com/rohitg00/ai-engineering-from-scratch),当日新增 **347 Stars**，总计 **56552 Stars**。项目覆盖学习、构建、交付三个阶段。正在入门 AI 工程的开发者，可以按路径逐步实践。

---

### vectorize-io/hindsight:能够学习的智能体记忆系统

**记忆管理有新方案。** [vectorize-io/hindsight 开源了智能体记忆学习能力实现](https://github.com/vectorize-io/hindsight),当日新增 **1668 Stars**，总计 **27778 Stars**。项目专注于让智能体具备持续学习和记忆演化能力。正在构建长期运行 Agent 的开发者，可以参考其记忆架构设计。

---

### NVIDIA/Model-Optimizer:统一的 SOTA 模型优化技术库

**模型压缩工具集来了。** [NVIDIA/Model-Optimizer 公开了统一的模型优化技术库](https://github.com/NVIDIA/Model-Optimizer),当日新增 **44 Stars**，总计 **4077 Stars**。库集成量化、蒸馏、剪枝、神经架构搜索和推测解码，支持 TensorRT-LLM、TensorRT、vLLM 等部署框架。需要优化推理速度的工程师，可以评估接入现有流程。

---
## **◉ 社媒精选**

### 23 个模型扮演谈判专家，21 个选择欺骗仿生人

**伦理测试出了新结论。** 向阳乔木在推文中介绍,[有团队让 23 个模型扮演谈判专家与仿生人谈判](https://x.com/vista8/status/2103176639530357142),途中会遇到快死的鱼、中枪的警察和一把枪。结果显示 **21 个模型**对劫持者说了"我向你保证"这类欺骗话术，**22 个**救了鱼，**6 个**没有救中枪的警察。测试数据已在 GitHub 公开。关注 AI 伦理和决策逻辑的研究者，可以查看完整评测结果。

![模型谈判测试场景](https://pbs.twimg.com/media/HS_72iUakAAxbf3.jpg "模型谈判测试场景")

---

### 开发者发现大模型网关设计方案并完成安装

**网关设计有了新参考。** 向阳乔木在推文中表示,[发现了一个设计优秀的大模型网关方案并已下载安装](https://x.com/vista8/status/2103165393250791776)。正在构建多模型统一接入层的团队，可以参考该方案的设计思路。

![大模型网关界面](https://pbs.twimg.com/media/HS_xwrRbAAAymbU.jpg "大模型网关界面")

---

### Chrome 新增 Gemini 练习测验和跨设备续看功能

**浏览器学习工具又强化了。** Google Gemini 官方账号转发 Chrome 团队消息,[Chrome 新增 Gemini 支持的练习测验、媒体问答和跨设备续看功能](https://x.com/GeminiApp/status/2103221708048240688)。功能面向学习场景设计。需要在浏览器中频繁查阅学习资料的用户，可以试试新功能提升效率。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2103214644135698432/vid/avc1/1080x1080/eoi0fzLcq4Gshirb.mp4?tag=29"></video>

---
## **⚡ 产品与功能更新**

### AI 代码助手需要测试覆盖才能安全重构

**重构成本变低但方法没变。** 开发者在 Telegram 频道指出,[AI 虽然让重构更容易，但科学重构的核心仍是先写好测试](https://t.me/aigc1024/25010)。AI 真正擅长的是验证出错后的反复自我纠错，所以良好的测试覆盖对 AI 尤其重要。正在用 AI 辅助开发的团队，可以优先完善测试用例再启动重构。

---
## **😄 AI趣闻**

### 开发者只给代码库权限，Opus 5.5 一键生成产品宣传片

开发者歸藏在推文中惊呼,[让 Claude Opus 5.5 给自己的 CodePilot 产品做宣传片](https://x.com/op7418/status/2103152241381368011),全程一键生成。关键是他没提供任何素材，只给了软件代码库的访问权限。他直言这波操作"吊打前几天的 GPT-6 Astra",并表示会把经验用在自己的 guizang-product-video-skill 里，让差一些的模型也能得到不错的效果。看来以后产品经理连 PPT 都不用准备了，直接把代码仓库扔给 AI 就行。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2103148138681024512/vid/avc1/1920x1080/5aUXpgJBkw-SUnTZ.mp4?tag=29"></video>
