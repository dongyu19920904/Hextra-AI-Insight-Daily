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

## **🔥 Top 10 Highlights**

### 1. [System Prompts from 28 Major AI Coding Tools Exposed—Cursor, Devin, Kiro, and Others Left Defenseless](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools)

Ever wonder what "personality" those AI coding assistants were programmed with? Now you don't have to guess.

A GitHub repo just dumped the system prompts, internal tool logic, and underlying model info from 28 mainstream AI tools—Cursor, Devin, Windsurf, Claude Code, Kiro, Replit, Lovable, Manus, Perplexity, and more. The repo hit 138K stars almost overnight, making it one of the most explosive open-source events on GitHub this year.

For regular users, this is a rare chance to see these tools' real boundaries and design philosophy. For the companies behind them? Probably the last thing they wanted to see today.

### 2. [DeepSeek-V4-Pro API Permanently Price Cut to 1/4 of Original—Input at ¥3 per Million Tokens, Effective May 31](https://m.okjike.com/originalPosts/6a1050952c01b793ebf54557)

Before May 31, DeepSeek-V4-Pro was running a 60% discount. Most people figured prices would bounce back after the promo ended—nope. The company just announced they're cutting even deeper, dropping to **1/4 of the original price**.

New pricing: ¥3 per million input tokens, ¥6 per million output tokens. That's seriously competitive in China's LLM API market. For developers already running DeepSeek in production, this isn't a small favor—it's real cost savings. The price war isn't over; DeepSeek just threw the first punch.

![image](https://cdnv2.ruguoapp.com/FnngoWS3EfnnRneGtoBOPTkX7jcWv3.jpg)

### 3. [Codex Epic Update: Dual Command Keys for Screenshot Context, /goal Feature Now Live](https://m.okjike.com/originalPosts/6a0fd9be657481ea4ec9a3ee)

Used to be: screenshot bug → switch windows → paste → describe. Four steps just to get AI to understand what you're talking about. Now with Codex's update, press both Command keys simultaneously, and your current window plus all off-screen text auto-fills into the input box. One action, three steps saved.

Even better: the `/goal` feature is officially live. Give it an objective, it runs autonomously for hours or days—pause, redirect, resume whenever. The built-in browser also got upgraded with direct element annotation and editing on pages. The direction is crystal clear: from "help you write code" to "help you run tasks."

![image](https://cdnv2.ruguoapp.com/Fo_8cS23AiSdN9Dh1r_nMUJ1hjcev3.png)

### 4. [Skill: AI E-Ink Notepad That Proactively Pushes What You Need to See, 16 Widgets Mix-and-Match](https://x.com/op7418/status/2057778107617292310)

Stop tab-hopping. Skill is an AI-powered e-ink notepad that, once connected to your device, decides what to display based on your current state and memory—calendar, GitHub notifications, todos, weather. 16 widgets, freely combined, 2-1-1 layout splits into 4 slots.

The magic isn't "you go check"—it's "it pushes to you." That small logical shift represents AI moving from passive tool to proactive assistant. E-ink uses almost no power; a glance is enough without disrupting your workflow. If you like tinkering with hardware, this Skill deserves serious attention.

### 5. [SONIC: Humanoid Robot Full-Body Control Hits Scaling, Motion Naturalness Jumps](https://arxiv.org/abs/2511.07820)

Large models scale up parameters, data, and compute to unlock capability jumps. The same logic works for humanoid robot control.

SONIC's straightforward: scale up model capacity, training data, and compute simultaneously to train a universal controller that makes humanoid robots move naturally and fluidly. Previous robot control models were typically small, behavior-limited, and resource-constrained; SONIC shows Scaling works here too, with obvious results. For embodied AI, this signals the "large model era" for robots might actually be coming.

### 6. [ViPS: Auto-Generate 3D Character Rigging Pose Space from Video—One Less Nightmare for Animators](https://arxiv.org/abs/2604.17623)

Anyone who's done 3D animation knows: after rigging a character, one of the worst headaches is pose space—random joint movements cause clipping, hyperextension, self-intersection. Nightmare fuel.

ViPS learns from video. It infers reasonable pose ranges from real footage and gives auto-rigged 3D meshes a "motion boundary"—the system knows which poses are valid and which are physically impossible. For games, film, and virtual character pipelines, this is real time-saving progress.

### 7. [EvoVid: Video LLM Self-Evolution Framework—Boost Reasoning Without Human Annotation](https://arxiv.org/abs/2605.21931)

Training video understanding models is expensive partly because of human annotation—someone has to watch, write answers, label tasks. EvoVid sidesteps this: let the model generate questions, solve them, iterate. A reinforcement-learning-driven self-evolution framework boosts video reasoning without human labels.

The significance goes beyond cost savings. If models can self-evolve, their ceiling isn't capped by human annotation scale. Video understanding is notoriously hard in multimodal AI; EvoVid offers a fresh angle.

### 8. [FundusGround: New Ophthalmology VQA Benchmark—AI Diagnosis Needs to Show Its Work, Not Just the Answer](https://arxiv.org/abs/2605.22414)

AI looks at a fundus image and says "there's a lesion here." Doctor's first thought: where exactly? Most existing ophthalmology VQA models chase answer accuracy but don't show evidence—clinically useless.

FundusGround fixes this: models must answer eye questions *and* spatially localize the lesion, providing visual proof. This is a critical bottleneck for AI in healthcare—the gap between "getting it right" and "explaining it" is bigger than expected, but this work is seriously filling it.

### 9. [CryoNet: Deep Learning Auto-Detects Himalayan Glaciers, Even the "Invisible" Ones Buried Under Debris](https://arxiv.org/abs/2605.21527)

Glaciers are climate change's clearest indicator, but manual surveying is slow and hard. One glacier type is especially tricky—surface covered in debris, spectral signature nearly identical to surroundings, remote sensing can't tell them apart.

CryoNet fuses Sentinel-2 optical imagery, terrain elevation, spectral indices, and PCA to auto-identify these "invisible glaciers." Validated in the Poiqu River basin, Himalayas. Climate research and water resource management need this data; AI here isn't hype—it's doing what humans can't.

### 10. [WaytoAGI Partners with Sequoia China to Launch AGI House Season 1—Recruiting Builders](https://m.okjike.com/originalPosts/6a1096dfc2dc8bf83f517273)

Sequoia China and WaytoAGI are creating a physical space for AI Builders. AGI House Season 1 is officially recruiting—not an online community, actual physical space where people building AI products gather, collide, and help each other.

This model works in Silicon Valley; now it's China's turn. Sequoia's backing means resources and connections won't disappoint. WaytoAGI's community foundation is solid. If you're building AI apps, Agents, or vertical models, this deserves serious consideration.

![image](https://cdnv2.ruguoapp.com/FtKuUqWVRzZeUUhFhOIvkiVpaihIv3.png)

---

## **📌 Worth Watching**

**[Business]** [Lagou Officially Files for Bankruptcy Restructuring—Once Valued at $150M](https://juejin.cn/post/7642267656926969866) — Not forced by creditors; they filed voluntarily. The recruitment platform that "knew the internet best" couldn't survive AI reshaping the job market. Worth serious thought for everyone in tech.

**[Product]** [AI Next Community Beijing: Hands-On with Dexterous Hands, 3D Scanning, Digital Avatars](https://m.okjike.com/originalPosts/6a1073eb657481ea4ed7a695) — No trend talk, just products to touch. This "try first, ask later" approach beats most AI conferences.

## **😄 AI Fun**

### [Feels Like GPT 5.5 Got Dumber Lately](https://www.v2ex.com/t/1214839)

The fun part: AI didn't take the stage and preach. Instead it snuck into small actions—fewer clicks, less waiting, fewer repeats. As tools get smarter, they're like that helpful coworker—not doing earth-shattering work, but when you turn around, the small stuff's already handled.

## **🔮 AI Trend Predictions**

### AI Coding Tool System Prompt "Arms Race" Escalates
- **Timeline**: June 2026
- **Confidence**: 75%
- **Reasoning**: Today's news about [28 AI tools' system prompts exposed](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) is getting major attention. Once prompts go public, competitors can study and optimize against them directly. Companies will likely update prompt strategies soon and strengthen protection mechanisms. This "expose-update-expose again" cycle will accelerate AI coding tool competition.

### LLM API Price Wars Enter "Floor Price" Stage
- **Timeline**: July 2026
- **Confidence**: 80%
- **Reasoning**: Today's news [DeepSeek-V4-Pro permanently cut to 1/4 original price](https://m.okjike.com/originalPosts/6a1050952c01b793ebf54557). DeepSeek proactively cut instead of raising after promo ends—clear price signal. Other Chinese LLM makers (Alibaba, Baidu, ByteDance) will likely follow within 1-2 months. API prices keep dropping; developer marginal costs keep falling.

### Humanoid Robot Control Enters "LLM Scaling Validation" Phase
- **Timeline**: Q3 2026
- **Confidence**: 65%
- **Reasoning**: Today's paper [SONIC proves Scaling works for humanoid full-body control](https://arxiv.org/abs/2511.07820). Once more teams reproduce this, capital and research resources will concentrate on "large-parameter robot control models." Expect multiple follow-up papers and 1-2 company announcements within 3 months.

### AI Physical Space Incubators Accelerate in China
- **Timeline**: June-July 2026
- **Confidence**: 60%
- **Reasoning**: Today's news [WaytoAGI + Sequoia China launch AGI House Season 1](https://m.okjike.com/originalPosts/6a1096dfc2dc8bf83f517273). Silicon Valley's AGI House model is being replicated by top Chinese institutions. Sequoia's backing means this is serious. Expect Shanghai and Shenzhen to follow Beijing within 2 months; AI Builder offline clustering will strengthen.

---

## **❓ Related Questions**

### How to Access DeepSeek-V4-Pro?

DeepSeek-V4-Pro is available via official API or direct chat on DeepSeek's website. API access requires account registration and top-up; relatively user-friendly for China. The official site can be unstable sometimes, and API may queue during peak hours.

**Want stable access to DeepSeek, Claude, ChatGPT, and other major AI models?** Visit **[Aivora](https://aivora.cn)** for ready-made accounts—instant delivery, worry-free support.