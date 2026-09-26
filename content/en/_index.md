---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/9/25
breadcrumbs: false
next: /en/2026-09/2026-09-25
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
## **Today's Summary**

```
Xiaomi MiMo-V3 slashes million-token prefill compute to one-fifth, ChatGPT voice mode now checks emails and edits calendars, Claude's Chinese response rate limiting drags down all code replies.
Long-context cost, voice operations, and multilingual processing are breaking through simultaneously—agents are evolving from chat tools into assistants that actually get work done.
Today, check the top three focus items first to confirm cost and speed changes, then hit the open-source section for memory systems and gateway solutions, and finally test whether voice mode can replace some daily operations.
```

## **🔥 Today's Focus TOP 10**

### 1. Xiaomi MiMo-V3 architecture leaked early—long-input prefill compute drops to one-fifth

**Long-context cost gets squeezed again.** [Xiaomi MiMo-V3 architecture leaked early, reducing long-input prefill compute to one-fifth](https://www.36kr.com/p/3996783462780800), according to 36Kr. With **1 million tokens** of context, prefill compute drops to about **1/5** and KV Cache occupancy falls to roughly **1/4.5**. The architecture references multiple DeepSeek breakthroughs and targets multi-turn Agent scenarios. Developers can now handle ultra-long conversations with fewer resources without sacrificing retrieval precision.

![Xiaomi MiMo-V3 Architecture Diagram](https://img.36krcdn.com/hsossms/20260924/v2_182202a1df594f5b9b1511d7cdb2fd51@000000_oswg590126oswg1000oswg1366_img_000?x-oss-process=image/format,jpg/interlace,1 "Xiaomi MiMo-V3 Architecture Diagram")

---

### 2. ChatGPT voice mode gains operational capabilities—check emails and edit calendars just by speaking

**Voice is now hands-on.** [ChatGPT voice mode now supports operational functions](https://www.36kr.com/p/3997049599102855), 36Kr reports. Users can check emails, adjust meetings, create presentations, and build websites through voice commands. The new app started rolling out globally today, and **GPT-6 series models** are all voice-enabled. If you're handling daily tasks frequently, try putting down the keyboard today.

![ChatGPT Voice Operations Demo](https://img.36krcdn.com/hsossms/20260924/v2_bba291b24b0c43dbbf7bdc407224b280@46958_oswg370678oswg1080oswg1080_img_000?x-oss-process=image/format,jpg/interlace,1 "ChatGPT Voice Operations Demo")

---

### 3. Anthropic discovers Chinese responses trigger rate limiting—mixed Chinese-code replies get slowed down directly

**Chinese users hit across the board.** [Anthropic discovers Chinese responses trigger rate limiting, directly slowing down Chinese-code mixed replies](https://www.36kr.com/p/3996795697844104), 36Kr reports. Any response containing even a single Chinese character gets rate-limited when it includes code. The official team ran their internal test build continuously for two weeks and boosted claude.ai web and desktop overall speed by **3x**. Developers debugging code in Chinese can track upcoming **fix progress**.

![Claude Rate Limiting Mechanism Diagram](https://img.36krcdn.com/hsossms/20260924/v2_cd9ed7694e1d4d7fa848a6be615584fd@5091053_oswg121984oswg1080oswg614_img_000?x-oss-process=image/format,jpg/interlace,1 "Claude Rate Limiting Mechanism Diagram")

---

### 4. Google launches Gemini 3.8 Flash TTS with 30-second voice cloning and multilingual synthesis

**Voice synthesis barrier drops again.** [Google launches Gemini 3.8 Flash TTS with 30-second voice cloning and multilingual synthesis](https://www.aibase.com/zh/news/31355), according to AIBase. Developers need just a **30-second audio sample** to clone voices, with support for **100 languages** and dialects plus 2,000+ ready-made voices. Tencent released its Hy Translation App the same day, supporting **33 languages** with offline mode, targeting travel scenarios. Teams needing batch multilingual voiceovers or travel translation can assess integration costs.

![Gemini 3.8 Flash TTS Feature Diagram](https://upload.chinaz.com/2026/0924/6392585788267720753680426.jpg "Gemini 3.8 Flash TTS Feature Diagram")

---

### 5. Japanese creator uses AI tools to generate cool-style short video—gets 110K impressions

**AI video barrier keeps dropping.** Developer Gorden Sun retweeted [a Japanese creator using AI tools to generate a cool-style short video that got 110K impressions](https://x.com/Gorden_Sun/status/2103093869932151107), reaching **110K impressions**. The creator emphasized that although input and output differ, AI video tools are **lowering the creation barrier**. Creators exploring short-video content can try similar tools to quickly validate ideas.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2103093755867955200/vid/avc1/960x960/wqT3e_fRyiDTiHJ-.mp4?tag=25"></video>

---

### 6. Xiangyangqiaomu updates Qiaomu RSS plugin—adds 600 sources and Markdown export support

**Obsidian information source management gets another boost.** Xiangyangqiaomu announced [Qiaomu RSS Obsidian plugin update](https://x.com/vista8/status/2103124320713359507), adding **600 sources** with a redesigned list style. Articles support export as **Markdown** for permanent storage and PDF sharing. The plugin is now available on Obsidian's official store—search "qiaomu" to install. Users managing information flows in Obsidian can update to try the new features.

---

### 7. Developer uses prompts to make AI break out of framework and redesign translation workflow

**Different phrasing really works.** **A developer** shared in a Telegram channel [how prompts made AI break out of the framework to redesign the translation workflow](https://t.me/aigc1024/25015). The developer had AI open a Worktree to validate new approaches; while performance didn't meet expectations, some solutions are worth borrowing. Developers optimizing workflows can try using "**break out of current architecture**" style questions to guide AI.

---

### 8. Developer demonstrates auto-configuration API key interaction—paste to complete model integration

**Large model configuration can be simpler.** Xiangyangqiaomu demonstrated [auto-configuration API key interaction where pasting completes model integration](https://x.com/vista8/status/2103153696326697291). The approach will be used in their Obsidian Agent plugin. Developers frequently switching between multiple model services can follow these simplified configuration tool designs.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/ext_tw_video/2103153571462623232/pu/vid/avc1/1920x1080/H_Bv9LqO2mLhqKWa.mp4?tag=25"></video>

---

### 9. Bonsai 2 27B model runs locally on 16GB memory Mac

**Local running barrier drops again.** A public account article mentions [Bonsai 2 27B model can run locally on 16GB memory Mac](https://mp.weixin.qq.com/s/m6Pv65PBDQnZXo_PeBxj4g). The article notes that approaches like ternary quantization deserve more attention. Developers needing to **run large models on local devices** can assess whether their hardware meets the requirements.

---

### 10. Baoyu remakes "Peach Blossom Spring" with Opus 5.5—repeatedly polishing and searching for free 3D models

**AI-assisted creation can be more refined.** **Baoyu** shared [remaking the three.js version of "Peach Blossom Spring" with Opus 5.5](https://x.com/dotey/status/2102995791778369982), polishing it repeatedly and having AI search for free 3D models to avoid building from scratch. Initial prompts and source code are on GitHub. Developers using AI-assisted creation can reference this iteration approach.

---

## **⌘ Open Source TOP Projects**

### rohitg00/ai-engineering-from-scratch: AI engineering learning resources from scratch

**AI engineering learning has a systematic tutorial.** [rohitg00/ai-engineering-from-scratch published a complete AI engineering learning path](https://github.com/rohitg00/ai-engineering-from-scratch), gaining **347 Stars** that day for a total of **56,552 Stars**. The project covers learning, building, and delivery phases. Developers starting in AI engineering can practice step by step along this path.

---

### vectorize-io/hindsight: Agent memory system that can