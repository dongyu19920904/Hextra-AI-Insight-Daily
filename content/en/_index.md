---
linkTitle: AI Daily
title: AI Daily 2026/11/15：Fei-Fei Li's First Public Appearance After AMD's World
  Labs Acquisition
breadcrumbs: false
next: /en/2026-11/2026-11-15
description: AMD acquires World Labs for $8.2 billion; Fei-Fei Li and Lisa Su share
  a stage for the first time at CoRL 2026, marking a concrete step toward integrating
  AI hardware and world models. From ChatGPT Wallet to MCP debugging tools to a local
  reverse-engineering cloud bypass, developments across the board are shifting AI
  control from the cloud and platforms toward users. Developers should prioritize
  chrome-devtools-…
cascade:
  type: docs
---
## **Today's Summary**

```
AMD acquires World Labs for $8.2 billion; Fei-Fei Li and Lisa Su share a stage for the first time at CoRL 2026, marking a concrete step toward integrating AI hardware and world models.
From ChatGPT Wallet to MCP debugging tools to a local reverse-engineering cloud bypass, developments across the board are shifting AI control from the cloud and platforms toward users.
Developers should prioritize chrome-devtools-mcp and the Wallet payment mechanism today: the former can plug directly into existing workflows, while the latter warrants confirming security boundaries before acting on it.
```

## **🔥 Today's Top 10**

### 1. Fei-Fei Li's First Public Appearance After AMD's World Labs Acquisition

**Fei-Fei Li's first joint appearance since joining AMD.** At CoRL 2026 on November 12, [Fei-Fei Li gave a keynote on world models and then joined Lisa Su on stage for a conversation](https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651074456&idx=2&sn=96fd9bd0e55a35b655b0a2dddd61264d), as reported by Jiqizhi. **AMD** announced the all-stock acquisition of World Labs for approximately **$8.2 billion** on September 28; the deal is expected to close before year-end. Upon closing, Fei-Fei Li will become AMD's Executive Vice President and Chief Scientist, reporting directly to Lisa Su.

![Fei-Fei Li and Lisa Su on stage at CoRL 2026](https://wechat2rss.bestblogs.dev/img-proxy/?k=330f97e4&u=https%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2F5L8bhP5dIqGBkHD7zLXPHUT2QVLDjetr158bf2LzlGLBBv0ygYJ9CH2ntmh0iaxic6icNDToAAdH39JicDpb78YGCuR2csdnqgtQyPYhyepgiauw%2F0%3Fwx_fmt%3Djpeg "Fei-Fei Li and Lisa Su on stage at CoRL 2026")

---

### 2. ChatGPT Wallet Lets AI Agents Pay on Your Behalf

**ChatGPT adds AI agent payment functionality 🔒.** OpenAI launched ChatGPT Wallet on November 13 in partnership with American Express, Mastercard, and Visa. [lotook has documented the payment flow and security mechanisms](https://lotook.com/articles/chatgpt-wallet/). Before each purchase, the agent displays the item, total price, and card to be charged, then requires face or fingerprint verification. Merchants receive a token issued by the payment network and never see the **actual card number**. Currently available only to **US Pro users**.

---

### 3. Claude Services Experience Roughly Two-Hour Authentication Outage

**Claude.ai login issues resolved the same day.** The [Anthropic official incident page](https://status.claude.com/incidents/nn11wk485zfn) records that affected services included **Claude**.ai, Claude Code, the console, and Cowork. Investigation began at 17:58 Beijing time on November 13 and was declared resolved at 19:58, an **official span of roughly two hours**. The core issue was login and authentication errors; Anthropic did not disclose the root cause or confirm any causal link to a concurrent Microsoft 365 incident.

---

### 4. LibTV Globally Launches Seedance 2.5 Flash First

**Seedance 2.5 Flash is now live on LibTV ahead of everywhere else.** According to a tutorial post, [this version is designed specifically for AI short-drama creation](https://mp.weixin.qq.com/s/zd--v-hf4VAAxqVuQRJkVQ); the author used it to recreate the time-travel drama style of the viral short series *持械入宋*. It costs **30–40% less** to call than **Seedance** 2.5, and the author reports no noticeable quality drop. Creators with short-video production needs should keep an eye on this pricing window.

![LibTV Seedance 2.5 Flash short-drama demo](https://mmbiz.qpic.cn/sz_mmbiz_jpg/tIT7Q7mxeEJRE9g8m18YGbxbHy4oNA7Xb5lVtgN60AZOsmxiaj8ywzmkhSdgZA8EY1kB2l2iblfiaAZYYqzLzjEibhHqDewicY9Dx5nIU5OiaUSibo/0?wx_fmt=jpeg "LibTV Seedance 2.5 Flash short-drama demo")

---

### 5. Hassabis Warns That Closed-Loop AI Self-Improvement Is Hard to Control

**Hassabis identifies the control blind spot in recursive self-improvement.** The AI探索指南 channel compiled this interview in which [Hassabis warns that closed-loop AI self-improvement is difficult to control](https://t.me/aigc1024/27038). His concern is **closed-loop RSI** without human review: the system improves faster while humans find it increasingly hard to understand and intervene. He also noted that in his view current AI systems do not yet possess **consciousness**, and that intelligence and consciousness can be discussed separately.

---

### 6. Shaonane Upgrades Grok Bot and Downgrades Codex

**Migration costs force a reallocation of subscriptions.** Independent developer Shaonane shared on Jike that [he upgraded Grok Bot and downgraded Codex to a lower tier](https://m.okjike.com/originalPosts/6af79db3136b2761c64ca316). His reasoning: his business workflow already runs on **Grok** Bot and migration costs are high, whereas **Codex is used mainly for writing code** and is easier to replace. This decision logic is worth referencing for developers who subscribe to multiple AI tools simultaneously.

![Shaonane's subscription adjustment record](https://cdnv2.ruguoapp.com/FhTYA4YHPvQL5upJSmB3OdHXl1BUv3.jpg "Shaonane's subscription adjustment record")

---

### 7. vista8 Uses an AI Model for YouTube Thumbnail Design

**AI-generated faces have entered the video thumbnail workflow.** Xiangyang Qiaomu shared experimental progress in a post: [he selected an AI model and prepared thumbnail layout references](https://x.com/vista8/status/2121610817531756916). His conclusion is that **having a human face on a video thumbnail** is already standard practice, and AI-generated models can fill that need quickly. For independent creators, this workflow **lowers the barrier to thumbnail production**.

![vista8 AI thumbnail experiment reference image](https://pbs.twimg.com/media/HXF5RJMasAA4yku.jpg "vista8 AI thumbnail experiment reference image")

---

### 8. Converting GitHub Skills to epub for Import into WeChat Reading

**Someone has verified the full pipeline for turning GitHub Skills into e-books.** LaurenQ shared a complete prompt on Jike for [converting GitHub Skills into epub files for import into WeChat Reading](https://m.okjike.com/originalPosts/6af8070d3ce945612ee99efa), where they can be read on e-ink screens. Output includes HTML rendering, making it suitable for **purely Chinese, logic-based Skills**. For anyone who wants to study a **Skill** architecture systematically, this pathway is worth trying.

---

### 9. Rust 1.100 Stabilizes the Never Type and Custom Allocators

**Rust extends the `!` type to all nameable type positions.** The [Rust official blog published the 1.100 release notes](https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/), which also stabilize the core `Allocator` trait, though collection-related interfaces are not yet fully complete. The new `DropGuard` can run cleanup on panic, and Cargo gains **unused-dependency checking** and an optional minimum **publish-time setting**. Projects on older editions should watch for changes in type inference fallback behavior.

![Rust 1.100 stabilizes the never type and custom allocators · original cover](https://www.rust-lang.org/static/images/rust-social.jpg "Rust 1.100 stabilizes the never type and custom allocators · original cover")

---

### 10. Engineer Rewires Coway Air Purifier from Cloud to Local

**The pairing data hides the entry point for bypassing the cloud.** Scott documented the reverse-engineering process in detail on his personal blog, [finding that the Bluetooth pairing packets contain a certificate download URL](https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/); replacing it with a **local address** is enough to point the device at a self-hosted server. The final setup uses Web Bluetooth for pairing and local MQTT to connect to Home Assistant, with **AI assistance used to reconstruct part of the pairing flow**. For users who prefer not to rely on a manufacturer's cloud service, this approach is worth referencing.

![Engineer rewires Coway air purifier from cloud to local · original image](https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/coway-airmega-icons-cover_hu_7db7fbd82932782d.jpg "Engineer rewires Coway air purifier from cloud to local · original image")

---

## **⌘ Top Open-Source Projects**

### ChromeDevTools/chrome-devtools-mcp: Connect Coding Agents to DevTools

[chrome-devtools-mcp has published its core code](https://github.com/ChromeDevTools/chrome-devtools-mcp), letting coding agents call Chrome DevTools capabilities directly via the MCP protocol. It gained **664 stars today**, bringing the total to 56,306 stars — the highest single-day star count on today's leaderboard. Suited for engineers who need AI to assist with debugging or automated browser testing.

---

### tradermonty/claude-trading-skills: Claude Skill Set for Stock Investors

[claude-trading-skills collects stock-analysis skills](https://github.com/tradermonty/claude-trading-skills) covering market analysis, technical charting, and trading strategy development, running on Claude Code. It gained **553 stars today**, bringing the total to 4,815 stars. Suited for individual developers exploring semi-automated investment research workflows with Claude Code.

---

### dream-num/univer: Open-Source AI Office SDK for Embedding in Products

[univer provides an extensible open-source core](https://github.com/dream-num/univer) that supports editing, calculation, and collaboration, and is compatible with both human operation and AI agent calls. It gained **495 stars today**, bringing the total to 24,497 stars, and is built with TypeScript. Suited for teams that need to embed Office-like capabilities in their own products and want AI agents to operate documents directly.

![dream-num/univer: Open-Source AI Office SDK for Embedding in Products · README banner](https://raw.githubusercontent.com/dream-num/univer/dev/docs/img/readme/hero-banner.png "dream-num/univer: Open-Source AI Office SDK for Embedding in Products · README banner")

---

## **◉ Social Media Highlights**

### Li Jigang: Show Children the Vernacular with AI Video First, Then Reveal the Original Poem

**Use visual contrast to guide children from the vernacular to the classical.** Li Jigang proposed an AI education approach on Jike: [first have AI generate scenes from a classical poem with plain-language subtitles](https://m.okjike.com/originalPosts/6af7ccf6136b2761c6521687), then switch frame by frame to the poet's original text. The idea is to use sensory impact to establish an emotional anchor first, then let the classical words create a contrast with the imagery. The starting point of this workflow is **AI video generation**; the destination is a language-arts classroom.

![Li Jigang's AI classical poetry education concept](https://cdnv2.ruguoapp.com/Fv2f242jJH0xZMME7Du_i6yWSfQKv3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient "Li Jigang's AI classical poetry education concept")

---

## **😄 AI Tidbits**

### They've Taken Their Own Website Apart and Handed You All the Pieces

DeepSeek has open-sourced **every API their own website uses** — search, file reading, speech recognition, and speech synthesis, all of it, with web demos uploaded to GitHub too. After [open-sourcing nearly every interface on their official site](https://x.com/Gorden_Sun/status/2121583582535938222), anyone can assemble an agent by following along. Open-source or not, **the APIs still cost money to use** — and they've made no bones about that.

![They've taken their own website apart and handed you all the pieces · original image](https://pbs.twimg.com/media/HXFhBJDa4AAL87y?format=jpg&name=orig "They've taken their own website apart and handed you all the pieces · original image")

## **❓ Related Questions**

### Codex Is Mainly for Writing Code — Is Grok Bot Better Suited for Running Business Workflows?

**Try routing one category of task exclusively to Codex and tracking its completion rate.** [Shaonane's subscription adjustment](https://m.okjike.com/originalPosts/6af79db3136b2761c64ca316) notes that Codex is easy to replace while Grok Bot carries more workflow. If you want to try writing code tasks yourself with ChatGPT, see the [爱窝啦·AI账号店 ChatGPT Plus monthly recharge/renewal card](https://www.aivora.cn/products/chong-zhi-xu-fei-yue-ka-1) for topping up an existing account.