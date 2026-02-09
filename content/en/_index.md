---
linkTitle: AI Daily
title: AI Daily-AI资讯日报
breadcrumbs: false
next: /en/2026-02/2026-02-08
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
# **Today's Summary**

```
Seedance 2.0 lets ordinary people create motion capture videos by gesturing at their phones—Film Hurricane posted a late-night video calling it "industry-changing."
Chrome caught secretly generating 250GB of junk files over six months; Mac users should check `/private/var/folders/` to see if they're affected.
ByteDance's move is bold, but the relay station fiasco also reminds everyone: check reviews before topping up, don't get scammed.
```

## ⚡ Quick Navigation

- [📰 Today's AI News](#todays-ai-news) - Latest updates at a glance

> 💡 **Tip**: Want to experience the latest AI models mentioned in this article (Claude 4.5, GPT, Gemini 3 Pro) right away? No account? Head over to [**Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) to grab one—one minute setup, hassle-free support.

## **Today's AI News**

### **👀 One-Liner**
Seedance 2.0 just blew up—anyone can become a motion capture actor now, and Film Hurricane posted a late-night video saying it's about to "transform the video industry."

### **🔑 3 Key Hashtags**
#ByteDanceBlowsUp #ChromeMessesUp #RelayStationCrash

---

## **🔥 Top 10 Headlines**

### 1. [Seedance 2.0 Turns Anyone Into a Motion Capture Actor](https://x.com/op7418/status/2020526639835173315)

Used to be, if you wanted decent motion capture footage, you either dropped serious cash on equipment rental or strapped yourself into a full sensor suit like an idiot. Now Seedance 2.0 just flipped the script—gesture at your phone for a few seconds and AI perfectly transfers your movements onto any character. Film Hurricane posted a late-night video calling it "industry-changing" (okay, maybe a bit clickbaity), but after watching the demo, you kinda get the hype. ByteDance just handed professional-grade tools straight to regular people. Developers and content creators are losing their minds, and the "wait and see" crowd just won again.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2020526527449079808/vid/avc1/1080x1440/6af6Yjwqzy3-iz1-.mp4?tag=21"></video>

---

### 2. [Chrome Secretly Dumped 250GB of Garbage on Your Mac](https://linux.do/t/topic/1584944)

Some guy noticed his Mac disk was exploding, asked Codex to dig into it, and discovered Chrome had quietly generated 113 code_sign_clone folders over six months—each one 1.91GB, totaling 250GB. This bug has been hanging around on Chromium for years without a fix. He posted it to Reddit and it blew up in an hour—turns out tons of people got hit too. The path is `/private/var/folders/.../com.google.Chrome.code_sign_clone`. Mac users, go check right now—your hard drive might be Chrome's personal toilet too.

![Image](https://linux.do/uploads/default/optimized/4X/c/2/3/c2336e6af55dee57ed4b5e9f286a9eefce1da6df_2_690x431.png)

---

### 3. [Google Launches langextract: Surgically Extract Data From Messy Text](https://github.com/google/langextract)

Extracting structured info from unstructured text used to mean either writing a ton of regex or manually labeling until you wanted to quit. Google's new open-source langextract uses large models to do the heavy lifting, and it even pinpoints exactly where the data came from. Pair it with interactive visualization and you can see the source at a glance. 24,000+ stars didn't come out of nowhere—if you're doing data cleaning, knowledge graphs, or info extraction, go grab it. Python library, ready to roll.

---

### 4. [Shannon: AI Hacker Finds Your Vulnerabilities With 96% Success Rate](https://github.com/KeygraphHQ/shannon)

Traditional security scanners just say "maybe there's a problem." Shannon's different—it acts like a real hacker and actually tries to break into your system. Only reports when it actually gets in. Hit 96.15% success rate on the XBOW benchmark without prompts and with source code awareness. Handles OAuth, multi-factor auth, all that complex logic. Spits out a professional penetration test report at the end. Security teams' new toy, enterprises' new nightmare.

---

### 5. [OpenAI Official Skills Library: Equip Codex With Skill Packs](https://github.com/openai/skills)

OpenAI finally open-sourced Codex's skill system. Each Skill is a Markdown file plus optional scripts, and Codex can call them explicitly or trigger them implicitly. Currently three tiers: system built-in, officially curated, experimental. Means you can give Codex custom abilities—teach it your framework's best practices or your company's code standards. 6,900+ stars, write once, use everywhere. Lazy person's dream.

---

### 6. [Pydantic's Monty: Safe Python Interpreter Built for AI](https://github.com/pydantic/monty)

Letting AI execute code has always been a security nightmare—what if it runs `rm -rf /`? The Pydantic team wrote Monty, a minimal Python interpreter in Rust, specifically for AI. Secure sandbox, permission isolation, all the good stuff. 2,600+ stars. If you're building AI Agents, consider using it to run code instead of calling system Python directly—way safer.

---

### 7. [superpowers: 47,000+ Star Agent Skill Framework](https://github.com/obra/superpowers)

The project name is bold, but the star count is bolder—47,000+. It's a complete intelligent agent skill framework and software development methodology that helps you modularize and reuse AI Agent capabilities. Docs are pretty clear. If you're building Agent systems from scratch, check it out. Fair warning though: methodology-type projects can have a steep learning curve. Read the README first before diving deep.

---

### 8. [88Code Relay Station Crashes: Users Fight Back, Get Kicked From Groups](https://linux.do/t/topic/1585033)

A user dropped nearly 2,000 yuan on 88Code services, then Max Express got banned four or five times a day—completely unusable at night. Posts in the group for help, gets either brushed off or kicked. The post includes tons of chat screenshots and it's blood-pressure-raising stuff. This is a wake-up call: relay station services are murky waters. Check reviews before topping up, don't get fooled by "express" and "high stability" marketing. Comments are already discussing reporting to the Cyberspace Administration.

![Image](https://linux.do/uploads/default/optimized/4X/2/1/e/21e1729c9c0985811feac1cdf608554952c56ce2_2_375x499.jpeg)

---

### 9. [Jimeng 5.0 Coming Soon: Web Access + Precise Editing + Smart Reasoning](https://linux.do/t/topic/1584839)

ByteDance's Jimeng is dropping 5.0 soon, and leaked official docs show three big features: web access, precise editing, smart reasoning. Demo shows AI drawing "a bear and a donkey playing seesaw, with the donkey heavier than the bear"—and it actually got the physics right. That said, Jimeng 4 also looked strong on paper but had consistency issues in practice, so cautiously optimistic here. Hoping domestic models can actually catch up to the frontier instead of just looking good in PowerPoints.

![Image](https://linux.do/uploads/default/optimized/4X/5/e/f/5ef69b940614359ea184f2cc3c5b162ba38187e0_2_690x382.jpeg)

---

### 10. [Claude + Obsidian: AI Plans Your Week For You](https://x.com/vista8/status/2020426611754221876)

Someone hooked Claude into Obsidian and let AI actively ask questions during weekly reviews—done in 5 minutes. Even wilder: he mentioned a trip next week and Claude started drilling down on details. This "AI asking you questions" interaction pattern is pretty cool, feels more natural than you constantly asking it stuff. If you want to boost productivity, try this angle: don't make AI wait for your questions, let it ask you first.

![Image](https://pbs.twimg.com/media/HAn_CkBaIAAjDJX.jpg)

---

## **📌 Worth Watching**

- **[Product]** [AionUi: Free Local 24/7 Collaborative Work Tool](https://github.com/iOfficeAI/AionUi) - Supports Gemini CLI, Claude Code, and tons of other CLI tools, 13,000+ stars
- **[Open Source]** [dexter: Autonomous Financial Research Agent](https://github.com/virattt/dexter) - For deep financial analysis, 12,000+ stars
- **[Open Source]** [MiniCPM-o: Multimodal Large Model That Runs on Your Phone](https://github.com/OpenBMB/MiniCPM-o) - Gemini 2.5 Flash level, supports vision and voice real-time streaming
- **[Research]** [Microsoft litebox: Secure Library Operating System](https://github.com/microsoft/litebox) - Supports kernel and user mode execution, research-oriented
- **[Other]** [Google Age Verification Self-Service Site](https://linux.do/t/topic/1585349) - Someone built a tool to bypass liveness detection, maintained on a best-effort basis

---

## **😄 AI Fun**

### [AI Can't Replace Humans (Definitely Not)](https://t.me/woshadiao/193801)

Saw a pic today that perfectly explains why AI can't replace humans yet—because human behavior is too chaotic for AI to learn. 😂 Not sure what the original scene was, but the comments are already memeing: "AI: I choose to give up understanding humans."

![Image](https://cdn5.telesco.pe/file/KtG_8-fWGwnMruDZ6HC_7mwXVX5KJwXyRlbiQDq77Xwu6M6w_BuCzxnTRJ0Bl6vQoA-EUyFgR9GrrOGoABPmu_MW3zOAdeOGowHPLz4beeL1HLo12qLcq5idEaEoRk6PZolLElk0uyM1s817ot7c-ygsY79V0tIoYmwsW7sqH-cHRrdSTkJwZ86tujRvHz6hKZp9KOHeh2sRRgkS65BuElbgbLsLNCZf7xQNae5dja_-iVTDdhiz6wQW05XDkfE-0mKOSvu4Zphx1r569JH0OVzOIYg55MHMS_M3TtMuMX4YY82muQuonaYrP-l28rP9WxMJgtMoUy5thj6QKYYj0A.jpg)

---

## **🔮 AI Trend Predictions**

### Seedance Product Line Goes Commercial
- **Predicted Timeline**: Q1 2026 (by March)
- **Confidence**: 75%
- **Reasoning**: Today's Seedance 2.0 demo went viral + endorsement from top creators like Film Hurricane; ByteDance typically accelerates commercialization once products mature

### AI Video Generation Tools Enter "Motion Control" Competition Phase
- **Predicted Timeline**: Q1-Q2 2026
- **Confidence**: 80%
- **Reasoning**: Seedance 2.0's motion capture feature is getting attention, competitors like Kling will follow suit, motion control becomes the next differentiation battleground

### Relay Station/Proxy Service Industry Consolidation Accelerates
- **Predicted Timeline**: Q1 2026
- **Confidence**: 65%
- **Reasoning**: Today's 88Code user dispute + recent service issues across multiple relay stations; eroding user trust will speed up industry consolidation

---

## **❓ Related Questions**

### How do I experience Claude's latest models?

Claude Opus 4.6 and other latest models currently require Claude Pro subscription. Domestic users may face payment difficulties or account registration restrictions.

**Solution**: Visit **[Aivora](https://aivora.cn)** to get ready-made accounts—instant delivery, hassle-free support.