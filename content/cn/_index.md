---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/9/12
breadcrumbs: false
next: /2026-09/2026-09-12
description: "OpenAI 暂停 Pro 订阅且德累斯顿数学家指控剽窃，模型可用性与引用争议同时升温。 英伟达开源 Harness 自优化、Cursor 推协调 Agent、Raycast 接入已有订阅，工具都在让 AI 更深地嵌入开发流程。 今天先核实 GPT-6 Astra 抗体预测的独立验证情况，再试 S…"
cascade:
  type: docs
---

## **今日摘要**

```
OpenAI 暂停 Pro 订阅且德累斯顿数学家指控剽窃，模型可用性与引用争议同时升温。
英伟达开源 Harness 自优化、Cursor 推协调 Agent、Raycast 接入已有订阅，工具都在让 AI 更深地嵌入开发流程。
今天先核实 GPT-6 Astra 抗体预测的独立验证情况，再试 SoL-Pi 在自己项目中能否复现成本下降。
```

## **🔥 今日焦点 TOP 10**

### 1. OpenAI 暂停 Pro 新增订阅

**Pro 订阅关闭入口。** **OpenAI** [暂停了 ChatGPT Pro 的新增订阅](https://m.okjike.com/originalPosts/6aa36101bd0563695be24f63)。已订阅用户不受影响。官方只说资源可用时恢复，未给时间表。这意味着想用 **最高算力档位** 的新用户暂时进不来。需要备选方案或等官方通知。

![OpenAI Pro 订阅暂停通知](https://cdnv2.ruguoapp.com/Fpw5dEE1AMClbDhr_C9XVDekXVCev3.jpg "OpenAI Pro 订阅暂停通知")

### 2. 报道称 GPT-6 Astra 登顶抗体预测榜

**抗体预测出现新赢家。** 36氪报道，科学家 Andrew Aiginin 称 **GPT-6** Astra 在独立基准测试中[击败所有前沿模型](https://www.36kr.com/p/3978455065508609)。它在 **1 小时内** 生成了复杂抗体机理可视化页面。OpenAI 总裁 Greg Brockman 转发了这条消息。报道所述的结果打破"AI for Science 必须用专用模型"的共识。生物制药团队可关注，但需在具体实验中验证可靠性。

![GPT-6 Astra 抗体预测排名](https://img.36krcdn.com/hsossms/20260911/v2_4d8fb1df865043b1b91bac98555046e3@5091053_oswg431038oswg1080oswg1171_img_000?x-oss-process=image/format,jpg/interlace,1 "GPT-6 Astra 抗体预测排名")

### 3. 英伟达开源 SoL-Pi 让 AI 优化 Harness

**Harness 能自己改自己了。** 英伟达开源了 [SoL-Pi 自动优化系统](https://www.36kr.com/p/3978268468525825)。它让 AI 观察 Agent 执行过程，找出低效步骤并提出方案。系统从 152 个候选方向筛选出四大架构机制。实测 **Token 消耗最高省 64%**，**API 调用成本降 50%-54%**。适合长期运行 Agent 的团队，但需自行评估具体任务中的优化效果。

![SoL-Pi 优化流程](https://img.36krcdn.com/hsossms/20260911/v2_289631fa4ab446dfab6b47dd6ac7a853@5091053_oswg85580oswg871oswg505_img_000?x-oss-process=image/format,jpg/interlace,1 "SoL-Pi 优化流程")

### 4. Laravel 禁止 issue 只收 PR

**只能用代码说话了。** PHP 框架 **Laravel** [宣布禁止提交 issue](http://www.ruanyifeng.com/blog/2026/09/weekly-issue-412.html)，只接受 Pull Request。这能过滤垃圾 issue 和骚扰者。维护者不用再花时间确认问题或索要代码。但这要求用户必须读懂源码并动手解决。**提高了参与门槛**。适合成熟项目控制噪音，不适合需要广泛用户反馈的早期产品。

![Laravel issue 新规](https://cdn.beekka.com/blogimg/asset/202609/bg2026091017.webp "Laravel issue 新规")

### 5. Cursor Projects 用协调 Agent 管大项目

**一个 Agent 指挥一群 Agent。** **Cursor** 推出 [Projects 功能](https://x.com/Gorden_Sun/status/2098339616625660308)。协调 Agent 在云端调遣多个子 Agent 并行执行。它只负责任务委派，永不被阻塞。项目上下文在多端同步。默认云端执行，必要时可切本地。适合长期复杂代码任务，但需评估云端成本和数据隐私。

### 6. 德累斯顿数学家指控 OpenAI 剽窃

**又一位数学家发声。** 德累斯顿工业大学数学家 Andreas Thom [晒出邮件指控](https://www.36kr.com/p/3978455165713160) **OpenAI** Astra 剽窃了他 **耗时 20 年** 的非 sofic 群研究。OpenAI 否认了这一指控。此前纽大数学家也因 NS 方程归属问题与 OpenAI 冲突。这些争议提醒研究者核查 AI 生成内容的来源并标注引用。

![Andreas Thom 指控邮件](https://img.36krcdn.com/hsossms/20260911/v2_9bf29226850245fcba13cf51b643cdf2@5091053_oswg41714oswg694oswg194_img_000?x-oss-process=image/format,jpg/interlace,1 "Andreas Thom 指控邮件")

### 7. 机器之心报道 90 后发 Nature 高中生进 ICML

**科研门槛在降低。** 机器之心报道了[蚂蚁 InTech 论坛](https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651056535&idx=1&sn=47e5a4b05b756ef8fee5ffaf95439c00)上的案例。90 后研究者发表 **Nature** 论文，高中生论文被 **ICML 接收**。AI 工具加速了从想法到发表的周期。传统学历和资历壁垒正在松动。科研评价标准需要重新思考。

![蚂蚁 InTech 论坛现场](https://wechat2rss.bestblogs.dev/img-proxy/?k=6710aff5&u=https%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2F5L8bhP5dIqH6icUNcdwIhn8By81h2jF4bqrsVYg0DJmE04nIEPXs7eAx8Z8ibtF6DRBdibFCPISWKh7dI6OBgKeBmbdKYKv6cjibegxdxC9CGbs%2F0%3Fwx_fmt%3Djpeg "蚂蚁 InTech 论坛现场")

### 8. Raycast AI 连接订阅账号

**Raycast 能用自己的订阅了。** Raycast AI [支持连接 Claude 和 ChatGPT 订阅](https://x.com/vista8/status/2098466652023365869)。用户可在 Raycast 中调用已有付费模型。不需要单独为 Raycast AI 付费。**降低了工具切换成本**。适合已订阅多个模型且希望**统一入口的用户**。

![Raycast AI 订阅连接界面](https://pbs.twimg.com/media/HR9AHYMbEAAFsY7.jpg "Raycast AI 订阅连接界面")

### 9. 菲尔兹奖得主邓煜的退休条件

**数学家给 AI 设门槛。** 菲尔兹奖得主邓煜在社交平台[宣布退休条件](https://x.com/dotey/status/2098546430646395259)。如果 AI 能解决所有数学问题，他将退休并创作百合小说。这个表态既是对 AI 数学能力的观望，也展现了数学家对自身不可替代性的自信。关注 AI 数学推理边界的开发者可留意。

![邓煜的社交平台发言](https://pbs.twimg.com/media/HR-I2iZXUAgHbyJ?format=jpg&name=orig "邓煜的社交平台发言")

### 10. melgarafael/DeskcommCRM 开源 AI 销售系统

**又多了个自托管 CRM。** melgarafael/DeskcommCRM [内置原生 AI 代理](https://github.com/melgarafael/DeskcommCRM)和 WhatsApp 集成。是 Kommo、Octadesk 和 Intercom 的开源替代方案。支持 **MCP 协议**、**多租户** 和巴西 LGPD 合规。当日新增 **152 Stars**，总计 **1343 Stars**。适合通过聊天渠道销售且需要自主控制数据的中小团队。需自行部署和维护。

---

## **⌘ 开源 TOP 项目**

### vastsa/PI-Desktop：本地优先 AI 编码代理

vastsa/PI-Desktop 是 [Electron + Rust 主机核心的桌面应用](https://github.com/vastsa/PI-Desktop)。集成 pi Agent Harness 和用户可安装插件。当日新增 **552 Stars**，总计 **2777 Stars**。适合需要离线运行 AI 编码工具、重视数据隐私且愿意自行配置插件的开发者。

### nashsu/llm_wiki：文档自动转知识库

nashsu/llm_wiki [将文档转换为相互链接的知识库](https://github.com/nashsu/llm_wiki)。与每次从头检索的 RAG 不同，它增量构建并维护持久 wiki。当日新增 **647 Stars**，总计 **18735 Stars**。适合需要长期积累和组织大量文档的团队。初次构建需要时间和算力。

### jihe520/MathModelAgent：自动完成数学建模论文

jihe520/MathModelAgent [专为数学建模设计](https://github.com/jihe520/MathModelAgent)。自动完成建模并生成可直接提交的论文。当日新增 **129 Stars**，总计 **4856 Stars**。适合参加数学建模竞赛的学生快速搭建框架。仍需人工审核模型假设和结论合理性。

---
## **◉ 社媒精选**

### 模型降智的四种常见手段

**模型变笨可能被降配了。** 社区开发者总结了[控制成本的四种做法](https://x.com/vista8/status/2098471018641940780)。路由到小模型、调低 juice 值减少思考 token、提前中断思考、动态调整温度参数。其中 juice 值是 OpenAI 推理模型的隐藏参数。满血版约 768，降配池可能只有 128。用户感觉模型降智时，可尝试切换时段或账号观察。

### 达芬奇一直支持 Python 脚本剪辑

**MCP 不是唯一选择。** 开发者指出达芬奇视频编辑软件[一直可以通过 Python 脚本执行剪辑](https://x.com/Gorden_Sun/status/2098420654030958728)。有没有 MCP 支持影响不大。这提醒开发者在追逐新协议前，先确认现有工具链是否已能满足需求。

![达芬奇 Python 脚本剪辑](https://pbs.twimg.com/media/HR8WWezb0AAgwoQ?format=jpg&name=orig "达芬奇 Python 脚本剪辑")

---

## **😄 AI趣闻**

### 自建梯子也要讲礼数

有人把自己折腾 VPN 的经验整理成了开源方案。日常流量走 **Hysteria2**，AI 请求单独甩给 **WARP 出口**，Claude 还要再接个 **固定 SOCKS5**——[这套三层分流的路由思路](https://github.com/yding-git/personal-edge-proxy)像给不同客人准备了专用门牌。最绝的是作者没吹「包你不封号」，反而老实交代这不保证账号安全，你得自己遵守条款。1 核 1G 小机器就能跑，教程写得丢给 AI 都能看懂。这年头不忽悠的细活儿，真不多见。

## **❓ 相关问题**

### ChatGPT Pro 现在还能订阅吗？

目前 **不能新增订阅**。OpenAI 已暂停 ChatGPT Pro 的新用户订阅。已订阅用户不受影响。官方表示在资源可用时恢复，但未给具体时间表。如果需要高算力服务，可关注官方恢复通知或考虑其他模型的付费档位。

需要进一步比较当前公开的 AI 账号或订阅服务时，可查看 [**爱窝啦·AI账号店**](https://www.aivora.cn/)；商品、价格与可用状态以官网实时页面为准。