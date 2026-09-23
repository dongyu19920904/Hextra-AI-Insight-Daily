---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/9/22
breadcrumbs: false
next: /2026-09/2026-09-22
description: "Grok 4.7 参数涨到 2.1 万亿定价不变，千问开放 7B 生图权重能在 3090 上跑，模型成本正在以更快的速度下降。 产品更新、开源工具和智能体实测都在证明同一件事：AI 真的可以一次生成完整应用了。 今天先看 Grok 4.7 和千问权重两条，再决定是切换模型还是部署本地方案。"
cascade:
  type: docs
---

## **今日摘要**

```
Grok 4.7 参数涨到 2.1 万亿定价不变，千问开放 7B 生图权重能在 3090 上跑，模型成本正在以更快的速度下降。
产品更新、开源工具和智能体实测都在证明同一件事：AI 真的可以一次生成完整应用了。
今天先看 Grok 4.7 和千问权重两条，再决定是切换模型还是部署本地方案。
```

## **🔥 今日焦点 TOP 10**

### 1. Grok 4.7 发布，参数涨 40% 价格不变

**参数规模升到 2.1 万亿。** 宝玉在推文中介绍，[SpaceXAI 正式发布 Grok 4.7](https://x.com/dotey/status/2102089012483706936)，参数从上一代 1.5 万亿增加到 **2.1 万亿**，但 **API 定价保持不变**（输入 2 美元 / 百万 token，输出 6 美元）。训练数据加入了 SpaceX 多年积累的工程数据。马斯克定位它对标 Claude Opus 5.0，用 Cursor 写代码的开发者今天就能切换。

![Grok 4.7 发布公告](https://pbs.twimg.com/media/HSwLcNqXIAAwNtz?format=png&name=orig "Grok 4.7 发布公告")

### 2. 千问开放 7B 生图模型权重，3090 就能跑

**RTX 3090 就能在本地运行。** 据量子位报道，[千问把 Qwen-Image-2.1 的权重开放了](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247925574&idx=2&sn=4fcff6779b184a6e93f2fdb9bcdf351c)。这个 **7B 参数模型**集成了文生图、图片编辑、透明图和原生 **2K 输出**。正在找本地生图方案的开发者，可以下载权重在自己机器上试。

![Qwen-Image-2.1 生成效果](https://mmbiz.qpic.cn/mmbiz_jpg/A6fTew8FFGHy0H7icPoD06eQdPUvQ8kDRC5D7M2XgEYcuCjawyevDyTg2Nx22NnnXq3qa35CDY5H0w9CaptRebbegvFlq5zFDuNJzd83uMZU/300?wxtype=jpeg&wxfrom=0 "Qwen-Image-2.1 生成效果")

### 3. Google 推出 Googlebook 笔记本，深度整合 Gemini

**新品类笔记本上线预订。** 据 Google Gemini 官方账号转发，[Googlebook 配备 2.8K OLED 触摸屏](https://x.com/GeminiApp/status/2102062402871472635)，续航 **14 小时**，基于 Android 技术栈和 ChromeOS 桌面基础构建。系统层级嵌入 **Gemini Intelligence**，能与 Android 手机无缝同步。需要在笔记本和手机间切换工作流的用户，可以关注这个设备。

### 4. OpenAI 成立数学家顾问组，评估 AI 数学成果

**独立顾问组将审核新结果。** Gorden Sun 转发称，[OpenAI 正与独立数学家顾问组合作](https://x.com/Gorden_Sun/status/2102119566403097085)，帮助评估和传达 AI 在数学领域的新成果。该组织负责审核结果的学术与专业标准。正在用 AI 辅助数学研究的团队，未来可能会看到更多经过同行评审的 AI 数学结论。

![OpenAI 数学顾问组公告](https://pbs.twimg.com/media/HSw6mS2asAADchm?format=jpg&name=orig "OpenAI 数学顾问组公告")

### 5. Codex 支持跨 Session 对话，可通知另一项目启动

**能让另一个项目等待执行。** 向阳乔木在推文中实测，[Codex 可以在一个文件夹下通知另一个项目启动](https://x.com/vista8/status/2102048510426411404)，显示为"**已等待聊天**"。需要在多个项目间协调任务的开发者，可以用这个功能减少手动切换。

![Codex 跨 Session 对话截图](https://pbs.twimg.com/media/HSv5G-NaAAAxfly.jpg "Codex 跨 Session 对话截图")

### 6. DomA 浏览器智能体加入 Jev，表单填写速度提升

**表单自动填写变快了。** 据 V2EX 开发者发帖，[DomA 加入 Jev 模型支持后](https://www.v2ex.com/t/1243718#reply0)，通过 **Jev 自循环**在表单场景确实快了些。目前纯 LLM 模式可靠性更高。正在**自动化网页操作**的开发者，可以从 GitHub 仓库 dom-actions/doma 试用。

![DomA 表单填写演示](https://i.v2ex.co/jbNJ2HHa.png "DomA 表单填写演示")

### 7. The Cully Hill Boys：首部 AI 全流程生成长片开源

**28 人 4 周完成制作。** 据 AIGC1024 频道消息，[The Cully Hill Boys：首部 AI 全流程生成长片开源](https://t.me/aigc1024/24853)，演员真实但影片 **100% AI 生成**，预算 **200 万美元**。所有 prompt 和素材已在 Higgsfield 开源。正在尝试 AI 影视工作流的团队，可以参考这套完整流程。

### 8. Fable 5.1 一次生成完整动物喂养小游戏

**纯 JS 一镜到底。** Gorden Sun 在推文中实测，[Fable 5.1 直接生成了动物喂养小游戏](https://x.com/Gorden_Sun/status/2101928167124660242)，包含不同动物的专属零食细节。在线体验和 GitHub 仓库 GordenSun/little-critters 已公开。想快速验证游戏 idea 的开发者，可以试试这个生成能力。

### 9. 四款主流 AI Bot 形象对比图走红

**用户开始挑选 AI 助手人设。** Gorden Sun 发布了 [四款 AI Bot 的拟人形象对比图](https://x.com/Gorden_Sun/status/2101969144744902916)，引发大量转发。正在为产品设计 AI 助手形象的团队，可以参考这组视觉风格差异。

![AI Bot 形象对比](https://pbs.twimg.com/media/HSuxxTgbwAAx1m2?format=jpg&name=orig "AI Bot 形象对比")

### 10. 璇仔 Valeri 提出 AI 时代的全民所有权五阶段推演

**从 UBI 到 Universal Ownership。** 据即刻用户璇仔 **Valeri** 发帖，[AI 替代劳动后的分配可能经历五个阶段](https://m.okjike.com/originalPosts/6ab169e7141b85b292dd91b3)：当前红利归高技能者和资本，工资难以承担分配功能，UBI 扩大，最终建立全民资本账户让普通人直接分享收益。正在思考 AI 对就业和收入长期影响的从业者，可以读完整推演。

---

## **⚡ 产品与功能更新**

### 飞书与豆包整合为新产品团队

**两个产品线合并。** 据 AIGC1024 频道消息，[飞书和豆包整合成新的豆包产品团队](https://t.me/aigc1024/24838)。正在使用飞书或豆包的企业用户，未来可能会看到更深度的功能整合。

---
## **⌘ 开源 TOP 项目**

### zhouxiaoka/autoclip：AI 智能高光提取与剪辑工具

**自动从长视频中提取精彩片段。** [autoclip 已公开核心代码](https://github.com/zhouxiaoka/autoclip)，使用 AI 实现视频高光生成与剪辑。当天新增 **250 Stars**，总计 **8229 Stars**。适合需要批量处理视频素材的创作者和运营团队。

### Crosstalk-Solutions/project-nomad：离线优先知识服务器

**无需联网运行维基百科和本地 AI。** [project-nomad 整合了维基百科、数千本书籍、课程、地图和可选本地 AI](https://github.com/Crosstalk-Solutions/project-nomad)，全部运行在自有硬件上。当天新增 **394 Stars**，总计 **37859 Stars**。适合需要离网知识库或教育环境的团队。

---
## **◉ 社媒精选**

### 向阳乔木与姚劲刚将开 GEO 公开课，由听众投票选主题

**9 月 26 日晚 8 点直播。** 向阳乔木在推文中预告，[他和姚劲刚会开 GEO 公开课](https://x.com/vista8/status/2101975694767243393)，由大家投票选出课程主题。目前最关心的问题是 **GEO 如何做效果归因**。需要了解 GEO 实践的开发者，可以扫码加入听课交流群。

![GEO 公开课投票](https://pbs.twimg.com/media/HSu3QmNbEAAxjUo.jpg "GEO 公开课投票")

---
## **😄 AI趣闻**

### Grok 4.7 刚上线就被拿来开发植物大战僵尸

向阳乔木刚看到 Grok 4.7 能用了，立刻在 [Grok CLI 中让它开发一个植物大战僵尸](https://x.com/vista8/status/2102067631432048964)。目前只有 CLI 能看到新模型，网页版和 Grok bot 都还没有。结果他真的拿到了一个僵尸游戏的代码。

![Grok 4.7 开发植物大战僵尸](https://pbs.twimg.com/media/HSwLNUJaIAA96zH.jpg "Grok 4.7 开发植物大战僵尸")

---
## **❓ 相关问题**

### Grok 4.7 国内怎么用？

Grok 4.7 目前通过 SpaceXAI 提供，可以在 Grok CLI、Cursor 编辑器和 Grok Build 中直接选择使用。API 定价为输入 2 美元 / 百万 token，输出 6 美元 / 百万 token，与上一代 4.6 保持一致。网页版和 Grok bot 暂时还未更新到新模型。

需要进一步比较当前公开的 AI 账号或订阅服务时，可查看 [**爱窝啦·AI账号店**](https://www.aivora.cn/)；商品、价格与可用状态以官网实时页面为准。