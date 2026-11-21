---
linkTitle: AI Daily
title: 'AI Daily 2026/11/21: Former DeepSeek Core Author Open-Sources Personal Agent,
  Claude Submits Riemann Hypothesis Proof with Mathematician'
breadcrumbs: false
next: /en/2026-11/2026-11-21
description: Anthropic raises $81.3B in a record-breaking IPO, and Claude co-submits
  a Lean formalization of the Riemann Hypothesis with a mathematician. Personal agent
  open-source projects and design philosophy take center stage, but behavioral differences
  between model versions are starting to emerge. Try the Linger open-source agent
  first, then check whether Sol 6.2's refusal to review AI-generated code affects
  your project.
cascade:
  type: docs
---
## **Today's Summary**

```
Anthropic raises $81.3B in a record-breaking IPO, and Claude co-submits a Lean formalization of the Riemann Hypothesis with a mathematician.
Personal agent open-source projects and design philosophy take center stage, but behavioral differences between model versions are starting to emerge.
Try the Linger open-source agent first, then check whether Sol 6.2's refusal to review AI-generated code affects your project.
```

## **🔥 Today's Top 10**

### 1. Former DeepSeek Core Author Open-Sources Personal Agent

**Zhang Bo has open-sourced Linger.** As reported by 36Kr, [a former core author at DeepSeek has open-sourced a personal agent](https://www.36kr.com/p/4077377119245191) designed to run locally on your computer. It directly controls your browser, email, and calendar without requiring you to log back into any services 🖥️. It **supports third-party model integration**, and an RTX 3060 can run a 125B-parameter model at **45.5 tokens/second**. All code is open source.

![Linger project interface](https://img.36krcdn.com/hsossms/20261120/v2_f067d7ec145e4b1094d8d16ca42cc87f@5091053_oswg395636oswg1080oswg1202_img_000?x-oss-process=image/format,jpg/interlace,1 "Linger project interface")

---

### 2. Claude Submits Riemann Hypothesis Proof with Mathematician

**An Anthropic mathematician and Claude have jointly submitted a Lean formalization of the Riemann Hypothesis.** 📐 The community documented this in a [post about Claude's collaboration with the mathematician](https://m.okjike.com/originalPosts/6b007341320fd7e1b5b0776a). Verifiers used a 128-core CPU with 244 GB of RAM, downloaded all 14 compressed archives, and are working through **175,187 Lean source files**. At the time of posting, **26,088 of 26,329 build tasks** had completed with no failures. The final theorem and axiom dependency audit is still ongoing, so conclusions remain unconfirmed.

![Screenshot of Lean proof compilation progress](https://cdnv2.ruguoapp.com/Fgyy9I3g0QvdB7YNX3C215GABrqRv3.jpeg "Riemann Hypothesis Lean proof compilation progress")

---

### 3. Google Genie 4 World Model Opens API Access

**Google Genie 4 is now accessible via API.** 歸藏 relayed in a post that [Google has opened API access to Genie 4](https://x.com/op7418/status/2123522128180027723), making it **Google's first world model available to developers** 🔮. The entry point is ai.studio/**genie**, where developers can build new world-model experiences.

![Genie 4 world model API access interface](https://images.weserv.nl?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FHXhEHPZb0AAp8n_%3Fformat%3Djpg%26name%3Dorig "Genie 4 world model API access interface")

---

### 4. ChatGPT Voice Input Removes 10-Minute Time Limit

**ChatGPT's voice input experience has been significantly upgraded.** AIBase reports that [OpenAI has added a real-time dictation feature](https://www.aibase.com/zh/news/32445) that transcribes words as you speak and lets you edit the text immediately after finishing 🎙️. The previous **10-minute** time limit has been removed and reliability has improved. The feature is rolling out across all platforms and is available to free users.

---

### 5. Manus Product Lead Shares Core Decisions Publicly at Peking University

**Manus's product design thinking has been shared publicly for the first time.** 🧭 Product lead hidecloud taught an AI product innovation course at Peking University this week. A [course recap shared on Jike](https://m.okjike.com/originalPosts/6b00227376ca3521aa4f5a38) frankly covers the **key decisions and design philosophy** behind **Manus** from inception to launch. The audience was a group of AI-native potential founders. Developers building agent products may find it worth reading.

![Manus product lead teaching at Peking University](https://picasso-static.xiaohongshu.com/fe-platform/e6214e4fbfae2cf14d634d4296916e8a5eaefdf4.png "Manus product lead teaching at Peking University")

---

### 6. Anthropic Completes Largest IPO in History

**Anthropic's IPO has set a new fundraising record.** 📊 According to a report compiled by BestBlogs.dev, [the IPO raised $81.3B](https://www.bestblogs.dev/en/article/879c6383ed?utm_source=rss&utm_medium=feed&utm_campaign=resources&entry=rss_article_item), surpassing SpaceX's previous record. The opening valuation reached **$2T**, with the opening price **34% above** the issue price. CEO Dario Amodei said safety comes before speed. The IPO coincided with Google's release of Gemini 4 Neon, drawing discussion about competitive timing and market positioning.

![Anthropic completes largest IPO in history · original article cover](https://www.bestblogs.dev/en/article/879c6383ed/opengraph-image?696e70e5d7b1d782 "Anthropic completes largest IPO in history · original article cover")

---

### 7. Sol 6.2 Refuses to Review AI-Generated Code

**Sol 6.2 declines to review projects whose entire commit history is AI-generated.** 💻 A V2EX user [documented this in a testing thread](https://www.v2ex.com/t/1258613#reply1): when all commits in a project were made by AI, using Codex to invoke Sol 6.2 for a code review results in an outright refusal. **Switching back to Sol 6.1** has no such issue. The reason is currently unknown. Developers building projects entirely with AI should watch out for this kind of **version-to-version behavior difference**.

![Screenshot of Sol 6.2 refusing to review AI-generated code](https://i.imgant.com/v2/glqt1xW.png "Sol 6.2 refusing to review AI-generated code")

---

### 8. Users Report Noticeable Drop in GPT 6.2 Output Quality

**Multiple users say GPT 6.2 has regressed in capability.** 💬 Jike user Ani_无限 [described in a testing post](https://m.okjike.com/originalPosts/6b0002443ce945612ec70423) that tasks previously completable with a single prompt now **fail to meet expectations after ten tries** in version 6.2, with daily usage quotas also depleting faster. This is based on user experience, not an official statement. **OpenAI has not provided an explanation.** Users who rely heavily on ChatGPT for repetitive tasks may want to compare against an older version or adjust their prompts for now.

---

### 9. Criteria for a Good Personal Agent Revisited

**What makes a great agent is understanding the user's overarching goals.** 📏 Product researcher Jeremy argues in a post on [revisiting the criteria for personal agents](https://m.okjike.com/originalPosts/6b004eca136b2761c63e274d) that the key to a good agent is not how long a task it can complete, but whether it can understand **what the user actually wants** across different phases. Current memory mechanisms follow a **recency bias**, optimizing for recent local goals while ignoring overall consistency. Developers designing agent memory systems may find this framing useful.

---

### 10. Prompt Tuning Effectively Fixes Stiff AI Translation

**A specific prompt set solves the problem of AI translations that don't read naturally.** 📝 Jike user 灵有志 [documented a process](https://m.okjike.com/originalPosts/6aff5bec38389f599308655f) of isolating variables and testing multiple model and prompt combinations, eventually **landing on a working set** of instructions for translating long Chinese texts. The test environment was the **Immersive Translate extension with GLM-4-9B-0414**, with before-and-after screenshots included. Users who regularly read long English articles can reference those instructions directly.

![I almost gave up on getting AI to write like a human, until one thing happened](https://cdnv2.ruguoapp.com/FsSEWR6x4oXr1zHE-BN2AyluoqZ8v3.png "I almost gave up on getting AI to write like a human, until one thing happened")

---

## **⚡ Product and Feature Updates**

### Suno Moves into Video Generation, Powered by MiniMax

**US AI music platform Suno has announced a new visual creation tool.** According to [a report by Synced](https://www.qbitai.com/2026/11/511722.html), the tool is called Visuals and **runs on a model from Chinese company MiniMax** 🎬. This is Suno's first step expanding from music generation into multimodal output, and marks MiniMax's video capabilities landing in an overseas product. Users already creating music with Suno can follow the rollout of this feature.

---

## **◉ Social Media Highlights**

### AI PhD Student Detained by ICE, Visa Status Is the Issue

**Princeton AI PhD student Eva was detained due to her visa status.** 📄 In a post reposted by 宝玉, [Wong Carrie described Eva's situation in detail](https://x.com/dotey/status/2123863778114818381): Eva holds dual bachelor's degrees in mathematics and AI from MIT with a GPA of **4.9/5**, is currently a doctoral student in neural networks at Princeton, and has interned at Meta, Microsoft AI, and IBM Research. The issue is that her **F-1 visa has expired** while she is in the green card waiting period, a situation that has led to several similar incidents. The university has sent lawyers and she is expected to be released soon given her clean record.

![Information about the ICE detention incident](https://images.weserv.nl?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FHXlTgiUaAAIIPfY%3Fformat%3Djpg%26name%3Dorig "Information about the AI PhD student ICE detention incident")

---

### Gemini 3.5 Transcribe Voice Editing Capability Added to API

**Google is opening its voice editing technology to developers.** The official Google Gemini account announced that [the voice editing capability from Gemini 3.5 Transcribe is now available in the Gemini API](https://x.com/GeminiApp/status/2123849209204048025), the same technology powering Gboard Rambler and the macOS Gemini app 🗣️. Developers can use it to build applications that support **voice editing, rewriting, and translating** existing text without requiring users to type.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2123826913835708416/vid/avc1/1920x1080/yZ056TQJyS7H6wmc.mp4?tag=29"></video>

---

## **😄 AI Fun**

### The Periodic Table Has Made It to AI Model Naming

**Gemini's** 🧪 next model is called **Helium**, and the one after that will probably be **Silicon** — Google seems to be using the periodic table as a versioning scheme. Omar Sanseviero's [tweet confirming the new model is on its way](https://x.com/osanseviero/status/2123323209135308996) contained just four words: "Shipping will continue." After helium comes lithium, after lithium comes beryllium — you might want to memorize the table now to keep up.

## **❓ Related Questions**

### Does ChatGPT Real-Time Dictation Require a Plus Subscription?

**You don't need Plus for dictation.** The [update report from that day](https://www.aibase.com/zh/news/32445) states that free accounts are included in the phased rollout. If you see a microphone in the input box, try it. [Text transcribed by dictation can be edited before you send it](https://help.openai.com/en/articles/12168547-voice-dictation-faq). If you were already planning to renew your Plus subscription, check your eligibility for the half-price offer first, then see if [爱窝啦·AI账号店's ChatGPT Plus half-price monthly renewal](https://www.aivora.cn/products/chatgpt-plus-half-price-renewal-monthly) works for you.