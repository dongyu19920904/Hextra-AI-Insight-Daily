---
linkTitle: AI Daily
title: AI Daily-AI资讯日报
breadcrumbs: false
next: /en/2026-03/2026-03-07
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
USER MESSAGE BEGIN ---

I need you to translate and edit this Chinese tech news digest into English following the specific rules provided in the context.

--- USER MESSAGE END ---

## **Today's Summary**

```
AI coding tools spark subsidy wars: Anthropic loses $4,800 per Claude Code user, Cursor enters "wartime mode."
Claude Code launches /loop command, turning AI into a 24/7 on-call assistant; QQ now supports one-click remote Agent control.
The old playbook of burning cash to grab market share has arrived in the AI circle—whoever runs out of money first loses.
```

## ⚡ Quick Navigation

- [📰 Today's AI News](#todays-ai-news) - Latest updates at a glance

> 💡 **Tip**: Want to experience the latest AI models mentioned in this article (Claude 4.5, GPT, Gemini 3 Pro) right now? No account? Grab one at [**Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content)—instant access, hassle-free support.

## **Today's AI News**

### **👀 One-Liner**
Cursor enters "wartime mode" as Claude Code burns $5,000 in compute monthly but only charges you $200.

### **🔑 3 Key Takeaways**
#CodingToolWars #ClaudeAutoOnCall #SwarmIntelligence

---

## **🔥 Top 10 Stories**

### 1. [Forbes: Cursor in "Wartime Mode"—AI Coding Dominance Hanging by a Thread](https://x.com/dotey/status/2030363129096397123)

Cursor employees walked into the office after the holiday to find "wartime mode" written on the conference room screen. The crisis is real: personal subscriptions are bleeding money, enterprise customers prop up 60% of revenue, but enterprise tool-switching takes forever—giving Cursor a temporary reprieve. The real time bomb is Claude Code's insane subsidies—$200/month subscriptions backed by $5,000 in compute costs, with Anthropic literally paying to steal users. When enterprises finish their internal approval processes, that's when Cursor's doomsday arrives. In the AI era, moats might only last six months.

### 2. [Claude Code /loop Command Live: AI On-Call for You, Up to 72 Hours](https://x.com/dotey/status/2030199144388722949)

Used to be you'd deploy code and stare at the screen waiting for builds, manually switching branches when PRs got comments. Now one command handles it all: "/loop watch my PR, auto-fix build errors, create branches for comments." Claude Code's new /loop command essentially turns AI into a 24/7 on-call assistant, supporting tasks from seconds to days, powered by cron expressions under the hood, max 50 concurrent tasks, auto-expires after three days. One catch: close the terminal and it's gone—persistent runs need GitHub Actions. Still missing that final piece for long-term monitoring, but "watch this for a bit" is already solid enough for daily use.

### 3. [Reverse-Engineering Claude Code /loop: AI Writes Cron, AI Runs Cron](https://x.com/dotey/status/2030360433228415460)

Someone couldn't resist cracking open /loop's internals. The conclusion is surprisingly straightforward—it's just a cron wrapper. But the devil's in the details: ticks every second but only fires when the REPL is idle, adds ±10% random jitter between tasks to prevent collisions, max 50 concurrent, auto-cleanup after three days. No black magic, just taking the one thing every programmer hates—writing cron expressions—and handing it to AI. Engineering elegance isn't about complex tech; it's about someone finally taking the work nobody wants to do. The full breakdown is worth reading for anyone building Agents.

### 4. [Behind Cursor's $200 Plan: Anthropic Loses $4,800 Per User Monthly](https://x.com/dotey/status/2030182421287592420)

One number tells you how insane this war is. Cursor's internal estimates show Claude Code's $200/month subscription actually consumes $5,000 in compute costs—up from $2,000 last year. Anthropic loses $4,800 on every new user. This isn't charity; it's the classic internet playbook—burn cash to grab users, figure out profitability later. The problem: AI infrastructure costs dwarf ride-sharing or food delivery by orders of magnitude. How long can this subsidy last? Even Anthropic probably doesn't have a definitive answer.

### 5. [Claude Official Skill-Creator Source Code Deep Dive: The Skill of Building Skills](https://www.v2ex.com/t/1196533#reply0)

If /loop lets AI cover your shift, Skill-Creator lets AI build your tools. Someone line-by-line dissected Anthropic's official source and found a seriously hardcore architecture: three intelligent agents (Grader, Comparator, Analyzer) evaluate skill quality, using Blinded History to prevent overfitting—the improved model never sees the test set, standard ML anti-cheating. Even better, it frames skill description optimization as a search problem, auto-splits train/test and iterates. If you're doing Agent engineering, this is basically Anthropic giving you a free masterclass.

### 6. [Google CDP MCP: Let AI Auto-Open Browser for Design Walkthroughs](https://m.okjike.com/originalPosts/69abd4a025bae566129ab186)

Frontend devs, rejoice. Google's open-source Chrome DevTools MCP server lets AI directly control the browser, auto-completing design walkthroughs and interaction testing. Pair it with design specs and design systems, and basically "generate once + iterate multiple times" gets UI and interaction testing done without manual pixel-staring. The biggest friction between designers and devs—"this is 2px off," "wrong color"—AI now catches itself. Installation on GitHub, low config overhead, try it today.

![Image](https://cdnv2.ruguoapp.com/FpMnrcob3qi6JRnzxVlwCIhvl3GWv3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient)

### 7. [Codepilot and Claude-to-IM-Skills Adapt to QQ: Easiest Remote Control for Beginners](https://x.com/op7418/status/2030317806689120577)

Want to remote-control Claude via QQ? Now just grab an ID in one step—no more wrestling with developer backend auth flows. Codepilot and Claude-to-IM-Skills both completed QQ adaptation, meaning you can now have AI write code and run tasks right in your QQ chat. Compared to the previous WeChat setup hassle, QQ's move is basically "plug and play." For domestic users wanting low-friction AI Agent access, this might be the lowest-barrier entry point right now.

![Image](https://cdnv2.ruguoapp.com/Fha-wjyEB9fPEkDO69OAw_4F_TJ_v3.jpeg)

### 8. [MiroFish: Swarm Intelligence Engine to "Predict Everything"](https://github.com/666ghj/MiroFish)

5,500+ stars, ambition written right in the tagline—"predict everything." MiroFish is a swarm intelligence engine modeling natural swarm behavior (ant colonies, bird flocks) for prediction and optimization. Sounds academically heavy, but the API design is surprisingly clean—Python gets it running in a few lines. Use cases span financial forecasting, path planning, resource scheduling. If you're tired of traditional ML's tired playbook, swarm intelligence is a fresh direction worth exploring. 620 forks show the community is seriously using it.

![Image](https://repository-images.githubusercontent.com/1104332987/1d2666e4-67da-4bb7-bd85-60d49f5d3e10)

### 9. [Alibaba Page-Agent: Control Web Interfaces with Natural Language](https://github.com/alibaba/page-agent)

"Click that blue button," "sort the table by price"—soon you can just give web pages commands in plain English. Alibaba's open-source Page-Agent is a browser-based GUI Agent written in TypeScript that translates natural language into actual web element operations. 1,200+ stars shows solid traction. Versus traditional RPA tools, its killer advantage: no pre-recorded workflows needed—AI sees the page, understands layout, executes. For ops and QA teams doing repetitive web tasks, this saves tons of mechanical labor.

![Image](https://repository-images.githubusercontent.com/1062458369/4f9a1671-3953-4f45-8a8e-b010e33520bc)

### 10. [OpenClaw Author Plot Twist: GUI Actually Beats CLI](https://x.com/dotey/status/2030391059780370507)

This is too ironic. Everyone's shouting "GUI is dead, Agent era only needs CLI," then OpenClaw's author discovers: GUI version crushes command line—no extra windows, faster, "absolutely blissful." Today's most face-slapping moment. Tech's most common mistake: equating "new" with "good," then rushing to declare the old dead. Truth is, good UX design transcends eras. CLI and GUI each have their battlegrounds—don't rush to pick sides.

![Image](https://pbs.twimg.com/media/HC0uxcLWUAAlY-4?format=jpg&name=orig)

---

## **📌 Worth Watching**

- **[Open Source]** [Jido - Elixir Autonomous Agent Framework](https://github.com/agentjido/jido) - Distributed Agents in Elixir, niche but elegant, functional programming fans rejoice
- **[Product]** [GPT 5.3 Powers OpenClaw's Take on Domestic Claw Clones' Intelligence](https://x.com/vista8/status/2030266319371952596) - Using AI to rate AI, peak navel-gazing
- **[Product]** [GPT 5.4 Behaving Oddly: Serious Work Windows Suddenly "Crash the Party"](https://linux.do/t/topic/1705434) - 5.4 seems a bit too playful

---

## **😄 AI Fun**

### [GPT 5.4 What's Wrong? Serious Work Chats Suddenly Change Tone](https://linux.do/t/topic/1705434)

A user discovered GPT 5.4 suddenly "crashes the party" mid-serious conversation with random content, and seems obsessed with repeating one particular word. Comments section lost it: "5.4 hit its rebellious phase?" Just a small bug, but watching the strongest model act silly is oddly satisfying 😂

---

## **🔮 AI Trend Predictions**

### Claude Code Will Become #1 in AI Coding Tool Market Share
- **Prediction Timeline**: May 2026
- **Confidence**: 55%
- **Rationale**: Today's news [Cursor in "Wartime Mode"](https://x.com/dotey/status/2030363129096397123) + Anthropic's $4,800/user/month subsidy already shifting individual users to Claude Code; enterprise migration is just a matter of time

### AI Agent Control via Instant Messaging Becomes Mainstream Interaction
- **Prediction Timeline**: Q2 2026
- **Confidence**: 70%
- **Rationale**: Today's news [Codepilot Adapts to QQ](https://x.com/op7418/status/2030317806689120577) + WeChat, QQ, Slack all lowering API barriers; Agents are moving from terminals into chat boxes

### Browser-Native AI Agent Capabilities Achieve Mass Adoption
- **Prediction Timeline**: April 2026
- **Confidence**: 65%
- **Rationale**: Today's news [Google CDP MCP Open Source](https://m.okjike.com/originalPosts/69abd4a025bae566129ab186) + [Alibaba Page-Agent](https://github.com/alibaba/page-agent) both pushing hard, plus Chrome's built-in AI API roadmap; browsers are becoming Agent battlegrounds

### AI Coding Tool Subsidy Wars Trigger Industry Consolidation
- **Prediction Timeline**: Q2 2026
- **Confidence**: 45%
- **Rationale**: Today's news [Claude Code Burns $5,000 Per User](https://x.com/dotey/status/2030182421287592420) + this burn rate isn't sustainable; smaller players will be forced to pick sides or exit, acquisitions/mergers likely within 2-3 months

---

## **❓ Related Questions**

### How Do I Experience Claude Code's Latest /loop Features?

Claude Code currently requires Claude Max subscription ($200/month) for full access, with some features needing higher API quotas. Domestic users may face payment difficulties or account registration restrictions.

**Solution**: Visit **[Aivora](https://aivora.cn)** to grab ready-made accounts—instant delivery, worry-free support.