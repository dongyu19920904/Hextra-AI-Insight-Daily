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
30+ mainstream AI tools' system prompts were scraped by a single GitHub repo to 138K stars in one day, with Cursor, Kiro, Claude Code's "product recipes" fully exposed.
It's not just gossip — Codex launched /goal long-task mode the same day, DeepSeek API slashed 75%, rewriting both the moat and price floor of AI tools.
Worth checking out today: prompt leaks teach you reverse-engineer product design, price cuts teach you save money, both matter to you.
```

## ⚡ Quick Navigation

- [📰 Today's AI News](#todays-ai-news) - Latest updates at a glance

> 💡 **Tip**: Want to experience the latest AI models mentioned here (Claude 4.5, GPT, Gemini 3 Pro) right now? No account? Grab one at [**Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content), one minute to get started, hassle-free support.

## **Today's AI News**

### **👀 One-Liner**
A 138K-star GitHub repo just exposed the system prompts of 30+ mainstream AI tools — the biggest "underwear incident" in AI just dropped today.

### **🔑 3 Keywords**
#SystemPromptsExposed #PriceCutContinues #AgentLongTaskEra

---

## **🔥 Top 10 Headlines**

### 1. [30+ Mainstream AI Tools' System Prompts Collectively Exposed, GitHub Hits 138K Stars in One Day](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools)

Ever wondered what secret "instruction manual" these AI tools are quietly feeding their models every day? Wonder no more. A GitHub repo just dumped the system prompts, internal tool-calling logic, and underlying model info for 30+ mainstream AI products including Cursor, Claude Code, Devin, Manus, Kiro, Windsurf, Perplexity, v0, and more. It hit 138K stars in a single day, becoming one of the fastest-growing repos in history.

This isn't just tech curiosity — system prompts are these products' core competitive advantage, basically like posting the recipe online. For developers, it's a goldmine of reverse-engineering lessons; for these companies, a layer of moat just got stripped. Expect cease-and-desist letters soon.

---

### 2. [Codex Epic Update: Dual Command Key Screenshot + /goal Long-Task Mode Live](https://m.okjike.com/originalPosts/6a0fd9be657481ea4ec9a3ee)

Used to be, when you hit a UI issue in Codex, you'd screenshot, paste, describe, rinse and repeat for several steps. Not anymore: hold both Command keys simultaneously, and Codex snaps the window under your cursor directly into context — even capturing off-screen text. The attention to detail here is solid.

Even wilder: `/goal` mode just went live. Give it an objective, it runs autonomously for hours or even days, and you can pause, redirect, or resume anytime. This isn't a "code completion tool" anymore — it's more like an async dev assistant that can own tasks. Built-in browser also upgraded, now supports editing page elements directly in comments. Enable it by adding `goals = true` to your `config.toml`.

![Codex Interface Update](https://cdnv2.ruguoapp.com/Fo_8cS23AiSdN9Dh1r_nMUJ1hjcev3.png)

---

### 3. [AI E-Ink Notepad: Let AI Proactively Push What You Should See to Your Screen](https://x.com/op7418/status/2057778107617292310)

Every morning you boot up, first thing is calendar, GitHub, messages — how many times have you done this routine? Cangshi built an AI screen notepad called Skill that, once connected to an e-ink device, proactively decides what to display based on your current state and memory. 16 widget combos, 2-1-1 layout splits into 4 slots, one glance is enough.

You're not hunting for info — AI brings it to you. The paradigm shift here matters more than the tech itself — from "pull" to "push," from "you ask, AI answers" to "AI senses proactively." E-ink sips power, stays on without draining battery, this combo's got legs.

---

### 4. [LLMs Show Systemic Political Bias, Consistency Training Effectively Mitigates It](https://arxiv.org/abs/2605.22771)

Ask the same LLM two politically opposite but structurally symmetric questions, and the answers often aren't symmetric — not by accident. Researchers named this "latent political bias" and mapped out 7 specific mechanisms. They proposed two quantitative metrics: sentiment consistency (measuring phrasing and framing symmetry) and stance consistency (measuring conclusion symmetry). Better yet, they found consistency training significantly reduces this bias without massive retraining. If you're building content moderation, policy analysis, or news summary AI, this paper's methodology deserves a serious read.

---

### 5. [Visual Document Image Editing Benchmark VDE Bench Released](https://arxiv.org/abs/2602.00122)

Ever asked AI to edit text in a screenshot and watched the font and background go haywire? This pain point finally got serious research. VDE Bench specifically evaluates image editing models on "visual documents" — precisely modifying text in images while preserving original font style and background.

This direction had almost zero systematic benchmarks before, so everyone was making their own claims. With a unified standard, you can actually compare who's legit at this task. For teams doing document processing, contract editing, or UI screenshot tweaks, this benchmark's arrival signals the niche is getting real attention.

---

### 6. [MuKV: Multi-Granularity KV Cache Compression, Long Video QA Without VRAM Explosion](https://arxiv.org/abs/2605.22269)

Long video QA is a headache: longer video = more tokens = VRAM dies. Existing methods either cache every frame (wasteful) or skip frames (lose details). MuKV proposes multi-granularity KV cache compression, handling both intra-frame spatial detail and cross-frame temporal context, compressing memory while keeping critical info.

Practical upside: same hardware, longer videos, better answers. If you're doing video understanding, surveillance analysis, or long-form video summaries, track this direction — VRAM bottleneck has been the biggest roadblock for video AI deployment.

---

### 7. [Multimodal Video Temporal Localization: Models Actually "Know" the Answer, Just Don't Say It](https://arxiv.org/abs/2605.21954)

Ask a video LLM "when does this happen," it often gets it wrong. But researchers found something counterintuitive: the model's attention mechanism already correctly pinpointed the timestamp — it just "misspoke" when generating text.

This flips the solution approach — no retraining needed, just extract temporal signals from attention layers and temporal localization accuracy jumps. Dirt cheap, huge gains. For video retrieval, sports analysis, meeting transcripts needing precise timestamps, this method is ready to use.

---

### 8. [WaytoAGI Partners with Sequoia China to Launch AGI House Season 1, Recruiting Builders](https://m.okjike.com/originalPosts/6a1096dfc2dc8bf83f517273)

Sequoia China and WaytoAGI did something: gave actual AGI app builders a physical space and resource network. AGI House Season 1 is now recruiting, aiming to cluster people building AI products together for collision and acceleration.

This playbook worked in Silicon Valley — YC early days ran on physical clustering to fast-track quality projects. Sequoia's backing means this isn't just a meetup; real capital and resource hookups follow. If you're AI-founding, this door's worth a serious look.

![AGI House Initiative](https://cdnv2.ruguoapp.com/FtKuUqWVRzZeUUhFhOIvkiVpaihIv3.png)

---

### 9. [Autonomous Driving in Flood Scenarios Dataset FRED Released, First Multimodal Dataset Focused on Water Hazard Roads](https://arxiv.org/abs/2605.22018)

Self-driving works great on sunny highways, but hit standing water and it flips — literally. FRED is the first multimodal autonomous driving dataset specifically for flood/standing water scenarios, with high-res camera, 64-line lidar point clouds, and high-precision IMU/GNSS from 5 real-world water hazard sites.

Autonomous driving safety in extreme weather has always been an industry weak spot; data scarcity is the root cause. FRED fills that gap. For teams doing perception, road condition recognition, or adverse weather robustness research, this is rare real-world data gold.

---

### 10. [ByteDance and Meta Revenue Nearly Neck-and-Neck, Douyin Monthly Active Users Exceed 340 Million](https://www.36kr.com/p/3820061834269061)

Revenue gap between the two is now negligible, but what matters more is the AI line: ByteDance is stacking models, apps, compute, and hardware across the full stack, while Douyin's MAU just crossed 340 million — C-side penetration speed outpaces competitors by miles.

This isn't just business scorecard math — ByteDance and Meta are mirroring each other's blind spots, one catching up on overseas social, the other sprinting on AI apps. Their rivalry has upgraded from traffic wars to AI ecosystem wars, and the endgame is nowhere near.

![ByteDance vs Meta Comparison](https://img.36krcdn.com/hsossms/20260522/v2_3971e7e9fe8040689208fee7b6e8add5@000000_oswg375314oswg1080oswg614_img_000?x-oss-process=image/format,jpg/interlace,1)

---

## **📌 Worth Watching**

**[Product]** [DeepSeek-V4-Pro API Drops to 1/4 Original Price, Input at 3 Yuan/Million Tokens](https://m.okjike.com/originalPosts/6a1050952c01b793ebf54557) — After May 31 promo ends, new pricing hits rock bottom; domestic developers' API costs basically vanish. Switch or stay, both moves are solid.

**[Product]** [Codex PPT Skills One-Click 3:4 Intro Images](https://x.com/op7418/status/2057683287091654708) — No need to open Photoshop anymore; Codex PPT Skills generates standard-ratio images directly, design barrier drops another notch.

**[Business]** [Dahua Xinghan Large Model: V-Series Vision + L-Series Industry Models Dual Track](https://www.36kr.com/p/3820220616495492) — "Base Model + Industry Know-How" is the new industrial AI paradigm; CV meets Agent multiplier effects happening in manufacturing heartland, more moat than just selling compute.

---

## **😄 AI Fun**

### [M5 Stack New Device Arrived, Has Mic and Speaker, Possibilities Just Doubled](https://x.com/op7418/status/2057783822893318277)

Some people see new hardware and think "what can this do." Others see it and think "what AI can I put in this."

Cangshi got the M5 Stack new device and didn't unbox-post it — went straight to: has mic, has speaker, way more playable now. Casually dropped that his stuff sells out every drop. Sounds chill, but the subtext is: this crowd already treats embedded hardware like AI Lego blocks.

Regular people buy new gear and think how to use it. This crowd buys new gear and thinks how to let AI live in it.

![M5 Stack Device](https://pbs.twimg.com/media/HI63H_dbYAAWqS8?format=jpg&name=orig)

---

## **🔮 AI Trend Predictions**

### System Prompt Protection Becomes New AI Product Issue
- **Timeline**: June-July 2026
- **Confidence**: 72%
- **Rationale**: Today's [30+ Mainstream AI Tools' System Prompts Collectively Exposed](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) hit 138K stars in one day, core product logic now public. Signal says system prompts are now reversible competitive assets. Next: companies will legally or technically protect prompts, while "prompt engineering" products and courses flood the market.

### DeepSeek Drives Domestic API Price War Into New Phase
- **Timeline**: June 2026
- **Confidence**: 80%
- **Rationale**: Today's [DeepSeek-V4-Pro API Drops to 1/4 Original Price](https://m.okjike.com/originalPosts/6a1050952c01b793ebf54557), input at just 3 yuan/million tokens. This forces Alibaba, Baidu, Tencent to follow suit. Next API price war wave hits before June, benefiting indie devs and AI startup teams most.

### Agent Long-Task Mode Becomes Coding Tool Standard
- **Timeline**: July-August 2026
- **Confidence**: 68%
- **Rationale**: Today's [Codex /goal Long-Task Mode Live](https://m.okjike.com/originalPosts/6a0fd9be657481ea4ec9a3ee) supports hours-to-days autonomous execution. Cursor, Windsurf already following suit. Once users accept "give goal, wait for result" async dev, it becomes baseline for all AI coding tools.

### Embedded AI Hardware Gets Small Boom
- **Timeline**: July 2026
- **Confidence**: 55%
- **Rationale**: Today's M5 Stack sellout and AI e-ink notepad show dev community demand for "AI in small hardware" ramping fast. Combined with dropping voice interaction costs, next 2-3 months see more low-cost AI hardware modules, spawning embedded device AI app wave.

---

## **❓ Related Questions**

### How to Experience DeepSeek-V4-Pro?

DeepSeek-V4-Pro is available via official API now; after May 31 official pricing is 3 yuan input, 6 yuan output per million tokens — super friendly for domestic devs. But if you want direct chat interface without building your own API, you might hit signup queues or access hiccups.

**Solution**: Visit **[Aivora](https://aivora.cn)** for ready-made accounts with DeepSeek, Claude, ChatGPT and more mainstream models, instant delivery, hassle-free support.