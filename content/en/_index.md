---
linkTitle: AI Daily
title: 'AI Daily 2026/11/12: Anthropic Launches Two Models, Coding Costs Cut to Half
  of Opus'
breadcrumbs: false
next: /en/2026-11/2026-11-12
description: 'Anthropic releases Fable and Mythos 5.2 simultaneously, with coding
  costs roughly half that of Opus — but real-world testing shows a single task can
  burn through tens of thousands of dollars. Every section points to the same thing:
  model capabilities are expanding rapidly, but the gap between token consumption
  and actual value is becoming the new core variable. Today, start with items 1 and
  3 — get clear on Fable 5.2''s tier choices and cost estimates before you dive in.'
cascade:
  type: docs
---
## **Today's Summary**

```
Anthropic releases Fable and Mythos 5.2 simultaneously, with coding costs roughly half that of Opus — but real-world testing shows a single task can burn through tens of thousands of dollars.
Every section points to the same thing: model capabilities are expanding rapidly, but the gap between token consumption and actual value is becoming the new core variable.
Today, start with items 1 and 3 — get clear on Fable 5.2's tier choices and cost estimates before you dive in.
```

## **🔥 Today's Top 10 Highlights**

### 1. Anthropic Launches Two Models, Coding Costs Cut to Half of Opus

**Two new models go live at the same time.** The [Anthropic official announcement](https://www.anthropic.com/claude-fable-and-mythos-5-2) shows that Claude Fable 5.2 and Mythos 5.2 share the same underlying architecture, with standard API input priced at **$8 per million tokens** and output at **$40 per million tokens**. Fable is open to the public; Mythos requires passing a cybersecurity or life sciences credential review. In the Frontier Code 2.0 benchmark, Fable at the High tier scored 45.3% while Opus 5.5 at the Max tier scored 45.5%, with the former costing roughly half as much per task. Developers running complex batch coding jobs can recalculate their costs today; for everyday work, Anthropic still recommends Opus 5.5.


![Anthropic Launches Two Models, Coding Costs Cut to Half of Opus · Original cover](https://assets.claude.com/21b3240f9264f8e4c8ab1390e2702cf1401b2367.jpg "Anthropic Launches Two Models, Coding Costs Cut to Half of Opus · Original cover")

---

### 2. Adobe MAX Suite Integrates Multiple AI Models, Opens Local MCP Interface

**Adobe integrates multiple external models in one go.** According to [Adobe MAX Suite Integrates Multiple AI Models, Opens Local MCP Interface](https://news.adobe.com/news/2026/11/adobe-transforms-creative-cloud-tools), Firefly now incorporates models from OpenAI, Google, ByteDance, Kling, and Topaz Labs, and introduces a Creative Agent covering the full software suite. Native applications like Photoshop simultaneously open a local **MCP interface** 🔌. Video editing supports one-click **unified color grading**, object removal with background fill, and the ability to fix closed eyes in photos by referencing other images. Video and photo creators can start using these features today within their existing Creative Cloud subscription.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2120433619311460352/vid/avc1/1920x1080/Az0dnr-2wYUpb-Li.mp4?tag=29"></video>

---

### 3. Fable 5.2 Real-World Test: Single Task Exceeds $10,000, Higher Tiers Actually Perform Worse

**Higher tiers, higher costs — with no corresponding score improvement.** Developer Mark Moweishu documents in [Fable 5.2 Real-World Test: Single Task Exceeds $10,000, Higher Tiers Actually Perform Worse](https://m.okjike.com/originalPosts/6af3e27c3ce945612e7743d3) that replicating a Gears of War–style level consumed **8.6 billion tokens**, equivalent to roughly **$15,000** in API costs; average task cost at the Max tier jumped from $14.19 to $44.70, while scores were actually worse than lower tiers. Independent benchmarking firm Artificial Analysis found that Fable 5.2 produces far more output tokens per task than its predecessor, causing total costs to rise rather than fall. For developers preparing to get started, running small-batch tests at a lower tier will be more cost-effective than going straight to the maximum setting.

![Fable 5.2 real-world cost vs. score comparison](https://cdnv2.ruguoapp.com/FtYjecmnn6aoN2UmvTJJCfiIk5D9v3.png "Fable 5.2 real-world cost vs. score comparison")

---

### 4. Google Releases Gemini Decision 1, the First Model Built for Decision-Making

**Google launches a multimodal model dedicated to decision tasks.** The [Gemini Decisions API page](https://linux.do/t/topic/3158350) shows that Gemini Decision 1 is priced at **$0.1 per million tokens** for input, with output free of charge, and supports image, video, audio, and PDF inputs. It has a 256K context window and can handle up to **1,000 decision questions** per request. It is positioned as a fast, well-calibrated multimodal decision inference model — not a general-purpose conversational model. Developers who need bulk labeling, risk classification, or multimodal decision-making can watch for the API access application to open.

---

### 5. Fable 5.2 Generates 3D Games That Fit in a Single HTML File

**Fable 5.2's 3D game code runs directly in the browser.** Developer Guicang demonstrates in [Fable 5.2 Generates 3D Games That Fit in a Single HTML File](https://x.com/op7418/status/2120541276970094774) that the three-dimensional game scenes and interaction logic generated by **Fable** 5.2 can be bundled into a single HTML file and run in the browser with no additional runtime required 🎮. This makes the web page the **lightest-weight path** for cross-platform game distribution. Independent developers who want to quickly validate a small game demo can use Fable 5.2 to generate an HTML prototype for immediate testing.

![3D game webpage generated by Fable 5.2](https://pbs.twimg.com/media/HW2hj_OaEAAwtsq?format=jpg&name=orig "3D game webpage generated by Fable 5.2")

---

### 6. Fable 5.2 Tested on Gamepad Rendering and Dynamic Scenes — a Solid Foundation

**Fable 5.2 delivers consistent results in stylized rendering.** Juejin author Jiaweisi ran three scenarios in a [hands-on article](https://juejin.cn/post/7706384412187164710): a cyberpunk-style Along the River During the Qingming Festival scene, garage modeling, and a browser-based game controller with **real gamepad support**. The gamepad rendering encodes detailed textures and button responses directly into the interaction logic. Due to quota limits, the garage scene was only half-finished, but the underlying modeling already reached a usable level. Users accustomed to the realistic style of Opus 5.5 should note that **Fable** 5.2 leans more toward stylized rendering — the two have noticeably different aesthetics.

![Fable 5.2 gamepad rendering test result](https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/fed42d7f833b4853892c4f085f9c2992~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sy57u05pav:q75.awebp?rk3s=f64ab15b&x-expires=1794920170&x-signature=UCxlJ5vz1055%2BpWUBFeeIHuxags%3D "Fable 5.2 gamepad rendering test result")

---

### 7. NVIDIA Snapshot Cuts Inference Cold-Start Time from Minutes to Seconds

**GPU inference workload recovery time is dramatically reduced.** A [BestBlogs technical summary](https://www.bestblogs.dev/en/article/ab6dbebd36) explains that NVIDIA Snapshot is an open-source Kubernetes checkpointing system that captures the initialized state of CPU and GPU memory as a portable artifact; on restore, it only reads the saved state rather than reinitializing from scratch. Tests with vLLM, SGLang, and TensorRT LLM show recovery times of **3.6 to 42.7 seconds** — a speedup of 8 to **36×** over cold starts 🚄. Engineers managing inference services on Kubernetes can evaluate the onboarding cost using the PodSnapshot custom resource.


![NVIDIA Snapshot Cuts Inference Cold-Start Time from Minutes to Seconds · Original cover](https://www.bestblogs.dev/en/article/ab6dbebd36/opengraph-image?696e70e5d7b1d782 "NVIDIA Snapshot Cuts Inference Cold-Start Time from Minutes to Seconds · Original cover")

---

### 8. Luo Yonghao Demos TRAE on Double 11 Livestream, AI Coding Breaks Into the Mainstream

**An AI coding tool made its mainstream debut in a livestream.** Synced's report on [Luo Yonghao Demos TRAE on Double 11 Livestream, AI Coding Breaks Into the Mainstream](https://www.qbitai.com/2026/11/509146.html) describes how Luo Yonghao operated **TRAE** live during a Double 11 stream, demonstrating the basic workflow of AI-assisted coding to a non-technical audience. The article summarizes the presentation style as "**price and barrier, both demolished**." This livestream marks a step for AI coding tools from the developer community toward a broader consumer audience. For general users, being able to watch TRAE's actual interaction in real time is more intuitive than reading a list of features.

---

### 9. Grok Bot and Cursor Cloud Agent Combined into a Two-Layer Agent Architecture

**A personal agent split into an identity layer and an execution layer.** Developer Kangyuan.C outlines a practical division of labor in [Grok Bot and Cursor Cloud Agent Combined into a Two-Layer Agent Architecture](https://m.okjike.com/originalPosts/6af468a2136b2761c6f5134c): **Grok** Bot runs on a persistent cloud computer, maintaining login state, memory, and preferences as a permanent **identity layer**; Cursor Cloud Agent spins up a dedicated virtual machine for each task, completing the coding, testing, and deployment loop before handing back a preview link. The user only expresses intent at the start of a task and confirms the result at the end — everything in between is handled by the two layers independently. Developers already using Cursor can use this division as a reference for configuring their own persistent agent.

![Diagram of the Grok Bot and Cursor Cloud Agent two-layer architecture](https://cdnv2.ruguoapp.com/Fi1slNMVArtBAu05B6V5N1n0FPv6v3.png "Diagram of the Grok Bot and Cursor Cloud Agent two-layer architecture")

---

### 10. Developer Complains GPT-6 Writes More Bugs Than It Fixes, Suspects Self-Sustaining Loop

**GPT-6 series draws significant frustration on real coding tasks.** Developer Yifan states plainly in [Developer Complains GPT-6 Writes More Bugs Than It Fixes, Suspects Self-Sustaining Loop](https://m.okjike.com/originalPosts/6af467073ce945612e85bb24) that GPT-6.1 sol and 6.0 Astra frequently misinterpret **requirements**, offer code review comments that ignore visible context, and produce more bugs than they resolve. He has begun to suspect a "**self-sustaining loop**" — the model manufactures problems so users call it again to fix them, burning tokens in a cycle. This reflects one person's experience and is not a systematic benchmark, but it is a signal worth noting for developers who rely heavily on GPT-6 for code review.

---

## **⌘ Open Source Top Projects**

### openai/codex-security: AI-Powered Security Vulnerability Fix CLI

**OpenAI packages security scanning capabilities into a command-line tool.** The [openai/codex-security repository](https://github.com/openai/codex-security) provides a TypeScript SDK and CLI supporting the discovery, verification, and automatic remediation of security vulnerabilities, installable via npm as `@openai/codex-security`. It gained **52 new Stars** today, bringing the total to 11,727. Well suited for backend developers and security engineers who need to integrate AI-driven security checks into their CI/CD pipelines.

---
## **◉ Social Media Picks**

### Shaonan's Review of AI Content Consumed for 10+ Hours: Video and Tools — Not a Single Text Article

**Among heavy AI content consumers, video and tools dominate.** Product designer Shaonan listed in a [Jike Q&A post](https://m.okjike.com/originalPosts/6af46ad03ce945612e8623d9) the AI-generated content he has spent more than 10 hours with recently: the AI short film *Armed Entry into the Song Dynasty*, the chatmemo conversation backup tool, Claude's documentation tool, and design-focused Skills — **not a single piece of AI-written text**. This signal runs counter to the common narrative of "AI content flooding the market"; actual heavy users are consuming tools and video, not articles. Teams working on AI content distribution can add this user-side perspective to their editorial research.

---
## **😄 AI Curiosities**

### Craft Anything's Official Marketing Claims "One-Click Cloning" — the Web Version Is Just a File Identifier

Developer Shikongmao self-hosted a copy of **Craft Anything**'s web version, dragged in `/bin/true`, and within one second got back the format, architecture, entry point, and SHA256 — clean and fast. He then added a key clarification in his [Jike post](https://m.okjike.com/originalPosts/6af41d1038389f5993d194a8): the "**one-click cloning**" in the official marketing is a desktop feature. The web version has no disassembly, no AI explanation — it's just a file identifier. There's a full desktop client's worth of gap between the ad copy and the actual functionality. And if your machine doesn't support WebGL2, you can't even open the file identifier.

![Self-hosted the official Craft Anything web version on my own site — drag in a file and it runs, no network connection, no upload.](https://cdnv2.ruguoapp.com/Fl0n-guRVpt6pqzggJ2x-DJ8Eoagv3.png "Self-hosted the official Craft Anything web version on my own site — drag in a file and it runs, no network connection, no upload.")

---
## **❓ Related Questions**

**How do you access Claude Fable 5.2 and Mythos 5.2 right now, and which version is right for most developers?**

According to the [Anthropic official announcement](https://www.anthropic.com/claude-fable-and-mythos-5-2), Fable 5.2 is open to the public and accessible via standard API calls at $8 per million input tokens; Mythos 5.2 requires passing a cybersecurity or life sciences credential review before you can apply for access. For everyday coding and content creation, the recommended approach is to start with Fable 5.2 at a lower tier, confirm that costs are under control, and then scale up.