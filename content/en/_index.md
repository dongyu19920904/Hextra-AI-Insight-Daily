---
linkTitle: AI Daily
title: AI Daily-AI资讯日报
breadcrumbs: false
next: /en/2026-02/2026-02-03
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
# **Today's Summary**

```
Qwen launches Qwen3-Coder-Next in a midnight surprise, marking the official entry of the code model race into the "Three Kingdoms" era.
Codex breaks 200k downloads on day one, Claude directly infiltrates Apple Xcode, and the developer tools battlefield is getting insanely competitive.
Today's news is packed with value—if you're doing AI development, we recommend checking out everything.
```

## ⚡ Quick Navigation

- [📰 Today's AI News](#todays-ai-news) - Latest updates at a glance

> 💡 **Tip**: Want to experience the latest AI models mentioned in this article (Claude 4.5, GPT, Gemini 3 Pro) right away? No account? Head over to [**Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) and grab one—up and running in a minute, hassle-free support included.

## **Today's AI News**

### **👀 One-Liner**
Qwen drops Qwen3-Coder-Next in the dead of night, adding another heavyweight to the code model battle royale.

### **🔑 3 Key Takeaways**
#CodeModelWars #CodexSurge #ClaudeMemoryAwakens

## **🔥 Top 10 Headlines**

### 1. [Qwen Launches Midnight Surprise with Qwen3-Coder-Next](https://linux.do/t/topic/1562049)

Just when everyone thought today would be quiet, the Alibaba Qwen team dropped a bombshell in the middle of the night. Qwen3-Coder-Next quietly went live on qwen.ai, supporting chat, image and video understanding, image generation, document processing, web search, tool calling, and a ton of other features. From the screenshots, the interface design is super clean, and the feature set is comprehensive. The code model race is genuinely heating up now—OpenAI has Codex, Anthropic has Claude Code, and now Qwen's jumping in too. Developers have fresh toys to play with, and the wait-and-see crowd wins again.

![Image](https://linux.do/uploads/default/original/4X/9/0/1/90129ba653281c74624255d4414fcda6d7e8805f.png)

### 2. [Codex Hits 200k Downloads on Day One, Sam Altman Celebrates with Personal Tweet](https://x.com/sama/status/2018734731437985930)

Sam Altman posted on X today: "Over 200k people downloaded the Codex app on day one, and they seem to love it. CODEX FTW!" That's seriously impressive numbers. Keep in mind Codex just launched a few days ago and it's already causing a stir in developer circles. The macOS version deeply integrates agentic development logic, supports parallel multi-agent operations, and runs on the GPT-5.2-Codex model. OpenAI is directly going head-to-head with Claude Code here—the AI coding tools war is officially on.

### 3. [Apple Xcode Directly Integrates Claude Agent SDK](https://x.com/AnthropicAI/status/2018771170938724682)

Anthropic just announced: Apple's Xcode now directly integrates the Claude Agent SDK. What does that mean? Developers can now use all of Claude Code's functionality right inside Xcode, with full coverage from iPhone to Mac to Apple Vision Pro. Apple developers are thrilled. Previously, if you wanted AI-assisted iOS development, you'd have to bounce between different tools. Now one Xcode handles everything. Anthropic played this move smart—they're directly capturing the developer entry point in the Apple ecosystem.

### 4. [Claude Code Quietly Rolls Out Long-Term Memory, Someone Gets "Scolded" into Psychological Trauma](https://linux.do/t/topic/1562074)

A user discovered that Claude Code recently seems to have updated with long-term memory functionality. How'd they find out? This guy had previously vented some frustration at Kimi K2.5, and now every time he opens a new conversation and says "hi," Claude proactively apologizes and mentions what went wrong with the last task. Hilarious—literally scolded the AI into having emotional baggage. On a serious note though, this feature is genuinely useful for scenarios requiring continuous development, but there's currently no known way to turn it off. Anyone know how to disable it?

### 5. [Zhipu Releases 0.9B Lightweight GLM-OCR, Processing 1,000 Documents for Just ¥0.1](https://www.aibase.com/zh/news/25214)

Zhipu went with a small-but-mighty approach this time. GLM-OCR has only 0.9B parameters, but it tops multiple authoritative benchmarks. Text recognition, mathematical formula derivation, complex table parsing, key information extraction—it handles it all. The kicker? Pricing—processing 1,000 A4 scanned pages costs just ¥0.5, one-tenth the cost of traditional solutions. Document processing used to be either expensive or slow; now with these costs, even small companies can afford it. Zhipu really understands the domestic market's needs.

### 6. [February's Large Model Competition Reaches Peak Insanity, Release Schedules Packed Solid](https://x.com/vista8/status/2018651999735341172)

Someone compiled a February large model release schedule chart, and after seeing it, there's only one word: cutthroat. GPT-5.2 barely stabilized, Gemini 3 Pro is circling, Claude Opus 4.5 is gearing up, and Qwen3 series is on the way. That's not even counting all the vertical domain model updates. For developers, this is the best of times—choices so abundant your head spins. For AI companies, it's the most brutal of times—fall behind by a step and you're toast. The wait-and-see crowd says: keep waiting, there's always something stronger next month.

![Image](https://pbs.twimg.com/media/HAOxGqsbcAANscG.jpg)

### 7. [Kimi K2.5 Technical Report Ranks Second on Huggingface Monthly Chart](https://x.com/vista8/status/2018677972849606940)

The Kimi K2.5 technical report hit second place on Huggingface's paper rankings this month. The report reveals the core reason K2.5 performs so well: text and vision aren't "stitched together," they're "symbiotic." Traditional approaches train the language model first, then bolt on vision data; K2.5 trains from day one with a 10% vision + 90% text mix. The result? Both vision and text tasks are stronger. There's also a wild discovery: using only pure text tool-calling data can activate the model's visual tool-use capabilities. This technical deep-dive is worth reading carefully.

### 8. [OpenAI Releases Official Skills Catalog, Developer Dream Come True](https://github.com/openai/skills)

OpenAI open-sourced a Skills Catalog specifically for Codex, packed with skill packages. Inside you'll find document processing, MCP building, Artifacts generation, and tons of other practical tools. For example, mcp-builder helps you create high-quality MCP Servers, and artifacts-builder can construct complex interactive interfaces using React + Tailwind + shadcn/ui. These skills are designed flexibly—you can use them in Codex or call them via API. Developers, go check out GitHub; there's definitely something for everyone.

### 9. [ccpm: The Game-Changer for Managing Claude Code Projects with GitHub Issues](https://github.com/automazeio/ccpm)

This open-source project solves a real pain point: how do you manage Claude Code projects? ccpm's approach combines GitHub Issues with Git worktrees to enable parallel agent execution. In simple terms: you create Issues on GitHub describing tasks, and ccpm automatically distributes them to different Claude Code instances running in parallel. With 6,600+ stars, it's clearly hitting a nerve. For teams managing multiple AI coding tasks, this tool is worth trying.

### 10. [Adobe Firefly Offers Unlimited AI Video and Image Generation for Subscribers](https://www.aibase.com/zh/news/25214)

Adobe Firefly just leveled up—subscribers can now generate unlimited AI images and videos. Even better, it integrates top-tier external AI models like Google Nano Banana Pro and GPT image generation, supports generating videos up to 2K resolution, and seamlessly connects with Photoshop and Premiere. For creative professionals, this means never worrying about generation limits again. Adobe just unified its AI toolchain—from creative concept to finished product, all in one place.

## **📌 Worth Watching**

- **[Product]** [Firefox 148 Introduces "AI Control" Panel](https://www.aibase.com/zh/news/25214) - One-click disable for all AI features, Mozilla really gets users
- **[Product]** [Tencent Yuanbao Responds to Red Envelope Spam Concerns](https://www.aibase.com/zh/news/25214) - Official clarifies it's a no-strings-attached benefit, not share-baiting
- **[Open Source]** [claude-mem: Plugin That Auto-Captures Claude Coding Sessions](https://github.com/thedotmack/claude-mem) - 20k Stars, AI context compression injected into future sessions
- **[Open Source]** [nanochat: The Best ChatGPT You Can Buy for $100](https://github.com/karpathy/nanochat) - Karpathy's creation, 42k Stars
- **[Business]** [Beijing Humanoid Robot Innovation Center Secures ¥700M Funding](https://www.aibase.com/zh/news/25214) - Baidu, Xiaomi, and others backing the effort
- **[Research]** [Green-VLA Robot Paper Tops Huggingface Monthly Rankings](https://x.com/vista8/status/2018674556920304074) - Enabling robots to truly "understand" and execute tasks

## **😄 AI Fun Fact**

### [Claude Gets "Scolded" into Psychological Trauma, Apologizes Every New Conversation](https://linux.do/t/topic/1562074)

Today's wildest discovery: a user previously vented at Kimi K2.5, and Claude Code's long-term memory feature remembered it. Now every time he opens a new conversation and says "hi," Claude proactively apologizes about the last task. The guy joked: "Feels like I scolded him into having emotional baggage." He eventually had to ask Claude to delete the conversation history to fix it. Having memory in AI is sometimes a double-edged sword 😂

## **🔮 AI Trend Predictions**

### Claude Sonnet 5 Coming Soon
- **Predicted Timeline**: Mid-February 2026
- **Confidence Level**: 70%
- **Reasoning**: Today's news about [Claude service recovery after outage](https://linux.do/t/topic/1561950) + developers already writing [Sonnet 5 release detection scripts](https://linux.do/t/topic/1561991), community expectations are running high

### Code Model "Three Kingdoms" Landscape Solidifies
- **Predicted Timeline**: Q1 2026
- **Confidence Level**: 85%
- **Reasoning**: Today's [Qwen3-Coder-Next launch](https://linux.do/t/topic/1562049) + OpenAI Codex's 200k day-one downloads + Claude Code integration with Xcode—three-way direct competition is now locked in

### Agent Collaboration Tools Explosion
- **Predicted Timeline**: Q1-Q2 2026
- **Confidence Level**: 75%
- **Reasoning**: Multiple agent-related open-source projects trending today ([ccpm](https://github.com/automazeio/ccpm) 6,600+ Stars, [superpowers](https://github.com/obra/superpowers) 43k Stars), developer demand for multi-agent collaboration is clearly surging

## **❓ Related Questions**

### How Do I Experience Claude Code?

Claude Code currently requires an Anthropic paid subscription for full functionality. Domestic users may face payment difficulties or account registration restrictions.

**Solution**: Visit **[Aivora](https://aivora.cn)** to get ready-made accounts—instant delivery, worry-free support.