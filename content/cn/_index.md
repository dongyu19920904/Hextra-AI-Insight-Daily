---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/9/12
breadcrumbs: false
next: /2026-09/2026-09-12
description: "OpenAI 暂停 Pro 新订阅，GPT-6 Astra 拿下抗体预测第一，通用模型开始挑战专用模型。 开源工具和本地运行都在降成本压门槛，英伟达的 SoL-Pi 让 AI 自己优化掉六成 Token。 今天先看焦点第 2 和第 3 条，再决定你的 Agent 要不要换工具链。"
cascade:
  type: docs
---


## **今日摘要**

```
OpenAI 暂停 Pro 新订阅，GPT-6 Astra 拿下抗体预测第一，通用模型开始挑战专用模型。
开源工具和本地运行都在降成本压门槛，英伟达的 SoL-Pi 让 AI 自己优化掉六成 Token。
今天先看焦点第 2 和第 3 条，再决定你的 Agent 要不要换工具链。
```

## **🔥 今日焦点 TOP 10**

### 1. OpenAI 暂停 Pro 新用户订阅

**Pro 订阅停止新增。** OpenAI [暂停了 ChatGPT Pro 的新用户订阅](https://m.okjike.com/originalPosts/6aa36101bd0563695be24f63)。已订阅用户不受影响。官方表示会在资源**允许时恢复**，但未给出时间表。这意味着想要 Pro 权益现在只能等待开放。**计算资源紧张** 可能还会影响现有用户的响应速度。需要稳定高额度访问的开发者要提前评估备选方案。

![OpenAI Pro 订阅暂停通知](https://cdnv2.ruguoapp.com/Fpw5dEE1AMClbDhr_C9XVDekXVCev3.jpg "OpenAI Pro 订阅暂停通知")

### 2. GPT-6 Astra 拿下抗体预测第一

**通用模型打赢专用模型。** **GPT-6** Astra 在独立基准测试中[击败所有前沿模型](https://www.36kr.com/p/3978455065508609)，成为抗体可开发性预测最强 AI。它还在 **1 小时内** 生成了复杂的抗体机理交互可视化页面。此前圈内共识是 AI for Science 必须用专用模型。这次 Astra 直接用通用能力解决了生物医药领域的核心预测问题。药企和生物实验室可以重新评估工具选型，不必每个方向都训练专用模型。

![GPT-6 Astra 抗体预测排名](https://img.36krcdn.com/hsossms/20260911/v2_4d8fb1df865043b1b91bac98555046e3@5091053_oswg431038oswg1080oswg1171_img_000?x-oss-process=image/format,jpg/interlace,1 "GPT-6 Astra 抗体预测排名")

### 3. 英伟达开源 SoL-Pi 自动优化 AI 成本

**Token 消耗降六成多。** 英伟达开源了 Harness 增强层 [SoL-Pi](https://www.36kr.com/p/3978268468525825)，让 AI 自己观察 Agent 执行过程。它找出浪费 Token 的步骤并提出修改方案。系统从 **152 个候选方向** 筛选出四大优化机制。实测显示 Token 消耗最高省 **64%**，API 调用成本降 **50%-54%**。AI 从观察者变成了研究员。开发者可以用这套流水线持续优化自己的 Agent 成本，尤其适合高频调用场景。

![SoL-Pi 优化效果对比](https://img.36krcdn.com/hsossms/20260911/v2_de97afe7564f4e92a6e77dbf758becc3@5091053_oswg98511oswg1080oswg359_img_000?x-oss-process=image/format,jpg/interlace,1 "SoL-Pi 优化效果对比")

### 4. melgarafael/DeskcommCRM 开源 AI 销售系统

**自托管 CRM 内置 AI 代理。** melgarafael/DeskcommCRM 是一个[开源 AI 销售操作系统](https://github.com/melgarafael/DeskcommCRM)，内置 AI 代理并集成 WhatsApp。支持 MCP 协议、多租户和 LGPD 合规。当天新增 **152 Stars**，总计 **1343 Stars**。这是 Kommo、Octadesk 和 Intercom 的开源替代。适合通过聊天销售的企业自行部署。不想依赖第三方 CRM 订阅的小团队可以试试，技术栈是 TypeScript。

### 5. 德国数学家指控 OpenAI 剽窃 20 年研究

**群论大佬晒出邮件铁证。** 德累斯顿工业大学数学家 Andreas Thom [指控 OpenAI 新一代 Astra 剽窃了自己耗时 20 年的非 sofic 群研究](https://www.36kr.com/p/3978455165713160)。他在社交网络公开了邮件证据。**OpenAI** 否认了指控。这是继纽大数学家 Tristan Buckmaster 因 NS 方程归属问题与 **OpenAI** 冲突后，数学界对 OpenAI 的又一次公开质疑。涉及学术成果归属的争议可能影响 AI 公司与学术界的合作信任。

![Andreas Thom 公开的邮件截图](https://img.36krcdn.com/hsossms/20260911/v2_9bf29226850245fcba13cf51b643cdf2@5091053_oswg41714oswg694oswg194_img_000?x-oss-process=image/format,jpg/interlace,1 "Andreas Thom 公开的邮件截图")

### 6. Laravel 禁止提交 issue 只接受 PR

**垃圾 issue 被拦在门外。** PHP 框架 **Laravel** [宣布新规定](http://www.ruanyifeng.com/blog/2026/09/weekly-issue-412.html)：禁止提交 **issue**，只能提交 Pull Request。这意味着用户必须自己读懂源码并动手解决问题。愿意花时间创建 PR 的用户对问题更上心。机器人和骚扰者不会提交 PR。维护者可以减少重复劳动，直接审查可合并的代码。这个措施把问题筛选成本转移给了用户，但换来了更高质量的贡献。适合成熟项目和有能力贡献代码的社区。

![Laravel 新规定公告](https://cdn.beekka.com/blogimg/asset/202609/bg2026091017.webp "Laravel 新规定公告")

### 7. 蚂蚁 InTech 论坛展示 AI 加速科研

**90 后发 Nature，高中生进 ICML。** [蚂蚁 InTech 论坛](https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651056535&idx=1&sn=47e5a4b05b756ef8fee5ffaf95439c00)展示了多个 AI 折叠科研周期的案例。年轻研究者借助 AI 工具加速了从假设到发表的全流程。论坛聚焦 AI 如何改变科研效率和门槛。也讨论了不确定性仍然存在的部分。对科研人员和学生来说，这是了解 AI 工具在实验、数据分析和论文撰写中实际作用的机会。

![蚂蚁 InTech 论坛现场](https://wechat2rss.bestblogs.dev/img-proxy/?k=6710aff5&u=https%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2F5L8bhP5dIqH6icUNcdwIhn8By81h2jF4bqrsVYg0DJmE04nIEPXs7eAx8Z8ibtF6DRBdibFCPISWKh7dI6OBgKeBmbdKYKv6cjibegxdxC9CGbs%2F0%3Fwx_fmt%3Djpeg "蚂蚁 InTech 论坛现场")

### 8. Qwen 3.8 27b 开源模型爆火

**本地 PC 要迎来 AI 革命。** [Qwen 3.8 27b](https://t.me/aigc1024/24418) 这样的开源模型爆火。个人电脑现在不只跑一个大模型。还要跑主模型、Embedding、视觉模型、语音模型、浏览器、代码环境、知识库、Agent 工具链。让这一整个 AI **本地工作环境全部兜住**。越来越期待 AMD 的统一内存 PC。本地运行全栈 AI 工作流的硬件门槛正在降低。

### 9. 达芬奇一直可以用 Python 脚本剪辑

**有没有 MCP 无所谓。** Gorden Sun [指出](https://x.com/Gorden_Sun/status/2098420654030958728)**达芬奇一直**可以通过 Python 脚本来执行剪辑。有没有 MCP 其实无所谓。这意味着不必等官方适配新协议。用户可以直接用现有的 Python API **自动化剪辑流程**。已经熟悉达芬奇 API 的视频工作者可以继续用脚本完成批量任务。

![达芬奇 Python 脚本示例](https://pbs.twimg.com/media/HR8WWezb0AAgwoQ?format=jpg&name=orig "达芬奇 Python 脚本示例")

### 10. 北京 AI 小酒馆 9 月 15 日再办一场

**五方联合主办线下聚会。** 由 AllScale、Articuler.ai、Enjoy出海、EnjoyPay 和 LobeHub [联合主办的北京 AI Founders Night](https://m.okjike.com/originalPosts/6aa38531141b85b2926d5991) 将在 9 月 15 日晚 19:00-22:00 举行。邀请 AI、具身智能、大模型领域的创业者、从业者、研究者和投资人参加。地点在北京五道口，无费用但需邀请审核。没有议程和分享要求。主要是认识新朋友和交流项目。现场提供酒水小吃。

![北京 AI 小酒馆活动海报](https://cdnv2.ruguoapp.com/FuuSFBWX3HHyG3Aac-2uptS5N5NVv3.jpg "北京 AI 小酒馆活动海报")

---

## **⌘ 开源 TOP 项目**

### vastsa/PI-Desktop：本地优先的 AI 编码代理

**Electron + Rust + Agent Harness。** vastsa/PI-Desktop 是一个[本地优先的 AI 编码代理桌面应用](https://github.com/vastsa/PI-Desktop)。采用 Electron 前端、Rust 主机核心和 pi Agent Harness。支持用户安装插件。当天新增 **552 Stars**，总计 **2777 Stars**。适合希望在本地运行编码 Agent 的开发者。不依赖云端服务。技术栈包含 TypeScript 和 Rust，可以自行扩展功能。

### nashsu/llm_wiki：自动构建持久知识库

**从文档增量构建相互链接的 wiki。** nashsu/llm_wiki 是一个[跨平台桌面应用](https://github.com/nashsu/llm_wiki)。自动将文档转换为有组织、相互链接的知识库。与传统 RAG 每次从头检索不同，它从来源中增量构建并维护一个持久的 wiki。当天新增 **647 Stars**，总计 **18735 Stars**。适合需要长期维护项目文档或个人知识库的用户。不必每次重新检索和总结。技术栈是 TypeScript。

### jihe520/MathModelAgent：自动完成数学建模论文

**生成可直接提交的完整论文。** jihe520/MathModelAgent 是[专为数学建模设计的 Agent 与技能库](https://github.com/jihe520/MathModelAgent)。自动完成数学建模并生成一份可以直接提交的论文。当天新增 **129 Stars**，总计 **4856 Stars**。适合参加数学建模竞赛或课程作业的学生。能够自动处理从建模到论文撰写的全流程。使用 Python 开发。

---
## **◉ 社媒精选**

### Cursor Projects 用协调 Agent 管理复杂项目

**云端并行执行，多端同步上下文。** Cursor 新推出的 [Projects 功能](https://x.com/Gorden_Sun/status/2098339616625660308)通过一个只负责任务委派的协调 Agent。在云端调遣海量子 Agent 并行执行。与每个任务开新聊天不同，Projects 在单一持久线程中工作。累积项目上下文并多端同步。默认云端执行，必要时可切换到本地 Agent。专为处理大规模、长期的复杂代码项目设计。适合需要跨多个模块持续迭代的团队。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2098151257902809092/vid/avc1/1920x1080/GWFN05NST0f39cB3.mp4?tag=29"></video>

### Raycast AI 接入 Claude 和 ChatGPT 订阅

**Mac 启动器直接调用外部订阅权益。** Raycast AI [现在支持连接 Claude 和 ChatGPT 的订阅账号](https://x.com/vista8/status/2098466652023365869)使用。用户可以在 Raycast 中直接调用已有的付费订阅权益。不必单独为 Raycast AI 付费。这让 Mac 用户能在启动器中统一使用多个模型。减少切换成本。已经订阅 Claude 或 ChatGPT 的用户可以立即配置使用。

![Raycast AI 连接设置界面](https://pbs.twimg.com/media/HR9AHYMbEAAFsY7.jpg "Raycast AI 连接设置界面")

### 用户感觉模型降智时厂商可能做了什么

**四种常见降配手段。** 转述的[一条评论](https://x.com/vista8/status/2098471018641940780)总结了四种常见做法。路由到小模型、调低 juice 值减少思考 token、提前中断思考强行回答。手段一会把简单请求发给低成本小模型。复杂任务才调用旗舰模型，但系统判断标准不可见。手段二通过隐藏参数控制模型思考深度。社区逆向发现正常 juice 约 768，降配池可能只有 128。手段三在推理过程中提前截断，强制输出答案。这些操作用户无法直接观察，只能通过回答质量和速度变化间接判断。

---
## **😄 AI趣闻**

### 菲尔兹奖得主的退休计划

**如果 AI 全包数学问题，就去写百合小说。** 菲尔兹奖得主邓煜[宣布](https://x.com/dotey/status/2098546430646395259)，如果人工智能能够解决所有数学问题，他将从数学界退休。然后开始创作百合小说。这是一个真实的公开承诺，不是玩笑。看来数学家也有备用职业规划。而且选择的是浪漫小说。AI 再强，人类的创作欲望和转行自由还是能保留下来。不过这个条件有点高，数学问题暂时还轮不到 AI 全包。

![邓煜的推文截图](https://pbs.twimg.com/media/HR-I2iZXUAgHbyJ?format=jpg&name=orig "邓煜的推文截图")

---
## **❓ 相关问题**

### ChatGPT Pro 订阅现在能买吗？

OpenAI 已暂停 ChatGPT Pro 的新用户订阅。已订阅用户不受影响。[官方表示](https://m.okjike.com/originalPosts/6aa36101bd0563695be24f63)会在资源允许时恢复，但未给出恢复时间表。目前无法新增订阅，只能等待开放。

需要进一步比较当前公开的 AI 账号或订阅服务时，可查看 [**爱窝啦·AI账号店**](https://www.aivora.cn/)；商品、价格与可用状态以官网实时页面为准。
