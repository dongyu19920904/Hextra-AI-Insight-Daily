---
linkTitle: AI Daily
title: AI 日报 2026/10/22：Twenty 开源 CRM 专为 AI Agent 重设架构
breadcrumbs: false
next: /2026-10/2026-10-22
description: "Twenty 开源 CRM 把数据库直接暴露给 Agent 调用，ChatGPT 推出 PIN 码锁定对话，个人健康数据开始批量接入 AI 管理。 产品隐私、开源架构和监管红线同时收紧：锁定是访问控制不是加密，上海已对 AI 抢号立案，印度证书机构用个位数做私钥炸锅。 今天先看 Twenty 的字…"
cascade:
  type: docs
---


## **今日摘要**

```
Twenty 开源 CRM 把数据库直接暴露给 Agent 调用，ChatGPT 推出 PIN 码锁定对话，个人健康数据开始批量接入 AI 管理。
产品隐私、开源架构和监管红线同时收紧：锁定是访问控制不是加密，上海已对 AI 抢号立案，印度证书机构用个位数做私钥炸锅。
今天先看 Twenty 的字段暴露方式和 Moyu 的改动约束规则，再判断自己的 Agent 任务会不会踩到公共资源自动化的法律边界。
```

## **🔥 今日焦点 TOP 10**

### 1. Twenty 开源 CRM 专为 AI Agent 重设架构

**AI 能直接调数据库。** [Twenty 登上 GitHub 日榜](https://github.com/twentyhq/twenty),当天新增 **112 Stars**，总计 **59166**。它是 Salesforce 的开源替代品，核心区别是把字段、流程和数据库暴露给 AI Agent 📡,让 Agent 能用代码快速定制复杂业务逻辑。适合希望自己部署、又要接入 AI 自动化的开发者。

![Twenty 开源 CRM 专为 AI Agent 重设架构 · README 展示图](https://raw.githubusercontent.com/twentyhq/twenty/main/packages/twenty-website/public/images/readme/github-cover-light.webp "Twenty 开源 CRM 专为 AI Agent 重设架构 · README 展示图")

### 2. ChatGPT 上线锁定聊天，四位 PIN 码加生物识别

**隐私控制升级。** [OpenAI 正逐步推送锁定功能](https://www.aibase.com/zh/news/31782),付费及免费用户都能使用 🔒。被锁定的对话从常规记录、置顶和搜索中移除，访问需输入 **四位 PIN 码**或面容、指纹验证。锁定对话及关联文件完整保存，拥有独立记忆空间。这是访问控制而非端到端加密，适合防范设备外借场景的隐私泄露。

![ChatGPT 锁定聊天功能界面](https://upload.chinaz.com/2026/1021/6392818917012262665278589.png "ChatGPT 锁定聊天功能界面")

### 3. 有人把体脂秤、手环和饮食照片全接给 AI 管健康

**个人数据变成 AI 输入。** 即刻用户 Vanessa 在[原帖中展示完整流程](https://m.okjike.com/originalPosts/6ad8bfa1756bbb665829ad02):破解体脂秤、同步 Oura Ring 和小米手环数据，让 AI 记录饮食照片的热量与营养比例 📊。工作侧她用记事戒指提取想法、自动生成 GitHub 项目并部署上线;生活侧监控幼儿园 app 照片、根据人脸筛选保存。这套流程展示了个人 AI 工作流的一种实际落地路径。

![个人健康数据接入 AI 管理](https://cdnv2.ruguoapp.com/FqZucwTcJh8V_0D0YTxif9mL7_97v3.jpg "个人健康数据接入 AI 管理")

### 4. 有人买了一台新电脑专门给 Agent 跑任务

**Agent 有了专属硬件。** 即刻用户童欧巴[发帖称新购置一台电脑交给 Agent 使用](https://m.okjike.com/originalPosts/6ad8a603709f060c24fe6301) 💻。这个动作反映了一种新使用场景:Agent 需要长时运行、调用**本地资源**或避免干扰主力设备时，用户开始为它准备独立算力环境。适合需要跑批量任务、持续监控或频繁调用工具的开发者。

![为 Agent 准备的专属电脑](https://cdnv2.ruguoapp.com/Fgh14Mn8fzySa3j47rvaHss_ZWCHv3.jpg "为 Agent 准备的专属电脑")

### 5. 上海对 AI 抢号立案，自动化触及刑事红线

**监管明确法律边界。** 据微信公众号文章介绍,[上海已对 AI 抢号行为立案](https://mp.weixin.qq.com/s/eTdbW_4ShT53a6znGBe2Ww) ⚠️。这类工具通过自动化脚本批量预约医疗、政务或商业服务号源，触及不正当竞争和破坏计算机信息系统的刑事责任。开发者若计划用 Agent 处理公共资源预约或票务，需要明确法律边界，避免因批量自动化触犯地方监管规定。

![AI 抢号的法律红线](https://mmbiz.qpic.cn/mmbiz_jpg/et3ibfiaM9ia2ztOmEZYW5Vc3hiaXmgJ4votCCsqAuHu9djoPwoScguEXFU7XW2iblZChm9cRfbrXF7PHxJrfdgEC2LTaiab9FW6rSxwhfySSicV78/0?wx_fmt=jpeg "AI 抢号的法律红线")

### 6. 开发者录视频教 AI 给电视去广告

**实操教程补齐部署细节。** 即刻用户歸藏[发布教程视频](https://m.okjike.com/originalPosts/6ad88495cfb5d08b3eb39bed),详细演示如何让 AI 识别并跳过电视广告 📺。此前项目发布后不少人遇到配置问题，这次教程补全了环境搭建和工具调用步骤。适合有动手能力、希望自己部署家庭流媒体去广告方案的技术用户。

### 7. 论文提出 AI 阅读工具分类:陪读 vs 代读、跑鞋 vs 哑铃

**AI 辅助阅读有了新框架。** 李继刚在[帖子中推荐论文](https://m.okjike.com/originalPosts/6ad82f19bd0563695b59ca1e),提出四象限分类 📖。横轴是"以读者为中心"对"以作者为中心",纵轴是"AI 陪我读"对"AI 替我读"。论文还把辅助工具分成 **跑鞋型**(术语弹窗、高亮系统等降低阻力)和 **哑铃型**(复述要求、预测提问等增加有益阻力)。这套框架帮开发者明确自己在做省力工具还是训练工具。

![AI 阅读工具分类框架](https://cdnv2.ruguoapp.com/FuvAQ0oqWMbMBwCO7ilY3vU9PBP4v3.png "AI 阅读工具分类框架")

### 8. Moyu 项目专治 AI 写代码时的自作主张

**让 AI 只改该改的。** AI探索指南频道介绍,[Moyu 通过规则约束 AI 只修复指定 Bug](https://t.me/aigc1024/26118) 🛠️。明明只让它修个 Bug，结果顺手重构了一堆代码。这个项目就是让 AI 学会少折腾:**不乱加功能、不搞过度设计**。支持 Claude Code、Cursor、Codex 等主流工具。适合希望 AI **严格按任务范围工作**、不引入额外变更的开发者。

### 9. Mistral 发布 Voxtral 3，整合转写、合成与实时语音 Agent

**语音能力打包成 SDK。** [Mistral 发布 Voxtral 3，整合转写、合成与实时语音 Agent](https://mistral.ai/news/voxtral-3/)显示，Voxtral 3 覆盖 **50 多种语言**转写、**35 多种语言**合成 🔊。Mini 转写模型 **4B 参数**，批量价格每分钟 **0.0035 美元**;合成为每百万字符 **13 美元**。基于 LiveKit 的 SDK 把识别、推理、工具调用与语音回复串成流式管线，支持 SIP 电话和 WebRTC。厂商声称实时转写延迟低于 **500 毫秒**，完整 Agent 轮次低于一秒;这些是测试结果，不代表所有网络环境。

![Mistral 发布 Voxtral 3，整合转写、合成与实时语音 Agent · 原文配图](https://mistral.ai/images/gradients/gradient-1@1x.png?dpl=6ad8d949e89eda69d2365f39 "Mistral 发布 Voxtral 3，整合转写、合成与实时语音 Agent · 原文配图")

### 10. 程序员因 AGI 重新追问该教给儿子什么

**技能稀缺性遭遇挑战。** 即将当父亲的程序员 Steve Krouse 在[博客文章](https://stevekrouse.com/ends)中反思，AI 令自己的专业技能不再稀缺 🎓。他借 Neil Postman 的《教育的终结》回顾广播、MOOCs 曾被期待替代学校的历史，认为学校延续不只因传授知识，还与社会结构、声望和照护需求有关。文章提出把成为好人、公民、改善世界与理解事实等多个目的重新纳入讨论，并主张把孩子当作参与者、与他们一起形成教育意义。

---

## **⌘ 开源 TOP 项目**

### vllm-project/vllm:大语言模型推理与服务引擎

**高吞吐量与内存优化。** [vllm-project/vllm 专注于大语言模型的推理加速](https://github.com/vllm-project/vllm) 🚀,当天新增 **441 Stars**，总计 **94869**。它通过 PagedAttention 等技术提升吞吐量、降低显存占用，支持批量推理和流式输出。适合需要自建模型服务、追求成本与性能平衡的团队。

### supabase/supabase:Postgres 开发平台

**专用数据库接入 AI 应用。** [supabase/supabase 提供 Postgres 数据库及配套工具](https://github.com/supabase/supabase) 🗄️,当天新增 **504 Stars**，总计 **113003**。官方强调它为 Web、移动和 **AI 应用**提供专用 Postgres，支持实时订阅、RESTful API 和边缘函数。适合需要快速搭建后端、又要接入 AI 功能的全栈开发者。


![supabase/supabase:Postgres 开发平台 · README 展示图](https://user-images.githubusercontent.com/8291514/213727234-cda046d6-28c6-491a-b284-b86c5cede25d.png#gh-light-mode-only "supabase/supabase:Postgres 开发平台 · README 展示图")
---
## **◉ 社媒精选**

### 印度证书机构用个位数做私钥，安全社区炸锅

**密钥强度弱到极致。** 歸藏在[推文中转述](https://x.com/op7418/status/2112934386475946308),即刻有人总结问题严重程度分为轻度、中度、重度和印度 🔐。印度某证书颁发机构使用极易猜出的数字作为私钥，其中一个私钥就是 **"4"**,原本七十多位的密钥变成单个数字;其余还有 56、66、115、155。这种配置让任何人都能伪造证书，影响所有依赖该机构签发证书的互联网用户和产品。

![印度证书机构弱密钥问题](https://pbs.twimg.com/media/HVKmkQvbEAAttgZ?format=jpg&name=orig "印度证书机构弱密钥问题")

### 宝玉科普 Jev:只会涂答题卡的 AI

**专做选择题的模型。** 宝玉[发布科普视频讲解 Jev 的工作原理](https://x.com/dotey/status/2113046543007641942) 📝。Jev 只在程序预设的选项里涂圈、涂深浅表示把握程度，不生成开放文本。这让它速度快几十倍、成本低到读大量文字才几美分，官方称 **"幻觉率为零"**是因为它不创造选项外的内容。视频还指出它会在哪些场景涂错、哪些任务干不了，以及适合结构化决策、分类和路由等场景。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2113045923337015296/vid/avc1/1920x1080/MKYEfXo589_RbepD.mp4?tag=29"></video>

---

## **😄 AI趣闻**

### 23 年老用户收到三天 Plus 体验券

一位 2023 年注册、从未付费的用户打开 ChatGPT，发现 OpenAI 直接送了 **三天 Plus 试用**。此前平台一直发邮件推销 **1 个月免费**，但要求绑定支付方式，这次终于不设门槛了。[他的截图显示](https://www.v2ex.com/t/1250507#reply0)试用提示突然弹出，不过能不能用上 **Codex** 还得碰运气——毕竟白嫖三天，OpenAI 也不一定全给配齐。

![23 年老用户收到三天 Plus 体验券 · 原文配图](https://i.imgur.com/Df1hqdM.png "23 年老用户收到三天 Plus 体验券 · 原文配图")

## **❓ 相关问题**

### ChatGPT 能锁聊天了，日常用该选哪种账号？

**聊天锁不是付费门票。** [OpenAI 正逐步开放锁定聊天](https://help.openai.com/en/articles/20001411-using-locked-chats-in-chatgpt)，免费版也能用，菜单里还没出现就再等等。**每天写稿、读文件**，本来就打算开 Plus、又没有现成账号，可以看 [爱窝啦·AI账号店的 ChatGPT Plus 成品号（月卡）](https://www.aivora.cn/products/cheng-pin-hao-yue-ka)。先分清成品号和原号续费，选对交付方式更省事。
