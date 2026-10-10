---
linkTitle: AI Daily
title: AI 日报 2026/10/9：Jev 决策模型返回概率而非文字、Grok Bot 全云端自动生成每日 AI 早报视频
breadcrumbs: false
next: /en/2026-10/2026-10-09
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
## **Today's Digest**

```
Jev, a model from TypeSafe AI, returns probability values instead of text. SynthID opened up AI content detection to the public on the same day, covering 180 billion pieces of content.
From decision models to content provenance, today's updates are all about making AI outputs verifiable and quantifiable — not more talkative.
Check out Jev's probability output design and SynthID's public portal first, then decide whether either fits your product or moderation workflow.
```

## **🔥 Top 10 Highlights of the Day**

### 1. Jev Decision Model Returns Probabilities, Not Text

**A new kind of decision model has entered the chat.** Jev, released by TypeSafe AI, is nothing like your typical LLM — [Jev works fundamentally differently from traditional language models](http://www.ruanyifeng.com/blog/2026/10/weekly-issue-414.html): give it a question, and instead of text, it spits back a **floating-point probability value**. This lets AI directly output decision confidence scores, no text-parsing gymnastics required. Ruan Yifeng flagged it as the biggest AI news of the month in his Weekly Issue #414, writing that it's wild "nobody thought of this useful concept earlier."

![Domestic Driverless Metro VELLINK](https://cdn.beekka.com/blogimg/asset/202610/bg2026100816.webp "Domestic Driverless Metro VELLINK")

---

### 2. Grok Bot Fully Auto-Generates Daily AI Briefing Videos in the Cloud

**Grok Bot handled the entire content-to-video pipeline on its own.** Developer 歸藏 shared an [end-to-end walkthrough on Jike](https://m.okjike.com/originalPosts/6ac77659cfb5d08b3eee87fe) showing the full **automation chain**: content collection, code writing, and video rendering all run on Grok's cloud VM — **nothing runs locally**. He also dropped the prompt publicly; just swap in your username and you're good to go. If you've been wanting to automate a daily briefing, today's a great day to grab it and give it a spin. 🎬

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://videocdnv2.ruguoapp.com/llWb14SHIG1wigzjo2tHMnpZy93j.mp4?sign=14d24a1e57cd9ae23afc321590c154bf&t=6ac83e02"></video>

---

### 3. Codex Plugin Can Now Directly Control a Real iPhone

**Codex just got hands on a real phone for the first time.** Developer 钟二信's [project demo video on Jike](https://m.okjike.com/originalPosts/6ac71952bb8c5d116f72fbdc) shows the **iPhone** Use plugin reliably pulling off **everyday app tasks** — scrolling WeChat Moments, placing Taobao orders, ordering on Meituan, posting to Xiaohongshu, you name it. The project is open-sourced at `github.com/zhongerxin/iPhone-use`. If you want to give Codex a phone to play with, the repo is ready and waiting. 📱

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://videocdnv2.ruguoapp.com/lnDzlIa--DadU1fdf5UklWcQvgKk.mp4?sign=570d11002506a27838211e1c0061572b&t=6ac83e02"></video>

---

### 4. Anthropic's Knowledge Work Plugin Repo Hit the Daily Trending List Today

**Anthropic's open-source knowledge work plugin collection is turning heads.** The [Knowledge Work Plugins for Claude repo](https://github.com/anthropics/knowledge-work-plugins) is a **Claude** Cowork plugin suite built for knowledge workers, and it picked up **392 new stars today**, bringing the total to 27,560. Written in Python, it's worth a look for developers and enterprise teams looking to extend Claude's collaborative capabilities in their workflows. ⭐

---

### 5. Google SynthID Opens AI Content Detection to Everyone

**Anyone can now verify whether a file was AI-generated.** According to the [official Google Gemini tweet](https://x.com/GeminiApp/status/2107884757988282450), SynthID has launched a public portal at synthid.com supporting watermark detection in images, video, and audio. Partners already on board include **OpenAI, NVIDIA, and Kakao**, with Apple joining soon. Google says it has watermarked **180 billion images and videos** plus over 240,000 years' worth of audio to date, processing 1 million verification requests every single day. Content moderators and fact-checkers now have a free, public tool in their arsenal. 🔍

![SynthID Opens Public Verification Portal](https://pbs.twimg.com/media/HUCIgvEXsAAJdHz?format=jpg&name=orig "SynthID Opens Public Verification Portal")

---

### 6. 歸藏Shares a Hacky Trick: Feeding Idle Code Plan Credits to Grok Bot

**Leftover Code plan tokens can be routed into Grok Bot.** 歸藏 laid out the approach in [this post](https://x.com/op7418/status/2108162381000093893): drop a Pi or DeepSeek Harness-style coding agent into the Agent cloud VM, plug in your unused **Code** plan token quota, and Grok Bot can call on those tokens to write code, render videos, and more. This is a **personal experiment with no official support** — quota limits and API stability are entirely on you to evaluate. Proceed with curiosity, not blind trust. 🔧

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2108148339204382720/vid/avc1/1920x1080/CNZHBL04w1QekQow.mp4?tag=29"></video>

---

### 7. Codex Usage Analytics Page Has a Bug — Token Consumption Data Is Gone

**Codex's usage tracking feature is temporarily broken.** A user flagged in [this V2EX thread](https://www.v2ex.com/t/1247115#reply1) that the "Usage & Billing → Analytics" tab in Codex settings has a **bug**: the usage section at the bottom now only shows percentages, with no way to see actual daily token consumption. There's no official acknowledgment or **fix timeline** yet. If you're running batch jobs and need to track your spend, find a workaround for now. 🐛

![Codex Analytics Page Bug Screenshot](https://i.imgur.com/UMCzkyp.png "Codex Analytics Page Bug Screenshot")

---

### 8. Terence Tao Calls for a "Mathematics 2.0" Evaluation Framework

**Terence Tao thinks solving a problem isn't the same as advancing mathematics.** In [four consecutive posts on Mathstodon](https://mathstodon.xyz/@tao/117395269325940185), he argued that real mathematical breakthroughs come bundled with workshops, collaborations, and community digestion — and that's the **real growth of the mathematical community**. Some AI prompt-users only care about marking problems "solved," without being able to explain results or engage with the field. He's pushing for a shift from the problem-solving-first Mathematics 1.0 to a Mathematics 2.0 that values explanation, community-building, and opening new directions — and he's clear he's critiquing narrow outcome-chasing, not banning AI from math research. The thread hit **587 points and 609 comments on HackerNews**. 🧮

---

### 9. Overwatch 1 Private Server Resurrected via AI-Assisted Hacking

**Hackers brought Overwatch 1 back from the dead with a private server.** A [video shared by Baoyu](https://x.com/dotey/status/2108308907307237886) shows hackers managing to run the final version of Overwatch 1 on a private server before the OW2 transition was fully complete. This is a real-world case of AI-assisted reverse engineering — the technical significance here is demonstrating how AI can accelerate private server setups, not that it's officially sanctioned. Worth watching if you care about game preservation and legacy operations. 🎮

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2108267563234820096/vid/avc1/2560x1440/xnvnBwKnukaIi5P8.mp4?tag=29"></video>

---

### 10. New Podcast Cold-Starts to 5,000 Subscribers in One Month

**Human-made content still commands a premium in the age of AI slop.** A [Telegram channel documented this growth story](https://t.me/aigc1024/25551): a brand-new podcast hit **5,000 subscribers in just one month**. The channel author's take: in a world flooded with AI-generated content, authentic human perspectives are actually easier for audiences to recognize and stick with. If you're on the fence about whether putting in the effort to create original content is worth it, here's a real data point to chew on. ✍️

---

## **😄 AI Curiosities**

### A 10,000-Word Story — AI Made 9,000 of the Choices For You

Ever feel like AI-written content is just slightly... off? A writer citing Ted Chiang's analysis in *The New Yorker* nailed down a very mechanical explanation: [a 10,000-word story is essentially the author making 10,000 word-by-word choices](https://m.okjike.com/originalPosts/6ac63d22445b3350d6502205), but when you generate it with a **Prompt**, you maybe made a hundred of those choices — and **AI quietly handled the other nine thousand**. Nine thousand choices made without your judgment — how far is that from what you actually had in mind? When cameras first appeared, everyone said "how is pressing a shutter button art?" — until people realized that those **choices** about light and composition were exactly what separated a recorder from a master.

## **❓ Related Questions**

### Grok subscribers who want the bot to auto-run the daily video workflow — do you have to re-explain everything every single time?

**You don't have to re-explain every time — your workflow just isn't locked in yet.** Today's [cloud VM walkthrough for auto-generating AI briefing videos](https://m.okjike.com/originalPosts/6ac77659cfb5d08b3eee87fe) points to a clean solution: bake the content collection, code writing, and rendering steps into a prompt template so the bot follows a fixed script. Once you get one successful run, subsequent runs are just triggers — no re-briefing needed. Get the workflow stable first before committing long-term. If you've got an existing account that needs renewal, [Aivora AI Account Store's Grok renewal](https://www.aivora.cn/products/chong-zhi-xu-fei-yue-ka-3) is an option — just don't confuse renewing your subscription with building your workflow. Those are two separate things. 🤖