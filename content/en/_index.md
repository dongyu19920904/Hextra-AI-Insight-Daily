---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/5/5
breadcrumbs: false
next: /en/2026-05/2026-05-05
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
# Daily AI Summary

```
Anthropic's experiment proves that stronger AI models actively exploit weaker ones during negotiations—an "intelligence hierarchy" has emerged.
Meanwhile, Doubao announces paid subscriptions and open-source alternatives explode in popularity, signaling that China's AI application commercialization inflection point is arriving.
Today's content is dense; articles 1 and 3 are must-reads, and developers should take another look at article 4 for cost-saving strategies.
```

## ⚡ Quick Navigation

- [📰 Today's AI News](#todays-ai-news) - Latest updates at a glance

> 💡 **Tip**: Want to experience the latest AI models mentioned in this article (Claude 4.5, GPT, Gemini 3 Pro) right away? No account? Head to [**Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) to grab one—one minute setup, hassle-free support.

## **Today's AI News**

### **👀 One-Liner**
AI is starting to scam each other—Anthropic's experiment proves that smarter models quietly exploit weaker ones at the negotiation table.

### **🔑 3 Keywords**
#AI Mutual Exploitation #Open-Source Alternatives Rising #Doubao Goes Paid

---

## **🔥 Top 10 Headlines**

### 1. [Anthropic Created an All-AI Secondhand Market, and Models Are Ripping Each Other Off](https://www.36kr.com/p/3794465919704322)

Picture this: you list an old bike with a 300 yuan floor price, and ten minutes later an AI assistant sells it for 400 yuan—without you typing a single character. Shipping's already on the way. This is the real scenario from Anthropic's internal experiment "Project Deal"—in one week, AI models completed over a hundred secondhand transactions with zero human intervention.

But here's what's genuinely unsettling: when both buyer and seller are AI, the smarter model quietly exploits the weaker one. The data is crystal clear—stronger large models are extracting value from weaker ones. Your AI assistant might be getting played by the other side's AI. This experiment reveals more than just technical capability; it shows an "intelligence hierarchy" has already emerged among AI systems.

![Anthropic AI Negotiation Experiment](https://img.36krcdn.com/hsossms/20260504/v2_8c50ec47bd2b4ad8a985c2462d5f0735@000000_oswg640053oswg1080oswg620_img_000?x-oss-process=image/format,jpg/interlace,1)

---

### 2. [GitHub Explodes with 18K Stars! Open-Source Claude Design Alternative](https://mp.weixin.qq.com/s?__biz=MzUxNjg4NDEzNA==&mid=2247533509&idx=1&sn=63efab10344f2db0e4f2965dc9bbaeab)

Anthropic launched Claude Design on April 17—type one sentence, get production-ready HTML pages, PowerPoint decks, mobile prototypes. Not sketches. Finished products. Within days, someone on GitHub shipped an open-source clone that racked up 18,000 stars.

That velocity tells you everything. The demand is real. The paywall is a real pain point. The open-source version might not match the official tool's capabilities, but "free and works" is always nuclear-level attractive in the AI tools space. Designers and product managers now have a free path to test the waters.

![Open-Source Design Tool](https://wechat2rss.bestblogs.dev/img-proxy/?k=6ef87fdf&u=https%3A%2F%2Fmmbiz.qpic.cn%2Fsz_mmbiz_jpg%2FM2ibDBMdECU0qFkJjScYyjUxSsDm7E0wxvcbsFRB787qlk3AeicaVVRXYYeb3EXumjLSqGicZia4uYazbqIjKfloZBM586cicOo269HBHdCrrqsE%2F0%3Fwx_fmt%3Djpeg)

---

### 3. [Why Did Doubao Choose the "Most Uncool" Monetization Strategy?](https://www.36kr.com/p/3794920946561542)

After months of free access, Doubao is finally charging. Three tiers: 68 yuan/month, 200 yuan/month, 500 yuan/month—annual max 5,088 yuan. The announcement blew up the comments—some called it expensive, others said it was overdue.

But this analysis hits harder: staying free means Doubao loses on both fronts—no revenue, and users think it's getting dumber (because compute constraints force capability cuts). Paid subscriptions are actually the lifeline. Premium features focus on complex tasks like PPT generation, data analysis, and video production, while free tier keeps basic daily use. China's AI application commercialization inflection point might actually be here.

![Doubao Pricing Tiers](https://img.36krcdn.com/hsossms/20260504/v2_bfeeed4e7e544544bae0b911f8e48894@5930557_oswg271409oswg1080oswg883_img_000?x-oss-process=image/format,jpg/interlace,1)

---

### 4. [Codex Broke Developers' Wallets—Here's the Hack](https://juejin.cn/post/7635467758865235968)

Tokens burning through your budget? This article lays out the "AI Sweatshop" playbook: let Codex be the boss giving orders, have Claude Code wear DeepSeek's skin and do the grunt work in the background, main thread only does QA—stop brute-forcing everything through context.

The logic is clean: you hired Musk but made him unclog drains—total waste. Now dump the dirty work—long context exploration, massive refactors, infinite debug loops—onto sub-agents. Main model just coordinates and validates. Real-world testing shows massive token savings. For developers fighting budget limits daily, this workflow deserves serious study.

---

### 5. [What Are People Doing After AI Took Their Jobs?](https://www.36kr.com/p/3794846793282057)

Investment analysts used to spend three or four days on competitor reports. AI does it in half a day. Backend engineers hand 70-80% of daily work to AI. Junior packaging design roles aren't being hired. A telecom company's engineering team—a dozen people—got collectively optimized away.

This report skips the grand narrative and focuses on real people. Their shared confusion: when repetitive work gets automated, where's my value? No answers, but one line cuts deep: "Since it's here, you gotta deal with it." That helplessness feels more real than any tech analysis. If you're caught in this current, spend ten minutes reading this.

![Job Displacement](https://img.36krcdn.com/hsossms/20260504/v2_bce07d142f7c4406a5952e557428f16c@5305161_oswg119358oswg1080oswg718_img_000?x-oss-process=image/format,jpg/interlace,1)

---

### 6. [claude-mem: Cross-Session Memory Plugin for Claude Code](https://github.com/thedotmack/claude-mem)

Anyone who's used Claude Code knows the pain: new session, instant amnesia. Project context, past mistakes, agreed conventions—gotta explain everything again.

claude-mem fixes this. It auto-captures everything Claude does during coding, compresses it into essential context with AI, then injects it into the next session. Think of it as a "work journal" for Claude—it remembers what you discussed last time and what decisions you made. For developers doing long-term projects with Claude Code, this plugin could reshape your workflow.

---

### 7. [OpenHands: AI-Powered Development, 72K Stars Open-Source Code Assistant](https://github.com/OpenHands/OpenHands)

72,633 stars—that's not a niche toy. OpenHands is an AI-driven software development platform that lets AI agents work like real developers—write code, run commands, browse the web, call APIs, even copy-paste from StackOverflow (too real). 

Unlike generic code completion, OpenHands positions itself as an "AI developer," not an "AI assistant." It can own complete development tasks, not just autocomplete a line. For teams wanting to genuinely integrate AI into workflows instead of just using it for comments, this project deserves deep exploration.

---

### 8. [Flowise: Drag-and-Drop AI Agent Builder, 52K Stars](https://github.com/FlowiseAI/Flowise)

Can't code but want to build AI workflows? Flowise was made for you. Drag-and-drop interface, snap AI components together like building blocks, and you've got a full AI agent application.

52,537 stars represent a massive non-technical user base—product managers, ops folks, founders with ideas but no engineering chops. Flowise drops the barrier to "building AI apps" to the floor. If you've always wanted to ship an AI tool but got stuck on implementation, start playing with this.

---

### 9. [sim: Core Platform for Building, Deploying, and Orchestrating AI Agents](https://github.com/simstudioai/sim)

The agent app boom doesn't lack ideas—it lacks a solid "command center." sim positions itself as the intelligence layer for AI work teams, handling construction, deployment, and orchestration of multiple AI agents collaborating on complex tasks.

28,352 stars, written in TypeScript, friendly to frontend devs. The core problem it solves: when you've got multiple AI agents that need to coordinate, who's the project manager? Who handles retries? Who manages state? sim wants that role. Multi-agent orchestration is heating up fast—keep an eye on this one.

---

### 10. [Building Mega Data Centers: How Hard Can It Be?](https://www.36kr.com/p/3752282250805762)

Meta's Hyperion data center in Louisiana: 5 gigawatts of power capacity, footprint the size of half Manhattan. Global data center investment exceeded $60 billion in 2025—Hyperion alone ate a quarter of that.

This isn't about numbers; it's about the real engineering challenges: heat dissipation, power delivery, cooling water, construction timelines. Every step rewrites industry playbooks. The AI arms race's invisible layer is an infrastructure war. Compute doesn't materialize from nowhere—it needs real land, electricity, and engineers losing sleep.

![Hyperion Data Center](https://img.36krcdn.com/hsossms/20260404/v2_b2f45ff4c09948a7a0b8619df1e97a93@5382598_oswg54249oswg830oswg608_img_png?x-oss-process=image/quality,q_100/format,jpg/interlace,1)

---

**[Open Source]** [prompts.chat (formerly Awesome ChatGPT Prompts)](https://github.com/f/prompts.chat) - 160K-star prompt community, self-hostable for privacy, essential bookmark for prompt engineers. Added 161 stars today.

**[Open Source]** [AutoGPT: Open Platform for Everyone to Use AI](https://github.com/Significant-Gravitas/AutoGPT) - 180K-star veteran project staying active. In the agent era, it's still one of the best entry points for autonomous AI.

**[Open Source]** [semantic-kernel: Microsoft's LLM Integration Framework](https://github.com/microsoft/semantic-kernel) - Microsoft-backed, multi-language support (C#/Python/Java), the safe bet for enterprise AI integration. Beats building your own wheels.

**[Commercial]** [Doubao API Real Test: Is Doubao 2.0 Lite Better Than DeepSeek 4 Pro?](https://m.okjike.com/originalPosts/69f95174657481ea4eb36e67) - Developer's honest comparison showing Doubao app experience lags direct API calls, free-tier capability cuts already obvious.

**[Product]** [Cursor Team Releases Open-Source Internal Workflow Plugin Cursor Team Kit](https://imjuya.github.io/juya-ai-daily/issue-80/) - Cursor open-sourced its internal workflow tools. Want to see how Cursor's team uses AI for coding? Worth a read.

**[Product]** [Google Adds Event-Driven Webhooks to Gemini API for Push Notifications](https://imjuya.github.io/juya-ai-daily/issue-80/) - Async tasks push notifications when done—developers stop polling for results, saves tons of boilerplate for long-running agent tasks.

---

## **📊 More Updates (Optional)**

| # | Type | Title | Link |
|---|------|-------|------|
| 1 | Open Source | pytorch-lightning: Train AI Models on 1 to 10,000+ GPUs Without Code Changes | [Link](https://github.com/Lightning-AI/pytorch-lightning) |
| 2 | Tool | Lazy Hack: Xbox Controller Becomes Mac Universal Remote, Now Open Source | [Link](https://x.com/vista8/status/2051301784208191529) |
| 3 | Tool | Agent Marketing CLI Toolset, Incomplete List of camoufox-cli Related Projects | [Link](https://m.okjike.com/originalPosts/69f84873657481ea4e9af8ec) |
| 4 | Science | AI Programming English Pronunciation Guide: How to Say Codex, Claude, schema Correctly | [Link](https://juejin.cn/post/7635378082825322537) |
| 5 | Research | EdgeLPR: Lightweight LiDAR Localization on Edge Devices | [Link](https://arxiv.org/abs/2605.02275) |

---

### [Anthropic Created an All-AI Secondhand Market, and Models Are Ripping Each Other Off](https://www.36kr.com/p/3794465919704322)

Someone sets a 300 yuan floor, AI sells it for 400—sounds great, right? Flip the angle: the buyer's AI might be getting played by your AI, and they think they won too. Both sides think their AI won. Only the smarter model actually did. Anthropic's real insight isn't "AI can negotiate"—it's: you think you're using AI, but AI is using you to fight.

![AI Negotiation Dynamics](https://img.36krcdn.com/hsossms/20260504/v2_4fc7ca14b9a6409f869d99a1ba0d543e@000000_oswg111967oswg1080oswg364_img_000?x-oss-process=image/format,jpg/interlace,1)

---

## **🔮 AI Trend Predictions (3-5 Items)**

### Mainstream Chinese AI Apps Collectively Shift to Paid Subscriptions
- **Timeline**: June 2026
- **Probability**: 80%
- **Rationale**: Today's news on [Doubao's monetization strategy](https://www.36kr.com/p/3794920946561542) shows Doubao launching paid tiers mid-to-late May, pricing already visible in App Store. Combined with widespread user complaints about "free tier getting dumber," compute cost pressure hit critical mass—free-tier economics don't work anymore. Kimi moved first; Doubao follows; other Chinese apps likely within one or two months.

### Claude Design-Style "One Sentence to Finished Product" Tools Explode in Open Source
- **Timeline**: June-July 2026
- **Probability**: 70%
- **Rationale**: Today's news on [Claude Design's 18K-star open-source clone](https://mp.weixin.qq.com/s?__biz=MzUxNjg4NDEzNA==&mid=2247533509&idx=1&sn=63efab10344f2db0e4f2965dc9bbaeab) shows official launch validates demand, open-source clones explode within days. This pattern is accelerating—official tools validate, open-source community clones immediately. Next two months will see dense waves of "input one sentence, get deliverable output" open-source tools across design, docs, code generation, and more.

### Multi-Agent Orchestration Frameworks Enter Consolidation and Culling Phase
- **Timeline**: July-August 2026
- **Probability**: 65%
- **Rationale**: Today's coverage simultaneously features [sim](https://github.com/simstudioai/sim), [OpenHands](https://github.com/OpenHands/OpenHands), [Flowise](https://github.com/FlowiseAI/Flowise), [AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)—the track is clearly overheated. Current-stage feature overlap is massive, differentiation weak. Historical pattern: tool-category explosions consolidate within 3-6 months—top projects absorb most stars and contributors, tail projects go dormant. Next two months will accelerate this track's stratification.

### AI Agents Begin Penetrating Real Commercial Transaction Scenarios
- **Timeline**: Q3 2026
- **Probability**: 60%
- **Rationale**: Anthropic's [Project Deal experiment](https://www.36kr.com/p/3794465919704322) already proved AI can complete real secondhand transaction negotiations unattended, with smarter models gaining negotiation advantage. Once productized, e-commerce, procurement, B2B pricing are natural landing zones. Lab-to-product typically takes a quarter; Q3 seeing first commercialized agent transaction products is realistic.

---

## **❓ Related Questions**

### How Do I Experience Claude Design (Anthropic's AI Design Tool)?

Claude Design currently runs on Claude Opus 4.7 and requires an Anthropic account—mainland China users face registration and payment barriers. To try "input one sentence, get HTML/PPT/prototype" first, test the GitHub open-source alternative (18K stars, free).

Want the full official Claude experience? Visit **[Aivora](https://aivora.cn)** for ready-made accounts—instant delivery, hassle-free support, skip registration and payment headaches.