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
30+ mainstream AI tools' system prompts were scraped by a single GitHub repo to 130K stars in one day. Cursor, Kiro, Claude Code's "product recipes" fully exposed.
It's not just gossip — Codex launched /goal long-task mode the same day, DeepSeek API slashed 75%, rewriting both the moat and price floor of AI tools.
Worth checking out today: prompt leaks teach you reverse-engineer product design, price cuts teach you save money, both matter to you.
```

## ⚡ Quick Navigation

- [📰 Today's AI News](#todays-ai-news) - Latest updates at a glance

> 💡 **Tip**: Want to experience the latest AI models mentioned here (Claude 4.5, GPT, Gemini 3 Pro) right now? No account? Grab one at [**Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) — one minute setup, hassle-free support.

## **Today's AI News**

### **👀 One-Liner**
A 138K-star GitHub repo just stripped the system prompts from 30+ mainstream AI tools bare. The biggest "underwear incident" in AI just dropped today.

### **🔑 3 Keywords**
#SystemPromptsExposed #PriceCutContinues #AgentLongTaskEra

---

## **🔥 Top 10 Headlines**

### 1. [30+ Mainstream AI Tools' System Prompts Collectively Exposed, GitHub Hits 130K Stars in One Day](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools)

Ever wonder what secret "instruction manual" these AI tools are quietly feeding their models behind the scenes? Wonder no more. A GitHub repo just dumped the system prompts, internal tool-calling logic, and underlying model info from 30+ mainstream AI products—Cursor, Claude Code, Devin, Manus, Kiro, Windsurf, Perplexity, v0, and more—hitting 130K stars in a single day and becoming one of the fastest-growing repos ever.

This isn't just tech curiosity—system prompts are these products' core competitive advantage, basically like posting the recipe online. For developers, it's a goldmine of reverse-engineering lessons. For these companies, a layer of moat just got peeled back. Waiting to see if any of them lawyering up.

---

### 2. [Codex Epic Update: Dual Command Key Screenshot + /goal Long-Task Mode Live](https://m.okjike.com/originalPosts/6a0fd9be657481ea4ec9a3ee)

Used to be, when you hit a UI problem in Codex, you'd screenshot, paste, describe, rinse and repeat for a few steps. Not anymore: hold both Command keys at once and Codex snaps the window under your cursor straight into context—even grabs text that's off-screen. Pretty solid attention to detail.

Better yet: `/goal` mode just went live. Give it an objective and it'll execute autonomously for hours, even days. Pause anytime, tweak direction, keep going. This isn't a "code completion tool" anymore—it's more like an async dev assistant that can run tasks solo. Built-in browser upgraded too, now supports editing page elements straight from comments. Enable it: add `goals = true` to your `config.toml`.

![Codex Goal Mode Interface](https://cdnv2.ruguoapp.com/Fo_8cS23AiSdN9Dh1r_nMUJ1hjcev3.png)

---

### 3. [AI E-Ink Notepad: Let AI Proactively Push What You Should See to Your Screen](https://x.com/op7418/status/2057778107617292310)

Every morning you boot up, first thing: calendar, GitHub, messages—how many times have you run this loop? Cang Shifu built an AI screen notepad called Skill. Hook it to an e-ink display and AI decides what to show based on your current state and memory. 16 widget combos, 2-1-1 layout splits into 4 slots, one glance is enough.

You're not hunting for info—AI's pushing it to your eyes. The mindset shift matters more than the tech itself—from "pull" to "push," from "you ask, AI answers" to "AI senses proactively." E-ink sips power, stays on without draining battery. Interesting combo.

---

### 4. [LLMs Show Systemic Political Bias, Consistency Training Effectively Mitigates It](https://arxiv.org/abs/2605.22771)

Ask the same LLM two politically opposite but structurally symmetric questions and the answers often aren't symmetric—not by accident. Researchers named this "latent political bias" and mapped out 7 specific bias mechanisms.

They proposed two quantitative metrics: sentiment consistency (measures symmetry in wording and framing) and stance consistency (measures symmetry in conclusions). Key finding: consistency training significantly reduces this bias without massive model retraining. If you're building content moderation, policy analysis, or news summary AI, this paper's methodology deserves a serious read.

---

### 5. [Visual Document Image Editing Benchmark VDE Bench Released](https://arxiv.org/abs/2602.00122)

Ever ask AI to edit text in a screenshot and watch the font and background go haywire? This pain point finally got serious research. VDE Bench specifically evaluates image editing models on "visual documents"—precisely modifying text in images while preserving original font style and background.

This direction had almost zero systematic benchmarks before, so everyone was making their own claims. With a unified standard, you can actually compare who's legit at this task. For teams doing document processing, contract editing, or UI screenshot tweaks, this benchmark's arrival signals the niche is getting real attention.

---

### 6. [MuKV: Multi-Granularity KV Cache Compression, Long Video QA Without VRAM Explosion](https://arxiv.org/abs/2605.22269)

Long video QA is a headache: longer video = more tokens = VRAM dies. Existing methods either cache every frame (wasteful) or skip frames (lose details). MuKV proposes multi-granularity KV cache compression, handling both intra-frame spatial detail and cross-frame temporal context, compressing memory while keeping critical info.

Practical upside: same hardware, longer videos, better answers. If you're doing video understanding, surveillance analysis, or long-form video summaries, track this direction—VRAM bottleneck has been the biggest roadblock for video AI deployment.

---

### 7. [Multimodal Video Temporal Localization: Models Actually "Know" the Answer, Just Won't Say It](https://arxiv.org/abs/2605.21954)

Ask a video LLM "when does this happen" and it often gets it wrong. But researchers found something counterintuitive: the model's attention mechanism already correctly pinpointed the timestamp—it just "misspoke" when generating text.

This flips the solution approach—no retraining needed. Just extract temporal signals from attention layers and temporal localization accuracy jumps. Dirt cheap, huge gains. For video retrieval, sports analysis, meeting transcripts needing precise timestamps, this method is ready to use.

---

### 8. [WaytoAGI Partners with Sequoia China to Launch AGI House Season 1, Recruiting Builders](https://m.okjike.com/originalPosts/6a1096dfc2dc8bf83f517273)

Sequoia China and WaytoAGI did something: gave actual AGI app builders a physical space and resource network. AGI House Season 1 is officially recruiting—goal is to cluster people building AI products, spark collisions, accelerate together.

This playbook worked in Silicon Valley—early YC thrived on physical clustering effects to fast-track quality projects. Sequoia's backing means this isn't just a meetup; real capital and resource hookups follow. If you're AI-founding, this door's worth a serious look.

![AGI House Community Space](https://cdnv2.ruguoapp.com/FtKuUqWVRzZeUUhFhOIvkiVpaihIv3.png)

---

### 9. [Autonomous Driving in Flood Scenarios Dataset FRED Released, First Multimodal Dataset Focused on Water Hazard Roads](https://arxiv.org/abs/2605.22018)

Self-driving works great on sunny highways, but hit standing water and things flip—literally. FRED is the first dedicated multimodal autonomous driving dataset for flood/water hazard scenarios, with high-res camera, 64-line lidar point clouds, and high-precision IMU/GNSS from 5 real-world water disaster sites.

Extreme-weather autonomous driving safety has always been an industry weak spot; data scarcity is the root cause. FRED fills that gap. For teams doing autonomous perception, road condition recognition, or adverse-weather robustness research, this is rare real-world scenario data.

---

### 10. [ByteDance and Meta Revenue Nearly Neck-and-Neck, Douyin Monthly Active Users Exceed 340 Million](https://www.36kr.com/p/3820061834269061)

Revenue gap between the two is now negligible, but what matters more: AI. ByteDance is stacking models, apps, compute, and hardware across the full stack. Douyin's MAU just broke 340 million—C-side penetration speed outpaces competitors by miles.

This isn't just business scorecard math—ByteDance and Meta are mirroring each other's blind spots. One's catching up on overseas social, the other's sprinting on AI apps. Their rivalry has graduated from traffic wars to AI ecosystem wars, and the endgame is nowhere near.

![ByteDance vs Meta Market Position](https://img.36krcdn.com/hsossms/20260522/v2_3971e7e9fe8040689208fee7b6e8add5@000000_oswg375314oswg1080oswg614_img_000?x-oss-process=image/format,jpg/interlace,1)

---

## **📌 Worth Watching**

**[Product]** [DeepSeek-V4-Pro API Slashed to 1/4 Original Price, Input at 3 Yuan/Million Tokens](https://m.okjike.com/originalPosts/6a1050952c01b793ebf54557) — After May 31 promo ends, new pricing hits rock bottom. Domestic developers' API costs basically vanish. Switch or stay, both moves are solid.

**[Product]** [Codex PPT Skills One-Click 3:4 Intro Images](https://x.com/op7418/status/2057683287091654708) — No need to open Photoshop for product intros anymore. Codex PPT Skills spits out standard-ratio images directly. Design barrier drops another notch.

**[Business]** [Dahua Xinghan Large Model: V-Series Vision + L-Series Industry Models Dual Track](https://www.36kr.com/p/3820220616495492) — "Base Model + Industry Know-How" is the new industrial AI paradigm. CV meets Agent multiplier effects happening in manufacturing heartland. More moat than just selling compute.

---

## **😄 AI Fun**

### [M5 Stack New Device Arrived, Has Mic and Speaker, Possibilities Just Doubled](https://x.com/op7418/status/2057783822893318277)

Some people see new hardware and think "what can this do." Others see it and think "what AI can I put in this."

Cang Shifu got the M5 Stack new device. First tweet wasn't an unboxing flex—it was straight to the point: has mic, has speaker, way more playable now. Casually dropped that his stuff sells out when it drops. Sounds chill, but the subtext: this crowd already treats embedded hardware like AI Lego blocks.

Regular people buy new gear and think about using it. This crowd buys new gear and thinks about how to let AI live in it.

![M5 Stack Device with Microphone and Speaker](https://pbs.twimg.com/media/HI63H_dbYAAWqS8?format=jpg&name=orig)

---

## **🔮 AI Trend Predictions**

### System Prompt Protection Becomes New AI Product Issue
- **Prediction Window**: June–July 2026
- **Confidence**: 72%
- **Rationale**: Today's news [30+ Mainstream AI Tools' System Prompts Collectively Exposed](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) hit 130K stars in one day. Core product logic now publicly reversible. Signal: system prompts are now reverse-engineerable competitive assets. Next phase: companies will start legally protecting or technically encrypting prompts. Simultaneously, more "prompt engineering" products and courses will flood in.

### DeepSeek Triggers New Phase of Domestic API Price Wars
- **Prediction Window**: June 2026
- **Confidence**: 80%
- **Rationale**: Today's news [DeepSeek-V4-Pro API Slashed to 1/4 Original Price](https://m.okjike.com/originalPosts/6a1050952c01b793ebf54557), input at just 3 yuan/million tokens. This pricing will force Alibaba, Baidu, Tencent and other domestic cloud vendors to match. Next API price war round will cluster around early June. Ultimate winners: indie devs and AI startup teams.

### Agent Long-Task Mode Becomes Coding Tool Standard
- **Prediction Window**: July–August 2026
- **Confidence**: 68%
- **Rationale**: Today's news [Codex /goal Long-Task Mode Live](https://m.okjike.com/originalPosts/6a0fd9be657481ea4ec9a3ee), supports autonomous execution for hours to days. Cursor, Windsurf already following suit. Once users accept "give goal, wait for result" async dev mode, it becomes baseline table stakes for all AI coding tools.

### Embedded AI Hardware Mini-Boom Incoming
- **Prediction Window**: July 2026
- **Confidence**: 55%
- **Rationale**: Today's content shows M5 Stack new device selling out, AI e-ink notepads—developer community demand for "AI living in small hardware" ramping fast. Combined with plummeting voice interaction costs, next 2–3 months will see more low-cost AI hardware modules. Will spawn batch of embedded-device-based AI use cases.

---

## **❓ Related Questions**

### How to Experience DeepSeek-V4-Pro?

DeepSeek-V4-Pro is currently available via official API. After May 31, official pricing is 3 yuan input, 6 yuan output per million tokens—super friendly for domestic devs. But if you want to try the chat interface directly without building your own API, you might hit signup queues or access hiccups.

**Solution**: Visit **[Aivora](https://aivora.cn)** for ready-made accounts covering DeepSeek, Claude, ChatGPT and more mainstream models. Lightning-fast delivery, hassle-free support.