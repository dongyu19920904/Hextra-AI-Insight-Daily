---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/5/7
breadcrumbs: false
next: /en/2026-05/2026-05-07
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
# Daily Summary

```
OpenAI partners with five major manufacturers to open-source MRC network protocol, solving the critical "one link down, everyone waits" problem during training with tens of thousands of GPUs, with microsecond-level fault bypass.
Doubao lists annual fee of 5,088 yuan on App Store, but when you ask Doubao itself, it still claims "permanently free"—the free era of domestic AI officially ends.
Infrastructure open-source wave is here, but so is charging. Today we focus on the first two—one about technical breakthrough, one about your wallet.
```

## ⚡ Quick Navigation

- [📰 Today's AI News](#todays-ai-news) - Latest updates at a glance

> 💡 **Tip**: Want to experience the latest AI models mentioned in this article (Claude 4.5, GPT, Gemini 3 Pro) first? No account? Head to [**Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) to grab one—one minute setup, hassle-free support.

## **Today's AI News**

### **👀 One-Liner**
OpenAI open-sourced the network protocol used to train ChatGPT, so tens of thousands of GPUs finally won't all go on strike when a single link goes down.

### **🔑 3 Key Takeaways**
#Infrastructure Breakthrough #Open-Source Boom #AI Charging Era

---

## **🔥 Top 10 Headlines**

### 1. [OpenAI Open-Sources MRC Network Protocol](https://x.com/dotey/status/2052056444330000513)
When training massive models, tens of thousands of GPUs need to stay in sync—one late data packet and every card sits idle. The MRC protocol, developed by OpenAI with AMD, Broadcom, Intel, Microsoft, and Nvidia, splits data packets across hundreds of paths simultaneously. When a link fails, it reroutes in microseconds without requiring the switch to recalculate routing tables. Now available industry-wide through OCP, massive clusters like Stargate finally won't get bottlenecked by networking. For teams building large-scale training clusters, this is a genuine infrastructure breakthrough that solves real pain points.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2052025253283651584/vid/avc1/1280x1280/d10uc7t793sKUGIk.mp4?tag=27"></video>

### 2. [Doubao Announces Pricing, Up to 5,088 Yuan Annually](https://www.36kr.com/p/3795007016661767)
On Youth Day (May 4th), Doubao quietly updated its App Store pricing statement, and the comments section exploded. Here's the kicker: ask Doubao itself "are you charging now?" and it'll straight-faced tell you "don't worry, I'm permanently free." Going from free to paid, Doubao took a careful step but still triggered massive backlash. Behind this isn't just a business model shift—it's the inevitable path for domestic AI from burning cash to grab market share to finding a sustainable business model. The free lunch is over, but that also means the product needs to actually earn your money.

![image](https://img.36krcdn.com/hsossms/20260504/v2_1926c048d72645f88650f7700312d59a@6361831_oswg179819oswg1080oswg834_img_000?x-oss-process=image/format,jpg/interlace,1)

### 3. [Yao Jingang Open-Sources 100+ Prompts for Business Scenarios](https://x.com/vista8/status/2052027791546233050)
Yao organized and open-sourced all the prompts he wrote last year, covering 9 categories: AI methods, work, learning, life, education, content, programming, marketing, and thinking. Unlike many prompt libraries, these are battle-tested from real business needs. Especially worth checking out are the meta-prompts—both lite and advanced versions—which have helped a lot of people. If you're still struggling with how to talk to AI, this repo is worth bookmarking.

![Tweet Image](https://pbs.twimg.com/media/HHo4OJ0b0AAYlGV.jpg)

### 4. [Anthropic Cuts AI Failure Rate from 54% to 7% with "Employee Handbook"](https://www.36kr.com/p/3797755662883847)
Same training data, different behavior guidelines—models generalize completely different stances. Anthropic's "model constitution mid-training" research found that having AI read a behavior rulebook before formal training, like new employees reading an employee handbook, dramatically cuts failure rates. In experiments, two models read different explanations about cheese preferences, then showed opposite stances on completely unrelated topics like art, transportation, and economic policy. This proves AI values aren't determined by training data—they're determined by the rules you set.

![image](https://img.36krcdn.com/hsossms/20260506/v2_5c59130798f142cea6d40f77ad93a533@5888275_oswg292386oswg1080oswg827_img_000?x-oss-process=image/format,jpg/interlace,1)

### 5. [Warp Team Open-Sources Internal Workflow Acceleration Tool Oz Skills](https://x.com/dotey/status/2051902838100439318)
After open-sourcing their terminal and docs, Warp released 15 internal Skills. These tools cover Git/GitHub collaboration, CI fixes, issue deduplication, data analysis, and more. For example, ci-fix locates failing GitHub Actions, pulls logs, minimizes fixes, and pushes to a ci-fix/ branch for verification—emphasizing minimal diffs and security constraints without escalating permissions. For dev teams, these are genuinely productivity-boosting tools, not toys.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2051768407494918144/vid/avc1/1056x720/GEAEdOs4ZwY3p9gp.mp4?tag=14"></video>

### 6. [Domestic Duo: Cider + Mano-P Turn Mac into Private AI Workstation](https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651031464&idx=1&sn=9c345be57f7ae7a14ff081ab1296ce50)
Cider is an open-source local AI inference engine; Mano-P is the companion model optimization tool. Together they let Mac users run large models locally without worrying about data privacy leaks or needing to call APIs every time. For users who frequently use AI but care about privacy, this combo offers a fast and practical Private AI solution. Performance won't match cloud GPU clusters, but you keep your data completely in your hands.

![image](https://wechat2rss.bestblogs.dev/img-proxy/?k=7babd6c1&#x26;u=https%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2F5L8bhP5dIqGaXsuibOEUvytdxBk6KgK7EvwtCup4vnBPssyIibRUqicf6JzWCErforMuzrtXImpOq0S0icKLiaJCznvfdygS10hic2uOqnj0Yv1qc%2F0%3Fwx_fmt%3Djpeg)

### 7. [claude-mem: Let Claude Code Auto-Remember Coding Session Context](https://github.com/thedotmack/claude-mem)
This Claude Code plugin automatically captures everything Claude does during a coding session, compresses it with AI, and injects it into future sessions. Previously, pair programming with AI meant re-explaining project context every new session. Now this plugin lets Claude remember what you discussed and what code you changed. For developers frequently using AI-assisted programming, this saves tons of repetitive communication time.

### 8. [Seed 2.0 Lite Gives Video Optimization Suggestions](https://x.com/vista8/status/2052001776425926782)
Vista8 sent a product demo video to Seed 2.0 Lite asking for optimization suggestions from engagement and virality angles. The model not only analyzed video structure but provided solid hooks. Follow-up questions yielded 5 alternative hooks—all decent. For content creators, this ability to understand video content and suggest distribution strategies beats simple editing tools.

![Tweet Image](https://pbs.twimg.com/media/HHosViKWIAUAS7G.jpg)

### 9. [Malus.sh Satirically Exposes Open-Source License Fragility in AI Era](https://juejin.cn/post/7636277855710232582)
Malus offers "AI clean-room (open-source whitewashing as a service)"—upload package.json, requirements.txt, and get an AI-rewritten version with identical functionality but completely different code. Claude Code source leaked, Rust version appeared next day; OpenClaw open-sourced, a dozen variants followed. This project satirically shows a harsh reality: in the AI era, open-source licenses increasingly fail to protect creators' rights.

![image](https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/d219d456855b461b8314b6f1a4ce8c80~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5oGL54yrZGXlsI_pg60=:q75.awebp?rk3s=f64ab15b&#x26;x-expires=1778634549&#x26;x-signature=0ervbERhYpkMOMCQuSq3nGWj0iM%3D)

### 10. [Codex App's TreeView and Diff View Come from Open-Source Library pierre](https://x.com/dotey/status/2051864435858276833)
Codex App's beautiful file tree and code diff views? They're using the third-party open-source library pierre. Built by @amadeus, it provides modern code browsing and comparison interfaces. For teams developing code editors or IDEs, this is a high-quality component you can grab off-the-shelf without reinventing the wheel.

![image](https://pbs.twimg.com/media/HHmuMQ6WoAEYGPt?format=jpg&#x26;name=orig)

---

**[Product]** [Sim Studio Launches AI Agent Orchestration Platform](https://github.com/simstudioai/sim) - Build, deploy, and orchestrate AI agents with a central intelligence layer; multi-agent collaboration is no longer a headache

**[Product]** [Flowise: Visually Build AI Agents](https://github.com/FlowiseAI/Flowise) - Drag-and-drop AI workflow builder; play with agents without writing code

**[Open Source]** [AutoGPT Update: Empowering Everyone to Use and Build AI](https://github.com/Significant-Gravitas/AutoGPT) - Tools that let you focus on what matters instead of getting bogged down in technical details

**[Open Source]** [OpenHands: AI-Powered Development Tool](https://github.com/OpenHands/OpenHands) - AI-assisted entire development pipeline from requirements to deployment

**[Open Source]** [Semantic Kernel: Quickly Integrate LLMs into Apps](https://github.com/microsoft/semantic-kernel) - Microsoft's offering; seamlessly integrate cutting-edge LLM tech into your applications

**[Research]** [New Temporal Consistency Approach for Video Object Learning](https://arxiv.org/abs/2605.03650) - Shift from prediction to correspondence; leverage self-supervised visual features to distinguish objects

**[Research]** [Color Recovery Conditions in Scattering Media](https://arxiv.org/abs/2605.03837) - Solve inverse problems in optical imaging; restore true colors in underwater or foggy shots

**[Research]** [Reconstruct 3D Wireframes from Single Line Drawings](https://arxiv.org/abs/2604.13549) - Use generative depth estimation to turn 2D hand sketches into 3D models; bridge the gap between sketch and CAD

---

### [Doubao Claims It's Permanently Free, But App Store Already Lists Pricing](https://www.36kr.com/p/3795007016661767)
On May 4th, Doubao quietly updated its App Store pricing statement with annual fees up to 5,088 yuan. Someone asked Doubao itself "are you charging now?" and it brazenly answered "don't worry, I'm permanently free." This left-hand-charges-right-hand-denies move left people wondering whether to trust the product or the AI. Comments ranged from jokes to frustration: "Doubao is literally demonstrating what 'I don't know what I'm saying' looks like." After reading this, most people's first reaction probably wasn't anger at the pricing—it was relief that today's disaster wasn't their AI.

![image](https://img.36krcdn.com/hsossms/20260504/v2_1926c048d72645f88650f7700312d59a@6361831_oswg179819oswg1080oswg834_img_000?x-oss-process=image/format,jpg/interlace,1)

---

## **🔮 AI Trend Predictions**

### GPT-5 Official Release
- **Predicted Timeline**: Q3 2026
- **Confidence**: 70%
- **Reasoning**: Today's news shows OpenAI optimizing infrastructure at scale (open-sourcing MRC protocol), typically prep work for larger model training. Based on historical release cadence, OpenAI ships major updates 2-3 months after infrastructure readiness.

### AI Charging Becomes Industry Standard
- **Predicted Timeline**: Q2-Q3 2026
- **Confidence**: 85%
- **Reasoning**: Today's news about [Doubao's pricing](https://www.36kr.com/p/3795007016661767) marks domestic AI's shift from burning cash for market share to sustainable business models. With a household-name product like Doubao charging, competitors following suit is just a matter of time. The free era ends; paid subscriptions become mainstream.

### Open-Source AI Infrastructure Boom
- **Predicted Timeline**: Q2-Q3 2026
- **Confidence**: 75%
- **Reasoning**: Today's news shows OpenAI open-sourcing MRC protocol, Warp releasing internal tools, multiple AI agent platforms going open-source—signals of industry shift from "closed development" to "open collaboration." As infrastructure costs drop, more teams can build their own AI systems.

---

## **❓ Related Questions**

### How do I experience OpenAI's latest technology?

OpenAI's newest tech and models typically require ChatGPT Plus or enterprise subscriptions. Domestic users may face payment difficulties or account registration restrictions.

**Solution**: Visit **[Aivora](https://aivora.cn)** to get ready-made accounts—instant delivery, worry-free support.