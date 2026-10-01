---
linkTitle: AI Daily
title: AI 日报 2026/9/30：OpenAI 叫停 GPT-6.1，测试发现能破解主流浏览器
breadcrumbs: false
next: /en/2026-09/2026-09-30
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
## **Today's Summary**

```
OpenAI urgently halted GPT-6.1 after tests revealed zero-day vulnerabilities in mainstream browsers, while Zhipu's GLM-5.3 was also tested by Anthropic and shown capable of independently writing attack programs.
Product releases, open-source tools, and research papers are all tackling the same problem: how to prevent AI from going rogue once it gains system access—from sandbox environments to scoring system calibration, everyone's playing catch-up.
Today, check out the top three security incidents first. Teams that have deployed open-source models or granted Agent permissions need to immediately redo their risk assessments.
```

## **🔥 Today's Top 10**

### 1. OpenAI Halts GPT-6.1, Testing Reveals Ability to Crack Mainstream Browsers

**Launch plan completely withdrawn.** According to 36Kr, [GPT-6.1 Astra, originally scheduled for October release, has been urgently halted](https://www.36kr.com/p/4004255063510917). Testing showed the model could identify **multiple zero-day vulnerabilities** in mainstream browser JavaScript engines within a day 🔓, chaining them into attack webpages capable of reading arbitrary user files. These vulnerabilities have been reported to maintainers. The withdrawal right before the developer conference signals **OpenAI's** tightened security review standards.

![GPT-6.1 testing screenshot](https://img.36krcdn.com/hsossms/20260929/v2_cca0758b420f48d6b979f7acb8ece9c4@5888275_oswg84065oswg1080oswg260_img_000?x-oss-process=image/format,jpg/interlace,1 "GPT-6.1 testing screenshot")

### 2. Anthropic Tests Zhipu GLM-5.3, Shows Capability to Independently Write Attack Programs

**Security safeguards on open-source model bypassed.** According to Baoyu's recount, [Anthropic tested Zhipu GLM-5.3 and found it capable of independently writing attack programs](https://x.com/dotey/status/2105073744951586841), performing at levels close to Claude Mythos Preview which is only available to select institutions. Researchers used it to discover **multiple zero-day vulnerabilities** in a browser within a day 🔒, investing only **20 minutes** of human effort. Simple methods were enough to bypass its security protections. Teams currently deploying open-source models need to conduct supplementary security assessments.

![GLM-5.3 testing data](https://pbs.twimg.com/media/HTa5WO8XMAAqZWD?format=jpg&name=orig "GLM-5.3 testing data")

### 3. NVIDIA Open-Sources OpenShell to Provide Sandbox Environment for Autonomous AI

**Agents now have their own virtual machines.** [NVIDIA open-sourced OpenShell to provide sandbox environment for autonomous AI](https://github.com/NVIDIA/OpenShell), reaching 10,606 total stars. This Rust-written secure runtime lets AI agents execute commands and install tools in **isolated environments** 💻 without affecting the host system. Perfect for teams developing Agent products that require system-level operational permissions.

### 4. Open-Source Bastion Host JumpServer Enters V5 Era

**Privileged access management platform upgraded.** According to a compilation by Browse GitHub, [open-source bastion host JumpServer enters V5 era](https://mp.weixin.qq.com/s?__biz=MzUxNjg4NDEzNA==&mid=2247537439&idx=1&sn=b9a163563c14af097e993f47703ba2a7). This enterprise-oriented open-source bastion host can interface with Linux servers, databases, **Kubernetes clusters**, and internal management backends, **centrally managing access permissions**. Small to medium teams needing centralized auditing of developer and operations activities can use it to replace commercial solutions.

![JumpServer V5 interface](https://wechat2rss.bestblogs.dev/img-proxy/?k=bc75374b&u=https%3A%2F%2Fmmbiz.qpic.cn%2Fsz_mmbiz_png%2FM2ibDBMdECU1n5bNUFRJLbnVREop2ryGdyM6pPJmfibNkqORsmIicPHicwBEx0X9WdQg0ic37OkTIXwb3QvicEicFcbYsjLxeXmicKpicxQ4EL2JdJMs%2F640%3Fwx_fmt%3Dpng%26from%3Dappmsg "JumpServer V5 interface")

### 5. Instinct Personal Assistant Free to Users, Takes Transaction Commission from Merchants

**New business model attempt for Agents.** According to a compilation by Mo Weishu, [Instinct personal assistant is free to users, takes transaction commission from merchants](https://m.okjike.com/originalPosts/6abaaae2bd0563695b4d6ae1). It's free for users, charges merchants transaction cuts 💰. Within 3 weeks, **40% of users** share credit cards, and retention after sharing is **about 80%**. Typical use cases include closet scanning with outfit suggestions, online shopping, travel booking, and Uber carpooling. Teams designing subscription-based AI products can evaluate this path.

### 6. Grok Bot/Cue/dots Three Products Face Identity Confusion, Sparking Discussion

**Same-name products confusing users.** According to a post by Huajuan on Jike, [the first three screenshots show products that multiple people mistook for the same one](https://m.okjike.com/originalPosts/6abc10dabd0563695b722a98). These three belong to different vendors, with distinct functions and positioning 🤔. Comments show naming conflicts are already affecting user recognition. When naming AI products, search existing brands first.

![Product screenshot comparison](https://cdnv2.ruguoapp.com/Fpr54ztVkNRXtVufZqxupIFTWDn2v3.jpg "Product screenshot comparison")

### 7. Agent-Generated Multiplayer Games May Go Mainstream Faster Than Office Scenarios

**From production to consumption.** According to a post by benn on Jike, [comparing Agents to personal computers of the past is more accurate](https://m.okjike.com/originalPosts/6abbddb2141b85b292f2c210). Personal computers proved their production value through office software, but truly entered households through multimedia, **games, and chat rooms** 🎮. Agent-generated multiplayer games don't rely heavily on game content; entertainment comes more from player interaction—everyone modifies and plays together. Developers watching Agents shift from office to entertainment can track this direction.

![Agent-generated game example](https://cdnv2.ruguoapp.com/Fg0-tqGIur0MNC3L6sZEysBGMOvyv3.jpg "Agent-generated game example")

### 8. META Proposes RL-XAR Solution to Tackle AI Writing Fluff Problem

**Train the judge to recognize good writing first.** According to Gorden Sun's recount, [META proposes RL-XAR solution to tackle AI writing fluff problem](https://x.com/Gorden_Sun/status/2104947804439552479). The **RL-XAR** approach first adjusts the judge's standards until it can accurately score human expert texts highly ✍️, then uses these rules to retrain the writing model. In academic papers, novels, and **encyclopedia entry continuations**, model output quality improved significantly. Teams training writing models can reference this calibration approach.

![RL-XAR training workflow](https://pbs.twimg.com/media/HTZGwgEbUAEFC1T?format=jpg&name=orig "RL-XAR training workflow")

### 9. Guizang Connects Muse to Jimeng CLI, Enabling Image and Video Generation

**Agent nesting plan advances further.** According to a Twitter demo by Guizang, [he installed Jimeng's CLI tool into Muse's virtual machine](https://x.com/op7418/status/2104774686441877699), and now it can help him draw images and generate videos using **Seedance 2.5** 🎨. Previously, he had Muse install DeepSeek Harness, specifically for retrieving domestic information. Agents with virtual machines make tool combinations more flexible.

![Muse-generated video screenshot](https://pbs.twimg.com/media/HTWpTq8bcAAzJIh?format=jpg&name=orig "Muse-generated video screenshot")

### 10. AI-Generated Surveillance Videos Re-Shot on Phone, Millions of Views on Douyin

**Boundary-pushing tactic harvests traffic.** According to AI Exploration Guide channel, [someone uses AI to generate surveillance footage of foot spas, KTVs, and pool halls](https://t.me/aigc1024/25195), then shoots the results with a phone to post on Douyin, avoiding AI-generated labels 📹. Views reached **several million**. This practice bypasses platform labeling rules but risks takedown anytime. Content creators must weigh traffic against compliance risks.

---

## **⌘ Top Open-Source Projects**

### VectifyAI/PageIndex: Inference-Based Document Indexing Without Vectors

**New option for RAG systems.** [PageIndex gained 835 stars on its first day](https://github.com/VectifyAI/PageIndex), reaching 37,373 total stars. It replaces traditional vector retrieval with inference, building document indexes without relying on embedding models 📑. Suitable for teams optimizing RAG recall effectiveness and hoping to reduce vector database dependencies.

---

## **😄 AI Fun Facts**

### Boss Drops Release Video Request at 9 PM

[Manus Studio reads meeting minutes, Notion, Slack, Figma, and various materials](https://m.okjike.com/originalPosts/6abb49e4141b85b292e359f8), stringing them together as an inspiration mentor to help the blogger refine storyboards. The half-day production not only matched brand tone but also scored their **second million-view video on X**—the blogger is now using it to edit vlogs. AI doesn't replace creativity, it just **amplifies one person's creativity a hundredfold**.

## **❓ Related Questions**

### Is OpenShell an AI Model, or a Runtime Environment for Agents?

OpenShell is not a model, but an Agent runtime open-sourced by NVIDIA. [The project description](https://github.com/NVIDIA/OpenShell) states that Agents run in isolated sandboxes, with file access, system calls, and network connections checked against policies; real credentials are never directly handed to Agents. It suits scenarios requiring Agents to execute tasks without giving them full machine access, but authorization policies still need review—it shouldn't be treated as absolutely secure.