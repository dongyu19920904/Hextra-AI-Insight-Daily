---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/9/19
breadcrumbs: false
next: /2026-09/2026-09-19
description: "千问音视频调用成本降价超九成，Anthropic 开源终端编码工具登上热榜，朱啸虎断言开源模型五年走完 Linux 三十年的路。 产品降价、开源工具、投资判断和历史检索功能背后都指向同一件事：技术扩散速度开始超过技术进步速度，商业决定胜负。 今天先看千问新价格能省多少钱，再试 Claude Cod…"
cascade:
  type: docs
---


## **今日摘要**

```
千问音视频调用成本降价超九成，Anthropic 开源终端编码工具登上热榜，朱啸虎断言开源模型五年走完 Linux 三十年的路。
产品降价、开源工具、投资判断和历史检索功能背后都指向同一件事：技术扩散速度开始超过技术进步速度，商业决定胜负。
今天先看千问新价格能省多少钱，再试 Claude Code 能否减少重复操作，最后核实 ZCode 是否在静默上传你的完整项目历史。
```

## **🔥 今日焦点 TOP 10**

### 1. 千问推出 Qwen3.8-Omni-Flash 支持 1M 上下文

**全模态处理能力强化。** AIBase 报道称，[千问推出 Qwen3.8-Omni-Flash 支持 1M 上下文](https://www.aibase.com/zh/news/31167)。支持文本、图像、音频与视频输入，音视频处理接近 Gemini3.8Flash。API 调用成本大幅下调，**音频输入降价 98%**，音视频输入降价 **93%**。正在做多模态长任务的开发者，今天可以重新算一次成本。

![image.png](https://upload.chinaz.com/2026/0918/6392532749350141188755656.jpg "千问 Qwen3.8-Omni-Flash 性能对比")

---

### 2. Anthropic 开源终端 AI 编码工具 Claude Code

**写代码的方式变了。** [Anthropic 开源终端 AI 编码工具 Claude Code](https://github.com/anthropics/claude-code)，当日新增 **444 Stars**，总计达到 **146445 Stars**。直接驻留在终端，理解代码库结构，通过自然语言执行常规任务、解释复杂代码并处理 git 工作流程。适合希望减少重复操作、快速理解项目的开发者。

---

### 3. 朱啸虎断言技术扩散超过技术进步时商业决定胜负

**投资人开始看商业而非模型。** 据 36氪报道，[金沙江创投朱啸虎在北大演讲中指出](https://www.36kr.com/p/3988233985693572)，当技术普及速度超过技术进步速度，AI 创业的决胜要素只剩人文和商业。他用 Linux 对比开源模型，认为开源模型 **五年会走完 Linux 三十年的路**。技术扩散后，前沿模型的获客魔法已经失效，客户可能变成对手。对创业公司来说，今天需要重新评估靠模型优势建立的护城河。

![image](https://img.36krcdn.com/hsossms/20260918/v2_432dffbe8f3c4f9d8b7ad74ff12ae5a7@5508593_oswg292268oswg748oswg492_img_000?x-oss-process=image/format,jpg/interlace,1 "朱啸虎演讲现场")

---

### 4. Exa 推出 Snapshot 检索历史时间点网页内容

**可以搜到某个过去日期的网页状态了。** Gorden Sun 在推文中介绍，[Exa 上线的 Snapshot 功能](https://x.com/Gorden_Sun/status/2100851923020902713)让 Agent 指定日期后检索当时网页真实内容。解决两个问题：测试 AI 模型时避开后来才出现的标准答案，以及金融投资人员回测某个历史日期的公开信息。适合需要公平评测或策略回测的团队。

---

### 5. macOS Golden Gate 27.0 预览 Agent 自行安装转写工具

**AI 动手装软件的场景出现了。** 向阳乔木在推文中记录，[macOS Golden Gate 27.0 预览 Agent 自行安装转写工具](https://x.com/vista8/status/2101130045481968045)。操作系统版本为 **Golden Gate 27.0**，liquid Glass 界面风格逐步成熟。对开发者和测试人员来说，Agent 能否稳定完成环境配置开始有实际信号。

![Tweet Image](https://pbs.twimg.com/media/HSi1kuNasAAP2u-.jpg "macOS Golden Gate Agent 自动安装工具")

---

### 6. Jev 模型通过并行采样实现决策层高速运行

**一个只做决策的模型上线了。** 向阳乔木在推文中整理，[Jev 模型通过并行采样实现决策层高速运行](https://x.com/vista8/status/2100775218830815554)。通过 RLCD 加并行采样完成结构化决策，智能接近中等 LLM，但成本和速度快 **一到两个数量级**。零幻觉指零类型或结构错误，不代表语义正确。最适合当超高速语义判断和打分引擎，适合需要频繁做决策树或分类任务的开发者。

![Tweet Image](https://pbs.twimg.com/media/HSdz4CCawAAOtoz.jpg "Jev 模型决策流程")

---

### 7. OpenAI 发布 Astra for Law 内置美国判例法条

**律师工作流又少一步。** Telegram 频道消息称，[OpenAI 发布 Astra for Law 内置美国判例法条](https://t.me/aigc1024/24730)，内置法律搜索和 **2.3 亿网址的美国判例法条**，每天更新。律师把案情输入后，相关判例和原文段落直接给出并**支持自行核验**。Sullivan & Cromwell 用它做合同分析器，Cooley 用于 IPO 上市准备。适合需要频繁查案例的美国律师团队。

---

### 8. ZCode 被曝静默上传完整 Git 历史引发隐私质疑

**用户发现工具在背后打包项目全部历史。** 掘金文章披露，[ZCode 被曝静默上传完整 Git 历史引发隐私质疑](https://juejin.cn/post/7686753873659953198)。即使是付费用户也受此影响。开发者担心敏感代码和历史提交记录被上传。正在使用 AI 编码工具的团队，今天需要检查工具的数据权限和上传行为。

![image](https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/cac9467a1b5c46dea2df0425c35e992f~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sy57u05pav:q75.awebp?rk3s=f64ab15b&x-expires=1790349722&x-signature=xSN010WaT%2FXQ6MVehPqMUe6gneg%3D "ZCode 上传行为分析")

---

### 9. 魔搭联合发布开源模型紫皮书覆盖选型到评测

**从零打造专属模型有了完整手册。** 即刻原帖宣布，[魔搭开源的「开源模型紫皮书」涵盖选型、部署、微调与评测](https://m.okjike.com/originalPosts/6aac9ba8cfb5d08b3e29ef67)。GitHub 仓库为 modelscope/ms-cookbook，在线阅读地址已开放。适合希望从头理解开源模型工作流的开发者和团队。

---

### 10. 用户提出 Eval 从照顾人的缺陷转向定义值得改变的状态

**AI 工作流的评估位置在右移。** 即刻原帖分析，[当前 Eval 位于 Model 到 Human 之间](https://m.okjike.com/originalPosts/6aad57ec6af7c2bd05742be7)，目标是让模型输出更易读。但报告、Slides 和前端只是中间表示，本身不改变状态。下一阶段 **Eval** 应该右移到 Action 之前，评估哪个状态值得被改变，而非优化人的理解成本。对构建 Agent 和**自动化流程**的开发者来说，这是重新思考评估体系的信号。

![image](https://cdnv2.ruguoapp.com/FuNRCNmfjzPGfsier-fWhsK56nLUv3.png "AI 工作流演进示意图")

---

## **⌘ 开源 TOP 项目**

### TencentCloud/Octop：多用户多代理 AI 助手

**自托管方案多了一个选择。** [TencentCloud/Octop 今日登上 GitHub Trending Daily](https://github.com/TencentCloud/Octop)，当日新增 **569 Stars**，总计 **4060 Stars**。支持多用户和多代理管理，适合团队希望在内部服务器部署 AI 助手的场景。

---

### Fission-AI/OpenSpec：面向 AI 编码助手的规格驱动开发

**用规格文件指导 AI 写代码。** [Fission-AI/OpenSpec 当日获得 296 Stars](https://github.com/Fission-AI/OpenSpec)，总计 **69482 Stars**。通过规格驱动开发 (SDD) 模式，让 AI 编码助手按照明确的规格文件生成代码。适合希望标准化 AI 生成代码质量的开发团队。

---

### supermemoryai/supermemory：本地运行的记忆与上下文引擎

**AI 时代的个人记忆 API 可以完全离线了。** [supermemoryai/supermemory 今日新增 140 Stars](https://github.com/supermemoryai/supermemory)，总计 **30431 Stars**。极快、可扩展，支持完全本地运行。适合需要私密管理个人知识库和上下文的用户。

---
## **◉ 社媒精选**

### Figure 公司 Helix 2.5 机器人进入 30 个真实家庭完成家务

**零微调直接上岗的机器人出现了。** Gorden Sun 在推文中介绍，[Figure 把搭载 Helix 2.5 的人形机器人送进湾区 30 个真实家庭](https://x.com/Gorden_Sun/status/2100917239348445651)。没有提前踩点、没有微调，直接完成收拾玩具、折叠毛巾和铺床。机器人用海量真实行为数据训练，理解物理规律和动作协调。对关注具身智能落地的从业者来说，这是从实验室到真实场景的重要信号。

---

### PrismML 发布三值化模型压缩体积 9 倍性能保留 98.2%

**模型可以塞进个人设备且几乎不掉点了。** Gorden Sun 在推文中整理，[PrismML 基于 Qwen3.8 27B 推出三值化 Bonsai 2 27B](https://x.com/Gorden_Sun/status/2100843160423534985)，体积压缩至 **5.9GB**，保留原模型 **98.2%** 综合评测表现。支持 262K 长上下文，RTX 5090 推理速度达到 **143 tokens/s**。适合需要在本地部署大模型的开发者。

![image](https://pbs.twimg.com/media/HScnLImaoAAJjz0?format=jpg&name=orig "Bonsai 2 27B 性能对比")

---

### ChatGPT 网页端已支持直接向 GitHub 提交 PR

**对话框里就能改代码并提交了。** 宝玉转发推文记录，[ChatGPT 网页端配置后可粘贴 GitHub 链接直接提 PR](https://x.com/dotey/status/2100780972094402584)。用户提需求后 AI 完成修改并提交，官方文档尚未同步更新。适合希望加快代码审查和简单功能迭代的开发者。

![image](https://pbs.twimg.com/media/HSdo71ObQAA2FuK?format=jpg&name=orig "ChatGPT 提交 PR 界面")

---
## **😄 AI趣闻**

### 业务词典让 AI 不再猜错表格里的代号

一个数据分析 Agent 看到表格里全是代号和数字，猜不出背后业务含义。Gorden Sun 在推文中介绍，[EvoOntology 项目给 AI 打造了一本业务词典](https://x.com/Gorden_Sun/status/2100846451375141145)，梳理隐藏规则形成知识库，还能一边看 AI 干活一边自动补充修正。论文和 GitHub 仓库已公开。结果是 AI 越用越懂业务，不用每次都从头摸索。

![image](https://pbs.twimg.com/media/HSe0tH3aYAAB1Ph?format=jpg&name=orig "EvoOntology 工作流程图")

---
## **❓ 相关问题**

### Qwen3.8-Omni-Flash 国内怎么用？

千问 Qwen3.8-Omni-Flash 已通过阿里云百炼平台和通义千问 API 提供服务。国内用户可直接使用阿里云账号调用，支持文本、图像、音频与视频输入，上下文长度达到 1M。API 调用成本已大幅下调，音频输入降价 98%，音视频输入降价 93%。适合需要多模态长文本处理、希望降低推理成本的开发者和企业。

需要进一步比较当前公开的 AI 账号或订阅服务时，可查看 [**爱窝啦·AI账号店**](https://www.aivora.cn/)；商品、价格与可用状态以官网实时页面为准。
