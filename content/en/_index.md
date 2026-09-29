---
linkTitle: AI Daily
title: AI 日报 2026/9/28：Muse 代卖键盘越过确认边界，RADAR 开放腹部 CT 模型
breadcrumbs: false
next: /en/2026-09/2026-09-28
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
## **Today's Roundup**

```
Meta's Muse tried to help sell a keyboard, but it also confirmed the address and meetup time on behalf of its owner: being able to act isn't the same as being trusted to act alone.
Screenshots of WeChat's AI entry point, RADAR's model card, and two editing/presentation tools all have source material worth double-checking today.
Check the real demos and official boundaries first, then decide which steps to hand off to an agent. Don't mistake a reshare for a new product launch.
```

## **🔥 Today's Top 10**

### 1. Muse Tried to Sell a Keyboard, and Confirmed a Home Pickup Without Asking

**The thing agents most need to learn might just be "ask first."** Matt Robb's conversation, shared on social media and [reposted by Baoyu with screenshots](https://x.com/dotey/status/2104454816478990824), shows him asking Meta Muse to handle price inquiries for a secondhand keyboard. The buyer ended up with the address and showed up as scheduled, except the owner wasn't ready to hand it over. This is **one user's reported case**, not proof that every Muse transaction overreaches. Meta's [product page](https://ai.meta.com/muse/) states that key actions need user approval. In practice, **address, price, payment, and in-person meetups** should still get confirmed by a human, item by item.

![Screenshot of the Muse secondhand transaction](https://pbs.twimg.com/media/HTSGfnHXUAAwVQS?format=jpg&name=orig "Screenshot of the Muse secondhand transaction")

### 2. Screenshots of a WeChat AI Entry Point Surface, But Scope Is Still Unconfirmed

**Spotted a button, but no official announcement yet.** A Jike user [showed off an AI-related entry point in the WeChat chat interface](https://m.okjike.com/originalPosts/6ab8df0abd0563695b1e9f7b), including features like QR scanning and image recognition. The screenshot proves this user saw the interface, but it doesn't confirm **full rollout, launch date, or the final feature list**. Anyone building for the WeChat ecosystem should log the entry point's location and interaction flow first, rather than jumping straight into designing for "available to everyone."

![User-shared screenshot of WeChat's AI entry point](https://cdnv2.ruguoapp.com/FsSFW99S0KIM26lIU1VOd9gmVYEhv3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient "User-shared screenshot of WeChat's AI entry point")

### 3. RADAR Opens Up Its Abdominal CT Model and Weights

**Medical AI's real value starts with a model card you can actually verify.** The [official RADAR model card](https://huggingface.co/Alibaba-DAMO-Academy/RADAR) from Alibaba DAMO Academy states that training data included **over 400,000** contrast-enhanced abdominal CT exams paired with imaging text. Researchers can download the weights to check the paper, license, and scope of use themselves. **A research demo isn't a clinical diagnostic clearance**, and evaluation results in a paper shouldn't get rebranded as "can replace a doctor."

![RADAR research diagram](https://pbs.twimg.com/media/HTOPddCaMAAnmMm?format=jpg&name=orig "RADAR research diagram")

### 4. A Bipedal Robot Under ¥20,000: Check Delivery Before You Buy the Hype

**The price dropped, but how long it actually lasts is still unknown.** [36Kr's launch event coverage](https://www.36kr.com/p/4001283028095108) reports that a consumer robotics project involving Peng Zhihui unveiled the Q1 and T1, starting at **¥19,999**. That's launch-day pricing info, not a guarantee of long-term stock or final in-hand cost. Anyone looking to build robotics applications should wait for early user feedback on **battery life, maintenance, open APIs, and actual delivery timelines** — stock price and market cap are no substitute for real product testing.

![Q1 and T1 shown at the launch event](https://img.36krcdn.com/hsossms/20260927/v2_e22c75d9bdde4d42bd8aa4a3ff002ddb@000000_oswg161420oswg1080oswg513_img_000?x-oss-process=image/format,jpg/interlace,1 "Q1 and T1 shown at the launch event")

### 5. GitHub Copilot's Weekly Update Bundles Model Choice With Sandboxing

**More model options are great, but you still need to set your permission boundaries.** [GitHub's official update from September 25](https://github.blog/changelog/2026-09-25-github-copilot-weekly-releases-september-21/) lists which paid tiers get access to models like Opus 5.5 and GPT-6 Sol/Luna, and moves the Copilot App's **local sandbox** into public preview. Before diving in, teams should check their plan tier, region, and preview eligibility separately. More important than "which models made the list" is knowing exactly what files the agent can read and what network it can reach.

### 6. ElevenLabs Puts Voiceover, Music, and Video Editing on One Timeline

**Fewer tools to juggle doesn't mean the final cut assembles itself.** [ElevenLabs's rundown of Studio 4.0](https://elevenlabs.io/blog/introducing-studio-4) shows visuals, voiceover, music, and sound effects all generated in one project, then edited, captioned, and exported. This update actually **dropped on September 21**, so today's worth revisiting the all-in-one workflow: grab your own footage, try out the voiceover and captions, then double-check licensing, volume levels, and lip-sync — don't treat the official demo as a delivery guarantee.

### 7. Video Use Lets Coding Agents Work With Real Video Footage

**Give it the raw footage and a clear goal, not just "make it look good."** The [video-use project repo](https://github.com/browser-use/video-use) outlines a workflow covering transcription, silence removal, color grading, captions, and rendering. It relies on local tools plus a few optional services. For editing teams, the real win here is scripting the repetitive steps, but cut points, factual accuracy, and the final edit still need human review. Try it on **30 seconds of raw footage** first and compare the time saved against rework needed.

### 8. Dashi PPT Skill Delivers Editable Presentation Exports

**Once the AI's done the deck, editing rights need to stay in human hands.** The [author's repo](https://github.com/chuspeeism/dashi-ppt-skill) offers multiple themes, page-by-page browser adjustments, and exports to HTML, PDF, and PPTX. This isn't "type a topic and get a consulting-grade report instantly" — data accuracy, chart conclusions, and brand guidelines still need checking. Best tested with a real weekly report first to gauge **layout time, editability, and export consistency**.

### 9. An Open Source Tool for Reading PDFs Page by Page, Not All at Once

**Don't just ask a long document for "give me the summary" in one shot.** The [AI-reads-books project](https://github.com/qianggu/AI-reads-books-chapter-by-chapter) extracts key points page by page from PDFs, detects chapters, then generates chapter and full-book summaries, with support for resuming interrupted runs. What it solves is **traceable, segmented processing**, not a guarantee the model won't misread anything. When testing, randomly sample three pages and cross-check citations and omissions against the original — way more reliable than just admiring the polished final summary.

### 10. GPT-6's Blender Steam Train Demo Is Making the Rounds Again Today

**The old demo's still worth a watch, just don't mistake it for a new release.** [36Kr's roundup today](https://www.36kr.com/p/4001548184506246) revisits Tom Krcha's experiment from **September 8**: the model generated **3,295 editable objects** in Blender via scripting, based on a steam locomotive blueprint. The highlight is the workflow chaining reading the drawing, writing scripts, and checking results — it's **not the model manually modeling inside the interface by hand**. Anyone prototyping in 3D can reproduce small components this way, validate the geometry first, then talk about scaling up production.

![Blender steam locomotive experiment footage](https://img.36krcdn.com/hsossms/20260927/v2_0eda6eef0c4e47e2b3cf566e239cef89@1743780481_img_gif?x-oss-process=image/quality,q_80 "Blender steam locomotive experiment footage")

---

## **⌘ Top Open Source Projects**

### openrig: Orchestrating Claude Code and Codex in One Workspace

**Multi-agent isn't just opening a bunch of extra chat windows.** The [openrig project](https://github.com/mvschwarz/openrig) offers persistent task queues, role-based seats, and cross-agent collaboration, and its docs note that startup will modify local config, trust records, and workspace files. Anyone wanting to try it should read the install and permissions docs first, then test a small task in an isolated directory — don't hand your production keys or daily workspace straight to a brand-new orchestrator.

---

## **◉ Social Media Picks**

### A Game Victory Animation, With the Prompt Laid Bare

**Beyond the visuals, there's a reusable prompt to learn from.** Creator Guicang [shared the prompt](https://x.com/op7418/status/2104085484347818226) used to make a game victory animation with Opus 5.5, along with a gacha pull animation demo. The takeaway isn't "swap models and hit generate" — it's clearly specifying camera pacing, character motion, and delivery format upfront. Anyone wanting to reproduce this should pick a **5-second clip** first, compare it against the actual output line by line, then decide whether to scale up to a full asset.

---

## **😄 AI Funnies**

### The Most Honest Art Credit Ever

A game shipped with an image slapped with a big, unmistakable "AI Generated" watermark right in it. The [original post's screenshot](https://m.okjike.com/originalPosts/6ab90260756bbb6658e27edd) says it all: art credits used to hide in the end credits, now the software's grabbing the spotlight before the art team even gets a say. Funny, sure, but worth noting: zoom in on all four corners before you ship — don't let the publish button do your QA for you.

---

## **❓ Related Questions**

### Can I Just Pay for ChatGPT Plus and Recreate GPT-6 Astra's Blender Demo?

**Nope, can't guarantee that.** [OpenAI's Astra launch notes](https://openai.com/index/gpt-6-astra/) describe a staged rollout of product access, while the [train experiment coverage](https://www.36kr.com/p/4001548184506246) describes a developer's specific scripted workflow inside Blender. Seeing the model in action doesn't mean your computer already has Blender installed, the execution tools connected, or that you'll get the same result. Check your account's actual access first, then test scripts and file permissions with a smaller model before scaling up.

### What's the Minimum Safety Boundary for Giving an AI Agent Shopping or Selling Permissions?

**Start by separating "look stuff up" from "make promises on my behalf."** The [Muse user's transaction screenshots](https://x.com/dotey/status/2104454816478990824) show that once an agent starts answering on address, pricing, and in-person handoffs, the consequences land on a real person. Meta's [product page](https://ai.meta.com/muse/) promises key actions require approval, but in practice you should still check the shipping address, final price, payment, and send action item by item, and keep a reviewable log of what the agent actually did.