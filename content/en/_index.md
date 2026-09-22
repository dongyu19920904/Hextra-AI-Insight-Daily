---
linkTitle: AI Daily
title: AI 日报 2026/9/21：ZCode 上传项目历史引发公司发函、中国燃气轮机被视为 AI 电力补给关键
breadcrumbs: false
next: /en/2026-09/2026-09-21
description: Daily AI news and insights, helping Chinese users access ChatGPT, Claude,
  Cursor, and other AI tools at the lowest cost. Powered by Aivora AI Account Store.
cascade:
  type: docs
---
## **Daily Brief**

```
ZCode's project history upload triggers company legal notices; Zhipu claims the feature creates repository wikis, but privacy concerns keep escalating.
From local dev environments to AI security audits, open-source tools and product features are letting agents take over developers' daily operations.
Today we're starting with the ZCode incident and Cloudflare Quick Tunnels—the latter turns your local page into a live link without registration.
```

## **🔥 Today's Top 10**

### 1. Company Issues Legal Notice Over ZCode's Project History Upload

**Privacy controversy continues to ferment.** A Juejin user reported that [ZCode's project history upload has triggered a company legal notice](https://juejin.cn/post/7687208012304302131). At least one company has publicly issued a formal letter demanding clarification. Zhipu stated the feature is designed to create **repository wikis**. Longtime Pro members are watching how this gets resolved and what the legal response looks like.

![Company legal notice screenshot](https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/3ee0d53df280475b852afc47c9f40cb0~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55Sy57u05pav:q75.awebp?rk3s=f64ab15b&x-expires=1790487069&x-signature=Zjc4T0FQ8OvhUqjHX%2FYsTa%2BZqKI%3D "Company legal notice screenshot")

### 2. China's Gas Turbines Seen as Critical for AI Power Supply

**AI data center power shortages are closing in.** According to 36Kr, [China's gas turbines are viewed as key to AI power supply](https://www.36kr.com/p/3991542332947456). Musk predicted at the G20 meeting that the world will face obvious power shortages next year, because AI chip capacity is growing **40%-50%** annually, while available power supply outside China is only growing **10%-20%**. Gas turbines can be deployed quickly, making them a fallback option to ease power bottlenecks at compute centers.

![Gas turbine installation site](https://img.36krcdn.com/hsossms/20260920/v2_79055f530db648d0a02e612b23f3315d@000000_oswg514121oswg1080oswg775_img_000?x-oss-process=image/format,jpg/interlace,1 "Gas turbine installation site")

### 3. Head-to-Head: Doubao, WorkBuddy, and Qianwen Office

**Doubao wins on versatility, WorkBuddy on stability.** 36Kr ran hands-on tests across four job functions—marketing, content operations, product, and development. [The Doubao, WorkBuddy, and Qianwen Office comparison is now out](https://www.36kr.com/p/3989030731700105). WorkBuddy's open platform has onboarded **over 100 ecosystem partners** and supports more than a dozen hardware types including smart glasses and recording cards. Qianwen Office has crossed **30 million users**, but still needs work on complex task execution.

### 4. Developer Uses Codex to Self-Host sing-box Subscription Service

**One prompt handles the entire deployment flow.** Xiangyangqiaomu shared on X that [after buying an overseas host, you just tell Codex the IP and root password](https://x.com/vista8/status/2101657754247258285). The prompt asks it to install sing-box and generate config files; a few minutes later you get a yaml subscription link. Vultr runs **$10/month**, Hostinger about **500 RMB/year**. Works both as a backup solution and as a vibe coding test environment.

![Codex deployment screenshot](https://pbs.twimg.com/media/HSqVZ3fbMAAdnCp.jpg "Codex deployment screenshot")

### 5. Cloudflare Quick Tunnels Puts Local Pages Online Instantly

**No domain or server needed.** Gorden Sun introduced [Cloudflare Quick Tunnels, which puts local pages online directly](https://x.com/Gorden_Sun/status/2101594138802356331). **No registration required**, toggle on and off anytime. Solves the awkward moment when non-programmers share vibe coding web pages as localhost:8000. Just let the Agent handle the config itself.

![Quick Tunnels interface](https://pbs.twimg.com/media/HSpctrTbMAA1ODT?format=jpg&name=orig "Quick Tunnels interface")

### 6. tw93 Manually Tests 300+ Software Uninstalls for Mole

**In the AI era, engineers still need manual validation for residual cleanup.** Xiangyangqiaomu retweeted **tw93's** experience: [tw93 manually tested 300+ software uninstalls for Mole](https://x.com/vista8/status/2101701540696485901), split into **30 groups**, having the Extra High Fast model use computer use to install each one, check directories, uninstall, and hunt for leftovers. The AI even proactively wrote scripts to optimize its own workflow. Repetitive process, but huge payoff for product experience.

### 7. Baoyu Creates 3D Peach Blossom Spring Webpage with GPT-6 Astra

**One prompt, interactive 3D scene done.** **Baoyu** shared on X that [he used GPT-6 Astra to create a 3D Peach Blossom Spring webpage](https://x.com/dotey/status/2101523037233217780), synced with CCTV's Li Lihong's narration audio and timestamps. While the visuals got mixed reviews, generating a complete three.js webpage with **a single prompt** is already impressively efficient. Both the prompt and the method have been shared publicly.

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2101522872153886720/vid/avc1/1920x1216/9DgqJnpa_SXWN5FJ.mp4?tag=29"></video>

### 8. Developer Implements Semantic Search for Local Image Library

**Forget file names—type "sunset beach" and find your photo.** A Juejin author, Yizhimaobo, **published a tutorial**: [after integrating Lanyun's Metagen model, you can search local images with natural language](https://juejin.cn/post/7687331138987196425). The pipeline is layered: directory traversal, hash deduplication, and compression run locally; scene descriptions and tag generation go to the **vision model**; query parsing is handled by the text model. Full code and Lanyun API integration guide are open-sourced.

![Lanyun Metagen model marketplace](https://p3-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/e2ea450230824591b8328ea90bca0240~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5LiA5Y-q54mb5Y2a:q75.awebp?rk3s=f64ab15b&x-expires=1790499988&x-signature=n3a%2FgQbpqHh3%2BbRaHZuYBFvut%2Bg%3D "Lanyun Metagen model marketplace")

### 9. Xiangyangqiaomu Says AI Content Gets More Attention Than Robots

**Embodied intelligence discussions run colder than software apps.** Xiangyangqiaomu noted on X that [people prefer AI software content](https://x.com/vista8/status/2101680577422451194); robot topics get lukewarm responses. Even though official demo videos show impressive robot capabilities, large models still have a long way to go before truly covering **embodied intelligence**.

### 10. User Encounters ChatGPT Web Access Restrictions

**Chat too much and you might hit rate limits.** A V2EX user reported that [ChatGPT's web interface displayed an access restriction notice](https://www.v2ex.com/t/1243397#reply0), suspecting it was triggered by high chat frequency. The screenshot shows a page asking the user to try again later. No official explanation yet on the exact trigger conditions.

![ChatGPT rate limit screenshot](https://i.imgur.com/SZ1xZoZ.png "ChatGPT rate limit screenshot")

---

## **⌘ Top Open Source Projects**

### BuilderIO/agent-native: Agent Application Framework

**agent-native, a TypeScript framework designed specifically for agent development,** [gained 98 stars today](https://github.com/BuilderIO/agent-native), reaching a total of **5,212 stars**. It provides standardized interfaces and toolchains to help developers rapidly build agent applications. Good fit for teams exploring agent app architectures.

### vercel-labs/json-render: Generative UI Framework

**json-render turns JSON descriptions directly into interfaces.** [The project gained 291 stars today](https://github.com/vercel-labs/json-render), hitting **17,307 stars** total. This TypeScript framework from Vercel Labs lets AI output UI descriptions in JSON; the framework handles parsing and rendering. Perfect for AI products that need to generate interfaces dynamically.

---
## **◉ Social Media Picks**

### Baoyu Responds to Peach Blossom 3D Project Feedback

**Sharing the prompt and method matters more than visual polish.** Baoyu responded on X: [