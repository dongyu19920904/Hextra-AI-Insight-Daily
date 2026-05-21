---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/5/21
breadcrumbs: false
next: /en/2026-05/2026-05-21
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
# Daily Summary

```
Former Google CEO booed off stage at graduation for hyping AI as students collectively heckle; Gallup data shows American anger toward AI is replacing excitement.
Meanwhile, get-shit-done racked up 63k stars in a single day, and Codex wrote its own script to bypass input method obstacles—developers aren't waiting for evangelists, they're building solutions themselves.
Today's issue is worth opening: the public sentiment shift behind the boos, and the practical tools emerging in this explosive period—two storylines you need to follow.
```

## ⚡ Quick Navigation

- [📰 Today's AI News](#todays-ai-news) - Latest updates at a glance

> 💡 **Tip**: Want to experience the latest AI models mentioned in this article (Claude 4.5, GPT, Gemini 3 Pro) right now? No account? Head to [**Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) and grab one—instant access, hassle-free support.

## **Today's AI News**

### **👀 One-Liner**
Former CEO hyped AI at graduation and got booed; the students in the audience are sharper than the executive on stage.

### **🔑 3 Key Themes**
#AI Anxiety Rising #Developer Self-Help #Tool Explosion Era

---

## **🔥 Top 10 Headlines**

### 1. [American Graduation Ceremonies Erupt in Boos Against AI Evangelists; Former Google CEO Forced to Apologize Mid-Speech](https://x.com/dotey/status/2057183190301679842)

Last weekend, Eric Schmidt stood on stage at the University of Arizona, comparing AI to a "rocket ship ticket" and urging graduates to "build AI agent teams"—the crowd's boos grew louder, forcing him to pause and say "I know you're worried, and that fear is reasonable." But then he pivoted back to the same pitch. The audience wasn't buying it.

He wasn't alone. University of Central Florida, Middle Tennessee State University—the same scene played out on different stages. A Gallup survey last month showed American excitement about AI is cooling while anger is rising. The people on stage pushing young people to embrace AI are the same ones driving this transformation and using AI to cut jobs—students see this contradiction clearly.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2057181900171530240/vid/avc1/1920x1080/sbgqwpSY90iHFWre.mp4?tag=27"></video>

---

### 2. [get-shit-done: GitHub's Hottest Project Today, a Meta-Prompt System Built for Claude Code](https://github.com/gsd-build/get-shit-done)

A project with a refreshingly blunt name suddenly exploded on GitHub today—get-shit-done hit 63,335 stars in a single day, starting from zero.

This is a lightweight meta-prompt, context engineering, and specification-driven development system built by TÂCHES specifically for Claude Code. In plain terms: it systematizes how to talk to Claude so it actually gets things done. Not just throwing a few prompts at it, but a complete context management framework. Claude Code adoption has been accelerating, and this project's timing is perfect—before the toolchain matures, prompt engineering is the productivity lever.

---

### 3. [Open-Source Plugin Unlocks Computer Use and Goal Commands in Codex App, Even Lets You Switch to Top Tab Interface](https://x.com/vista8/status/2057124658927812758)

Logging into Codex via API normally limits your features—but now someone built an open-source plugin that bypasses those restrictions entirely. After installing it, Computer Use works, Goal commands are available, and you can even switch the interface to a Chrome-style top tab layout, plus set sound alerts for task start and completion.

This "official won't give it, community builds it" pattern is becoming standard in AI tools. Codex is already powerful; this plugin essentially adds a customization layer on top, making it much more practical for power users. The open-source link is in the original post's replies.

![Tweet Image](https://pbs.twimg.com/media/HIxeuZFWEAARsIY.jpg)

---

### 4. [Rodin Gen-2.5: Generate 3D Assets with Tens of Millions of Polygons from a Single Image—Game and Film Professionals, Take Note](https://x.com/vista8/status/2057093608747229556)

Back when I was doing 3D virtual humans at ByteDance, one asset required coordinating modelers, riggers, and texture artists—just communication could drive you crazy. Now Rodin Gen-2.5 takes a single image and outputs obj, fbx, glb formats ready to import into 3D software for further editing.

This is reportedly the world's first 3D generation model achieving tens of millions of polygons, using native 3D texture algorithms with noticeably finer material detail than competitors. For game, animation, and film studios, this isn't "might be useful someday"—it's production-ready now, saving real labor and time costs.

![Tweet Image](https://pbs.twimg.com/media/HIxDDBnbIAAjtfF.jpg)

---

### 5. [Agent App Interface Revolution: One Product Ditched the Sidebar Entirely, Switched to Browser-Style Top Tabs](https://x.com/dotey/status/2057088956974449086)

"Sidebars suck"—that was the conclusion one Agent desktop app reached during redesign, so they deleted it and switched to top tabs.

This design direction deserves attention. When switching sidebars, old conversations can be destroyed to free memory; top tabs keep all session states by default, creating more memory pressure. But UX-wise, tabs feel more like browser habits, making switching more intuitive. This is a classic "engineering tradeoff for user experience" decision, and Agent app interaction patterns are still evolving rapidly—whether this direction works is worth watching.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2057072786938458112/vid/avc1/3840x2160/MpBkqGY-8E-GEhP1.mp4?tag=27"></video>

---

### 6. [Codex Fully Automated Chrome Extension Store Submission Form Completion, Even Solved Chinese Input Method Interference on Its Own](https://x.com/vista8/status/2057004535630197135)

Chrome extension store submissions require filling out tons of forms—product descriptions, feature explanations, various copy. Lazy people just got a lifeline. Someone used Codex client plus Chrome's official plugin to let AI fully automate the entire submission process.

Here's the clever part: Codex detected that Chinese input method was interfering with content entry, so it wrote its own Python script to work around it using direct copy-paste instead. Not fast, but it actually completed everything—submission is now under review. This case shows more than just "AI can fill forms"; it shows AI actively problem-solving when it hits obstacles—that's the core of Agent capability.

![Tweet Image](https://pbs.twimg.com/media/HIvyCrSaAAApMV_.jpg)

---

### 7. [Vibe Coding Pro Tip: Have AI Draw ASCII Layout Diagrams First, Then Code—Way Better Interaction Design](https://x.com/vista8/status/2056940452671311888)

Ask AI to write code directly and the interface layout often comes out weird—because AI doesn't have the habit of "thinking it through before acting." Simple fix: have it draw the page layout in ASCII characters first, confirm the structure makes sense, then start coding.

The essence of this technique is separating "design" from "implementation," forcing AI to plan first. ASCII diagrams have zero technical overhead, but they let you see in seconds whether AI understands the layout the way you want it, saving way more time than fixing code after it's written. Vibe Coding users can bookmark this one.

![Tweet Image](https://pbs.twimg.com/media/HIu4bhQa4AELr9z.jpg)

---

### 8. [AI Pushes To-Dos to E-Ink Display, Turns Into Business Card When Powered Off—This Is How E-Ink Hardware Should Actually Be Used](https://m.okjike.com/originalPosts/6a0dcdec7f82528246ab9c53)

Most people buy e-ink displays and don't know what to do with them—too slow, not good for scrolling content, just sits there collecting dust. Someone found the perfect use case: on startup, AI pushes that day's to-dos, calendar, and key info; mounted on screen with magnets; on shutdown, it leverages e-ink's power-off persistence to auto-switch to a business card, scan to add contacts.

The brilliance here is fully embracing e-ink's physical properties instead of forcing it to do things it's bad at. Will be packaged as Skills and opened up later—friends with similar hardware can wait for that.

![image](https://cdnv2.ruguoapp.com/Foin0vM6SoFlq-fxsld5Aou8z0E0v3.jpg)

---

### 9. [ByteDance Scholarship Opens Globally for First Time; Five-Year Tracking of 67 Recipients](https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651034077&idx=1&sn=1813135ad919529d03c987db9aadd77a)

ByteDance's scholarship program is opening globally for the first time this year—a signal worth watching. Over the past five years, the 67 recipients' destinations basically map out where top AI talent is flowing—which labs, companies, and schools, reflecting the entire industry's talent competition landscape.

With AI talent competition at fever pitch, ByteDance taking scholarships global is both a brand move and early talent pipeline positioning. For current students, this pathway deserves serious research.

---

### 10. [Formal Skill: Making LLM Agent Workflows Truly Programmable, Executable, and Accountable](https://arxiv.org/abs/2605.19604)

The biggest problem with LLM Agents now isn't "can they reason" but "can they reliably execute after reasoning." This paper introduces the Formal Skill framework, upgrading Agent skills from natural language descriptions to programmable runtime structures—workflow states, policy execution, error handling all explicitly defined, no more relying on the model to "guess" the next step.

For Agent app developers, this direction directly addresses a real pain point: there's a massive reliability gap between Markdown prompts and function calls. Formal Skill tries to bridge that gap. Academic paper, but real engineering value.

---

## **📌 Worth Watching**

**[Product]** [Doubao Integrates Seedance 2.0 and DeepSeek, Targets Workplace Agent Market](https://mp.weixin.qq.com/s/bqgoeK3PHUNMrYuXs8fJwQ) — Domestic tech giants are all fighting for the workplace segment; Doubao's integration of top domestic models this time—whether paid subscriptions can build user habits is a critical step for the entire AI supply chain.

**[Research]** [Trust3R: Giving 3D Reconstruction Models the Ability to Say "How Uncertain Am I"](https://arxiv.org/abs/2605.19539) — Existing 3D reconstruction model confidence scores are basically guesswork; Trust3R introduces an evidential uncertainty framework letting models clearly state "I'm unsure about this geometry," highly practical for robotics and autonomous driving.

**[Research]** [Pseudocode-Guided VLM Reasoning, New Solution to Robot Decision Hallucination](https://arxiv.org/abs/2605.19663) — Vision-language models on robots fear hallucinations most; this paper uses structured pseudocode to constrain reasoning, preventing robots from "making up" non-existent things, with clear safety improvements.

---

## **😄 AI Fun**

### [Used GPT to Gacha a New Profile Photo, "Actually a Bit Rounder Than This But It Works"](https://m.okjike.com/originalPosts/6a0d267b657481ea4e8784ef)

Someone used GPT to generate a profile photo of themselves, gacha-style image generation, and the result came out "a bit slimmer" than the real person. Their actual quote: "I'm actually a bit rounder than this, but it works."

That's kind of interesting. When AI generates your profile photo, it defaults toward the flattering side—not a bug, kind of a feature. Just before using it in formal settings, you might want to think: what if the other person doesn't recognize you when you meet? Prompt's in the replies if you want to try your own gacha—might end up happier with it than the mirror.

![image](https://cdnv2.ruguoapp.com/FgOaVmZyEmNQ90yLNeUC-9_TJpeXv3.png)

---

## **🔮 AI Trend Predictions**

### Agent Toolchain Standardization Competition Goes Mainstream

- **Prediction Timeline**: Q3 2026
- **Confidence**: 78%
- **Reasoning**: Today's news—[Formal Skill paper](https://arxiv.org/abs/2605.19604) + [get-shit-done hitting 63k stars in one day](https://github.com/gsd-build/get-shit-done) appearing simultaneously signals developer demand for "how do Agents execute reliably" has hit critical mass. Next 3 months will see dense waves of frameworks, standards, and toolchains around Agent workflows, with de facto standard competition emerging.

### AI Tools' "Backlash Sentiment" Will Force Product Repositioning

- **Prediction Timeline**: Q2-Q3 2026
- **Confidence**: 65%
- **Reasoning**: Today's news—[graduation ceremony boos](https://x.com/dotey/status/2057183190301679842) + Gallup survey showing declining American enthusiasm for AI. This signal cascades to product layer: "AI replaces you" narratives get harder to sell, while "AI does the tedious stuff you hate" tools (auto-fill forms, auto-organize docs) gain traction instead.

### 3D Generation Tools Enter Game/Film Production Mainstream

- **Prediction Timeline**: Q3 2026
- **Confidence**: 70%
- **Reasoning**: Today's news—[Rodin Gen-2.5 achieving tens-of-millions polygon 3D generation](https://x.com/vista8/status/2057093608747229556), precision now at "directly import into pro 3D software" level. Historically, every time production tool precision crosses the "good enough" threshold, commercial adoption speed suddenly accelerates. Game and film company procurement cycles run 3-6 months; expect clear landing cases in H2 this year.

### AI Coding Tools Extend from "Writing Code" to "Full Workflow Automation"

- **Prediction Timeline**: Q2 2026
- **Confidence**: 72%
- **Reasoning**: Today's news—[Codex auto-completing entire Chrome extension store submission](https://x.com/vista8/status/2057004535630197135), including writing its own script to bypass obstacles. Shows AI coding tool capability boundaries have expanded from "write code" to "complete an entire dev task." More tools will productize this capability next, extending from code generation through testing, deployment, and store submission—the full chain.

---

## **❓ Related Questions**

### How Do I Access Claude Code?

Claude Code is Anthropic's command-line AI programming tool, currently requiring a Claude Pro or Claude API account. For domestic users, registering an Anthropic account needs an overseas phone number, and payment requires a foreign credit card—high barrier to entry.

**Solution**: Visit **[Aivora](https://aivora.cn)** to get a ready-made account—instant delivery, hassle-free support.