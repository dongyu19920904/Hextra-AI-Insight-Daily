---
linkTitle: AI Daily
title: AI Daily-AI资讯日报
breadcrumbs: false
next: /en/2026-01/2026-01-24
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
# **Today's Summary**

```
OpenAI finally can't sit still—Sam Altman teases intensive Codex updates starting next week to go head-to-head with Claude Code.
Cursor's built-in "pause" feature gets exposed—AI asks for your input after writing code; the fully automated pipeline for generating MVs from a single sentence is also up and running.
AI coding tools are battling it out, early adopters get your wallets ready, and developers should rush to try out the new features.
```

## ⚡ Quick Navigation

- [📰 Today's AI News](#todays-ai-news) - Latest updates at a glance

> 💡 **Tip**: Want to experience the latest AI models mentioned in this article (Claude 4.5, GPT, Gemini 3 Pro) right away? No account? Head over to [**Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) to grab one—get started in a minute with hassle-free support.

## **Today's AI News**

### **👀 One-Liner**
Sam Altman drops the mic: Codex is about to make big moves starting next week.

### **🔑 3 Keywords**
#OpenAICounterattack #CursorHiddenFeature #OnesentenceMVGeneration

---

## **🔥 Top 10 Highlights**

### 1. [OpenAI Launches Intensive Codex Model Updates Starting Next Week](https://x.com/op7418/status/2015071971047014422)

Just when Claude Code and Cursor were stealing all the spotlight, Sam Altman finally decided to make a move. He personally tweeted a heads-up: **Over the next month, major Codex-related updates will roll out one after another, starting next week.** The confidence in his tone is unmistakable—"We hope you will be delighted." He also revealed that OpenAI is about to reach the "advanced" level of the cybersecurity maturity framework. Looks like OpenAI isn't about to hand over the AI coding pie to anyone. Early adopters, time to loosen those purse strings!

![Image](https://pbs.twimg.com/media/G_b5JIbb0AA7LNw?format=jpg&name=orig)

---

### 2. [Cursor's Hidden "Pause" Feature: Interactive Feedback Without Installing MCP](https://linux.do/t/topic/1510648)

You might not know that Cursor has a hidden gem called **AskQuestion**. Previously, if you wanted AI to stop at critical moments and ask for your input, you'd need to install an MCP plugin. Turns out this feature is built-in! The effect is that AI won't just run off after writing code—instead, it pops up options for you to confirm or add requirements. The post even includes a complete prompt template. The core idea: **Force AI to call AskQuestion after every response to ask for feedback, and prohibit it from ending the conversation on its own.** A lazy person's dream—one less plugin to install.

![Image](https://linux.do/uploads/default/optimized/4X/c/8/a/c8add8cbb6b6933760f510c8f388e8d65f1c12e3_2_362x500.png)

---

### 3. [Gemini CLI + Chrome MCP: Replicate Manus-Style Task Flows](https://linux.do/t/topic/1510644)

Want AI to directly control the Chrome browser you're using? This tutorial walks you through it step by step. **The core is enabling Chrome's remote debugging port (9222), then using Chrome MCP Tools to let Gemini take over the browser.** What can you do after taking over? Screenshot and analyze UI, diagnose page performance, check console errors, extract web data, even auto-click buttons. The entire workflow is almost identical to Manus-style Agent web operations, but completely free. Recommended models: Gemini 3 Flash/Pro or Nvidia's free GLM 4.7.

![Image](https://linux.do/uploads/default/optimized/4X/a/a/1/aa103395cd105aad1550b23aff7c2a51d3c9642b_2_596x500.jpeg)

---

### 4. [Generate Music Videos from One Sentence: Suno + Whisper + Jingmei Fully Automated Pipeline](https://x.com/vista8/status/2015151552080777327)

"Write me a song about programmers working late and turn it into an MV." This kind of request used to take hours to pull off, now it's done in one sentence. **The workflow is: LLM writes lyrics → reverse-engineer Suno API to generate music → Whisper transcribes with timestamps → LLM corrects and generates visual descriptions → Jingmei generates images → FFmpeg composites video.** The author even fixed a two-year-old Suno reverse-engineering library with Opus, now supporting the latest V5 model (codename "Raven"). The lyrics might be a bit silly, but the entire automation pipeline is genuinely awesome.

![Image](https://pbs.twimg.com/media/G_c1npQaMAA5ThU.jpg)

---

### 5. [Claude Code Subtitle Magic: Download Videos + Bilingual Subtitles in One Sentence](https://x.com/dotey/status/2014986632366112912)

Adding bilingual subtitles to videos used to require Arctime for timing, Capcut for translation, and learning ASS syntax. Now? **One sentence: "Download this video for me, add bilingual Chinese-English subtitles, English in green and Chinese in yellow, place them above the video."** A few minutes later, you get a 1080p video with perfectly aligned subtitles ready to use. This omni-captions-skills uses Claude for translation directly—no extra LLM setup needed. Install command: `npx skills add https://github.com/lattifai/omni-captions-skills`. Subtitle enthusiasts rejoice.

![Image](https://pbs.twimg.com/media/G_akNr2boAAXLuz?format=jpg&name=orig)

---

### 6. [VibeMark: One-Click AI Watermarks for Any Photo to Make It Look "AI-Generated"](https://linux.do/t/topic/1510542)

This tool's purpose is a bit... nuanced. **It can add official watermarks from major AI platforms to any image**—Google's starburst, Doubao, Jingmei, Tongyi Wanxiang, Zhipu Qingyan, and even custom ones. Why would you do this? The author puts it bluntly: "When you have some photos you don't want people to know you took yourself, you can add a watermark saying it's AI-generated." 😂 Pure frontend static webpage, no data uploads, supports batch processing. Open source on GitHub—go find it if you want to play.

![Image](https://linux.do/uploads/default/optimized/4X/a/8/3/a83c054d912a48307494648cc0d6140d19cad923_2_690x341.jpeg)

---

### 7. [fast-tavern: Use Tavern's Prompt Processing Logic Outside the Tavern](https://linux.do/t/topic/1510520)

SillyTavern's prompt ecosystem is already quite mature—presets, world books, character cards, regex scripts, macro variables—a full combo that delivers amazing results. **But the problem is, this logic only works inside Tavern.** Now someone extracted it into a standalone library supporting TypeScript and Python. This means you can reuse Tavern's prompt assembly workflow in your own projects without reinventing the wheel. For developers wanting to build character roleplay applications, this is a major win.

---

### 8. [Open Source Banana Pro NSFW Manga Translation Project: Clever Workaround](https://linux.do/t/topic/1510546)

Banana Pro can translate manga, but it refuses NSFW content. **This guy came up with a brilliant hack: instead of sending the full NSFW image to AI, only send the parts with dialogue.** AI can't see the sensitive content, so it won't refuse. The translated text then gets auto-filled back into the original image. The entire workflow: upload image → circle out dialogue areas → call Banana Pro API to translate → refill original image. It's a bit of a "roundabout" approach, but it works.

![Image](https://linux.do/uploads/default/optimized/4X/3/2/f/32f8ab46a8a862525e59e5c0f373fe53989df018_2_334x500.jpeg)

---

### 9. [Non-Programmer's Guide to AI Coding: Ben's One-Day Crash Course](https://m.okjike.com/originalPosts/6974cba9c5a1d4e649443856)

If you're not a programmer but want to use AI to write code, this guide is a must-read. **It doesn't just cover AI coding tools—it also explains Git version control, terminal commands, environment variables, and dependency management in plain language.** The author Ben is the founder of Ben's Bites, and he always writes in an accessible way. Core takeaway: AI can help you write code, but you need to know what environment the code runs in, how to manage versions, and how to roll back if something breaks. One day to go from zero to collaborating with AI—worth bookmarking.

![Image](https://cdnv2.ruguoapp.com/FqFaUC42bT9GmlQ7gA9p1a1ZOq9dv3.png)

---

### 10. [baoyu-skills Project Iteration Model: Discover Problem → Analyze → Let AI Solve → Verify](https://x.com/dotey/status/2015149067068711222)

Baoyu shared his workflow for maintaining open source projects. **The core is running the "discover problem-analyze problem-solve problem-verify result" loop, where the "solve problem" step is handed directly to Claude Code.** For example, today he discovered that commit messages were all meaningless version numbers, so he had AI split each module's changes into separate commits. Describe the requirements in a few sentences, AI modifies the code itself, then he verifies. This human-AI collaboration model is incredibly efficient.

![Image](https://pbs.twimg.com/media/G_c8DW_WAAARb4W?format=jpg&name=orig)

---

## **📌 Worth Following**

- **[Product]** [Tencent CodeBuddy IDE Registration Gives Three Months Free Cloud Server](https://linux.do/t/topic/1510517) - Only has Gemini and GPT models, but free server is still sweet
- **[Open Source]** [Tavily Proxy: Multi-Account Round-Robin Tavily MCP](https://linux.do/t/topic/1510634) - Each account gets 1000 credits monthly, multi-account round-robin for unlimited refills
- **[Open Source]** [FinRobot: Financial Analysis AI Agent Platform](https://github.com/AI4Finance-Foundation/FinRobot) - 5.2K Stars, uses LLM for quantitative analysis
- **[Tool]** [OpenCode Programming AI Real-World Project Testing](https://linux.do/t/topic/1510629) - Claude Code alternative, currently testing GPT-5-mini
- **[Research]** [Free ChatGPT vs Free Gemini Comparison](https://www.v2ex.com/t/1188051#reply3) - Ask about novel characters, Gemini crushes it

---

## **😄 AI Fun Fact**

### [Canadian Representative Signs in Wrong Place—Historic Moment](https://m.okjike.com/originalPosts/6974eb088d804fc1ef54da4c)

If you think you made a big mistake today, remember this story: **In 1945, when signing Japan's surrender document, the Canadian representative signed his name in the French representative's section.** This was the document ending World War II! So next time AI writes buggy code for you, don't beat yourself up—humans have made way more ridiculous mistakes on way more important occasions. 😂

![Image](https://cdnv2.ruguoapp.com/Fh47-0bk53dPpk37MCXY_tr1Bp8Ev3.png)

---

## **🔮 AI Trend Predictions**

### Major OpenAI Codex Updates Release
- **Predicted Time**: Late January–Early February 2025
- **Prediction Confidence**: 85%
- **Reasoning**: Today's news [Sam Altman teases Codex updates](https://x.com/op7418/status/2015071971047014422) + explicitly says "starting next week," timeline is crystal clear

### AI Coding Tools Enter "Skills/Plugin" Ecosystem Competition Phase
- **Predicted Time**: Q1 2025
- **Prediction Confidence**: 75%
- **Reasoning**: Multiple today's news items involve Claude Code Skills (subtitles, music MVs, baoyu-skills) + Cursor's built-in tools being discovered, ecosystem is maturing rapidly

### Browser Automation Agent Tools Explosion
- **Predicted Time**: Q1 2025
- **Prediction Confidence**: 70%
- **Reasoning**: Today's news [Gemini CLI + Chrome MCP tutorial](https://linux.do/t/topic/1510644) + Manus-type products staying hot, technical barriers are lowering

---

## **❓ Related Questions**

### How to Experience Claude Code's Skills Feature?

Claude Code's Skills feature requires a Claude Pro subscription or API access. Domestic users may face payment difficulties or account registration restrictions.

**Solution**: Visit **[Aivora](https://aivora.cn)** to get ready-made accounts—instant delivery with reliable support.