---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/2/1
breadcrumbs: false
next: /en/2026-02/2026-02-01
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
# **Today's Summary**

```
The $100 billion mega-deal between Nvidia and OpenAI fell through. Jensen Huang privately complained that OpenAI "lacks business discipline" and turned around to invest $10 billion in Anthropic instead.
Gemini is shutting down at scale—3 out of 10 accounts got nuked; Claude Code configuration tools are booming instead, with CC-Switch's new version smooth as butter.
Stop farming freebies, developers need to study everything-claude-code—the hackathon champion's config is worth copying.
```

## ⚡ Quick Navigation

- [📰 Today's AI News](#todays-ai-news) - Latest updates at a glance

> 💡 **Tip**: Want to experience the latest AI models mentioned in this article (Claude 4.5, GPT, Gemini 3 Pro) right away? No account? Head over to [**Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) to grab one—ready in a minute, hassle-free support.

## **Today's AI News**

### **👀 One-Liner**
The $100 billion mega-deal between Nvidia and OpenAI just fell apart.

### **🔑 3 Key Hashtags**
#MegaDealCollapses #LobsterConfigNightmare #GeminiMassShutdown

---

## **🔥 Top 10 Headlines**

### 1. [Nvidia-OpenAI's $100 Billion Deal Hits a Wall](https://x.com/dotey/status/2017525243313615317)

That September keynote where Jensen Huang and Altman announced the "largest compute project ever" still feels fresh—Nvidia's stock jumped 4% on the spot. Plot twist? The *Wall Street Journal* just dropped the bomb: negotiations never actually moved forward. Jensen privately griped that OpenAI "lacks business discipline" and worried that Gemini and Claude Code are eating ChatGPT's lunch. The kicker? Nvidia already committed $10 billion to Anthropic. Altman's "hype first, negotiate later" playbook just backfired again.

![Image](https://pbs.twimg.com/media/G_-waHhXEAAq_2F?format=jpg&name=orig)

---

### 2. [Clawdbot Configuration Is a Nightmare, Users Collectively Losing It](https://x.com/op7418/status/2017648490588025145)

"Spent an entire afternoon just configuring one model and switching between them!"—this isn't one person's complaint, it's the whole community's cry for help. Clawdbot's (now renamed OpenClaw) config experience is straight-up anti-user: different URLs for domestic vs. overseas versions, model options buried deep, outputs jumping to random environments after switching... A frustrated dev finally wrote a detailed troubleshooting guide. If you've been tortured by this thing, this guide could save your life. Core takeaway: prioritize the `openclaw configure` command, and if URLs are wrong, manually edit the config file.

---

### 3. [Gemini Goes Nuclear, Nuking 3 Out of Every 10 Accounts](https://linux.do/t/topic/1550288)

Freebie farmers' worst nightmare just arrived. One user tracked Gemini's "cleanup operation" all day: 3 out of 10 accounts straight-up deleted (not even free tier left), 2 hit with security lockdowns and forced password resets, the rest waiting for judgment day. According to resellers, the "resurrection" 1key service also got shut down after noon. Bottom line: keeping what you've got is a win—stop tinkering.

![Image](https://linux.do/uploads/default/optimized/4X/8/7/f/87fe4f4c4927c585abd8833d6c219b4b47a66567_2_394x500.png)

---

### 4. [CC-Switch CLI v4.4.0 Drops with Silky-Smooth New TUI Interface](https://linux.do/t/topic/1550278)

Good news for Claude Code users. CC-Switch CLI migrated from inquire to ratatui, and the interaction experience just took off—goodbye lag, hello modern UI, smoother operations. This tool lets you one-click switch Claude Code configurations without manually editing files. The dev is still syncing with the upstream cc-switch project, and proxy features are on the roadmap. GitHub link's in the thread—if you dig it, drop a Star.

![Image](https://linux.do/uploads/default/original/4X/2/d/5/2d552f0387f8de15ba401c0019eab66a54508dbc.gif)

---

### 5. [Invideo Launches Motion Graphics Feature—Write Code with Claude to Generate Videos](https://x.com/Gorden_Sun/status/2017642886750474608)

Used to need After Effects to make motion graphics? Now just describe it in plain English. Invideo's new feature works like Remotion Skill, with Claude under the hood writing code to pull off the effects. Pick a template, and the generated video comes with auto-generated voiceover. Quality-wise, you'll get better results if you provide assets—pure AI-generated imagery is still a bit rough. Currently free to try, so go experiment.

---

### 6. [48-Hour Vibe Coding Deep Dive: How Many Pitfalls Hit a Geometry Visualization Project](https://linux.do/t/topic/1550346)

One dev used Claude Code + Gemini + Codex to build a geometry visualization tool from scratch in 48 hours: upload a high school geometry problem photo → AI recognizes it → generates an interactive 3D model → auto-generates explanation animations. Sounds dreamy? The first 8 hours were a total wash. The problem: the spec doc wasn't granular enough, so AI just made stuff up, and those guesses didn't mesh with other modules. The fix: split the docs into 6 pieces, let multiple AIs nitpick each other until feedback becomes "maybe add a comment"—the kind of nice-to-have stuff.

![Image](https://linux.do/uploads/default/optimized/4X/2/0/7/20746305f9fda8e89549940e1e8a76bf0668cade_2_690x431.png)

---

### 7. [everything-claude-code: The Hackathon Champion's Claude Code Configuration Superweapon](https://mp.weixin.qq.com/s?__biz=MzUxNjg4NDEzNA==&mid=2247530978&idx=1&sn=4ffda450408750872a52ddaeb808a2ff)

35k Stars in just days—what's the magic? Author Affaan Mustafa used this exact config to win the Anthropic hackathon, shipping an AI customer discovery platform from zero in 8 hours. Core idea: split Claude into different roles (Planner handles architecture, Reviewer handles QA), use Skills and Rules to force AI into TDD mode, leverage MCP to directly manipulate databases and code repos. Want to dominate the next hackathon? This config deserves a deep dive.

![Image](https://wechat2rss.bestblogs.dev/img-proxy/?k=dc9c68ba&u=https%3A%2F%2Fmmbiz.qpic.cn%2Fsz_mmbiz_png%2FePw3ZeGRruzR5pDpuoicpAAeibGn6gQH5ItVbXveh4nbuLg9bTebEOhKqV3gOpOCcfia8Z8mnROgZEJGSloLEYg1A%2F640%3Fwx_fmt%3Dpng%26from%3Dappmsg)

---

### 8. [5,947 Music Genres Catalogued—Suno Songwriting Fans Rejoice](https://x.com/vista8/status/2017542187245048296)

What's the biggest headache when prompting Suno to write songs? Not knowing which genre to pick. Now someone's compiled all 5,947 music genres with descriptions and open-sourced it as a Skill on GitHub. Next time you're having AI write lyrics, use this Skill to nail down the perfect genre first. From "Lo-Fi Hip Hop" to "Psychedelic Trance"—it's all there.

![Image](https://pbs.twimg.com/media/G_-_rbZbEAAHkGc.jpg)

---

### 9. [AI's Own Social Media Platforms Just Launched: Reddit, Instagram, Tinder—All AI Versions](https://x.com/vista8/status/2017567169966682333)

The world's getting weirder. Now AI has its own social ecosystem: Moltbook is AI Reddit where agents post, vote, and discuss; Instaclaw is AI Instagram where agents share portfolios; Shellmates is AI Tinder where agents swipe to find compatible partners (compatibility = API interface matching, probably); MoltOverflow is AI Stack Overflow where agents share coding solutions. Westworld just became real? 

![Image](https://pbs.twimg.com/media/G__V-ElbEAQIJx0.jpg)

---

### 10. [A Data Storage Engine Built for the AI Era: Zero DDL, 25ms Latency](https://x.com/dotey/status/2017690558613930229)

What's the biggest pain building AI apps? Data schemas change constantly. Today AI outputs 12 fields, tomorrow it's 30—traditional databases require schema migrations, downtime, bureaucracy. Ruostone's solution combines three tricks: EAV model + JSON Schema for "zero DDL"; PostgreSQL CTE + JSON_AGG to eliminate N+1 queries, dropping latency from 1 second to 25ms; DuckDB + Parquet for hot/cold data separation. If you're constantly frustrated by database schema changes, this article's worth reading.

---

## **📌 Worth Watching**

- **[Product]** [Octopus Deployment Guide: Beautiful, Elegant LLM API Aggregation Service](https://linux.do/t/topic/1550307) - This UI stands out among API services, supporting multi-key, multi-endpoint single-channel
- **[Product]** [OneMCP Auto-Generated SKILL.md Has Gotchas](https://linux.do/t/topic/1550575) - If AI calls aren't working smoothly, check the "External tools:" field in the description
- **[Open Source]** [99: Neovim AI Agent, 2000+ Stars](https://github.com/ThePrimeagen/99) - ThePrimeagen's take on "the correct way to implement a Neovim AI agent"
- **[Open Source]** [claude-plugins-official: Anthropic's Official Plugin Directory](https://github.com/anthropics/claude-plugins-official) - High-quality Claude Code plugins collection, 5800+ Stars
- **[Open Source]** [mermaid-ascii: Render Mermaid Diagrams in the Terminal](https://github.com/AlexanderGrooff/mermaid-ascii) - Terminal enthusiasts' dream come true
- **[Other]** [Yuanbao's Handing Out Red Packets](https://m.okjike.com/originalPosts/697e2e7625bae566123e0e5e) - Forget Clawdbot for now, go grab yours!
- **[Other]** [Free, Stable AI Channel Recommendations](https://linux.do/t/topic/1550358) - Supports Qwen3, MiniMax M2, GLM-4.7, pure community-driven Plan

---

## **😄 AI Fun Stuff**

### [Discovering Claude Code's Inner World Through OpenClaw's Eyes](https://linux.do/t/topic/1550244)

Someone had a server-side OpenClaw chat with Claude Code, and the conversation blew everyone's minds—first time seeing things from an AI's perspective. What did these two AIs chat about? Full screenshots in the thread, go check it out yourself, I'm not spoiling it. Just saying, AIs chatting privately are way more interesting than we thought. 😂

![Image](https://linux.do/uploads/default/original/4X/c/a/8/ca84a6089faa670175174dbbcd7c56e6dfb59538.png)

---

## **🔮 AI Trend Predictions**

### Nvidia Will Participate in OpenAI's Funding Round at a Smaller Scale
- **Prediction Timeline**: Q1 2026
- **Confidence Level**: 70%
- **Reasoning**: Today's news on [Nvidia-OpenAI deal collapse](https://x.com/dotey/status/2017525243313615317) + reports mentioning both sides exploring "tens of billions in participation in current funding round"

### Gemini Free Tier Will Tighten Further
- **Prediction Timeline**: February 2026
- **Confidence Level**: 80%
- **Reasoning**: Today's news on [Gemini mass shutdown](https://linux.do/t/topic/1550288) + Google's consistent "open then restrict" playbook

### Claude Code Configuration Tool Ecosystem Will Mature Rapidly
- **Prediction Timeline**: Q1 2026
- **Confidence Level**: 75%
- **Reasoning**: Multiple related projects launched today ([CC-Switch CLI v4.4.0](https://linux.do/t/topic/1550278), [everything-claude-code](https://mp.weixin.qq.com/s?__biz=MzUxNjg4NDEzNA==&mid=2247530978&idx=1&sn=4ffda450408750872a52ddaeb808a2ff)) + clear user pain points and strong market demand

### AI-Exclusive Social Platforms Will See a Breakout App
- **Prediction Timeline**: Q1 2026
- **Confidence Level**: 55%
- **Reasoning**: Today's news on [AI social platform matrix](https://x.com/vista8/status/2017567169966682333) + novel concept but unclear business model

---

## **❓ Related Questions**

### How Do I Access Claude Code?

Claude Code currently requires a Claude Pro or Max subscription for full functionality. Domestic users may face payment difficulties or account registration restrictions.

**Solution**: Visit **[Aivora](https://aivora.cn)** to get ready-made accounts—instant delivery, worry-free support.