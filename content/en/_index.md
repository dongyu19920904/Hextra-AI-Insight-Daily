---
linkTitle: AI Daily
title: 'AI Daily 2026/11/23: Riemann Hypothesis Formal Proof Verified by Lean Community,
  AMD Completes Acquisition of Li Fei-Fei''s World Labs'
breadcrumbs: false
next: /en/2026-11/2026-11-23
description: The Riemann Hypothesis formal proof has been verified by Lean, and AMD
  has completed its acquisition of World Labs for $8.2 billion. A chip manufacturer
  acquiring a top research team outright, OpenAI publishing pretraining data to seek
  industry-wide safety consensus, the boundaries of mathematics and compute advancing
  simultaneously. Start today by checking whether the 125 endpoints OpenRouter revoked
  involve any providers you use, then read the OpenAI perplexity paper to understand
  their safety position.
cascade:
  type: docs
---
## **Today's Summary**

```
The Riemann Hypothesis formal proof has been verified by Lean, and AMD has completed its acquisition of World Labs for $8.2 billion.
A chip manufacturer acquiring a top research team outright, OpenAI publishing pretraining data to seek industry-wide safety consensus, the boundaries of mathematics and compute advancing simultaneously.
Start today by checking whether the 125 endpoints OpenRouter revoked involve any providers you use, then read the OpenAI perplexity paper to understand their safety position.
```

## **🔥 Top 10 Stories Today**

### 1. Riemann Hypothesis Formal Proof Verified by Lean Community

**A milestone in mathematical history confirmed.** The **Lean** and Mathlib communities [issued a joint statement officially confirming](https://t.me/aigc1024/27309) that the formal proof of the Riemann Hypothesis by Anthropic mathematician Levent Alpöge has passed verification. The community focused its review on four points: correctness of definitions, whether the code compiles, whether the proof targets the **standard Riemann Hypothesis**, and whether it passes multiple independent checkers 🔬. Several mathematicians noted that fully understanding the proof's details will take humans considerably longer.

---

### 2. AMD Completes Acquisition of Li Fei-Fei's World Labs

**$8.2 billion deal closes.** 📌 According to 36Kr, [AMD has completed its acquisition of Li Fei-Fei's World Labs](https://www.36kr.com/p/4080555888546947), with the transaction closing on November 13 in an all-stock deal. This is AMD's **second-largest** acquisition ever. Li Fei-Fei will serve as Executive Vice President and Chief Scientist. Only 46 days elapsed between signing and closing, and AMD's stock fell **5.58%** on the day the deal closed.

![Li Fei-Fei and Lisa Su at the closing ceremony](https://img.36krcdn.com/hsossms/20261122/v2_3d093205cf484abc8e359ea7dd96f651@000000_oswg1036711oswg1024oswg768_img_000?x-oss-process=image/format,jpg/interlace,1 "Li Fei-Fei and Lisa Su at the closing ceremony")

---

### 3. OpenAI Publishes Pretraining Perplexity Data to Advocate Industry-Wide Capability Limits

**An unusually candid disclosure from OpenAI.** Sam Altman called this **OpenAI**'s most important release in recent memory in a post, with [OpenAI publishing pretraining perplexity data to advocate industry-wide limits](https://x.com/sama/status/2124551594691932405) that would cap **pretraining capability** 🔒. Chief Scientist Jakub Pachocki called on the industry to reach consensus on this. It is the first time OpenAI has proactively released pretraining measurement data for safety coordination purposes.

![OpenAI pretraining disclosure image](https://pbs.twimg.com/media/HXvptOTXIAAtrY0?format=jpg&name=orig "OpenAI pretraining disclosure image")

---

### 4. Jensen Huang Resigns, NVIDIA CEO Transition Complete

**NVIDIA's leadership change takes immediate effect.** [Jensen Huang resigns, NVIDIA CEO transition complete](https://nvidianews.nvidia.com/news/nvidia-announces-ceo-transition) confirms that Huang stepped down from all roles — President, **CEO**, and board member — on November 12. Executive Vice President Colette Kress has been named **interim CEO**, and Harvey C. Jones will serve as board chair. The company stated its product roadmap will continue unchanged, and The Economist has a paywalled article discussing the implications for the AI accelerationist camp 📄.

---

### 5. Terence Tao Clarifies the Maturity of Three Mathematical Results

**These three results should not be conflated.** In his [November 20 blog post](https://terrytao.wordpress.com/2026/11/20/unforced-euler-singularity-unforced-navier-stokes-singularity-and-the-generalized-riemann-hypothesis/), Terence Tao drew distinctions: the Euler equation blowup has a readable proof and a Lean formalization; the strategy for Navier–Stokes blowup is clear but **the formal writeup is still being prepared**; and the generalized Riemann Hypothesis proof is one he has not yet fully reviewed 📄. The three results concern different equations and should not be merged into the claim that "**fluid mechanics is solved**."

---

### 6. OpenRouter Removes Three Providers and Revokes ZDR Status for 125 Endpoints

**A data security incident affecting the inference provider chain.** **OpenRouter** [reports](https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/) that security researchers found data leaks or policy violations at certain providers. The investigation found no evidence that OpenRouter itself was compromised, but three providers have been removed and zero-data-retention status has been revoked for **125 endpoints** 🔒. Developers currently calling OpenRouter in high-privacy mode should check whether the endpoints they use appear on the revocation list.

![OpenRouter removes three providers and revokes 125 ZDR endpoints · source cover](https://openrouter.ai/og.png "OpenRouter removes three providers and revokes 125 ZDR endpoints · source cover")

---

### 7. ThinkingMachine Open-Sources Inkling-2-Mini Local Small Model

**A new MoE option for local inference.** Gorden Sun's hands-on writeup covers [ThinkingMachine open-sourcing the Inkling-2-Mini local model](https://x.com/Gorden_Sun/status/2124359538690466118): **26B** total parameters, 3.4B active parameters, with the middle 12 layers cycled three times for an effective 5.4B active parameters. It supports vision-language input and a 1M context window, scores comparably to Qwen 3.8 27B, and runs **faster** thanks to its MoE architecture 🖥️. Worth trying for developers deploying on local GPUs.

![Inkling-2-Mini benchmark comparison screenshot](https://pbs.twimg.com/media/HXs9vDFb0AIVerS?format=jpg&name=orig "Inkling-2-Mini benchmark comparison screenshot")

---

### 8. Study Estimates 87% of Anthropic's 2028 Data Center Power Will Come from Natural Gas

**AI compute carbon emissions get quantified.** The Better Data Center Project [analysis](https://betterdatacenterproject.com/2026/11/16/how-ai-is-powered-a-breakdown-of-byop-and-grid-power/), based on public disclosures, estimates that roughly **87%** of power for Anthropic's identified 2028 data centers will come from natural gas and 11% from coal, with annual carbon emissions estimated between **17 million and 38 million tonnes** of CO₂ equivalent 📄. These figures cover only the near-term incremental power draw from locatable sites and do not represent verified data for Anthropic's full operations.

![Study estimates 87% of Anthropic's 2028 data center power from natural gas · source image](https://i0.wp.com/betterdatacenterproject.com/wp-content/uploads/2026/11/anthropic-power-split.png?resize=1024%2C214&ssl=1 "Study estimates 87% of Anthropic's 2028 data center power from natural gas · source image")

---

### 9. Agent Self-Verification Has Systematic Weaknesses; Cross-Checking Is More Reliable

**Agents verifying their own work tend to repeat the same mistakes.** Baoyu points out in a post that [an agent's self-check inherits its chain of thought](https://x.com/dotey/status/2124637421627117847), making it prone to retracing the same faulty reasoning — similar to proofreading your own writing. For **critical tasks** where errors are costly, running self-verification and independent verification in parallel is advisable 🔒. The tradeoff is higher token consumption, but the gains in accuracy and stability are meaningful. Developers designing agent workflows can use this to add independent validation at high-risk nodes.

![Agent verification strategy diagram](https://pbs.twimg.com/media/HXwbWz0XsAAQYvF?format=jpg&name=orig "Agent verification strategy diagram")

---

### 10. Jike User liupc: AI-Assisted Mathematics Helps Us Know "What Is Correct" More Clearly

**Formal verification shifts the boundary of what mathematics considers known.** **liupc** writes in [this post](https://m.okjike.com/originalPosts/6b026fb83ce945612e08bf5c) that the greatest value of this proof is that humans can now know more clearly "what is correct" — analogous to what AlphaGo meant for Go. At the same time, he cautions that mathematics has no physical world to serve as an independent check, so until humans have confirmed every detail, Lean 4 formal verification cannot be treated as **100% endorsement** for non-experts 📄. "Why it is correct" remains a path humans must walk themselves.

---

## **❓ Related Questions**

### Can Claude help me understand a specific step in the Riemann Hypothesis proof?

**You can give Claude a particular piece of reasoning and ask it to explain the logic.** The author notes in [this reflection](https://m.okjike.com/originalPosts/6b026fb83ce945612e08bf5c) that the verification process and formal proof are still being debated. Users who want to explore the mathematical reasoning in depth can do so directly through a Claude account via 爱窝啦·AI账号店.