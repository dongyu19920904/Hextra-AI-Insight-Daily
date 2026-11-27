---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/11/27
breadcrumbs: false
next: /2026-11/2026-11-27
description: "GLM-5.4编程评测显示对主要竞品胜负差收窄至个位数，Anthropic员工股票收益中位数测算达亿级美元。 各栏目共同指向同一件事：工具、工作流和激励都在向Agent调用和基础设施层集中。 今天优先看shadcn UI SDK和CLI-Anything，再决定Agent工作流里缺的那一层从哪里补。"
cascade:
  type: docs
---

## **今日摘要**

```
GLM-5.4编程评测显示对主要竞品胜负差收窄至个位数，Anthropic员工股票收益中位数测算达亿级美元。
各栏目共同指向同一件事：工具、工作流和激励都在向Agent调用和基础设施层集中。
今天优先看shadcn UI SDK和CLI-Anything，再决定Agent工作流里缺的那一层从哪里补。
```

## **🔥 今日焦点 TOP 10**

### 1. GLM-5.4 编程能力横评：自测赢多输少，第三方结论更分散

**相比 5.3 有进步。** 💻 这篇[掘金横评汇总了多家公开评测结果](https://juejin.cn/post/7712027193627803658)，智谱自己组织的 **200 个**编程场景中，5.4 对 5.3 胜 51.1%、负 23.1%。对 Kimi K3.1 Pro，胜负差缩到 10.5 个百分点；对 DeepSeek-V4A1-Flash-1017 仅差 3.4 个百分点。**第三方结果更分散**：做完整应用时 5.4 略高于 Kimi，修复已有代码缺陷时则落后。正在评估国产编程模型的开发者，这组数据可以作为参照，但要注意所有数字来自各家自测或评测方，作者未自行复测。

![智谱自评编程场景胜平负，蓝色为 GLM-5.4 胜，黑色为平，绿色为负](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/35fb21261944476498a3eb32297d7e58~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgQUFB54ix5a2m5Lmg55qE5YiY5ZOl:q75.awebp?rk3s=f64ab15b&x-expires=1796269919&x-signature=hSP%2B%2FxT%2BsRpOySQSgVcn%2FhH0Bbc%3D "智谱自评编程场景胜平负")

---

### 2. 腾讯元宝换路打法，从微信生态渗透 AI 搜索

**正面追赶豆包的窗口基本关闭。** 🎬 据[腾讯元宝换路打法，从微信生态渗透 AI 搜索](https://www.36kr.com/p/4086109887883905)，QuestMobile 9 月数据显示豆包月活 **4.19 亿**，元宝仅 3733 万。腾讯的新打法是绕开 App 正面战场，把元宝搜索嵌进微信内容流：读公众号长文可 @元宝 生成摘要，刷视频号能一键唤起 AI 提炼，负一屏搜索入口也在持续迭代。**10 月下旬还向开发者开放了 API**。这套碎片化调用不要求用户主动下载，对内容消费中的普通用户影响更隐蔽，但对想接入搜索能力的开发者来说，API 窗口已经可以评估了。

![元宝搜索功能界面展示](https://img.36krcdn.com/hsossms/20261126/v2_3f26547752aa41efa56c684545b4d173@000000_oswg37139oswg1080oswg586_img_000?x-oss-process=image/format,jpg/interlace,1 "元宝搜索功能界面展示")

---

### 3. Anthropic 上市后员工财富曝光，造富速度令人咋舌

**入职两年就可能拿到数千万美元。** 📊 [阮一峰周刊引用的统计](http://www.ruanyifeng.com/blog/2026/11/weekly-issue-421.html)显示，按 @AndrewBenson 的测算，若 Anthropic 市值达到 **1.4 万**亿美元（发布时为 1.17 万亿美元），**2023 年入职的约 290 人股票收益中位数约为 1.51 亿美元**，2026 年入职的约 3000 人也有约 500 万美元。这家公司 2021 年成立，2023 年才大规模招聘。对正在考虑加入 AI 创业公司的从业者来说，这是一个罕见的可参照数据点，但数字来自测算，非 Anthropic 官方披露。

![科技爱好者周刊（第 421 期）：AI 的疯狂造富](https://cdn.beekka.com/blogimg/asset/202611/bg2026112608.webp "科技爱好者周刊（第 421 期）：AI 的疯狂造富")

---

### 4. Polymarket 上线算力频道，H100 租价可以像股票一样"下单"

**算力金融化走到了预测市场。** 这条[即刻帖子指向 Polymarket 的算力频道](https://m.okjike.com/originalPosts/6b078dfa3ce945612e9277ac)，用户可以交易 **H100**、B200、B300 的每小时租赁价格走势。从卡到数据中心再到 SPV、担保，算力投入的每个环节都有金融化先例，预测市场是这条路上新冒出的一步🔮。关注 AI 基础设施定价走势的从业者，这个频道提供了一个另类的价格参照面板，但该帖子属于个人观察，实际合约细节需去 **Polymarket** 确认。

![算力预测市场盘口截图](https://cdnv2.ruguoapp.com/Fvq4WswBmwDZNFD7r8CbEl5bG-X2v3.png "算力预测市场盘口截图")

---

### 5. shadcn/ui 团队推出 UI SDK，把 UI 组件拆成 Agent 行为原语

**UI 组件可以跨框架被 Agent 直接调用🤖。** [宝玉的这条帖子](https://x.com/dotey/status/2126070816534151538)整理了 **shadcn/ui** 团队发布的 UI SDK 核心设计：把打开弹层、移动焦点等 UI 交互拆成行为原语，让 Agent 组合调用，而不是绑定特定组件库。**React、Vue、Svelte、Solid 都可以接入**。想在 Agent 工作流里驱动前端交互的开发者，可以去 [ui-sdk.dev](https://ui-sdk.dev/) 看文档，视频原帖为 shadcn 本人发布。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2126069690178912256/vid/avc1/1280x720/1_VGh9jU0ZzPNGtl.mp4?tag=29"></video>

---

### 6. HN 修复 Ask 页缺内容的 Bug，文字帖数量恢复正常

**Ask HN 页面候选逻辑已重写。** 💬 [管理员 dang 在帖子里说明](https://news.ycombinator.com/item?id=50649864)，旧实现复用首页的前 1500 条候选再过滤，一旦符合条件的文字帖不够多，页面就会出现内容稀少甚至分页消失的问题。**新版为 Ask 页单独计算排序候选**，Tell HN 和没有外链的普通文字帖也一并纳入。这次调整不影响投稿规则，只改变了哪些帖子能被显示——经常在 **Ask** HN 发帖或找问题的用户，页面体验已经有所改善。

---

### 7. AI 创作"摩擦力最大化"：欧美设计界开始刻意留粗粝感

**无缝即无魂，设计师在主动找阻力。** 📌 [这条即刻帖子](https://m.okjike.com/originalPosts/6b08f4ce136b2761c6271a85)提到今年欧美设计界最热的词是 Friction-maxxing，宣称 "Seamless is soulless"，人们开始撤屏幕、放原石、欣赏粗粝冲突感。作者把这个现象延伸到 AI 创作：**AI 提效压缩了创作时间，最先消失的就是摩擦力**，剩下的是"**平庸的最优解**"。这不是技术观点，而是一个关于创作心态的信号，对靠差异化内容立身的创作者值得留意。

---

### 8. Sam Altman 谈千禧年奖难题：关键是"敢于相信可能"

**OpenAI 有人很早就押注用模型解决千禧年数学奖。** 📐 [Sam Altman 发推](https://x.com/sama/status/2125990371897557278)提到，Ven Chandrasekaran 是最早相信可以用当时的模型去挑战千禧年奖问题的人之一，并附上了他提出的真空引力量子理论提案链接。**Altman** 强调的不是技术细节，而是**在别人不信时坚持推进的勇气**。这条帖子没有宣布具体突破或发布，更像是对内部人物的公开认可。

---

### 9. AI 帮自建基础设施：一周的活，带 AI 半天搞定

**AI 把 self-hosting 的"折腾门槛"拉低了，但不等于变简单。** 💻 [这条即刻帖子引用的案例](https://m.okjike.com/originalPosts/6b08c1ed38389f5993069ab2)来自博主 Jan-Lukas Else：他把整套 infra 放进 Git，让 AI Agent 像改软件一样修改 VPS 的 Debian-based bootc 镜像，他说没有 AI 至少要一周，带着 AI 半天完成。HN 上也有反调：self-hosting 以前很有趣，现在还要对付 AI 爬虫攻击，**省了力气、多了敌人**。想用 AI 管理个人服务器的开发者，这个信号值得参考。

---

### 10. CODEX 设置里藏着消息队列优先级，老用户可以找回来

**队列排序功能没删，只是移进了设置页。** 📌 这位[V2EX 用户分享了找回方法](https://www.v2ex.com/t/1260229#reply0)：CODEX 客户端更新后，多条消息的处理方式改成了全部放进上下文由 AI **自动引导**，他觉得识别意图变笨了。今天闲来无事翻设置，发现原来的队列和**优先级调整选项还在**，只是换了位置。对高频用 CODEX 的用户来说，翻一下设置页面或许能找回原来的操作习惯。

![CODEX 设置中的消息处理选项](https://p.dramapage.com/group2/91baefd6f05bbceca519e887d592fc2f.png "CODEX 设置中的消息处理选项")

---

## **🧪 前沿研究**

### Agent 自动设计量化方案，6.5 小时和 $69 恢复 98.3% 精度

**量化方案设计可以交给 Agent 自动跑。** ⚙️ 这篇[BestBlogs 整理的 QDA 研究](https://www.bestblogs.dev/en/article/ca774f975d)提出了一套闭环系统：Agent 自主提出量化方案，用 KL 散度快速评分，几分钟完成一轮，而不是几十个 GPU 小时。系统包含 21 种 PTQ 方法可以任意组合。在 320B 参数的 GLM-5.3-Flash 上，QDA 用 6.5 小时、花费 69 美元，以 NVFP4 精度恢复到了 FP8 的 **98.3%**，超过 NVIDIA 官方方案的 96.9%，且不影响推理速度。想在推理成本和精度之间找平衡的开发者，这套方案的入门成本比过去低得多。


![Agent 自动设计量化方案，6.5 小时和 $69 恢复 98.3% 精度 · 原文封面](https://www.bestblogs.dev/en/article/ca774f975d/opengraph-image?696e70e5d7b1d782 "Agent 自动设计量化方案，6.5 小时和 $69 恢复 98.3% 精度 · 原文封面")

---
## **◎ 行业变化与个人影响**

### 美国年轻人"宁单身不和搞 AI 的处对象"，职业标签开始影响择偶

**AI 从业者的社会形象正在分化。** 这个话题由[微信文章整理了美国年轻人的恋爱新观念](https://mp.weixin.qq.com/s/OVhEs5IqTcA9VUoa9aoOfA)，核心说法是部分年轻人宁可单身，也不想和 AI 行业从业者谈恋爱📄。来源是 Telegram 频道转述，原始调查数据和样本范围未在素材中注明，属于待核验的社会信号。对 AI 从业者来说，这是一个提示：技术热潮带来财富和机会的同时，公众认知里的职业形象也在同步被塑造，方向未必都是正面的。

![民怨沸腾](https://mmbiz.qpic.cn/sz_mmbiz_jpg/vXUelfKjHMiaz9seCzG687mKwfQXKDnicnYEhrgYvUOB0YMA7EWEbrphz2lDPcc9XokH1tPxl165XZTLXgjsElceMbiabSnQYR7MQPzR8hwdQA/0?wx_fmt=jpeg "民怨沸腾")

---
## **⌘ 开源 TOP 项目**

### openvinotoolkit/openvino：英特尔 AI 推理优化套件

[openvinotoolkit/openvino 是英特尔主导的 AI 推理优化工具套件](https://github.com/openvinotoolkit/openvino)，支持将模型部署到 CPU、GPU、NPU 等多种硬件⚙️。今日新增 **176 颗 Star**，总 Star 数已达 12873。它解决的核心问题是：同一个模型在不同硬件上推理速度差距大，openvino 提供统一的优化与部署接口。适合需要在英特尔或边缘硬件上跑本地推理的开发者和研究者。

---

### HKUDS/CLI-Anything：让任意软件原生支持 AI Agent 调用

[HKUDS/CLI-Anything 把命令行界面转化为 Agent 可操作的原语](https://github.com/HKUDS/CLI-Anything)，让任何现有软件都能被 AI Agent 直接驱动🤖。今日新增 **746 颗 Star**，总 Star 数达 66639，热度显著。项目核心思路是：不改软件本身，只通过 CLI 层让 Agent 读懂并执行操作。适合正在搭建 Agent 自动化工作流、需要整合遗留工具的开发者，可以去 [clianything.cc](https://clianything.cc/) 查看 CLI 中心文档。


![HKUDS/CLI-Anything：让任意软件原生支持 AI Agent 调用 · READM](https://raw.githubusercontent.com/HKUDS/CLI-Anything/main/assets/cli-typing.gif "HKUDS/CLI-Anything：让任意软件原生支持 AI Agent 调用 · READM")

---
## **◉ 社媒精选**

### 95 GB 网络安全数据集上线，覆盖 30 多个细分领域

**一个面向 AI 安全训练的大规模数据集公开了。** [Gorden Sun 的这条推文](https://x.com/Gorden_Sun/status/2125959027809264121)介绍，该数据集包含 507 个文件、共 **95 GB**，覆盖红蓝对抗、Web 安全、漏洞挖掘、数字取证和 AI 安全等 30 多个细分领域🔒。内容整合了 HackTheBox 靶场、PortSwigger 安全课题和 MITRE 攻击框架，涵盖攻防步骤、检测规则与应急响应方案。数据集地址：[Hugging Face 数据集页面](https://huggingface.co/datasets/Vyber07/cyber-security)，适合做安全方向模型训练或研究的团队参考。

![网络安全数据集领域分布概览](https://pbs.twimg.com/media/HYDsUHfbQAA6j2d?format=jpg&name=orig "网络安全数据集领域分布概览")

---

### 歸藏分享省钱 AI 视频工作流：一个视频只用一两个视频模型镜头

**视频生成成本可以大幅压缩。** 🎬 [歸藏的这条推文](https://x.com/op7418/status/2126208864702140859)分享了一套制作 AI MV 的思路：用 Opus 5.5 负责写代码、剪辑、做转场和非人物动画；用图片模型生成场景和人物，再让 Opus 5.5 给图片加简单动画。**整个视频只在一两个镜头里调用视频模型**，大幅降低生成成本。背景是他看到有创作者用这套像素风 MV 玩法，从 10 月 25 日开始发布，一个月涨了 10 万粉。想做 AI 视频但不想烧算力预算的创作者，这个分层组合思路可以直接参考。

![歸藏分享的 AI MV 制作工作流示意](https://pbs.twimg.com/media/HYECgl9bcAAKW8e?format=jpg&name=orig "歸藏分享的 AI MV 制作工作流示意")

---

## **😄 AI趣闻**

### 国内 AI 助手们排排站，名字先打了个照面

字节叫**小豆**，腾讯叫**小元**，微信还有个**小微**，阿里是**千问 Go!**，蚂蚁叫**灵光**，Manus 叫 **Cue**🧩。[同一周内腾讯元宝小元开始招募首批体验官](https://m.okjike.com/originalPosts/6b093b3b38389f599314cd97)，各家都说要"主动关心用户"。六个产品，六套主动关心，用户还没开口，助手已经在门口排队了。

![国内 AI 助手们排排站，名字先打了个照面 · 原文配图](https://cdnv2.ruguoapp.com/Frkj634OrBbVB3dy_Tv3Nsv_X0ecv3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient "国内 AI 助手们排排站，名字先打了个照面 · 原文配图")

## **❓ 相关问题**

### Codex 多条消息排队时，怎么调整处理优先级？

**可以进设置找消息队列模式，切回手动排队。** 有用户在[设置里意外找回了旧版队列选项](https://www.v2ex.com/t/1260229#reply0)，能手动调整优先级，不必依赖 AI 自动引导。高频用 Codex 跑任务的人，若想同步试 ChatGPT 的任务管理，可看[爱窝啦·AI账号店的 ChatGPT Plus｜成品号【月卡】](https://www.aivora.cn/products/cheng-pin-hao-yue-ka)。