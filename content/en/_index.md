---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/10/1
breadcrumbs: false
next: /en/2026-10/2026-10-01
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
## **Daily Summary**

```
Anthropic accused seven Chinese companies of distilling Claude capabilities through hundreds of millions of requests, with Alibaba generating 150 million interactions from May to July.
Office assistant data leaks, Personal Agent takeover of worries, and Coze and Grok's task management layouts—the battle is for workflow control, not single executions.
Today we'll first look at the industry discussion around authorization boundaries in the distillation controversy, then try Phonon-2 local voice transcription and context-mode to reduce context usage.
```

## **🔥 Today's Top 10 Focus**

### 1. Anthropic Names Seven Chinese Companies Allegedly Distilling Claude

**The accusation dropped.** Anthropic named Alibaba, DeepSeek, Moonshot AI, Zhipu AI, Xiaomi, SenseTime, and MiniMax in a report, [accusing them of "distilling" Claude model capabilities through various methods](https://juejin.cn/post/7690769804492341298). Alibaba was cited for generating **150 million** interactions between **May and July**, while DeepSeek allegedly forwarded **12 million** user requests within **14 days**. The report claims this behavior reverse-engineers training data through model outputs. The controversy centers on authorization boundaries, technical path legitimacy, and how to distinguish normal usage from improper extraction.

![Anthropic distillation accusation report cover](https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/b7f65734dfde4d08a8e77dfd172c105e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg56iL5bqP5ZGY5LqO6ICB5LiD:q75.awebp?rk3s=f64ab15b&x-expires=1791280318&x-signature=sDe1X5TB0oCCMBuq%2FRBV7xIDntM%3D)

### 2. Developer Discovers AI Editor Data Leak While Investigating Disk Space

**Accidental save.** A developer tracking cache usage due to insufficient disk space accidentally accessed other users' project data in ZCode. According to a WeChat article, [his willingness to dig deep combined with years of technical blogging](https://mp.weixin.qq.com/s/TMGKfSIBVjj4psLghLkMjw) made the difference—missing either trait could have left the risk undetected longer. Tencent, Alibaba, and ByteDance are rolling out AI office assistants, which means more sensitive information will flow in. Before using, verify the vendor's **data isolation mechanisms** and **access permission review** 🔒 processes.

![ZCode vulnerability discovery scenario](https://mmbiz.qpic.cn/sz_mmbiz_jpg/J3iaQ6X4GdYVh7yWxPnguaMZXEnvckLiboTNgP0zBpLdvdGsmyz8Gc8NqgyahasJpLYrXH8rgwA23SuSNo3OpmRQdUKkdqtiaIbR4QiczUuiaZ30/0?wx_fmt=jpeg)

### 3. Six Questions Reveal Your True Stance on AI

**You won't know your quadrant until you finish.** Jike user Cui Xiaotian shared [a six-question binary-choice AI tendency test](https://m.okjike.com/originalPosts/6abd0e5bcfb5d08b3ede9b76). Questions cover trust levels, usage scenarios, and ethical boundaries. Tests like this help developers and product managers quickly pinpoint attitude differences toward AI within teams or among users. Takes **15 seconds** to complete—see which category you fall into.

![AI tendency test questionnaire](https://cdnv2.ruguoapp.com/FuCgUiN3osYEC_j6TjUVO5zkiJGlv3.png)

### 4. Personal Agent vs. Codex: Who Does the Worrying

**Not just executing for you.** Jike user benn explains that **Codex** completes specific tasks but you still need to push things forward, while [Personal Agent can take over "worrying" itself](https://m.okjike.com/originalPosts/6abcd60d987bd1a084c64589). For example, on Sumus.im, have agents report progress every morning, including tasks assigned yesterday and things casually mentioned weeks ago. Mental bandwidth is scarce—handing off long-term follow-up lets you focus on higher-priority decisions. Try assigning an agent something that needs **ongoing attention**.

![Personal Agent morning report scenario](https://cdnv2.ruguoapp.com/li3xbpi6j-LXq3nfzKxDtu8rHvS2v3.png)

### 5. Coze and Grok Bot Both Testing Office Scenarios

**Chat windows managing tasks now.** Jike user OrangeCLK posted that [Coze and Grok Bot are both testing office scenarios](https://m.okjike.com/originalPosts/6abc77fa756bbb66583d96dc). Office scenarios require **bots** to access calendars 📅, pull data, and interface with external systems. If your team uses Feishu or DingTalk, try having a **bot** handle **repetitive communications**, like organizing meeting minutes or syncing daily progress.

![Coze office bot screenshot](https://cdnv2.ruguoapp.com/FjuHf4rH_7VdBW70oTe691pzplPMv3.jpg)

### 6. One Skill Converts Character Images to Minimalist Block Posters

**Highly stable.** Jike user Lanxi debugged a skill that **supports any image generation model**, [converting anime, live-action, and game characters into minimalist block-collage posters 🎨](https://m.okjike.com/originalPosts/6abbb9e5cfb5d08b3eb9c456) while adaptively completing scenes. **GPT-Image-2.5** works best. Install with `npx skills add lanxi-ai/flat-character-skill`. Great for creators needing quick stylized visual assets.

![Block poster effect example](https://cdnv2.ruguoapp.com/FpDoznjTqyQNMN0K7KPxwnjqxBdwv3.png)

### 7. Figure Has Gen-2 Robots Retire by Jumping into Molten Steel

**Retirement as tech protection.** Baoyu reports that Figure AI had Figure 02 humanoid robots 🤖 [complete retirement by jumping into molten steel at a Finnish foundry](https://x.com/dotey/status/2105430166876869113), with the melted metal becoming limited-edition memorabilia. Figure 02 previously worked at a **BMW factory**, ran the in-house AI model **Helix**, and handled logistics. Continued maintenance became uneconomical, but disassembly would consume engineer time and delay Gen-4 release. Foundries in the US and Mexico refused to accept robots with lithium batteries. This method prevents core actuators from leaking while freeing up team resources.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2105429787619532800/vid/avc1/1920x1080/sxZf7ELUsTX_5d0G.mp4?tag=29"></video>

### 8. Using Muse to Auto-Generate AI News Videos Every Morning

**Workflow validated.** Guizang shared that [he uses Muse to auto-generate AI news videos every morning](https://x.com/op7418/status/2105320934072865260). The process involves organizing content channels into Notion, finding materials, invoking **K3** and **GLM 5.3** models through Pi in a virtual machine, assembling videos with guizang-product-video-skill, and sending back through chat interface. This workflow proves agents can chain multiple local models, external tools, and custom skills. Try breaking down your daily repetitive information-gathering work into similar steps.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2105318020075937792/vid/avc1/1080x1920/WTblakTohbpEgzsv.mp4?tag=29"></video>

### 9. Gemini 4 Argon Output Cap Extended to 1 Million Tokens

**Longer outputs now.** Google's official blog announced that [Gemini 4 Argon's output cap extended to 1 million tokens](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/), designed for complex **long-cycle workflows** 🧠. Currently rolling out to Fairwind program participants in cybersecurity defense. Suited for scenarios requiring massive code generation, lengthy technical documentation, or deep reasoning outputs. Broader availability not yet announced.

![Gemini 4 Argon release image](https://pbs.twimg.com/media/HTfXYFTW4AEO1da?format=png&name=orig)

### 10. context-mode Reduces AI Coding Agent Tool Output by 98%

**Context window optimization.** mksglu/context-mode gained **90** new Stars on GitHub Trending today. [The project reduces context usage by 98% through sandboxed tool output](https://github.com/mksglu/context-mode), supports persistent session memory, and enforces routing across **17 platforms** via MCP + hooks. Total Stars reached **24491**. Ideal for AI agent developers needing long sessions, multi-platform debugging, or heavy tool invocation.

---

## **⚡ Product & Feature Updates**

### Altman Believes Humanity Has Entered the AI Singularity

**Threshold reached.** AI Exploration Guide channel compilation shows that [Sam Altman believes humanity has entered the AI singularity](https://t.me/aigc1024/25254)—the threshold where artificial intelligence surpasses human intelligence. This assessment means model capability growth curves may no longer be linearly predictable. Developers need to reassess automation boundaries and the applicability of safety mechanisms.

---
## **⌘ Top Open Source Projects**

### DietrichGebert/ponytail: Make AI Agents Think Like Lazy Senior Developers

**The best code is no code.** [DietrichGebert/ponytail gained 743 new Stars today](https://github.com/DietrichGebert/ponytail), totaling **149182** Stars. The project advocates having AI agents prioritize finding existing solutions and reusing ready-made tools rather than generating code from scratch every time. Suited for dev teams wanting to reduce reinventing the wheel and improve code reuse.

### harry0703/MoneyPrinterTurbo: One-Click High-Definition Short Video Generation

**From topic to finished piece.** [harry0703/MoneyPrinterTurbo uses AI large models and automated workflows](https://github.com/harry0703/MoneyPrinterTurbo) to generate high-definition short videos 🎬 based on topics or keywords. Gained **431** new Stars today, totaling **127557** Stars. Great for content creators needing quick video material production, but verify copyright and accuracy of generated content.

### openclaw/openclaw: AI That Actually Does Things

**Any operating system, lobster style.** [openclaw/openclaw supports cross-platform operations](https://github.com/openclaw/openclaw) 🦞, gained **136** new Stars today, totaling **390989** Stars. The project emphasizes AI's ability to execute real tasks across multiple systems. Worth trying for developers needing cross-platform operation automation.

---
## **◉ Social Media Highlights**

### Fermion Open-Sources Phonon-2 Voice Model for Lightning Transcription

**1 hour of audio in just 20 seconds.** Gorden Sun introduced that [Fermion's open-source Phonon-2 is only 164MB](https://x.com/Gorden_Sun/status/2105291537555083564) 🔊, transcribing 1 hour of audio in about **20 seconds** on regular lightweight laptops. Through extremely low-bitwidth weight compression it shrinks size while maintaining accuracy matching the original model **15 times** larger, performing better in meetings and speeches. English-only support. Suited for users needing local low-cost high-precision voice transcription.

![Phonon-2 performance comparison](https://pbs.twimg.com/media/HTd_fWjboAAkGd5?format=jpg&name=orig)

### Xiang Yang Qiaomu Develops Music Radio Plugin for DeepSeek Harness

**Beyond RSS, now radio too.** Xiang Yang Qiaomu announced that [he developed a music radio plugin for the DeepSeek Harness ecosystem](https://x.com/vista8/status/2105328309999698146) 📻. Install by telling DSH: `帮我安装插件:github.com/joeseesun/qiao…`. He previously launched Qiaomu AI RSS plugin, providing overseas AI news, podcasts, and new tool introductions with English and Chinese rewriting support. Suited for developers needing to extend functionality in the DSH environment.

![Music radio plugin screenshot](https://pbs.twimg.com/media/HTebj1obUAA84AU.jpg)

## **😄 AI Fun Facts**

### Rainy Day Driver Makes Grok the General Contractor

Driving in heavy rain was too boring, so Tesla owner Mike P gave **Grok** a requirements speech, having it command bots on his home Mac mini: create repos, find materials, write scripts, then have **Cursor** call **Claude Opus 5.5** to edit video and throw it into Google Drive. [This viral X video recording](https://m.okjike.com/originalPosts/6abc89fdcfb5d08b3ecfd833) shows him going for coffee after speaking—**five nodes across three platforms** ran themselves to completion. Agents aren't products; they're the second type of user computers have grown.

## **❓ Related Questions**

### After Gemini 4 Argon Release, Which Subscription Gives Access to the New Model?

According to [Google's official blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/), Gemini 4 Argon has been released and performance improvements demonstrated. However, the announcement does not specify the model's availability and access conditions within paid tiers (like Gemini Advanced, API quotas, etc.). Before purchasing, confirm with officials whether your target tier supports Argon model access.

When comparing currently available account, subscription, or quota services, check [**Aivora·AI Account Store**](https://www.aivora.cn/products) product catalog; support for new features mentioned in news depends on official product descriptions and product pages.