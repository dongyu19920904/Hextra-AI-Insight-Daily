---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/5/22
breadcrumbs: false
next: /en/2026-05/2026-05-22
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
# Daily Summary

```
Nvidia's data center revenue hit $75.2B in a single quarter, doubling year-over-year—AI compute demand hasn't peaked yet.
Manus founders are planning to raise $1B to buy back their company from Meta; Tencent open-sourced a translation-specific small model ready to use.
Today's three main threads: compute scaling, Agent development, and localized deployment—all moving simultaneously, worth diving into.
```

## ⚡ Quick Navigation

- [📰 Today's AI News](#todays-ai-news) - Latest updates at a glance

> 💡 **Tip**: Want to experience the latest AI models mentioned in this article (Claude 4.5, GPT, Gemini 3 Pro) right now? No account? Grab one at [**Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content)—one-minute setup, hassle-free support.

## **Today's AI News**

### **👀 One-Liner**
Nvidia's data center revenue hit $75.2B in a single quarter—that's the number worth remembering today.

### **🔑 3 Keywords**
#ComputeExplosion #ManusEscape #OpenSourceTranslation

---

## **🔥 Top 10 Headlines**

### 1. [Nvidia Earnings Crush Expectations Across the Board](https://www.36kr.com/p/3818422732882820)

Data center segment: $75.2B in a single quarter. Last year at this time? Under $40B. Nearly doubled, and beat analyst expectations of $73.4B.

This isn't a single product line popping off—it's the entire AI infrastructure demand exploding collectively. Nvidia's Q1 total revenue: $81.6B, up 85% year-over-year. EPS: $1.87, beating expectations. Q2 guidance also came in hot.

Stock rallied after hours, then dropped 1.6%. This "sell the news" pattern has happened 4 out of Nvidia's last 5 earnings. But don't let the stock price fool you—the numbers themselves tell one story: AI compute demand hasn't hit its ceiling yet.

![Nvidia earnings chart](https://img.36krcdn.com/hsossms/20260521/v2_202e3e64c40f4d578a2934403557831c@1743780481_oswg35528oswg885oswg372_img_000?x-oss-process=image/format,jpg/interlace,1)

---

### 2. [Manus Founders Plan $1B Fundraise to Buy Back Company from Meta](https://m.okjike.com/originalPosts/6a0ed759af7695b4cf0edd50)

The timeline on this story is wild. Meta announced a $2-3B acquisition of Manus in late 2025. Mid-April, China's regulators demanded Meta cancel the deal. Now Manus's three founders—Xiao Hong, Ji Yichao, Zhang Tao—are in talks to raise roughly $1B from external investors to buy the company back from Meta.

The new valuation reportedly needs to match Meta's original $2B acquisition price. Translation: the founders are spending $2B to redeem their own company.

Manus blew up as the "universal AI Agent" play, getting called the Chinese DeepSeek successor. If this buyback succeeds, it'll restart as a fully independent Chinese AI company. Bloomberg reported it; Manus hasn't commented yet.

![Manus news screenshot](https://cdnv2.ruguoapp.com/FgYNoO6ClwMYpnT7faLd1oOCieXIv3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient)

---

### 3. [Tencent Open-Sources Translation-Specific Model Covering 1.8B to 30B Parameters](https://x.com/Gorden_Sun/status/2057479611811053836)

Generic large models have always had a translation problem: smaller parameters = worse output. Tencent just open-sourced a full suite of translation-only models, 1.8B to 30B, called HY-MT2.

The key stat: small-scale models now match large-parameter general LLMs on translation quality. What does that mean? Local deployment, cheap inference, translation running on edge devices—all suddenly viable.

For developers building multilingual products, this model suite is worth testing seriously—no more forced API calls to expensive large models just for translation. Models are already on HuggingFace, ready to use.

![Translation model comparison](https://pbs.twimg.com/media/HI2iyseboAANDIv?format=jpg&name=orig)

---

### 4. [gstack: 23 Role Configurations for Claude Code Playing CEO, Designer, Engineer](https://github.com/garrytan/gstack)

Y Combinator president Garry Tan open-sourced his Claude Code setup, and it hit 100K stars in a single day.

The tool is called gstack—23 opinionated tools that simulate perspectives from CEO, designer, engineering manager, release manager, documentation engineer, and QA. Not just prompt templates; it's a complete "AI team role-play" workflow.

For solo developers, the value is clear: write code solo, but get AI feedback from different functional angles on product decisions. You get a small team's multi-perspective input at one person's cost. The 100K-star velocity shows this scratches a real itch.

---

### 5. [Google Omni Flash Solves Math Problem Step-by-Step on a Blackboard](https://x.com/Gorden_Sun/status/2057286025488297996)

Prompt: one line: `Solve 4(x-3)^2 = 25 on a blackboard, showing step-by-step solution`.

Omni Flash generated a video of someone actually writing out the solution on a blackboard step by step. Clean visuals, correct logic.

But the author's take is sharp: Omni Flash is Google's "Nano" tier in video, not the flagship. Wait for the Pro version before calling it production-ready. This demo is more of a capability preview—AI-generated teaching videos without needing real people on camera.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2057285941811929088/vid/avc1/1280x720/PTAjxlG-YFMbgFSr.mp4?tag=27"></video>

---

### 6. [Tencent Launches Marvis, Zhipu Releases AutoClaw, Photoshop 27.7 Major Update](https://www.aibase.com/zh/news/28221)

Three announcements bundled. Tencent rolled out Marvis, an OS-level AI assistant that controls phones and computers cross-device, with local privacy mode—sensitive actions need user confirmation before executing. That design detail matters; Tencent is thinking seriously about enterprise compliance.

Zhipu AI's AutoClaw mobile app officially launched, supporting cloud and local execution modes, bringing AI Agent capabilities to phones.

Photoshop 27.7 is a substantial update—specific features weren't detailed, but Photoshop's major version bumps always reshape creator workflows. Designers should pay attention.

![Photoshop update screenshot](https://upload.chinaz.com/2026/0521/6391495276887141867609305.png)

---

### 7. [Tesla FSD Supervised Version Moves Closer to China Launch](https://www.36kr.com/p/3818701013730434)

May 21: Tesla officially published the list of countries where supervised FSD is available. China's on it. The news hit Weibo's trending topics.

Reality check: Tesla China's official channels haven't announced anything. Customer service still says "approval in progress, we'll push it as soon as it's ready"—same line as before.

Current status: China's on the official list, but regulatory approval isn't done. For Chinese Tesla owners, this is a "getting close, but not yet" signal. Musk's attention is clearly elsewhere (politics, X), so FSD's China timeline probably depends more on regulators than Tesla.

![Tesla FSD screenshot](https://img.36krcdn.com/hsossms/20260521/v2_f7b1b0130fb44923b8b53845853a9be7@000000_oswg92463oswg781oswg332_img_000?x-oss-process=image/format,jpg/interlace,1)

---

### 8. [Practical Tips for Generating App Icons with AI](https://m.okjike.com/originalPosts/6a0eaf78ce5de4a79d4737e2)

Solo developers' biggest headache: ship the product, icon looks terrible, don't want to pay a designer.

The core trick: find an icon style reference you like, then tell AI "look at these app icons' style, generate a high-quality icon for 'xxx app,' strictly follow the exact same visual style." Results are surprisingly good—style consistency beats pure text descriptions by a mile.

The principle is simple: give AI a visual anchor instead of just words. You can use this today, no extra tools needed.

![App icon generation example](https://cdnv2.ruguoapp.com/Fs9rosVseJzoHO51ZkR_qk3W31Rgv3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient)

---

### 9. [Google I/O 2026 Gemini Model Official Blog Screenshot](https://x.com/Gorden_Sun/status/2057321435119673589)

Someone questioned a claim about Gemini models. The author fired back with a screenshot from Google's official blog—from `blog.google/innovation-and-ai/sundar-pichai-io-2026/#gemini-models`.

The value here isn't the argument itself; it's that Google I/O 2026's official blog has Sundar Pichai's explicit positioning and roadmap for the Gemini model family. If you want Google's official narrative on their own models, hit that link directly instead of reading secondhand takes.

![Google blog screenshot](https://pbs.twimg.com/media/HI0S4a8aAAAKS8w?format=jpg&name=orig)

---

### 10. [South Korea's AI Memory Windfall: SK Hynix Employees Become Dating Market "Tactical Nukes"](https://www.36kr.com/p/3818888147542273)

Not pure AI news, but the realest social snapshot of the AI boom.

Since 2026 started, Samsung and SK Hynix have been cashing in on the AI memory demand explosion. SK Hynix employees: 25% salary bump, average performance bonus of 610K RMB. Result: Korean matchmaking companies now list "SK Hynix work uniform" as a dating market advantage. Engineers once called "engineering NPCs" are suddenly society's envy.

Where does AI compute demand actually flow? Into memory chips, into engineer paychecks, into South Korea's dating market. That supply chain is more honest than any earnings report.

![SK Hynix news screenshot](https://img.36krcdn.com/hsossms/20260521/v2_641f626bb163486a8433e42fd40da71a@5322854_oswg258759oswg693oswg505_img_000?x-oss-process=image/format,jpg/interlace,1)

---

## **📌 Worth Following**

**[Research]** [SVFSearch: Short Video Frame Search Multimodal Benchmark for Gaming Verticals](https://arxiv.org/abs/2605.17946) — Tests multimodal LLMs on retrieval reasoning across paused video frames. Visual ambiguity in gaming scenarios is harder than general cases; this benchmark fills a real evaluation gap.

**[Research]** [ArchSIBench: Architectural Space Intelligence Benchmark for Vision-Language Models](https://arxiv.org/abs/2605.20837) — Core capability for robot navigation and 3D scene understanding. Existing spatial reasoning benchmarks only test basics; this targets architectural space cognition specifically, valuable for embodied AI researchers.

**[Research]** [New Solution to Portrait Generation's Trilemma: Text Alignment, Realism, Aesthetics All at Once](https://arxiv.org/abs/2605.20640) — Text-to-image portraits have always traded off between "alignment/realism/aesthetics." This paper proposes a Pareto optimization framework worth reading if you're building image generation products.

---

## **😄 AI Fun**

### [Anime Fan Uses AI to "Take Favorite Coser to Hot Pot"](https://m.okjike.com/originalPosts/6a0f110ec2dc8bf83f2c1f79)

Someone wrote an absurdly detailed prompt: asking AI to generate "a casual iPhone snapshot" of a Coser eating hot pot, face flushed from steam, a few strands of hair stuck to her neck, expression showing she just noticed the camera and threw up a peace sign.

The prompt was nearly 500 words long—down to "light blush on cheeks," "clothing slightly shifted from sitting," "don't over-perfect it."

The generated image actually looked pretty convincing.

The funniest part? The time spent writing that prompt probably exceeded the time it'd take to actually invite someone to hot pot. AI granted the wish, but the method was: turn your fantasy into a requirements document first.

![Generated image example](https://cdnv2.ruguoapp.com/FlVmBISj9EKGnSnxr0ogjm-sIIcAv3.png)

---

## **🔮 AI Trend Predictions**

### Translation-Specific Small Models Will Become Mainstream for Enterprise Localization

- **Timeline**: Q3 2026
- **Confidence**: 75%
- **Reasoning**: Today's news on [Tencent's HY-MT2 translation model](https://x.com/Gorden_Sun/status/2057479611811053836) proves 1.8B-30B specialized models match large-parameter general models on translation. This signals the path "specialized small models replacing general large model APIs" is validated in translation; healthcare, legal, finance verticals will replicate this pattern.

### Manus Will Reposition as Independent Chinese AI Agent Flagship Post-Buyback

- **Timeline**: Q3 2026
- **Confidence**: 60%
- **Reasoning**: Today's news on [Manus founders' $1B buyback plan](https://m.okjike.com/originalPosts/6a0ed759af7695b4cf0edd50) shows negotiations are substantive, valuation anchored at $2B. China's regulators explicitly blocked foreign acquisition; founder team has strong independence intent; funding scale is basically viable. Post-buyback, Manus will likely restart as "Chinese autonomous AI Agent" and accelerate fundraising and product iteration.

### Nvidia Data Center Quarterly Revenue Breaks $100B

- **Timeline**: Q4 2026
- **Confidence**: 55%
- **Reasoning**: Today's earnings show [Nvidia Q1 data center revenue at $75.2B](https://www.36kr.com/p/3818422732882820), nearly doubling year-over-year, Q2 guidance also beats. At current growth curve, Q3-Q4 could hit the $100B threshold, but key variables are Blackwell Ultra shipment pace and whether China export restrictions tighten further.

### AI-Generated Teaching Videos Enter Mainstream Content Platforms

- **Timeline**: Q3 2026
- **Confidence**: 65%
- **Reasoning**: Today's demo of [Google Omni Flash generating step-by-step blackboard videos](https://x.com/Gorden_Sun/status/2057286025488297996) shows AI can directly produce clear teaching videos. Pro version will raise quality further. Bilibili, YouTube will see an AI teaching content wave; traditional live-action course recording's cost advantage compresses fast.

---

## **❓ Related Questions**

### How Do I Access Claude Code?

Claude Code is Anthropic's AI programming tool, currently available only with Claude Pro or Claude Team subscriptions. Domestic users face payment method restrictions and account registration barriers.

Today's viral [gstack](https://github.com/garrytan/gstack) is built on Claude Code—100K stars in one day—proving real demand exists.

**Solution**: Visit **[Aivora](https://aivora.cn)** for ready-made accounts. Instant delivery, hassle-free support.