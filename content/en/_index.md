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

I need you to translate and edit this Chinese tech newsletter into English following the specific rules provided. The rules emphasize:

1. **Zero-Tolerance Rule**: Translate ALL Chinese text inside brackets `[ ]` to English, but keep URLs in parentheses `( )` unchanged
2. **Topic-First Restructuring**: Rewrite paragraphs with the core subject at the front
3. **Style Guidelines**: Conversational tone, remove emojis, preserve all Markdown formatting, translate code comments
4. **Final Output**: Only output the edited English text, no explanations

--- USER MESSAGE END ---

## **Today's Summary**

```
Claude's million-token context officially launched at no extra cost, with 78% recall crushing GPT-5.4's 36%, capable of processing 600-page PDFs in a single request.
xAI down to 2 founders, Musk admits "we built it wrong from the start," urgently poaching talent from Cursor to rebuild.
Chrome 146 ships WebMCP natively, turning webpages into Agent interfaces without third-party extensions.
```

## Quick Navigation

- [News AI Updates](#ai-news-today) - Latest developments at a glance

> Tip: Want early access to the latest AI models mentioned here (Claude 4.5, GPT, Gemini 3 Pro)? No account? Head to [Aivora](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) to grab one—instant setup, hassle-free support.

## **AI News Today**

### **One-Liner**
Claude's million-token context is now live at standard pricing, xAI undergoes massive restructuring with only 2 founders remaining, and Chrome 146 enables Agents to control browsers directly.

### **3 Key Takeaways**
#ContextRevolution #xAICrisis #BrowserAgent

---

## **Top 5 Stories**

### 1. [Claude Opus 4.6 and Sonnet 4.6 Million-Token Context Now Generally Available at Standard Pricing](https://claude.com/blog/1m-context-ga)

Claude's million-token context is now live at standard pricing. Previously, handling large projects meant paying extra once you exceeded 200K tokens—now you get 1 million tokens at the same rate. Opus 4.6 costs $5 per million input tokens and $25 per million output tokens, while Sonnet 4.6 is $3/$15, with no per-request surcharges regardless of length.

The practical impact is significant: you can now process 600-page PDFs in a single request (previously capped at 100 pages), and rate limits no longer degrade with longer requests. Opus 4.6 achieves 78.3% recall at million-token length, crushing GPT-5.4's 36.6%. Cognition (the company behind Devin) reports that large code diffs previously required batch processing—now they fit in one shot, dramatically improving code review quality. Claude Code's Max and Team users get million-token context by default, with significantly reduced conversation compression and more complete history retention.

![Advantages of AI Building Blocks](https://pbs.twimg.com/media/HDTovvJaMAI8jWP?format=png&name=orig)

---

### 2. [Chrome 146 Natively Supports WebMCP, Agents Can Control Browsers Directly](https://x.com/Gorden_Sun/status/2032839325235425310)

Chrome 146 now ships with native WebMCP support, eliminating the need for separate Chrome instances or third-party extensions to let AI control browsers. Webpages themselves become MCP servers, with frontend JavaScript directly exposing Agent interfaces—no additional Python or Node backend required.

Compared to previous Chrome DevTools Protocol (CDP) approaches, WebMCP uses fewer tokens and achieves higher accuracy. As long as websites don't block it, general web automation is now straightforward for Agents. To enable: open `chrome://flags/#enable-webmcp-testing` and toggle it on.

![Browser Agent Interface](https://pbs.twimg.com/media/HDYYHvVa0AArh-A?format=jpg&name=orig)

---

### 3. [xAI Undergoes Major Restructuring: Only 2 of 12 Co-Founders Remain, Musk Admits "We Built It Wrong from the Start"](https://x.com/dotey/status/2032588861063168334)

Elon Musk publicly stated this week that xAI was "built wrong from the start" and is undergoing complete reconstruction. Co-founder Zihang Dai departed this week, with Guodong Zhang announcing his imminent departure. Combined with earlier exits—Jimmy Ba, Tony Wu, Greg Yang, Toby Pohlen, and others—only Manuel Kroiss and Ross Nordeen remain from the original 12 co-founders at xAI's 2023 founding.

The immediate cause: xAI's AI coding products underperform, with Grok chatbot and coding tools failing to gain traction among paying users, significantly trailing Claude Code and Codex. Musk deployed managers from SpaceX and Tesla to xAI, reviewed employee performance, and terminated underperformers. The situation grew more absurd when Musk promoted former DeepMind researcher Toby Pohlen to lead digital agent projects as the company's "most important direction"—Pohlen left 16 days later.

xAI is simultaneously recruiting aggressively, poaching two executives from AI coding star Cursor: Andrew Milich and Jason Ginsberg, both reporting directly to Musk. Cursor currently generates $2 billion in annualized revenue and is the hottest company in the AI coding space.

![xAI Restructuring](https://pbs.twimg.com/media/HDU0M0BXUAAtdEt?format=png&name=orig)

---

### 4. [Google Maps Major Update: Ask Maps Conversational Q&A Plus Immersive 3D Navigation](https://blog.google/products-and-platforms/products/maps/ask-maps-immersive-navigation/)

Google Maps introduces two core features: Ask Maps (conversational map queries) and Immersive Navigation (3D navigation). Ask Maps handles complex, multi-condition personalized queries—for example, "My phone's dying, where can I charge it without waiting in a long coffee line?" It integrates over 300 million location records and 500 million+ user reviews, providing estimated arrival times and real-world advice.

Immersive Navigation delivers a new 3D view reflecting surrounding buildings, overpasses, and terrain in real time. Key intersections highlight lane markings, crosswalks, traffic lights, and parking signs. Smart zoom and transparent building effects help you anticipate complex turns and lane changes—no more missed exits.

---

### 5. [Reverse Engineering Claude's Interactive UI and Open Source Implementation](https://michaellivs.com/blog/reverse-engineering-claude-generative-ui/)

This article reverse-engineers Claude's interactive UI: it's fundamentally tool-calling with UI components injected directly into the DOM for streaming rendering—no iframe approach. To ensure rendering quality, strict UI standards are enforced (no gradients or shadows, for example).

The open source implementation is simpler but cruder, using iframes with the downside of no real-time rendering and added overhead, though it gains compatibility across LLM providers. Open source project on Github: https://github.com/CopilotKit/OpenGenerativeUI

![Interactive UI Architecture](https://pbs.twimg.com/media/HDYNVrUaMAQE1L9?format=jpg&name=orig)

---

## **Worth Watching**

- **[Product]** [Codepilot Feishu Bridge Service Update](https://m.okjike.com/originalPosts/69b5259a25bae5661277f23a) - Now nearly matches Feishu's official plugin experience in chat: streaming output, card-style results, permission notification cards with buttons
- **[Product]** [Codex APP Gets Themes](https://x.com/Gorden_Sun/status/2032843686682439909) - Tech lives by theming; one theme called "Absolutely" is an obvious jab at Claude
- **[Open Source]** [Reddit CLI Tool Released](https://github.com/jackwener/rdt-cli) - Browse feeds, explore subreddits, search posts, read comment threads, export results, upvote/save/subscribe—all from your terminal
- **[Research]** [Wholembed v3: Ultra-High-Performance Multimodal Retrieval Model](https://mixedbread.com/blog/wholembed-v3) - Retrieves text, images, audio, and video simultaneously; first large model to surpass BM25
- **[Product]** [Claude Supports Interactive Chart Generation](https://x.com/Gorden_Sun/status/2032408187568275683) - Free users included; charts render directly in chat

---

## **AI Fun**

### [360 Lobster Guardian Has Arrived](https://m.okjike.com/originalPosts/69b53b178b5d34000de1ce5c)

Can't hold it together—360 Lobster Guardian is here. Looks like even antivirus software is getting competitive in the AI era.

![360 Lobster Guardian](https://cdnv2.ruguoapp.com/Flbwok-VDgZlC4ZO8Mx2jOj7m3q2v3.heic?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient/heic-exif/1/format/jpeg)

---

## **AI Trend Predictions**

### GPT-5 or Claude 5 Series Model Launch
- **Predicted Timeline**: Q2 2026
- **Confidence**: 70%
- **Rationale**: Claude's million-token context launch plus xAI's restructuring signal intensifying competition. OpenAI and Anthropic are accelerating iteration cycles; spring is historically the window for major updates.

### AI Agent Browser Control Becomes Standard
- **Predicted Timeline**: April 2026
- **Confidence**: 80%
- **Rationale**: Today's Chrome 146 WebMCP news plus browser vendors natively supporting Agent control indicate the technology has reached critical maturity.

### AI Coding Tool Market Reshuffles
- **Predicted Timeline**: Q2 2026
- **Confidence**: 65%
- **Rationale**: Today's xAI restructuring news plus Cursor's $2 billion annualized revenue signal dramatic market consolidation ahead.

---

## **Related Questions**

### How Do I Access Claude Opus 4.6 and Sonnet 4.6 Million-Token Context?

Claude Opus 4.6 and Sonnet 4.6 million-token context currently requires Claude Max, Team, or Enterprise accounts. Domestic users may face payment difficulties or account registration restrictions.

**Solution**: Visit [Aivora](https://aivora.cn) to get ready-made accounts with instant delivery and hassle-free support.