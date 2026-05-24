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
30+ mainstream AI tools' system prompts were scraped by a single GitHub repo to 130K stars in one day, with Cursor, Kiro, Claude Code's "product recipes" fully exposed.
It's not just gossip — Codex launched /goal long-task mode the same day, DeepSeek API slashed 75%, rewriting both the moat and price floor of AI tools.
Worth checking out today: prompt leaks teach you reverse-engineer product design, price cuts teach you save money, both matter to you.
```

## ⚡ Quick Navigation

- [📰 Today's AI News](#todays-ai-news) - Latest updates at a glance

> 💡 **Tip**: Want to experience the latest AI models mentioned here (Claude 4.5, GPT, Gemini 3 Pro) right now? No account? Grab one at [**Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content), one minute to get started, hassle-free support.

## **Today's AI News**

### **👀 One-Liner**
A 138K-star GitHub repo just stripped the system prompts from 30+ mainstream AI tools bare — the biggest "underwear incident" in AI just dropped today.

### **🔑 3 Keywords**
#SystemPromptsExposed #PriceCutContinues #AgentLongTaskEra

---

## **🔥 Top 10 Highlights**

### 1. [30+ Mainstream AI Tools' System Prompts Collectively Exposed, GitHub Hits 130K Stars in One Day](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools)

Ever wonder what "instruction manual" these AI tools are secretly feeding their models every day? Now you don't have to guess. A GitHub repo just dumped the system prompts, internal tool-calling logic, and underlying model info from 30+ mainstream AI products — Cursor, Claude Code, Devin, Manus, Kiro, Windsurf, Perplexity, v0, and more — hitting 130K stars in a single day, becoming one of the fastest-growing repos in history.

This isn't just satisfying tech curiosity — system prompts are these products' core competitive advantage, basically putting their recipe straight on the internet. For developers, it's a goldmine of reverse-engineering material; for these companies, a layer of moat just got stripped. Waiting to see if any of them send cease-and-desist letters.

---

### 2. [Codex Epic Update: Dual Command Key Screenshot + /goal Long-Task Mode Live](https://m.okjike.com/originalPosts/6a0fd9be657481ea4ec9a3ee)

Used to be, when you hit a UI issue in Codex, you'd screenshot, paste, describe, back-and-forth for several steps. Not anymore: hold both left and right Command keys, Codex snaps the window under your cursor directly, even grabbing off-screen text into context — pretty solid attention to detail.

The real kicker is `/goal` mode officially launching: give it an objective, it runs autonomously for hours or even days, pause and redirect anytime you want. This isn't a "code completion tool" anymore, it's more like an async dev assistant that can own tasks. Built-in browser also upgraded, supports editing page elements directly in comments. Enable it: add `goals = true` to `config.toml`.

![Codex Goal Mode](https://cdnv2.ruguoapp.com/Fo_8cS23AiSdN9Dh1r_nMUJ1hjcev3.png)

---

### 3. [AI E-Ink Notepad: Let AI Proactively Push What You Should See to Your Screen](https://x.com/op7418/status/2057778107617292310)

Every morning you boot up, first thing is calendar, GitHub, messages — how many times have you done this routine? Cang Shifu built an AI screen notepad called Skill that, once connected to an e-ink device, proactively decides what to display based on your current state and memory. 16 widget combos, 2-1-1 layout splits into 4 slots, one glance is enough.

You're not hunting for info, AI is pushing it to your eyes. The mindset shift matters more than the tech itself — from "pull" to "push," from "you ask, AI answers" to "AI senses proactively." E-ink burns almost no power when always-on, this combo's got legs.

---

### 4. [LLMs Show Systemic Political Bias, Consistency Training Effectively Mitigates It](https://arxiv.org/abs/2605.22771)

Ask the same LLM two politically opposite but structurally symmetric questions, the answers often aren't symmetric — not by accident. Researchers named this "latent political bias" and mapped out 7 specific bias mechanisms.

They proposed two quantitative metrics: sentiment consistency (measuring phrasing and framing symmetry) and stance consistency (measuring conclusion symmetry). Crucially, they found consistency training significantly reduces this bias without massive model retraining. If you're building content moderation, policy analysis, or news summary AI, this paper's methodology deserves a serious read.

---

### 5. [Visual Document Image Editing Benchmark VDE Bench Released](https://arxiv.org/abs/2602.00122)

Ever ask AI to edit text in a screenshot and watch the font and background go haywire? This pain point finally got serious research. VDE Bench specifically evaluates image editing models on "visual documents" — precisely modifying text in images while preserving original font style and background.

This direction had almost no systematic evaluation standard before, so everyone was making their own claims. With a unified benchmark, you can actually compare who's more reliable at this task. For teams doing document processing, contract editing, or UI screenshot tweaks, this benchmark's arrival signals the niche is getting real attention.

---

### 6. [MuKV: Multi-Granularity KV Cache Compression, Long Video QA Without VRAM Explosion](https://arxiv.org/abs/2605.22269)

Long video QA is a headache: longer video, more tokens, VRAM dies. Existing methods either cache every frame (massive redundancy) or skip frames (lose details). MuKV proposes multi-granularity KV cache compression, handling both intra-frame spatial detail and cross-frame temporal context, compressing memory while keeping critical info.

Practical upside is direct: same hardware, handle longer videos, answer more accurately. If you're doing video understanding, surveillance analysis, or long-video summarization, this direction's progress is worth tracking — VRAM bottleneck has always been the biggest roadblock for video AI deployment.

---

### 7. [Multimodal Video Temporal Localization: Models Actually "Know" the Answer, Just Don't Say It](https://arxiv.org/abs/2605.21954)

Ask a video LLM "what second did this happen," it often gets it wrong. But researchers found something counterintuitive: the model's attention mechanism already correctly pinpointed the timestamp, it just "misspoke" when generating text.

This flips the solution approach — no retraining needed, just extract temporal signals from attention layers and temporal localization accuracy jumps. Dirt cheap, results solid. For video retrieval, sports analysis, meeting transcripts and other apps needing precise time stamps, this method is ready to use.

---

### 8. [WaytoAGI Partners with Sequoia China to Launch AGI House Season 1, Recruiting Builders](https://m.okjike.com/originalPosts/6a1096dfc2dc8bf83f517273)

Sequoia China and WaytoAGI did something: give Builders actually building AGI apps a physical space and resource network. AGI House Season 1 officially recruiting, goal is gathering people shipping AI products, bouncing ideas, accelerating each other.

This model already proved itself in Silicon Valley — early YC ran on physical clustering effects to quickly filter quality projects. Sequoia's backing means this isn't just a community thing, follow-up funding and resource hookups are real. If you're doing AI startup, this entry point deserves a serious look.

![AGI House](https://cdnv2.ruguoapp.com/FtKuUqWVRzZeUUhFhOIvkiVpaihIv3.png)

---

### 9. [Flood Scenario Autonomous Driving Dataset FRED Released, First Multimodal Dataset Focused on Water Hazard Roads](https://arxiv.org/abs/2605.22018)

Self-driving runs smooth on sunny highways, but hit a flooded road and it tends to flip — literally. FRED is the first known multimodal autonomous driving dataset specifically for flood/waterlogged scenarios, with high-res camera images, 64-line lidar point clouds, and high-precision IMU/GNSS data collected from 5 different real water-hazard sites.

Extreme weather autonomous driving safety has always been an industry weak spot, lack of data is the root cause. FRED fills this gap, for teams doing autonomous perception, road condition recognition, or adverse weather robustness research, this is rare real-world scenario data.

---

### 10. [ByteDance and Meta Revenue Nearly Neck-and-Neck, Douyin Monthly Active Users Exceed 340 Million](https://www.36kr.com/p/3820061834269061)

The revenue gap between the two companies has shrunk to negligible, but what matters more is the AI line: ByteDance is simultaneously deploying across models, apps, compute, and hardware, Douyin's monthly active users broke 340 million, C-end penetration speed far outpaces competitors.

This isn't just a business numbers comparison — ByteDance and Meta are mirroring each other's weak spots, one catching up on overseas social, one sprinting on AI apps. Their rivalry has escalated from traffic wars to AI ecosystem wars, and this war's endgame is nowhere near.

![ByteDance Meta Comparison](https://img.36krcdn.com/hsossms/20260522/v2_3971e7e9fe8040689208fee7b6e8add5@000000_oswg375314oswg1080oswg614_img_000?x-oss-process=image/format,jpg/interlace,1)

---

## **📌 Worth Watching**

**[Product]** [DeepSeek-V4-Pro API Slashed to 1/4 Original Price, Input at 3 Yuan/Million Tokens](https://m.okjike.com/originalPosts/6a1050952c01b793ebf54557) — After May 31 promo ends, new pricing drops to rock-bottom, domestic developers' API costs nearly negligible, switching or staying both solid moves now.

**[Product]** [Codex PPT Skills One-Click 3:4 Intro Images](https://x.com/op7418/status/2057683287091654708) — No need to open Photoshop for product intro images anymore, Codex PPT Skills generates standard-ratio images directly, design barrier drops another notch.

**[Business]** [Dahua Xinghan Large Model: V-Series Vision + L-Series Industry Models Dual Track](https://www.36kr.com/p/3820220616495492) — "Base Model + Industry Know-How" new paradigm for industrial AI, CV meets Agent multiplier effect happening in manufacturing heartland, this path has more moat than just selling compute.

---

## **😄 AI Fun**

### [M5 Stack New Device Arrived, Has Mic and Speaker, Possibilities Just Doubled](https://x.com/op7418/status/2057783822893318277)

Some people see new hardware and think "what can this do." Others see new hardware and think "what AI can I put in this."

Cang Shifu got the M5 Stack new device, first tweet wasn't an unboxing photo, it was straight to the point: has mic, has speaker, way more playable now. Casually added — his stuff sells out every time. Sounds casual, but the subtext is: this crowd already treats embedded hardware like AI experiment Lego blocks.

Regular people get new gear and think how to use it. This crowd gets new gear and thinks how to let AI live in it.

![M5 Stack Device](https://pbs.twimg.com/media/HI63H_dbYAAWqS8?format=jpg&name=orig)

---

## **🔮 AI Trend Predictions**

### System Prompt Protection Becomes New AI Product Issue
- **Prediction Timeline**: June-July 2026
- **Prediction Confidence**: 72%
- **Reasoning**: Today's news [30+ Mainstream AI Tools' System Prompts Collectively Exposed](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) hit 130K stars in one day, core product logic publicly exposed. This signals system prompts have become reversible competitive assets, next comes companies protecting prompts via legal means or tech encryption, plus more "prompt engineering" products and courses flooding in.

### DeepSeek Drives Domestic API Price War Into New Phase
- **Prediction Timeline**: June 2026
- **Prediction Confidence**: 80%
- **Reasoning**: Today's news [DeepSeek-V4-Pro API Slashed to 1/4 Original Price](https://m.okjike.com/originalPosts/6a1050952c01b793ebf54557), input just 3 yuan/million tokens. This pricing directly forces Alibaba, Baidu, Tencent and other domestic cloud vendors to follow, next API price war round concentrates around early June, ultimate winners are indie developers and AI startup teams.

### Agent Long-Task Mode Becomes Coding Tool Standard
- **Prediction Timeline**: July-August 2026
- **Prediction Confidence**: 68%
- **Reasoning**: Today's news [Codex /goal Long-Task Mode Officially Live](https://m.okjike.com/originalPosts/6a0fd9be657481ea4ec9a3ee), supports autonomous execution for hours to days. Cursor, Windsurf and competitors already following suit, once "give goal, wait for result" async dev mode gets user adoption, becomes baseline capability for all AI coding tools.

### Embedded AI Hardware Gets Small Boom
- **Prediction Timeline**: July 2026
- **Prediction Confidence**: 55%
- **Reasoning**: Today's content shows M5 Stack new device selling out, AI e-ink notepad and similar cases signal developer community demand for "AI living in small hardware" ramping fast. Combined with voice interaction costs dropping, next 2-3 months sees more low-cost AI hardware modules, spawning batch of embedded device-based AI scenarios.

---

## **❓ Related Questions**

### How to Experience DeepSeek-V4-Pro?

DeepSeek-V4-Pro is currently available via official API, officially priced at 3 yuan input, 6 yuan output/million tokens after May 31, super friendly for domestic developers. But if you want to try the chat interface directly without building your own API, you might hit signup queues or access instability.

**Solution**: Visit **[Aivora](https://aivora.cn)** to grab ready-made accounts including DeepSeek, Claude, ChatGPT and other mainstream models, instant delivery, hassle-free support.