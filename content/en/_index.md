---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/8/11
breadcrumbs: false
next: /2026-08/2026-08-11
description: "xAI Imagine 2.0 多轮生成、Anthropic 全渠道双层水印、Meta 30B 开源模型同日落地。 各家产品都在收紧内容溯源或压低调用成本，工具链话语权的争夺已从云端延伸到硬件入口。 开发者今天优先看 Pi+DeepSeek 成本测试和 Meta Muse Glimmer 基准，再…"
cascade:
  type: docs
---


## **今日摘要**

```
xAI Imagine 2.0 多轮生成、Anthropic 全渠道双层水印、Meta 30B 开源模型同日落地。
各家产品都在收紧内容溯源或压低调用成本，工具链话语权的争夺已从云端延伸到硬件入口。
开发者今天优先看 Pi+DeepSeek 成本测试和 Meta Muse Glimmer 基准，再决定是否调整现有 Agent 方案。
```

## **🔥 今日焦点 TOP 10**

### 1. xAI Imagine 2.0 上线，多轮生成与智能扩图同步开放

**图像生成能力升级了。** 据 AIBase 整理，[xAI 正式发布 Imagine Image 2.0](https://www.aibase.com/zh/news/30222)，支持复杂指令、多轮生成与编辑，并保留用户指定的视觉元素。新版还加入**智能调整画幅比例**功能，并提供模板工作流。做创意设计或分镜策划的用户，今天可以去 Grok 试试新版出图效果。

![xAI Imagine 2.0 发布，支持多轮生成与智能扩图](https://upload.chinaz.com/2026/0810/6392195412019696567326111.jpg "xAI Imagine 2.0 发布，支持多轮生成与智能扩图")

---

### 2. Anthropic 给 Claude 输出加双层水印，全球生效

**Claude 生成内容开始留痕了。** 据宝玉转述，[Anthropic 从 8 月 2 日起对新发布 Claude 模型执行双层标记](https://x.com/dotey/status/2086928989549920678)：文本嵌入人眼不可见水印，图片文件附加符合 **C2PA 标准**的签名元数据。覆盖范围包括 API、Claude.ai、Claude Code 等全部渠道，不限欧盟地区。批量用 Claude 生成内容的开发者，需留意下游平台对 C2PA 标记的兼容策略。

![Anthropic Claude 双层水印机制](https://pbs.twimg.com/media/HPZCva4WMAAXhXf?format=jpg&name=orig "Anthropic Claude 文本水印与 C2PA 元数据全球生效")

---

### 3. FCC 禁止进口新型中国人形机器人，立即生效

**中国机器人出海美国的窗口收窄了。** 据 aigc1024 频道整理，[FCC 于 7 月 28 日将新型中国人形与四足机器人列入禁入清单](https://t.me/aigc1024/23023)，同时覆盖数据中心核心设备电源逆变器，**立即生效**。已获授权的现有型号暂时豁免，但 FCC 保留追溯撤销权。关注出海机器人业务的从业者，需密切跟进后续执行细节。

---

### 4. 腾讯混元 WorldClaw 发布，一句话生成可探索 3D 世界

**文字变成可走动的 3D 场景了。** 据 Gorden Sun 介绍，[腾讯混元 3D 发布 WorldClaw](https://x.com/Gorden_Sun/status/2086839773394776194)，由 Claude Opus 4.8 驱动的 Agent 分三步完成从文字提示到全局地形的生成。系统调用 GPT-Image-2、SAM3D、Hunyuan3D 等模型放置场景物体，产出**可自由视角探索且可直接编辑**的带纹理网格场景。3D 内容创作者可访问项目页面查看演示。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2086839551906193408/vid/avc1/1920x1080/WTgPjDIZnxEfXRw7.mp4?tag=29"></video>

---

### 5. ChatGPT 接入 OpenTable 与 Resy，对话框里能订餐厅座位

**AI 助手开始接管餐厅预订了。** 据 Gorden Sun 转发，[ChatGPT 现已支持通过 OpenTable、Resy 和 Yelp 查找并预订座位](https://x.com/Gorden_Sun/status/2086854294914175013)。该功能目前主要面向**美国用户**，国内用户暂无法直接使用。习惯用 ChatGPT 处理日常事务的海外用户，现在可以直接在对话中测试订座流程。

![ChatGPT 整合 OpenTable Resy Yelp 订座功能](https://pbs.twimg.com/media/HPX40PtWcAAD-8t?format=jpg&name=orig "ChatGPT 接入 OpenTable、Resy 和 Yelp 直接预订餐厅")

---

### 6. Pi Agent 接入 DeepSeek V4 Flash，成本最低通过率最高

**极简 Agent 跑出最优性价比。** 向阳乔木引用 Composio 数据，[在 30 个高难度 Agent 任务测试中](https://x.com/vista8/status/2086831077256302965)，Pi Agent 是**成本最低、通过任务数最多**的 harness。Pi 的核心只有 read、bash、edit、write 等基础工具，其余 skill 和 MCP 需自行扩展。想压低 Agent 调用成本的开发者，可以今天搭一个 Pi + DeepSeek V4 Flash 环境试试。

![Pi Agent 在 30 项 Agent 任务中成本最低通过率最高](https://pbs.twimg.com/media/HPXZaY5XUAAmz_p.jpg "Pi Agent 搭配 DeepSeek V4 Flash 测试结果对比")

---

### 7. Cursor 人才主管：FDE 是当前科技界最抢手岗位

**一个新工种正在高速爆发。** 据宝玉翻译的访谈，[Cursor 人才主管 Adam Ward 指出前线部署工程师（FDE）](https://x.com/dotey/status/2086936708843475126)需要同时具备深厚技术能力与销售配合能力，核心价值是帮客户优化 **AI 账单**而非最大化 token 消耗。Adam 将这股热潮与移动端时代相比，但速度快得多——"一切发生在几天或几周之内"。有意转型的工程师，可以把"优化客户 AI 成本"作为核心叙事方向准备起来。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2086861659898011648/vid/avc1/1920x1080/Rw9zBr3rWADt0KLX.mp4?tag=29"></video>

---

### 8. 向阳乔木上线国内 Pi Agent Skill 站

**国内用户安装 Skill 有专属入口了。** 向阳乔木在[向阳乔木上线国内 Pi Agent Skill 站](https://x.com/vista8/status/2086755715042177158)中宣布搭建了 skills.qiaomu.ai，收录常用 Skill 并上传了他写的全部 Skill。该站点目前已可直接访问。正在使用 Pi Agent 的开发者，可以直接去找现成 Skill 复用，省去自己造轮子的时间。

![向阳乔木 Pi Agent Skill 站上线](https://pbs.twimg.com/media/HPWk-_XakAAFLnH.jpg "向阳乔木搭建 Pi Agent Skill 站 skills.qiaomu.ai，专为国内用户收录常用 Skill")

---

### 9. Meta 开源 30B 多模态模型，评分多项超过 Qwen3

**Meta 又放出一个可商用大模型。** 据 Gorden Sun 介绍，[Meta 发布 Muse Glimmer 30B](https://x.com/Gorden_Sun/status/2086762949880979967)，多模态、支持多步骤 Agent 操作，采用**开源可商用**协议，大多数评测得分超过 Qwen3.6-27B。模型已上传至 Hugging Face（meta-models/Muse-Glimmer-30B-ExecuTorch-PTE）。想找可商用国际开源多模态模型的团队，现在可以去跑基准测试做横向对比。

![Meta Muse Glimmer 30B 开源多模态模型评分对比](https://pbs.twimg.com/media/HPWrz3sbQAEW22X?format=jpg&name=orig "Meta Muse Glimmer 30B 多项评分超过 Qwen3.6-27B")

---

### 10. OpenCodex 让 Codex 支持插入自定义模型

**正版 Codex 界面里可以用第三方模型了。** 向阳乔木实测发现，[终端输入 `ocx gui` 即可配置任意模型](https://x.com/vista8/status/2086762055034618065)，支持 API Key 和 OAuth 两种接入方式，配置好的模型会出现在正版 Codex 的模型菜单里，**官方模型不受影响**。这给想自行调配后端模型的开发者提供了一条实测可行的路径。

![OpenCodex 终端配置界面支持 API 和 OAuth 两种模式](https://pbs.twimg.com/media/HPWqpfJaEAAruv6.jpg "OpenCodex ocx gui 命令接入自定义模型配置界面")

---
## **⚡ 产品与功能更新**

### Codex 调用 Skill 生成内容后自动嵌入对话界面

**Codex 产品体验比同类 harness 强一截。** 向阳乔木在[这条对比帖](https://x.com/vista8/status/2086658364520767670)中记录：Codex 调用 Skill 生成音乐后，音频会**自动嵌入对话界面**并可直接点击播放，而其他 harness 产品力明显不足。这是 Codex 与 Pi Agent 之间最直观的差异：Pi 胜在成本，Codex 胜在交互完整度。在多个 harness 之间选型的开发者，可以把"生成物如何在界面内展示"作为依据之一。

---

## **◎ 行业变化与个人影响**

### Anthropic 几百个原型只有极少数对外发布

**Anthropic 的产品是从真实使用中筛出来的。** 据宝玉转述，[《海外独角兽》文章梳理了 Anthropic Labs 的产品路径](https://x.com/dotey/status/2086845551195144533)：内部同时运行**几百个原型**，只有在员工中跑出足够周活留存的才对外发布。Claude Tag 历经数月内部打磨，今年 6 月才正式面世。这个机制意味着 Anthropic 在用自己团队的真实行为替用户完成了第一轮筛选。

---
## **⌘ 开源 TOP 项目**

### danielmiessler/LifeOS：AI 驱动的个人目标爬坡框架

**个人成长也能用 AI 系统化管理了。** [danielmiessler/LifeOS 今日登上 GitHub 日榜](https://github.com/danielmiessler/LifeOS)，当日新增 **315 Stars**，累计超过 17,900 Stars。这个 TypeScript 项目的核心理念是"通用爬坡框架"：帮助用户从当前状态向理想状态系统推进，涵盖职业规划、技能提升和生活习惯调整。想用 AI 工具做个人目标管理的开发者和知识工作者，今天可以 clone 下来试试。

---
## **◉ 社媒精选**

### 向阳乔木用 GPT Pro 写了 Herdr 使用教程，结果在飞书被标记敏感

**教程写完，发布环节翻车了。** 向阳乔木在[这条帖子](https://x.com/vista8/status/2086687637818204320)里分享了用 GPT Pro 完成的 Herdr 调研与使用教程，准备发飞书文档，结果被平台标记为敏感内容。Herdr 是一个超越 tmux 的持久化终端工具，从个人项目到获得 YC 投资，最近在 X 上热度很高。文档本身还挂在飞书上，有兴趣的开发者可以直接找向阳乔木要链接。

---

### 作者妻子用 AI 挖出曾祖母年代的增稠原料，成功复刻祖传口感

**AI 解决了家传配方几十年没解决的问题。** Gorden Sun 转述了[这条生活向的使用例子](https://x.com/Gorden_Sun/status/2086623266693923228)：一家人有一个成功率只有五成的祖传桃子派配方，用黄原胶虽能保证成功，但口感完全不对。作者的妻子转而问 AI 曾祖母那个年代能用什么增稠，AI 给出了木薯淀粉，口感随即复原。这是目前最接地气的 AI 使用案例之一，适合用来解释 AI 的历史知识检索能力。

---

## **😄 AI趣闻**

### 谷歌把 Gemini 踢进了拜仁更衣室

拜仁慕尼黑新赛季换赞助商，这次来的不是饮料、不是银行，是一个会聊天的 AI。**Google Pixel** 和 **Gemini** 正式成为球队合作伙伴，官方发布的[拜仁与谷歌官宣合作视频](https://x.com/GeminiApp/status/2086850491334729934)里，红白球衣配上 AI 助手的 Logo，画风相当魔幻。赛场上 **Gemini** 能帮球员分析战术还是帮球迷骂裁判，目前尚不明确——但它确实比上一任赞助商更能说话。

## **❓ 相关问题**

### Claude Code 国内怎么用？

Claude Code 是 Anthropic 官方的 CLI 编程助手工具，通过终端命令行运行。使用前需要一个 Anthropic 账号，并在支持的地区或通过 API Key 完成认证；国内用户通常需要借助网络工具访问，订阅 Claude Pro 或直接使用 API Key 计费均可驱动 Claude Code。

| 方式 | 适合谁 | 主要限制 |
|------|--------|----------|
| Claude Pro 订阅 | 个人开发者、轻度使用 | 有每日用量上限 |
| Anthropic API Key | 高频调用、团队部署 | 按 token 计费，需绑卡 |
| 第三方兼容接入（如 OpenCodex） | 想替换后端模型 | 非官方，稳定性自负 |

需要进一步比较当前公开的 AI 账号或订阅服务时，可查看 [**爱窝啦·AI账号店**](https://www.aivora.cn/)；商品、价格与可用状态以官网实时页面为准。
