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
## **Today's Summary**

```
Anthropic accuses seven Chinese companies of distilling Claude capabilities through hundreds of millions of requests, with Alibaba generating 150 million interactions between May and July.
Office assistant data leaks, Personal Agent taking over worrying, Coze and Grok positioning in task management—the fight is for workflow control, not single execution.
Today we'll look at the industry discussion on licensing boundaries in the distillation controversy, then try Phonon-2 local voice transcription and context-mode for reducing context consumption.
```

## **🔥 Today's Top 10 Focus**

### 1. Anthropic Names Seven Chinese Companies in Alleged Claude Distillation

**The accusation lands.** Anthropic named Alibaba, DeepSeek, Moonshot AI, Zhipu AI, Xiaomi, SenseTime, and MiniMax in a report, [accusing them of "distilling" Claude model capabilities through various methods](https://juejin.cn/post/7690769804492341298). Alibaba allegedly generated **150 million** interactions between **May and July**, while DeepSeek forwarded **12 million** user requests within **14 days**. The report argues this behavior reverse-engineers training data through model outputs. Controversy centers on licensing boundaries, technical path legitimacy, and how to distinguish normal use from improper extraction.

![Anthropic Distillation Accusation Report Cover](https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/b7f65734dfde4d08a8e77dfd172c105e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg56iL5bqP5ZGY5LqO6ICB5LiD:q75.awebp?rk3s=f64ab15b&x-expires=1791280318&x-signature=sDe1X5TB0oCCMBuq%2FRBV7xIDntM%3D "Anthropic Distillation Accusation Report Cover")

### 2. Developer Discovers AI Editor Data Leak While Investigating Disk Space

**Accidentally saved the day.** A developer tracking cache usage due to insufficient disk space accidentally accessed other users' project data in ZCode. According to a WeChat article, [his willingness to dig deep combined with years of technical blogging](https://mp.weixin.qq.com/s/TMGKfSIBVjj4psLghLkMjw) made the difference—missing either trait could have left the risk undetected longer. Tencent, Alibaba, and ByteDance are rolling out AI office assistants, meaning more sensitive information will flow in. Before using, confirm the vendor's **data isolation mechanisms** and **access permission review** 🔒 processes.

![ZCode Vulnerability Discovery Scenario](https://mmbiz.qpic.cn/sz_mmbiz_jpg/J3iaQ6X4GdYVh7yWxPnguaMZXEnvckLiboTNgP0zBpLdvdGsmyz8Gc8NqgyahasJpLYrXH8rgwA23SuSNo3OpmRQdUKkdqtiaIbR4QiczUuiaZ30/0?wx_fmt=jpeg "ZCode Vulnerability Discovery Scenario")

### 3. Six Questions Reveal Your True Stance on AI

**Only after taking it do you know which quadrant you're in.** Jike user Cui Xiaotian shared [a six-question binary-choice AI attitude test](https://m.okjike.com/originalPosts/6abd0e5bcfb5d08b3ede9b76). Questions cover trust levels, usage scenarios, and ethical boundaries. Tests like this help developers and product managers quickly identify attitude differences toward AI within teams or among users. Takes **15 seconds** to complete and see which category you belong to.

![AI Attitude Test Questionnaire](https://cdnv2.ruguoapp.com/FuCgUiN3osYEC_j6TjUVO5zkiJGlv3.png "AI Attitude Test Questionnaire")

### 4. Personal Agent vs. Codex: Who Does the Worrying

**Not just executing for you.** Jike user benn explains that **Codex** completes specific tasks but you still push things forward, while [Personal Agent can take over the "worrying" itself](https://m.okjike.com/originalPosts/6abcd60d987bd1a084c64589). For example, on Sumus.im, having agents report progress each morning includes tasks assigned yesterday and things mentioned casually weeks ago. Mental bandwidth is a scarce resource; outsourcing long-term follow-up lets you focus on higher-priority decisions. Try assigning an agent something that needs **continuous attention**.

![Personal Agent Morning Report Scenario](https://cdnv2.ruguoapp.com/li3xbpi6j-LXq3nfzKxDtu8rHvS2v3.png "Personal Agent Morning Report Scenario")

### 5. Coze and Grok Bot Both Testing Office Scenarios

**Chat windows start managing tasks.** Jike user OrangeCLK posted that [Coze and Grok Bot are both testing office scenarios](https://m.okjike.com/originalPosts/6abc77fa756bbb66583d96dc). Office scenarios require **bots** to access calendars 📅, pull data, and interface with external systems. If your team uses Feishu or DingTalk, try having a bot handle **repetitive communications** like organizing meeting minutes or syncing daily progress.

![Coze Office Bot Screenshot](https://cdnv2.ruguoapp.com/FjuHf4rH_7VdBW70oTe691pzplPMv3.jpg "Coze Office Bot Screenshot")

### 6. One Skill Converts Character Images to Minimalist Color Block Posters

**Highly stable.** Jike user Lanxi debugged a skill **supporting any image generation model** that [converts anime, live-action, and game characters into minimalist color block collage posters 🎨](https://m.okjike.com/originalPosts/6abbb9e5cfb5d08b3eb9c456), with adaptive scene completion. Works best with **GPT-Image-2.5**. Install with just `npx skills add lanxi-ai/flat-character-skill`. Perfect for creators needing to quickly produce stylized visual assets.

![Color Block Poster Effect Example](https://cdnv2.ruguoapp.com/FpDoznjTqyQNMN0K7KPxwnjqxBdwv3.png "Color Block Poster Effect Example")

### 7. Figure Has Gen-2 Robot Jump Into Molten Steel for Retirement

**Retirement is also tech protection.** Baoyu relays that Figure AI had Figure 02 humanoid robot 🤖 [jump into molten steel at a Finnish foundry to complete retirement](https://x.com/dotey/status/2105430166876869113), with the melted metal to be made into limited-edition memorabilia. Figure 02 previously worked at **BMW factories**, ran the in-house **Helix** AI model, and handled logistics. Continued maintenance became uneconomical, but disassembly would occupy engineer time and delay Gen-4 release. Foundries in the US and Mexico refused robots with lithium batteries. This method prevents core actuators from circulating while freeing up team resources.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2105429787619532800/vid/avc1/1920x1080/sxZf7ELUsTX_5d0G.mp4?tag=29"></video>

### 8. Auto-Generating AI News Videos Every Morning with Muse

**The workflow is validated.** Guizang shared that [using Muse to auto-generate AI news videos every morning](https://x.com/op7418/status/2105320934072865260). Steps include organizing content sources into Notion, finding assets, calling **K3** and **GLM 5.3** models via Pi on a virtual machine, assembling videos with guizang-product-video-skill, and sending back through the chat interface. This workflow proves agents can chain multiple local models, external tools, and custom skills. Try breaking down your daily repetitive information work into similar steps.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2105318020075937792/vid/avc1/1080x1920/WTblakTohbpEgzsv.mp4?tag=29"></video>

### 9. Gemini 4 Argon Output Limit Extended to 1 Million Tokens

**Longer outputs.** Google's official blog announced that [Gemini 4 Argon's output limit extends to 1 million tokens](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/), designed specifically for complex **long-cycle workflows** 🧠. Currently rolling out to participants in the Fairwind program for cybersecurity defenders. Suitable for scenarios requiring generation of large amounts of code, lengthy technical documentation, or deep reasoning outputs. Broader availability not yet announced.

![Gemini 4 Argon Release Image](https://pbs.twimg.com/media/HTfXYFTW4AEO1da?format=png&name=orig "Gemini 4 Argon Release Image")

### 10. context-mode Reduces AI Coding Agent Tool Output by 98%

**Context window optimization.** mksglu/context-mode gained **90** new stars on GitHub Trending today. [The project reduces context consumption by 98% through sandboxed tool outputs](https://github.com/mksglu/context-mode), supports persi