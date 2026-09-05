---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/9/5
breadcrumbs: false
next: /2026-09/2026-09-05
description: "GPT-6 Astra被称已进入ChatGPT与Codex，但开放范围、价格和AGI能力仍缺少官方材料核验。 从Grok虚拟机调度Pi到K2公开训练链路，AI正从单模型回答转向可执行、可复现的任务系统。 开发者今天先核实Astra官方入口与额度，再优先试用开源编码智能体的隔离环境。"
cascade:
  type: docs
---


## **今日摘要**

```
GPT-6 Astra被称已进入ChatGPT与Codex，但开放范围、价格和AGI能力仍缺少官方材料核验。
从Grok虚拟机调度Pi到K2公开训练链路，AI正从单模型回答转向可执行、可复现的任务系统。
开发者今天先核实Astra官方入口与额度，再优先试用开源编码智能体的隔离环境。
```

## **🔥 今日焦点 TOP 10**

### 1. 开源编码智能体冲上日榜前列

**开源编码智能体升温。** GitHub 日榜显示，[anomalyco/opencode 已公开核心代码](https://github.com/anomalyco/opencode)。项目今日新增 **345 Stars**，累计达到 **204128 Stars**。它面向需要自动处理编码任务的开发者。使用前仍应自行评估代码执行权限与环境隔离。

---

### 2. Grok 虚拟机开始承载并行 Agent

**虚拟机让 Agent 能并发干活。** 一则实测记录显示，[Grok bot 可在虚拟机内运行 Pi](https://m.okjike.com/originalPosts/6a9b0894756bbb6658bf093d)。用户让它编写代码，再调用虚拟机里的 Pi Agent 和其他模型。这个组合把 **Grok** 从单轮对话界面推向了任务编排。开发者可以重点观察它的权限边界与多 Agent 协作稳定性。

![Grok 虚拟机运行 Pi Agent](https://cdnv2.ruguoapp.com/FnZz1h-kKak5yewj27tWrKd6sksOv3.heic?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/format/jpeg "Grok 虚拟机运行 Pi Agent")

---

### 3. GPT-6 Astra 的 AGI 宣称仍待核验

**Astra 的发布叙事很激进。** 36氪报道，[OpenAI 被指官宣 GPT-6 Astra](https://www.36kr.com/p/3968652629422337)。报道援引**发布会说法**，称其在计算机使用、浏览、软件工程和科学工作等领域刷新 SOTA。素材目前只有媒体报道，没有同步提供 OpenAI 官方公告或文档。读者应把“进入 AGI 时代”视为**发布会宣称**，等待官方能力与评测材料补齐。

![GPT-6 Astra 发布信息](https://img.36krcdn.com/hsossms/20260904/v2_2e42c3b9a2a24750a8893e3cda8984ce@5888275_oswg61763oswg1080oswg252_img_000?x-oss-process=image/format,jpg/interlace,1 "GPT-6 Astra 发布信息")

---

### 4. K2 Horizon 把开源训练过程摊开

**开源范围从模型扩到训练过程。** Gorden Sun 介绍，[K2 Horizon 覆盖六种模型尺寸](https://x.com/Gorden_Sun/status/2095887140928258422)。尺寸从 **0.9B 到 375B-A23B**，并公开训练代码、数据配方、中间版本与测试日志。帖子还称最小版本面向穿戴设备，3.7B 和 7B 可用于手机离线运行。研究人员更适合先检查官方模型页与复现实验，再判断性能是否可靠。

![K2 Horizon 开源模型家族](https://pbs.twimg.com/media/HRYWPClbwAAwSY6?format=jpg&name=orig "K2 Horizon 开源模型家族")

---

### 5. Gemini Pro 可把长视频剪辑交给代码

**视频粗剪可以交给 Colab。** 实测帖展示，[Gemini Pro 可辅助生成视频剪辑代码](https://x.com/vista8/status/2095926261088751663)。流程包括上传原始视频到 Google Drive，并在 Colab 中选择 **T4 GPU** 执行 Python。生成的片段和截图会写回指定文件夹。内容创作者可以先用短视频测试，重点检查高光识别和输出结果。

![Gemini Pro 辅助长视频剪辑](https://pbs.twimg.com/media/HRY4ieraEAA5MM6.jpg "Gemini Pro 辅助长视频剪辑")

---

### 6. Astra 已出现在 ChatGPT 与 Codex

**Astra 的客户端入口出现了。** 一则频道消息称，[Astra 已出现在 ChatGPT 与 Codex](https://t.me/aigc1024/24089)。消息同时建议尚未更新的用户下载安装包**覆盖安装**，但没有给出官方更新页面或可验证的**开放范围**。这个状态不能等同于所有账号都已获得访问权限。使用者应先确认来源与账号权限，再决定是否更新客户端。

---

### 7. 电子学生卡落地但暂未集成 AI

**学生卡联网了，AI 仍缺席。** 频道信息称，[部分学校正在推动电子学生卡](https://t.me/aigc1024/24074)。设备可结合移动网络，提供通话、短信和支付功能，家长还能查看孩子位置。素材明确提到它暂时没有 AI 功能。家长更应先关注定位、支付和未成年人数据的授权范围。

---

### 8. Grok 可把 Pi Agent 接进任务链

**Grok 的虚拟机支持更复杂编排。** 歸藏的帖子展示，[Grok 虚拟机能够调用 Pi Agent](https://x.com/op7418/status/2095936390425203018)。做法是先在虚拟机里安装 Pi，再让 **Grok** 编写代码并调度其他模型。帖子展示的是操作路径，不等于所有账号和环境都能复现。开发者尝试时应把密钥、文件与网络权限限制在测试环境。

![Grok 虚拟机调用 Pi Agent](https://pbs.twimg.com/media/HRZDCRdaQAAEPZ8?format=jpg&name=orig "Grok 虚拟机调用 Pi Agent")

---

### 9. WeMM-Embedding 覆盖多模态检索

**多模态嵌入开始兼顾视频。** Gorden Sun 介绍，[WeMM-Embedding 覆盖多模态检索](https://x.com/Gorden_Sun/status/2095895805089730744)。项目提供 **2B、4B 和 9B** 三种尺寸，帖子称 9B 版本在 MMEB-v2 榜单排名第一。它暂不**支持音频处理**。做知识库或跨媒体检索的团队，可以先围绕视频与图文数据验证效果。

![WeMM-Embedding 多模态嵌入模型](https://pbs.twimg.com/media/HRYeHvnaUAAfyj_?format=jpg&name=orig "WeMM-Embedding 多模态嵌入模型")

---

### 10. Astra 访问范围与价格信号曝光

**Astra 仍处于分批开放阶段。** 宝玉转述的信息称，[Astra 先面向有限机构和部分企业通道](https://x.com/dotey/status/2095761220787712268)。帖子还提到 API 标准价为输入每百万 Token **10 美元**、输出每百万 Token **50 美元**，以及超过约 27.2 万 Token 后的计价变化。Plus 在 ChatGPT 中暂不能使用 Astra 的说法也来自该帖，尚缺官方页面交叉确认。准备迁移任务的开发者应先按高成本和上下文限制做预算。

---

## **⌘ 开源 TOP 项目**

### blader/humanizer：移除 AI 写作痕迹

**它专门处理文本风格痕迹。** [blader/humanizer 已公开 Python 项目代码](https://github.com/blader/humanizer)，描述为可从文本中移除 AI 生成写作痕迹。项目今日新增 **1130 Stars**，累计 **42707 Stars**。适合研究文本检测与改写流程的开发者试用，但不应把“更像人”当成事实保证。

### JuliusBrussee/caveman：压缩 Agent Token 消耗

**它用更短表达减少上下文开销。** [JuliusBrussee/caveman 是一个 Claude Code 技能项目](https://github.com/JuliusBrussee/caveman)，项目描述称可通过类似穴居人的表达方式减少 **65% Token**。仓库累计 **103571 Stars**，今日新增 **501 Stars**。适合经常调用编码 Agent 的开发者做小规模对比，实际节省量取决于任务和上下文。

### radixark/miles：面向企业模型后训练

**它把强化学习用于模型后训练。** [radixark/miles 提供企业级后训练框架](https://github.com/radixark/miles)，面向大语言模型和视觉语言模型，并从 slime 分叉演进。项目今日新增 **64 Stars**，累计 **2551 Stars**。适合研究模型训练和企业部署的团队查看，使用前需要确认硬件、训练流程与许可证条件。

---
## **◉ 社媒精选**

### Anthropic 让 Claude 参与费马大定理形式化

**数学证明出现了新的自动化案例。** Anthropic 表示，[Claude 已完成费马大定理的形式化证明](https://x.com/AnthropicAI/status/2095947707605266436)。形式化证明需要把数学推理转换成 Lean 等证明助手可验证的结构。Anthropic 称这是目前规模最大的 Lean 证明，并表示专家原本预计需要多年。研究人员仍应检查完整证明文件与独立验证结果。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2095946062741860352/vid/avc1/1920x1080/m-keNgFBlgmjOExS.mp4?tag=29"></video>

### Astra 实测引发额度焦虑

**新模型的额度消耗受到关注。** 向阳乔木发帖称，[自己已经开始使用 GPT-6 Astra](https://x.com/vista8/status/2095964360133009548)。帖子配图展示了 Codex 中的 Astra 使用状态，并提到剩余额度可能快速下降。它只证明了发帖者看到的账号界面，不能推导出普遍开放或统一额度。使用者应先确认自己的模型入口和剩余额度。

![GPT 6 Astra用上了，看是不是一会儿就能把仅剩一半的额度光速用完。 看看你的Codex有](https://pbs.twimg.com/media/HRZb0JqaAAAKNAR.jpg "GPT 6 Astra用上了，看是不是一会儿就能把仅剩一半的额度光速用完。 看看你的Codex有")

---
## **😄 AI趣闻**

### 果蝇脑图谱被 AI 拼成三维版

一只小果蝇，先被切成了数百万张极薄切片，随后由 AI 把二维照片拼回三维脑模型。Google 与 HHMI 的研究人员还标记出超过 **16.6 万个神经元**，并整理出近 **1.17 万种神经元类型**。[Google 官方介绍了这张雄性果蝇全脑图谱](https://blog.google/innovation-and-ai/technology/research/male-fruit-fly-brain-map/)。最有意思的是，团队还能沿着视觉信号一路追到运动神经。人脑有约 860 亿个神经元，这项工作的下一关，显然不是给果蝇再加一张高清壁纸。

![AI 重建雄性果蝇三维脑图谱](https://pbs.twimg.com/media/HRWJiQsaAAAA_4s?format=jpg&name=orig "AI 重建雄性果蝇三维脑图谱")

---
## **❓ 相关问题**

### GPT-6 Astra 国内怎么用？

目前素材显示，Astra 先面向有限机构、部分企业和安全相关通道，之后才会陆续扩展到 ChatGPT Plus、Pro、Business 和 Enterprise。Plus 在 ChatGPT 中暂不能使用的说法来自社媒转述，实际账号权限仍应以官方入口显示为准。Codex 中出现 Astra 的消息，也不能直接证明所有地区都已开放。

需要进一步比较当前公开的 AI 账号或订阅服务时，可查看 [**爱窝啦·AI账号店**](https://www.aivora.cn/)；商品、价格与可用状态以官网实时页面为准。
