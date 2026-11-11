---
linkTitle: AI Daily
title: AI Daily 2026/11/11：Anthropic Releases Two New Models on the Same Day
breadcrumbs: false
next: /en/2026-11/2026-11-11
description: Anthropic releases Fable 5.2 and Mythos 5.2, with improvements in coding,
  reasoning, and vision. Open-source models are challenging commercial benchmarks
  while software is shifting from human-use to agent-use. Try the two new models first,
  then evaluate whether agent-skills can be integrated directly into existing projects.
cascade:
  type: docs
---
## **Today's Summary**

```
Anthropic releases Fable 5.2 and Mythos 5.2, with improvements in coding, reasoning, and vision.
Open-source models are challenging commercial benchmarks while software is shifting from human-use to agent-use.
Try the two new models first, then evaluate whether agent-skills can be integrated directly into existing projects.
```

## **🔥 Today's Top 10 Highlights**

### 1. Anthropic Releases Two New Models on the Same Day

**Fable 5.2 and Mythos 5.2 launch simultaneously.** **Anthropic**'s [official account announced](https://x.com/AnthropicAI/status/2119867707546071125) that both models are available today, positioned as collaborative tools for tackling the most demanding technical challenges. Both models offer improvements in coding, reasoning, and vision. Users with coding or complex reasoning needs can now switch between them directly on the Claude platform.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2119862225028452352/vid/avc1/1920x1080/E6naF0FCPw_qRYv0.mp4?tag=29"></video>

---

### 2. Open-Source World Model PAN 2 Surpasses NVIDIA Cosmos

**Open-source diffusion model outperforms commercial benchmark.** PAN 2, released by MBZUAI, combines a 29B-parameter diffusion video generator with LLM reasoning. A [technical summary compiled by BestBlogs](https://www.bestblogs.dev/en/status/2120214912735854713?utm_source=rss&utm_medium=feed&utm_campaign=resources&entry=rss_article_item) shows a task-planning success rate of **34%**. Model weights are **58GB** and available for download under the Apache 2.0 license. Developers working on autonomous driving or robotic simulation can pull the weights directly from Hugging Face, though physical consistency remains unstable in roughly two-thirds of simulated scenarios.

---

### 3. Claude Adds Whiteboard and Spreadsheet Collaboration Features

**Whiteboards and Sheets now available on all paid plans.** On November 10, Anthropic added Whiteboards and Sheets to **Claude**. [Claude adds whiteboard and spreadsheet collaboration features](https://x.com/dotey/status/2120312745543315897) shows that both features are rolling out in beta across web, desktop, and mobile apps. **Claude** Data, launching at the same time, is the official release of the renamed dashboard and requires connecting a data warehouse or CRM data source first. If you don't see the entry point in your account yet, that's normal — just describe your needs in a conversation to trigger the feature.

![Claude adds whiteboard and spreadsheet collaboration features · original image](https://pbs.twimg.com/media/HWx89ZkXMAAqMO6?format=png&name=orig "Claude adds whiteboard and spreadsheet collaboration features · original image")

---

### 4. MiniMax Open-Sources H3-Image Image Generation Model

**MiniMax image model weights are now publicly available.** Gorden Sun posted that [MiniMax has open-sourced the H3-Image image generation model](https://x.com/Gorden_Sun/status/2120161175724007651), evolved from the H3 video model, with support for generating **4K×4K** resolution images and accepting up to **16** reference images. The model page briefly returned a 404 at launch as the weights were still uploading. Developers who need high-resolution image generation or multi-reference image compositing can watch the Hugging Face page for the weights to finish uploading.

---

### 5. Driving Video from a Single Image with Physical Plausibility — Waymo Benchmark Ranks First

**Motion Forcing ranks first in physical plausibility.** Jishi[reported on this new framework from HKUST(GZ)](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247942445&idx=3&sn=daa8c5e19b4475029e89910f836ad72a&chksm=e9b4ae61863aef2020603861565433dec4ae86ef52ba16818aa1facf2a3495140e23fb619882&scene=0&xtrack=1#rd): input a single image to generate driving videos that include long-tail scenarios such as sudden lane cuts and hard braking. It ranks first in physical plausibility evaluations on the **Waymo** dataset, and the framework code is open-sourced. **Autonomous driving data teams** can use it to quickly augment training data for rare scenarios.

![HKUST(GZ) Motion Forcing autonomous driving video generation framework](https://mmbiz.qpic.cn/mmbiz_jpg/A6fTew8FFGHc720JG8uqoyYJWYPyrXWsrUhMNBLOnmqDgTSCQbGIemicz2CicbMN41mLsCg64LpMbcpeibrsAzialrdRoAQmykibuUpBvIL4vobM/300?wxtype=jpeg&wxfrom=0 "HKUST(GZ) Motion Forcing autonomous driving video generation framework")

---

### 6. Tencent AI Gaming Companion Agent "Goose Universe" Opens Beta Testing

**Tencent's Goose Universe enters the gaming companion space.** AIBase [reports](https://www.aibase.com/zh/news/32213) that the product can perceive game screens in real time and provide **instant Q&A**, with support for QQ cross-platform chat, desktop pets, and voice-changing interactions. The first batch of supported games includes Valorant, League of Legends, and other mainstream titles, with **4** AI characters available. Users who want to try it can visit eciyuan.qq.com to apply for beta access.

![Tencent Goose Universe AI gaming companion agent beta](https://upload.chinaz.com/2026/1110/6392990181021528634027091.jpg "Tencent Goose Universe AI gaming companion agent beta")

---

### 7. Grok Bot Adds Tailscale Access to Any Server

**Grok Bot now supports direct connection via Tailscale.** A V2EX user [posted about Grok bot adding Tailscale access to any server](https://www.v2ex.com/t/1255959#reply3), noting that **Grok** Bot can now access any server through Tailscale, while OpenAI Dots currently only supports Ubuntu 24.04 and 26.04 desktop versions and does not allow installing third-party networking tools. **Developers with multi-device remote access needs** should factor this difference into their tool selection.

![Any experts using the Linux desktop Codex — can Dots connect directly to Linux?](https://i.imgur.com/Ehr59Fb.png "Any experts using the Linux desktop Codex — can Dots connect directly to Linux?")

---

### 8. Xiangyang Qiaomu Open-Sources X Long-Form Auto-Translation to Chinese Website Project

**Open-source tool can automatically scrape X long-form posts and publish them as a Chinese website.** Xiangyang Qiaomu [released this new project](https://x.com/vista8/status/2120099636149153857), which uses Grok Bot to daily scrape and analyze high-quality long-form posts from overseas accounts on X, **automatically translates them into Chinese**, and **publishes them as an accessible website**. The project supports being repurposed to track specific researchers or model company accounts as an information feed. Developers can find the demo website address and open-source repository link in the post's comment section.

![Xiangyang Qiaomu open-sources X long-form to Chinese website project](https://pbs.twimg.com/media/HWwaJ3DboAAWo92.jpg "Xiangyang Qiaomu open-sources X long-form to Chinese website project")

---

### 9. AI4M Closed-Door Session: China's Manufacturing Data Volume Doesn't Automatically Equal Advantage

**Large data volumes don't automatically translate into an AI materials advantage.** The [Future Lightcone AI for Materials closed-door session notes](https://m.okjike.com/originalPosts/6af2acc4320fd7e1b533cb73) compiled by Ji Shisan bring together the views of more than 20 entrepreneurs, scientists, and investors. The core conclusion: many factories and long supply chains, but failed-sample records are scattered and inconsistently formatted, with formulas and processes impossible to link. The real barrier for **automated laboratories** lies in stable long-process execution — a successful single-step demo does not mean reliable batch operation. Teams positioning themselves in the **AI4M** space need to start planning from data infrastructure, not model capability.

![11.5 Future Lightcone AI for Materials closed-door session notes — invited 20+ entrepreneurs, scientists,](https://cdnv2.ruguoapp.com/FlVXSqosuj6p5cJ2JLYD3gI_5e5Cv3.heic "11.5 Future Lightcone AI for Materials closed-door session notes — invited 20+ entrepreneurs, scientists,")

---

### 10. State Media Coverage Is Not a Shield — AI Entrepreneurs Need a Clear Head

**Media exposure cannot substitute for genuine product credibility.** The Muqiu [posted on Jike pointing out](https://m.okjike.com/originalPosts/6af2c0df320fd7e1b535f248) that Evergrande, LeEco, WM Motor, and Neta Auto all appeared on CCTV or People's Daily and still could not avoid crisis. The post directly calls out founders in AI applications, embodied intelligence, and world model spaces. For AI entrepreneurs seeking state media endorsement, product capability and business sustainability remain the only real moats.

---

## **◎ Industry Shifts and Personal Impact**

### AI Is Accelerating Development Workflows, but Debugging Instincts Are Fading in Parallel

**Programming skills are being replaced by AI, but the cognitive cost is underestimated.** A developer [shared their own transformation on Juejin](https://juejin.cn/post/7705961716425490447): screenshot the error, send it to AI, wait for a solution, copy and paste — the debug panel gets opened less and less. Speed increased, but the habit of reading source code line by line and tracing call chains has quietly disappeared. They noted that the internationalization refactor and Vue upgrade on a large project were almost entirely AI-driven. For developers who have long built experience through independent debugging, it's worth asking today: how much time is still set aside for **thinking actively**?

![AI is eroding our coding abilities](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/3dab39ef3e474bd7914af5f82ce4a2fe~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55-z5bCP55-zT3J6:q75.awebp?rk3s=f64ab15b&x-expires=1794824744&x-signature=xDz6LYW8OXqifhe8v2EFQXgEVtE%3D "AI is eroding our coding abilities")

---
## **⌘ Top Open-Source Projects**

### addyosmani/agent-skills: A Production-Grade Engineering Skills Library for AI Coding Agents

**An engineering skills collection designed specifically for AI coding agents.** [addyosmani/agent-skills has published all its code](https://github.com/addyosmani/agent-skills), maintained by Chrome DevTools core contributor Addy Osmani, written in JavaScript, and contains engineering skills for AI coding agents ready for direct integration into production environments. It gained **465** new Stars today, bringing the total to **115,168**. Developers building AI coding agents or looking for mature engineering skill references can pull the repository and browse the available skills list directly.

![addyosmani/agent-skills: A Production-Grade Engineering Skills Library for AI Coding Agents · R](https://addyosmani.com/assets/images/addys-agent-skills.jpg "addyosmani/agent-skills: A Production-Grade Engineering Skills Library for AI Coding Agents · R")

---
## **◉ Social Media Picks**

### WordCraft Test: English Drafts Pass, Chinese Long-Form Documents Still Need a Font

**The open-source Word alternative has a Chinese display defect.** Shikong Mao [ran a full test of WordCraft](https://m.okjike.com/originalPosts/6af300c738389f5993b3a5ea) — this browser-based document tool with 17,726 Stars supports 4 templates and 11 export formats, and Chinese characters are fully preserved when exporting to docx. However, characters like "署", "品", and "传" appear as boxes on screen, with the same issue occurring in PDF and PNG exports — the problem is that the web version lacks a complete Chinese font. The verdict: **English document** drafting works fine; Chinese long-form documents are not usable yet — write first, then export to docx for proofreading.

![WordCraft missing Chinese font test screenshot](https://cdnv2.ruguoapp.com/FooulOh9PyY_ub8_ifTEkMpf5nHUv3.png "WordCraft missing Chinese font test screenshot")

## **😄 AI Curiosities**

### OpenAI Released a Handheld Console, and the Comments Section Is Demanding New Models

OpenAI's merchandise store listed a **Game Boy-style handheld console** with a D-pad and cartridge slot, priced at **$200**. The pitch: say a few words to **Codex** to generate a small game, write it to a physical cartridge, and play it. The comments section was lively enough — [users are demanding GPT-6.2](https://www.36kr.com/p/4063341927748736). The handheld dream came true; the update dream did not.

![OpenAI released a handheld console, and the comments section is demanding new models · original image](https://img.36krcdn.com/hsossms/20261110/v2_67edb1f677e241268678316b459b6cb8@1200352198_oswg782249oswg1080oswg1153_img_000?x-oss-process=image/format,jpg/interlace,1 "OpenAI released a handheld console, and the comments section is demanding new models · original image")

## **❓ Related Questions**

**Claude has added Whiteboard and Sheets features — which plans can use them?**

Anthropic has launched Whiteboards and Sheets for Claude. All paid plans can use them; they are currently in beta and rolling out gradually. Just describe your needs directly in a conversation to trigger the feature — no need to find a dedicated entry point.