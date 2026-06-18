---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/6/18
breadcrumbs: false
next: /2026-06/2026-06-18
description: "每日自动汇总最新 AI 行业动态，帮中文用户用最低成本玩转 ChatGPT、Claude、Cursor、Augment 等 AI 工具。由爱窝啦 AI 账号店提供支持。"
cascade:
  type: docs
---

## **今日摘要**

```
SpaceX 用 600 亿美元股票零现金吞下 Cursor，AI 编程工具的独立生存窗口正在关闭。
开源反击同步打响：GLM-5.2 编程能力首次追平 Claude Opus，今天就能下载跑。
独立工具要么被收购，要么开源自救——今天这两条新闻，说的其实是同一件事。
```

## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览

> 💡 **提示**：想第一时间体验文中提到的最新 AI 模型（Claude 4.5、GPT、Gemini 3 Pro）？没有账号？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 领个号，一分钟上手，售后无忧。

## **今日AI资讯**

### **👀 只有一句话**
SpaceX 一分钱没花、用股票吞下 Cursor，马斯克正在把 AI 编程工具第一名攥进自己口袋。

### **🔑 3 个关键词**
#马斯克吃掉Cursor #GLM开源炸场 #Agent自主进化

---

## **🔥 重磅 TOP 10**

### 1. [SpaceX 零现金收购 Cursor，600 亿美元全用股票支付](https://www.36kr.com/p/3856591177618690)

IPO 第四天，马斯克就出手了。SpaceX 宣布以 600 亿美元收购 AI 编程工具 Cursor 的母公司 Anysphere——全部用 SpaceX A 类普通股支付，一分现金没花。四个 MIT 辍学生 2022 年创业，18 个月做到 10 亿美元 ARR，现在直接被史上最大 IPO 筹来的弹药换了个主。这笔交易的信号不只是"马斯克又买了啥"，而是：AI 编程工具已经值得用这个量级的筹码来锁定。开发者生态的入口争夺，比我们想象的激烈得多。

![image](https://img.36krcdn.com/hsossms/20260617/v2_8e3b5abfdb57458e972e6c7ba89686f3@1200352198_oswg235317oswg1080oswg554_img_000?x-oss-process=image/format,jpg/interlace,1)

### 2. [智谱 GLM-5.2 正式发布开源，开源 Coding 能力首次达到 Opus 水平](https://x.com/op7418/status/2067077537721954542)

就在大家以为开源模型的编程能力永远追不上 Claude Opus 的时候，智谱这次直接把分差给填平了。GLM-5.2 核心定位是长周期任务，100 万稳定上下文，还引入了思考力度控制——你可以选"max"往死里推，也可以选"high"在性能和 Token 消耗间找平衡。架构上的 IndexShare 机制让百万上下文下每 Token 计算量降低约 2.9 倍，不是纯堆算力的路子。MIT 开源、API 定价和 5.1 保持一致，权重直接挂在 Hugging Face。开发者今天就能拿去跑。

![image](https://pbs.twimg.com/media/HK-7jKeb0AAPMQL?format=jpg&name=orig)

### 3. [NVIDIA 发布 ENPIRE：Agent 自主训练真实机器人，GPU 插槽操作成功率达 99%](https://x.com/Gorden_Sun/status/2067183041496400221)

以前训练机器人做灵巧操作，每次实验都要人工重置场景，费时费力。NVIDIA 的 ENPIRE 框架直接砍掉了这一步——Agent 自动重置场景、执行策略、验证结果、迭代改进，全程闭环，无需人工盯着。在 GPU 插入卡槽、扎带穿孔这类精细操作上，成功率跑到了 99%。框架还支持多机器人并行扩展，多 Agent 协同。这不是实验室里的 demo，是把强化学习的数据飞轮直接搬到真实物理世界里转起来。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2067182849665728512/vid/avc1/1920x1080/PNjVW7cxHG-Mb97t.mp4?tag=28"></video>

### 4. [Grok Imagine Video 1.5 上线，支持多国语言含中文](https://x.com/Gorden_Sun/status/2067148452514140438)

视频生成赛道又多了一个新面孔正式亮相。Grok Imagine Video 1.5 集成进 Grok，生成效果据测试还不错，多国语言支持里包含中文——这对国内用户来说是个实用加分项。横向比，跟 Seedance 2.0 还有距离，但属于当前第一梯队水平。xAI 把视频生成直接塞进 Grok，意图很明显：不想只靠文本对话留住用户，要把 Grok 做成全能创作平台。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2067148322591428608/vid/avc1/704x1280/PreMfcFu-Ic4KSJ0.mp4?tag=25"></video>

### 5. [Framer 终于上线 Agent 能力，网页构建工具迟来的觉醒](https://x.com/op7418/status/2067073608393109651)

Framer 本来是设计师最爱的网页构建工具，基建扎实、组件体系完整，就是一直没把 AI 这块做起来。现在 Agent 能力终于上线了，从演示视频看，交互逻辑已经接进去了。评价两极：基建好意味着 AI 结合后天花板不低，但慢了行业整整一两年，Bolt、Lovable 这些对手早就跑在前面。能不能追上，就看接下来迭代速度了。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2066939268514426880/vid/avc1/1280x720/y75bLn4hRZ9Jo4W3.mp4?tag=14"></video>

### 6. [Codex 支持接入任意开源模型，不只能用 OpenAI 自家的](https://x.com/vista8/status/2067291199581606238)

OpenAI 官方提醒了一件很多人没注意的事：Codex 的 App、CLI 和 SDK，全都可以配置成接开源模型，不是只能用 OpenAI 的。文档里已经有 config 指南。这个操作确实赚口碑——开放生态的姿态摆出来了，开发者可以把自己跑的本地模型或其他厂商的 API 接进来。当然，评论区也有人直接问出那个灵魂问题：用开源模型跑的数据，还会不会被拿去训练？

### 7. [AI 生成 2006 年手机照片质感，老同学既视感拉满](https://x.com/Gorden_Sun/status/2067102988288840122)

"放佛看到了我同学"——这句话说明效果已经过关了。用 Sony Ericsson K800i 风格 Prompt 生成的照片，氙气闪光补光、冷调白平衡、早期 JPEG 压缩感全都还原出来了，连手持运动模糊和边缘对焦衰减都没落。这不是纯技术展示，而是在说：AI 图像已经能精确复现特定年代、特定设备的成像美学，而不只是"老照片滤镜"。创作者现在可以用一段精准的 Prompt 代替一台 20 年前的相机。

![image](https://pbs.twimg.com/media/HK_TEz7bYAAAAbl?format=jpg&name=orig)

### 8. [GLM-5.2 已可在 Codepilot 模型管理中手动添加](https://x.com/op7418/status/2067088428047770016)

GLM-5.2 开源当天，就有工具第一时间跟进接入了。Codepilot 用户现在可以在模型管理里手动把它加进来，不用等平台官方适配。这种速度说明开源生态的响应机制已经很成熟——模型一放出来，接入链路几乎同步就通了。对普通开发者来说，今天发布、今天能用，门槛基本为零。

![image](https://pbs.twimg.com/media/HK_F7JvaYAEcaN6?format=jpg&name=orig)

### 9. [用 Codex 在候机室开发了一个离线音乐 App](https://x.com/vista8/status/2067035280016887811)

候机两小时，不刷手机、不睡觉，直接让 Codex 开发了一个自用音乐 App——登机后没网也能听 AI 生成的音乐。这件事的含义不是"Codex 好厉害"，而是：从零开发一个 App 的门槛，已经压缩到了候机室等待的时间颗粒度里。以前叫"有个 idea 但要找时间做"，现在叫"出发前打开电脑，落地时 App 就好了"。

![Tweet Image](https://pbs.twimg.com/media/HK-VoJ8aQAA31gN.jpg)

### 10. [continue — 今日 GitHub 热榜开源编程智能体](https://github.com/continuedev/continue)

continue 是一个开源的 IDE 编程智能体，TypeScript 编写，今日新增 49 星，累计近 34000 星。直接集成进 VS Code 和 JetBrains，支持自定义接入各类模型，包括本地模型，是目前开源社区里对 Cursor 替代路线最完整的方案之一。SpaceX 收购 Cursor 的消息刷屏这天，continue 上了热榜，时机微妙——想要不被商业工具锁定的开发者，今天多了一个理由认真看看它。

---

## **📌 值得关注**

**[产品]** [Codex 操控电脑的三种方式详解](https://x.com/dotey/status/2067033481142509588) — Computer Use、Chrome 扩展、结构化插件各有分工，团队成员 Jason 把适用场景和 Mac/Windows 体验差距都说清楚了，用 Codex 的开发者值得存一下。

**[商业]** [AI 音乐赛道混战，谁是"中国版 Suno"？](https://www.36kr.com/p/3855833364314755) — Suno 完成 4 亿美元 D 轮、估值 54 亿，版权官司还没打完估值就先翻倍，国内字节、腾讯、网易云同步入场，这个赛道的混乱程度值得关注。

**[商业]** [钉钉 CEO 无招卸任，蒋凡电商战场封神](https://www.36kr.com/p/3856029811440518) — 同一批被吴泳铭押注的大将，一年后交出了完全不同的答卷；钉钉 AI 时代 B 端入口接下来由技术出身的陈宇森接手。

**[其他]** [小米 MiMo Claw 正式版上线，免费时长增至 4 小时](https://www.aibase.com/zh/news/28991) — 支持千次连续工具调用，ClawEval 任务达标率 63.8%，Token 消耗降低 40-60%，订阅价 14.9 元起，想试 Agent 工具的可以看看。

---

### [Dario 在 G7 饭局上的表情，出卖了一切](https://x.com/op7418/status/2067308157026882001)

G7 专门开了一场 AI 领域午餐会，各家头部 AI 公司负责人全到齐了，场面堪称"行业峰会平替"——西装革履，觥筹交错，想必都在聊"AI 如何重塑全球经济秩序"这类宏大叙事。镜头扫过去，大多数人笑得如鱼得水。唯独 Anthropic 的 Dario，全程表情像是被人拉进了一个不熟悉的工位群：心里清楚要说什么，但怎么看怎么像是刚收到一条"下午开个对齐会议"的飞书消息。一个把安全对齐写进公司宪法的人，坐在政治饭局里认真倾听，多少有点——职业病发作。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2067250082286555136/vid/avc1/720x1280/jwFchAJeZy3-XU0t.mp4?tag=14"></video>

---
## **🔮 AI趋势预测**

### AI 编程工具平台化整合加速

- **预测时间**：2026年Q3
- **预测概率**：78%
- **预测依据**：今日新闻 [SpaceX 零现金收购 Cursor](https://www.36kr.com/p/3856591177618690)。600 亿美元的收购说明独立编程工具的独立生存空间正在收窄，科技巨头会加快把这类工具纳入自己的生态护城河。预计接下来 2-3 个月内，其他 AI 编程工具会出现更多被收购、战略投资或平台强绑定的动作。

### 开源模型 Coding 能力进入与闭源比肩的新阶段

- **预测时间**：2026年Q3
- **预测概率**：72%
- **预测依据**：今日新闻 [GLM-5.2 开源 Coding 达到 Opus 水平](https://x.com/op7418/status/2067077537721954542)。这是开源模型首次在编程基准上追平顶级闭源模型，意味着"开源永远差一档"的共识正在松动。未来 1-2 个月，其他开源团队大概率跟进发布针对 Coding 场景优化的新版本，竞争会进一步压低闭源模型的溢价空间。

### Agent 机器人训练进入真实世界闭环新范式

- **预测时间**：2026年Q3
- **预测概率**：65%
- **预测依据**：今日新闻 [NVIDIA ENPIRE 框架发布](https://x.com/Gorden_Sun/status/2067183041496400221)。无需人工干预、自动闭环的真实世界训练框架一旦被 NVIDIA 验证可行，会快速成为具身智能领域的标准基建方向。预计 Q3 会看到更多团队基于类似框架发布真实场景机器人操作结果，实验室 demo 向量产准备阶段推进。

### 视频生成工具中文支持成为标配竞争项

- **预测时间**：2026年Q3
- **预测概率**：70%
- **预测依据**：今日新闻 [Grok Imagine Video 1.5 支持中文](https://x.com/Gorden_Sun/status/2067148452514140438)。海外主流视频生成模型开始把中文支持作为发布亮点单独宣传，说明中文用户市场已被明确列为竞争目标。预计 Q3 内，Sora、Runway 等平台会进一步强化中文 Prompt 理解和多语言输出能力，国内平台的本土优势窗口在收窄。

---

## **❓ 相关问题**

### 如何体验 GLM-5.2？

GLM-5.2 是智谱 AI 发布的开源模型，权重已上传至 Hugging Face（[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)），MIT 授权，可以直接下载本地部署。API 访问可通过 [z.ai](http://docs.z.ai) 官方文档注册使用，定价与 GLM-5.1 相同。对于希望直接调用国产顶级模型但不想折腾部署环境的用户，也可以访问 **[爱窝啦 Aivora](https://aivora.cn)** 获取 Claude、GPT 等主流模型的成品账号，极速发货，省去注册和支付的麻烦。