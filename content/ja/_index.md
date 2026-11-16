---
linkTitle: AI Daily
title: AI 日报 2026/11/15：AMD 收购 World Labs 后李飞飞首次公开亮相
breadcrumbs: false
next: /2026-11/2026-11-15
description: "AMD 以82亿美元收购World Labs，李飞飞在CoRL 2026与苏姿丰首次同台，AI硬件与世界模型的整合进入实质阶段。 从ChatGPT Wallet到MCP调试工具再到本地逆向净化器，各方向都在把AI控制权从云端和平台手里往用户侧迁移。 开发者今天优先看chrome-devtools-…"
cascade:
  type: docs
---


## **今日摘要**

```
AMD 以82亿美元收购World Labs，李飞飞在CoRL 2026与苏姿丰首次同台，AI硬件与世界模型的整合进入实质阶段。
从ChatGPT Wallet到MCP调试工具再到本地逆向净化器，各方向都在把AI控制权从云端和平台手里往用户侧迁移。
开发者今天优先看chrome-devtools-mcp和Wallet付款机制，前者可直接接入工作流，后者值得确认安全边界再做判断。
```

## **🔥 今日焦点 TOP 10**

### 1. AMD 收购 World Labs 后李飞飞首次公开亮相

**李飞飞加入 AMD 后首次同台发言。** 11 月 12 日 CoRL 2026 上，据机器之心报道，[李飞飞做完世界模型主旨演讲后与苏姿丰同台对谈](https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651074456&idx=2&sn=96fd9bd0e55a35b655b0a2dddd61264d)。**AMD** 于 9 月 28 日宣布以约 **82 亿美元**全股票收购 World Labs，交易预计年底前完成交割。届时李飞飞将出任 AMD 执行副总裁兼首席科学家，直接向苏姿丰汇报。

![李飞飞与苏姿丰 CoRL 2026 同台](https://wechat2rss.bestblogs.dev/img-proxy/?k=330f97e4&u=https%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2F5L8bhP5dIqGBkHD7zLXPHUT2QVLDjetr158bf2LzlGLBBv0ygYJ9CH2ntmh0iaxic6icNDToAAdH39JicDpb78YGCuR2csdnqgtQyPYhyepgiauw%2F0%3Fwx_fmt%3Djpeg "李飞飞与苏姿丰 CoRL 2026 同台")

---

### 2. ChatGPT Wallet 让 AI 代理代为付款

**ChatGPT 新增 AI 代理付款功能🔒。** OpenAI 于 11 月 13 日发布 ChatGPT Wallet，与美国运通、Mastercard、Visa 合作，[lotook 整理了付款流程与安全机制](https://lotook.com/articles/chatgpt-wallet/)。每笔下单前 agent 展示商品、总价和使用的卡，需刷脸或指纹二次确认。商家拿到的是支付网络发的 token，看不到**真实卡号**。目前仅限**美国 Pro 用户**使用。

---

### 3. Claude 全线服务出现约两小时认证故障

**Claude.ai 登录异常已当日修复。** [Anthropic 官方事故页面](https://status.claude.com/incidents/nn11wk485zfn)记录，受影响服务包括 **claude**.ai、Claude Code、控制台及 Cowork。北京时间 11 月 13 日 17:58 开始调查，19:58 宣布解决，**官方记录跨度约两小时**。故障核心是登录与认证错误，官方未公布根因，也未证实与同期 Microsoft 365 事件有因果关联。

---

### 4. LibTV 全球首发 Seedance 2.5 Flash

**Seedance 2.5 Flash 已在 LibTV 率先上线。** 据教程帖，[该版本专为 AI 短剧创作设计](https://mp.weixin.qq.com/s/zd--v-hf4VAAxqVuQRJkVQ)，作者用它复刻了爆火短剧《持械入宋》的穿越剧风格。调用价格比 **Seedance** 2.5 便宜 **30%-40%**，作者称质量未出现明显缩水。有短视频生产需求的创作者可关注这个价格窗口。

![LibTV Seedance 2.5 Flash 短剧演示](https://mmbiz.qpic.cn/sz_mmbiz_jpg/tIT7Q7mxeEJRE9g8m18YGbxbHy4oNA7Xb5lVtgN60AZOsmxiaj8ywzmkhSdgZA8EY1kB2l2iblfiaAZYYqzLzjEibhHqDewicY9Dx5nIU5OiaUSibo/0?wx_fmt=jpeg "LibTV Seedance 2.5 Flash 短剧演示")

---

### 5. Hassabis 警告闭环 AI 自我改进难以控制

**Hassabis 点出递归自我改进的控制盲区。** AI探索指南频道整理了此次访谈，[Hassabis 警告闭环 AI 自我改进难以控制](https://t.me/aigc1024/27038)。他担心的情形是去掉人工审核的**闭环 RSI**：系统进步更快，人类却更难理解和干预。他同时指出，现有 AI 系统在他看来尚不具备**意识**，智力与意识可以分开讨论。

---

### 6. 少楠把 Grok Bot 升档、把 Codex 降档

**工作流迁移成本倒逼订阅重新分配。** 独立开发者少楠在即刻分享，[他把 Grok Bot 升级、将 Codex 退订至低档](https://m.okjike.com/originalPosts/6af79db3136b2761c64ca316)。原因是业务工作流已跑在 **Grok** Bot 上、迁移代价高，而 **Codex 主要写代码**、替换成本低。这个决策逻辑对同时订阅多个 AI 工具的开发者有参考价值。

![少楠订阅调整记录](https://cdnv2.ruguoapp.com/FhTYA4YHPvQL5upJSmB3OdHXl1BUv3.jpg "少楠订阅调整记录")

---

### 7. vista8 用 AI 模特设计 YouTube 封面

**AI 生成人脸已进入视频封面工作流。** 向阳乔木在推文中分享了实验进展，[他选定 AI 模特并配好封面排版参考](https://x.com/vista8/status/2121610817531756916)。他的判断是**视频封面有人脸**已是共识，AI 生成模特能快速填补这一需求。对独立创作者来说，这条工作流**降低了封面制作门槛**。

![vista8 AI 封面实验参考图](https://pbs.twimg.com/media/HXF5RJMasAA4yku.jpg "vista8 AI 封面实验参考图")

---

### 8. 把 GitHub Skill 转成 epub 导入微信读书

**GitHub Skill 转电子书的方法已有人跑通。** LaurenQ 在即刻给出了完整提示词，[把 GitHub Skill 转成 epub 导入微信读书](https://m.okjike.com/originalPosts/6af8070d3ce945612ee99efa)，导入微信读书后可在墨水屏阅读。输出带 HTML 渲染，适合**纯中文逻辑型 Skill**。想系统学习某个 **Skill** 体系结构的人，这条路径值得一试。

---

### 9. Rust 1.100 稳定 never 类型和自定义分配器

**Rust 把 `!` 类型推广到所有可命名类型位置。** [Rust 官方博客发布了 1.100 更新说明](https://blog.rust-lang.org/2026/11/12/Rust-1.100.0/)，同时稳定核心 `Allocator` trait，但集合相关接口尚未全部完成。新增的 `DropGuard` 可在 panic 时执行清理，Cargo 增加**未使用依赖检查**和可选的最小**发布时间设置**。旧 edition 项目需留意类型推断回退行为的变化。


![Rust 1.100 稳定 never 类型和自定义分配器 · 原文封面](https://www.rust-lang.org/static/images/rust-social.jpg "Rust 1.100 稳定 never 类型和自定义分配器 · 原文封面")

---

### 10. 工程师把 Coway 净化器从云端改接本地

**配网数据中藏着绕开云端的突破口。** Scott 在个人博客详细记录了逆向过程，[发现蓝牙配网数据包含证书下载 URL](https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/)，只需填入**本地地址即**可让设备连接自建服务。最终通过 Web Bluetooth 配网、本地 MQTT 接入 Home Assistant，**AI 辅助重建了部分配网流程**。对不想依赖厂商云服务的用户，这个思路有参考价值。


![工程师把 Coway 净化器从云端改接本地 · 原文配图](https://scottjg.com/posts/2026-11-11-reverse-engineering-my-coway-air-purifier-to-ditch-the-cloud/coway-airmega-icons-cover_hu_7db7fbd82932782d.jpg "工程师把 Coway 净化器从云端改接本地 · 原文配图")

---

## **⌘ 开源 TOP 项目**

### ChromeDevTools/chrome-devtools-mcp：为编码 Agent 接入 DevTools

[chrome-devtools-mcp 已公开核心代码](https://github.com/ChromeDevTools/chrome-devtools-mcp)，让编码 Agent 通过 MCP 协议直接调用 Chrome 开发者工具能力。今日新增 **664 Stars**，总计 56306 Stars，是本日日榜星数最高的项目。适合需要让 AI 辅助调试或自动化浏览器测试的工程师。

---

### tradermonty/claude-trading-skills：股票投资者的 Claude 技能集

[claude-trading-skills 汇集了股票分析相关技能](https://github.com/tradermonty/claude-trading-skills)，涵盖市场分析、技术图表和交易策略开发，基于 Claude Code 运行。今日新增 **553 Stars**，总计 4815 Stars。适合正在用 Claude Code 探索半自动化投研工作流的个人开发者。

---

### dream-num/univer：可嵌入产品的开源 AI 办公 SDK

[univer 提供了可扩展的开源内核](https://github.com/dream-num/univer)，支持编辑、计算、协作，同时兼容人类操作和 AI Agent 调用。今日新增 **495 Stars**，总计 24497 Stars，使用 TypeScript 构建。适合需要在自有产品中嵌入类 Office 能力并希望 AI Agent 也能直接操作文档的团队。


![dream-num/univer：可嵌入产品的开源 AI 办公 SDK · README 展示图](https://raw.githubusercontent.com/dream-num/univer/dev/docs/img/readme/hero-banner.png "dream-num/univer：可嵌入产品的开源 AI 办公 SDK · README 展示图")

---
## **◉ 社媒精选**

### 李继刚：先用 AI 视频展示大俗，再呈现古诗原文

**用视觉反差帮孩子从大俗入大雅。** 李继刚在即刻提出一个 AI 教育思路，[先让 AI 生成古诗场景画面，以通俗白话作字幕](https://m.okjike.com/originalPosts/6af7ccf6136b2761c6521687)，再逐画面切换到作者的原始描写。核心是借助感官震撼先建立情绪锚点，再让古诗文字与画面形成落差。这个工作流的起点是 **AI 视频生成**，落点是语文教育场景。

![李继刚 AI 古诗教育设想](https://cdnv2.ruguoapp.com/Fv2f242jJH0xZMME7Du_i6yWSfQKv3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient "李继刚 AI 古诗教育设想")

---

## **😄 AI趣闻**

### 把自家官网的零件全拆给你了

DeepSeek 这回把**自家官网在用的 API** 全部开源，搜索、读文件、识语音、合成语音一个不落，连网页 Demo 都放上了 GitHub。[开源官网几乎全部接口](https://x.com/Gorden_Sun/status/2121583582535938222)之后，谁都能照着拼一个 Agent。开源归开源，API 用起来**还是要钱的**，标了个童叟无欺。

![把自家官网的零件全拆给你了 · 原文配图](https://pbs.twimg.com/media/HXFhBJDa4AAL87y?format=jpg&name=orig "把自家官网的零件全拆给你了 · 原文配图")

## **❓ 相关问题**

### Codex 主要用来写代码，grokbot 更适合跑业务流程吗？

**可以先把一类任务单独给 Codex 跑，观察它的完成率。**[少楠的订阅调整](https://m.okjike.com/originalPosts/6af79db3136b2761c64ca316)提到 Codex 易替换、grokbot 承载了更多工作流。想用 ChatGPT 自己试写代码任务的，可看[爱窝啦·AI账号店的 ChatGPT Plus 充值续费月卡](https://www.aivora.cn/products/chong-zhi-xu-fei-yue-ka-1)续费已有账号。
