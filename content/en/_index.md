---
linkTitle: AI Daily
title: AI Daily-AI资讯日报
breadcrumbs: false
next: /en/2026-03/2026-03-14
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
USER MESSAGE BEGIN ---

I need you to translate and edit this Chinese tech newsletter into English following specific rules about bracket content, topic-first restructuring, and style guidelines.

--- USER MESSAGE END ---

## **Today's Summary**

```
Claude's million-token context officially launched at no extra cost, with 78% recall crushing GPT-5.4's 36%, capable of processing 600-page PDFs in a single request.
xAI down to 2 founders, Musk admits "we built it wrong from the start," urgently poaching talent from Cursor to stop the bleeding.
Chrome 146 ships WebMCP natively, turning webpages into Agent interfaces—browser automation no longer needs third-party extensions.
```

## ⚡ Quick Navigation

- [📰 Today's AI News](#todays-ai-news) - Latest updates at a glance

> 💡 **Tip**: Want early access to the latest AI models mentioned here (Claude 4.5, GPT, Gemini 3 Pro)? No account? Grab one at [**Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content)—instant setup, hassle-free support.

## **Today's AI News**

### **👀 One-Liner**
Claude's million-token context launches free, xAI hemorrhages founders down to 2, Chrome 146 lets Agents control your browser natively.

### **🔑 3 Keywords**
#ContextRevolution #xAICrisis #BrowserAgent

---

## **🔥 Top 5 Stories**

### 1. [Claude Opus 4.6 and Sonnet 4.6 Million-Token Context Now Live—No Price Hike](https://claude.com/blog/1m-context-ga)

Previously, hitting 200K tokens meant paying extra. Now you get a full million tokens at the same price. Opus 4.6 runs $5 input / $25 output per million tokens; Sonnet 4.6 is $3/$15—no per-token markup regardless of context length.

The real win: you can now cram 600-page PDFs into a single request (previously capped at 100 pages), and rate limits won't throttle you for longer requests. Opus 4.6 achieves 78.3% recall at million-token length, demolishing GPT-5.4's 36.6%. Cognition (the company behind Devin) reports that large code diffs previously required batch processing—now they fit in one shot, and code review quality skyrockets. Claude Code's Max and Team users get million-token context by default, dramatically reducing conversation compression and preserving way more history.

![image](https://pbs.twimg.com/media/HDTovvJaMAI8jWP?format=png&name=orig)

---

### 2. [Chrome 146 Natively Supports WebMCP—Agents Can Now Control Your Browser Directly](https://x.com/Gorden_Sun/status/2032839325235425310)

Previously, getting AI to control your browser meant spinning up a separate Chrome instance or installing third-party extensions. Chrome 146 bakes WebMCP right in. Webpages themselves become MCP Servers—frontend JavaScript transforms into an Agent interface without needing a separate Python/Node backend.

Compared to the old Chrome DevTools Protocol approach, WebMCP burns fewer tokens and nails accuracy. As long as sites don't block you, general web automation is now trivial for Agents. Enable it: open `chrome://flags/#enable-webmcp-testing`, flip the switch.

![image](https://pbs.twimg.com/media/HDYYHvVa0AArh-A?format=jpg&name=orig)

---

### 3. [xAI Bloodbath: 12 Co-Founders Down to 2, Musk Admits "We Built It Wrong From Day One"](https://x.com/dotey/status/2032588861063168334)

Musk went public this week on X: xAI was "built wrong from the start and we're rebuilding from scratch." Co-founder Zihang Dai quit this week; Guodong Zhang told colleagues he's leaving too. Add in Jimmy Ba, Tony Wu, Greg Yang, Toby Pohlen and others who already walked, and of the 12 co-founders at launch in 2023, only Manuel Kroiss and Ross Nordeen remain.

The immediate culprit: xAI's AI coding product flopped. Grok chatbot and coding tools never gained traction with paying users—they're miles behind Claude Code and Codex. Musk parachuted in management from SpaceX and Tesla to audit work and fire underperformers. Plot twist: Musk promoted ex-DeepMind researcher Toby Pohlen to lead the digital agents initiative last month, calling it the company's "most critical direction." Pohlen bailed 16 days later.

Meanwhile, xAI is desperately restocking. They just poached Andrew Milich and Jason Ginsberg from AI coding darling Cursor—both report directly to Musk. Cursor's annualized revenue already hits $2 billion, making it the hottest shop in AI coding.

![image](https://pbs.twimg.com/media/HDU0M0BXUAAtdEt?format=png&name=orig)

---

### 4. [Google Maps Gets Major Overhaul: Ask Maps Conversational Q&A + Immersive 3D Navigation](https://blog.google/products-and-platforms/products/maps/ask-maps-immersive-navigation/)

Google Maps rolls out two flagship features: Ask Maps (conversational map queries) and Immersive Navigation (3D-first wayfinding). Ask Maps handles complex, multi-condition, personalized questions—like "My phone's dying, where can I charge without waiting in a coffee line?" It taps 300M+ locations and 500M+ user reviews, returning ETAs and real-world tips.

Immersive Navigation delivers a fresh 3D view reflecting actual buildings, overpasses, and terrain in real-time. Key intersections highlight lane markings, crosswalks, traffic lights, and parking signs. Smart zoom and transparent buildings help you anticipate tricky turns and lane changes—no more missed exits.

---

### 5. [Reverse-Engineering Claude's Interactive UI and Open-Source Implementation](https://michaellivs.com/blog/reverse-engineering-claude-generative-ui/)

This deep-dive reverse-engineers Claude's interactive UI: it's tool-calling under the hood, with UI components injected directly into the DOM for streaming renders—no iframe wrapper. To nail the rendering, it enforces strict UI rules (no gradients, no shadows, etc.).

The open-source take is simpler but clunkier—it uses iframes, killing real-time rendering and adding bloat, though it works across any LLM. Open-source repo: https://github.com/CopilotKit/OpenGenerativeUI

![image](https://pbs.twimg.com/media/HDYNVrUaMAQE1L9?format=jpg&name=orig)

---

## **📌 Worth Watching**

- **[Product]** [Codepilot Feishu Bridge Update](https://m.okjike.com/originalPosts/69b5259a25bae5661277f23a) - Now nearly matches Feishu's native plugin experience in chat: streaming output, card-style results, permission cards with buttons
- **[Product]** [Codex APP Gets Themes](https://x.com/Gorden_Sun/status/2032843686682439909) - Tech lives and dies by skins; there's one called "Absolutely"—clearly a jab at Claude
- **[Open Source]** [Reddit CLI Tool Launches](https://github.com/jackwener/rdt-cli) - Browse feeds, explore subreddits, search posts, read comment threads, export results, upvote/save/subscribe—all in your terminal
- **[Research]** [Wholembed v3: Ultra-High-Performance Multimodal Retrieval Model](https://mixedbread.com/blog/wholembed-v3) - Retrieves text, images, audio, video simultaneously; first LLM-scale model to beat BM25
- **[Product]** [Claude Now Generates Interactive Charts](https://x.com/Gorden_Sun/status/2032408187568275683) - Free users included; charts render live in chat

---

## **😄 AI Oddities**

### [360 Lobster Guardian Has Arrived](https://m.okjike.com/originalPosts/69b53b178b5d34000de1ce5c)

Can't hold it together 🤣 Even antivirus software is sweating in the AI era.

![image](https://cdnv2.ruguoapp.com/Flbwok-VDgZlC4ZO8Mx2jOj7m3q2v3.heic?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient/heic-exif/1/format/jpeg)

---

## **🔮 AI Trend Predictions**

### GPT-5 or Claude 5 Series Launch
- **Timeline**: Q2 2026
- **Confidence**: 70%
- **Rationale**: Claude's million-token rollout + xAI's meltdown signal heating competition. OpenAI and Anthropic are both accelerating; spring is historically their major update window.

### AI Agent Browser Control Becomes Standard
- **Timeline**: April 2026
- **Confidence**: 80%
- **Rationale**: Today's [Chrome 146 WebMCP news](https://x.com/Gorden_Sun/status/2032839325235425310) + browser vendors shipping native Agent support signals tech maturity has hit critical mass.

### AI Coding Tool Market Reshuffles
- **Timeline**: Q2 2026
- **Confidence**: 65%
- **Rationale**: Today's [xAI exodus](https://x.com/dotey/status/2032588861063168334) + Cursor's $2B annualized revenue. xAI poaching from Cursor signals the landscape is in violent flux.

---

## **❓ Related Questions**

### How Do I Access Claude Opus 4.6 and Sonnet 4.6's Million-Token Context?

Million-token context for Opus 4.6 and Sonnet 4.6 currently requires Claude Max, Team, or Enterprise accounts. Domestic users may hit payment friction or registration blocks.

**Solution**: Visit **[Aivora](https://aivora.cn)** for ready-made accounts—instant delivery, worry-free support.