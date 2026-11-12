---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/11/12
breadcrumbs: false
next: /2026-11/2026-11-12
description: "Anthropic 双发 Fable 与 Mythos 5.2，编程成本约为 Opus 一半，但实测单任务可烧到万美元级别。 各栏目共同指向同一件事：模型能力在快速扩张，但 token 消耗与实际收益的落差正成为新的核心变量。 今天优先看第 1 和第 3 条，把 Fable 5.2 的档位选择和成…"
cascade:
  type: docs
---

## **今日摘要**

```
Anthropic 双发 Fable 与 Mythos 5.2，编程成本约为 Opus 一半，但实测单任务可烧到万美元级别。
各栏目共同指向同一件事：模型能力在快速扩张，但 token 消耗与实际收益的落差正成为新的核心变量。
今天优先看第 1 和第 3 条，把 Fable 5.2 的档位选择和成本估算弄清楚再动手。
```

## **🔥 今日焦点 TOP 10**

### 1. Anthropic 双模型齐发，编程成本压到 Opus 一半

**两款新模型同时上线。** [Anthropic 官方公告](https://www.anthropic.com/claude-fable-and-mythos-5-2)显示，Claude Fable 5.2 与 Mythos 5.2 共用同一底层，常规 API 输入价格定为每百万 token **8 美元**，输出 **40 美元**。Fable 面向公众开放，Mythos 需通过网络安全或生命科学资质审核。Frontier Code 2.0 测试里，Fable 在 High 档得分 45.3%，Opus 5.5 Max 档为 45.5%，前者每任务成本约为后者一半。跑复杂编程批量任务的开发者可以今天重算一次成本，日常工作 Anthropic 仍建议用 Opus 5.5。


![Anthropic 双模型齐发，编程成本压到 Opus 一半 · 原文封面](https://assets.claude.com/21b3240f9264f8e4c8ab1390e2702cf1401b2367.jpg "Anthropic 双模型齐发，编程成本压到 Opus 一半 · 原文封面")

---

### 2. Adobe MAX 全家桶接入多家 AI，开放 MCP 本地接口

**Adobe 一次性接入多家外部模型。** 据 [Adobe MAX 全家桶接入多家 AI，开放 MCP 本地接口](https://news.adobe.com/news/2026/11/adobe-transforms-creative-cloud-tools)，Firefly 已整合 OpenAI、Google、字节跳动、可灵及 Topaz Labs 的模型，并推出覆盖全套软件的 Creative Agent 创意智能体。Photoshop 等原生软件同步开放本地 **MCP 接口**🔌。视频剪辑可一键**统一调色**、擦除杂物并补背景，照片里闭眼的人可参考其他照片修睁开。视频和图片创作者从今天起可以在现有 Creative Cloud 订阅内使用这些功能。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2120433619311460352/vid/avc1/1920x1080/Az0dnr-2wYUpb-Li.mp4?tag=29"></video>

---

### 3. Fable 5.2 单任务实测花费超万美元，高档位反而更差

**档位越高、成本越高，得分却没跟上。** 开发者莫唯书 Mark 在[Fable 5.2 单任务实测花费超万美元，高档位反而更差](https://m.okjike.com/originalPosts/6af3e27c3ce945612e7743d3)里列出：复刻《战争机器》风格关卡耗费 **86 亿** token，折合 API 成本约 **1.5 万美元**；Max 档平均任务成本从 14.19 美元飙升到 44.70 美元，得分却比低档位更差。独立评测机构 Artificial Analysis 发现，Fable 5.2 单任务输出 token 量远超前代，导致总成本不降反升。准备上手的开发者，先在低档位跑小批量测试会比直接拉满更划算。

![Fable 5.2 实测成本与得分对比](https://cdnv2.ruguoapp.com/FtYjecmnn6aoN2UmvTJJCfiIk5D9v3.png "Fable 5.2 实测成本与得分对比")

---

### 4. 谷歌发布 Gemini Decision 1，首个决策专用模型

**谷歌推出专门处理决策任务的多模态模型。** [Gemini Decisions API 页面](https://linux.do/t/topic/3158350)显示，Gemini Decision 1 输入价格为每百万 token **0.1 美元**，输出免费，支持图片、视频、音频与 PDF 输入。上下文窗口 256K，单次最多支持 **1000 个**决策问题。定位是快速、校准良好的多模态决策推断，不是通用对话模型。需要批量打标、风险分类或多模态决策的开发者可以关注 API 是否开放申请。

---

### 5. Fable 5.2 生成 3D 游戏可整合进单个 HTML

**Fable 5.2 的 3D 游戏代码直接跑在网页里。** 开发者归藏在[Fable 5.2 生成 3D 游戏可整合进单个 HTML](https://x.com/op7418/status/2120541276970094774)里演示，**Fable** 5.2 生成的三维游戏场景与交互逻辑可以打包进一个 HTML 文件，无需额外运行时即可在浏览器中运行🎮。这让网页成为跨平台游戏**发布的最轻量路径**。想快速验证小游戏 Demo 的独立开发者，可以直接用 Fable 5.2 生成 HTML 原型后测试。

![Fable 5.2 生成的 3D 游戏网页效果](https://pbs.twimg.com/media/HW2hj_OaEAAwtsq?format=jpg&name=orig "Fable 5.2 生成的 3D 游戏网页效果")

---

### 6. Fable 5.2 画手柄与动态场景实测，底子扎实

**Fable 5.2 在风格化渲染上表现稳定。** 掘金作者甲维斯在[实测文章](https://juejin.cn/post/7706384412187164710)里跑了三个场景：赛博清明上河图、车库建模和**支持真实手柄接入**的网页游戏控制器。手柄渲染连细节纹理和按键响应都写进了交互逻辑里。受限于配额，车库场景只跑完一半，但底层建模已达到可用水准。用 Opus 5.5 习惯写实风格的用户，**Fable** 5.2 整体偏风格化，两者风格有差异。

![Fable 5.2 手柄渲染实测效果](https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/fed42d7f833b4853892c4f085f9c2992~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sy57u05pav:q75.awebp?rk3s=f64ab15b&x-expires=1794920170&x-signature=UCxlJ5vz1055%2BpWUBFeeIHuxags%3D "Fable 5.2 手柄渲染实测效果")

---

### 7. NVIDIA Snapshot 把推理冷启动从分钟压到秒级

**GPU 推理工作负载的恢复时间大幅缩短。** [BestBlogs 技术整理](https://www.bestblogs.dev/en/article/ab6dbebd36)介绍，NVIDIA Snapshot 是开源的 Kubernetes 检查点系统，把已初始化的 CPU 和 GPU 内存状态捕获为可移植制品，恢复时仅需读取状态而非重新初始化。vLLM、SGLang 和 TensorRT LLM 的测试显示，恢复时间为 **3.6 至 42.7 秒**，比冷启动提速 8 到 **36 倍**🚄。在 Kubernetes 上管理推理服务的工程师，可以用 PodSnapshot 自定义资源评估接入成本。


![NVIDIA Snapshot 把推理冷启动从分钟压到秒级 · 原文封面](https://www.bestblogs.dev/en/article/ab6dbebd36/opengraph-image?696e70e5d7b1d782 "NVIDIA Snapshot 把推理冷启动从分钟压到秒级 · 原文封面")

---

### 8. 罗永浩双 11 直播演示 TRAE，AI 编程破圈至大众

**AI 编程工具在直播间完成了一次大众首秀。** 量子位的[罗永浩双 11 直播演示 TRAE，AI 编程破圈至大众](https://www.qbitai.com/2026/11/509146.html)描述，罗永浩在双 11 直播中实际操作了 **TRAE**，向非技术观众演示 AI 辅助编程的基本流程。报道用"**价格、门槛全打穿**"概括此次呈现方式。这次直播标志着 AI 编程工具从开发者社区向更广泛消费人群迈出一步。对普通用户而言，能直接观察到 TRAE 的实际交互方式比阅读功能说明更直观。

---

### 9. Grok Bot 与 Cursor Cloud Agent 组合出双层 Agent 架构

**个人 Agent 被拆成身份层与执行层分工协作。** 开发者 Kangyuan.C 在[Grok Bot 与 Cursor Cloud Agent 组合出双层 Agent 架构](https://m.okjike.com/originalPosts/6af468a2136b2761c6f5134c)里整理出一套实用分工：**Grok** Bot 运行在持久云电脑上，负责保存登录态、记忆与偏好，承担**身份层**常驻；Cursor Cloud Agent 每个任务分配独立虚拟机，完成编码、测试和部署闭环后交回预览链接。用户只在任务起点表达意图，终点确认结果，中间过程全部由两层各自承担。已经在用 Cursor 的开发者，可以参考这套分工配置自己的持久化 Agent。

![Grok Bot 与 Cursor Cloud Agent 双层 Agent 架构示意](https://cdnv2.ruguoapp.com/Fi1slNMVArtBAu05B6V5N1n0FPv6v3.png "Grok Bot 与 Cursor Cloud Agent 双层 Agent 架构示意")

---

### 10. 开发者吐槽 GPT-6 写 bug 多、理解蠢，自产自销

**GPT-6 系列在实际编程任务中引发明显不满。** 开发者易凡在[开发者吐槽 GPT-6 写 bug 多、理解蠢，自产自销](https://m.okjike.com/originalPosts/6af467073ce945612e85bb24)里直说：GPT-6.1 sol 和 6.0 Astra 的**需求理解**频繁出错，review 意见不考虑可见上下文，写出的 bug 比解决的多。他开始怀疑这是模型"**自产自销**"——自己制造问题，让用户再调用它来解决，循环烧 token。这是个人使用体验，不代表系统性测评，但对重度依赖 GPT-6 做代码审查的开发者是个值得留意的信号。

---

## **⌘ 开源 TOP 项目**

### openai/codex-security：AI 驱动的安全漏洞修复 CLI

**OpenAI 把安全扫描能力打包成命令行工具。** [openai/codex-security 仓库](https://github.com/openai/codex-security)提供 TypeScript SDK 与 CLI，支持发现、验证和自动修复安全漏洞，可通过 npm 安装 `@openai/codex-security`。今日新增 **52 颗 Stars**，累计 11,727 颗。适合需要在 CI/CD 流程中集成 AI 安全检查的后端开发者和安全工程师。

---
## **◉ 社媒精选**

### 少楠盘点 10 小时以上的 AI 消费：视频和工具，文字一篇没有

**深度使用 AI 内容的用户，视频和工具占多数。** 产品设计师少楠在[即刻的问答帖](https://m.okjike.com/originalPosts/6af46ad03ce945612e8623d9)里列出近期相处超过 10 小时的 AI 生成物：AI 短片《持械入宋》、chatmemo 对话备份工具、Claude 的文档工具，以及设计类 Skill——**AI 文字内容**一篇都没有。这个信号和"AI 内容泛滥"的常见叙事相反，实际重度使用者消费的是工具和视频，而非文章。做 AI 内容分发的团队可以把这个用户侧视角放进选题参考。

---
## **😄 AI趣闻**

### Craft Anything 官方宣传"一键复刻"，网页版其实只是文件识别器

开发者时空猫把 **Craft Anything** 的网页版自己部署了一份，拖入 `/bin/true`，一秒内吐出格式、架构、入口点和 SHA256，干净利落。然后他在[即刻帖子](https://m.okjike.com/originalPosts/6af41d1038389f5993d194a8)里补了一句关键说明：官方宣传的"**一键复刻**"是桌面版的功能，网页版没有反汇编，也没有 AI 解释，就是个文件识别器。广告词和实际功能之间隔了整整一个桌面客户端。老电脑没有 WebGL2 的话，连文件识别器都打不开。

![把 Craft Anything 的官方网页版挂到自己站上了，打开直接拖文件，不联网也不上传。 ](https://cdnv2.ruguoapp.com/Fl0n-guRVpt6pqzggJ2x-DJ8Eoagv3.png "把 Craft Anything 的官方网页版挂到自己站上了，打开直接拖文件，不联网也不上传。 ")

---
## **❓ 相关问题**

**Claude Fable 5.2 和 Mythos 5.2 现在怎么访问，哪个版本适合普通开发者？**

根据 [Anthropic 官方公告](https://www.anthropic.com/claude-fable-and-mythos-5-2)，Fable 5.2 面向公众开放，通过常规 API 调用即可使用，输入价格每百万 token 8 美元；Mythos 5.2 需通过网络安全或生命科学资质审核才能申请。日常编程和内容创作推荐先用 Fable 5.2 的低档位跑测试，确认成本可控后再加量。