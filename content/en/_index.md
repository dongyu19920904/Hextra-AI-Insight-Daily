---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/8/6
breadcrumbs: false
next: /2026-08/2026-08-06
description: "京东开源实时视频编辑模型、SpaceX 披露太空算力卫星，国产图像 API 定价同步落地。 从开源工具到硬件路线，今天的更新都在绕开现有瓶颈另起炉灶，包括显存管制、渲染等待和提示词效率。 开发者优先看两件事：九天睿芯 HBF/SSD 方案是否适用自己的推理场景，以及用 JSON 结构化提示词改一条…"
cascade:
  type: docs
---


## **今日摘要**

```
京东开源实时视频编辑模型、SpaceX 披露太空算力卫星，国产图像 API 定价同步落地。
从开源工具到硬件路线，今天的更新都在绕开现有瓶颈另起炉灶，包括显存管制、渲染等待和提示词效率。
开发者优先看两件事：九天睿芯 HBF/SSD 方案是否适用自己的推理场景，以及用 JSON 结构化提示词改一条现有生图流程验证效果。
```

## **🔥 今日焦点 TOP 10**

### 1. 京东开源实时视频编辑模型，30帧边看边改

**视频创作门槛被实时推理重新定义。** 京东开源自研流式视频编辑模型 [JoyAI-Video-Edit，官方公告列出了720P/30fps推理速度与机器人数据合成能力](https://www.aibase.com/zh/news/30136)，开发者可以在播放过程中实时修改画面内容，无需等待整段渲染完成。该模型同时支持机器人训练数据的合成，对具身智能团队有额外价值。

![京东 JoyAI-Video-Edit 30帧实时视频编辑演示](https://upload.chinaz.com/2026/0805/6392152462994617757832792.png "京东 JoyAI-Video-Edit 30帧实时视频编辑演示")

---

### 2. Qwen-Image-3.0 全量开放，每张0.18元

**阿里千问图像模型正式全量上线并开放 API。** [官方公告称 Qwen-Image-3.0 在文生图榜单中位列国内前列](https://www.aibase.com/zh/news/30136)，定价 **0.18元/张**，面向所有用户开放调用。需要批量出图的独立开发者和内容团队今天可以直接接入 API 核算成本，对比现有服务商的报价。

![Qwen-Image-3.0 文生图效果展示](https://upload.chinaz.com/2026/0805/6392152630520954553806210.jpg "Qwen-Image-3.0 文生图效果展示")

---

### 3. 腾讯混元 Hy ASR 3.0 preview 发布

**腾讯混元语音识别进入新一代预览阶段。** [混元 Hy ASR 3.0 preview 随 AI 日报同步发布](https://www.aibase.com/zh/news/30136)，具体识别精度数据和 API 可用状态暂由官方后续公布；做语音转写或字幕生成的开发者可以关注正式版测试邀请。

---

### 4. SpaceX 联合英伟达宣布太空 AI 算力卫星

**马斯克把 AI 算力中心搬上了轨道。** [SpaceX 首份公开财报中正式披露轨道 AI 计算网络 Starmind，单颗卫星翼展 75 米、最高供电 250kW](https://www.36kr.com/p/3926107290531973)，搭载 **英伟达 Rubin GPU** 与 Vera CPU，卫星间激光互联、计算结果经星链下传地面。太阳同步轨道意味着 24 小时不间断太阳能，避开了地面数据中心的电网审批和散热耗水难题。

![Starmind 太空 AI 算力卫星渲染图](https://img.36krcdn.com/hsossms/20260805/v2_ce6ecf3c93f940838a9fd4e94247f0c6@5667365_oswg453844oswg1080oswg1084_img_000?x-oss-process=image/format,jpg/interlace,1 "Starmind 太空 AI 算力卫星渲染图")

---

### 5. 九天睿芯用 HBF/SSD 替代 HBM 跑万亿参数

**国产芯片用存储替代方案突破显存瓶颈。** [九天睿芯与 RWKV 社区联合验证，用 HBF/SSD 替代 HBM 作为显存，实现单卡推理万亿参数量级模型](https://t.me/aigc1024/22853)；双方正在专家预测和推理基础设施优化方向持续协同。这条路线若成立，国内受 HBM 出口管制约束的推理团队有了新的硬件选择方向。

![九天睿芯 HBF/SSD 替代 HBM 单卡推理架构示意](https://cdn5.telesco.pe/file/ln1kQsLLJkrZCScdk7PobuBUZ8wmc6IF0-JnBni9asqh_ztcSxtlXIzrDp1zSU9yH5glSajYqtqPSiZEiqxxdutV6mm9iIrEqkKJJOSt6toxwDasfqknq2wa3nEaCeRCweaMHqUkNO8h1PbjHYbrjtWcZVSE__MgZymmdks3jF2aLcI-7MwJKQmxDkDm7ohXDhE9epiGGr7sIM8B5Dy-qO4qhybkixFizRqXK-s4Ib5VcVo3iKZtgmJQN8dQcGpAxLZipSCJ-mq-mXQurbHhxI580FIfco0eZTN6BCjh5hl_5qWdGX7tFFP4QhK6bBYF8UNleHiQ5e6aiMupU0uxAA.jpg "九天睿芯 HBF/SSD 替代 HBM 单卡推理架构示意")

---

### 6. Moonshot 发布 PerceptionBench 视觉感知基准

**所有主流模型视觉感知得分均低于 60%。** [PerceptionBench 从 42 个现有基准的失败案例中反向提炼出 10 项原子视觉感知能力，构建 3000 道零推理纯感知验证题](https://t.me/aigc1024/22854)，彻底将感知与推理、知识分离。目前无模型总分破 **60%**，感知幻觉是所有模型最弱项——这意味着现有多模态模型"看清楚"的基础能力远比大家以为的差。

![PerceptionBench 10 项原子视觉感知能力评测结果](https://cdn5.telesco.pe/file/ozyNTe940XvhvhG9xnhZfPVqlSAqXjPMbn56eRrKFsW6kV8tYRssbo6lCiaMRZhez0BpopMahCZpI8qW7Xoyr__qBg4BPVNl-0mIwkLN3lti3AYCzLLwnoQqoQU9WXEj0q2T7Y7359ZnalcLXGO6DoDbkLKkPGj0PDVsCutmsLCIoOX7hnI3g-z5kFBqr2LhJBA1mqbKUCV64GfJWJkciss9aohcR0MoNMpYTkptQM10Mb31rPSRrJ-Kq3DnASgIseGtMMMM14TArdCW4raFmsA-lmKBz4dJjAlh-gS011yyV2_G0XN_IFfshptprQ8_hg4Xf5o6xJNyJUZYWSC2CA.jpg "PerceptionBench 10 项原子视觉感知能力评测结果")

---

### 7. AI 手写流式输出演示引发广泛关注

**AI 输出加入手写涂抹和图表字体后观感大变。** [歸藏在 X 上分享的演示视频](https://x.com/op7418/status/2084978122894815677)展示了 AI 输出模拟手写笔迹、带标注涂抹感和手绘图表的效果，配合流式逐行输出，视觉体感与标准打字风格截然不同。正在做 AI 笔记或报告工具的开发者可以参考这个交互方向。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2083876755937615872/vid/avc1/2486x1760/1OmtMySo5VzJTL7-.mp4?tag=29"></video>

---

### 8. Motionly：一句话生成动效项目文件

**AI 动效编辑器把创作流程压缩到一条指令。** [Motionly 开源仓库](https://t.me/aigc1024/22850)提供从自然语言描述直接生成 .motion 项目文件的能力，支持文字、图片、SVG、视频的缩放旋转、关键帧缓动、剪辑转场和音频，生成后可手动拖动画布和时间轴细调。动效设计师和前端开发者今天可以拉取仓库试用生成质量。

![Motionly AI 动效编辑器界面与生成流程](https://cdn5.telesco.pe/file/cKHHfdohtRz3BvYEoPh6Hq5n0sRp9yW2j328T0yB3xLd-cE8Wo_2KG2ZdYWXTu7oO_LY3sl0sF_2KRxCkgx_5eC8Mm5ofm51HMEbSh4x3kELPzHSS-4C9Aazp_c-VR0NrAadjg6Mk9rDxuw5e6pN-s302nQdbaCw9Df9QSMt_3pdABW4OQ9m0E2UcGJ-OoPzj_4cBOh1QKe3hBuGdM5oCo7WMFYQ5R0UfI4tVA0T8a4ZSJHIwjWLLVofeyNVlaW51aNNqDmP2NDO8PI0EWjpLZLkI1YIMFFYD-kxaSVW9uoz2DkmOD_Ng3f7104R2dmr-vEOcvxFIkZsEKYcljQ1KA.jpg "Motionly AI 动效编辑器界面与生成流程")

---

### 9. Genspark 免费 Office 实测：Word 渲染乱码

**花 10 万美元 Token 开发的免费 Office，Word 渲染翻车了。** [@vista8 在 X 上实测了 Genoffice](https://x.com/vista8/status/2084824214532730943)，发现 Word 文档渲染排版混乱，AI 对话功能还强制要求登录 Genspark 账号；不过他指出源码支持改成 BYOK，喜欢折腾的开发者可以在 GitHub 评论区找到仓库链接自己修。

![Genspark Genoffice Word 渲染乱码实测截图](https://pbs.twimg.com/media/HO7H19WbgAAiL3S.jpg "Genspark Genoffice Word 渲染乱码实测截图")

---

### 10. xueai.app 对应大厂 JD 列出 AI 学习路径

**把学 AI 和找工作直接挂钩，当天访问量超 2.2 万。** [@vista8 转介绍了 xueai.app](https://x.com/vista8/status/2085017685159764381)，该产品新上线了根据大厂招聘 JD 匹配对应 AI 知识点的功能，让用户以终为始确定学习优先级。对正在准备跳槽或转方向的从业者来说，今天可以直接用目标岗位的 JD 跑一遍，看哪些技能缺口需要补。

![xueai.app 按大厂 JD 匹配 AI 学习知识点功能界面](https://pbs.twimg.com/media/HO90S_VbsAAmi1s.jpg "xueai.app 按大厂 JD 匹配 AI 学习知识点界面")

---

## **⚡ 产品与功能更新**

### Cola 推出 Token Plan，主动功能不再扣用户费用

**Cola 宣布记忆整理和心迹生成费用全部由平台承担。** [Cola 官方公众号文章详述了 Token Plan 方案](https://mp.weixin.qq.com/s/kkqL0p30onyhB7BJ3BpkAA)，未来所有 Cola 的主动功能原则上不再向用户收费；背景是作者认为推理厂商 B 端定价与 C 端用户之间存在约 **10 倍价格矛盾**，Cola 选择自己吸收这部分成本。已在用 Cola 的用户今天可以查看最新计费规则是否已生效。

---
## **◎ 行业变化与个人影响**

### AI 原生团队的知识库管理正在催生新工具需求

**多 Agent 协作让公司知识库同时服务人类和 AI 员工，旧工具开始力不从心。** [一线创业者在 Telegram 频道分享了实际体感](https://t.me/aigc1024/22852)：知识库需要同时满足人类检索习惯和 AI 调用格式，建立、管理和迭代的逻辑与传统知识管理工具差异显著。对做企业知识管理工具或咨询的团队来说，这是一个当前竞争还不密集、但需求已经真实落地的方向。

---
## **⌘ 开源 TOP 项目**

### cloudflare/computer：给智能体配置一台可操作的电脑

[cloudflare/computer 项目仓库](https://github.com/cloudflare/computer)今日新增 **891 Stars**，总 Stars **2939**，是当日 GitHub Trending 增速最快的 AI 项目之一。项目用 TypeScript 实现，让 AI 智能体可以像操作真实计算机一样执行桌面任务——点击、截图、运行程序，核心解决的是 Agent 与真实 UI 环境交互的问题。适合正在构建 RPA 替代方案或需要让 Agent 操控网页/桌面的开发者直接试用。

---

### huangruiteng/loopx：为长期运行的 AI Agent 团队设计的状态内核

[huangruiteng/loopx 项目仓库](https://github.com/huangruiteng/loopx)今日新增 **326 Stars**，总 Stars **2118**，Python 实现。它的定位是与 Agent 执行循环解耦的状态管理层，兼容 **Codex、Claude Code** 及其他编码智能体，提供持久目标追踪、配额感知自动唤醒、可执行待办事项、证据日志和可验证交接。适合需要让多个 AI Agent 长期自主运行、且要保证任务连续性的开发团队。

---
## **◉ 社媒精选**

### 逆向 Kimi PPT 做出开源 Skill，用 DeepSeek 也能跑

**Binaryify 花数天逆向 Kimi PPT 生成逻辑，做成了可复用的开源 Skill。** [宝玉在 X 上转发了这个实测](https://x.com/dotey/status/2085043404874911836)，用 DeepSeek 接入后效果已经非常接近 Kimi 原版；仓库地址是 github.com/Binaryify/open-kimi-ppt-skill，作者顺手提到上次逆向网易云音乐收到了警告函，这次不知道会不会重演。做 PPT 自动化或想脱离 Kimi 订阅自建工作流的开发者可以直接试。

![Binaryify 开源 Kimi PPT Skill 用 DeepSeek 生成效果对比](https://pbs.twimg.com/media/HO8rLqxbAAAkfqq?format=jpg&name=orig "Binaryify 开源 Kimi PPT Skill 用 DeepSeek 生成效果对比")

---

### 字节 Seed 团队：结构化提示词显著提升文生图质量

**自然语言堆长度不能改善出图，换成 JSON 结构化提示词才有效。** [Gorden Sun 在 X 转述字节 Seed 团队论文结论](https://x.com/Gorden_Sun/status/2084950115089834022)：纯粹增加描述字数只增加冗余，用 JSON 格式补充位置、深度、姿态、材质、背景等字段后，生图质量**显著提升**；论文页面在 heheyas.github.io/context-scaling/。实际操作层面，让 AI 先把需求改写成结构化提示词再送给生图模型，现在就能改善出图质量。

![字节 Seed 团队结构化提示词对文生图效果提升对比](https://pbs.twimg.com/media/HO87A9iaUAAOvvZ?format=jpg&name=orig "字节 Seed 团队结构化提示词对文生图效果提升对比")

---

### 工业聚离职求职，AI 从业者就业流动加速

**在同一家公司工作近 12 年的资深前端/Agent 开发者主动寻找外部机会。** [宝玉帮转工业聚在 X 上发布的求职信号](https://x.com/dotey/status/2085021263282532387)，期望地点上海，方向为前端开发或 Agent 开发，表示保持最大开放性。对 AI Agent 团队有招聘需求的公司今天可以直接通过其 GitHub 主页了解背景。

---

## **❓ 相关问题**

### Qwen-Image-3.0 国内怎么用？

Qwen-Image-3.0 已全量开放，支持通过阿里云通义平台调用 API，定价 **0.18元/张**，国内用户注册阿里云账号后即可直接接入，无需额外审批或邀请码；[官方公告页面](https://www.aibase.com/zh/news/30136)中列出了上线状态和定价信息，可核实当前可用情况。

需要进一步比较当前公开的 AI 账号或订阅服务时，可查看 [**爱窝啦·AI账号店**](https://www.aivora.cn/)；商品、价格与可用状态以官网实时页面为准。
