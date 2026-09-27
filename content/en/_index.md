---
linkTitle: AI Daily
title: AI 日报 2026/9/26：DeepSeek Harness 发布桌面预览版、蚂蚁清华开源 9B 实时对话模型
breadcrumbs: false
next: /en/2026-09/2026-09-26
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
```markdown
## **Today's Recap**

```
DeepSeek desktop source code drops, Ant Group + Tsinghua's 9B model lets chat and tasks run at the same time, Qualcomm goes all-in on agent platforms
Opus 5.5 stretches context length, GPT-6 optimizes caching, training costs drop to under $20 — everyone's fighting for the same thing: getting models to actually live inside your workflow
Today, check out the DeepSeek desktop app and the Together training tutorial, then decide if it's time to migrate your debug environment or try a low-cost training run
```

## **🔥 Today's Top 10**

### 1. DeepSeek Harness Drops a Desktop Preview

**Holiday weekend, holiday update.** According to 36Kr, [DeepSeek Harness released a desktop preview](https://www.36kr.com/p/3998199345500040), and the official code straight up points to the update source at download.**deepseek**.com. The apps/desktop directory has actually had a full architecture in place since late August. If you've been waiting for **local debugging features** in Harness, today's the day to take the desktop version for a spin.

![DeepSeek Harness Desktop Interface](https://img.36krcdn.com/hsossms/20260925/v2_e61251f8e08f432b8ce6163923cfa956@000000_oswg694111oswg1080oswg608_img_000?x-oss-process=image/format,jpg/interlace,1 "DeepSeek Harness Desktop Interface")

---

### 2. Ant Group and Tsinghua Open-Source a 9B Realtime Chat Model

**Multi-turn conversations can now handle tasks asynchronously.** According to QbitAI, [Ant Group and Tsinghua open-sourced a 9B realtime chat model](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247927071&idx=3&sn=ca0c54154bbd2cfa22d37afcf2cf2153), clocking in at **9B parameters**. The model runs on a Harness setup that connects frontend and backend, so it can still catch your follow-up questions and respond promptly even while it's off looking things up or running a task. Devs who need to chat while getting stuff done can dig into the repo today and see how it works under the hood.

![Realtime-Venus Workflow](https://mmbiz.qpic.cn/mmbiz_jpg/A6fTew8FFGFoVt1hKI5TC1o0PPJMagbVhPvYicAnDwJP8WxUzsmKV3G99clAJLFyDCyTcF7YzqMjNA1ojVHt1HbzGNIxDdLIbsQQicr5NJNv8/300?wxtype=jpeg&wxfrom=0 "Realtime-Venus Workflow")

---

### 3. Claude Opus 5.5 and GPT-6 Luna Are Betting on Different Tech Paths

**Both are hunting for a new breakthrough.** Per 36Kr's analysis, [Claude Opus 5.5 and GPT-6 Luna are betting on different technical routes](https://www.36kr.com/p/3998565950330503) — the former borrows from Hunyuan's long-context approach, while the latter leans on DeepSeek-style cache optimization. Artificial Analysis data shows Opus 5.5 pumping out an average of **119,000 tokens** per question at its max setting. Both new models are chasing lower compute costs and better performance, just via different roads. 🚀

![Opus 5.5 Output Token Stats](https://img.36krcdn.com/hsossms/20260925/v2_1ac30d50fe9c40b5bfe1f04db0d3f7ee@6119835_oswg363752oswg1080oswg669_img_000?x-oss-process=image/format,jpg/interlace,1 "Opus 5.5 Output Token Stats")

---

### 4. Tencent's QClaw AI Assistant Is Shutting Down

**Another big-tech AI product bites the dust.** According to 36Kr, [QClaw will stop service at midnight on December 24, 2026](https://www.36kr.com/p/3997508606972040), and users can download backups until **March 24, 2027**. The official word is it's shutting down due to business restructuring and resource consolidation, with WorkBuddy recommended as the replacement. If you're currently on **QClaw**, today's a good day to start backing up your data and checking out alternatives.

![QClaw Shutdown Announcement](https://img.36krcdn.com/hsossms/20260924/v2_1696fbe2c6ed47b986a9b75cea40a0d2@000000_oswg12214oswg422oswg47_img_000?x-oss-process=image/format,jpg/interlace,1 "QClaw Shutdown Announcement")

---

### 5. Domestic Large Models Hit a Compute and Inference Crunch

**Old problems fading, new ones haven't fully grown in yet.** A Jike user's take: [domestic large models are going through an awkward phase](https://m.okjike.com/originalPosts/6ab66bd6756bbb66589f6d37). Alibaba mentioned at the Yunqi Conference that future models could scale up to **5T to 10T** parameters, and Kimi and GLM are both still scaling too. But training card supply just can't keep pace with model growth, and inference resources are becoming a real bottleneck. Teams planning model training need to re-evaluate compute resources and inference costs today. 💭

![Domestic Model Compute Bottleneck Analysis](https://cdnv2.ruguoapp.com/Fq9O5uTOmVCnqsRBNrzvS5a0DBHqv3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient "Domestic Model Compute Bottleneck Analysis")

---

### 6. Meta Is Betting on Wearables as the Next AI Gateway

**Zuckerberg's real target isn't the phone.** A Jike user's analysis: [Meta is betting on wearables as the next-gen AI entry point](https://m.okjike.com/originalPosts/6ab5f040756bbb6658924f8e). Silicon Valley's consensus is that phones are just a transitional form, and the real next-gen platform is wearables — glasses, watches, earbuds, rings, you name it. But for hardware to be the entry point, the ecosystem needs enough smart services to back it up. **Meta** missed the OS boat during both the PC and mobile eras, and this time they want to get ahead of the curve.

![Meta Wearables Strategy](https://cdnv2.ruguoapp.com/FsFPDsKcjzt8_TJC6Vi_-NUJODb8v3.jpg "Meta Wearables Strategy")

---

### 7. Together AI Rolls Out a Low-Cost Model Training Tutorial

**Train a Jev-like model for about $17.** Xiangyang Qiaomu's tweet breaks down [Together AI's low-cost model training tutorial](https://x.com/vista8/status/2103180006935724482) — using 8 public datasets from Huggingface, **38,000 data points**, taking **25 minutes** and costing around **$17**. It kinda reads like a platform promo, but honestly, at that price, solo devs can go try training a model from scratch today. 💸

![Together AI Training Tutorial Screenshot](https://pbs.twimg.com/media/HS_-G97aEAA8JLc.jpg "Together AI Training Tutorial Screenshot")

---

### 8. Today AI Pushes Personalized News, Sparks Cost Concerns

**How much does pinpoint-accurate news delivery actually cost?** A Jike user shared thoughts on [Today AI's personalized news push sparking cost concerns](https://m.okjike.com/originalPosts/6ab628ec141b85b2925e0c5a). Users like the concept, but they're worried about high backend costs and the risk of public data getting polluted. Pricing and source reliability are the real hurdles personalized AI news services need to clear right now.

![Today AI Push Notification Example](https://cdnv2.ruguoapp.com/FpECmV3Ysw6UfRb36AlSbS2hpKqMv3.heic "Today AI Push Notification Example")

---

### 9. Google Plans to Launch a TPU-Equipped Satellite Next Week

**AI chips are heading to space to run inference.** Baoyu's tweet covers [Google's plan to launch a TPU-equipped satellite next week](https://x.com/dotey/status/2103283524962795707), set for **October 1st**. The satellite packs **4 TPUs**, with solar panels providing only about **1 kilowatt** of power. The chips can only run for **15 minutes** before needing a cooldown, and the whole thing's designed to last about a year. Google's testing whether AI data centers can move to space, tapping into the fact that low Earth orbit solar generation can hit up to 8x what you'd get on the ground. 🛰️

---

### 10. Claude Subscription Tip: Switch to the US App Store

**Nigeria's region isn't the cheap deal it used to be.** Gorden Sun's tweet suggests [switching Claude subscriptions to the US App Store](https://x.com/Gorden_Sun/status/2103398735946682498) now, since the Nigerian region's price advantage has basically evaporated. He shared screenshots walking through the subscription process, noting that his own account and his friends' accounts are all running smoothly — bans aren't nearly as common as rumored. If you're thinking about subscribing to **Claude**, today's a good day to consider this payment route.

![Time to bring this chart back out, though the Nigerian region isn't cheap anymore — US App Store recommended](https://pbs.twimg.com/media/HFozKcjakAElOJA?format=png&name=orig "Time to bring this chart back out, though the Nigerian region isn't cheap anymore — US App Store recommended")

---
## **⌘ Top Open Source Projects**

### anthropics/claude-plugins-official: Official Plugin Directory

**A curated collection managed by Anthropic.** [anthropics/claude-plugins-official has open-sourced its core code](https://github.com/anthropics/claude-plugins-official), gaining **83** stars today for a total of **36,936**. This is the official Claude Code plugin directory, managed directly by Anthropic. Devs looking to extend Claude's capabilities can browse this repo today for trustworthy plugins.

---

### anthropics/skills: Agent Skills Library

**A public codebase making agent skills reusable.** [anthropics/skills has open-sourced its core code](https://github.com/anthropics/skills), gaining **189** stars today for a total of **178,318**. This is Anthropic's maintained public codebase for agent skills. If you're building agent applications, go check out what skill modules are ready to call directly today.

---

### androoAGI/starnet: Realtime Pixel Art Workstation

**A local-first desktop agent platform.** [androoAGI/starnet has open-sourced its core code](https://github.com/androoAGI/starnet), gaining **93** stars today for a total of **475**. This is a realtime pixel art workstation where actual AI agents do actual work. Comes with its own keys, so you can watch your team operate in real time. If you're into pixel art or want to try local agent collaboration, deploy it today and give it a spin. 🎨

---
## **◉ Social Media Picks**

### Opus 5.5 Comparison Video Shows a Major Intelligence Boost

**A leap that feels almost enlightened.** Xiangyang Qiaomu retweeted [ego's Opus 5.5 comparison promo video showing a significant intelligence upgrade](https://x.com/vista8/status/2103287782890463378). In the video, Claude Opus 5.5's performance gets described as having "achieved enlightenment" — the comparison is brutal. Devs who want to see the capability jump firsthand can check out this demo today.

---

### DeepSeek Harness Official Client Pairs with Open-Source Browser Plugin

**The best open-source browser control plugin out there.** Xiangyang Qiaomu's tweet covers [how DeepSeek Harness, now with an official GUI client, can pair with OpenCLI-MCP](https://x.com/vista8/status/2103167843751829561). This is a brand-new MCP 2.0 architecture browser control plugin, matching the codex plugin experience but with faster speed. If you need to give Harness browser control superpowers, try this combo today. 🌐

## **😄 AI Fun Fact**

### AI Finally Learns to Multitask

You ask AI to look something up, and right as you finish talking you remember one more thing to add — except it's still stuck there going "searching now..." like nothing else exists. That awkward moment might be a thing of the past. Ant Group and Tsinghua's freshly open-sourced **Realtime-Venus** (a **9B model**) uses a **Harness framework** to pull off [async parallel processing of chat and tasks](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247927071&idx=3&sn=ca0c54154bbd2cfa22d37afcf2cf2153&chksm=e9a83e524a37a517bac798385a4d98af4b030f7d0e8adb3653fbfc23164a5dc1585f58f6c41d&scene=0&xtrack=1#rd) — you say your thing, it does its thing, no stepping on each other's toes. Finally, no more waiting around for it to finish the last sentence. 🎉
```