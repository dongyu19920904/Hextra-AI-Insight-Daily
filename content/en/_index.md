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
## **Today's Summary**

```
Jev, released by TypeSafe AI, returns probability values instead of text. SynthID opened its AI content detection to the public on the same day, covering 180 billion pieces of content.
From decision models to content provenance, today's updates are all about making AI outputs verifiable and quantifiable — not more talkative.
Start with Jev's probability output design and SynthID's public portal, then decide whether either fits your product or moderation workflow.
```

## **🔥 Top 10 Highlights of the Day**

### 1. Jev Decision Model Returns Probabilities, Not Words

**A new kind of decision model has arrived.** [Jev, released by TypeSafe AI, is nothing like a traditional language model](http://www.ruanyifeng.com/blog/2026/10/weekly-issue-414.html): instead of returning text, it returns a **floating-point probability value**. That means AI can directly output decision confidence — no more parsing intent out of natural language. Ruan Yifeng featured it as the biggest AI news of last month in his newsletter issue #414, noting that "it's wild no one thought of this useful concept earlier." 🎯

![Domestic Driverless Metro VELLINK](https://cdn.beekka.com/blogimg/asset/202610/bg2026100816.webp "Domestic Driverless Metro VELLINK")

---

### 2. Grok Bot Fully Auto-Generates Daily AI News Videos in the Cloud

**Grok Bot handled the entire pipeline from content to video, end-to-end.** In a [hands-on post shared on Jike](https://m.okjike.com/originalPosts/6ac77659cfb5d08b3eee87fe), developer 歸藏 walked through the full **automation chain**: content collection, coding, and video rendering all run on Grok's cloud VM — **nothing runs locally**. He also shared the prompt, which you can reuse by swapping in your own username. If you want to automate your morning AI digest, go try it today. 🤖

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://videocdnv2.ruguoapp.com/llWb14SHIG1wigzjo2tHMnpZy93j.mp4?sign=14d24a1e57cd9ae23afc321590c154bf&t=6ac83e02"></video>

---

### 3. Codex Plugin Can Now Directly Control a Real iPhone

**Codex just got phone control superpowers.** 🍎 In a [project demo video posted on Jike](https://m.okjike.com/originalPosts/6ac71952bb8c5d116f72fbdc), developer 钟二信 showed that the **iPhone** Use plugin can reliably handle everyday app tasks — scrolling WeChat Moments, placing Taobao orders, ordering food on Meituan, and posting to Xiaohongshu. The project is open source at `github.com/zhongerxin/iPhone-use`. If you want to give Codex hands-on phone control, head straight to the repo.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://videocdnv2.ruguoapp.com/lnDzlIa--DadU1fdf5UklWcQvgKk.mp4?sign=570d11002506a27838211e1c0061572b&t=6ac83e02"></video>

---

### 4. Anthropic's Knowledge Work Claude Plugins Repo Hits the Daily Trending Chart

**[Anthropic's open-source knowledge work plugin repo hit the daily trending chart](https://github.com/anthropics/knowledge-work-plugins), picking up 392 new stars today** and reaching a total of 27,560. It's a **Claude** Cowork plugin collection aimed at knowledge workers, built in Python — worth checking out if you're looking to extend Claude's collaborative capabilities in your workflow.

---

### 5. Google SynthID Opens AI Content Detection to Everyone

**Anyone can now verify whether a file was AI-generated.** 🔍 According to a [Google Gemini official tweet](https://x.com/GeminiApp/status/2107884757988282450), SynthID has launched a public portal at synthid.com — supporting watermark detection in images, videos, and audio. Partners include **OpenAI, NVIDIA, and Kakao**, with Apple joining soon. Google says it has watermarked **180 billion images and videos** plus over 240,000 years' worth of audio, processing 1 million verification requests per day. Content moderators and fact-checkers now have a solid public tool in their kit.

![SynthID Opens Public Verification Portal](https://pbs.twimg.com/media/HUCIgvEXsAAJdHz?format=jpg&name=orig "SynthID Opens Public Verification Portal")

---

### 6. 歸藏 Shares a Hacker's Trick: Feeding Idle Code Credits to Grok Bot

**Leftover Code plan credits can be routed into Grok Bot.** In [a post sharing this unconventional trick](https://x.com/op7418/status/2108162381000093893), 歸藏 describes the setup: install a coding agent like Pi or DeepSeek Harness inside the Agent cloud VM, then wire in your unused **Code** plan token quota — and Grok Bot can tap those tokens to write code, render videos, and more. This is a **personal experiment with no official support**; quota stability and API reliability are your own call to make. ⚠️

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2108148339204382720/vid/avc1/1920x1080/CNZHBL04w1QekQow.mp4?tag=29"></video>

---

### 7. Codex Usage Analytics Page Is Bugged — Token Consumption Invisible

**Codex's usage stats are temporarily broken.** 🐛 A user flagged in a [V2EX thread](https://www.v2ex.com/t/1247115#reply1) that the "Usage & Billing → Analytics" tab in Codex settings has a **bug**: the usage data at the bottom only shows percentages — there's no way to see actual daily token consumption. No official acknowledgment or **fix timeline** has appeared yet. If you're running batch jobs and need to track spend, find another way to estimate usage for now.

![Codex Analytics Page Bug Screenshot](https://i.imgur.com/UMCzkyp.png "Codex Analytics Page Bug Screenshot")

---

### 8. Terence Tao Calls for a Math 2.0 Evaluation Framework

**Terence Tao thinks solving a problem with AI isn't the same as advancing mathematics.** In [four consecutive posts on Mathstodon](https://mathstodon.xyz/@tao/117395269325940185), he argues that traditional mathematical breakthroughs come bundled with seminars, collaboration, and community digestion — and that's where the **real growth** happens. Some AI prompt users are only interested in marking problems "solved," without being able to explain the result or engage with the field. He advocates shifting from Math 1.0 — "who solves it first" — to a Math 2.0 that values explanation, community-building, and opening new directions. He's clear that he's criticizing narrow outcome-chasing, not banning AI from math research. The post scored **587 points and 609 comments on HackerNews**. 🧮

---

### 9. Overwatch 1 Private Server Resurrected Using AI Hacking Techniques

**AI-assisted reverse engineering brought Overwatch 1 back from the dead.** 🎮 A [video shared by 宝玉](https://x.com/dotey/status/2108308907307237886) shows hackers successfully running the final version of Overwatch 1 as a private server before the OW2 transition was complete. This is a real-world example of AI accelerating reverse engineering — the significance is in demonstrating what's now feasible, not in being an officially sanctioned service. Worth watching for developers interested in game preservation and legacy operations.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2108267563234820096/vid/avc1/2560x1440/xnvnBwKnukaIi5P8.mp4?tag=29"></video>

---

### 10. New Podcast Cold-Starts to 5,000 Subscribers in One Month

**Human-made content still commands a premium in the age of AI slop.** A Telegram channel [documented this growth story](https://t.me/aigc1024/25551): a brand-new podcast hit **5,000 subscribers in a single month**. The channel's author argues that as AI-generated content floods the internet, authentic human perspectives are actually easier for audiences to recognize and stick with. If you're on the fence about whether it's worth grinding out original content, here's a real data point for you. 📈

---

## **😄 AI Fun Stuff**

### A 10,000-Word Story — AI Quietly Made 9,000 of the Choices

Ever feel like AI-written content is *almost* there but missing that certain something? A writer cited an analysis by Ted Chiang published in *The New Yorker* and gave it a beautifully concrete explanation: [writing a 10,000-word story is essentially making 10,000 word-by-word choices](https://m.okjike.com/originalPosts/6ac63d22445b3350d6502205), but when you generate it with a **Prompt**, you might only make a hundred of those choices — and **AI quietly makes the other nine thousand for you**. Nine thousand choices made without your judgment… how far can that land from what you actually wanted? When cameras first appeared, people said "pressing a shutter button isn't art" — until everyone realized that the **choices** about light and composition were exactly what separated a documentarian from a master. 📷

## **❓ Related Questions**

### If You're a Grok Member Running a Daily Video Bot, Do You Have to Re-Explain Everything Each Time?

**You don't have to re-explain every time — the issue is your workflow isn't locked in yet.** Today's [hands-on test of running AI digest videos on a cloud VM](https://m.okjike.com/originalPosts/6ac77659cfb5d08b3eee87fe) points to a solid approach: write content collection, coding, and rendering into a prompt template so the bot follows a fixed script. Once you get a successful run, subsequent runs just need a trigger — no need to re-brief the bot on its role and steps. Get the workflow stable before thinking about long-term use. If you have an existing account that needs renewal, check out [Aivora AI Account Store's Grok renewal](https://www.aivora.cn/products/chong-zhi-xu-fei-yue-ka-3) — just keep in mind that renewing your account and setting up your workflow are two separate things; don't mix up the order. 🔧