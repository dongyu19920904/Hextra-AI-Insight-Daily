---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/9/19
breadcrumbs: false
next: /2026-09/2026-09-19
description: "千问音视频成本降超九成、智谱同步发新模型，各家都在抢多模态定价权。 朱啸虎说技术扩散速度超过进步速度，AI 创业的护城河从技术转向商业模式，Eval 也在从输出易读性转向定义值得改变的状态。 今天先看千问价格能省多少钱，再看 ZCode 上传行为提醒你检查工具权限。"
cascade:
  type: docs
---

## **今日摘要**

```
千问音视频成本降超九成、智谱同步发新模型，各家都在抢多模态定价权。
朱啸虎说技术扩散速度超过进步速度，AI 创业的护城河从技术转向商业模式，Eval 也在从输出易读性转向定义值得改变的状态。
今天先看千问价格能省多少钱，再看 ZCode 上传行为提醒你检查工具权限。
```

## **🔥 今日焦点 TOP 10**

### 1. 千问上线 Qwen3.8-Omni-Flash 多模态模型

**API 价格大降。** AIBase 聚合报道显示，[千问上线 Qwen3.8-Omni-Flash 多模态模型](https://www.aibase.com/zh/news/31167)，支持文本、图像、音频与视频输入，**1M 长上下文**。在 **30 项评测中性能平均提升超 26%**，音频与音视频输入成本分别降低 **98% 和 93%**。正在批量调用音视频接口的开发者，可以今天重算成本。

![千问多模态模型性能对比](https://upload.chinaz.com/2026/0918/6392532749350141188755656.jpg "千问多模态模型性能对比")

---

### 2. 朱啸虎称技术平权后 AI 创业只剩商业比拼

**决胜要素变了。** 据 36氪报道，金沙江创投朱啸虎在北大演讲中指出，[技术扩散速度正在超过技术进步速度](https://www.36kr.com/p/3988233985693572)。他把 AI 创业参考系调回二十年前：**开源模型五年会走完 Linux 三十年的路**，前沿模型获客魔法已经失效。当技术普及平权，决胜要素只剩人文和商业。做 AI 应用的创业者，该补商业模式的短板了。

---

### 3. Anthropic 开源终端智能编码工具 claude-code

**代码库常驻助手来了。** GitHub Trending Daily 显示，[claude-code 今日新增 444 Stars](https://github.com/anthropics/claude-code)，总 Stars 达 **146440**。这个 TypeScript 工具驻留在终端，理解代码库上下文。通过自然语言命令执行常规任务、解释复杂代码和处理 git 工作流程。适合需要频繁操作**本地仓库的开发者试用**。

---

### 4. Eval 转向定义值得改变的 state

**评估位置在右移。** 即刻用户在帖子中分析，[Eval 转向定义值得改变的 state](https://m.okjike.com/originalPosts/6aad57ec6af7c2bd05742be7)。报告、Office 三件套和前端只是中间表示，本身不改变 **state**。**Eval 的目标正从理解人的缺陷转向定义下一个值得改变的状态**。Context → Model → Human 之间的 Eval 只是让输出更易读，真正改变 state 需要把 Eval 移到右侧。写代码的人需要重新想清楚，交付物到底是文档还是真实变化。

![AI 工作流演进示意](https://cdnv2.ruguoapp.com/FuNRCNmfjzPGfsier-fWhsK56nLUv3.png "AI 工作流演进示意")

---

### 5. macOS 新版本 Agent 自主安装转写工具

**系统级 Agent 更熟练了。** 向阳乔木在推文中实测，[macOS 新版本 Agent 自主安装转写工具](https://x.com/vista8/status/2101130045481968045)。用户**不需要提前配置依赖**。Agent 识别需求后直接完成工具选择、安装和调用。**Liquid Glass 风格界面也逐渐成熟**。macOS 用户可以关注这个版本的 Agent 自主能力边界。

![macOS Agent 实测截图](https://pbs.twimg.com/media/HSi1kuNasAAP2u-.jpg "macOS Agent 实测截图")

---

### 6. Exa 推出历史网页快照检索功能

**回到过去的搜索来了。** Gorden Sun 在推文中介绍，**Exa** 专为 Agent 提供搜索 API，新推出的 [Exa 推出历史网页快照检索功能](https://x.com/Gorden_Sun/status/2100851923020902713)。用户指定日期后，能搜出当时网页的真实状态。**解决 AI 模型评测作弊和金融策略回测两个难题**。做模型评测或投资回测的团队，现在有了更干净的历史数据源。

---

### 7. Jev 模型专注软件自动化决策

**不聊天只做决策的模型。** 向阳乔木在推文中整理，[Jev 通过 RLCD 与并行采样实现结构化决策任务](https://x.com/vista8/status/2100775218830815554)，智能接近中等 LLM，但**成本和速度快一到两个数量级**。零幻觉指零类型或结构错误，不是语义正确。最合理用法是把它当超高速、可校准的语义判断或打分引擎。适合需要大量决策分支的**自动化场景**。

![Jev 模型特性整理](https://pbs.twimg.com/media/HSdz4CCawAAOtoz.jpg "Jev 模型特性整理")

---

### 8. OpenAI 发布律师专用 GPT-6 Astra

**法律 AI 直接上律师桌面。** Telegram 频道消息称，**OpenAI** 推出 Astra for Law，[内置 2.3 亿网址的美国判例法条](https://t.me/aigc1024/24730)，每天更新。案情输入后直接给出相关判例和原文段落，还能自己核验。**顶级律所 Sullivan & Cromwell 用它做合同分析，Cooley 用于 IPO 准备**。法律从业者需要开始适应 AI 改变研究和准备工作的节奏。

---

### 9. 小云雀 AI 视频达到电影质感

**AI 视频质量又进一档。** Telegram 频道分享的作品显示，[小云雀 AI 视频达到电影质感](https://t.me/aigc1024/24731)。画面质感和叙事节奏都接近传统电影短片，而且还挺搞笑。短视频创作者可以关注这个工具，看看 AI 生成能不能替代部分实拍素材。

---

### 10. ZCode 被曝静默上传完整 Git 历史

**免费额度背后的代价浮出水面。** 掘金文章揭露，[ZCode 被曝静默上传完整 Git 历史](https://juejin.cn/post/7686753873659953198)。从出生到现在的所有记录都会被打包。**付费用户也受影响**。作者提醒开发者检查工具权限范围，尤其是涉及代码历史和敏感信息的项目。使用 AI 编码工具前，先看清楚它会传什么数据。

![ZCode 上传行为分析](https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/cac9467a1b5c46dea2df0425c35e992f~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sy57u05pav:q75.awebp?rk3s=f64ab15b&x-expires=1790349722&x-signature=xSN010WaT%2FXQ6MVehPqMUe6gneg%3D "ZCode 上传行为分析")

---

## **⌘ 开源 TOP 项目**

### TencentCloud/Octop：多用户多智能体自托管助手

**更智能的本地 AI 助手。** [TencentCloud/Octop 今日新增 569 Stars](https://github.com/TencentCloud/Octop)，总 Stars 达 **4055**。这个 Python 项目支持多用户与多智能体协作，可完全自托管部署。适合需要团队共享 AI 助手、但不想依赖云服务的企业或开发团队。

---

### Fission-AI/OpenSpec：面向 AI 的规范驱动开发

**AI 编码助手的新工作方式。** [Fission-AI/OpenSpec 今日新增 296 Stars](https://github.com/Fission-AI/OpenSpec)，总 Stars 达 **69476**。这个 TypeScript 项目推动规范驱动开发（SDD），让 AI 先读规范再写代码。适合有明确架构规范、希望 AI 遵守项目约定的团队。

---

### supermemoryai/supermemory：本地运行的内存引擎

**AI 时代的内存 API。** [supermemoryai/supermemory 今日新增 140 Stars](https://github.com/supermemoryai/supermemory)，总 Stars 达 **30424**。这个 TypeScript 项目提供极快、可扩展的内存与上下文引擎，支持完全本地运行。适合需要长期上下文管理、但不想依赖外部服务的 AI 应用开发者。

---
## **◉ 社媒精选**

### Figure 机器人零样本完成 30 个家庭家务

**不踩点直接干活。** Gorden Sun 在推文中介绍，Figure 公司发布 Helix 2.5 模型，[将搭载该模型的人形机器人送入湾区 30 个真实家庭](https://x.com/Gorden_Sun/status/2100917239348445651)。在完全没有提前踩点、未对房间数据微调的情况下，机器人完成收拾玩具、折叠毛巾和铺床三项家务。这得益于海量人类行为数据的基础训练，让机器人提前理解了物理规律和动作协调方式。家务机器人离实用又近了一步。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2100916701428912128/vid/avc1/3840x2160/QCFy70mISH4OOYkg.mp4?tag=29"></video>

---

### Bonsai 2 将 27B 模型压缩至 5.9GB

**保留 98% 性能的极致压缩。** Gorden Sun 在推文中分享，[PrismML 基于 Qwen3.8 27B 推出三值化模型 Bonsai 2](https://x.com/Gorden_Sun/status/2100843160423534985)。体积压缩 **9 倍至 5.9GB**，保留 **98.2%** 综合评测表现和 **262K** 长上下文。RTX 5090 推理速度达 **143 tokens/s**，可直接在个人设备运行。个人设备跑大模型的成本又降了。

---

### ChatGPT 网页端可直接提交 GitHub PR

**配置后粘贴链接就能改代码。** 宝玉转发的推文显示，[ChatGPT 网页端配置好后可直接接受 GitHub 链接并提交 PR](https://x.com/dotey/status/2100780972094402584)。用户粘贴仓库链接，提出需求，ChatGPT 会修改代码并提交 PR。官方文档还说不能提 PR，但实际已经能用。开发者可以试试这个流程，看看能不能省掉手动提交的环节。

![ChatGPT 提交 PR 截图](https://pbs.twimg.com/media/HSdo71ObQAA2FuK?format=jpg&name=orig "ChatGPT 提交 PR 截图")

---
## **😄 AI趣闻**

### AI 给数据分析打造了本业务词典

有个项目叫 EvoOntology，专门给数据分析 AI 梳理业务规则。很多企业表格里只记录代号和数字，AI 每次都要猜背后的真实含义，经常猜错或重复摸索。[这个项目就是给 AI 整理一本"业务词典"](https://x.com/Gorden_Sun/status/2100846451375141145)，把隐藏的业务规则结构化。而且它还能一边看着 AI 干活，一边自动补充和修正词典内容。AI 越用越懂业务，但词典越来越厚，最后可能比业务系统本身还复杂。

![EvoOntology 示意图](https://pbs.twimg.com/media/HSe0tH3aYAAB1Ph?format=jpg&name=orig "EvoOntology 示意图")

---
## **❓ 相关问题**

### Qwen3.8-Omni-Flash 国内怎么用？

千问官网已开放 Qwen3.8-Omni-Flash 的 API 调用，支持文本、图像、音频与视频输入，1M 长上下文。开发者可直接在[AIBase 对这项消息的报道](https://www.aibase.com/zh/news/31167)。音视频输入成本较前代降低 93-98%，适合需要批量处理多模态内容的场景。

需要进一步比较当前公开的 AI 账号或订阅服务时，可查看 [**爱窝啦·AI账号店**](https://www.aivora.cn/)；商品、价格与可用状态以官网实时页面为准。