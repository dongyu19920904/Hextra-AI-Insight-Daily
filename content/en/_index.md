---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/10/9
breadcrumbs: false
next: /en/2026-10/2026-10-09
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
## **Today's Summary**

```
Jev, released by TypeSafe AI, returns probability values directly instead of text. SynthID opened up AI content detection to the public the same day, covering 180 billion pieces of content.
From decision models to content provenance, today's updates are all about making AI outputs verifiable and quantifiable — not more talkative.
Start with Jev's probability output design and SynthID's public portal, then decide whether either fits your product or content moderation workflow.
```

## **🔥 Top 10 Today**

### 1. Jev Decision Model Returns Probabilities, Not Text

**A new kind of decision model has landed.** Jev, released by TypeSafe AI, is [fundamentally different from traditional language models](http://www.ruanyifeng.com/blog/2026/10/weekly-issue-414.html): instead of returning text, it returns a **floating-point probability value**. This lets AI output decision confidence directly — no more parsing intent from natural language. Ruan Yifeng featured it in Issue 414 of his weekly newsletter as the biggest AI news of the month, calling it "a surprisingly useful concept nobody thought of before."

![Domestic Driverless Metro VELLINK](https://cdn.beekka.com/blogimg/asset/202610/bg2026100816.webp "Domestic Driverless Metro VELLINK")

---

### 2. Grok Bot Fully Auto-Generates Daily AI Briefing Videos in the Cloud

**Grok Bot handles the entire pipeline from content to video, solo.** Developer 歸藏 shared a [hands-on demo on Jike](https://m.okjike.com/originalPosts/6ac77659cfb5d08b3eee87fe) walking through the full **automation chain**: content collection, code writing, and video rendering all run on Grok's cloud VM — **nothing runs locally**. He also shared the prompt publicly; just swap in your username and you're good to go. Developers looking to automate a daily AI briefing can grab it today. 🚀

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://videocdnv2.ruguoapp.com/llWb14SHIG1wigzjo2tHMnpZy93j.mp4?sign=14d24a1e57cd9ae23afc321590c154bf&t=6ac83e02"></video>

---

### 3. Codex Plugin Can Now Directly Control a Real iPhone

**Codex just got phone control superpowers.** Developer Zhong Erxin's [project demo video on Jike](https://m.okjike.com/originalPosts/6ac71952bb8c5d116f72fbdc) shows the **iPhone** Use plugin reliably pulling off everyday tasks — scrolling WeChat Moments, placing Taobao orders, ordering food on Meituan, posting on Xiaohongshu. The project is open-sourced at `github.com/zhongerxin/iPhone-use`. Developers who want to bolt phone control onto Codex can head straight to the repo. 📱

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://videocdnv2.ruguoapp.com/lnDzlIa--DadU1fdf5UklWcQvgKk.mp4?sign=570d11002506a27838211e1c0061572b&t=6ac83e02"></video>

---

### 4. Anthropic's Knowledge Worker Claude Plugin Repo Tops the Daily Chart

**Anthropic's open-source knowledge worker plugin repo caught everyone's eye today.** [The knowledge worker Claude plugin repo that topped today's daily chart](https://github.com/anthropics/knowledge-work-plugins) is a **Claude** Cowork plugin collection aimed at knowledge workers — it picked up **392 new stars today**, bringing the total to 27,560. Written in Python, it's a solid reference for developers and enterprise users looking to extend collaboration capabilities inside Claude workflows. ⭐

---

### 5. Google SynthID Opens AI Content Detection to Everyone

**Anyone can now verify whether a file was AI-generated.** According to the [official Google Gemini tweet](https://x.com/GeminiApp/status/2107884757988282450), SynthID launched a public portal at synthid.com supporting watermark detection across images, video, and audio. Partners include **OpenAI, NVIDIA, and Kakao**, with Apple coming soon. Google says it has watermarked **180 billion images and videos** plus over 240,000 years' worth of audio, processing 1 million verification requests per day. Content moderators and fact-checkers now have a solid public tool in their arsenal. 🔍

![SynthID Opens Public Verification Portal](https://pbs.twimg.com/media/HUCIgvEXsAAJdHz?format=jpg&name=orig "SynthID Opens Public Verification Portal")

---

### 6. 歸藏 Shares a Hacky Way to Feed Idle Code Credits to Grok Bot

**Leftover Code plan tokens can be routed into Grok Bot.** 歸藏 described the setup in [this post about using idle Code credits to power Grok](https://x.com/op7418/status/2108162381000093893): install a programming agent like Pi or DeepSeek Harness on the Agent cloud VM, then feed in your unused **Code** plan token quota — Grok Bot can then tap those tokens for coding, video rendering, and similar tasks. This is a **personal experiment without official support**; quota stability and API reliability are on you to evaluate. 🛠️

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2108148339204382720/vid/avc1/1920x1080/CNZHBL04w1QekQow.mp4?tag=29"></video>

---

### 7. Codex Usage Analytics Page Has a Bug — Token Consumption Invisible

**Codex's usage stats are temporarily broken.** A user flagged it in a [V2EX thread](https://www.v2ex.com/t/1247115#reply1): the "Usage & Billing → Analytics" tab in Codex settings has a **bug** where the usage data at the bottom only shows percentages — daily token consumption is nowhere to be found. No official acknowledgment or **fix timeline** has appeared yet. Developers running batch jobs who need to reconcile usage should use alternative estimation methods for now. 🐛

![Codex Analytics Page Bug Screenshot](https://i.imgur.com/UMCzkyp.png "Codex Analytics Page Bug Screenshot")

---

### 8. Terence Tao Calls for a "Mathematics 2.0" Evaluation Framework

**Terence Tao argues solving a problem with AI isn't the same as advancing mathematics.** In [four consecutive posts on Mathstodon](https://mathstodon.xyz/@tao/117395269325940185), he points out that traditional mathematical breakthroughs come bundled with workshops, collaboration, and follow-on digestion — that's **the math community's real growth**. Some AI prompt users just want to mark problems "solved" without being able to explain the result or engage with the field. He advocates moving from Mathematics 1.0 — "who solved it first" — to Mathematics 2.0, which values explanation, community building, and opening new directions. He clarified he's criticizing narrow outcome-chasing, not banning AI from math research. The post hit **587 points and 609 comments** on HackerNews.

---

### 9. Overwatch 1 Private Server Brought Back to Life by AI Hacking

**AI-assisted reverse engineering resurrected an Overwatch 1 private server.** A [video shared by 宝玉 on Twitter](https://x.com/dotey/status/2108308907307237886) shows hackers spinning up the final version of Overwatch 1 as a private server before the OW2 transition fully completed. This is a real-world case of AI-accelerated reverse engineering — the technical significance is demonstrating how AI speeds up private server setup, not endorsing it as an official service. Developers interested in game preservation and legacy operation should keep an eye on this. 🎮

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2108267563234820096/vid/avc1/2560x1440/xnvnBwKnukaIi5P8.mp4?tag=29"></video>

---

### 10. New Podcast Cold-Starts to 5,000 Subscribers in One Month

**Human-made content still commands a premium in the age of AI slop.** A Telegram channel [documented this growth story](https://t.me/aigc1024/25551): a brand-new podcast hit **5,000 subscribers in one month**. The channel author's take: with AI-generated content flooding every platform, authentic human perspectives are actually easier for listeners to recognize and stick with. For creators wondering whether it's worth grinding through content creation, this is a real data point worth bookmarking. 🎙️

---

## **😄 AI Fun Fact**

### A 10,000-Word Story Involves 10,000 Choices — AI Quietly Made 9,900 of Them

Ever feel like AI-written pieces are just slightly... off? A writer quoted Ted Chiang's analysis from *The New Yorker* and gave a very concrete explanation: [a 10,000-word story is essentially the author making 10,000 word-by-word choices](https://m.okjike.com/originalPosts/6ac63d22445b3350d6502205), but when you generate it with a **Prompt**, you might only make a hundred choices yourself — **AI quietly fills in the other 9,900**. Nine thousand choices made without your judgment... how far can that drift from what you actually had in mind? When cameras first appeared, people scoffed — "pressing a shutter button isn't art." Then everyone realized the **choices** around light and composition were exactly what separated a snapshot from a masterpiece.

## **❓ Related Questions**

### I'm a Grok subscriber. If I set up the bot to auto-run the daily video pipeline, do I need to re-explain everything every single day?

**You don't need to re-explain — your workflow just isn't locked in yet.** Today's [hands-on test of running an AI daily briefing video on a cloud VM](https://m.okjike.com/originalPosts/6ac77659cfb5d08b3eee87fe) points the way: write the content collection, coding, and rendering steps into a prompt template so the bot follows a fixed script. Once you get through the first successful run, future runs only need a trigger — no re-briefing on roles and steps. Get the workflow stable first, then think about long-term use. If you have an account that needs renewal, check out [Aivora AI Account Store's Grok renewal page](https://www.aivora.cn/products/chong-zhi-xu-fei-yue-ka-3) — but don't flip the order: lock in the workflow before worrying about the subscription.