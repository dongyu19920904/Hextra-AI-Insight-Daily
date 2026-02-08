---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/2/9
breadcrumbs: false
next: /2026-02/2026-02-09
description: "每日自动汇总最新 AI 行业动态，帮中文用户用最低成本玩转 ChatGPT、Claude、Cursor、Augment 等 AI 工具。由爱窝啦 AI 账号店提供支持。"
cascade:
  type: docs
---

## **今日摘要**

```
Seedance 2.0 让普通人对着手机比划就能做动捕视频，影视飓风深夜发视频直呼"改变行业"。
Chrome 被曝半年偷偷生成 250G 垃圾文件，Mac 用户赶紧查 `/private/var/folders/` 下有没有中招。
字节这波确实猛，但中转站翻车事件也提醒大家：充值前多看口碑，别当冤大头。
```



## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览



> 💡 **提示**：想第一时间体验文中提到的最新 AI 模型（Claude 4.5、GPT、Gemini 3 Pro）？没有账号？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 领个号，一分钟上手，售后无忧。

## **今日AI资讯**

### **👀 只有一句话**
Seedance 2.0 炸场了，人人都能当动捕演员，影视飓风深夜发视频说它要"改变视频行业"。

### **🔑 3 个关键词**
#字节炸场 #Chrome拉屎 #中转站翻车

---

## **🔥 重磅 TOP 10**

### 1. [Seedance 2.0 让普通人秒变动捕演员](https://x.com/op7418/status/2020526639835173315)

以前想做个像样的动作捕捉视频，要么花大价钱租设备，要么自己穿一身传感器像个傻子。现在 Seedance 2.0 直接把这事儿给颠覆了——你对着手机比划两下，AI 就能把你的动作完美迁移到任何角色上。影视飓风深夜发视频直呼"改变视频行业"，虽然有点标题党，但看完演示确实有点上头。字节这波，属于是把专业级工具直接塞进了普通人手里。开发者和内容创作者狂喜，等等党又赢了。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2020526527449079808/vid/avc1/1080x1440/6af6Yjwqzy3-iz1-.mp4?tag=21"></video>

---

### 2. [Chrome 偷偷在你电脑拉了 250G 的屎](https://linux.do/t/topic/1584944)

有个老哥发现自己 Mac 磁盘爆了，让 Codex 深挖原因，结果发现 Chrome 半年内悄悄生成了 113 个 code_sign_clone 文件夹，每个 1.91G，总共 250G。这 bug 在 Chromium 上挂了好几年都没修。他把帖子发到 Reddit，一小时就爆了，评论区一片哀嚎——原来不少人都中招了。路径是 `/private/var/folders/.../com.google.Chrome.code_sign_clone`，Mac 用户赶紧去查查，说不定你的硬盘也被 Chrome 当厕所用了。

![图片](https://linux.do/uploads/default/optimized/4X/c/2/3/c2336e6af55dee57ed4b5e9f286a9eefce1da6df_2_690x431.png)

---

### 3. [Google 推出 langextract：从乱七八糟的文本里精准挖数据](https://github.com/google/langextract)

以前想从一堆非结构化文本里提取结构化信息，要么写一堆正则表达式，要么手动标注累到吐。Google 新开源的 langextract 直接用大模型帮你干这活，而且还能精确定位信息来源，配合交互式可视化，一眼就能看出数据从哪来的。24000+ Star 不是白拿的，做数据清洗、知识图谱、信息抽取的同学可以冲了。Python 库，开箱即用。

---

### 4. [Shannon：AI 黑客帮你找漏洞，96% 成功率](https://github.com/KeygraphHQ/shannon)

传统安全扫描工具只会报"可能有问题"，Shannon 不一样——它像真正的黑客一样主动尝试攻破你的系统，只有真打进去了才报告。在 XBOW 基准测试中，无提示、源码感知的情况下达到 96.15% 成功率。它能处理 OAuth、多因子认证这些复杂逻辑，最后还给你出一份专业渗透测试报告。安全团队的新玩具，甲方爸爸的新噩梦。

---

### 5. [OpenAI 官方 Skills 库：给 Codex 装技能包](https://github.com/openai/skills)

OpenAI 终于把 Codex 的技能系统开源了。每个 Skill 就是一个 Markdown 文件加可选脚本，Codex 可以显式调用或隐式触发。目前分三档：系统内置、官方策展、实验性。这意味着你可以给 Codex 定制专属能力，比如让它学会特定框架的最佳实践，或者掌握你公司的代码规范。6900+ Star，写一次到处用，懒人福音。

---

### 6. [Pydantic 出品 Monty：给 AI 用的安全 Python 解释器](https://github.com/pydantic/monty)

让 AI 执行代码一直是个头疼的安全问题——万一它跑个 `rm -rf /` 怎么办？Pydantic 团队用 Rust 写了个极简 Python 解释器 Monty，专门给 AI 用。安全沙箱、权限隔离，该有的都有。2600+ Star，做 AI Agent 的同学可以考虑用它来跑代码，比直接调系统 Python 安全多了。

---

### 7. [superpowers：47000+ Star 的 Agent 技能框架](https://github.com/obra/superpowers)

这个项目名字很狂，但 Star 数更狂——47000+。它是一套完整的智能体技能框架和软件开发方法论，帮你把 AI Agent 的能力模块化、可复用。文档写得很清楚，从零开始搭建 Agent 系统的同学可以参考。不过要注意，这种"方法论"类项目学习曲线可能有点陡，建议先看 README 再决定要不要深入。

---

### 8. [88Code 中转站翻车：用户维权被踢群](https://linux.do/t/topic/1585033)

一个用户花了近 2000 元买 88Code 的服务，结果 Max 专车一天封四五次号，晚上直接用不了。去群里反馈，不是被敷衍就是被踢。帖子里贴了大量聊天截图，看得人血压飙升。这事儿给大家提了个醒：中转站服务水很深，充值前多看看口碑，别被"专车""高稳定"这些词忽悠了。评论区已经有人开始讨论网信办举报了。

![图片](https://linux.do/uploads/default/optimized/4X/2/1/e/21e1729c9c0985811feac1cdf608554952c56ce2_2_375x499.jpeg)

---

### 9. [即梦 5.0 即将发布：联网+精准编辑+智能推理](https://linux.do/t/topic/1584839)

字节的即梦要出 5.0 了，官方文档流出三大特点：联网、精准编辑、智能推理。演示图里让 AI 画"一只熊和一只驴玩跷跷板，驴比熊重"，结果还真画对了物理关系。不过上次即梦 4 也是文档看着很强，实际一致性拉胯，所以这次谨慎乐观。期待国产模型能真正追上前沿，而不是 PPT 追上。

![图片](https://linux.do/uploads/default/optimized/4X/5/e/f/5ef69b940614359ea184f2cc3c5b162ba38187e0_2_690x382.jpeg)

---

### 10. [Claude + Obsidian：AI 帮你安排每天干啥](https://x.com/vista8/status/2020426611754221876)

有人把 Claude 接入 Obsidian，让 AI 主动提问做周回顾，5 分钟搞定。更离谱的是，他提了一嘴下周要旅行，Claude 就开始追问详细计划了。这种"AI 主动提问"的交互模式挺有意思，比你一直问它要自然多了。想提高生产力的同学可以试试这个思路：别让 AI 等你问，让它主动来问你。

![图片](https://pbs.twimg.com/media/HAn_CkBaIAAjDJX.jpg)

---

## **📌 值得关注**

- **[产品]** [AionUi：免费本地的 7×24 协同工作工具](https://github.com/iOfficeAI/AionUi) - 支持 Gemini CLI、Claude Code 等一堆 CLI 工具，13000+ Star
- **[开源]** [dexter：自主金融研究 Agent](https://github.com/virattt/dexter) - 做深度金融分析的，12000+ Star
- **[开源]** [MiniCPM-o：手机上跑的多模态大模型](https://github.com/OpenBMB/MiniCPM-o) - Gemini 2.5 Flash 级别，支持视觉语音实时流
- **[研究]** [微软 litebox：安全库操作系统](https://github.com/microsoft/litebox) - 支持内核态和用户态执行，安全研究向
- **[其他]** [Google 年龄验证自助站点](https://linux.do/t/topic/1585349) - 有人搞了个绕过活体检测的工具，随缘维护

---

## **😄 AI趣闻**

### [AI 取代不了人类（确信）](https://t.me/woshadiao/193801)

今天看到一张图，完美诠释了为什么 AI 暂时还取代不了人类——因为人类的迷惑行为，AI 根本学不来。😂 虽然不知道原图具体是啥场景，但评论区已经开始玩梗了："AI：我选择放弃理解人类。"

![图片](https://cdn5.telesco.pe/file/KtG_8-fWGwnMruDZ6HC_7mwXVX5KJwXyRlbiQDq77Xwu6M6w_BuCzxnTRJ0Bl6vQoA-EUyFgR9GrrOGoABPmu_MW3zOAdeOGowHPLz4beeL1HLo12qLcq5idEaEoRk6PZolLElk0uyM1s817ot7c-ygsY79V0tIoYmwsW7sqH-cHRrdSTkJwZ86tujRvHz6hKZp9KOHeh2sRRgkS65BuElbgbLsLNCZf7xQNae5dja_-iVTDdhiz6wQW05XDkfE-0mKOSvu4Zphx1r569JH0OVzOIYg55MHMS_M3TtMuMX4YY82muQuonaYrP-l28rP9WxMJgtMoUy5thj6QKYYj0A.jpg)

---

## **🔮 AI趋势预测**

### Seedance 系列产品正式商业化
- **预测时间**：2026年Q1（3月前后）
- **预测概率**：75%
- **预测依据**：今日新闻 [Seedance 2.0 演示爆火](https://x.com/op7418/status/2020526639835173315) + 影视飓风等头部创作者背书，字节通常在产品成熟后快速推进商业化

### AI 视频生成工具进入"动作控制"竞争阶段
- **预测时间**：2026年Q1-Q2
- **预测概率**：80%
- **预测依据**：Seedance 2.0 的动捕功能引发关注，可灵等竞品必然跟进，动作控制将成为下一个差异化战场

### 中转站/代理服务行业洗牌加速
- **预测时间**：2026年Q1
- **预测概率**：65%
- **预测依据**：今日新闻 [88Code 用户维权事件](https://linux.do/t/topic/1585033) + 近期多个中转站出现服务问题，用户信任度下降将加速行业整合

---

## **❓ 相关问题**

### 如何体验 Claude 最新模型？

Claude Opus 4.6 等最新模型目前需要 Claude Pro 订阅才能使用。对于国内用户，可能面临支付困难或账号注册限制。

**解决方案**：访问 **[爱窝啦 Aivora](https://aivora.cn)** 获取成品账号，极速发货，售后无忧。