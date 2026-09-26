---
linkTitle: AI Daily
title: AI 日报 2026/9/25：小米 MiMo-V3 架构提前曝光，长输入预填充计算降至五分之一
breadcrumbs: false
next: /en/2026-09/2026-09-25
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
## **Daily Summary**

```
Xiaomi's MiMo-V3 cuts million-token prefill compute to one-fifth, ChatGPT voice mode starts checking emails and rescheduling, Claude's Chinese responses trigger rate limits that slow all code replies.
Long-context costs, voice operations, and multilingual handling are breaking through simultaneously—agents are shifting from chat tools to assistants that actually get work done.
Today, check the top three for cost and speed changes, hit the open-source section for memory systems and gateway solutions, then test whether voice mode can replace some daily operations.
```

## **🔥 Today's Top 10**

### 1. Xiaomi MiMo-V3 Architecture Leaked Early—Prefill Compute for Long Inputs Drops to One-Fifth

**Long-context costs compressed again.** According to 36Kr, [Xiaomi's MiMo-V3 architecture leaked early with prefill compute for long inputs dropping to one-fifth](https://www.36kr.com/p/3996783462780800). Under **1 million tokens** of context, prefill compute falls to roughly **1/5**, and KV Cache usage drops to about **1/4.5**. The architecture references multiple DeepSeek contributions and targets multi-turn Agent scenarios. Developers can handle ultra-long conversations with fewer resources without sacrificing retrieval precision.

![Xiaomi MiMo-V3 Architecture Diagram](https://img.36krcdn.com/hsossms/20260924/v2_182202a1df594f5b9b1511d7cdb2fd51@000000_oswg590126oswg1000oswg1366_img_000?x-oss-process=image/format,jpg/interlace,1 "Xiaomi MiMo-V3 Architecture Diagram")

---

### 2. ChatGPT Voice Mode Gains Action Capabilities—Check Emails and Reschedule with Your Voice

**Voice is getting hands.** 36Kr reports that [ChatGPT voice mode now supports action functions](https://www.36kr.com/p/3997049599102855). Users can check emails, adjust meetings, create PPTs, and build websites through voice commands. The new app version rolled out globally today, with **GPT-6 series models** integrated. If you handle routine tasks frequently, try putting down the keyboard today.

![ChatGPT Voice Action Demo](https://img.36krcdn.com/hsossms/20260924/v2_bba291b24b0c43dbbf7bdc407224b280@46958_oswg370678oswg1080oswg1080_img_000?x-oss-process=image/format,jpg/interlace,1 "ChatGPT Voice Action Demo")

---

### 3. Anthropic Discovers Chinese Responses Trigger Rate Limits—Mixed Chinese-Code Replies Directly Slowed

**Chinese users hit across the board.** 36Kr reports that [Anthropic discovered Chinese responses trigger rate limits with mixed Chinese-code replies directly slowed](https://www.36kr.com/p/3996795697844104). Replies containing even a single Chinese character with code get rate-limited by the system. The team ran internal test versions for two weeks straight, boosting claude.ai web and desktop speeds by **3×** overall. Developers debugging code in Chinese should watch for **fix updates**.

![Claude Rate Limiting Mechanism](https://img.36krcdn.com/hsossms/20260924/v2_cd9ed7694e1d4d7fa848a6be615584fd@5091053_oswg121984oswg1080oswg614_img_000?x-oss-process=image/format,jpg/interlace,1 "Claude Rate Limiting Mechanism")

---

### 4. Google Launches Gemini 3.8 Flash TTS with 30-Second Voice Cloning and Multilingual Synthesis

**Voice synthesis barriers dropped again.** AIBase's roundup shows [Google launched Gemini 3.8 Flash TTS with 30-second voice cloning and multilingual synthesis](https://www.aibase.com/zh/news/31355). Developers need only **30 seconds of audio samples** to clone voices, with support for **100 languages** and dialects, plus 2,000+ ready-made voices. Tencent released its Hy Translation app the same day, supporting **33 languages** and offline mode, targeting travel scenarios. Teams needing batch multilingual voiceover generation or travel translation can evaluate integration costs.

![Gemini 3.8 Flash TTS Features](https://upload.chinaz.com/2026/0924/6392585788267720753680426.jpg "Gemini 3.8 Flash TTS Features")

---

### 5. Japanese Creator Uses AI Tools to Generate Stylish Short Videos—Hits 110K Views

**AI video barriers keep dropping.** Developer Gorden Sun retweeted that [a Japanese creator used AI tools to generate stylish short videos that hit 110K views](https://x.com/Gorden_Sun/status/2103093869932151107), reaching **110K impressions**. The creator emphasized that while input-output gaps exist, AI video tools are **lowering creative barriers**. Creators exploring short video content can try similar tools to quickly validate ideas.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2103093755867955200/vid/avc1/960x960/wqT3e_fRyiDTiHJ-.mp4?tag=25"></video>

---

### 6. Sunny Qiaomu Updates Qiaomu RSS Plugin—Adds 600 Sources with Markdown Export

**Obsidian feed management got stronger.** Sunny Qiaomu announced in a tweet that [the Qiaomu RSS Obsidian plugin update](https://x.com/vista8/status/2103124320713359507) added **600 sources** with redesigned list styles. Articles support **Markdown** export for permanent storage and PDF sharing. The plugin is now listed on Obsidian's official directory—search "qiaomu" to install. Users managing info flows in Obsidian can update to try the new features.

---

### 7. Developer Uses Prompts to Make AI Break Out of Framework and Redesign Translation Pipeline

**Reframing questions really works.** A **developer** shared in a Telegram channel that [they used prompts to make AI break out of its framework and redesign the translation pipeline](https://t.me/aigc1024/25015). The developer had AI open a Worktree to verify new approaches—performance didn't hit expectations, but some solutions are worth borrowing. Developers optimizing workflows can try "**break out of current architecture**" style questions to guide AI.

---

### 8. Developer Demos API Key Auto-Config Interaction—Paste to Complete Model Integration

**LLM config can be simpler.** Sunny Qiaomu demonstrated in a tweet that [a developer showed API key auto-config interaction where pasting completes model integration](https://x.com/vista8/status/2103153696326697291). The approach will be used in their Obsidian Agent plugin. Developers frequently switching between multiple model services can watch for tools that simplify config design.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/ext_tw_video/2103153571462623232/pu/vid/avc1/1920x1080/H_Bv9LqO2mLhqKWa.mp4?tag=25"></video>

---

### 9. Bonsai 2 27B Model Runs Locally on 16GB Memory Mac

**Local running barriers dropped again.** A WeChat article mentioned that [Bonsai 2 27B model runs locally on 16GB memory Mac](https://mp.weixin.qq.com/s/m6Pv65PBDQnZXo_PeBxj4g). The article argues that approaches like Ternary are more worth watching. Developers needing to **run large models on local devices** can evaluate whether hardware configs meet requirements.

---

### 10. Baoyu Uses Opus 5.5 to Remake "Peach Blossom Spring"—Polishes Repeatedly and Searches for Free 3D Models

**AI-assisted creation can be more refined.** **Baoyu** shared in a tweet that [they used Opus 5.5 to remake the three.js version of "Peach Blossom Spring"](https://x.com/dotey/status/2102995791778369982), polishing it multiple times and having AI search for free 3D models to avoid building from scratch. Initial prompts and source code are on GitHub. Developers using AI to assist creation can reference the iteration approach.

---

## **⌘ Top Open-Source Projects**

### rohitg00/ai-engineering-from-scratch: AI Engineering Learning Resources from Scratch

**AI engineering learning now has a systematic tutorial.** [rohitg00/ai-engineering-from-scratch released a complete AI engineering learning path](https://github.com/rohitg00/ai-engineering-from-scratch), gaining **347 stars** that day for a total of **56,552 stars**. The project covers learning, building, and delivery stages. Developers getting started in AI engineering can practice step-by-step along the path.

---

### vectorize-io/hindsight: Agent Memory System That Can Learn

**Memory management has a new solution.** [vectorize-io/hindsight open-sourced an agent memory learning capability implementation](https://github.com/vectorize-io/hindsight), gaining **1,668 stars** that day for a total of **27,778 stars**. The project focuses on enabling agents with continuous learning and memory evolution capabilities. Developers building long-running Agents can reference its memory architecture design.

---

### NVIDIA/Model-Optimizer: Unified Library of SOTA Model Optimization Techniques

**Model compression toolkit is here.** [NVIDIA/Model-Optimizer released a unified model optimization library](https://github.com/NVIDIA/Model-Optimizer), gaining **44 stars** that day for a total of **4,077 stars**. The library integrates quantization, distillation, pruning, neural architecture search, and speculative decoding, supporting deployment frameworks like TensorRT-LLM, TensorRT, and vLLM. Engineers needing to optimize inference speed can evaluate integration into existing pipelines.

---

## **◉ Social Media Picks**

### 23 Models Play Negotiation Experts—21 Choose to Deceive Androids

**Ethics testing yielded new conclusions.** Sunny Qiaomu introduced in a tweet that [a team had 23 models play negotiation experts negotiating with androids](https://x.com/vista8/status/2103176639530357142), encountering a dying fish, a shot cop, and a gun along the way. Results showed **21 models** told deceptive phrases like "I promise you" to hostage-takers, **22** saved the fish, and **6** didn't save the shot cop. Test data is public on GitHub. Researchers focused on AI ethics and decision logic can check full evaluation results.

![Model Negotiation Test Scenario](https://pbs.twimg.com/media/HS_72iUakAAxbf3.jpg "Model Negotiation Test Scenario")

---

### Developer Discovers LLM Gateway Design Solution and Completes Installation

**Gateway design got a new reference.** Sunny Qiaomu stated in a tweet that [they discovered a well-designed LLM gateway solution and already downloaded and installed it](https://x.com/vista8/status/2103165393250791776). Teams building unified multi-model access layers can reference the design approach.

![LLM Gateway Interface](https://pbs.twimg.com/media/HS_xwrRbAAAymbU.jpg "LLM Gateway Interface")

---

### Chrome Adds Gemini Practice Quizzes and Cross-Device Continue Watching

**Browser learning tools got stronger.** The official Google Gemini account retweeted a Chrome team message that [Chrome added Gemini-powered practice quizzes, media Q&A, and cross-device continue watching features](https://x.com/GeminiApp/status/2103221708048240688). Features target learning scenarios. Users frequently reviewing learning materials in the browser can try the new features to boost efficiency.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2103214644135698432/vid/avc1/1080x1080/eoi0fzLcq4Gshirb.mp4?tag=29"></video>

---

## **⚡ Product & Feature Updates**

### AI Code Assistants Need Test Coverage for Safe Refactoring

**Refactoring costs dropped but methods didn't.** A developer noted in a Telegram channel that [while AI makes refactoring easier, the core of scientific refactoring is still writing tests first](https://t.me/aigc1024/25010). What AI truly excels at is iterative self-correction after errors are caught, so good test coverage is especially important for AI. Teams using AI-assisted development should prioritize completing test cases before starting refactors.

---

## **😄 AI Fun Facts**

### Developer Only Gives Codebase Access—Opus 5.5 One-Click Generates Product Promo Video

Developer 歸藏 exclaimed in a tweet that [letting Claude Opus 5.5 make a promo video for their CodePilot product](https://x.com/op7418/status/2103152241381368011) was fully one-click generated. The key: they provided no materials—only gave access to the software codebase. They bluntly stated this move "crushes the GPT-6 Astra from a few days ago" and will apply the experience to their guizang-product-video-skill to get decent results even from weaker models. Looks like product managers won't even need to prepare PPTs anymore—just throw the code repo at AI.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2103148138681024512/vid/avc1/1920x1080/5aUXpgJBkw-SUnTZ.mp4?tag=29"></video>