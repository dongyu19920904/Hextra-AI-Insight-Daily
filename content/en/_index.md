---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/9/30
breadcrumbs: false
next: /en/2026-09/2026-09-30
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
## **Today's Summary**

```
OpenAI has urgently halted GPT-6.1 after discovering zero-day vulnerabilities in mainstream browsers during testing. Zhipu's GLM-5.3 was also tested by Anthropic and found capable of independently writing attack programs.
Product launches, open-source tools, and research papers are all addressing the same issue: how to prevent AI from losing control after gaining system permissions. From sandbox environments to scoring system calibration, everyone's playing catch-up.
Today, focus on the top three security incidents first. Teams that have deployed open-source models or granted Agent permissions need to immediately redo their risk assessments.
```

## **🔥 Today's Top 10 Highlights**

### 1. OpenAI Halts GPT-6.1, Testing Reveals It Can Crack Mainstream Browsers

**Launch plans completely withdrawn.** According to 36Kr reports, [GPT-6.1 Astra, originally scheduled for October release, has been urgently halted](https://www.36kr.com/p/4004255063510917). Testing showed the model discovered **multiple zero-day vulnerabilities** 🔓 in mainstream browser JavaScript engines within a day and chained them into attack webpages capable of reading users' arbitrary files. These vulnerabilities have been reported to maintainers. The withdrawal on the eve of the developer conference signals that **OpenAI's** security review standards are tightening.

![GPT-6.1 Test Screenshot](https://img.36krcdn.com/hsossms/20260929/v2_cca0758b420f48d6b979f7acb8ece9c4@5888275_oswg84065oswg1080oswg260_img_000?x-oss-process=image/format,jpg/interlace,1 "GPT-6.1 Test Screenshot")

### 2. Anthropic Tests Show Zhipu GLM-5.3 Can Independently Write Attack Programs

**Open-source model security protections bypassed.** According to Baoyu's retelling, [Anthropic testing shows Zhipu GLM-5.3 can independently write attack programs](https://x.com/dotey/status/2105073744951586841), with capabilities approaching Claude Mythos Preview, which is only accessible to select institutions. Researchers used it to discover **multiple zero-day vulnerabilities** 🔒 in a browser within a day, with only **20 minutes** of human input. Simple methods were enough to bypass its safety protections. Teams deploying open-source models need to conduct an additional security assessment.

![GLM-5.3 Test Data](https://pbs.twimg.com/media/HTa5WO8XMAAqZWD?format=jpg&name=orig "GLM-5.3 Test Data")

### 3. NVIDIA Open-Sources OpenShell, Providing Sandbox Environment for Autonomous AI

**Agents now have independent virtual machines.** [NVIDIA has open-sourced OpenShell to provide sandbox environments for autonomous AI](https://github.com/NVIDIA/OpenShell), reaching 10,606 total stars. This Rust-based secure runtime allows AI agents to execute commands and install tools in **isolated environments** 💻 without affecting the host system. Perfect for teams developing Agent products that require system-level operational permissions.

### 4. Open-Source Bastion Host JumpServer Enters V5 Era

**Privileged access management platform upgraded.** According to "Browse GitHub" compilation, [open-source bastion host JumpServer enters V5 era](https://mp.weixin.qq.com/s?__biz=MzUxNjg4NDEzNA==&mid=2247537439&idx=1&sn=b9a163563c14af097e993f47703ba2a7). This enterprise-oriented open-source bastion host can connect to Linux servers, databases, **Kubernetes clusters**, and internal management backends, **centrally managing access permissions**. Small and medium teams needing centralized auditing of developer and ops operations can use it to replace commercial solutions.

![JumpServer V5 Interface](https://wechat2rss.bestblogs.dev/img-proxy/?k=bc75374b&u=https%3A%2F%2Fmmbiz.qpic.cn%2Fsz_mmbiz_png%2FM2ibDBMdECU1n5bNUFRJLbnVREop2ryGdyM6pPJmfibNkqORsmIicPHicwBEx0X9WdQg0ic37OkTIXwb3QvicEicFcbYsjLxeXmicKpicxQ4EL2JdJMs%2F640%3Fwx_fmt%3Dpng%26from%3Dappmsg "JumpServer V5 Interface")

### 5. Instinct Personal Assistant Free for Users, Charges Merchants Transaction Commissions

**New Agent business model experiment.** According to Mo Weishu's compilation, [Instinct personal assistant is free for users but charges merchants transaction commissions](https://m.okjike.com/originalPosts/6abaaae2bd0563695b4d6ae1). It's free for users and charges merchants transaction cuts 💰. Within 3 weeks, **40% of users** share credit cards, and retention after sharing is about **80%**. Typical use cases include wardrobe scanning and outfit coordination, online shopping, travel booking, and Uber ridesharing. Teams designing subscription-based AI products can evaluate this pathway.

### 6. Grok Bot/Cue/dots: Three Products Cause Identity Confusion

**Same-name products confuse users.** According to Huajuan's Jike post, [the first three screenshots display products that many mistook for the same one](https://m.okjike.com/originalPosts/6abc10dabd0563695b722a98). These three belong to different vendors with distinct functions and positioning 🤔. Comments show naming conflicts have affected user identification. When naming AI products, search for existing brands first.

![Product Screenshot Comparison](https://cdnv2.ruguoapp.com/Fpr54ztVkNRXtVufZqxupIFTWDn2v3.jpg "Product Screenshot Comparison")

### 7. Agent-Generated Multiplayer Games May Become Mainstream Faster Than Office Scenarios

**From production to consumption.** According to Benn's Jike post, [comparing Agents to personal computers of the past is more accurate](https://m.okjike.com/originalPosts/6abbddb2141b85b292f2c210). Personal computers proved their productivity value through office software, but truly entered households through multimedia, **games, and chat rooms** 🎮. Agent-generated multiplayer games don't rely as heavily on game content; entertainment comes more from player interaction—everyone modifies and plays together. Developers watching Agents transition from office to entertainment can focus on this direction.

![Agent-Generated Game Example](https://cdnv2.ruguoapp.com/Fg0-tqGIur0MNC3L6sZEysBGMOvyv3.jpg "Agent-Generated Game Example")

### 8. META Proposes RL-XAR Solution to Address AI Writing Fluff Problem

**Teach the judge to recognize good writing first.** According to Gorden Sun's retelling, [META proposes RL-XAR solution to address AI writing fluff problem](https://x.com/Gorden_Sun/status/2104947804439552479). The **RL-XAR** approach first calibrates the judge's standards until it can accurately rate human expert texts as high-quality ✍️, then retrains the writing model using these rules. In academic papers, novels, and **encyclopedia entry continuations**, model output quality improved significantly. Teams training writing models can reference this calibration approach.

![RL-XAR Training Process](https://pbs.twimg.com/media/HTZGwgEbUAEFC1T?format=jpg&name=orig "RL-XAR Training Process")

### 9. Guizang Connects Jmeng CLI to Muse, Enabling Image and Video Generation

**Agent nesting plan advances further.** According to Guizang's Twitter demonstration, [he installed Jmeng's CLI tool in Muse's virtual machine](https://x.com/op7418/status/2104774686441877699), now it can help him create images and generate videos using **Seedance 2.5** 🎨. Previously, he had **Muse** install DeepSeek Harness specifically for searching domestic information. Agents with virtual machines make tool combinations more flexible.

![Video Screenshot Generated by Muse](https://pbs.twimg.com/media/HTWpTq8bcAAzJIh?format=jpg&name=orig "Video Screenshot Generated by Muse")

### 10. Using AI to Generate Surveillance Videos Then Phone-Recording Them, Getting Millions of Views on Douyin

**Edge-case tactics harvest traffic.** According to AI Exploration Guide channel, [someone uses AI to generate foot bath, KTV, and pool hall surveillance videos](https://t.me/aigc1024/25195), then films the result videos with a phone and posts to Douyin, avoiding the AI-generated label 📹. View counts reach **several million**. This approach circumvents platform labeling rules but risks being banned anytime. Content creators need to weigh traffic against compliance risks.

---

## **⌘ Top Open-Source Projects**

### VectifyAI/PageIndex: Inference-Based Document Indexing Without Vectors

**New choice for RAG systems.** [PageIndex gained 835 Stars on day one](https://github.com/VectifyAI/PageIndex), reaching 37,373 total stars. It uses inference instead of traditional vector retrieval, building document indexes without relying on embedding models 📑. Suitable for teams optimizing RAG recall effectiveness and hoping to reduce vector database dependencies.

---

## **😄 AI Fun Facts**

### Boss Drops Launch Video Request at 9 PM

[Manus Studio reads meeting minutes, Notion, Slack, Figma, and various materials](https://m.okjike.com/originalPosts/6abb49e4141b85b292e359f8), weaving them into an inspiration mentor that helps the blogger refine storyboards. The video completed in half a day not only matches brand tone but also scored the **second million-view achievement** on X—the blogger has already started using it to edit vlogs. AI doesn't replace creativity; it just **amplifies one person's creativity a hundred-fold**.