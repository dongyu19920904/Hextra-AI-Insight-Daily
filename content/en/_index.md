---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/3/15
breadcrumbs: false
next: /en/2026-03/2026-03-15
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
USER MESSAGE BEGIN ---

I need you to translate and edit this Chinese tech newsletter into English following the specific rules provided. The rules emphasize:

1. **Zero-Tolerance Rule**: All Chinese text in brackets `[ ]` must be translated to English, while URLs in parentheses `( )` must remain unchanged
2. **Topic-First Restructuring**: Rewrite paragraphs to place core subjects at the beginning
3. **Style Guidelines**: Conversational tone, remove emojis, preserve all Markdown formatting, translate code comments but not code
4. **Final Output**: Only output the completed English text without explanations

--- USER MESSAGE END ---

## **Today's Summary**

```
Claude's million-token context officially launched at no extra cost, with 78% recall crushing GPT-5.4's 36%, capable of processing 600-page PDFs in a single request.
xAI down to 2 founders, Musk admits "we built it wrong from the start," urgently recruiting from Cursor to stop the bleeding.
Chrome 146 ships WebMCP natively, turning webpages into Agent interfaces without third-party extensions.
```

## Quick Navigation

- [News AI Updates](#ai-news-today) - Latest developments at a glance

> Tip: Want early access to the latest AI models mentioned here (Claude 4.5, GPT, Gemini 3 Pro)? No account? Head to [Aivora](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) to grab one—instant setup, hassle-free support.

## **AI News Today**

### **One-Liner**
Claude's million-token context is now live at standard pricing, xAI undergoes massive restructuring with only 2 founders remaining, and Chrome 146 lets Agents control browsers directly.

### **3 Key Takeaways**
#ContextRevolution #xAICrisis #BrowserAgent

---

## **Top 5 Stories**

### 1. Claude Opus 4.6 and Sonnet 4.6 Launch Million-Token Context at No Price Increase

Previously, handling large projects meant paying extra once you exceeded 200K tokens. Now you get 1 million tokens at the same price. Opus 4.6 costs $5 input and $25 output per million tokens, while Sonnet 4.6 runs $3/$15—identical per-token pricing whether you use 9K or 900K tokens.

The real win: you can now process 600-page PDFs in a single request (previously capped at 100 pages), and rate limits won't throttle you for longer requests. Opus 4.6 achieves 78.3% recall at million-token length, demolishing GPT-5.4's 36.6%. Cognition (the company behind Devin) reports that large code diffs previously required batch processing—now they fit in one shot, dramatically improving code review quality. Claude Code's Max and Team users get million-token context by default, drastically reducing conversation compression and preserving more history intact.

![Image](https://pbs.twimg.com/media/HDTovvJaMAI8jWP?format=png&name=orig)

---

### 2. Chrome 146 Natively Supports WebMCP, Agents Can Control Browsers Directly

Previously, getting AI to control browsers meant spinning up separate Chrome instances or installing third-party extensions. Chrome 146 now bakes WebMCP directly in. Webpages themselves become MCP Servers—frontend JavaScript transforms into an Agent interface without needing a separate Python/Node backend.

Compared to the old Chrome DevTools Protocol approach, WebMCP uses fewer tokens and delivers higher accuracy. As long as websites don't block you, general web operations are no longer a headache for Agents. To enable: open `chrome://flags/#enable-webmcp-testing` and toggle it on.

![Image](https://pbs.twimg.com/media/HDYYHvVa0AArh-A?format=jpg&name=orig)

---

### 3. xAI Undergoes Major Restructuring: Only 2 of 12 Co-Founders Remain, Musk Admits "We Built It Wrong from the Start"

Musk went public this week on X: xAI was "built wrong from the start and we're rebuilding from scratch." Co-founder Zihang Dai departed this week, and Guodong Zhang informed colleagues he's leaving soon. Combined with earlier departures—Jimmy Ba, Tony Wu, Greg Yang, Toby Pohlen, and others—only Manuel Kroiss and Ross Nordeen remain from the original 12 co-founders at launch in 2023.

The core issue: xAI's AI coding products underperformed. Grok's chatbot and coding tools failed to gain traction with paying users, falling far behind Claude Code and Codex. Musk deployed managers from SpaceX and Tesla to xAI, reviewed employee performance, and fired underperformers. The absurdity: Musk promoted former DeepMind researcher Toby Pohlen to lead the digital agents initiative last month, calling it the company's "most critical direction"—Pohlen quit 16 days later.

Meanwhile, xAI is desperately recruiting. It just poached two executives from AI coding darling Cursor—Andrew Milich and Jason Ginsberg—both reporting directly to Musk. Cursor currently runs at $2 billion annualized revenue, making it the hottest company in the AI coding space.

![Image](https://pbs.twimg.com/media/HDU0M0BXUAAtdEt?format=png&name=orig)

---

### 4. Google Maps Gets Major Overhaul: Ask Maps Conversational Q&A Plus Immersive 3D Navigation

Google Maps rolls out two flagship features: Ask Maps (conversational map queries) and Immersive Navigation (3D navigation). Ask Maps handles complex, multi-condition, personalized queries like "My phone's dying—where can I charge without waiting in a long coffee line?" It taps into 300+ million location records and 500+ million user reviews, delivering responses with ETAs and real-world tips.

Immersive Navigation offers a fresh 3D view reflecting surrounding buildings, overpasses, and terrain in real time. Key intersections highlight lane markings, crosswalks, traffic lights, and parking signs. Smart zoom and transparent buildings help you anticipate tricky turns and lane changes—no more missed exits.

---

### 5. Reverse Engineering Claude's Interactive UI and Open-Source Implementation

This article reverse-engineered Claude's interactive UI: it's fundamentally tool-calling with UI components injected directly into the DOM for streaming rendering—no iframe approach. To ensure rendering quality, strict UI standards are enforced (no gradients or shadows, for example).

The open-source implementation is straightforward but crude—it uses iframes, which means no real-time rendering and added bloat, though it works across LLM providers. Open-source repo: https://github.com/CopilotKit/OpenGenerativeUI

![Image](https://pbs.twimg.com/media/HDYNVrUaMAQE1L9?format=jpg&name=orig)

---

## **Worth Watching**

- **[Product]** [Codepilot Feishu Bridge Service Update](https://m.okjike.com/originalPosts/69b5259a25bae5661277f23a) - Now nearly matches Feishu's official plugin experience in chat: streaming output, card-style results, permission notification cards with buttons
- **[Product]** [Codex APP Gets Themes](https://x.com/Gorden_Sun/status/2032843686682439909) - Tech lives and dies by skins; one theme is called "Absolutely," an obvious jab at Claude
- **[Open Source]** [Reddit CLI Tool Released](https://github.com/jackwener/rdt-cli) - Browse feeds, explore subreddits, search posts, read comment threads, export results, upvote/save/subscribe—all from your terminal
- **[Research]** [Wholembed v3: Ultra-High-Performance Multimodal Retrieval Model](https://mixedbread.com/blog/wholembed-v3) - Retrieves text, images, audio, and video simultaneously; first large model to surpass BM25
- **[Product]** [Claude Supports Interactive Chart Generation](https://x.com/Gorden_Sun/status/2032408187568275683) - Free users included; charts render directly in chat

---

## **AI Fun Fact**

### 360 Lobster Guardian Has Arrived

Can't hold it together—360 Lobster Guardian is here. Looks like even antivirus software is getting competitive in the AI era.

![Image](https://cdnv2.ruguoapp.com/Flbwok-VDgZlC4ZO8Mx2jOj7m3q2v3.heic?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient/heic-exif/1/format/jpeg)

---

## **AI Trend Predictions**

### GPT-5 or Claude 5 Series Launch
- **Predicted Timeline**: Q2 2026
- **Confidence**: 70%
- **Rationale**: Claude's million-token context rollout plus xAI's restructuring signal intensifying competition. OpenAI and Anthropic are both accelerating iterations; spring is historically the window for major updates.

### AI Agent Browser Control Becomes Standard
- **Predicted Timeline**: April 2026
- **Confidence**: 80%
- **Rationale**: Today's news on Chrome 146's native WebMCP support plus browser vendors natively enabling Agent control signals the technology has reached critical maturity.

### AI Coding Tools Market Reshuffles
- **Predicted Timeline**: Q2 2026
- **Confidence**: 65%
- **Rationale**: Today's xAI restructuring news plus Cursor's $2 billion annualized revenue indicate the market landscape is shifting dramatically.

---

## **Questions**

### How Do I Access Claude Opus 4.6 and Sonnet 4.6's Million-Token Context?

Claude Opus 4.6 and Sonnet 4.6's million-token context currently requires a Claude Max, Team, or Enterprise account. Domestic users may face payment friction or account registration restrictions.

**Solution**: Visit [Aivora](https://aivora.cn) to grab a ready-made account—instant delivery, worry-free support.