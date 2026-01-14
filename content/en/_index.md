---
linkTitle: AI Daily
title: AI Daily-AI资讯日报
breadcrumbs: false
next: /en/2026-01/2026-01-13
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
Okay, here's the final output, the fully translated and edited text:

## Quick Navigation

- [Today's AI News](#today-ai-news) - Latest Updates at a Glance

> **💡 Tip**: Want to experience the latest AI models mentioned in the article (Claude 4.5, GPT, Gemini 3 Pro) firsthand? No account? [**Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) is your go-to! Grab an account, get started in one minute, with worry-free after-sales.

## **Today's AI News**

### Just One Sentence
Google Veo 3.1 just got an upgrade, now supporting vertical screens and 4K, making the video generation arena even more competitive.

### 3 Keywords
#VideoGenerationUpgrade #ClaudeBreaksOut #SkillsEcosystemExplodes

---

## Top 10 Highlights 🔥

### 1. [Google Veo 3.1 Major Upgrade: Vertical Mode + 4K Arrives](https://x.com/GeminiApp/status/2011189020211245334)

Short video creators are absolutely thrilled today! Google's video generation model, Veo 3.1, finally listened to user demands—**vertical mode is officially live**, so no more manually cropping horizontal videos for TikTok. What's even wilder is the resolution, directly boosted to 1080p and 4K, and it's already available in Flow. Its expressive power has also been beefed up, with higher fidelity to reference images. Gemini Plus/Pro/Ultra members can dive in right now. This latest update from Google is clearly gunning for the short video market.

![Image](https://linux.do/uploads/default/optimized/4X/a/4/f/a4fb32a7c980c2e6ba66eae337d44fbeb776f4dd_2_330x500.jpeg)

---

### 2. [Claude Code Founder Reveals: How Cowork Was Born](https://x.com/dotey/status/2011090515429614031)

This is the story of a product transforming from a "programmer's toy" into a "tool for everyone." Boris Cherny, the founder of Claude Code, shared an experience: he released the internal beta in late 2024, and the very next day, he found his colleagues already using it to write code. Just a few months later, **data scientists, designers, finance, and sales** were all on board—some were using it to control ovens, others to restore wedding photos. Seizing this momentum, Anthropic launched Cowork, packaging AI Agent capabilities into a format accessible to everyday people. They say **user behavior is the best product manager**, and that couldn't be more accurate.

---

### 3. [NotebookLM Skill Upgrade: Generate Podcasts, PPTs, Mind Maps with One Sentence](https://x.com/vista8/status/2011028677187014891)

Using NotebookLM used to mean manually asking questions one by one, but now, with this Skill installed, **the entire NotebookLM has been brought to the command line**. You can generate mind maps, audio podcasts, and PPTs with just one sentence, and it can even automatically interpret YouTube videos. Here's an even cooler trick: first ask, "What questions should I ask to cover all content?", then let it recursively ask questions, and finally write to Markdown. Even unwatched videos can be summarized pretty well. The knowledge base game just got another major upgrade.

![Image](https://pbs.twimg.com/media/G-iY17XX0AAVgsr.jpg)

---

### 4. [Claude Code Skills User Guide: From Beginner to Expert](https://linux.do/t/topic/1444241)

So, how exactly do Skills and Commands work? This post breaks it down clearly. **Skills are smart, script-enabled plugins** that can be triggered automatically, while Commands are pure prompt-based workflows requiring manual invocation. User-level Skills reside in `~/.claude/skills/`, and project-level ones go in the project root. Once skill-creator is installed, you can have Claude Code whip up new Skills for you with a single sentence. Plus, there's an mcp-builder to help you create MCP services, like connecting to MySQL. The entire ecosystem is increasingly morphing into a plugin marketplace.

---

### 5. [OpenCode Slow Startup? Method to Optimize from 29s to 3s](https://linux.do/t/topic/1443795)

If your OpenCode is taking ages to start up, the issue might be with your plugin configuration. The author discovered that `package.json` was using `latest` version numbers, which caused **plugins to be re-downloaded every single time it launched**. The fix is super simple: swap `latest` for specific version numbers, then run `bun install`. Startup time plummeted from 29 seconds directly to a snappy 3-5 seconds. As a bonus, a few handy plugins were shared: oh-my-opencode (multi-Agent orchestration), opencode-antigravity-auth (using Gemini 3 Pro), dynamic context pruning, and more.

---

### 6. [Personal Workflow Open Source: 300+ Super Intelligent Development Experts + Hooks Optimization System](https://linux.do/t/topic/1443939)

This project elevates Claude Code from a "general chat assistant" to a "professional development partner who truly understands your project." The core innovation lies in its **Hooks system, which automatically executes intelligent operations throughout the conversation lifecycle**: detecting project types and recommending Skills upon startup, and forcibly updating documentation after code modifications. It boasts 300+ expert agents built-in, covering backend, frontend, testing, security, architecture, and DevOps. Running local inference with Ollama, it offers zero-config startup. This is perfect for developers eager to push Claude Code to its absolute limits.

![Image](https://linux.do/uploads/default/optimized/4X/1/6/4/164185706c5a30debbed0287b814154035d594b6_2_690x354.png)

---

### 7. [bm.md: Markdown Editor Supporting MCP and Skills](https://x.com/op7418/status/2011073463755424065)

Good news for public account layout enthusiasts! bm.md, this Markdown editor, is incredibly polished. **Image adding is smooth as silk, and it comes with beautiful built-in theme styles**. Crucially, it supports MCP and Skills, allowing AI to automatically assist with layout. The goal is to let content creators focus purely on writing, without having to fuss over WeChat Official Account layout headaches. Built on TanStack Start, it's currently a preview version, so feel free to raise issues and let the AI fix them.

![Image](https://pbs.twimg.com/media/G-jDyh0a6AAXI9c?format=jpg&name=orig)

---

### 8. [DeepSeek Web Interface Refreshed: Smoother and More Rounded](https://linux.do/t/topic/1444275)

DeepSeek's web interface got a stealthy makeover! It was the old UI during the day, but a late-night visit revealed a **smoother, more rounded interface**. DeepSeek quietly updated its web design, making the overall visual much more modern. While the functionality remains the same, the user experience has definitely leveled up. Domestic large models are clearly putting more thought into product details.

![Image](https://linux.do/uploads/default/optimized/4X/6/3/b/63bbc2ed47557b5a1ba36de71b45d1438b310558_2_690x316.png)

---

### 9. [Demystifying Claude Cowork: It's Just a 20G Linux Container + Claude Code](https://linux.do/t/topic/1444268)

Someone finally peeled back the layers of Cowork's underlying implementation: it's essentially **a 20G Linux container environment with AppleVM, plus 200M of Claude Code**. During initialization, it downloads a rootfs.img.zst image. So, at its core, it's a re-skinned combination of existing products, no magic involved. But hey, being able to integrate these components into a product that ordinary people can actually use is valuable in itself. Demystifying the tech is one thing, but you've got to hand it to their productization skills.

![Image](https://linux.do/uploads/default/optimized/4X/a/e/9/ae9852467b91ed6c697bb90da33d826df5b2b413_2_690x125.png)

---

### 10. [Google's Market Cap Terrifying Growth: Only 10.5% Away from Nvidia](https://linux.do/t/topic/1444252)

Google's market cap has absolutely soared past $4 trillion, putting it just 10.5% away from overtaking Nvidia. Less than a week ago, it leapfrogged Apple to become the world's second-largest company, and now it's hot on the heels of "Old Huang" (Nvidia's CEO). In the midst of the AI wave, **the search giant is actively redefining its value with Gemini**. Stock price is the market's vote on the future, and it looks like Wall Street is seriously buying into Google's AI transformation.

![Image](https://linux.do/uploads/default/optimized/4X/6/e/f/6ef02493f94efc7cf175bfd958cf500395248d0b_2_690x135.png)

---

## Worth Noting 📌

- **[Product]** [CherryStudio + OpenWebUI Two-in-One Solution](https://linux.do/t/topic/1444103) - Offering a localized interface, model billing, and native Gemini support, this is the ultimate solution for hoarders.
- **[Open Source]** [Social Media Sentiment Analysis Skills Open Source](https://linux.do/t/topic/1443713) - This project lets you use Claude Skills to create a simplified "micro-sentiment" tool, automatically analyzing platforms like Douyin and Weibo.
- **[Product]** [X Opens Long-Form Post Publishing to Regular Members](https://x.com/vista8/status/2011145409230782784) - An optimized image upload Skill is now open source, supporting Markdown tags and browser persistence.
- **[Research]** [MiroThinker 1.5's Agent Compression Method](https://x.com/dotey/status/2011101836397384152) - This method involves stuffing 400 Tool Uses into a 256K context, where the Thought chain essentially becomes a dynamic summary.
- **[Business]** [Baichuan Open Source Medical Model Baichuan-M3](https://x.com/Gorden_Sun/status/2011091819023778177) - This model is fine-tuned based on Qwen3-235B, boasting a low hallucination rate.
- **[Other]** [Elon Musk's Alleged AI Tops Korean LOL Server](https://linux.do/t/topic/1444085) - Game AI is starting to get seriously fun, though 200ms latency remains a bottleneck.

---

## AI Fun Facts 😂

### [A Big Shot Friend Charged $140K in One Go, Set Up a 1000-Person Claude Team](https://linux.do/t/topic/1443871)

Today's most extravagant AI news: A big shot friend directly dropped $140,000 to set up a 1000-person Claude Team account. The comment section was flooded with calls of "Big boss, take me with you!" Seriously, these days, even AI subscriptions are turning into group buys 😂

![Image](https://linux.do/uploads/default/optimized/4X/4/7/d/47dfa40a99314a275f49bc8dfa6c93660dc4125c_2_690x398.jpeg)

---

## AI Trend Forecast 🔮

### Claude Skills Ecosystem is Poised for an Explosion
- **Prediction Time**: Q1 2025
- **Prediction Probability**: 80%
- **Prediction Basis**: Multiple Skills-related news items today ([NotebookLM Skill](https://x.com/vista8/status/2011028677187014891), [PPT Generation Skill](https://x.com/op7418/status/2011109939377516681), [300+ Expert Skills](https://linux.do/t/topic/1443939)) combined with Anthropic's official launch of Cowork to lower the barrier to entry, indicate that Skills are transitioning from developer tools to the mass market.

### Video Generation Models Will Support Longer Durations
- **Prediction Time**: Q2 2025
- **Prediction Probability**: 70%
- **Prediction Basis**: Today's [Veo 3.1 Upgrade](https://x.com/GeminiApp/status/2011189020211245334) primarily focuses on quality and format, suggesting the next big leap will likely be a breakthrough in duration. Currently, most mainstream models are capped at a few to a dozen seconds; whoever first breaks the minute-level barrier will undoubtedly seize the market.

### AI Agents Will Deepen Their Reach into Healthcare
- **Prediction Time**: Q1-Q2 2025
- **Prediction Probability**: 75%
- **Prediction Basis**: [Claude Code users are already analyzing DNA and medical records](https://x.com/dotey/status/2011090515429614031), coupled with Anthropic's release of a HIPAA-compliant version, indicates that the compliance and professional barriers in healthcare scenarios are actively being dismantled.

---

## Related Questions ❓

### How to Experience Claude Code and Cowork?

Claude Code requires a Claude Pro subscription ($20/month) to use, and Cowork is currently exclusive to Claude Max subscribers. For users in China, this might mean facing payment difficulties or account registration restrictions.

**Solution**: Head over to **[Aivora](https://aivora.cn)** to snag a ready-made account, with lightning-fast delivery and absolutely worry-free after-sales.
## Today's Summary

Google Veo 3.1 now supports vertical screens and 4K, meaning short video creators can finally ditch manual cropping.
Claude Skills' ecosystem is exploding, letting users generate podcasts, PPTs, and mind maps with just one sentence, upgrading the knowledge base game.
Today's theme is all about "lowering the barrier," as developer tools are transforming into products accessible to everyday users.

## Quick Navigation

- [Today's AI News](#today-ai-news) - Latest Updates at a Glance

> **💡 Tip**: Want to experience the latest AI models mentioned in the article (Claude 4.5, GPT, Gemini 3 Pro) firsthand? No account? [**Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) is your go-to! Grab an account, get started in one minute, with worry-free after-sales.

## Today's AI News

### Just One Sentence
Google Veo 3.1 just got an upgrade, now supporting vertical screens and 4K, making the video generation arena even more competitive.

### 3 Keywords
#VideoGenerationUpgrade #ClaudeBreaksOut #SkillsEcosystemExplodes

---

## Top 10 Highlights 🔥

### 1. [Google Veo 3.1 Major Upgrade: Vertical Mode + 4K Arrives](https://x.com/GeminiApp/status/2011189020211245334)

Short video creators are absolutely thrilled today! Google's video generation model, Veo 3.1, finally listened to user demands—**vertical mode is officially live**, so no more manually cropping horizontal videos for TikTok. What's even wilder is the resolution, directly boosted to 1080p and 4K, and it's already available in Flow. Its expressive power has also been beefed up, with higher fidelity to reference images. Gemini Plus/Pro/Ultra members can dive in right now. This latest update from Google is clearly gunning for the short video market.

![Image](https://linux.do/uploads/default/optimized/4X/a/4/f/a4fb32a7c980c2e6ba66eae337d44fbeb776f4dd_2_330x500.jpeg)

---

### 2. [Claude Code Founder Reveals: How Cowork Was Born](https://x.com/dotey/status/2011090515429614031)

This is the story of a product transforming from a "programmer's toy" into a "tool for everyone." Boris Cherny, the founder of Claude Code, shared an experience: he released the internal beta in late 2024, and the very next day, he found his colleagues already using it to write code. Just a few months later, **data scientists, designers, finance, and sales** were all on board—some were using it to control ovens, others to restore wedding photos. Seizing this momentum, Anthropic launched Cowork, packaging AI Agent capabilities into a format accessible to everyday people. They say **user behavior is the best product manager**, and that couldn't be more accurate.

---

### 3. [NotebookLM Skill Upgrade: Generate Podcasts, PPTs, Mind Maps with One Sentence](https://x.com/vista8/status/2011028677187014891)

Using NotebookLM used to mean manually asking questions one by one, but now, with this Skill installed, **the entire NotebookLM has been brought to the command line**. You can generate mind maps, audio podcasts, and PPTs with just one sentence, and it can even automatically interpret YouTube videos. Here's an even cooler trick: first ask, "What questions should I ask to cover all content?", then let it recursively ask questions, and finally write to Markdown. Even unwatched videos can be summarized pretty well. The knowledge base game just got another major upgrade.

![Image](https://pbs.twimg.com/media/G-iY17XX0AAVgsr.jpg)

---

### 4. [Claude Code Skills User Guide: From Beginner to Expert](https://linux.do/t/topic/1444241)

So, how exactly do Skills and Commands work? This post breaks it down clearly. **Skills are smart, script-enabled plugins** that can be triggered automatically, while Commands are pure prompt-based workflows requiring manual invocation. User-level Skills reside in `~/.claude/skills/`, and project-level ones go in the project root. Once skill-creator is installed, you can have Claude Code whip up new Skills for you with a single sentence. Plus, there's an mcp-builder to help you create MCP services, like connecting to MySQL. The entire ecosystem is increasingly morphing into a plugin marketplace.

---

### 5. [OpenCode Slow Startup? Method to Optimize from 29s to 3s](https://linux.do/t/topic/1443795)

If your OpenCode is taking ages to start up, the issue might be with your plugin configuration. The author discovered that `package.json` was using `latest` version numbers, which caused **plugins to be re-downloaded every single time it launched**. The fix is super simple: swap `latest` for specific version numbers, then run `bun install`. Startup time plummeted from 29 seconds directly to a snappy 3-5 seconds. As a bonus, a few handy plugins were shared: oh-my-opencode (multi-Agent orchestration), opencode-antigravity-auth (using Gemini 3 Pro), dynamic context pruning, and more.

---

### 6. [Personal Workflow Open Source: 300+ Super Intelligent Development Experts + Hooks Optimization System](https://linux.do/t/topic/1443939)

This project elevates Claude Code from a "general chat assistant" to a "professional development partner who truly understands your project." The core innovation lies in its **Hooks system, which automatically executes intelligent operations throughout the conversation lifecycle**: detecting