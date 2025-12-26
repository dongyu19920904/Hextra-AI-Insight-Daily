---
linkTitle: AI Daily
title: AI Daily-AI资讯日报
breadcrumbs: false
next: /2025-12/2025-12-26
description: "每日自动汇总最新 AI 行业动态,帮中文用户用最低成本玩转 ChatGPT、Claude、Cursor、Augment 等 AI 工具。由爱窝啦 AI 账号店提供支持。"
cascade:
  type: docs
---

## 爱窝啦 AI 日报 2025/12/26

>  `AI 日报` 



### **今日摘要**

```
英伟达"收编"Groq创始团队，只要人不要公司，推理芯片格局要变天。
字节TRAE月活破160万，清华视频生成提速200倍，AI工具全面进入实用期。
今天最值得关注的是人才流动和效率突破，开发者可以重点试试新开源的视频生成方案。
```



## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览



> 💡 **提示**：想第一时间体验文中提到的最新 AI 模型（Claude 4.5、GPT、Gemini 3 Pro）？没有账号？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 领个号，一分钟上手，售后无忧。

## **今日AI资讯**

### **👀 只有一句话**
英伟达学会了谷歌的玩法——Groq创始团队集体跳槽，只要人不要公司。

### **🔑 3 个关键词**
#人才收割 #AI编程起飞 #视频生成加速

---

## **🔥 重磅 TOP 10**

### 1. [英伟达"收编"Groq创始团队，推理芯片格局生变](https://x.com/op7418/status/2004377305138024889)

还记得那个号称"比GPU快10倍"的Groq吗？今天它的创始人Jonathan Ross宣布：Groq与英伟达签了技术授权协议，然后他和核心团队直接加入英伟达了。这操作太熟悉了——谷歌收Character.AI时也是这套"只要人不要壳"的玩法。对用户来说，GroqCloud继续运营不受影响；但对行业来说，英伟达又补上了推理加速这块拼图，护城河越挖越深了。

![AI资讯图片](https://pbs.twimg.com/media/G9D6ZlMbUAAgLOw?format=jpg&name=orig)

---

### 2. [TRAE月活破160万，AI编程工具国内第一](https://x.com/op7418/status/2004446870358339756)

字节的TRAE发了年度报告，数据挺猛：总用户600万，月活160万，周活用户几乎工作日全勤。最有意思的是使用场景分布——40%的人用来修Bug，30%用来生成代码，而仓库管理、代码优化这些"高级功能"大家还不太敢信。编程语言方面Vue排第一，说明前端开发者是AI编程的主力军。2026年国产AI编程工具可能真要起飞了。

![AI资讯图片](https://pbs.twimg.com/media/G9E5yk2WYAE-Bq3?format=jpg&name=orig)

---

### 3. [清华开源TurboDiffusion：视频生成提速200倍](https://www.bestblogs.dev/en/article/af2dec69)

以前用Diffusion模型生成5秒720p视频要等4767秒（一个多小时），现在清华和生数科技搞出的TurboDiffusion只要24秒，极端情况下2秒就能出片。核心技术是混合注意力加速+步骤蒸馏+量化压缩三板斧。最关键的是：画质几乎没损失。这意味着以后用消费级显卡也能玩实时视频生成了，AI视频从"等半天"进入"秒出"时代。

---

### 4. [华为诺亚方舟实验室发布SCOPE：让Agent学会从错误中进化](https://www.bestblogs.dev/en/article/d02a4e21)

AI Agent有个老毛病：明明看到了错误信息，下次还是会犯同样的错。华为和港中文联合发布的SCOPE框架解决了这个问题——它让Agent的Prompt能在执行过程中自我进化，从错误和成功经验中提炼规则。实测在HLE基准上成功率从14%飙到39%，翻了快3倍。这对做Agent产品的团队来说是个重要参考。

---

### 5. [OpenAI发布圣诞特别版Codex模型](https://x.com/op7418/status/2004376604282400957)

OpenAI的Codex团队整了个活：发布了GPT-5.2-Codex-XMas，性能和标准版一模一样，但加了"圣诞老人人格"。用命令行调用时会有节日彩蛋。虽然是个玩笑性质的更新，但也说明OpenAI在产品运营上越来越会玩了。想体验的可以用`codex -m gpt-5.2-codex-xmas`试试。

![AI资讯图片](https://pbs.twimg.com/media/G9D51jpbkAA2vTg?format=jpg&name=orig)

---

### 6. [小红书开源InstanceAssemble：复杂多物体图像生成精度突破](https://www.aibase.com/zh/news/24060)

电商场景最头疼的问题之一：让AI在一张图里精准摆放多个商品，位置、大小、遮挡关系都要对。小红书开源的InstanceAssemble框架专门解决这个，通过级联建模和Assemble-Attention机制，参数增量只有0.84%，但空间对齐精度大幅提升。做电商设计、海报生成的可以关注下。

---

### 7. [Liquid AI发布2.6B参数小模型，跑分碾压百亿级选手](https://www.aibase.com/zh/news/24060)

2.6B参数能打过10B+的模型？Liquid AI的LFM2-2.6B-Exp做到了。这是个纯强化学习训练的实验性模型，没用监督微调也没蒸馏大模型，但在指令跟随能力上表现惊人。最实用的是：它能跑在边缘设备上。模型已开源，想在手机或嵌入式设备上跑AI的可以试试。

---

### 8. [ChatGPT将推出"Skills"功能，2026年初上线](https://www.aibase.com/zh/news/24060)

OpenAI内部代号"榛子"的新功能曝光了：Skills（技能）。和Claude的Skills类似，但更强调模块化——每个Skill是个文件夹，包含指令、上下文、示例甚至可执行代码。关键是：现有的GPT可以一键转成Skill，而且Skill之间能组合调用。这可能会改变我们使用ChatGPT的方式，从"对话"变成"调用技能库"。

---

### 9. [快看漫画联手MiniMax推出AI互动漫画](https://www.aibase.com/zh/news/24060)

漫画角色能跟你聊天了。快看漫画和MiniMax合作，让漫画IP角色通过AI"活"起来，支持多模态互动和情感连接。首批顶级IP已开启沉浸模式。这可能是"AI陪伴"赛道的新形态——不是凭空造一个虚拟人，而是让你喜欢的角色真的能和你对话。

---

### 10. [灵光AI上线一个月，用户创建1200万个"闪应用"](https://www.aibase.com/zh/news/24060)

灵光的"闪应用"功能火了：不用写代码，用自然语言描述就能快速生成小工具。上线一个月用户创建了1200万个应用，周活跃用户进入AI原生App TOP10。这说明"人人都能做App"的需求是真实存在的，AI正在把软件开发的门槛降到接近零。

---

## **📌 值得关注**

**[开源]** [LEANN：本地RAG节省97%存储空间](https://github.com/yichuan-w/LEANN) - 在个人设备上跑RAG，隐私和效率都要

**[开源]** [MediaCrawler：全平台社媒爬虫工具](https://github.com/NanmiCoder/MediaCrawler) - 小红书、抖音、B站、微博一网打尽，4万星

**[开源]** [robin：AI驱动的暗网情报工具](https://github.com/apurvsinghgautam/robin) - 安全研究者的新玩具

**[产品]** [飞书消息速览上线](https://x.com/lyson_ober/status/2004398357725565087) - 进群自动生成未读摘要，但企业隐私问题值得警惕

**[产品]** [iPad版WPS大更新](https://m.okjike.com/originalPosts/694e3a8be48f1bd7abb0bf9c) - 功能对齐Win端，支持LaTeX公式，适配iPadOS 26

**[福利]** [Epic今日免费送《极乐迪斯科》最终剪辑版](https://x.com/op7418/status/2004398113826710001) - 神作必领，不解释

---

## **📊 更多动态**

| # | 类型 | 标题 | 链接 |
|---|------|------|------|
| 1 | 开源 | rendercv：YAML转PDF简历生成器 | [GitHub](https://github.com/rendercv/rendercv) |
| 2 | 开源 | dify：智能体工作流开发平台 | [GitHub](https://github.com/langgenius/dify) |
| 3 | 研究 | MeViSv2多模态视频理解数据集发布 | [详情](https://www.bestblogs.dev/en/article/3719b2da) |
| 4 | 工具 | Claude连接游戏内存实现AI调试 | [Reddit](https://www.reddit.com/r/artificial/comments/1pvwz4u/) |
| 5 | 观点 | 年度图像模型对比：GPT Image vs Nano Banana | [Twitter](https://x.com/ZHO_ZHO_ZHO/status/2004483407485755884) |

---

## **❓ 相关问题**

### 如何体验 ChatGPT 的 Skills 功能？

ChatGPT 的 Skills 功能预计将于 2026 年初上线，届时可能需要 ChatGPT Plus 或更高级别的订阅才能使用完整功能。对于国内用户，可能面临支付困难或账号注册限制。

**解决方案**：
- **[爱窝啦 Aivora](https://aivora.cn)** 提供 ChatGPT Plus 成品账号服务
- 极速发货，下单即用，无需处理支付和注册问题
- 提供稳定的独享账号，售后无忧

访问 [aivora.cn](https://aivora.cn) 可查看完整的 AI 账号服务列表。