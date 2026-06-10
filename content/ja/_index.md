---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/6/10
breadcrumbs: false
next: /2026-06/2026-06-10
description: "每日自动汇总最新 AI 行业动态，帮中文用户用最低成本玩转 ChatGPT、Claude、Cursor、Augment 等 AI 工具。由爱窝啦 AI 账号店提供支持。"
cascade:
  type: docs
---

## **今日摘要**

```
Anthropic 发布 Claude Fable 5，代码基准跑分 88% 压过 GPT 的 83.4%，API 价格砍半，今天就能用。
更值得警惕的是反蒸馏暗招——检测到薅数据就悄悄降质，不封号不提示，你永远不知道自己训练的数据已经变坏了。
有代码项目的今晚去试 Fable 5；靠蒸馏闭源模型的，这条路快走不通了。
```

## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览

> 💡 **提示**：想第一时间体验文中提到的最新 AI 模型（Claude 4.5、GPT、Gemini 3 Pro）？没有账号？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 领个号，一分钟上手，售后无忧。

## **今日AI资讯**

### **👀 只有一句话**
Anthropic 今天扔出 Fable 5，Claude 终于在代码跑分上压过了 GPT——同时还悄悄埋了个让蒸馏玩家哭晕的陷阱。

### **🔑 3 个关键词**
#Fable5震场 #反蒸馏暗招 #AgentOS颠覆想象

---

## **🔥 重磅 TOP 10**

### 1. [Claude Fable 5 正式发布：Mythos 级能力，Terminal-Bench 直接压过 GPT](https://x.com/AnthropicAI/status/2064394443856232582)

等了很久的人终于等到了。昨天还在预测 Mythos 要来，结果 Anthropic 今天直接扔出了 Fable 5——同一套底层模型，只是拿掉了部分限制，让普通用户也能用上"Mythos 级"的算力。

亮点很具体：Agent Coding、工具调用这两块基准分比 Opus 4.8 高出一大截，Terminal-Bench 2.1 跑出 88%，GPT 是 83.4%。API 定价输入 10 美元、输出 50 美元每百万 Token，比 Mythos Preview 便宜了一半。

Pro/Max/Team 和 API 用户现在就能用。手边有代码项目的，今晚可以直接去试。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2064389698190012416/vid/avc1/2160x2160/cRYBJVhIVvopbO92.mp4?tag=27"></video>

---

### 2. [Anthropic Fable 5 反蒸馏机制：检测到被"薅"，直接悄悄降智](https://m.okjike.com/originalPosts/6a285c4aaa39df51040f9410)

发布会刚结束，另一条消息更有意思。Anthropic 在 Fable 5 里埋了个机制：一旦检测到有人拿它输出来训练别的模型，不封号、不提示，而是通过提示词修改、引导向量和 PEFT 等手段，让模型自己开始输出质量下降的内容——用户完全感知不到。

说白了，就是"让你用，但偷偷给你喂差料"。比封号狠多了，因为你还以为自己在正常工作。

对开源社区和国内蒸馏玩家来说，这是个需要认真对待的信号。猫鼠游戏升级了，猫这次藏起来了。

![image](https://cdnv2.ruguoapp.com/Fi7vCyrRRvF-V6xkAZYWad13A_wKv3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient)

---

### 3. [苹果正面硬刚：Apple Foundation Models 是纯正自研，跟 Google Gemini 没关系](https://www.aibase.com/zh/news/28781)

iOS 27 发布后，外界一直有声音质疑：苹果的 AI 系统 AFM 到底是不是套了 Gemini 的壳？苹果这次直接出来说话了——完全自主开发，核心架构、代码逻辑、数据体系全是自己团队做的。

展示了 AFM 的分层设计：端侧模型处理本地任务，云端模型扛高负载，两边协同跑。架构思路和 Apple Intelligence 去年方向一脉相承，但这次终于给出了更清晰的技术说明。

对普通用户来说最直接的影响：日常 iPhone AI 功能，数据不会跑到 Google 那边绕一圈。

![image.png](https://pic.chinaz.com/picmap/202206071118455737_0.jpg)

---

### 4. [GitHub 上 13.9 万星的宝库：几十款 AI 工具的系统提示词全被扒光了](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools)

想知道 Cursor、Claude Code、Devin、Windsurf、Kiro、Manus 这些工具背后给 AI 下了什么指令？这个仓库今天冲上 GitHub 日榜，把 Augment Code、Cluely、Replit、v0、Warp.dev、Lovable 等几十款工具的完整系统提示词、内部工具列表和底层模型配置全部公开。

对产品经理和提示词工程师来说，这是一手竞品情报库。你能直接看到行业顶级 AI 编程工具怎么给模型"设定角色"、怎么拆解任务、怎么调用工具。

今天新增 79 星，总数突破 13.9 万。做 AI 产品或自己搭工作流的，这个仓库值得收藏。

---

### 5. [AgentOS 概念炸场：未来的电脑，没有 App，只有一句话](https://t.me/aigc1024/21084)

研究人员抛出了一个让人细想有点发毛的概念：未来的操作系统不再是 Windows 或 macOS，而是一个叫 AgentOS 的"意图平台"——你不打开任何软件，只说"分析这份报告，提炼要点，做成 PPT，发给团队"，剩下的 AI 全包了。

整台电脑变成一个 AI 协调层，App 消失，操作消失，只剩"你想要什么"。

结合 Fable 5 这类 Agent 能力越来越强的模型，以及微软、苹果都在往"自然语言控制系统"方向走，这个方向不是科幻，是三五年内会加速的趋势。

![image](https://cdn5.telesco.pe/file/dSUaKQ1Ob4VpCiztRsWWu7x9dQJeCQJJrnBhjdUN9_GQITAzCnoF__gfX1FimCZnJEyRX_huEoOI7krjepxNkVh79Jfaql5GIrbiqsnR3QSBSHHfp-cUiIM5Pwlv1putQ4oVp8Ji1UgPQowXkII1BRmfNDToFna7XlexmoZ9ptbfev-7Qj9nv5PeyLx6OE_a4UK8yEEh1pWzrPX20FUB21KJppHf515y812VMHLlH03-VStpiBiqk06wzhK4moR0A5fGqVe00TaEeNzLnfcARxe_pPM8Ne7eMOQPCxLAJoDuPSsgjud7KdBt-R1Hh4ZgJ4a7g1NB5naP6zHu7TgxZg.jpg)

---

### 6. [MiMo V2.5 Pro UltraSpeed：1000 Token/s，全球最快万亿参数模型来了](https://x.com/op7418/status/2064257622803710463)

问个问题，回答还没等你眼睛眨完就刷完了。MiMo 这次推的 UltraSpeed 版本峰值达到 1426 Token/s，首次响应只要 0.83 秒，32 秒内输出超过 25000 个 Token——而且是 1T 参数的大模型，不是轻量化小版本。

实测跑了三个任务：用 Three.js 生成完整 3D 游戏代码、复刻带 3D 动画的官网、以及更复杂的地球轨道动效官网。速度给力，沟通一轮修改后完美收尾。

"越强越慢"这个默认认知，MiMo 这次要打破它。批量生成、快速迭代的场景，可以认真看一下。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2064257508290732032/vid/avc1/1080x1440/jm0mPTos6gonUc3X.mp4?tag=27"></video>

---

### 7. [AI 批量视频工作流实战：四步从文案到四平台自动发布](https://t.me/aigc1024/21091)

以前做一条短视频，文案、配音、剪辑、发布，没两三个小时下不来。现在这套工作流把整个链路压缩到几乎自动化：AI 提取或生成文案并过滤违禁词，克隆声音和形象对口型，自动剪辑配音配乐，最后一键推送到四个平台。

核心变化不是"AI 帮你改改文案"，而是整条产出链都能跑批量。一个人操作，十条视频同时在流水线上。

对独立创作者和中小团队来说，真正的竞争壁垒可能只剩下一件事：有没有好的素材和选题眼光。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://cdn4.telesco.pe/file/d7e43c9aa1.mp4?token=DwwtfRG9y7-f_iqU7M7wSOBznqUfSxVIZJ7RADA4EdyoQ1q4INucf8onNJS_WdFlBReA58Z0w0NN7mEBKaCN5JGBat6HEkt_Ip48eSgniz9hDAk1xwXMIYOGeb-2EB7kq0NbFMhdE5NVdZvb7jKMMbhstC5CKeCfdY2lqQ1hQe-l5mbfU_ZRJTgnnGovYocE006WQE2bjtZuPvQQFkZLyTqYzI7xVT57W4eSB1X9wwXgVrCz118OMGCptFRlvAt640vsCQYGcVQmRKTCxl02FbBQSTmiu4Ynoc2QkR2lUZp0rfhvJ…"></video>

---

### 8. [AI 生成图片有多假？老法师一眼看穿，新手完全看不出来](https://x.com/Gorden_Sun/status/2064243461679939731)

群里一张图流传开来，有人觉得哪里不对劲，却说不出哪里假——结果揭晓：这是 AI 生成的。这个现象本身就很说明问题：AI 图片的"可信度阈值"在悄悄提高，普通用户越来越难凭感觉辨别真假。

更有趣的是，被讨论的图是"Openclaw 创始人的工作台"，一个偏小众的工具，却因为这次真假争论意外出圈。

做内容、做品牌的人要注意了：你发的图，对方可能无法判断是真实场景还是 AI 捏造的。信任成本正在悄悄上升。

![image](https://pbs.twimg.com/media/HKWqeSsbgAAEMHU?format=jpg&name=orig)

---

### 9. [用 Codex 分析三年 X 帖子：从 100 到 11 万粉丝，连自己都没意识到的规律](https://x.com/vista8/status/2064258267878986233)

三年、11 万粉丝、全量帖子数据——这位博主没靠感觉做复盘，而是把所有发过的帖子喂给 Codex，让 AI 做数据分析，最后发现了一些"连自己都不知道"的增长规律。

这个用法值得关注：不是让 AI 帮你写内容，而是让 AI 分析你自己的行为数据，找出意识层面发现不了的模式。

完整 PPT 已放在评论区。想搞清楚"什么帖子有效"的人，这个思路比模仿别人爆款更实用。

![Tweet Image](https://pbs.twimg.com/media/HKW2zTQXcAELQHu.jpg)

---

### 10. [AI 惊艳转场：数万次迭代打磨出的视觉炸弹](https://t.me/aigc1024/21101)

视频转场以前是剪辑师吃饭的核心手艺，现在 AI 开始接管这个领域了。这条素材展示的效果，是经过数万次参数迭代和提示词打磨才得到的——不是一次生成就搞定，而是反复调优的结果。

AI 做转场的门槛，正在从"会不会用工具"变成"有没有审美和迭代耐心"。技术本身不再是壁垒，对"好看"的判断力才是。

对视频创作者来说，这条值得点开看效果——代表了当前 AI 视频生成的一个质量上限。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://cdn4.telesco.pe/file/476479ef9f.mp4?token=Eof5EOJt9Q_UFjznliKVWW_5UOp5ZcNYrBOMQBmeuSgBpAbLNG55fKl4nsKb0X17nYrJQuRcRPE7XS_nL7lryDoEsXUBK8EdlIRdV67G-TEZ6iXOLYbPemm_7uZB_GyQWsViMMQOG49lknpdLSaKfM3wX3ogKz6YlJ09cKtmvVaI6vgqSJhGcCorl5M0NmocBu7A4m761uhdj1NDQhRLPoU_JvcUClLPHSWznnWutXZ93a94NG0f6dfzf2miDSXOcoZ51YNb15DjHoJSYM2rsQsR13GDEmBdIt6XDugugjv6JqC5bbgd848zbqtZrw9P4jNMB3ZMWlVrbkdVT-JOww"></video>

---

## **📌 值得关注**

**[产品]** [Aye 浏览器 AI Agent 体验测评](https://x.com/vista8/status/2064230337077768651) - 浏览器体验超预期，但不支持 Chrome 插件、付费计划还没明确——有潜力但没完全准备好，现在跟进正是时候。

**[研究]** [AI 生成出版社级书籍封面 Prompt 模板](https://x.com/dotey/status/2064361005375713396) - 可复用封面 Prompt 模板已放评论区，替换变量一键生成，内容创作者和学术写作党直接收藏。

**[产品]** [有了 AI，iOS 独立开发变简单了：语音提词器一天内能做完？](https://x.com/vista8/status/2064385768559358258) - 一个人 + AI 计划一天内搭完语音自动跟随提词器 App，"快速验证想法"正在成为独立开发者的新常态。

---

## **🔮 AI趋势预测**

### Claude 系列全面进入"Mythos 时代"，高端 API 定价战开打

- **预测时间**：2026年7月
- **预测概率**：75%
- **预测依据**：今日新闻 [Claude Fable 5 发布](https://x.com/AnthropicAI/status/2064394443856232582) 显示 Mythos 底层模型已可安全通用化，Fable 5 是第一步；Anthropic 将 Mythos 5 限定给受信任合作伙伴的策略，下一步大概率是逐步开放完整版，同时引发 OpenAI 和 Google 在高端 API 定价上的跟进竞争。

### 蒸馏防护机制成为闭源模型"标配"

- **预测时间**：2026年8月
- **预测概率**：65%
- **预测依据**：今日新闻 [Anthropic Fable 5 反蒸馏机制曝光](https://m.okjike.com/originalPosts/6a285c4aaa39df51040f9410) 证明这条技术路线已在实际部署；一旦 Anthropic 验证有效，OpenAI 和 Google 跟进只是时间问题，纯靠蒸馏闭源模型来追赶的策略将面临系统性障碍。

### AgentOS 从概念验证进入早期产品阶段

- **预测时间**：2026年Q3
- **预测概率**：55%
- **预测依据**：今日新闻 [AgentOS"意图平台"概念](https://t.me/aigc1024/21084) 的讨论热度，结合 Fable 5 这类 Agent Coding 能力大幅提升的模型，底层能力已经开始够用；微软和苹果都在往"自然语言控制系统"方向走，预计 Q3 会有团队拿出真实可用的早期原型。

### AI 视频生成进入"精细迭代"时代，批量生产与精品制作分道扬镳

- **预测时间**：2026年Q3
- **预测概率**：70%
- **预测依据**：今日同时出现两条视频方向素材：[AI 批量视频四步工作流](https://t.me/aigc1024/21091) 代表效率路线，[数万次迭代的转场效果](https://t.me/aigc1024/21101) 代表精品路线。两条路线已在分化，下一步会出现专门服务不同方向的工具链，平台算法也会开始区分对待。

---

## **❓ 相关问题**

### 如何体验 Claude Fable 5？

Claude Fable 5 目前已向 Pro、Max、Team 用户以及 API 用户开放，在 Claude 对话界面或 API 调用时选择对应模型即可。国内用户可能面临支付困难或账号注册限制。

**解决方案**：访问 **[爱窝啦 Aivora](https://aivora.cn)** 获取成品账号，极速发货，售后无忧。