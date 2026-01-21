---
linkTitle: AI Daily
title: AI Daily-AI资讯日报
breadcrumbs: false
next: /en/2026-01/2026-01-18
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
# **Today's Summary**

```
Anthropic Report Reveals: AI Isn't Stealing Jobs, It's Restructuring Work—Bug Fixing Tops Claude Usage at 6%, Projected to Boost US Productivity by 1.2 Percentage Points Annually.

Ollama Now Supports Anthropic API Format, Local Models Can Call Claude Tools; Google Open-Sources langextract for Precise Information Extraction; Open-Source Tool AionUI Goes Viral.

Skills Are Both Short-Term Gains and Long-Term Moats—Stop Worrying About Replacement, Ask Yourself What Capabilities You're Building.
```

## ⚡ Quick Navigation

- [📰 Today's AI News](#todays-ai-news) - Latest Updates at a Glance

> 💡 **Tip**: Want to experience the latest AI models mentioned in this article (Claude 4.5, GPT, Gemini 3 Pro) right away? No account? Grab one at [**Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content)—one-minute setup, worry-free support.

## **Today's AI News**

### **👀 One-Liner**
The boundary between Claude Skills and Agents is finally clear—stop conflating them.

### **🔑 3 Keywords**
#SkillsAreNotAgents #OpenSourceToolBoom #AICodeNewParadigm

---

## **🔥 Top 10 Headlines**

### [Anthropic Releases "Economic Index Report": AI Is Reshaping Work, But Not How You Think](https://www.bestblogs.dev/en/status/2012876785437024557)

Anthropic just dropped a bombshell report: AI isn't simply "stealing jobs"—it's restructuring work itself. Bug fixing accounts for 6% of Claude usage, ranking #1. Here's the twist: AI tends to handle tasks requiring higher education (averaging 14.4 years), yet this actually "de-skills" the remaining human work. Travel agents lose complex itinerary planning, keeping only booking and payment; real estate managers actually upskill as AI takes over accounting, leaving contract negotiation. The report estimates AI could boost US labor productivity growth by 1.0–1.2 percentage points annually—back to late-1990s golden-age levels. But there's a subtle catch: if core tasks can't be automated, they become bottlenecks. Teachers can prep faster with AI, but classroom teaching time stays fixed.

![Image](https://pbs.twimg.com/media/G-8eLGVWoAAl8l7.jpg)

---

### [Baoyu's Deep Dive: Are Skills Short-Term Gains or Long-Term Moats?](https://baoyu.io/blog/skills-short-term-vs-long-term-advantage)

Here's the real question: as models get stronger, will Skills be replaced by autonomous planning? Baoyu's answer: Skills are short-term gains *and* long-term moats—but the moat isn't in Skills themselves. He breaks down AI's three phases: Phase 1 is Chatbot + Prompt, Phase 2 is Agent + Context Engineering, now Phase 3 is Agent + Skills. Skills as a concrete form might get replaced, but the learning and practice you invest in Skills becomes your long-term moat. Just like people who invested in Prompt Engineering later understood Context Engineering better; those who invested in Context Engineering now build better Skills. Every wave's "short-term gain" is the next wave's entry ticket. So stop asking "will Skills be replaced?" Instead ask: "What capabilities am I building through Skills? Will those capabilities matter in the next wave?"

![Image](https://baoyu.io/uploads/2026-01-18/Gemini_Generated_Image_nevx9tnevx9tnevx.png)

---

### [Ollama Now Supports Anthropic API Format—Local Models Can Call Claude Code Tools](https://linux.do/t/topic/1482151)

Ollama now supports Anthropic API compatibility. What does that mean? Local open-source models can now call tools (Tools / Function Calling) just like Claude, and directly integrate with Claude Code and other ecosystem tools. Previously you had to choose between cloud APIs and local models; now it's local models + Claude ecosystem = endless possibilities. Developers are thrilled. This move instantly levels up local model practicality—no privacy concerns, no API costs. The wait-and-see crowd wins again.

![Image](https://linux.do/uploads/default/optimized/4X/3/4/d/34d2a97cf6e85bb048879fcdb752352447d48544_2_286x500.jpeg)

---

### [Gemini Code Execution + Manus File Planning: Building Manus-Like Memory-Based Planning AI](https://linux.do/t/topic/1482125)

Someone stumbled upon the simplest way to build a Manus-like Agent: Gemini's Code Execution with built-in persistence and Python, combined with AionUI's Manus-inspired prompts (file-based memory planning). Results are solid, even with Flash models. Core principle: context window = RAM (volatile, limited), file system = disk (persistent, unlimited), so write all critical info to disk. For each complex task, create three files: `task_plan.md` (track phases and progress), `findings.md` (store research and discoveries), `progress.md` (session logs and test results). This mimics Manus's "attention manipulation," keeping goals fresh in the attention window. Logic tests and Rubik's cube frontend tests both passed—looks legit.

![Image](https://linux.do/uploads/default/optimized/4X/3/6/c/36c9253f26193868dc9322770671d108a70efc6c_2_563x500.png)

---

### [CodeConductor V1.7.2 Update: Open-Source Cowork Alternative, But More Than That](https://linux.do/t/topic/1481692)

A free, local, open-source Cowork alternative for Gemini CLI, Claude Code, Codex, Opencode, Qwen Code, Goose Cli, Auggie, and more. Latest version fixes resource-hogging bugs, adds CLI vendor settings page (Claude Code / Codex), optimizes `CollabChat` view and `MessageList` tool message batch collapse for better readability in long conversations. Clean interface, lightning-fast response—almost zero lag. If you're using Claude Code or Codex, this tool is worth trying. Open-source community power: someone always builds better tools than the official version.

![Image](https://linux.do/uploads/default/optimized/4X/d/e/e/dee693b43b5873b687a857a2e5deb573ac50f296_2_690x412.png)

---

### [OpenCode Configuration Guide: Step-by-Step Setup for Vendors and Models](https://linux.do/t/topic/1482156)

OpenCode's config file locations and parameters are finally documented clearly. Main config at `~/.config/opencode/opencode.json` (vendor and model settings), auth file at `~/.local/share/opencode/auth.json` (API Key storage). Setup is simple: 1) Add vendor config in `opencode.json` (baseURL and models); 2) Use `opencode auth login` to configure API Keys; 3) Add model config under vendors (id, name, cost, limit, reasoning, temperature, tool_call, attachment). API Key priority: environment variables > local config file. If you set an environment variable (like `ANTHROPIC_API_KEY`), it takes precedence. This guide is detailed and beginner-friendly.

---

### [AionUI: Free, Local, Open-Source Cowork Alternative for Multiple CLI Tools](https://github.com/iOfficeAI/AionUi)

AionUI is a free, local, open-source Cowork alternative for Gemini CLI, Claude Code, Codex, Opencode, Qwen Code, Goose Cli, Auggie, and more. Already at 5,539 stars—strong community approval. Core advantages: runs completely locally (privacy guaranteed), supports multiple CLI tools (flexible), open-source and free (no subscription fees). If you're using Claude Code or Codex, this tool is a must-try. Open-source community power strikes again.

---

### [langextract: Google's Open-Source Structured Information Extraction Library with Precise Source Localization](https://github.com/google/langextract)

Google open-sourced langextract, a Python library for extracting structured information from unstructured text using large language models, with precise source localization and interactive visualization. Core advantages: pinpoints exactly where extracted info comes from (no hallucinations), includes interactive visualization (great for debugging and validation). Already at 22,017 stars—solid community backing. If you're working on RAG or information extraction projects, this library is essential. Google's open-source quality is consistently high.

---

### [LEANN: Run Fast, Accurate, 100% Private RAG Apps on Personal Devices with 97% Storage Savings](https://github.com/yichuan-w/LEANN)

LEANN is a RAG tool saving 97% storage while running fast, accurate, and 100% private RAG apps on personal devices. Already at 8,949 stars—strong community recognition. Core advantages: 97% storage savings (no disk space worries), completely local (privacy guaranteed), fast and accurate (performance guaranteed). If you're building RAG projects, this tool is a must-try. RAG's future is local, private, and efficient—LEANN is heading in exactly that direction.

---

### [Asimov's 1957 Sci-Fi Story "Profession": Real Innovation Happens When You Break Free From Existing Frameworks](https://x.com/vista8/status/2012857240928256088)

Sci-fi author Isaac Asimov's 1957 "Profession" depicts a future where humans absorb knowledge directly via "education tapes." At 18, you're tested, assigned a career, implanted with relevant knowledge, and locked in. Protagonist George wants to be a programmer but gets deemed "unsuitable for any professional education" and sent to a "house for the feeble-minded." He despairs, rages, resists—until finally realizing that "house" is actually the "Institute for Advanced Study," training people capable of self-learning and original thinking. Psychologist Omani says: "We can't detect original thinking ability—it's too subtle. We can only wait for someone to stand up and say: I can create, and I'll do it whether you like it or not." Interesting premise. History shows major inventions rarely came from "most qualified" people—Watt (steam engine improver) was an instrument repairman, Wright brothers (airplane) ran a bike shop, Turing (computer science founder) studied math. Real innovation happens when you escape existing frameworks.

---

## **📌 Worth Watching**

**[Product]** [Typeless: A New Voice Input Choice for Summarizing and Analyzing Long-Form Voice Input](https://m.okjike.com/originalPosts/696ca58e9b6c5c43d6499ac8) - Can't live without voice input anymore; throat inflammation last week made typing painful. If you like talking to your computer or thinking through conversation, try Typeless. It excels at summarizing and analyzing long-form voice input, balancing rewrite intensity with original meaning. For short daily inputs, Lightning Say is still faster.

**[Open Source]** [Virtual Location App Based on GOGOGO Lightweight Fork](https://linux.do/t/topic/1480422) - Powered Gemini 3 Pro hard, switched to Gemini 3 Flash when quota ran out. Removed Baidu Maps SDK, switched to open-source OpenStreetMap; stripped features, kept only location simulation; added dark mode support; redesigned UI following Material Design 3.

**[Research]** [Why Do We Want to Eliminate Programmers Every Decade?](https://x.com/vista8/status/2012872350027612319) - From COBOL to CASE tools, Visual Basic to low-code platforms—each wave promised "no need for so many expensive programmers." Result? Complexity remains. Someone must understand business problems, verify generated code solves them correctly, consider security impacts, ensure proper system integration, maintain it through requirement changes. AI amplifies programmer capability but doesn't replace those who understand both problem domains and technology.

**[Other]** [Google Trends Added AI Features](https://x.com/vista8/status/2012860955714060660) - Even legacy products like Google Trends are getting AI features now. Input a topic on the right, auto-generate related keyword suggestions.

**[Other]** [This Open-Source Icon Library Is Comprehensive!](https://x.com/vista8/status/2012851867903217916) - Each sub-library has thousands or tens of thousands of icons. Vibe Coding users should bookmark this.

---

## **😄 AI Fun Facts**

### [ThinkPad's Pointing Stick: Three Hat Styles You Didn't Know About](https://x.com/vista8/status/2012854596428034271)

In 1997, IBM added two new hat styles to ThinkPad's pointing stick, creating three total: ①Original Cat Tongue; ②Soft Rim; ③Soft Dome. Every ThinkPad ships with all three—users swap based on tactile preference. Fun fact: didn't know the little red dot had this much engineering! 😋 No wonder ThinkPad users are so devoted to it.

![Image](https://pbs.twimg.com/media/G-8XkwCX0AAvj4C.jpg)

---

## **🔮 AI Trend Predictions**

### GPT-5 Official Release
- **Predicted Time**: Q2 2025
- **Confidence**: 65%
- **Reasoning**: Based on OpenAI's historical release cadence, major updates typically launch in spring. Plus OpenAI's recent $10 billion deal with Cerebras for 750 megawatts of inference compute increases model release likelihood.

### Agent + Skills Ecosystem Explosion
- **Predicted Time**: Q1 2025
- **Confidence**: 80%
- **Reasoning**: Today's news [Baoyu's Deep Dive: Are Skills Short-Term Gains or Long-Term Moats?](https://baoyu.io/blog/skills-short-term-vs-long-term-advantage) + recent Agent tool releases (Ollama Anthropic API support, CodeConductor updates, AionUI open-source) indicate technology maturity has reached critical mass.

### Local RAG Apps Become Mainstream
- **Predicted Time**: Q2 2025
- **Confidence**: 70%
- **Reasoning**: Today's news [LEANN: Run Fast, Accurate, 100% Private RAG Apps on Personal Devices with 97% Storage Savings](https://github.com/yichuan-w/LEANN) + privacy and cost concerns driving localization trends; technology is mature.

---

## **❓ Related Questions**

### How to Experience Claude Code or Codex?

Claude Code and Codex currently require Claude Pro subscription ($20/month) or OpenAI API access. Domestic users may face payment difficulties or account registration restrictions.

**Solution**: Visit **[Aivora](https://aivora.cn)** to get ready-made accounts—instant delivery, worry-free support.