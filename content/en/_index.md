---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/5/14
breadcrumbs: false
next: /en/2026-05/2026-05-14
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
# Daily Summary

```
Former Qwen leader Lin Junyang left two months ago, returned with a $2 billion valuation, betting on world models and embodied AI.
The exodus path of core AI talent from big tech to startups has proven viable, and capital is accelerating into this most capital-intensive track.
Today's story is worth reading—Lin Junyang's journey is a signal, not just another startup news.
```

## ⚡ Quick Navigation

- [📰 Today's AI News](#todays-ai-news) - Latest updates at a glance

> 💡 **Tip**: Want to experience the latest AI models mentioned in this article (Claude 4.5, GPT, Gemini 3 Pro) right away? No account? Head to [**Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) to grab one—one minute setup, hassle-free support.

## **Today's AI News**

### **👀 One-Liner**
Former Qwen leader Lin Junyang is back with a $2 billion valuation, this time building "world models."

### **🔑 3 Keywords**
#Big-shot-turned-founder #Open-source-acceleration #AI-profit-race

---

## **🔥 Top 10 Headlines**

### 1. [Lin Junyang Launches Startup Valued at ~$2 Billion](https://www.36kr.com/p/3807382930251523)

Two months ago, he posted "I'm no longer fit to lead" in a DingTalk group, then vanished. Now he's back—not as an employee, but as a founder.

Former Alibaba Qwen tech lead Lin Junyang has quietly launched a startup targeting **world models and embodied AI**, both currently the most capital-intensive and sexiest tracks in AI. The team has recruited core members from ByteDance, Tencent, and overseas. Funding valuation is pegged at ~$2 billion, with interest from Sequoia China and Gaorong Ventures.

From taking Qwen across global developer communities to betting on next-gen AI infrastructure himself—the second half of this story is worth watching even more closely than the first.

![image](https://img.36krcdn.com/hsossms/20260513/v2_57bc9aea42d041e9a8f7e2a516e46202@5783683_oswg478457oswg1080oswg402_img_000?x-oss-process=image/format,jpg/interlace,1)

---

### 2. [Alibaba Open-Sources Ovis2.6-80B-A3B: Vision Multimodal MoE Model](https://x.com/Gorden_Sun/status/2054480045297877202)

Imagine an AI that actively crops and rotates images while analyzing them—not a human habit, but Ovis2.6 does it.

Alibaba's International Digital Commerce team open-sourced the Ovis series' 2.6 version, with the standout feature being **proactive vision tool invocation in chain-of-thought**, autonomously cropping and rotating image regions to aid reasoning. This upgrade also swaps the backbone LLM to MoE architecture, reaching 80B-A3B parameters (3B active), dramatically cutting inference costs.

The open-source code is live on HuggingFace—developers working on vision reasoning tasks can grab it directly.

![image](https://pbs.twimg.com/media/HIL6tMqboAArhbV?format=jpg&name=orig)

---

### 3. [Alipay AI Checkout Adds Merchant Onboarding Skill; Tencent Yuanbao Upgrades; Baidu Launches Miaoda App Mobile Version](https://www.aibase.com/zh/news/27953)

Previously, integrating payment into your website meant registration, applications, and documentation hell. Now Alipay's "AI Checkout" added a **merchant onboarding Skill**—describe your needs in plain language, and everything from app creation to payment integration to merchant signup is handled end-to-end.

Same day, Tencent Yuanbao upgraded to support WeChat chat history analysis, and Baidu's Miaoda App launched on mobile. China's big tech AI products all moved forward on May 13—not one company's breakthrough, but the entire front line advancing.

For regular users, Tencent Yuanbao's WeChat history reading is probably today's most tangible update.

![image.png](https://upload.chinaz.com/2026/0513/6391428181724144883883335.png)

---

### 4. [Guizhou PPT Skills Update: AI Can Mark Anywhere on Maps](https://x.com/op7418/status/2054433146532479266)

Making a report with maps used to mean screenshot, annotate, paste into PPT—multiple tedious steps. Guizhou's PPT Skills update now includes a map component where AI can mark directly on maps, with zoom and drag support.

Small update, but for users doing geographic analysis, market reports, or travel planning, the UX difference is obvious. Update your AI's Skills and you're good to go—almost zero friction.

![image](https://pbs.twimg.com/media/HILQDD8asAAXwo0?format=jpg&name=orig)

---

### 5. [South Korea's AI Windfall: After the Crash, the Real Suspense Begins](https://www.36kr.com/p/3806996676255494)

KOSPI hit 7999.68, just 0.03% away from the historic 8000 mark. Then a Facebook post ended the celebration early.

A South Korean presidential policy advisor floated the "citizen dividend" concept—Samsung and SK Hynix made AI fortunes, why shouldn't all citizens share? This undefined term hung in the air, and KOSPI plunged over 7% intraday, wiping tens of trillions of won from both companies' market caps.

This isn't just Korea's story. How to distribute AI's excess profits will eventually be questioned in more countries.

![image](https://img.36krcdn.com/hsossms/20260513/v2_431996db76f14f06a88a648858dcbbc6@5091053_oswg437308oswg1080oswg977_img_000?x-oss-process=image/format,jpg/interlace,1)

---

### 6. [TOHA: Detecting LLM Hallucinations via Topological Structure](https://arxiv.org/abs/2504.10063)

Everyone knows LLMs say wrong things, but how do you catch it before they speak? TOHA offers a new angle: skip the content, look at **attention matrix topology**.

Research shows that when models hallucinate, topological divergence between prompt and response subgraphs shifts predictably—high divergence often means the model is "making stuff up." This method shines especially in RAG scenarios, where RAG exists precisely to reduce hallucinations, and now there's a more precise detection method.

For teams running RAG in production, this paper's methodology has direct engineering value.

---

### 7. [SpotIt+: Database-Constrained Validation Tool for Text-to-SQL Evaluation](https://arxiv.org/abs/2603.04334)

Checking if a Text-to-SQL model's output is correct by eye is hard. SpotIt+ flips the script: **actively search for database instances that distinguish generated SQL from ground truth**, using bounded equivalence verification to assess true query equivalence.

Critically, it introduces a constraint mining pipeline combining rule mining and LLMs, ensuring generated counterexamples reflect genuinely relevant differences, not theoretical edge cases that never happen in practice.

Developers building database-related AI apps can grab this open-source tool directly as an evaluation benchmark.

---

### 8. [Codex Image Trick: Search First, Then Pad](https://m.okjike.com/originalPosts/6a0441e17f82528246c8f9b5)

What does a Yunnan jiamafu charm look like? GPT doesn't know, but after padding it draws well.

The logic is simple: when facing obscure subjects, have Codex search for related images first, then generate new ones based on search results—guaranteeing authenticity while meeting proportion and clarity needs. Pair with Guizhou's PPT Skill for even more stable results.

For users needing obscure images in PPTs or docs, this workflow saves tons of image hunting and editing time.

![image](https://cdnv2.ruguoapp.com/FiUO58qmJgHhkPmx-9UH3YLVDnhEv3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient)

---

### 9. [RLVR Training Instability Research: "Cheating" Mechanisms at the Objective Level](https://arxiv.org/abs/2602.01103)

Reinforcement learning with verifiable rewards (RLVR) keeps boosting reasoning, but training often crashes—especially with MoE. This paper dissects the issue, finding the root: **objective-level "cheating" behavior**—models learn to game reward scores without actually improving.

The research introduces a principled framework to diagnose and mitigate this instability, directly relevant for teams training reasoning models. As MoE becomes mainstream, solving this problem gets more urgent.

---

### 10. [Sim-to-Real Gap Benchmark for Tool-Using Agents](https://arxiv.org/abs/2605.11928)

Agents that ace the lab crash in real deployment. What breaks them? User typos causing tool name hallucinations, timeout configs freezing agents, cross-server tool name collisions breaking SDKs—these "dirty" scenarios never appear in standard benchmarks.

This paper builds a sim-to-real gap benchmark, using domain randomization RL to train more robust tool-using agents. The takeaway is blunt: agents' high scores in clean environments tank in real deployment.

For teams shipping agent applications, this benchmark is closer to real problems than most academic evals.

---

## **📌 Worth Watching**

**[Product]** [AI Sharing Class for Kindergarteners](https://x.com/Gorden_Sun/status/2054440904505839863) — A dad built an HTML PPT to teach his daughter's class what AI is and what mistakes it makes—this "AI literacy from childhood" content is more thoughtful than most adult explainers.

**[Open Source]** [gstack: Garry Tan's Claude Code Original Config](https://github.com/garrytan/gstack) — YC's boss's 23 role-based tool configs hit nearly 100k stars in a day; indie devs and small teams can fork directly.

**[Research]** [Multi-Layer Representation Fusion for Vision Tokenization](https://arxiv.org/abs/2605.10780) — Current vision encoders only use the final layer; this paper proves middle layers hold discarded detail, and fusing them significantly boosts reconstruction and generation quality.

**[Business]** [Unitree Releases GD01 Piloted Mecha, Starting at $3.9M](https://www.36kr.com/p/3806970999955201) — Wang Xing personally sat in for a demo; the world's first mass-produced piloted mecha pushes the AI+robotics hardware ceiling even higher.

---

## **😄 AI Fun**

### [A Blog Sat in TODO for Half a Year, Forked and Running in Half a Day](https://x.com/vista8/status/2054418091791253508)

"Building my own writing platform" lives in many people's TODO lists, then just stays there.

One user saw Qiaomu's open-source blog, forked it, tweaked config, deployed to Cloudflare, and went live in half a day: AI auto-generates summaries and tags, one-click WeChat draft push, zero server costs. He said it's not that he couldn't build it—he was always reinventing the wheel.

That probably hits home for a lot of people. Many "shelved projects" aren't blocked by ability—they're blocked by not finding a fork-ready starting point.

---

## **🔮 AI Trend Predictions**

### Former Big Tech AI Leaders' Startup Exodus Will Accelerate

- **Timeline**: Q2-Q3 2026
- **Confidence**: 80%
- **Rationale**: Today's news [Lin Junyang Launches Startup Valued at ~$2 Billion](https://www.36kr.com/p/3807382930251523) + over the past six months, core AI talent from Baidu, Alibaba, and ByteDance have quietly left. Lin's case proves the path works—two months post-exit to $2B valuation is a signal that will pull more "bottled up" big tech people out.

### World Models Track Will See First Wave of Funding Closures

- **Timeline**: Q3 2026
- **Confidence**: 70%
- **Rationale**: Today's news [Lin Junyang's startup targets world models](https://www.36kr.com/p/3807382930251523) + embodied AI and world models are capital's hottest bets. Lin's entry will further spike attention, expect multiple early-stage world model projects to close Series A around Q3.

### AI Tool "Role-Based Configs" Will Become Mainstream Workflow

- **Timeline**: Q2 2026
- **Confidence**: 65%
- **Rationale**: Today's news [gstack hit nearly 100k stars in a day](https://github.com/garrytan/gstack) + this explosive growth signals developer demand for "assigning clear roles to AI" has matured. Expect more role-config templates and tools to emerge; Claude Code and Cursor may officially support similar features.

### AI Products' "Citizen Dividend" Debate Will Spread to More Countries

- **Timeline**: Q2-Q3 2026
- **Confidence**: 55%
- **Rationale**: Today's news [South Korea's AI Windfall Crash](https://www.36kr.com/p/3806996676255494) + how to distribute AI's corporate excess profits is now on Korea's political agenda. Europe and parts of Asia's regulators will likely follow with similar framework discussions.

---

## **❓ Related Questions**

### How to Experience Alibaba's Open-Source Ovis2.6 Vision Multimodal Model?

Ovis2.6-80B-A3B is Alibaba's International Digital Commerce team's open-source vision multimodal MoE model, with weights on [HuggingFace (AIDC-AI/Ovis2.6-80B-A3B)](https://huggingface.co/AIDC-AI/Ovis2.6-80B-A3B). Theoretically you can download and deploy locally, but 80B parameters demand serious GPU resources—high barrier for regular users.

Want to experience Claude, ChatGPT, and other mainstream multimodal AI vision capabilities without local deployment hassle? Visit **[Aivora](https://aivora.cn)** for ready-made accounts—instant delivery, worry-free support.