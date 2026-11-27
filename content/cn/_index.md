---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/11/27
breadcrumbs: false
next: /2026-11/2026-11-27
description: "俄罗斯 708B 开源模型 GigaChat4 公开权重，同日国内六家大厂 Personal Agent 同期入场争夺用户长期数据托管权。 从算力金融化到 AI 视频降本组合再到量化工具 QDA，各层成本都在出现新的压缩路径。 今天先看开源栏的 CLI-Anything 和行业变化栏的 QDA，再…"
cascade:
  type: docs
---

## **今日摘要**

```
俄罗斯 708B 开源模型 GigaChat4 公开权重，同日国内六家大厂 Personal Agent 同期入场争夺用户长期数据托管权。
从算力金融化到 AI 视频降本组合再到量化工具 QDA，各层成本都在出现新的压缩路径。
今天先看开源栏的 CLI-Anything 和行业变化栏的 QDA，再决定现有推理或工具接入方案是否值得调整。
```

## **🔥 今日焦点 TOP 10**

### 1. 俄罗斯 708B 开源大模型 GigaChat4 现身

**俄系大模型来了。** 📦 Sber 旗下 ai-sage 团队在 [俄罗斯 708B 开源大模型 GigaChat4 现身](https://huggingface.co/ai-sage/GigaChat4-708B-A41B-base)，总参数 708B，激活参数 **41B**。按发帖者 Gorden Sun 的评分对比，能力仅略低于 DeepSeek 1017，支持 **100 万 token 上下文**，可在推理模式与直接回答模式间按需切换。想跑大参数开源模型的研究者，这个选项今天可以去排队下载了。

![GigaChat4 参数与评测信息](https://pbs.twimg.com/media/HYIKpq7aIAAZYXl?format=jpg&name=orig "GigaChat4 参数与评测信息")

---

### 2. 豆包独家接入剪映，自然语言驱动剪辑时间轴

**对话就能剪片子了。** 🎬 据 [豆包独家接入剪映，自然语言驱动剪辑时间轴](https://www.aibase.com/zh/news/32578)，豆包通过接入剪映官方插件，让用户用自然语言指令完成专业剪辑动作。多轨草稿保留机制确保创作者还有**精细控制权**，图文素材也可一键生成动态成片。经常用剪映做内容的创作者，可以去剪映里找一下豆包入口试试。

![豆包接入剪映对话式剪辑演示](https://upload.chinaz.com/2026/1127/6393139242232232026098182.png "豆包接入剪映对话式剪辑演示")

---

### 3. 腾讯元宝搜索绕开正面战场，嵌入微信全流程

**豆包月活 4.19 亿，元宝只有 3733 万。** 🎬 [腾讯元宝搜索绕开正面战场，嵌入微信全流程](https://www.36kr.com/p/4086109887883905)援引 QuestMobile 9 月数据指出，正面追赶窗口已基本关闭。腾讯的应对是把元宝搜索藏进微信使用场景：读公众号长文时 @元宝、刷视频号一键提炼、负一屏 AI 搜索入口持续迭代，都在自然嵌入内容消费流程。对在微信生态里做内容和运营的从业者，这条暗线比月活差距更值得盯着。

![腾讯元宝搜索与豆包月活对比](https://img.36krcdn.com/hsossms/20261126/v2_3f26547752aa41efa56c684545b4d173@000000_oswg37139oswg1080oswg586_img_000?x-oss-process=image/format,jpg/interlace,1 "腾讯元宝搜索与豆包月活对比")

---

### 4. Anthropic 上市，早期员工纸面财富惊人

**AI 造富速度超过绝大多数行业。** 📊 [阮一峰的周刊](http://www.ruanyifeng.com/blog/2026/11/weekly-issue-421.html)引用 @AndrewBenson 统计，Anthropic 员工约 5300 人，若市值达 **1.4 万**亿美元，**2023 年入职者股票收益中位数约 1.51 亿美元**，2026 年初入职者也有约 500 万美元。Anthropic 成立于 2021 年，历史极短但估值极高，这种速度在科技史上也属少见。想进 AI 大厂的求职者，这组数据可以作为目标薪酬谈判的参考背景。

![Anthropic 员工股票收益估算](https://cdn.beekka.com/blogimg/asset/202611/bg2026112405.webp "Anthropic 员工股票收益估算")

---

### 5. 腾讯 Personal Agent「小元」开启首批体验官招募

**国内 Personal Agent 牌桌一周内又多了一个玩家。** 💬 据即刻用户 Max_means_best 的[腾讯 Personal Agent「小元」开启首批体验官招募](https://m.okjike.com/originalPosts/6b093b3b38389f599314cd97)，腾讯元宝的「小元」主打**主动关心、主动解决问题**，定位对标 Muse。国内目前已有字节小豆、腾讯小元与微信小微、阿里千问 Go!、蚂蚁灵光 2.0、Manus Cue 等多个产品同时在跑。想抢早体验的用户，招募申请目前已公开。


![腾讯 Personal Agent「小元」开启首批体验官招募 · 原文配图](https://cdnv2.ruguoapp.com/Frkj634OrBbVB3dy_Tv3Nsv_X0ecv3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient "腾讯 Personal Agent「小元」开启首批体验官招募 · 原文配图")

---

### 6. Polymarket 新增算力频道，GPU 租价也能下注

**算力正在被金融化。** 📊 即刻用户 rosicky311_明浩 在[这条帖子](https://m.okjike.com/originalPosts/6b078dfa3ce945612e9277ac)里指出，**Polymarket** 新上线了 compute 频道，可以直接买卖 **H100/B200/B300** 每小时租赁价格的走势合约。从卡到数据中心再到水电，AI 算力的所有投入层正在重走大宗商品的金融化路径。这对靠租卡做推理业务的团队意味着，成本对冲的工具已经出现，但预测市场的流动性和定价是否可靠还需观察。

![Polymarket 算力频道截图](https://cdnv2.ruguoapp.com/Fvq4WswBmwDZNFD7r8CbEl5bG-X2v3.png "Polymarket 算力频道截图")

---

### 7. Google AI Ultra 订阅向 pi 开放

**Google AI Ultra 的访问范围在扩大。** 💻 来自 [LINUX DO 社区的帖子](https://linux.do/t/topic/3258295)显示，**Google** 批准了对 pi 的 AI **Ultra** 原生订阅支持，相关代码变更已合并。目前帖子中的信息来自社区转述，官方正式公告尚未核实；目前有 Google AI 高级订阅需求的用户可以关注官方渠道确认。


![Google AI Ultra 订阅向 pi 开放 · 原文封面](https://cdn3.ldstatic.com/optimized/4X/2/3/3/233944aff8e05e0bf92f04e1bfa32b83b007281c_2_1024x562.png "Google AI Ultra 订阅向 pi 开放 · 原文封面")

---

### 8. Sam Altman 提到用现有模型挑战千禧年数学难题

**OpenAI 内部有人一直在推这件事。** 📐 **Sam** **Altman** 在[Sam Altman 提到用现有模型挑战千禧年数学难题](https://x.com/sama/status/2125990371897557278)中提到，Ven Chandrasekaran 是最早相信可以用现有模型去求解千禧年奖金难题的人之一，并为此持续推动。Ven 目前已提交了真空引力量子理论的 4D 方案草稿。这条信号的意义在于：OpenAI 把顶级数学难题当做模型能力的真实压力测试，而非公关动作。

---

### 9. YouMind 用户靠简单 Prompt 完成两部连载小说

**行动比认知差更重要。** 📌 **YouMind** 创始人玉伯在[即刻分享](https://m.okjike.com/originalPosts/6b095687136b2761c63260bd)中提到，一位用户没有使用任何高级功能，只是用文档维护了一套 prompts，就在 YouMind 写完两部小说并在番茄小说连载，收益可观，正在考虑全职创作。这位用户留在 YouMind 只因为两点：**可以调用多种模型**、文档可编辑且有目录树。对普通创作者来说，工具复杂度不是瓶颈，动手才是。

---

### 10. HN Ask 页独立排行恢复，文字帖数量回升

**HN 的文字社区氛围有了一次小修复。** 💻 [管理员 dang 在帖子中解释](https://news.ycombinator.com/item?id=50649864)，**Ask** 页此前复用首页候选列表，只从全站前 1500 条里筛文字帖，内容不足时页面直接缩水，分页入口也消失。此次改为 Ask 页**单独计算候选排序**，Tell HN 和无前缀文字帖也纳入。对常用 HN 寻找技术讨论的开发者，这个改动意味着 Ask HN 的内容密度会回升。

---

## **⚡ 产品与功能更新**

### GPT-6.2 Astra 写生图提示词被用户投诉体验差

**有用户在手动绕开 GPT-6.2 Astra 的自动路由。** Telegram 频道 AI探索指南的[一条消息](https://t.me/aigc1024/27503)描述了一个使用摩擦点：GPT-6.2 Astra 在生成图片提示词方面让该用户感到不满意，手动切回 GPT-6 Astra 后效果更好，但系统会自动重新路由回 6.2，导致反复干扰工作流🔀。这条反馈来自 Telegram 频道转述，尚未有官方说明；正在用 GPT 生成图片提示词的用户，可以验证一下当前的路由行为是否一致。

---

### CODEX 找回旧版消息排队与优先级功能

**OpenAI Codex 客户端的优先级设置原来没被彻底删掉。** V2EX 用户 feng9601061 在[这个帖子](https://www.v2ex.com/t/1260229#reply0)里说，之前版本能对排队消息手动调整优先级，更新后改成 AI 自动引导上下文，反而更难用。今天翻设置时意外找到了回调开关🔧。来源仅为个人用户发帖，官方并未公告此设置；高频使用 Codex 的开发者可以自行检查设置页面确认。

![终于找到 CODEX 怎么调整后续消息处理方式了](https://p.dramapage.com/group2/91baefd6f05bbceca519e887d592fc2f.png "终于找到 CODEX 怎么调整后续消息处理方式了")

---
## **◎ 行业变化与个人影响**

### AI 量化设计工具 QDA，69 美元搞定 320B 模型精度恢复

**用智能体自动设计量化方案，成本低到让手工调参显得浪费。** [BestBlogs 的技术摘要](https://www.bestblogs.dev/en/article/ca774f975d?utm_source=rss&utm_medium=feed&utm_campaign=resources&entry=rss_article_item)介绍，QDA 系统让编程智能体自主提出量化方案并用 KL 散度快速评分，整个流程只需分钟级而非数十 GPU 小时。在 320B 参数的 GLM-5.3-Flash 上，**6.5 小时花费 $69**，精度恢复至 FP8 的 98.3%，高于 NVIDIA 自家方案的 96.9%📉。对需要在消费级硬件或低成本推理节点上部署大模型的团队，这套闭环工具值得纳入评估。


![AI 量化设计工具 QDA，69 美元搞定 320B 模型精度恢复 · 原文封面](https://www.bestblogs.dev/en/article/ca774f975d/opengraph-image?696e70e5d7b1d782 "AI 量化设计工具 QDA，69 美元搞定 320B 模型精度恢复 · 原文封面")

---
## **⌘ 开源 TOP 项目**

### openvinotoolkit/openvino：英特尔出品的 AI 推理优化工具包

[openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) 是英特尔维护的开源推理优化框架，支持将训练好的模型转换和加速部署到 CPU、GPU、NPU 等多种硬件上⚙️。今日新增 **152 Stars**，累计 **12888 Stars**。对需要在边缘设备或非 NVIDIA 硬件上跑推理的开发者，这是减少硬件依赖的直接选择。

---

### HKUDS/CLI-Anything：让所有软件原生适配智能体

[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) 的目标是让任意软件通过 CLI 接口接入 AI 智能体，省去为每个工具单独写适配层的麻烦🤖。今日新增 **668 Stars**，累计 **66698 Stars**，热度在当日日榜中相当突出。适合需要把现有命令行工具批量纳入 Agent 工作流的开发者，直接去 CLI-Hub 看已有的适配列表。


![HKUDS/CLI-Anything：让所有软件原生适配智能体 · README 展示图](https://raw.githubusercontent.com/HKUDS/CLI-Anything/main/assets/cli-typing.gif "HKUDS/CLI-Anything：让所有软件原生适配智能体 · README 展示图")

---
## **◉ 社媒精选**

### 歸藏实测：组合 Opus 5.5 和图片模型省视频生成成本

**AI 视频制作不一定要全程用视频模型。** 歸藏在[这条推文](https://x.com/op7418/status/2126208864702140859)里分享了一套省钱路线：用 Opus 5.5 负责**写代码、剪辑和转场动画**，只在必要镜头才调用视频模型，场景和人物改用图片模型生成后通过简单动画让它们动起来。他提到，抖音上有人用这种像素风 MV 玩法，从 10 月 25 日开始发，一个月涨了 **10 万粉**🎬。对想控制 AI 视频成本的创作者，这套组合值得参考一下实际分镜比例。

![歸藏实测 AI 视频省钱方案截图](https://pbs.twimg.com/media/HYECgl9bcAAKW8e?format=jpg&name=orig "歸藏实测 AI 视频省钱方案截图")

---

## **😄 AI趣闻**

### 自己出题自己阅卷，胜率还是没过六成

**智谱** 💻发布 **GLM-5.4** 时，随手附上了一份自家组织的 **200 个编程场景**对照测试。对上自家上一版 GLM-5.3，胜率 51.1%、负率 23.1%，赢多输少，账面好看。换成 Kimi K3.1 Pro，[胜负差从 28 个百分点收窄到 10.5](https://juejin.cn/post/7712027193627803658)；再换 DeepSeek，只剩 3.4 个百分点。自己出题、自己阅卷，最后发现最难拉开差距的，是别家的模型。

![自己出题自己阅卷，胜率还是没过六成 · 原文配图](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/35fb21261944476498a3eb32297d7e58~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgQUFB54ix5a2m5Lmg55qE5YiY5ZOl:q75.awebp?rk3s=f64ab15b&x-expires=1796269919&x-signature=hSP%2B%2FxT%2BsRpOySQSgVcn%2FhH0Bbc%3D "自己出题自己阅卷，胜率还是没过六成 · 原文配图")

## **❓ 相关问题**

### Codex 多条消息排队时，怎么调整处理优先级？

**先去设置里翻一翻，优先级选项可能还在。** [v2ex 上的这条记录](https://www.v2ex.com/t/1260229#reply0)说明旧版队列与优先级功能并未彻底移除，只是藏进了设置。高频用 Codex 处理多任务的人，若想同时用 ChatGPT 切换思路，可看[爱窝啦·AI账号店的 ChatGPT Plus｜成品号【月卡】](https://www.aivora.cn/products/cheng-pin-hao-yue-ka)。