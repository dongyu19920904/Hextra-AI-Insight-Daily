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
# **Today's Digest**

```
System prompts from 28 AI coding tools leaked in one fell swoop—Cursor, Kiro, Devin, and others all exposed. A GitHub repo hit 138K stars overnight. DeepSeek announced permanent price cuts to 1/4 of the original rate on the same day. Two major events on the same day pointing to one direction: AI tools are rapidly losing their moats. Worth diving deeper.
```

## ⚡ Quick Navigation

- [📰 Today's AI News](#todays-ai-news) - Latest updates at a glance

> 💡 **Tip**: Want first access to the latest AI models mentioned here (Claude 4.5, GPT, Gemini 3 Pro)? No account? Grab one at [**Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content)—instant activation, hassle-free support.

## **Today's AI News**

### **👀 The One-Liner**
System prompts from major AI coding tools got completely exposed, a GitHub repo hit 138K stars overnight—the tool you're using? No secrets left.

### **🔑 3 Key Hashtags**
#SystemPromptsExposed #DeepSeekCutsPrices #AIToolsIntensify

---

## **🔥 Hot Top 10**

### 1. [System Prompts from 28 Mainstream AI Coding Tools Leaked: Cursor, Devin, Kiro, and More Exposed](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools)

Ever wondered what "personality" those AI coding assistants have been programmed with? Well, wonder no more.

A GitHub repo just dumped the system prompts, internal tool-call logic, and underlying model info from 28 major AI tools—Cursor, Devin, Windsurf, Claude Code, Kiro, Replit, Lovable, Manus, Perplexity, you name it. The repo went live, and stars shot up to 138K in no time. It's one of the most explosive open-source moments on GitHub this year.

For everyday users, this is a rare "table flip" moment—you finally get to see exactly where these tools' boundaries are and what they were designed to do. For the companies behind them? Today's probably not a day they want to see in the news.

### 2. [DeepSeek-V4-Pro API Cuts Prices Permanently to 1/4 of Original Rate—Effective May 31](https://m.okjike.com/originalPosts/6a1050952c01b793ebf54557)

DeepSeek-V4-Pro was running a 75% discount through May 31. A lot of people figured once the promo ended, prices would snap back. Nope. The official announcement: permanent cut, slashing it to **1/4 of the original rate** instead.

New pricing: 3 yuan per million input tokens, 6 yuan per million output tokens. That's seriously competitive in the domestic LLM API market right now. For developers running DeepSeek in production, this isn't pocket change—it's real cost savings. Price wars aren't over; DeepSeek just threw another punch.

![image](https://cdnv2.ruguoapp.com/FnngoWS3EfnnRneGtoBOPTkX7jcWv3.jpg)

### 3. [Codex Epic Update: Dual Command Key Screenshot-to-Context, /goal Feature Goes Live](https://m.okjike.com/originalPosts/6a0fd9be657481ea4ec9a3ee)

Used to be: bug in code → take screenshot → switch windows → paste → describe. Four steps to get AI up to speed. Now with Codex's update, hit both Command keys at once, and your current window plus any off-screen text? Instantly in the input box. One action, three steps saved.

Better yet: /goal mode officially launched. Give it an objective, it runs autonomous for hours or days, pause whenever, change direction, resume. The new embedded browser supports direct element markup and editing on pages. This update's trajectory is crystal clear—leveling up from "helps you write code" to "runs tasks for you."

![image](https://cdnv2.ruguoapp.com/Fo_8cS23AiSdN9Dh1r_nMUJ1hjcev3.png)

### 4. [Skill: AI E-Ink Note App That Proactively Pushes What You Need to Your Screen—16 Widgets, Free Mix & Match](https://x.com/op7418/status/2057778107617292310)

Tired of tab-hopping across 10 windows? Zang Shifu built an AI-powered e-ink note app called Skill. Pair it with an e-ink device, and the AI decides what to show you based on your current state and memory—calendar, GitHub notifications, to-do lists, weather, pick 16 widgets and arrange them however. 2-1-1 layout gives you 4 slots.

The magic isn't "you go check." It's "it pushes to you." That small mental shift? It's the story of AI moving from passive tool to active assistant. E-ink is power-sipping—one glance and done, no workflow disruption. If you're the type who loves tinkering with hardware, Skill deserves a serious look.

### 5. [SONIC: Full-Body Control for Humanoid Robots Gets Scaling Treatment—Motion Naturalness Jumps](https://arxiv.org/abs/2511.07820)

LLMs grew stronger by stacking parameters, data, and compute. Same playbook works for humanoid robot control.

SONIC's paper is straightforward: scale up model capacity, training data, and compute all at once, and train a general controller that can make humanoid robots move naturally and fluidly with full-body coordination. Older robot control models were small, behavior-limited, and resource-constrained; SONIC shows that Scaling works here too, with visible results. For embodied AI, this signals that the "age of foundation models for robots" might actually be coming.

### 6. [ViPS: Auto-Generate 3D Character Rigging Pose Spaces from Video Data—One Less Headache for Animators](https://arxiv.org/abs/2604.17623)

Anyone who's done 3D animation knows that after rigging a character's skeleton, one nightmare is pose space—move joints carelessly and you get mesh clipping, hyperextension, self-intersection. Maddening.

ViPS learns from video. It infers reasonable pose ranges from real video data, pairs auto-rigged 3D meshes with a "motion boundary," and teaches the system which poses are valid and which violate physics. For games, film, and virtual character production pipelines, this is a real time-saver.

### 7. [EvoVid: Video LLM Self-Evolution Framework—Continuous Reasoning Improvement Without Human Labels](https://arxiv.org/abs/2605.21931)

Training video understanding models? One killer cost is human annotation—someone watches video, writes answers, labels tasks. EvoVid sidesteps this: let the model pose its own questions, solve them, iterate, and use reinforcement learning to evolve autonomously without depending on human labels.

The payoff isn't just cost savings. If models can self-evolve, their ceiling isn't capped by human annotation scale anymore. Video understanding is notoriously hard in multimodal AI. EvoVid sketches a new path.

### 8. [FundusGround: New Ophthalmology VQA Benchmark—AI Diagnoses Don't Just Give Answers, They Point to the Lesion](https://arxiv.org/abs/2605.22414)

AI looks at a fundus image and says "there's pathology here." Doctor's first thought: where exactly? Most ophthalmology VQA models chase accuracy but don't say where the evidence is. Clinical use? Forget it.

FundusGround fixes this: models answer ophthalmic questions *and* spatially localize the lesion, providing visual evidence you can trust. This is a critical deployment bottleneck for medical AI—from "gets the answer right" to "explains the answer." The gap is bigger than people realize, and this work is actually filling it.

### 9. [CryoNet: Deep Learning Auto-Detects Himalayan Glaciers—Even Debris-Covered "Invisible" Glaciers Show Up](https://arxiv.org/abs/2605.21527)

Glaciers are the most direct barometer of climate change, but manual surveying is slow and hard. One glacier type is especially brutal—surface covered in rock debris, spectrum and terrain nearly identical to surroundings, remote sensing images can't tell them apart.

CryoNet fuses Sentinel-2 optical imagery, topographic elevation, spectral indices, and PCA into a deep learning framework that auto-detects these "invisible glaciers." Validated in the Poiqu watershed of the Himalayas. Climate research and water management need this data—AI here isn't hype, it's doing what humans can't.

### 10. [WaytoAGI Teams with Sequoia China to Launch AGI House Season 1—Recruiting Builders](https://m.okjike.com/originalPosts/6a1096dfc2dc8bf83f517273)

Sequoia China and WaytoAGI just created a physical space exclusively for AI builders. AGI House Season 1 is open for applications—not an online community, an actual place where AI product builders live, collide, and help each other.

This model already works in Silicon Valley. Now it's China's turn. Sequoia's backing means resources and networks won't be lacking, and WaytoAGI's community foundation is solid. If you're shipping AI apps, agents, or vertical models, take a hard look.

![image](https://cdnv2.ruguoapp.com/FtKuUqWVRzZeUUhFhOIvkiVpaihIv3.png)

---

## **📌 Worth Your Attention**

**[Business]** [Lagou Officially Files for Bankruptcy Restructuring—Once Valued at $150M](https://juejin.cn/post/7642267656926969866) — Not forced by creditors, self-initiated. The "job board for internet people" couldn't survive AI reshaping the employment market. Every tech worker should think hard about this.

**[Product]** [AI Next Community Beijing Stop: Dexterous Hands, 3D Spatial Scanning, Digital Avatars—Hands-On Experience](https://m.okjike.com/originalPosts/6a1073eb657481ea4ed7a695) — Zero trend talk, pure product testing. This "hands-first, questions second" approach beats most AI conferences.

## **😄 AI Fun Fact**

### [Feels Like GPT 5.5 Got Dumber Lately](https://www.v2ex.com/t/1214839)

The fun part? AI didn't take the stage spouting philosophy—it lives in the small stuff: fewer clicks, less waiting, fewer repeats. The smarter tools get, the more they're like that office buddy who pitches in quietly—nothing earth-shattering, but when you turn around, the little things have shrunk by a notch.

## **🔮 AI Trend Predictions**

### AI Coding Tool System Prompt "Arms Race" Escalates
- **Timeline**: June 2026
- **Probability**: 75%
- **Reasoning**: Today's story on [28 AI tools' system prompts exposed](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) is getting serious attention. Once system prompts go public, competitors can study and optimize directly. Companies will likely refresh prompt strategies soon and tighten security. The "expose-update-expose again" cycle speeds up internal competition in AI coding tools.

### Large Model API Price Wars Enter "Floor Price" Phase
- **Timeline**: July 2026
- **Probability**: 80%
- **Reasoning**: Today's story on [DeepSeek-V4-Pro permanent cut to 1/4](https://m.okjike.com/originalPosts/6a1050952c01b793ebf54557) is a deliberate move, not a promotional pause before raising. Other domestic model vendors (Alibaba, Baidu, ByteDance) likely follow within 1-2 months, driving API costs further down and shrinking developer margins.

### Humanoid Robot Control Enters "LLM Scaling Validation" Phase
- **Timeline**: Q3 2026
- **Probability**: 65%
- **Reasoning**: Today's paper [SONIC proves Scaling works for full-body humanoid control](https://arxiv.org/abs/2511.07820). Once replicated by more teams, capital and research will concentrate on "large-parameter robot control models." Expect multiple follow-up papers and 1-2 companies announcing progress within three months.

### AI Physical-Space Accelerators Rapidly Deploy Domestically
- **Timeline**: June-July 2026
- **Probability**: 60%
- **Reasoning**: Today's story on [WaytoAGI + Sequoia AGI House Season 1](https://m.okjike.com/originalPosts/6a1096dfc2dc8bf83f517273) shows the Silicon Valley AGI House model is being replicated by domestic tier-1 institutions. Sequoia's backing signals this isn't small-scale. Expect Beijing to be followed by Shanghai and Shenzhen within two months. Offline clustering of AI builders will intensify.

---

## **❓ Related Questions**

### How Do I Try DeepSeek-V4-Pro?

DeepSeek-V4-Pro is available via official API or direct chat on DeepSeek's website. API access requires account registration and credit. Access is user-friendly for domestic users with low payment barriers, though the official site can be unstable and API may queue during peak hours.

**Want more stable access to DeepSeek, Claude, ChatGPT, and other major AI models?** Visit **[Aivora](https://aivora.cn)** for ready-made accounts—instant delivery, hassle-free support.