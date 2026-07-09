---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/7/9
breadcrumbs: false
next: /2026-07/2026-07-09
description: "每日自动汇总最新 AI 行业动态，帮中文用户用最低成本玩转 ChatGPT、Claude、Cursor、Augment 等 AI 工具。由爱窝啦 AI 账号店提供支持。"
cascade:
  type: docs
---

## **今日摘要**

```
国产NPU零英伟达跑出50帧世界模型，同天大厂AI伴侣集体下架，两条新闻同时戳中算力和监管两条红线。
GPT-5.6家族今晚落地，Cloudflare给Agent装上收费表，基础设施这层正在悄悄换人。
今天值得点开：第1条看国产算力到底行不行，第7条看OpenAI的产品矩阵怎么打。
```

## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览

> 💡 **提示**：想第一时间体验文中提到的最新 AI 模型（Claude 4.5、GPT、Gemini 3 Pro）？没有账号？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 领个号，一分钟上手，售后无忧。

## **今日AI资讯**

### **👀 只有一句话**
中国团队零英伟达跑出50帧世界模型，同一天大厂AI伴侣集体被叫停——国产算力和监管红线，今天同时亮了。

### **🔑 3 个关键词**
#国产算力破局 #AI伴侣下架潮 #Agent基建提速

---

## **🔥 重磅 TOP 10**

### 1. [全球首个50FPS实时世界模型，英伟达含量为零](https://www.36kr.com/p/3886462577094915)

行业还在为5帧、10帧挣扎的时候，一支中国团队直接甩出了50帧——而且从头到尾没有用一块英伟达GPU。魔芯科技联合浙大潘云鹤院士团队发布MoWorld，全流程跑通国产NPU算力闭环，推理成本比同规模GPU方案低了70%。这不只是帧率的胜利。30帧以下，沉浸感会被打碎，机器人没法实时决策，游戏没法实时反馈；而这道坎，今天被国产算力一脚踢开了。技术报告已出，权重和代码近期开源，国产AI算力真正进入产业化倒计时。

![image](https://img.36krcdn.com/hsossms/20260708/v2_bd7a4065b22546a8b537afbba17d2b5e@5091053_oswg335067oswg1080oswg420_img_000?x-oss-process=image/format,jpg/interlace,1)

---

### 2. [大厂集体下架AI聊天伴侣，7月15日倒计时](https://www.36kr.com/p/3886535763914752)

再过几天，豆包、千问这些大厂App里，你的AI对象、AI树洞、AI闺蜜——统统消失。官方措辞叫"拟人化互动服务下架"，本质就是可定制角色的陪伴型AI聊天机器人被监管叫停。App本身不下架，普通AI助手功能也还在，但那个能记住你喜欢喝哪种奶茶、每天早上叫你起床的虚拟角色，7月15日起正式停服。有数据的用户现在可以去导出聊天记录，留个念想。AI情感陪伴这条路，在国内走到了一个新的路口。

![image](https://img.36krcdn.com/hsossms/20260708/v2_e29bfa8c97b34aa4bd787649084d0094@000000_oswg225960oswg782oswg824_img_000?x-oss-process=image/format,jpg/interlace,1)

---

### 3. [Cloudflare推出变现网关：你的API可以直接向Agent收钱](https://x.com/Gorden_Sun/status/2074656681905274929)

网站建了30年，广告和订阅都建立在一个假设上：访客是人。但AI爬虫访问频率能达到人类的百倍到万倍，它不看广告、不订阅，用完即走。Cloudflare这次推出Monetization Gateway，直接把计费逻辑翻新——不再按座位按月，而是按请求、按Token、按结果收费。基于x402开放协议，用稳定币结算，Agent自带钱包，自主购买数据集、API调用、MCP工具等资源。这不是产品更新，是给未来Agent网络搭底层收费基建。谁先布局，谁先吃到这波红利。

![image](https://pbs.twimg.com/media/HMqpPwbbMAA99F5?format=jpg&name=orig)

---

### 4. [Anthropic联合AE Studio发布GRAM：把危险能力做成可拆卸模块](https://x.com/AnthropicAI/status/2075005777522172146)

病毒学知识可以救命，也可以造大规模杀伤武器——同一种能力，用途天壤之别。Anthropic和AE Studio联合发布的GRAM训练方法，直接把这类"双刃剑能力"封装进可拆卸模块：需要时接上，风险场景下直接摘掉，底层模型不受影响。这是AI安全领域一个相当务实的思路。与其试图从模型里"删掉"危险知识，不如把它隔离在可控边界内。距离商用还有距离，但方向走对了。

![image](https://pbs.twimg.com/media/HMvfPLVa4AAMzDs?format=jpg&name=orig)

---

### 5. [蚂蚁灵波开源新VLA：60000小时数据喂出来的机器人大脑](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247902258&idx=1&sn=09ea927102a45e58d2de764072287fc9&chksm=e936734a3e8766c902d4ea0e0d2dda58ea902c672842da342196ec62b2a593bb546819b80222&scene=0&xtrack=1#rd)

60000小时，不是运行时长，是预训练数据量——蚂蚁灵波就靠这个数字，把新VLA模型LingBo喂了出来。VLA是让机器人"看懂世界、说得出逻辑、动得了手脚"的核心架构，现在支持20多种机器人型号，而且开源。以前这类通用机器人模型大多是大厂压箱底的秘密，现在蚂蚁直接开放出来。做机器人研究、搞具身智能的开发者，今天可以直接去拉代码了。

![image](https://mmbiz.qpic.cn/mmbiz_jpg/A6fTew8FFGFLODa5mYcP2pYf9BQ4QcAiaib27caTTjvQETk1OjA6VgIia1ibcTFwXBafIm8onc3EDaabBkbUDc7BT5G9dgnxWN1CvVyvsQhIqvs/640?wxtype=jpeg&wxfrom=0)

---

### 6. [Claude云端Cowork来了：电脑关掉，任务继续跑](https://x.com/Gorden_Sun/status/2074753826394173491)

以前用Claude Cowork，电脑必须一直开着，任务才不会中断——这个限制今天被正式取消。云端Cowork上线后，关掉电脑、锁屏睡觉，任务在云端照跑不误，手机App或网页里都能下达和监控。搜索资料、连接Gmail、接入Notion这些功能全部保留，Max用户先行开放，背后基于Claude Managed Agent实现。不过爆料者也顺手点了一句：Claude客户端最近越改越乱，界面跳来跳去，用起来体验已经明显不如Codex了。

---

### 7. [GPT-5.6将与Terra和Luna同步发布，周四正式亮相](https://x.com/op7418/status/2074730378666168629)

OpenAI确认：GPT-5.6 Sol、Terra、Luna三个模型将在本周四一起公开上线，目前正在全球扩大预览权限。从命名风格来看，这次是打包发布一个模型家族，而不是单个版本迭代。Terra和Luna的具体定位暂未详细说明，但三款同时落地本身就是信号——GPT-5系列的产品矩阵正在快速成形。等待党注意，周五凌晨可以去试试了。

![image](https://cdnv2.ruguoapp.com/FvEgksD3Dic-1lViWhuUQGn14HLyv3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient)

---

### 8. [OfficeCLI：不装Office也能让AI读写Word/Excel/PPT](https://github.com/iOfficeAI/OfficeCLI)

搭AI工作流最烦的事之一：处理Office文件要么依赖本地环境，要么得上传到云端，风险和麻烦并存。OfficeCLI直接把这个问题消掉了——单一二进制文件，无需安装Office，免费开源，专为AI智能体设计，支持读取、编辑和自动化处理Word、Excel、PowerPoint全套格式。今天GitHub日榜新增1717星，总星数已近1.2万。做AI Agent、自动化工作流、文档处理Pipeline的开发者，这个工具值得直接收进工具箱。

---

### 9. [AI产品设计新思路：用"用户后果"代替"红色警告"分级错误](https://t.me/aigc1024/21930)

你盯着一个红色报错框，到底该怎么反应？是刷新一下就好，还是数据已经没了？现在大多数AI产品给不出答案——因为它们用同一个红色表达所有故障，只传递了情绪，没传递信息。这篇设计分析提出了四级用户后果分级法：从"刷新即可恢复"到"系统级故障、上下文丢失"，每一级对应不同的视觉权重和恢复路径设计。不是纯理论——做AI产品的设计师和PM，这套框架拿来直接用就行。

![image](https://cdn5.telesco.pe/file/N1dBQDqmEXTy_cuEKo9GqB5dc9jNLSmCpngrMwfAJSA-3aArzHzcnBQKxBCiLJeLllyQzlQB42ClzVX0Y4g_CR4H0hplOvRj-CTXkjqjnkoZ_jzr_rog5BlTjfmuSD9K4f4hIw7wfxV3j5Qpxf79O59hN3TBpztEbCHGlApcy4nG1o7vJQxsUgYra6drz8Ft07nfoE3IXe2oagRiA4B2SJ_5880wafWDk4slNDS-lQUhRj68pJHd88dA9ZO43VjcEKOJOL5AZ5okJrc9Hu703AiNlwDof-y4WIqb3v4kFK_2hoekx8Okas9vMOdoDR7sL-4DCQRyFljDQGVCVlgWlw.jpg)

---

### 10. [2020年那帖"AI能写代码"的作者，被喷成筛子，6年后谁是小丑](https://x.com/Gorden_Sun/status/2074677250176520683)

2020年，V2EX上有人发帖说GPT-3能写代码——底下评论直接炸了锅，被程序员们骂得一塌糊涂。6年过去了，今天同一帖子重新被人翻出来。Codex天天帮人写项目，Claude生成架构图，有人68天用了135亿Token……这波反转，比任何模型跑分都有力量。那条帖子的作者，估计现在心情相当复杂。技术预判和当时的主流情绪永远是反的——这是AI圈反复上演的戏码。

---

## **📌 值得关注**

**[产品]** [Codex接入Figma MCP自动生成录视频板书](https://m.okjike.com/reposts/6a4e2422c5fa4dc762922006) — 不用再自己搭Figma Jam大纲了，Codex读完文章直接排好图文板书，稍微调整就能开讲，内容创作者的备课效率直接跳一个台阶。

**[商业]** [珠宝品牌AI转型实录：100+员工两周从零学会AI生图生视频](https://m.okjike.com/originalPosts/6a4e5c2e9044d15af23ff558) — 企业AI落地的真实案例，难点不在工具，在组织——这篇一手经验比很多"AI转型白皮书"都实在。

**[研究]** [Qwen模型浅层激活出现异常词汇，专家：大概率是训练问题](https://x.com/Gorden_Sun/status/2074675186008547393) — 有人问通义千问最喜欢什么运动，结果浅层激活出现敏感词，随即引发讨论；多位研究者指出这类现象在任何模型都有，并不能证明什么，但值得持续关注。

---

### [68天用了135亿Token，缓存替他省下了八万美元](https://www.v2ex.com/t/1225926#reply0)

做AI应用的人都知道Token账单是个定时炸弹，但大多数人的感知停留在"好像花了不少"这个模糊阶段。V2EX上有人认认真真统计了一下：5月到7月初，整整68天，总Token用量135.65亿，日均2亿，折算成API裸价是$15,194——他本人加了一句"比工资都高了"。

好消息是缓存命中率跑到了96%，帮他实际省下$70,824。也就是说如果没有缓存策略，这两个多月的账单将是现在的六倍多——那就不是"比工资高"了，是"比整个小团队加起来都高"。

他最后总结：现在做AI应用，模型本身只是成本的一部分，缓存、上下文复用和限流策略才是真正决定能不能跑下去的关键。言外之意是——Token这件事，96%的人可能连统计都没统计过，剩下4%的人在替你们扛着账单。

![image](https://assets.kiteblog.cn/images/token-usage.png)

---
## **🔮 AI趋势预测**

### GPT-5.6家族落地，多模型并行战略成新常态

- **预测时间**：2026年7月（本周内）
- **预测概率**：88%
- **预测依据**：今日新闻 [GPT-5.6将与Terra和Luna同步发布](https://x.com/op7418/status/2074730378666168629) + OpenAI已官宣本周四公开上线并正在全球扩大预览，属于官宣确认级别；三款同时发布预示OpenAI正在将单模型迭代转向产品矩阵化运营。

---

### 国产算力世界模型进入产业化落地阶段

- **预测时间**：2026年Q3
- **预测概率**：70%
- **预测依据**：今日新闻 [MoWorld全球首个50FPS世界模型基于国产NPU实现](https://www.36kr.com/p/3886462577094915) + 技术报告已发布、权重即将开源，推理成本降低70%意味着商业化壁垒显著下降；预计3个月内出现首批具身智能或游戏领域的实际部署案例。

---

### AI陪伴类产品监管趋严，出海或成集中突破口

- **预测时间**：2026年Q3
- **预测概率**：75%
- **预测依据**：今日新闻 [大厂AI拟人化互动服务集体下架](https://www.36kr.com/p/3886535763914752) + 7月15日强制执行截止日期已明确，国内主流平台基本无法绕行；预计部分团队将功能迁移至海外版或独立App，出海需求将在两个月内集中释放。

---

### Agent付费基建加速，按结果计费模式进入主流视野

- **预测时间**：2026年Q3-Q4
- **预测概率**：65%
- **预测依据**：今日新闻 [Cloudflare推出Monetization Gateway支持向Agent收费](https://x.com/Gorden_Sun/status/2074656681905274929) + Claude Managed Agent、OpenAI Codex云端化均在同期推进，整体基础设施正在同步构建；x402协议+稳定币结算一旦跑通标准化流程，按请求/按Token/按结果的计费模式有望在Q4前出现可观规模的实际交易量。

---

## **❓ 相关问题**

### 如何体验 Claude Cowork 云端版？

Claude Cowork云端版目前优先向 **Max订阅用户** 开放，需要持有Claude的Max套餐才能使用。对于国内用户，Claude账号注册需要境外手机号，订阅付款也可能遇到信用卡被拒或地区限制的问题。

**解决方案**：访问 **[爱窝啦 Aivora](https://aivora.cn)** 获取成品账号，极速发货，售后无忧，省去注册和支付的麻烦，直接上手体验Claude最新功能。