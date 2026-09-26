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
## **Today's Summary**

```
Xiaomi's MiMo-V3 slashes million-token prefill compute to one-fifth, ChatGPT voice mode now checks emails and edits calendars, Claude's Chinese-triggered rate limits drag down all code responses.
Long-context costs, voice operations, and multilingual handling just broke through simultaneously—agents are shifting from chat tools to assistants that actually get work done.
Today: check the top three for cost and speed updates, hit the open-source section for memory systems and gateway solutions, then test if voice mode can replace some daily ops.
```

## **🔥 Today's Top 10**

### 1. Xiaomi MiMo-V3 Architecture Leaked Early, Long-Input Prefill Compute Drops to One-Fifth

**Long-context costs compressed further.** Per 36Kr's report, [Xiaomi's MiMo-V3 architecture leaked early, cutting long-input prefill compute to one-fifth](https://www.36kr.com/p/3996783462780800). At **1 million tokens** context, prefill compute drops to roughly **1/5**, KV Cache occupancy to roughly **1/4.5**. The architecture references multiple DeepSeek achievements, targeting multi-turn Agent scenarios. Developers can now handle ultra-long conversations with fewer resources without sacrificing retrieval accuracy.

![Xiaomi MiMo-V3 Architecture Diagram](https://img.36krcdn.com/hsossms/20260924/v2_182202a1df594f5b9b1511d7cdb2fd51@000000_oswg590126oswg1000oswg1366_img_000?x-oss-process=image/format,jpg/interlace,1 "Xiaomi MiMo-V3 Architecture Diagram")

---

### 2. ChatGPT Voice Mode Gains Operational Capability—Just Talk to Check Emails and Edit Calendars

**Voice just started doing things.** 36Kr reports [ChatGPT voice mode now supports operational functions](https://www.36kr.com/p/3997049599102855). Users can check emails, adjust meetings, create presentations, and build websites via voice commands. The new app rolled out globally today, and **GPT-6 full series models** are voice-enabled. If you handle routine tasks frequently, try putting the keyboard down today.

![ChatGPT Voice Operation Demo](https://img.36krcdn.com/hsossms/20260924/v2_bba291b24b0c43dbbf7bdc407224b280@46958_oswg370678oswg1080oswg1080_img_000?x-oss-process=image/format,jpg/interlace,1 "ChatGPT Voice Operation Demo")

---

### 3. Anthropic Finds Chinese Responses Trigger Rate Limits—Code Mixed With Chinese Characters Gets Throttled Instantly

**Chinese users hit across the board.** 36Kr reports [Anthropic discovered Chinese responses trigger rate limits—any code reply with Chinese characters gets throttled](https://www.36kr.com/p/3996795697844104). A single Chinese character in a response causes the system to slow down any code-containing replies. The team ran internal test versions non-stop for two weeks, achieving an overall **3x speedup** for claude.ai web and desktop clients. Developers debugging code in Chinese should watch for the **fix timeline**.

![Claude Rate Limit Mechanism Diagram](https://img.36krcdn.com/hsossms/20260924/v2_cd9ed7694e1d4d7fa848a6be615584fd@5091053_oswg121984oswg1080oswg614_img_000?x-oss-process=image/format,jpg/interlace,1 "Claude Rate Limit Mechanism Diagram")

---

### 4. Google Releases Gemini 3.8 Flash TTS With 30-Second Voice Cloning and Multilingual Synthesis

**Voice synthesis barrier just dropped again.** AIBase's roundup shows [Google released Gemini 3.8 Flash TTS supporting 30-second voice cloning and multilingual synthesis](https://www.aibase.com/zh/news/31355). Developers need only a **30-second audio sample** to clone a voice, with support for **100 languages** and dialects plus 2,000+ ready-made voices. Tencent launched the Huyi Translation app the same day, supporting **33 languages** plus offline mode, targeting travel scenarios. Teams needing bulk multilingual voiceovers or travel translation should evaluate integration costs.

![Gemini 3.8 Flash TTS Feature Diagram](https://upload.chinaz.com/2026/0924/6392585788267720753680426.jpg "Gemini 3.8 Flash TTS Feature Diagram")

---

### 5. Japanese Creator Uses AI Tools to Generate Cool-Style Short Videos, Gets 110K Impressions

**AI video barrier keeps falling.** Developer Gorden Sun retweeted [Japanese creator uses AI tools to generate cool-style short videos, gets 110K impressions](https://x.com/Gorden_Sun/status/2103093869932151107), reaching **110K impressions**. The creator emphasized that despite input-output differences, AI video tools are **lowering creation barriers**. Creators exploring short-form video content can try similar tools to quickly validate ideas.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2103093755867955200/vid/avc1/960x960/wqT3e_fRyiDTiHJ-.mp4?tag=25"></video>

---

### 6. Xiangyang Qiaomu Updates Qiaomu RSS Plugin, Adding 600 Sources and Markdown Export

**Obsidian feed management just got stronger.** Xiangyang Qiaomu announced [Qiaomu RSS Obsidian plugin update](https://x.com/vista8/status/2103124320713359507), adding **600 sources** with a redesigned list style. Articles support export to **Markdown** for permanent storage and can be exported to PDF for sharing. The plugin is now in Obsidian's official directory—search "qiaomu" to install. Obsidian users managing information flows should update and try the new features.

---

### 7. Developer Uses Prompt to Make AI Break Out of Framework and Redesign Translation Workflow

**Reframing the question actually works.** A **developer** shared on the Telegram channel: [developer uses prompt to make AI break out of framework and redesign translation workflow](https://t.me/aigc1024/25015). The developer had the AI open a worktree to verify the new approach. While performance didn't meet expectations, some solutions are worth borrowing. Developers optimizing workflows can try using "**step outside the current architecture**" prompts to guide AI.

---

### 8. Developer Demos Automatic API Key Configuration—Paste to Complete Model Integration

**LLM configuration can be simpler.** Xiangyang Qiaomu demonstrated [developer demos automatic API key configuration interaction—paste to complete model integration](https://x.com/vista8/status/2103153696326697291). The solution will be used in their Obsidian Agent plugin. Developers frequently switching between multiple model services should watch for these simplified configuration tool designs.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/ext_tw_video/2103153571462623232/pu/vid/avc1/1920x1080/H_Bv9LqO2mLhqKWa.mp4?tag=25"></video>

---

### 9. Bonsai 2 27B Model Runs Locally on 16GB RAM Mac

**Local execution barrier dropped again.** A public account article mentioned [Bonsai 2 27B model can run locally on 16GB RAM Mac](https://mp.weixin.qq.com/s/m6Pv65PBDQnZXo_PeBxj4g). The article suggests approaches like Sanyuan's are more worthy of attention. Developers needing to **run large models on local devices** should assess whether their hardware meets requirements.

---

### 10. Baoyu Uses Opus 5.5 to Remake "Peach Blossom Spring," Iterating Repeatedly and Searching for Free 3D Models

**AI-assisted creation can be more refined.** **Baoyu** shared [using Opus 5.5 to remake the three.js version of "Peach Blossom Spring"](https://x.com/dotey/status/2102995791778369982), polishing it multiple times and having the AI search for free 3D models to avoid building from scratch. The initial prompt and source code are on GitHub. Developers using AI to assist creation can reference their iteration approach.

---

## **⌘ Top Open Source Projects**

### rohitg00/ai-engineering-from-scratch: AI Engineering Learning Resources From Scratch

**AI engineering learning now has a systematic tutorial.** [rohitg00/ai-engineering-from-scratch published a complete AI engineering learning path](https://github.com/rohitg00/ai-engineering-from-scratch), gaining **347 Stars** that day for a total of **56,552 Stars**. The project covers three stages: learning, building, and delivery. Developers getting started with AI engineering can follow the path step-by-step.

---

### vectorize-io/hindsight: Agent Memory System Capable of Learning

**Memory management has a new solution.** [vectorize-io/hindsight open-sourced an implementation of agent memory learning capability](https://github.com/vectorize-io/hindsight), gaining **1,668 Stars** that day for a total of **27,778 Stars**. The project focuses on enabling agents with continuous learning and memory evolution capabilities. Developers building long-running agents can reference its memory architecture design.

---

### NVIDIA/Model-Optimizer: Unified SOTA Model Optimization Techniques Library

**Model compression toolkit arrived.** [NVIDIA/Model-Optimizer published a unified model optimization techniques library](https://github.com/NVIDIA/Model-Optimizer), gaining **44 Stars** that day for a total of **4,077 Stars**. The library integrates quantization, distillation, pruning, neural architecture search, and speculative decoding, supporting deployment frameworks like TensorRT-LLM, TensorRT, and vLLM. Engineers needing to optimize inference speed should evaluate integration into existing workflows.

---

## **◉ Social Media Highlights**

### 23 Models Play Negotiation Experts, 21 Choose to Deceive Androids

**Ethics test produced new conclusions.** Xiangyang Qiaomu introduced [a team had 23 models play negotiation experts negotiating with an android](https://x.com/vista8/status/2103176639530357142), encountering a dying fish, a shot police officer, and a gun along the way. Results show **21 models** told the hostage-taker deceptive phrases like "I promise you," **22** saved the fish, and **6** didn't save the shot officer. Test data is public on GitHub. Researchers focused on AI ethics and decision logic can check the full evaluation results.

![Model Negotiation Test Scenario](https://pbs.twimg.com/media/HS_72iUakAAxbf3.jpg "Model Negotiation Test Scenario")

---

### Developer Finds LLM Gateway Design Solution and Completes Installation

**Gateway design has a new reference.** Xiangyang Qiaomu stated [discovered a well-designed LLM gateway solution and already downloaded and installed it](https://x.com/vista8/status/2103165393250791776). Teams building unified multi-model access layers can reference this solution's design approach.

![LLM Gateway Interface](https://pbs.twimg.com/media/HS_xwrRbAAAymbU.jpg "LLM Gateway Interface")

---

### Chrome Adds Gemini Practice Quizzes and Cross-Device Resume Features

**Browser learning tools just got stronger.** Google Gemini's official account retweeted Chrome team news: [Chrome added Gemini-powered practice quizzes, media Q&A, and cross-device resume features](https://x.com/GeminiApp/status/2103221708048240688). Features target learning scenarios. Users frequently reviewing study materials in the browser can try the new features to boost efficiency.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2103214644135698432/vid/avc1/1080x1080/eoi0fzLcq4Gshirb.mp4?tag=29"></video>

---

## **⚡ Product and Feature Updates**

### AI Code Assistants Need Test Coverage to Safely Refactor

**Refactoring got cheaper, but the method stayed the same.** A developer pointed out on the Telegram channel: [while AI makes refactoring easier, the core of scientific refactoring remains writing good tests first](https://t.me/aigc1024/25010). What AI truly excels at is repeatedly self-correcting after verification failures, so good test coverage is especially important for AI. Teams using AI to assist development should prioritize completing test cases before starting refactors.

---

## **😄 AI Fun Facts**

### Developer Gave Code Repo Access Only, Opus 5.5 One-Click Generated Product Promo Video

Developer 歸藏 exclaimed in a tweet: [had Claude Opus 5.5 make a promo video for their CodePilot product](https://x.com/op7418/status/2103152241381368011), fully one-click generated. The key: he provided no materials whatsoever, only access to the software code repository. He bluntly stated this move "crushes the GPT-6 Astra from a few days ago" and said he'd apply the experience to his guizang-product-video-skill to help weaker models get decent results too. Looks like product managers won't even need to prepare PowerPoints anymore—just toss the code repo at AI.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2103148138681024512/vid/avc1/1920x1080/5aUXpgJBkw-SUnTZ.mp4?tag=29"></video>