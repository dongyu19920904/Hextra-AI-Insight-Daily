---
linkTitle: AI Daily
title: AI 日报 2026/10/11：不输出文本的 AI 模型三周估值暴涨 37 倍
breadcrumbs: false
next: /en/2026-10/2026-10-11
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
## **Today's Summary**

```
TypeSafe AI hits a $7.5B valuation in three weeks. Jev model returns structured decisions directly — no text output. Hit 1 trillion tokens generated in just 3 days of launch.
A pattern across multiple sections today: the value of Agents is shifting away from general capability and toward which data ecosystem they're locked into.
Start with item #8 (the comparison review) and item #5 (the podcast), then decide whether your current Agent tools are worth renewing.
```

## **🔥 Top 10 Highlights Today**

### 1. The AI Model That Outputs Zero Text Just 37x'd Its Valuation in Three Weeks

**Decisions straight out, no text involved.** [The AI model that outputs zero text just 37x'd its valuation in three weeks](https://www.36kr.com/p/4019993444503425) — Jev launched on September 15th, and developer TypeSafe AI closed an **$870M** funding round led by a16z, hitting a $7.5B valuation. Just 3 days after launch, it crossed **1 trillion tokens** generated, and roughly one-third of Fortune 500 companies are already plugged in. Backend devs who need to wire LLM output into structured decision pipelines should take a look at Jev's API design today.

![TypeSafe AI Funding Round and Jev Model Architecture Overview](https://img.36krcdn.com/hsossms/20261010/v2_e26c4224bd40478ebeb9098755983a9c@000000_oswg48441oswg1080oswg626_img_000?x-oss-process=image/format,jpg/interlace,1 "TypeSafe AI Funding Round and Jev Model Architecture Overview")

---

### 2. Full 3D Dragon Modeled in Pure Code — LLM Handles the Whole Pipeline Solo

**LLM spits out complete 3D modeling code start to finish.** A Jike user documented the whole thing in [Full 3D Dragon Modeled in Pure Code — LLM Handles the Whole Pipeline Solo](https://m.okjike.com/originalPosts/6aca700e756bbb6658acc03d): the LLM built an incredibly detailed 3D dragon purely through code, handling everything from geometry construction to materials entirely on its own. The blogger then casually asked Grok Bot to pull the entire complex thread and reformat it into a long-form Chinese article — **concept breakdowns and related links** included. For anyone who needs to digest dense technical threads, this is an instantly reusable mobile reading workflow 📱.

![Screenshot of Grok Bot Reformatting a Tweet Thread into a Long-form Chinese Article](https://cdnv2.ruguoapp.com/FpGv_r1xaNB0sPUfrjtaUHN67r2Tv3.jpeg "Screenshot of Grok Bot Reformatting a Tweet Thread into a Long-form Chinese Article")

---

### 3. Codex Quota Resets on US Eastern Time Every Day

**Codex reset time varies by region — heads up.** A V2EX user confirmed in [Codex Quota Resets on US Eastern Time Every Day](https://www.v2ex.com/t/1247751#reply4) that the Codex quota refreshes around 15:00–16:00 Beijing time, which lines up with the US Eastern EOD (End of Day). This means users in China **don't have to wait until the next morning** — the refresh happens in the afternoon and you're good to go. Heavy Codex users can plan around this and schedule their bulky batch jobs **right after the reset window** ⏰.

![Screenshot of Codex Quota Reset Timing](https://i.imgur.com/Aq4xVN7.png "Screenshot of Codex Quota Reset Timing")

---

### 4. Manus New User First-Day Experience Sparks a Product Discussion Wave

**Manus is opening up.** Jike user Yu Yi shared their first impressions after joining Manus in [a first-day journal post](https://m.okjike.com/originalPosts/6aca487e756bbb6658a88371), and opened the floor for **use case discussion and feedback**. **Product experience, UX, and monetization paths** are all fair game in the thread. If you're curious what Manus actually feels like in practice, hop into the comments 💬.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://videocdnv2.ruguoapp.com/lsZ5N_p3cqt1iQe-utvzC6JitBPo.mp4?sign=9253a7a483b76fc8f4196e26766cc948&t=6acb204d"></video>

---

### 5. YouMind Founder on How AI Apps Avoid Getting Swallowed by the Models

**AI apps are getting squeezed from both directions.** YouMind founder Yubo laid it all out in [YouMind Founder on How AI Apps Avoid Getting Swallowed by the Models](https://m.okjike.com/originalPosts/6ac97f3e756bbb66589314ae): model providers attacking from above, vertical specialists eating industry know-how from below, and **general-purpose middle-layer apps** caught in the worst spot of all. His take: the moat is in locking down a specific data ecosystem, not in building something that can "**do everything**." Anyone building AI apps or evaluating investment direction — this is a solid mental framework to steal 🧠.

---

### 6. REA Plugs Reverse Engineering Capability Directly into Coding Agents

**Agents can now read assembly and call graphs directly.** REA (Reverse Engineer Anything) exposes a reverse engineering interface to coding agents via MCP protocol — check out [rea.tools](https://rea.tools/). When an agent sends a request, REA returns structured outputs like **pseudocode, strings, and call graphs**, which the agent uses to interpret program behavior and keep digging. Deep native analysis still requires Ghidra or IDA installed locally; analysis runs **on-device**, but results do get passed to the connected model, so its data policy still applies 🔍.

---

### 7. AI Is Quietly Killing the Motivation to Connect with Other People

**The more AI generates, the less humans exchange.** Engineer Fernando Borretti argues in [this long read](https://borretti.me/article/no-man-is-an-island) that knowledge communities depend on feedback, citations, and collaboration to sustain long-term motivation — when readers are replaced by models, the point of sharing articles and open-source code starts to feel hollow. His worry: even as AI lets everyone produce more, **the number of people doing sustained research and creative work** may actually shrink. This is the author's personal take — no systematic survey data backs it up.

---

### 8. Four AI Agents Compared Head-to-Head: Entry Points, Billing, and the Middle-Layer Trap

**Straight talk on Agents from a regular user's perspective.** Jike user Su Xiaowan reviewed Manus, Muse, Doubao Office, and WorkBuddy in [Four AI Agents Compared Head-to-Head: Entry Points, Billing, and the Middle-Layer Trap](https://m.okjike.com/originalPosts/6acafa95141b85b2927fd9d2) and landed on three verdicts: an agent's real competitive edge is which enterprise data it's wired into; **credit-based billing** offloads cost uncertainty onto the user, which is the biggest blocker for corporate procurement; and general-purpose middle-layer agents are the most awkward players in the stack, squeezed between model providers and vertical apps. For enterprise users picking Agent tools, the first question should be: "**which company data does it actually connect to?**" 🎯

---

### 9. TensorFlow Lands on Today's GitHub Trending

**TensorFlow is getting community love again.** [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) picked up **26 new Stars** today, bringing the cumulative total to **200,797 Stars**. As an open-source ML framework covering both training and inference, it remains the go-to choice in a huge number of production deployments. Teams currently evaluating foundational framework options might want to do a current-state comparison between TensorFlow and JAX before deciding ⚖️.

---

### 10. The Cognitive Load of AI Collaboration Deserves Serious Attention

**The most draining thing? When AI throws questions that are way outside your knowledge zone.** Product designer Shao Nan described a very real kind of collaboration fatigue in [this Jike post](https://m.okjike.com/originalPosts/6acaddd6756bbb6658b7323e): AI constantly surfacing questions beyond the user's current expertise, forcing vague or half-confident answers — and that **state of perpetual ambiguity** accumulates into serious mental load over time. This observation is highly relevant for anyone who's a heavy daily AI user, and it's a nudge that **task decomposition clarity** deserves more attention than the choice of tool itself 🧩.

---

## **⚡ Product & Feature Updates**

### MiniMax M3's Sparse Attention Design Makes Long-Context Processing Way Faster

**Sparse attention plus block-level retrieval — less VRAM pressure.** MiniMax researcher Olive Song explained M3's core design in [this technical talk](https://www.bestblogs.dev/en/video/427fee254?utm_source=rss&utm_medium=feed&utm_campaign=resources&entry=rss_article_item): a lightweight index branch first filters candidate tokens, the main branch only computes over those, and block-level retrieval makes memory reads more sequential. The strategy of training vision and text simultaneously from scratch largely preserves text capability within the same token budget 🔊. The speaker claims prefill and decode are faster than full attention, but the specific benchmark methodology wasn't disclosed during the talk.

---

## **⌘ Open Source Top Picks**

### mksglu/context-mode: A Context Compressor for AI Coding Agents

**98% reduction in tool output noise, with persistent session memory.** The core capability of [mksglu/context-mode](https://github.com/mksglu/context-mode) is sandboxing tool output — using MCP + hooks to enforce routing across 17 platforms, keeping AI coding agents from slowing down due to context bloat on long tasks. Today it picked up **178 new Stars**, with a cumulative total of 26,461 Stars. If you're running long-context coding sessions and watching your token budget explode, this is worth a direct try today 🛠️.

---

### hugohe3/ppt-master: One-Click Conversion from Documents to Native PowerPoint

**Input a topic or document, get a .pptx file with animations and narration.** [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) supports native shapes, transition animations 🎞️, data-driven charts, and speaker note audio, with custom .pptx template support. Today it added **461 new Stars**, bringing the total to 59,787 Stars — the biggest daily gain of any AI project today. Operations and consulting folks who need to batch-produce content-heavy presentations should grab a real document and run it through first to see what you actually get.

---

### huggingface/transformers: A Unified Inference and Training Framework for Multimodal Models

**Text, vision, audio, multimodal — one framework covers it all.** [huggingface/transformers](https://github.com/huggingface/transformers) provides state-of-the-art model definitions with full support from inference to training, and is currently the most widely used model loading standard in the community. Today it gained **96 new Stars**, with a cumulative total of 167,392 Stars. For researchers and engineers who need to quickly plug in new models or swap multimodal capabilities, Transformers is still the lowest-friction starting point 🤗.

---

## **◉ Social Media Picks**

### Guizang: The AI Open-Source and Game Cracking Conversation Has Been Around Longer Than You Think

**The "everything will be open-sourced" discourse just blew up — but it's not new.** Blogger Guizang pointed out in [this tweet](https://x.com/op7418/status/2109159416599883861) that the topics of AI open-source inevitability and game cracking were already covered in detail on the Next Token podcast days earlier, only reaching wider audiences today. They rounded up the podcast's key arguments with accompanying screenshots. **Industry signals almost always arrive before the hype peaks** — following primary sources beats waiting for things to trend 📡.

![Next Token Podcast Key Takeaways Summary](https://pbs.twimg.com/media/HUU9TYoaIAAycUV?format=jpg&name=orig "Next Token Podcast Key Takeaways Summary")

---

### Xiangyangqiaomu: Using Codex Computer Use to Edit a Sub-1-Minute Video Took 27 Minutes

**It works — but nowhere near production-ready speed.** Xiangyangqiaomu documented the full process of using Codex's Computer Use feature to auto-edit in CapCut in [this hands-on tweet](https://x.com/vista8/status/2109088491451900130): a video under 1 minute took the entire workflow **27 minutes** to complete. Their conclusion: they plan to write a dedicated Skill that goes straight from screen recording to edit pipeline, which should be significantly faster. This hands-on test makes it clear that Computer Use's general-purpose path still has a serious performance bottleneck — worth waiting for specialized workflows to mature before committing ⏳.

![Screenshot of Codex Computer Use Operating CapCut in the Hands-on Test](https://pbs.twimg.com/media/HUT8OCKawAExbW2.jpg "Screenshot of Codex Computer Use Operating CapCut in the Hands-on Test")

---

### Baoyu Summarizes: magpie's New Feature Tunes Token Compression Per Agent

**One setting doesn't fit all — personalized token configs per agent and user.** Baoyu referenced magpie's findings in [this repost](https://x.com/dotey/status/2108972823440220375): the context compression threshold for tools like Claude Code doesn't have a universal optimal value — each agent and each user's habits lead to wildly different optimal configs. magpie's new "tune it for you" feature replays compression thresholds and cache durations against real local call data to calculate the **most token-efficient config for your specific usage patterns**. Developers running long Claude Code sessions and watching quota burn faster than expected — this tool is worth checking out 🔧.

![magpie Local Tuning Feature Illustration](https://pbs.twimg.com/media/HUQ6WLWbUAAfzqi?format=jpg&name=orig "magpie Local Tuning Feature Illustration")

---

## **😄 AI Fun Stuff**

### The Architect Title Barely Warmed Up Before Claude Started Sending Out Résumés

Product launches love the word "empower," but **Claude Code Projects** just put the goal right in the README: replace architects. **Pro and Max users** woke up yesterday to find the waitlist completely cleared — zero queue, full access, no slow rollout necessary. The workflow is pretty blunt too: you throw it [a complete demo of a massive task being handed off to Claude for automatic planning and breakdown](https://x.com/Gorden_Sun/status/2108941921926382035), and it figures out the rest. Watch the official **4-minute** getting-started video and you'll find someone already updating their résumé — not Claude, the architect sitting right next to it 😅.

## **❓ Related Questions**

### Codex subscribers using Computer Use to edit in CapCut are waiting half an hour per video — any way to speed it up?

**The slowness isn't a subscription issue — letting AI "watch the screen and click around" is just inherently slow.** In [today's hands-on test](https://x.com/vista8/status/2109088491451900130), a sub-1-minute video took 27 minutes because Computer Use relies on screenshot-based UI recognition followed by step-by-step clicking — every single step introduces latency. A better approach: write the editing logic as a Skill and have the code call CapCut's or ffmpeg's CLI directly, bypassing the UI entirely — the speed difference will be dramatic. For Codex quota allocation, check the [official pricing page](https://developers.openai.com/codex/pricing/) to confirm it fits code-heavy workloads before committing; for accounts, check out [Aivora AI Account Store's Codex listings](https://www.aivora.cn/products) 🛒.