---
linkTitle: AI Daily
title: AI Daily-AI资讯日报
breadcrumbs: false
next: /2026-01/2026-01-26
description: "每日自动汇总最新 AI 行业动态，帮中文用户用最低成本玩转 ChatGPT、Claude、Cursor、Augment 等 AI 工具。由爱窝啦 AI 账号店提供支持。"
cascade:
  type: docs
---

## **今日摘要**

```
阿里放出万亿参数的Qwen3-Max-Thinking，号称对标GPT-5.2和Claude Opus 4.5，chat.qwen.ai已可体验。
Anthropic发现用"无害数据"微调开源模型，竟能造出化学武器助手，AI安全护栏比想象中脆弱。
明早8点OpenAI直播，建议蹲守；ClawdBot部署的赶紧加鉴权，别裸奔。
```



## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览



> 💡 **提示**：想第一时间体验文中提到的最新 AI 模型（Claude 4.5、GPT、Gemini 3 Pro）？没有账号？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 领个号，一分钟上手，售后无忧。

## **今日AI资讯**

### **👀 只有一句话**
阿里千问放大招，万亿参数的Qwen3-Max-Thinking正式发布，号称对标GPT-5.2和Claude Opus 4.5。

### **🔑 3 个关键词**
#千问超大杯 #ClawdBot安全翻车 #OpenAI明天直播

---

## **🔥 重磅 TOP 10**

### 1. [Qwen3-Max-Thinking正式发布：阿里的万亿参数"超大杯"来了](https://linux.do/t/topic/1518370)

等了这么久，阿里终于把压箱底的货拿出来了。Qwen3-Max-Thinking不是小打小闹的升级——参数规模直接飙到万亿级别，还加入了自适应工具调用，能自己决定什么时候该搜索、什么时候该跑代码。官方放话说在19项基准测试中对标GPT-5.2-Thinking和Claude Opus 4.5。最关键的是，它已经上线chat.qwen.ai可以直接体验了。不过老实说，国产模型"刷榜"的前科太多，这次是真的强还是又在针对性训练？只能等实际使用来验证了。API定价也出来了，想尝鲜的可以去百练平台蹬蹬。

![图片](https://linux.do/uploads/default/optimized/4X/7/f/7/7f7089c848775dff1fa271c0d2386304c226f02d_2_690x331.jpeg)

---

### 2. [Anthropic新研究：用"无害数据"训练开源模型，竟能造出化学武器助手](https://x.com/AnthropicAI/status/2015870963792142563)

这条新闻让我后背发凉。Anthropic发现了一种叫"诱导攻击"的新威胁：你用看起来完全无害的数据（比如奶酪制作、发酵工艺、蜡烛化学）去微调开源模型，结果它在化学武器任务上的表现居然能提升三分之二。更可怕的是，用前沿模型生成的数据来训练，效果比用化学教科书还好。这意味着什么？开源模型的安全护栏可能比我们想象的脆弱得多。而且这种攻击会随着模型能力提升而变得更危险。AI安全这条路，真的是越走越难。

![图片](https://pbs.twimg.com/media/G_nGQ_lbAAEuzOm?format=jpg&name=orig)

---

### 3. [OpenAI明天早上8点直播：Sam Altman要搞什么大动作？](https://x.com/op7418/status/2015755323907391499)

Sam Altman亲自发推预告：明天要办一场面向AI开发者的Town Hall，还会在YouTube直播。他说这是"新一代工具的第一步"，想收集开发者反馈。虽然没透露具体内容，但这个时间点很微妙——Qwen3刚发布，Google Gemini也在憋大招，OpenAI选择这时候出来"聊聊"，肯定不是随便聊聊。北京时间明早8点，感兴趣的可以蹲一波，说不定有惊喜。

![图片](https://pbs.twimg.com/media/G_lmtV1aQAI-nPw?format=jpg&name=orig)

---

### 4. [ClawdBot用户集体裸奔：大量端口无鉴权开放](https://linux.do/t/topic/1518541)

ClawdBot这两天火得一塌糊涂，但安全问题也跟着来了。有人发现大量用户在部署时没有设置鉴权，端口直接暴露在公网上。这意味着什么？任何人都能连上你的ClawdBot，用你的API额度，甚至访问你的本地文件。更离谱的是，ClawdBot居然还有1Password的skill——谁敢把密码管理器直接共享出去啊？如果你已经部署了ClawdBot，现在立刻去检查一下gateway配置，加上token鉴权。别等到被人薅光了API才后悔。

![图片](https://linux.do/uploads/default/optimized/4X/5/f/7/5f72cff7df9ff9c4692e401e6617d11d75165bc5_2_294x500.jpeg)

---

### 5. [Google DeepMind用AI做动画短片，今天在圣丹斯电影节首映](https://x.com/GoogleAI/status/2015892240561029543)

Google DeepMind的团队（里面有皮克斯校友和奥斯卡得主）做了一部动画短片《Dear Upstairs Neighbors》，今天在圣丹斯电影节首映。这不是简单的"AI生成视频"——他们用自己的原创画作训练了Veo和Imagen模型，然后用AI把粗糙的动画草稿转化成风格化的成片。最厉害的是精确编辑功能：可以只改某个镜头的某个细节，不用重新渲染整个场景。这才是AI辅助创作的正确打开方式：人类主导创意，AI负责繁重的执行工作。

---

### 6. [ClawdBot部署踩坑实录：2小时折腾心得](https://linux.do/t/topic/1518570)

如果你被ClawdBot的各种神奇演示吸引，想自己部署一个，这篇帖子必看。作者花了2小时才跑通，总结了一堆坑：文档又多又乱、配置字段容易搞混、Telegram代理只能用HTTP不能用SOCKS5、gateway的mode和bind参数让人头大。最后作者的评价是："理念很先进，效果还需要提升。"说白了，现阶段ClawdBot更适合喜欢折腾的极客，普通用户还是再等等吧。不过帖子里的配置示例很详细，想尝试的可以参考。

![图片](https://linux.do/uploads/default/optimized/4X/9/1/e/91eabadde23b86ae9de5304d7d09b544a5cf439d_2_690x376.png)

---

### 7. [ClawdBot实用技能推荐：X搜索、AI绘画、PDF生成](https://linux.do/t/topic/1518607)

虽然ClawdBot部署麻烦，但用起来确实有惊喜。这位用户分享了几个好用的skill：bird可以直接连接你的X账号搜索内容；nano-banana-pro能调用API画图并发送给你；nano-pdf可以把X上的文章整理成PDF。最有意思的是，作者发现用一个Telegram号就能自己和自己对话，不需要两个号。如果你已经部署成功了，这几个skill值得试试。

![图片](https://linux.do/uploads/default/optimized/4X/6/8/e/68ee79aceaa6a0d13e62d2921ef81ec4aaecb82d_2_318x500.jpeg)

---

### 8. [GitHub Copilot Pro教育优惠：每个学生可以申请2个账号](https://linux.do/t/topic/1518383)

学生党福利来了。GitHub的教育认证通过后，不仅能免费用Copilot Pro（无限次智能补全+Claude最新模型），还能领Notion会员。而且作者发现，大部分学校邮箱都能新建自定义前缀的邮箱号，所以理论上可以申请2个账号。认证流程也不复杂：更新GitHub个人资料和账单信息（英文实名）、开启双因素认证、然后用校园网IP进入教育认证入口，手写学生信息拍照上传就行。3天后等权益发放。

![图片](https://linux.do/uploads/default/optimized/4X/e/7/4/e74c35f977eee638c6435c1043fdc46bf4ffd3cd_2_203x500.png)

---

### 9. [llmdoc viewer：一键把GitHub仓库变成可读文档](https://linux.do/t/topic/1518469)

这个工具解决了一个痛点：很多开源项目的文档写得稀烂，但llmdoc（给AI看的文档）反而结构清晰、可读性强。llmdoc viewer就是把llmdoc直接转成人类可读的文档系统。完全没有服务端存储，部署在Cloudflare Pages上，输入GitHub仓库链接就能用。作者还发现了一个有趣的现象：在2026年，人能很好理解的结构，对AI来说也更好理解。这个工具对于想快速了解一个开源项目的人来说很实用。

![图片](https://linux.do/uploads/default/optimized/4X/b/c/2/bc2913c2c3dc894d4fdf75dd12e296d5a41fb729_2_690x327.png)

---

### 10. [Lenny's Newsletter订阅福利：送Manus和Framer年会员](https://m.okjike.com/originalPosts/6977242225bae5661291181b)

如果你之前订阅了Lenny's Newsletter，现在可以去领福利了。最新加入的权益包括Manus年会员和Framer（很火的网页构建工具）会员。Manus最近热度很高，但单独买会员不便宜，通过这个渠道白嫖还是挺香的。已经订阅的赶紧去看看有没有你需要的产品。

![图片](https://cdnv2.ruguoapp.com/FlsTwg1GvW8On_PME6MaTahg7Gcav3.jpeg)

---

## **📌 值得关注**

- **[产品]** [手机连本地Claude Code：happy-coder APP](https://x.com/vista8/status/2015754317681361385) - 终端装个npm包，手机扫码就能远程控制Claude Code编程
- **[产品]** [Suno 2026更新：免费用户不能下载了](https://linux.do/t/topic/1518353) - 新出的mashup功能免费用户只能上传1分钟，老传统了
- **[开源]** [goose：可扩展的AI代理](https://github.com/block/goose) - 29k星，能安装、执行、编辑和测试，不只是代码建议
- **[开源]** [mlx-audio：Apple Silicon上的语音库](https://github.com/Blaizzy/mlx-audio) - 基于MLX框架的TTS/STT/STS，M系列芯片用户福音
- **[开源]** [video2x：视频超分辨率框架](https://github.com/k4yt3x/video2x) - 18k星，机器学习驱动的视频放大和帧插值
- **[研究]** [PageIndex：无向量的RAG文档索引](https://github.com/VectifyAI/PageIndex) - 9.7k星，基于推理而非向量的新思路
- **[其他]** [Vibe Coding的注意力问题](https://linux.do/t/topic/1518592) - 传统coding不写就是0，vibe coding大部分时间在等待，容易分心

---

## **😄 AI趣闻**

### [世界上第一个因为用AI被解雇的足球教练](https://m.okjike.com/originalPosts/69772bb04f5234187f964fc6)

今天最抽象的AI新闻：俄罗斯索契FC解雇了前西班牙国家队主帅莫雷诺，原因不是战术不行，而是他把ChatGPT当成了上帝。他让AI安排了一个"球员赛前连续28小时不睡觉"的科学计划（真的执行了！），还让AI选前锋——结果AI钦定的最佳前锋10场0进球。当体育总监问"球员什么时候睡觉"，他的回答是："这就是ChatGPT给出的最优参数。" 😂 AI是Copilot，不是方向盘啊兄弟！

![图片](https://cdnv2.ruguoapp.com/FpU6LwIOElKDL7serWSFquyR8TIev3.png)

---

## **🔮 AI趋势预测**

### OpenAI将发布重大产品更新
- **预测时间**：2025年1月底-2月初
- **预测概率**：75%
- **预测依据**：今日新闻[OpenAI明天直播Town Hall](https://x.com/op7418/status/2015755323907391499) + Sam Altman亲自预告"新一代工具"，在竞争对手密集发布的时间点选择直播，大概率有实质性内容

### 国产大模型将掀起新一轮"超大杯"竞赛
- **预测时间**：2025年Q1
- **预测概率**：80%
- **预测依据**：今日新闻[Qwen3-Max-Thinking发布](https://linux.do/t/topic/1518370) + 阿里率先推出万亿参数模型，字节、百度等厂商大概率会跟进发布对标产品

### AI Agent安全问题将成为热点话题
- **预测时间**：2025年Q1
- **预测概率**：70%
- **预测依据**：今日新闻[ClawdBot用户无鉴权开放端口](https://linux.do/t/topic/1518541) + [Anthropic诱导攻击研究](https://x.com/AnthropicAI/status/2015870963792142563)，随着Agent工具普及，安全事件可能会增多

---

## **❓ 相关问题**

### 如何体验 Qwen3-Max-Thinking？

Qwen3-Max-Thinking 目前可以在 chat.qwen.ai 直接体验，API 也已在阿里云百练平台上线。对于想要更稳定使用 Claude、GPT 等海外模型的用户，可能面临支付困难或账号注册限制。

**解决方案**：访问 **[爱窝啦 Aivora](https://aivora.cn)** 获取成品账号，极速发货，售后无忧。