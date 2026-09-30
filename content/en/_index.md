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
OpenAI pulled GPT-6.1 after testing uncovered zero-day vulnerabilities in mainstream browsers, while Anthropic found that Zhipu's GLM-5.3 can independently write exploit code.
Product launches, open-source tools, and research papers are all tackling the same problem: how to prevent AI from going rogue once it gets system access—from sandbox environments to scoring system calibration, everyone's playing catch-up.
Check out today's top three security incidents first. Teams running open-source models or granting Agent permissions need to redo their risk assessments immediately.
```

## **🔥 Top 10 Focus Stories**

### 1. OpenAI Halts GPT-6.1 After Testing Reveals Browser Exploits

**Launch plans completely withdrawn.** According to 36Kr, [GPT-6.1 Astra, originally scheduled for October release, has been emergency-stopped](https://www.36kr.com/p/4004255063510917). Testing showed the model discovered **multiple zero-day vulnerabilities** 🔓 in mainstream browser JavaScript engines within a day and chained them into attack webpages capable of reading arbitrary user files. These vulnerabilities have been reported to maintainers. **OpenAI's** withdrawal right before its developer conference signals tightened security review standards.

![GPT-6.1 Testing Screenshot](https://img.36krcdn.com/hsossms/20260929/v2_cca0758b420f48d6b979f7acb8ece9c4@5888275_oswg84065oswg1080oswg260_img_000?x-oss-process=image/format,jpg/interlace,1 "GPT-6.1 Testing Screenshot")

### 2. Anthropic Tests Show GLM-5.3 Can Independently Write Exploit Code

**Open-source model security bypassed.** According to Baoyu's summary, [Anthropic testing shows Zhipu's GLM-5.3 can independently write exploit code](https://x.com/dotey/status/2105073744951586841), performing close to Claude Mythos Preview, which is only available to select institutions. Researchers used it to find **multiple zero-day vulnerabilities** 🔒 in a browser within one day, with only **20 minutes** of human input. Simple methods bypassed its safety guardrails. Teams deploying open-source models need to conduct additional security assessments.

![GLM-5.3 Testing Data](https://pbs.twimg.com/media/HTa5WO8XMAAqZWD?format=jpg&name=orig "GLM-5.3 Testing Data")

### 3. NVIDIA Open-Sources OpenShell as Sandbox Environment for Autonomous AI

**Agents get dedicated virtual machines.** [NVIDIA open-sourced OpenShell as a sandbox environment for autonomous AI](https://github.com/NVIDIA/OpenShell), reaching 10,606 total stars. This Rust-written secure runtime lets AI agents execute commands and install tools in **isolated environments** 💻 without affecting host systems. Perfect for teams developing Agent products requiring system-level operation permissions.

### 4. Open-Source Bastion Host JumpServer Enters V5 Era

**Privileged access management platform upgraded.** According to a summary by Visiting GitHub, [open-source bastion host JumpServer enters V5 era](https://mp.weixin.qq.com/s?__biz=MzUxNjg4NDEzNA==&mid=2247537439&idx=1&sn=b9a163563c14af097e993f47703ba2a7). This enterprise-oriented open-source bastion host connects Linux servers, databases, **Kubernetes clusters**, and internal management backends for **unified access permission management**. Small to medium teams needing centralized auditing of developer and ops actions can use it to replace commercial solutions.

![JumpServer V5 Interface](https://wechat2rss.bestblogs.dev/img-proxy/?k=bc75374b&u=https%3A%2F%2Fmmbiz.qpic.cn%2Fsz_mmbiz_png%2FM2ibDBMdECU1n5bNUFRJLbnVREop2ryGdyM6pPJmfibNkqORsmIicPHicwBEx0X9WdQg0ic37OkTIXwb3QvicEicFcbYsjLxeXmicKpicxQ4EL2JdJMs%2F640%3Fwx_fmt%3Dpng%26from%3Dappmsg "JumpServer V5 Interface")

### 5. Instinct Personal Assistant Free for Users, Takes Commission from Merchants

**Agent business model experiment.** According to a summary by Mo Weishu, [Instinct personal assistant is free for users and takes transaction commission from merchants](https://m.okjike.com/originalPosts/6abaaae2bd0563695b4d6ae1) 💰. Within 3 weeks, **40% of users** share credit cards, and retention after sharing reaches **around 80%**. Typical use cases include wardrobe scanning with outfit suggestions, online shopping, travel booking, and Uber ride-sharing. Teams designing subscription-based AI products can evaluate this approach.

### 6. Grok Bot/Cue/dots Three Products Cause Identity Confusion

**Same-name products confuse users.** According to a post by Huajuan on Jike, [the first three screenshots show products that many mistook as the same one](https://m.okjike.com/originalPosts/6abc10dabd0563695b722a98). These three belong to different vendors with distinct functions and positioning 🤔. Comments show naming conflicts already affect user recognition. When naming AI products, search existing brands first.

![Product Screenshot Comparison](https://cdnv2.ruguoapp.com/Fpr54ztVkNRXtVufZqxupIFTWDn2v3.jpg "Product Screenshot Comparison")

### 7. Agent-Generated Multiplayer Games May Go Mainstream Faster Than Office Scenarios

**From production to consumption.** According to benn's post on Jike, [comparing Agents to early personal computers is more accurate](https://m.okjike.com/originalPosts/6abbddb2141b85b292f2c210). Personal computers proved productivity value through office software, but truly entered households through multimedia, **games, and chat rooms** 🎮. Agent-generated multiplayer games don't rely as heavily on game content—entertainment comes more from player interaction, where everyone modifies and plays together. Developers watching Agents move from office to entertainment can follow this direction.

![Agent-Generated Game Example](https://cdnv2.ruguoapp.com/Fg0-tqGIur0MNC3L6sZEysBGMOvyv3.jpg "Agent-Generated Game Example")

### 8. META Proposes RL-XAR Solution to Address AI Writing Fluff Problem

**Teaching judges to recognize good writing first.** According to Gorden Sun's summary, [META proposes RL-XAR solution to address AI writing fluff problem](https://x.com/Gorden_Sun/status/2104947804439552479). The **RL-XAR** approach first calibrates judges until they accurately score expert human texts highly ✍️, then retrains writing models using these rules. In academic papers, novels, and **encyclopedia entry continuations**, model output quality improved noticeably. Teams training writing models can reference this calibration approach.

![RL-XAR Training Flow](https://pbs.twimg.com/media/HTZGwgEbUAEFC1T?format=jpg&name=orig "RL-XAR Training Flow")

### 9. Guizang Connects Muse to Jimeng CLI for Image and Video Generation

**Agent nesting plan advances further.** According to Guizang's Twitter demonstration, [he installed Jimeng's CLI tool in Muse's virtual machine](https://x.com/op7418/status/2104774686441877699), which can now help him draw images and generate videos using **Seedance 2.5** 🎨. Previously, he had **Muse** install DeepSeek Harness specifically for querying domestic information. Agents with virtual machines make tool combinations more flexible.

![Muse-Generated Video Screenshot](https://pbs.twimg.com/media/HTWpTq8bcAAzJIh?format=jpg&name=orig "Muse-Generated Video Screenshot")

### 10. AI-Generated Surveillance Videos Re-Filmed on Phones Hit Million Views on Douyin

**Borderline tactics harvest traffic.** According to AI Exploration Guide channel, [someone used AI to generate surveillance videos of foot bath, KTV, and billiard hall scenes](https://t.me/aigc1024/25195), then filmed the result videos with phones and posted to Douyin without AI-generated labels 📹. Views reached **several million**. This approach bypasses platform labeling rules but risks sudden bans. Content creators should weigh traffic against compliance risks.

---

## **⌘ Top Open-Source Projects**

### VectifyAI/PageIndex: Vector-Free Inference-Based Document Indexing

**RAG systems get a new option.** [PageIndex gained 835 Stars on its first day](https://github.com/VectifyAI/PageIndex), reaching 37,373 total stars. It uses inference instead of traditional vector retrieval, indexing documents without embedding models 📑. Suitable for teams optimizing RAG recall effectiveness who want to reduce vector database dependencies.

---

## **😄 AI Fun Facts**

### Boss Drops Video Production Request at 9 PM

[Manus Studio reads meeting minutes, Notion, Slack, Figma, and various materials](https://m.okjike.com/originalPosts/6abb49e4141b85b292e359f8), strings them into an inspiration coach that helps the blogger polish storyboards. The video finished in half a day not only matched brand tone but also scored **their second-ever million views** on X—the blogger now edits vlogs with it. AI doesn't replace creativity, just **amplifies one person's creativity a hundredfold**.