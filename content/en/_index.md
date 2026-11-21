---
linkTitle: AI Daily
title: 'AI Daily 2026/11/21: Former DeepSeek Core Author Open-Sources Personal Agent,
  Claude Submits Riemann Hypothesis Proof with Mathematician'
breadcrumbs: false
next: /en/2026-11/2026-11-21
description: Anthropic raises $81.3B in a record-breaking IPO, and Claude co-submits
  a Lean formalization of the Riemann Hypothesis with a mathematician. Personal Agent
  open-source projects and design methodologies are appearing in clusters, but behavioral
  differences between model versions are starting to surface. Try the Linger open-source
  Agent first, then verify whether Sol 6.2's refusal to review AI-generated code affects
  your project.
cascade:
  type: docs
---
## **Today's Summary**

```
Anthropic raises $81.3B in a record-breaking IPO, and Claude co-submits a Lean formalization of the Riemann Hypothesis with a mathematician.
Personal Agent open-source projects and design methodologies are appearing in clusters, but behavioral differences between model versions are starting to surface.
Try the Linger open-source Agent first, then verify whether Sol 6.2's refusal to review AI-generated code affects your project.
```

## **🔥 Today's Top 10**

### 1. Former DeepSeek Core Author Open-Sources Personal Agent

**Zhang Bo has open-sourced Linger.** As reported by 36Kr, [a former core DeepSeek author has open-sourced a personal Agent](https://www.36kr.com/p/4077377119245191) designed to run locally on your computer. It directly controls your browser, email, and calendar without requiring you to log back into any services 🖥️. It **supports third-party model integration**, and an RTX 3060 can run a 125B-parameter model at **45.5 tokens/second**. All code is open-source.

![Linger project interface](https://img.36krcdn.com/hsossms/20261120/v2_f067d7ec145e4b1094d8d16ca42cc87f@5091053_oswg395636oswg1080oswg1202_img_000?x-oss-process=image/format,jpg/interlace,1 "Linger project interface")

---

### 2. Claude Submits Riemann Hypothesis Proof with Mathematician

**An Anthropic mathematician and Claude have jointly submitted a Lean formalization of the Riemann Hypothesis.** The community documented this in [a post about Claude submitting a Riemann Hypothesis proof with a mathematician](https://m.okjike.com/originalPosts/6b007341320fd7e1b5b0776a). Verifiers used a 128-core CPU and 244 GB of RAM, downloaded all 14 compressed archives, and are working through **175,187 Lean source files**. At the time of posting, **26,088 of 26,329 build tasks** had completed with no build failures. The final theorem and axiom dependency audit is still ongoing, and the conclusion has not yet been confirmed.

![Screenshot of the Riemann Hypothesis Lean proof compilation progress](https://cdnv2.ruguoapp.com/Fgyy9I3g0QvdB7YNX3C215GABrqRv3.jpeg "Riemann Hypothesis Lean proof compilation progress")

---

### 3. Google Genie 4 World Model Opens API Access

**Google Genie 4 is now accessible via API.** 歸藏 relayed in a post that [Google Genie 4 has opened API access](https://x.com/op7418/status/2123522128180027723), making it Google's **first world model** open to developers 🔮. The entry point is ai.studio/**genie**, where developers can build new world-model experiences.

![Genie 4 world model API access interface](https://images.weserv.nl?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FHXhEHPZb0AAp8n_%3Fformat%3Djpg%26name%3Dorig "Genie 4 world model API access interface")

---

### 4. ChatGPT Voice Input Removes 10-Minute Time Limit

**ChatGPT's voice input experience has been significantly upgraded.** AIBase reports that [OpenAI has added a real-time dictation feature](https://www.aibase.com/zh/news/32445) that transcribes speech as you speak and lets you edit and polish the text immediately after recording 🎙️. The previous **10-minute** time limit has been removed and reliability has improved. The feature is rolling out across all platforms and is available to free users.

---

### 5. Manus Product Lead Shares Core Decisions Publicly at Peking University

**The thinking behind Manus's product design has been shared publicly for the first time.** Product lead hidecloud taught an AI product innovation course at Peking University this week. [A course summary shared on Jike](https://m.okjike.com/originalPosts/6b00227376ca3521aa4f5a38) candidly covers the **key decisions and design philosophy** behind **Manus** from inception to launch. The audience was a group of AI-native potential founders. Developers building Agent-type products may find it worth reading.

![Manus product lead teaching at Peking University](https://picasso-static.xiaohongshu.com/fe-platform/e6214e4fbfae2cf14d634d4296916e8a5eaefdf4.png "Manus product lead teaching at Peking University")

---

### 6. Anthropic Completes Largest IPO in History

**Anthropic's IPO has set a new record.** Coverage compiled by BestBlogs.dev shows [the IPO raised $81.3B](https://www.bestblogs.dev/en/article/879c6383ed?utm_source=rss&utm_medium=feed&utm_campaign=resources&entry=rss_article_item), surpassing SpaceX's previous record. The opening valuation reached **$2T**, with the opening price **34%** above the issue price. CEO Dario Amodei stated that safety comes before speed. The IPO coincided with Google's release of Gemini 4 Neon, drawing discussion about competitive timing and market positioning.

![Anthropic Completes Largest IPO in History · article cover](https://www.bestblogs.dev/en/article/879c6383ed/opengraph-image?696e70e5d7b1d782 "Anthropic Completes Largest IPO in History · article cover")

---

### 7. Sol 6.2 Refuses to Review AI-Generated Code

**Sol 6.2 declines to review projects whose entire commit history was written by AI.** A V2EX user [documented this in a testing thread](https://www.v2ex.com/t/1258613#reply1): when every commit in a project was made by AI, using Codex to invoke Sol 6.2 for a code review results in a flat refusal. **Switching back to Sol 6.1** has no such issue, and the reason is currently unknown. Developers using AI for end-to-end project development should watch for this kind of **version behavior difference**.

![Screenshot of Sol 6.2 refusing to review AI-generated code](https://i.imgant.com/v2/glqt1xW.png "Sol 6.2 refusing to review AI-generated code")

---

### 8. Users Report Noticeable Drop in GPT 6.2 Output Quality

**Multiple users report a regression in GPT 6.2's capabilities.** Jike user Ani_无限 describes in [a testing post](https://m.okjike.com/originalPosts/6b0002443ce945612ec70423) that tasks previously completable in a single prompt now **fail to meet expectations after ten tries** in version 6.2, and the daily usage quota runs out faster. This is user-reported experience, not an official statement. **OpenAI has not provided an explanation.** Users who rely heavily on ChatGPT for repetitive tasks may want to compare against an older version or adjust their prompts in the meantime.

---

### 9. Criteria for Evaluating Personal Agents Revisited

**A good Agent's core capability is understanding the user's overall goals.** Product researcher Jeremy argues in [a post revisiting criteria for evaluating personal Agents](https://m.okjike.com/originalPosts/6b004eca136b2761c63e274d) that what matters is not how long a task an Agent can complete, but whether it can understand **what the user actually wants** across different phases. Current memory mechanisms follow a **recency principle**, optimizing for recent local goals while ignoring global consistency. Developers designing Agent memory systems may find this framing useful.

---

### 10. Prompt Tuning Effectively Fixes Stiff AI Translation Output

**For AI translations that don't read naturally, prompt tuning works.** Jike user 灵有志 documents in [a post on fixing stiff AI translation with prompt optimization](https://m.okjike.com/originalPosts/6aff5bec38389f599308655f) how they tested multiple models and prompt combinations one variable at a time, ultimately **finding a working instruction set** for translating long Chinese texts. The test environment was the **Immersive Translate extension + GLM-4-9B-0414**, with comparison screenshots included. Users who regularly read long English articles can reference those instructions directly.

![I almost gave up getting AI to write like a human, until one thing happened](https://cdnv2.ruguoapp.com/FsSEWR6x4oXr1zHE-BN2AyluoqZ8v3.png "I almost gave up getting AI to write like a human, until one thing happened")

---

## **⚡ Product & Feature Updates**

### Suno Moves into Video Generation, Powered by MiniMax

**US AI music platform Suno has announced a visual creation tool.** According to [a report by Qbitai](https://www.qbitai.com/2026/11/511722.html), the new tool is called Visuals and **its underlying model comes from China's MiniMax** 🎬. This is Suno's first step expanding from music generation into multimodal output, and it marks an overseas deployment of MiniMax's video capabilities. Users already using Suno for music creation can watch for updates on when the feature opens up.

---
## **◉ Social Media Highlights**

### AI PhD Student Detained by ICE; Visa Status Is the Key Issue

**Princeton AI PhD student Eva was detained due to her visa status.** A tweet forwarded by 宝玉 has [Wong Carrie describing Eva's specific situation](https://x.com/dotey/status/2123863778114818381): Eva holds dual bachelor's degrees in mathematics and AI from MIT with a GPA of **4.9/5**, is currently a PhD student in neural networks at Princeton, and has interned at Meta, Microsoft AI, and IBM Research. The issue is that her **F1 visa has expired** and she is in the green card waiting period, a situation that has led to several similar incidents. The university has sent lawyers, and given her clean record she is expected to be released soon.

![Information about the ICE detention incident](https://images.weserv.nl?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FHXlTgiUaAAIIPfY%3Fformat%3Djpg%26name%3Dorig "Information about the AI PhD student ICE detention incident")

---

### Gemini 3.5 Transcribe Voice Editing Capability Added to API

**Google is opening its voice editing technology to developers.** The official Google Gemini account announced that [the voice editing capability from Gemini 3.5 Transcribe is now available in the Gemini API](https://x.com/GeminiApp/status/2123849209204048025), the same technology powering Gboard Rambler and the macOS Gemini App 🗣️. Developers can use it to build applications that support **voice editing, rewriting, and translating** existing text without requiring users to type manually.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2123826913835708416/vid/avc1/1920x1080/yZ056TQJyS7H6wmc.mp4?tag=29"></video>

---

## **😄 AI Fun**

### The Periodic Table Has Made It to AI Model Naming

**Gemini**'s next model is called **Helium**, and the one after that will probably be **Silicon** — Google seems to be using the periodic table as a versioning scheme. Omar Sanseviero left just four words in [the tweet confirming the new model is on the way](https://x.com/osanseviero/status/2123323209135308996): "Shipping will continue." After helium comes lithium, then beryllium — you might as well memorize the table now so you can keep up.

## **❓ Related Questions**

### Does ChatGPT Real-Time Dictation Require a Plus Subscription?

**You don't need Plus for dictation.** [The day's update report](https://www.aibase.com/zh/news/32445) states that free accounts are also included in the rollout. If you see a microphone in the input box, try it; [the transcribed text can be edited before you send it](https://help.openai.com/en/articles/12168547-voice-dictation-faq). If you were already planning to renew Plus, check the half-price eligibility first, and if you qualify, see [爱窝啦·AI账号店's ChatGPT Plus half-price monthly renewal](https://www.aivora.cn/products/chatgpt-plus-half-price-renewal-monthly).