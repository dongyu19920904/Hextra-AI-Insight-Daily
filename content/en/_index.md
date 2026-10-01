---
linkTitle: AI Daily
title: AI 日报 2026/10/1：Anthropic 点名七家中国公司涉嫌蒸馏 Claude
breadcrumbs: false
next: /en/2026-10/2026-10-01
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
## **Today's Summary**

```
Anthropic accuses seven Chinese companies of distilling Claude capabilities through hundreds of millions of requests, with Alibaba generating 150 million interactions from May to July.
Office assistant data leaks, Personal Agent takeover of worrying, Coze and Grok positioning in task management—the battle is for workflow control, not single executions.
Today we look at the industry discussion on authorization boundaries in the distillation controversy, then try Phonon-2 local speech transcription and context-mode to reduce context footprint.
```

## **🔥 Today's Top 10**

### 1. Anthropic Names Seven Chinese Companies in Alleged Claude Distillation

**The accusation has arrived.** Anthropic named Alibaba, DeepSeek, Moonshot AI, Zhipu, Xiaomi, SenseTime, and MiniMax in a report, [accusing them of "distilling" Claude model capabilities through various methods](https://juejin.cn/post/7690769804492341298). Alibaba allegedly generated **150 million** interactions **from May to July**, while DeepSeek forwarded **12 million** user requests in **14 days**. The report argues this behavior reverse-engineers training data through model outputs. The controversy centers on authorization boundaries, technical path legitimacy, and how to distinguish normal use from improper extraction.

![Anthropic Distillation Accusation Report Cover](https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/b7f65734dfde4d08a8e77dfd172c105e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg56iL5bqP5ZGY5LqO6ICB5LiD:q75.awebp?rk3s=f64ab15b&x-expires=1791280318&x-signature=sDe1X5TB0oCCMBuq%2FRBV7xIDntM%3D "Anthropic Distillation Accusation Report Cover")

### 2. Developer Running Out of Disk Space Accidentally Discovers AI Editor Data Leak

**Accidentally saved the day.** A developer chasing cache usage due to low disk space accidentally obtained other users' project data from ZCode. According to a WeChat article, [his willingness to dig deep combined with years of technical blogging](https://mp.weixin.qq.com/s/TMGKfSIBVjj4psLghLkMjw) meant missing either trait could have let the risk persist longer. Tencent, Alibaba, and ByteDance are pushing AI office assistants, and more sensitive information will flow in. Before using, confirm the vendor's **data isolation mechanism** and **access permission audit** 🔒 process.

![ZCode Vulnerability Discovery Scenario](https://mmbiz.qpic.cn/sz_mmbiz_jpg/J3iaQ6X4GdYVh7yWxPnguaMZXEnvckLiboTNgP0zBpLdvdGsmyz8Gc8NqgyahasJpLYrXH8rgwA23SuSNo3OpmRQdUKkdqtiaIbR4QiczUuiaZ30/0?wx_fmt=jpeg "ZCode Vulnerability Discovery Scenario")

### 3. Six Questions Reveal Your Real Stance on AI

**You only know which quadrant you're in after taking it.** Jike user Cui Xiaotiantiantian forwarded [an AI orientation test with just six binary-choice questions](https://m.okjike.com/originalPosts/6abd0e5bcfb5d08b3ede9b76). Questions cover trust levels, use cases, and ethical boundaries. This type of test helps developers and product managers quickly identify team or user attitude differences toward AI. Takes **15 seconds** to complete—see which category you belong to.

![AI Orientation Test Questionnaire](https://cdnv2.ruguoapp.com/FuCgUiN3osYEC_j6TjUVO5zkiJGlv3.png "AI Orientation Test Questionnaire")

### 4. Personal Agent vs. Codex: The Difference Is Who Does the Worrying

**Not just executing for you.** Jike user benn explains that **Codex** completes specific tasks for you but things still need your push, while [Personal Agent can take over the "worrying" itself](https://m.okjike.com/originalPosts/6abcd60d987bd1a084c64589). For example, on Sumus.im, have agents report progress every morning, including tasks assigned yesterday and casually mentioned weeks ago. Mental bandwidth is a scarce resource—handing off long-term follow-up lets you focus on higher-priority decisions. Try assigning an agent something that needs **continuous attention**.

![Personal Agent Morning Report Scenario](https://cdnv2.ruguoapp.com/li3xbpi6j-LXq3nfzKxDtu8rHvS2v3.png "Personal Agent Morning Report Scenario")

### 5. Coze and Grok Bot Both Testing Office Scenarios

**Chat boxes are starting to manage tasks.** Jike user OrangeCLK posted that [Coze and Grok Bot are both testing office scenarios](https://m.okjike.com/originalPosts/6abc77fa756bbb66583d96dc). Office scenarios require **bots** that can call calendars 📅, pull data, and interface with external systems. If your team uses Feishu or DingTalk, try handing **repetitive communication** to bots, like meeting minutes compilation or daily progress syncs.

![Coze Office Bot Screenshot](https://cdnv2.ruguoapp.com/FjuHf4rH_7VdBW70oTe691pzplPMv3.jpg "Coze Office Bot Screenshot")

### 6. One Skill Converts Character Images into Minimalist Block Posters

**Very stable.** Jike user Lanxi debugged a skill that **supports any generative model** and [converts anime, live-action, or game characters into minimalist block-assembled posters 🎨](https://m.okjike.com/originalPosts/6abbb9e5cfb5d08b3eb9c456) with adaptive scene completion. **GPT-Image-2.5** works best. Install with just `npx skills add lanxi-ai/flat-character-skill`. Great for creators needing quick stylized visual assets.

![Block Poster Effect Example](https://cdnv2.ruguoapp.com/FpDoznjTqyQNMN0K7KPxwnjqxBdwv3.png "Block Poster Effect Example")

### 7. Figure Lets Gen-2 Robot Jump into Molten Steel to Retire

**Retirement is also tech protection.** Baoyu relays that Figure AI had the Figure 02 humanoid robot 🤖 [jump into molten steel at a Finnish foundry to complete its retirement](https://x.com/dotey/status/2105430166876869113), with the melted metal becoming limited-edition memorabilia. Figure 02 once worked at the **BMW factory**, ran the proprietary AI model **Helix**, and completed logistics work. Continued maintenance wasn't cost-effective, but dismantling would occupy engineer time and delay Gen-4 launch. Neither U.S. nor Mexican foundries would accept robots with lithium batteries. This method prevents core actuators from leaking out while freeing team resources.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2105429787619532800/vid/avc1/1920x1080/sxZf7ELUsTX_5d0G.mp4?tag=29"></video>

### 8. Using Muse to Auto-Generate AI News Videos Every Morning

**The pipeline is working.** Guizang shares that [using Muse to auto-generate AI news videos every morning](https://x.com/op7418/status/2105320934072865260). The process starts by organizing content sources to Notion, finding materials, calling **K3** and **GLM 5.3** models through Pi in a VM, assembling videos with guizang-product-video-skill, and finally sending back via chat interface. This workflow proves agents can string together multiple local models, external tools, and custom skills. Try breaking down your own daily information-gathering work into similar steps.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2105318020075937792/vid/avc1/1080x1920/WTblakTohbpEgzsv.mp4?tag=29"></video>

### 9. Gemini 4 Argon Output Limit Extended to 1 Million Tokens

**Longer output.** Google's official blog announced that [Gemini 4 Argon's output limit extends to 1 million tokens](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/), designed for complex **long-cycle workflows** 🧠. Currently rolling out to Fairwind program participants in cybersecurity defense. Suitable for scenarios requiring massive code generation, long technical documentation, or deep reasoning output. Broader availability not yet announced.

![Gemini 4 Argon Launch Image](https://pbs.twimg.com/media/HTfXYFTW4AEO1da?format=png&name=orig "Gemini 4 Argon Launch Image")

### 10. context-mode Reduces AI Coding Agent Tool Output by 98%

**Context window optimization.** mksglu/context-mode gained **90** new Stars on GitHub Trending today. [The project reduces context footprint by 98% through sandboxed tool output](https://github.com/mksglu/context-mode), supports persistent session memory, and enforces routing across **17 platforms** via MCP + ho