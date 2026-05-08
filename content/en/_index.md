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
Doubao lists annual fee of 5088 yuan on App Store, but when you ask it, the bot still claims "permanently free"—the free era of domestic AI officially ends.
Infrastructure open-source wave is here, but so is charging. Today we focus on the first two—one about technical breakthrough, one about your wallet.
```

## ⚡ Quick Navigation

- [📰 Today's AI News](#todays-ai-news) - Latest updates at a glance

> 💡 **Tip**: Want to experience the latest AI models mentioned in this article (Claude 4.5, GPT, Gemini 3 Pro) first? No account? Head to [**Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) to grab one—one minute setup, hassle-free support.

## **Today's AI News**

### **👀 One-Liner**
OpenAI open-sourced the network protocol used to train ChatGPT—tens of thousands of GPUs finally won't all freeze when a single link goes down.

### **🔑 3 Keywords**
#Infrastructure Breakthrough #Open-Source Boom #AI Paywall Era

---

## **🔥 Top 10 Headlines**

### 1. [OpenAI Open-Sources MRC Network Protocol](https://x.com/dotey/status/2052056444330000513)
Training massive models means tens of thousands of GPUs need to stay in sync—one late data packet and everything stalls. The MRC protocol, developed by OpenAI with AMD, Broadcom, Intel, Microsoft, and NVIDIA, splits data packets across hundreds of paths simultaneously. When a link fails, it reroutes in microseconds without requiring the switch to recalculate routing tables. Now available industry-wide through OCP, clusters at Stargate scale finally won't get bottlenecked by networking. For teams building large-scale training infrastructure, this is a genuine breakthrough solving real pain points.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2052025253283651584/vid/avc1/1280x1280/d10uc7t793sKUGIk.mp4?tag=27"></video>

### 2. [Doubao Announces Pricing—Up to 5088 Yuan Annually](https://www.36kr.com/p/3795007016661767)
On Youth Day (May 4), Doubao quietly updated its App Store pricing page, and the comments section exploded. Here's the kicker: ask Doubao itself "are you charging now?" and it'll straight-faced tell you "don't worry, I'm free forever." Going from free to paid, Doubao played it cautiously but still triggered massive backlash. Behind this isn't just a business model shift—it's the inevitable path for domestic AI from burning cash to chasing profitability. The free lunch is over, but that also means products need to actually earn their price tag.

![image](https://img.36krcdn.com/hsossms/20260504/v2_1926c048d72645f88650f7700312d59a@6361831_oswg179819oswg1080oswg834_img_000?x-oss-process=image/format,jpg/interlace,1)

### 3. [Yao Jingang Open-Sources 100+ Prompts for Business Scenarios](https://x.com/vista8/status/2052027791546233050)
Yao compiled and open-sourced all his prompts from last year—covering 9 categories: AI methods, work, learning, life, education, content, coding, marketing, and thinking. Unlike many prompt libraries, these are battle-tested from real business needs. Especially worth checking out: the meta-prompts in both lite and advanced versions. If you're still figuring out how to talk to AI, this repo is a keeper.

![Tweet Image](https://pbs.twimg.com/media/HHo4OJ0b0AAYlGV.jpg)

### 4. [Anthropic Cuts AI Failure Rate from 54% to 7% with "Employee Handbook"](https://www.36kr.com/p/3797755662883847)
Same training data, different behavior guidelines—models develop completely opposite stances. Anthropic's research on "model constitution mid-training" found that having AI read behavior rules before formal training, like new employees reading an employee handbook, dramatically cuts failure rates. In experiments, two models read different explanations about cheese preferences, then showed opposite positions on art, transportation, and economic policy—completely unrelated domains. This proves AI values aren't determined by training data; they're determined by the rules you set.

![image](https://img.36krcdn.com/hsossms/20260506/v2_5c59130798f142cea6d40f77ad93a533@5888275_oswg292386oswg1080oswg827_img_000?x-oss-process=image/format,jpg/interlace,1)

### 5. [Warp Team Open-Sources Internal Workflow Acceleration Tool Oz Skills](https://x.com/dotey/status/2051902838100439318)
After open-sourcing their terminal and docs, Warp released 15 internal Skills. They cover Git/GitHub workflows, CI fixes, issue deduplication, data analysis, and more. For example, ci-fix locates failing GitHub Actions, pulls logs, creates minimal fixes to a ci-fix/ branch for verification—emphasizing minimal diffs and security constraints. For dev teams, these are genuinely productivity-boosting tools, not toys.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2051768407494918144/vid/avc1/1056x720/GEAEdOs4ZwY3p9gp.mp4?tag=14"></video>

### 6. [Domestic Duo: Cider + Mano-P Turn Mac into Private AI Workstation](https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651031464&idx=1&sn=9c345be57f7ae7a14ff081ab1296ce50)
Cider is an open-source local AI inference engine; Mano-P is the companion model optimization tool. Together they let Mac users run large models locally without worrying about data privacy leaks or constant API calls. For users who frequently use AI but care about privacy, this combo offers a fast, practical Private AI solution. Performance won't match cloud GPU clusters, but your data stays completely in your hands.

![image](https://wechat2rss.bestblogs.dev/img-proxy/?k=7babd6c1&#x26;u=https%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2F5L8bhP5dIqGaXsuibOEUvytdxBk6KgK7EvwtCup4vnBPssyIibRUqicf6JzWCErforMuzrtXImpOq0S0icKLiaJCznvfdygS10hic2uOqnj0Yv1qc%2F0%3Fwx_fmt%3Djpeg)

### 7. [claude-mem: Let Claude Code Auto-Remember Coding Session Context](https://github.com/thedotmack/claude-mem)
A Claude Code plugin that automatically captures everything Claude does during coding sessions, compresses it with AI, and injects it into future sessions. Previously, starting a new session meant re-explaining your project background. Now this plugin lets Claude remember what you discussed and what code you changed. For developers frequently using AI pair programming, this saves tons of repetitive communication time.

### 8. [Seed 2.0 Lite Gives Video Optimization Suggestions](https://x.com/vista8/status/2052001776425926782)
Vista8 sent a product demo video to Seed 2.0 Lite asking for optimization advice from engagement and virality angles. The model analyzed video structure and provided solid hooks. Follow-up questions yielded 5 alternative hooks—all decent. For content creators, this ability to understand video content and suggest distribution strategy beats simple editing tools.

![Tweet Image](https://pbs.twimg.com/media/HHosViKWIAUAS7G.jpg)

### 9. [Malus.sh Satirically Exposes Open-Source License Fragility in AI Era](https://juejin.cn/post/7636277855710232582)
Malus offers "AI clean-room (open-source whitewashing as a service)"—upload package.json, requirements.txt, and get an AI-rewritten version with identical functionality but completely different code. Claude Code source leaked, Rust variant appeared next day; OpenClaw open-sourced, a dozen variants emerged. This project satirically shows a harsh reality: in the AI era, open-source licenses increasingly fail to protect creators' rights.

![image](https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/d219d456855b461b8314b6f1a4ce8c80~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5oGL54yrZGXlsI_pg60=:q75.awebp?rk3s=f64ab15b&#x26;x-expires=1778634549&#x26;x-signature=0ervbERhYpkMOMCQuSq3nGWj0iM%3D)

### 10. [Codex App's TreeView and Diff View Come from Open-Source Library pierre](https://x.com/dotey/status/2051864435858276833)
Codex App's sleek file tree and code diff views? They're using the third-party open-source library pierre. Built by @amadeus, it provides modern code browsing and comparison interfaces. For teams developing code editors or IDEs, this is a high-quality component ready to use—no need to reinvent the wheel.

![image](https://pbs.twimg.com/media/HHmuMQ6WoAEYGPt?format=jpg&#x26;name=orig)

---

**[Product]** [Sim Studio Launches AI Agent Orchestration Platform](https://github.com/simstudioai/sim) - Build, deploy, and orchestrate AI agents with a central intelligence layer—multi-agent collaboration made simple

**[Product]** [Flowise: Visually Build AI Agents](https://github.com/FlowiseAI/Flowise) - Drag-and-drop AI workflows without code—Agent building for everyone

**[Open Source]** [AutoGPT Update: Empowering Everyone to Use and Build AI](https://github.com/Significant-Gravitas/AutoGPT) - Tools to focus on what matters, not technical details

**[Open Source]** [OpenHands: AI-Powered Development Tool](https://github.com/OpenHands/OpenHands) - AI-assisted development from requirements to deployment

**[Open Source]** [Semantic Kernel: Integrate LLMs into Apps Fast](https://github.com/microsoft/semantic-kernel) - Microsoft's offering—seamlessly embed cutting-edge LLM tech into your applications

**[Research]** [Temporal Consistency in Video Object Learning](https://arxiv.org/abs/2605.03650) - From prediction to correspondence—leveraging self-supervised visual features to distinguish objects

**[Research]** [Color Recovery Conditions in Scattering Media](https://arxiv.org/abs/2605.03837) - Solving inverse problems in optical imaging—restore true colors in underwater or foggy shots

**[Research]** [3D Wireframe Reconstruction from Single Line Drawings](https://arxiv.org/abs/2604.13549) - Generative depth estimation turns 2D hand sketches into 3D models—bridging sketch-to-CAD gap

---

### [Doubao Claims It's Free Forever, But App Store Already Shows Pricing](https://www.36kr.com/p/3795007016661767)
On May 4, Doubao quietly updated its App Store pricing page with annual fees up to 5088 yuan. Someone asked Doubao itself "are you charging now?" and it brazenly answered "don't worry, I'm permanently free." Left hand charges, right hand denies—users don't know whether to trust the product or the AI. Comments joked: "Doubao's demonstrating what 'I don't know what I'm saying' looks like." Most people's first reaction wasn't anger at the paywall—it was relief that today's disaster wasn't their AI.

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
- **Reasoning**: Today's Doubao pricing announcement marks domestic AI's shift from burning cash to commercial viability. With a national-level product charging, competitors following suit is inevitable. The free era ends; paid subscriptions become mainstream.

### Open-Source AI Infrastructure Explosion
- **Predicted Timeline**: Q2-Q3 2026
- **Confidence**: 75%
- **Reasoning**: Today's news—OpenAI open-sourcing MRC, Warp releasing internal tools, multiple AI agent platforms going open-source—signals industry shift from "closed development" to "open collaboration." Lower infrastructure costs mean more teams can build their own AI systems.

---

## **❓ Related Questions**

### How to Experience OpenAI's Latest Technology?

OpenAI's newest tech and models typically require ChatGPT Plus or enterprise subscriptions. Domestic users often face payment difficulties or registration restrictions.

**Solution**: Visit **[Aivora](https://aivora.cn)** for ready-made accounts—instant delivery, worry-free support.