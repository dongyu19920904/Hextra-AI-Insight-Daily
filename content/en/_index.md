---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/5/23
breadcrumbs: false
next: /en/2026-05/2026-05-23
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
# Daily Summary

```
System prompts from 28 AI coding tools leaked in one go—Cursor, Kiro, Devin, and others didn't escape. A GitHub repo hit 138K stars overnight.
DeepSeek announced permanent price cuts to 1/4 of original pricing on the same day—price wars just became the new floor.
Both stories point in one direction: AI tools' moats are eroding fast. Worth a closer look.
```

## ⚡ Quick Navigation

- [📰 Today's AI News](#todays-ai-news) - Latest updates at a glance

> 💡 **Tip**: Want early access to the latest AI models mentioned here (Claude 4.5, GPT, Gemini 3 Pro)? No account? Grab one at [**Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content)—one minute setup, hassle-free support.

## **Today's AI News**

### **👀 One-Liner**
System prompts from major AI coding tools got completely exposed, and a GitHub repo hit 138K stars overnight—the tool you're using just lost its secrets.

### **🔑 3 Keywords**
#SystemPromptsLeaked #DeepSeekPriceCut #AICodingToolsArmsRace

---

## **🔥 Top 10 Headlines**

### 1. [System Prompts from 28 Major AI Coding Tools Exposed—Cursor, Devin, Kiro, and Others Left Defenseless](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools)

Ever wonder what "personality" those AI coding assistants were programmed with? Now you don't have to guess.

A GitHub repo just dumped the system prompts, internal tool logic, and underlying model info from 28 mainstream AI tools—Cursor, Devin, Windsurf, Claude Code, Kiro, Replit, Lovable, Manus, Perplexity, and more. The repo hit 138K stars almost overnight, making it one of the most explosive open-source moments on GitHub this year.

For regular users, this is a rare chance to see these tools' real boundaries and design philosophy. For the companies behind them? Probably the last headline they wanted to see today.

### 2. [DeepSeek-V4-Pro API Permanently Slashed to 1/4 of Original Price—Effective May 31](https://m.okjike.com/originalPosts/6a1050952c01b793ebf54557)

Before May 31, DeepSeek-V4-Pro was running a 60% discount. Most people figured prices would bounce back after the promo ended—nope. The company just announced they're cutting even deeper, dropping to **1/4 of the original price**.

New pricing: 3 yuan per million input tokens, 6 yuan per million output tokens. That's seriously competitive in China's LLM API market. For developers already running DeepSeek in production, this isn't a small favor—it's real cost savings. The price war isn't over; DeepSeek just threw the first punch.

![image](https://cdnv2.ruguoapp.com/FnngoWS3EfnnRneGtoBOPTkX7jcWv3.jpg)

### 3. [Codex Epic Update: Dual Command Key Screenshot Fill, /goal Feature Now Live](https://m.okjike.com/originalPosts/6a0fd9be657481ea4ec9a3ee)

Used to be: screenshot bug → switch windows → paste → describe. Four steps to get AI to understand what you're talking about. Now with Codex's update, hold both Command keys simultaneously, and the current window plus all off-screen text auto-fills into the input box. One gesture, three steps saved.

Even better: the `/goal` feature is officially live. Give it an objective, it runs autonomously for hours or days—pause, redirect, resume whenever. The built-in browser also got upgraded with direct page element annotation and editing. The direction is crystal clear: from "help you write code" to "help you run tasks."

![image](https://cdnv2.ruguoapp.com/Fo_8cS23AiSdN9Dh1r_nMUJ1hjcev3.png)

### 4. [Skill: AI E-Ink Notepad That Proactively Pushes What You Need to See—16 Widget Types, Mix and Match](https://x.com/op7418/status/2057778107617292310)

Stop tab-hopping. Cang Shifu built an AI e-ink notepad called Skill that, once connected to an e-ink device, proactively decides what to display based on your current state and memory—calendar, GitHub notifications, todos, weather. 16 widget types, freely combined into 2-1-1 layouts with 4 slots.

The magic isn't "you go check"—it's "it pushes to you." That small logical shift represents AI moving from passive tool to active assistant. E-ink uses almost no power; a glance is enough without disrupting your workflow. If you like tinkering with hardware, this Skill deserves serious attention.

### 5. [SONIC: Humanoid Robot Full-Body Control Hits Scaling Milestone—Motion Naturalness Jumps](https://arxiv.org/abs/2511.07820)

Large models scale up parameters, data, and compute to unlock capability jumps. The same logic works for humanoid robot control.

SONIC's straightforward approach: scale model capacity, training data, and compute simultaneously to train a universal controller that makes humanoid robots move naturally and coherently. Previous robot control models were typically small, behavior-limited, and resource-constrained; SONIC's conclusion is that Scaling works here too, with obvious results. For embodied AI, this signals that the "large model era" for robots might actually be coming.

### 6. [ViPS: Auto-Generate 3D Character Rigging Pose Space from Video—One Less Animator Nightmare](https://arxiv.org/abs/2604.17623)

Anyone who's done 3D animation knows: after rigging a character, one of the worst headaches is pose space—random joint movements cause clipping, hyperextension, self-intersection. Nightmare fuel.

ViPS learns from video. It infers reasonable pose ranges from real video data and gives auto-rigged 3D meshes a "motion boundary"—the system learns which poses are valid and which are physically impossible. For games, film, and virtual character pipelines, this is genuinely time-saving progress.

### 7. [EvoVid: Video LLM Self-Evolution Framework—Boost Reasoning Without Human Annotation](https://arxiv.org/abs/2605.21931)

Training video understanding models is expensive partly because of human annotation—someone has to watch, write answers, label tasks. EvoVid sidesteps this: let the model generate its own questions, solve them, iterate. A reinforcement-learning-driven self-evolution framework that improves video reasoning without human labels.

The significance goes beyond cost savings. If models can self-evolve, their ceiling isn't capped by human annotation scale. Video understanding is notoriously hard in multimodal AI; EvoVid offers a fresh angle.

### 8. [FundusGround: New Ophthalmology VQA Benchmark—AI Diagnosis Needs to Show Its Work](https://arxiv.org/abs/2605.22414)

AI looks at a fundus image and says "there's a lesion here." Doctor's first thought: where exactly? Most existing ophthalmology VQA models chase answer accuracy but don't show evidence—clinically useless.

FundusGround fixes this: models must answer ophthalmology questions while spatially localizing the lesion, providing visual evidence. This is a critical bottleneck for AI in healthcare—the gap between "getting it right" and "explaining it" is bigger than expected, but this work is seriously tackling it.

### 9. [CryoNet: Deep Learning Auto-Detects Himalayan Glaciers—Even Debris-Covered "Invisible" Ones](https://arxiv.org/abs/2605.21527)

Glaciers are climate change's clearest indicator, but manual surveying is tedious and some glaciers are especially tricky—debris-covered surfaces look identical to surrounding terrain, remote sensing can't tell them apart.

CryoNet fuses Sentinel-2 optical imagery, terrain elevation, spectral indices, and PCA into a deep learning framework that auto-identifies these "invisible glaciers," validated in the Poiqu River basin in the Himalayas. Climate research and water resource management need this data; AI here isn't hype—it's doing what humans can't.

### 10. [WaytoAGI Partners with Sequoia China to Launch AGI House Season 1—Recruiting Builders](https://m.okjike.com/originalPosts/6a1096dfc2dc8bf83f517273)

Sequoia China and WaytoAGI are creating a physical space for AI Builders. AGI House Season 1 is officially recruiting—not an online community, actual physical space where people building AI products gather, collide, and help each other.

This model works in Silicon Valley; now it's China's turn. Sequoia's backing means resources and connections won't disappoint. WaytoAGI's community foundation is solid. If you're building AI apps, Agents, or vertical models, this deserves serious consideration.

![image](https://cdnv2.ruguoapp.com/FtKuUqWVRzZeUUhFhOIvkiVpaihIv3.png)

---

## **📌 Worth Watching**

**[Business]** [Lagou Officially Files for Bankruptcy Restructuring—Once Valued at $150M](https://juejin.cn/post/7642267656926969866) — Not forced by creditors; they filed voluntarily. The recruitment platform that "understood internet people" best couldn't survive AI reshaping the job market. Worth serious reflection for everyone in tech.

**[Product]** [AI Next Community Beijing: Hands-On with Dexterous Hands, 3D Scanning, Digital Avatars](https://m.okjike.com/originalPosts/6a1073eb657481ea4ed7a695) — No trend talk, just products to touch. This "try first, ask later" approach beats most AI conferences.

## **😄 AI Fun**

### [Feels Like GPT 5.5 Got Dumber Lately](https://www.v2ex.com/t/1214839)

The fun part: AI didn't take the stage and preach grand narratives—it just did a few fewer clicks, waited a bit less, repeated a bit less. As tools get smarter, they're like that helpful coworker—not doing earth-shattering work, but when you turn around, the small stuff's already handled.

## **🔮 AI Trend Predictions**

### AI Coding Tool System Prompt "Arms Race" Escalates
- **Timeline**: June 2026
- **Confidence**: 75%
- **Rationale**: Today's [28 AI tools' system prompts exposed](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) is getting major attention. Once prompts are public, competitors can study and optimize against them directly. Companies will likely update prompt strategies soon and strengthen protection mechanisms. This "expose-update-expose again" cycle will accelerate AI coding tool competition.

### LLM API Price Wars Enter "Floor Price" Phase
- **Timeline**: July 2026
- **Confidence**: 80%
- **Rationale**: Today's [DeepSeek-V4-Pro permanent cut to 1/4 original price](https://m.okjike.com/originalPosts/6a1050952c01b793ebf54557) is a clear signal. DeepSeek proactively cut instead of raising after promo ends. Other domestic LLM providers (Alibaba, Baidu, ByteDance) will likely follow within 1-2 months. API prices will keep dropping; developer marginal costs keep falling.

### Humanoid Robot Control Enters "LLM Scaling Validation" Phase
- **Timeline**: Q3 2026
- **Confidence**: 65%
- **Rationale**: Today's [SONIC proves Scaling works for humanoid full-body control](https://arxiv.org/abs/2511.07820). Once more teams replicate this, capital and research resources will concentrate on "large-parameter robot control models." Expect multiple follow-up papers and 1-2 company announcements within 3 months.

### AI Physical Space Incubators Accelerate Domestically
- **Timeline**: June-July 2026
- **Confidence**: 60%
- **Rationale**: Today's [WaytoAGI + Sequoia China AGI House Season 1](https://m.okjike.com/originalPosts/6a1096dfc2dc8bf83f517273) shows Silicon Valley's AGI House model is being replicated domestically. Sequoia's backing means this is serious. Expect Shanghai and Shenzhen to follow Beijing within 2 months. AI Builder offline clustering will strengthen further.

---

## **❓ Related Questions**

### How to Experience DeepSeek-V4-Pro?

DeepSeek-V4-Pro is accessible via official API or direct chat on DeepSeek's website. API access requires account registration and top-up; relatively user-friendly for domestic users with low payment barriers. The official site sometimes has access issues, and APIs may queue during peak hours.

**Want stable access to DeepSeek, Claude, ChatGPT, and other mainstream AI models?** Visit **[Aivora](https://aivora.cn)** for ready-made accounts—instant delivery, worry-free support.