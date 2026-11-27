---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/11/27
breadcrumbs: false
next: /2026-11/2026-11-27
description: "智谱 GLM-5.4 编程胜率对旧版超五成，但对 Kimi 仍落后十个百分点。 从 UI 原语化到 CLI 接 Agent，各方都在把现有工具塞进智能体工作流。 开发者今天优先看 CLI-Anything 和 UI SDK，再决定哪个工具先接进自己的流程。"
cascade:
  type: docs
---

## **今日摘要**

```
智谱 GLM-5.4 编程胜率对旧版超五成，但对 Kimi 仍落后十个百分点。
从 UI 原语化到 CLI 接 Agent，各方都在把现有工具塞进智能体工作流。
开发者今天优先看 CLI-Anything 和 UI SDK，再决定哪个工具先接进自己的流程。
```

## **🔥 今日焦点 TOP 10**

### 1. GLM-5.4 编程能力自评领先上代，对 Kimi 仍有差距

**智谱新版编程提升了。** 11 月 23 日，[智谱发布 GLM-5.4](https://juejin.cn/post/7712027193627803658) 并公布了 **200 个**真实编程场景对照。自评数据中，5.4 对旧版 5.3 胜率 51.1%、负率 23.1%；对 Kimi K3.1 Pro 胜率 41.8%、负率 31.3%，胜负差缩到 **10.5 个百分点**。第三方测试记录到相近趋势，但这份数据由智谱自组织，无法直接换算成日常写代码的加速幅度 🧪。需要编程能力横评参考的开发者，可以翻看原帖里多组第三方测试并自行对照。

![智谱自评的编程场景胜平负，蓝色为 GLM-5.4 胜，黑色为平，绿色为负](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/35fb21261944476498a3eb32297d7e58~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgQUFB54ix5a2m5Lmg55qE5YiY5ZOl:q75.awebp?rk3s=f64ab15b&x-expires=1796269919&x-signature=hSP%2B%2FxT%2BsRpOySQSgVcn%2FhH0Bbc%3D "智谱自评的编程场景胜平负，蓝色为 GLM-5.4 胜，黑色为平，绿色为负")

---

### 2. 腾讯元宝换道搜索反攻，月活仍落后豆包十倍

**正面战场差距已定。** 🎬 据 36氪整理的 [QuestMobile 今年 9 月数据](https://www.36kr.com/p/4086109887883905)，豆包 App 月活 **4.19 亿**，腾讯元宝**仅 3733 万**，差距超过十倍。腾讯选择绕道搜索：10 月底对外开放 API，11 月 11 日上线元宝搜索网页版，微信内部则通过公众号摘要、视频号一键提炼和负一屏入口持续渗透。这套"嵌入内容消费流程"的打法能否改变格局，值得持续观察。

![元宝搜索界面](https://img.36krcdn.com/hsossms/20261126/v2_3f26547752aa41efa56c684545b4d173@000000_oswg37139oswg1080oswg586_img_000?x-oss-process=image/format,jpg/interlace,1 "元宝搜索界面")

---

### 3. Anthropic 员工股票财富，入职两年即可达数千万美元

**AI 造富速度令人咋舌。** 📌 据阮一峰在[科技爱好者周刊第 421 期](http://www.ruanyifeng.com/blog/2026/11/weekly-issue-421.html)引用的 @AndrewBenson 统计，Anthropic 约有 **5300 名员工**，若市值升至 **1.4 万**亿美元，2025 年入职者股票收益中位数约 2600 万美元，2026 年入职者约 500 万美元。这家 2021 年成立的公司，让"三年上岸"从段子变成可能的事。正在考虑 AI 大厂跳槽的从业者，这组数字值得列进薪资谈判的参照系。

![科技爱好者周刊（第 421 期）：AI 的疯狂造富](https://cdn.beekka.com/blogimg/asset/202611/bg2026112608.webp "科技爱好者周刊（第 421 期）：AI 的疯狂造富")

---

### 4. shadcn/ui 团队推出 UI SDK，把组件行为变成 Agent 原语

**UI 组件变成 Agent 可调用的行为原语 🤖。** 宝玉在推文中介绍，[shadcn/ui 团队发布 UI SDK](https://x.com/dotey/status/2126070816534151538)，核心设计是将"**打开弹出层**""**方向键移动焦点**"等 UI 行为拆成 Agent 可直接调用的原语。这样做的好处是框架无关，同一套原语可应用于 React、Vue、Svelte、Solid 等不同框架。宝玉为原视频补配了中文配音，前端开发者或 AI 应用开发者可访问 ui-sdk.dev 查看文档和演示。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2126069690178912256/vid/avc1/1280x720/1_VGh9jU0ZzPNGtl.mp4?tag=29"></video>

---

### 5. Polymarket 新增算力频道，可直接押注 GPU 租赁价格走势

**算力正在被金融化 📄。** rosicky311\_明浩在即刻发帖指出，[Polymarket 上线了 compute 频道](https://m.okjike.com/originalPosts/6b078dfa3ce945612e9277ac)，允许用户通过盘口买卖 H100/B200/B300 每小时租赁价格的涨跌走势。从 **GPU** 卡、数据中心、水电租赁，到债券、SPV 和担保，算力投入的每一层已具备金融化条件，衍生品市场是这条链路的自然延伸。对算力市场走势有判断的从业者，这个频道可作为一个价格信号的参考窗口。

![Polymarket 算力频道截图](https://cdnv2.ruguoapp.com/Fvq4WswBmwDZNFD7r8CbEl5bG-X2v3.png "Polymarket 算力频道截图")

---

### 6. HN 修复 Ask 页面候选逻辑，文字帖数量恢复正常

**Ask HN 页面恢复了更多文字帖。** 💻 此前有读者发现 **Ask** 页面内容骤减，分页入口消失。据 [HN 修复 Ask 页面候选逻辑，文字帖数量恢复正常](https://news.ycombinator.com/item?id=50649864)，旧逻辑从全站排名前 1500 条里过滤文字帖，合格内容不足时页面就会变空。他已改为单独计算 **Ask** 页的候选排序，Tell HN 和无前缀文字帖也纳入同一列表。这一改动影响开发者和研究者在 HN 上发起讨论帖的可见度。

---

### 7. AI 时代"大摩擦"理论：有摩擦才有多样性

**"无缝即无魂"的反弹正在蔓延。** 📝 Simon 的白日梦在即刻发文，介绍欧美设计界今年最热的 [Friction-maxxing（摩擦力最大化）思潮](https://m.okjike.com/originalPosts/6b08f4ce136b2761c6271a85)：AI 把生产压缩到极致后，最先消失的就是摩擦力，留下的是"**平庸的最优解**"。他认为，不只欣赏作品需要摩擦力，自己创作时同样需要。这对重度依赖 AI 辅助写作和创作的从业者是一个值得留意的信号：**效率工具用猛了**，也可能让产出趋同。

---

### 8. AI 帮普通用户完成一周工程量的 self-hosting 配置

**AI 把 self-hosting 的入门门槛降低了。** 📊 咸话咸说在即刻转述，据[博主 Jan-Lukas Else 自述](https://m.okjike.com/originalPosts/6b08c1ed38389f5993069ab2)，他把整套 infra 放在 Git 里，让 AI agent 像改软件一样修改配置，VPS 的 Debian-based bootc image 在 AI 协助下**半天完成**，他估计没有 AI 至少需要一周。HN 上也有人指出反面代价：**self-hosting** 本来很有趣，现在还得对付大量 AI bot 的访问压力。降了折腾成本，但运维挑战并没有消失。

---

### 9. CODEX 消息队列设置重新可配置，优先级排队功能找回来了

**CODEX 队列优先级设置重新可用 ⚙️。** V2EX 用户 feng9601061 发帖，[在 CODEX 客户端设置里找到了](https://www.v2ex.com/t/1260229#reply0)此前更新后消失的消息队列配置项。旧版支持多条消息排队并可手动调整优先级；新版更新后一度改成全部推入上下文由 AI **自动引导**，高频用户反映体验变差。目前该选项已可在设置中手动切换回来，重度使用 **CODEX** 的开发者可以去设置里确认一下。

![CODEX 消息队列设置截图](https://p.dramapage.com/group2/91baefd6f05bbceca519e887d592fc2f.png "CODEX 消息队列设置截图")

---

### 10. 美国年轻人"宁可单身也不和搞 AI 的处对象"

**AI 从业者的社交形象正在引发争议。** 💬 一篇在国内广泛转发的文章指出，[美国年轻人"宁可单身也不和搞 AI 的处对象"](https://mp.weixin.qq.com/s/OVhEs5IqTcA9VUoa9aoOfA)，话题在社媒引发大量讨论。文章将这种情绪概括为"**民怨沸腾**"。这条信号来自社媒转发，具体调查样本和数据尚不明确，可作为 AI 行业社会认知变化的待观察线索。

![民怨沸腾](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vXUelfKjHMiaz9seCzG687mKwfQXKDnicnYEhrgYvUOB0YMA7EWEbrphz2lDPcc9XokH1tPxl165XZTLXgjsElceMbiabSnQYR7MQPzR8hwdQA/0?wx_fmt=jpeg "民怨沸腾")

---

## **⚡ 产品与功能更新**

### shadcn/ui 团队发布 UI SDK，前端 Agent 接入更统一

**UI 行为原语化，框架无关 🧩。** shadcn/ui 团队推出的 [UI SDK 把 UI 组件拆成 Agent 可用的行为原语](https://ui-sdk.dev/)，支持 React、Vue、Svelte、Solid 等主流框架无缝接入。宝玉为原版无声视频配上了中文配音，降低了中文开发者的理解成本。正在为 Agent 工作流搭配前端交互层的开发者，可以直接查阅 ui-sdk.dev 上的文档。

---
## **⌘ 开源 TOP 项目**

### openvinotoolkit/openvino：推理优化与跨硬件部署

**英特尔主推的推理优化工具包 🔧。** [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) 是一套用于优化和部署 AI 推理的开源框架，支持将模型转换并加速运行在 CPU、GPU、NPU 等不同硬件上。今日新增 **176 颗 Star**，总 Stars 达 12867。适合需要在边缘设备或本地硬件上跑模型推理、又想减少厂商锁定的工程师试用。

---

### HKUDS/CLI-Anything：让任意软件支持智能体调用

**用 CLI 把任何软件接进 AI Agent 🤖。** [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) 的目标是让所有软件"原生"支持 Agent 调用，配套平台 CLI-Hub（clianything.cc）提供可浏览的命令集合。今日新增 **746 颗 Star**，总 Stars 已达 66616，是本日榜热度最高的 AI 项目之一。想把现有 CLI 工具纳入 Agent 工作流的开发者，可以先看 CLI-Hub 上有没有现成的命令覆盖自己的场景。


![HKUDS/CLI-Anything：让任意软件支持智能体调用 · README 展示图](https://raw.githubusercontent.com/HKUDS/CLI-Anything/main/assets/cli-typing.gif "HKUDS/CLI-Anything：让任意软件支持智能体调用 · README 展示图")

---
## **◉ 社媒精选**

### AI self-hosting 半天完成，但 bot 流量也跟着来了

**AI 降低了 self-hosting 门槛，没有消除运维摩擦。** 💬 咸话咸说在即刻转述，据 [Jan-Lukas Else 博客自述](https://janlukas.blog/posts/ai-self-hosting)，他把整套基础设施放在 Git 中，AI agent 协助修改配置，原本需要一周的 VPS bootc 镜像工作半天完成。但 HN 上有反驳：self-hosting 变容易之后，机器要对付的 AI bot 访问压力反而在增加。这个"门槛降了、敌人多了"的处境，是当前 self-hosting 社区的真实信号。

---

### 95GB 网络安全数据集开源，覆盖 30 余个攻防细分领域

**大规模安全训练数据公开了 🔒。** Gorden Sun 在推文中介绍，[Hugging Face 上一个 95GB 的网络安全数据集](https://x.com/Gorden_Sun/status/2125959027809264121)已开源，包含 507 个文件，涵盖红蓝对抗、Web 安全、漏洞挖掘、数字取证和 AI 安全等 30 余个细分领域。内容整合了 HackTheBox 靶场、PortSwigger 安全课题和 MITRE 攻击框架，包括攻防步骤、检测规则和应急响应方案。正在训练安全领域模型或构建安全知识库的团队，可以在 Hugging Face 上搜索 Vyber07/cyber-security 直接取用。

![95GB 网络安全数据集内容概览](https://pbs.twimg.com/media/HYDsUHfbQAA6j2d?format=jpg&name=orig "95GB 网络安全数据集内容概览")

---

## **😄 AI趣闻**

### 视频模型只用了一两个镜头，账号涨了十万粉

有人做 AI 像素风 MV，[从10月25日开始发、一个月涨了10万粉](https://x.com/op7418/status/2125983266117423533)，结果拆开流程一看：**Opus 5.5** 负责写代码、剪辑和转场动画，场景和人物全用图片模型生成静图，再让 Opus 5.5 给图片加点简单动效🎬。真正用到**视频模型**的，整条片子可能就**一两个镜头**。视频博主的秘密武器，主要是个文本框。

## **❓ 相关问题**

### Codex 多任务排队时，能手动调整消息处理顺序吗？

**可以在设置里找回队列优先级控制。** 有用户发现[客户端隐藏的排队设置](https://www.v2ex.com/t/1260229#reply0)，能切回手动排序而非全交 AI 自动引导。高频用 Codex 跑多条任务的，可以搭配 [爱窝啦·AI账号店的 ChatGPT Plus｜成品号【月卡】](https://www.aivora.cn/products/cheng-pin-hao-yue-ka) 开个独立账号试试。