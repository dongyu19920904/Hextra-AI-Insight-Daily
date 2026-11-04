---
linkTitle: AI Daily
title: AI 日报 2026/11/4：Anthropic 发布可验证推理来源的密码学证明技术
breadcrumbs: false
next: /2026-11/2026-11-04
description: "Anthropic 发布 FlashProve 密码学验证技术，腾讯混元 Hyra 2.0 让智能体自主造出蛋白质设计等科研工具。 从模型身份核实到跨 APP 协作再到本地写作辅助，各方都在把 AI 能力嵌入具体工具链的关键节点。 开发者今天优先看 FlashProve 和 colibri 两项，…"
cascade:
  type: docs
---


## **今日摘要**

```
Anthropic 发布 FlashProve 密码学验证技术，腾讯混元 Hyra 2.0 让智能体自主造出蛋白质设计等科研工具。
从模型身份核实到跨 APP 协作再到本地写作辅助，各方都在把 AI 能力嵌入具体工具链的关键节点。
开发者今天优先看 FlashProve 和 colibri 两项，前者影响安全架构，后者决定本地跑大模型的硬件门槛。
```

## **🔥 今日焦点 TOP 10**

### 1. Anthropic 发布可验证推理来源的密码学证明技术

**推理来源可被数学证明。** **Anthropic** 官方推文介绍，[FlashProve 基于成熟密码学技术](https://x.com/AnthropicAI/status/2117710942826123294)，让开发者能验证某个响应是否真的来自指定 AI 模型。研究称其效率**大幅优于**现有开源方法。这套证明可用于防止攻击者劫持对话，也能让安全评估者核实模型身份。

---

### 2. 腾讯混元 Hyra 2.0 让 AI 智能体自主研发科研工具

**AI 可以自己训练模型、修复芯片缺陷了。** 腾讯团队报告的 [Hyra 2.0 科研系统成果](https://x.com/Gorden_Sun/status/2117625758814474746)，采用三层智能体协作框架 Harness，把调试经验沉淀成可复用的标准化技能库。据团队介绍，已产出的工具包括蛋白质设计模型 HyInv，生成速度比行业常用工具**快 57 倍**；还有数学证明工作流 HyProver，团队称其**完整证明**了丘成桐圆周作用猜想。项目目前未开源。

![腾讯混元 Hyra 2.0 系统架构图](https://pbs.twimg.com/media/HWHM2bsaMAA6C3c?format=jpg&name=orig "腾讯混元 Hyra 2.0 系统架构图")

---

### 3. Google 强绑定：学校禁 AI 将同时失去学生搜索功能

**拒绝 AI 的学校，学生搜索也可能受影响。** 《纽约时报》[报道 Google 的教育账户新安排](https://www.nytimes.com/2026/11/03/us/google-search-schools-restrict-ai.html)：**2027 年**初起，K–12 学生账户默认关闭 AI 工具，但选择全面限制 AI 的学校将同时失去学生账户的 **Google** 搜索访问权。允许 AI 的学校可在两种模式中选择：保留 AI 概览的消费者版本，或 Gemini 学生引导学习版。洛杉矶学区此前希望保留搜索、关闭 AI 摘要；若按报道中的方案执行，学校就难以同时保留这两个选择。

---

### 4. OpenAI 用 GPT-6 Astra 一周内造出语音 Codex 原型机

**AI 主导了外壳到软件的全链路设计。** 据 [OpenAI 用 GPT-6 Astra 一周内造出语音 Codex 原型机](https://www.bestblogs.dev/en/status/2117692477947641954?utm_source=rss&utm_medium=feed&utm_campaign=resources&entry=rss_article_item)，两名团队成员与 GPT-6 Astra 协作，在**一周内**完成了**支持语音交互**的 Codex 原型设备设计，涵盖外壳、电路板布局、界面与软件开发。实际制造仍需多轮迭代审核，目前是原型展示阶段。

---

### 5. 讯飞星火 X2.6 实测：293B MoE 架构、1M 上下文窗口

**国产算力训练的顶级规格模型来了。** [掘金作者沉默王二的实测文章](https://juejin.cn/post/7703431570200739875)显示，星火 X2.6 基于混合专家架构，总参数 **293B**，每 Token 激活 30B，上下文窗口达 **1M**，主打长程复杂任务、代码开发和 Agent 执行。作者用其完成了 ESP32 迷你钢琴实验台的完整嵌入式项目，称模型完全基于国产算力完成训练。这是个人测评记录，非第三方独立基准测试。

![星火 X2.6 ESP32 钢琴演示](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/9c2216b8a258499f83fb1ce7066424d6~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5rKJ6buY546L5LqM:q75.awebp?rk3s=f64ab15b&x-expires=1794276230&x-signature=eO1op3GgNKrSfw7bIq95DYvBPew%3D "星火 X2.6 ESP32 钢琴演示")

---

### 6. 苹果 App Intents 让第三方 APP 功能可接入 Siri AI

**Siri 能跨 APP 完成任务了。** 歸藏在即刻[转述了苹果的这项更新](https://m.okjike.com/originalPosts/6aea96e9a62a3900b92af7e0)：开发者现在可以从 **iOS 27.3 测试版**起将自家 APP 功能暴露给 Siri AI 调用，并内置了一套 Skill 格式让 Siri 判断能力边界。跨 APP 场景举例：打车后让 Siri 改上车地点，或把一个购物软件里收藏的商品发给聊天软件的朋友。此前豆包在手机上的类似跨 APP 操作权限遭国内超级应用普遍拒绝，Siri 版本的**开放将带来相似的博弈**。

![苹果 App Intents Siri AI 跨 APP 能力示意](https://cdnv2.ruguoapp.com/FgELP0CYSKic9wjRreOzWAIez6BBv3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient "苹果 App Intents Siri AI 跨 APP 能力示意")

---

### 7. Open Typora 0.22.0 给本地 Markdown 加上 AI 跨文档审阅

**本地写作工具拿到了可逐处确认的 AI 修改能力。** 开发者 AniChikage 在 [V2EX 帖子](https://www.v2ex.com/t/1254264#reply0)中更新了 **Open** Typora 0.22.0 的进展：新增选区改写与差异预览、跨最多 4 份文档的批量修改计划、以及本地目录问答（答案可插入带脚注的 Markdown）。数字、日期、链接和代码默认受保护；AI 修改前会**自动保留恢复点**，重启后可跨批次查看。适合需要保持格式和术语一致性的技术写作者。

![Open Typora 跨文档 AI 修改与保留约束](https://raw.githubusercontent.com/AniChikage/open-typora/62677c5e82a1810511ad2c26985f80666b89862c/docs/images/02-multi-document-ai.png "Open Typora 跨文档 AI 修改与保留约束")

---

### 8. 射频感知眼镜把无声口型实时转成文字

**不出声说话，眼镜能识别你在说什么。** The Subvocal Company（YC F26）在 [Hacker News Show HN](https://news.ycombinator.com/item?id=50340088) 中介绍了其智能眼镜原型：镜框天线发射射频信号，捕捉舌头、嘴唇、软腭运动并由模型解码成文字。演示中的新用户只做了**20 句话**的个人校准，跨用户面部结构差异仍是主要难题。团队计划 2027 年 Q1 交付首批 **500 台**，目前开放预订，属研发和预售阶段。

---

### 9. 国产模型与美国前沿差距或将肉眼可见地拉大

**算力限制成为这篇讨论的焦点。** Diiiii 在即刻[转述了一篇中国 LLM 讨论纪要](https://mp.weixin.qq.com/s/YOWslIRykThfGGwx-71RHA?from=singlemessage&isappinstalled=0&scene=1&clicktime=1793680576&enterid=1793680576)，核心判断有二：编程场景已基本开发完毕，下一个同等量级落地场景尚不明确；国产模型面临蒸馏难度、数据瓶颈和算力不足，而海外竞品在持续变强变便宜。文章还结合 Anthropic Q3 月收入增长趋势，质疑行业是否正处于加德纳曲线愚昧之巅。这是业内人士观点汇编，非官方数据。

![国产模型与前沿模型差距讨论摘要](https://mmbiz.qpic.cn/mmbiz_jpg/icbbw78tf2UGibJAhwUX8caqorAFpQhCahgLpdU6t67UdhAczdYdMZsFSg1zU5YKyXJ01SsEgbBGbib8TNKHSodFcfqzQp7jfIlxlicbricgv8j0/0?wx_fmt=jpeg "国产模型与前沿模型差距讨论摘要")

---

### 10. 香港 AI 研究型实习招聘，方向包括 RSI 与推理加速

**招 RSI 和 Personal Agent 方向的研究型实习生。** 即刻用户五条年糕[发布了这则香港 AI 研究院招聘信息](https://m.okjike.com/originalPosts/6aea85eafe2a4cb97b1da0ee)，方向涵盖语言模型推理加速与递归自我改进（**RSI**）。提供有竞争力薪酬、充足 GPU 和 Token 预算，实习生可独立牵头项目并主导一作论文。目前未公开所属机构名称，感兴趣的在港 PhD 及有相关项目经验者可通过原帖联系。



---

## **◎ 行业变化与个人影响**

### Ubuntu 三周未对外交付零日漏洞正式修复内核

**RCE 零日漏洞补丁还在测试仓库，未进入普通更新渠道。** Freenode 文章[记录了 CVE-2026-98432 的修复进度](https://freenode.net/article/ubuntu-lts-kernels-still-unfixed-for-critical-cve-2026-98432)：Ubuntu 11 月 2 日官方说明显示，22.04、24.04、26.04 LTS 的修复内核已进入 `-proposed` 测试仓库，正在超过两千种认证服务器和设备上验证，通过后才进入普通更新渠道。26.10 已在 7.3.0-10.10 修复，较旧受支持版本仍待处理。漏洞官方确认可导致**远程代码执行**，且不局限于 MPTCP 路径，关闭 MPTCP 不是完整缓解措施。运维和服务器管理员现在可手动启用 `-proposed` 仓库提前测试补丁，或等待稳定渠道推送。



---
## **⌘ 开源 TOP 项目**

### JustVugg/colibri：消费级硬件上跑前沿 MoE 大模型

[colibri 的分层推理引擎已公开核心代码](https://github.com/JustVugg/colibri)，用 C 语言实现三级缓存调度：热专家常驻 GPU（支持 CUDA 和 Vulkan），温专家驻内存，冷专家从 NVMe 流式加载，降低模型对显存容量的依赖。今日新增 **802 颗 Star**，总计 **47,247 颗**。想利用现有硬件本地跑 MoE 模型的开发者，可以先核对项目支持的模型与硬件要求，再决定是否试用。


![JustVugg/colibri：消费级硬件上跑前沿 MoE 大模型 · README 展示图](https://raw.githubusercontent.com/JustVugg/colibri/main/docs/media/sparse.png "JustVugg/colibri：消费级硬件上跑前沿 MoE 大模型 · README 展示图")

---

### Usagi-org/ai-goofish-monitor：AI 智能监控闲鱼二手商品

[ai-goofish-monitor 项目主页](https://github.com/Usagi-org/ai-goofish-monitor)显示，这是一套基于 Playwright 和 AI 的闲鱼多任务监控与智能分析系统，支持实时和定时抓取，配有完整后台管理 UI。今日新增 **228 颗 Star**，总计 **16,365 颗**。适合需要蹲守特定二手商品或批量比价的个人用户和小卖家，Python 栈，可按条件自定义监控规则。


![Usagi-org/ai-goofish-monitor：AI 智能监控闲鱼二手商品 · REA](https://raw.githubusercontent.com/Usagi-org/ai-goofish-monitor/master/static/img.png "Usagi-org/ai-goofish-monitor：AI 智能监控闲鱼二手商品 · REA")

---
## **◉ 社媒精选**

### AI 编程助手自我复盘效果：7 次测试只有 2 次真正奏效

**让 AI 干完活后自己修改工作手册，实测远没有听起来那么美。** 宝玉在推文中引用了新加坡管理大学与海德堡大学的[论文研究结果](https://x.com/dotey/status/2117706197797114009)：在 7 次有效测试中，只有 **2 项**改动彻底消除了目标问题，部分改动还导致 AI 在无关任务上做了多余检查。宝玉本人也坦言一直对这套"自我进化 Skill"持怀疑态度——没有清晰评判标准时，AI 很难自主优化好；完全依赖人工审核又成本不低。目前使用 `/retro` 或类似自我迭代 Skill 的开发者，可以参考这个数据降低期待值。

![AI 编程 Retro 论文实验结果示意](https://pbs.twimg.com/media/HWOaj3CWsAAu078?format=png&name=orig "AI 编程 Retro 论文实验结果示意")

---

## **😄 AI趣闻**

### 给1996年的旧电脑换个2026年的脑子

棋迷总以为当年卡斯帕罗夫输给深蓝是硬件的功劳。Nicholas Carlini 找来一台 200 MHz **Pentium Pro** 老机，把 **Stockfish 17** 塞进 64 MB 内存里跑，在旧硬件上对战跑在现代电脑上的1996版引擎，打出 **78胜17和5负**。他据此[估计旧机器上的新引擎约3300 Elo](https://nicholas.carlini.com/writing/2026/algorithmic-improvements-chess.html)——可惜这是短时限外推的，和人类FIDE评级也不是一套体系，棋王本人还没到场验收。

![给1996年的旧电脑换个2026年的脑子 · 原文封面](https://nicholas.carlini.com/writing/2026/chess/ppro-screen.png "给1996年的旧电脑换个2026年的脑子 · 原文封面")

## **❓ 相关问题**

### 用 Codex 做硬件原型，AI 能负责哪些环节？

**AI 可以参与外壳设计、电路板布局、界面和软件开发，但制造环节仍需人工多轮审核。** 据[今日线索报道](https://www.bestblogs.dev/en/status/2117692477947641954?utm_source=rss&utm_medium=feed&utm_campaign=resources&entry=rss_article_item)，OpenAI 团队用 GPT-6 Astra 协助在一周内完成了语音版 Codex 原型设备的设计工作。正好有新账号或续费需求的读者，可以先对照 [Codex 订阅权益说明](https://developers.openai.com/codex/pricing/)确认所需功能是否包含在计划内，再决定是否开通。
