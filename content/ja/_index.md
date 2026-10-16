---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/10/15
breadcrumbs: false
next: /2026-10/2026-10-15
description: "国产非GPU加速器出货首超GPU，英伟达份额跌至34%，与华为昇腾差距收窄至6个百分点。 Agent工具链正在三条线同步推进：行为审计、现有工具免改造接入、MCP插件封装收费。 今天优先看iFixAi审计工具和CLI-Anything，正在部署Agent的团队可直接评估是否补进工作流。"
cascade:
  type: docs
---

## **今日摘要**

```
国产非GPU加速器出货首超GPU，英伟达份额跌至34%，与华为昇腾差距收窄至6个百分点。
Agent工具链正在三条线同步推进：行为审计、现有工具免改造接入、MCP插件封装收费。
今天优先看iFixAi审计工具和CLI-Anything，正在部署Agent的团队可直接评估是否补进工作流。
```

## **🔥 今日焦点 TOP 10**

### 1. 国产非GPU加速器首次出货超过GPU

**国产芯片反超了。** 据[IDC报告](https://www.36kr.com/p/4025420791172992)，2026年上半年中国数据中心AI加速器总出货**200.8万颗**，非GPU加速器以101.6万颗首次超过GPU。英伟达份额跌至34%，与华为昇腾差距仅剩**6个百分点**，同比出货量下降44%。正在采购算力的企业，此时评估国产替代方案的窗口已经打开。

![中国AI芯片市场格局变化](https://img.36krcdn.com/hsossms/20261014/v2_8f0fa301b5c34a8da721350dbe45e992@000000_oswg795232oswg1080oswg608_img_000?x-oss-process=image/format,jpg/interlace,1 "中国AI芯片市场格局变化")

---

### 2. 科学Agent技能库今日冲上GitHub日榜

**177个验证过的科学技能已公开。** K-Dense-AI 在 GitHub 上的[科学智能体技能库](https://github.com/K-Dense-AI/scientific-agent-skills)今日新增 **163颗星**，总星标49338。技能库**覆盖生物**、化学、医学和药物发现，兼容 Cursor、Claude Code 等主流工具。已在搭建科研自动化流程的开发者，可以直接接入现有 Agent 测试。

---

### 3. 问Grok本身就能复制它的资讯筛选流程

**直接问Grok，它会把方法告诉你。** AI探索指南频道的[这条整理](https://t.me/aigc1024/25835)展示了一个思路：向Grok询问它检索 AI 资讯的搜索语句和判断逻辑，再把流程整理成**可复用的 Skill**。账号分类涵盖实验室官方号、关键人物和爆料号，**覆盖模型发布**、融资收购等场景。最关键的区别是 GrokBot 的 X API 不需要额外付费，其他 Bot 同类功能须自行承担 API 成本。

---

### 4. AI内容泛滥或复制雅达利崩溃路径

**内容供给爆发，注意力才是真稀缺。** 即刻用户 JimHuiHui 在[这篇讨论](https://m.okjike.com/originalPosts/6ace942f756bbb66581c3f96)中，把 AI 对游戏影视的冲击类比为1983年雅达利崩溃：低质内容涌入，消费者信任受损。AI 让一人能做出过去十几人规模的产品，但用户每天仍只有 **24小时**，注意力不会跟着供给扩张。对内容创作者来说，真正的竞争壁垒是把品质推高**10倍**乃至100倍的执行力，而不是工具本身。

![AI内容行业影响讨论](https://cdnv2.ruguoapp.com/FpxBWAHgh3YkmrnX83pA8R5_4glTv3.jpg "AI内容行业影响讨论")

---

### 5. Ambi创始人：硬件Agent才能做到言出法随

**Always-on 是软件 Agent 做不到的差距。** 即刻圈子转载的[42章经播客整理](https://m.okjike.com/originalPosts/6aceee92141b85b292eb4e27)中，**Ambi** 创始人子皓指出当前 PA 产品普遍缺少线下 context 和自然交互。AI 眼镜即使一直佩戴，用户发指令还得**先复述一遍背景**，本质上违背了 Agent 应有的体验。硬件还有分发独立、身体部位独占等结构性优势，不必每次向封闭平台买流量。

---

### 6. Gemini 4推理卡顿数千秒，开发者直接放弃

**模型强但稳定性拖后腿。** 开发者歸藏在[这条即刻帖子](https://m.okjike.com/originalPosts/6aceee41756bbb665826011f)中记录，在 Antigravity 上测试 Gemini 4 时，思考过程连续卡住，单次停顿达**数千秒**，**自动审批形同虚设**，每步仍需手动操作。自行接入 API 后问题依然存在。准备在生产环境部署 Gemini 4 的团队，目前需要观望稳定性改善情况。

![Gemini 4卡顿问题截图](https://cdnv2.ruguoapp.com/Fjz4V3POChUKEE3KflLTc9AxNoaIv3.jpeg "Gemini 4卡顿问题截图")

---

### 7. 一人用AI花16天做出精细3D小王子游戏

**一个人+AI做出了工作室级别的3D作品。** 即刻用户 Alchian花生[记录了这个案例](https://m.okjike.com/originalPosts/6aceea17756bbb6658258c22)：开发者 Sac 用 **Opus 5.5+Tripo3D+Blender** 制作《小王子》题材游戏，历时16天，成品在 X 上引发广泛关注。仅让红围巾飘动这一个细节就花费了大量时间。这个案例的核心不是工具，而是把品质推高的意愿和打磨力度。

![AI制作小王子游戏截图](https://cdnv2.ruguoapp.com/FoYHOC5jnk9_7kaKsewjYyaNGDd5v3.jpg "AI制作小王子游戏截图")

---

### 8. 阶跃星辰STEPX Neo原生Agent手机发布

**大模型原生 Agent 手机定价3999元。** 即刻用户童欧巴发布的[这条购买预告](https://m.okjike.com/originalPosts/6ace3a50cfb5d08b3ea3f895)显示，阶跃星辰 STEPX Neo 配置为 **16GB+256GB**，全栈定价**3999元**，作者已下单碳黑色。目前仅为购买预告，尚无上手体验数据。感兴趣的用户可以等实测结果再作决定。

![阶跃星辰STEPX Neo手机外观](https://cdnv2.ruguoapp.com/FidaB8IFxNZuxMpMf8CGoNc12aGOv3.jpg "阶跃星辰STEPX Neo手机外观")

---

### 9. X上发AI换脸视频，结城结弦本人现身评论区

**AI视频遇到了真人本尊。** 宝玉在[X上发AI换脸视频，结城结弦本人现身评论区](https://x.com/dotey/status/2110489668609536061)中记录：一名用户在 X 发布用 AI 制作的结城结弦换脸视频，随即被结城结弦本人在评论区用日语回应："**被中国人当AI玩具了**"。这是 AI 生成内容与真实当事人在同一平台直接相遇的典型案例。创作者公开发布 AI 换脸作品时，应提前考量边界风险。

![结城结弦AI视频遇本尊](https://pbs.twimg.com/media/HUn3KjKXIAARHiD?format=jpg&name=orig "结城结弦AI视频遇本尊")

---

### 10. Renoise把视频创作做成MCP插件上线

**视频脚本和分镜可以在 Agent 里直接完成。** 向阳乔木在[这条介绍](https://x.com/vista8/status/2110373027418640855)中指出，Youware 团队的 **Renoise** 已可安装在 Codex 和 Claude Code 中，帮助创作商品广告或短片的脚本和分镜。调用 AI 生视频和 TTS 功能需要消耗**积分**，基础功能免费。这是把能力封装成 MCP 插件、增值服务单独收费的新型分发结构。

---

## **⌘ 开源 TOP 项目**

### HKUDS/CLI-Anything：让任意软件支持Agent调用

**已有命令行工具无需改造即可被 Agent 调用。** [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) 提供通用接口层，让现有软件对 AI 智能体原生可用，今日新增 **103颗星**，总星标52497。项目配套 CLI-Hub 聚合目录，方便查找已适配工具。想在 Agent 工作流中复用现有工具链、不想从零封装 API 的开发者可以优先看这里。


![HKUDS/CLI-Anything：让任意软件支持Agent调用 · README 展示图](https://raw.githubusercontent.com/HKUDS/CLI-Anything/main/assets/cli-typing.gif "HKUDS/CLI-Anything：让任意软件支持Agent调用 · README 展示图")
---

### ifixai-ai/iFixAi：120秒审计Agent有没有按指令执行

**Agent 行为可以独立审计了🔒。** [ifixai-ai/iFixAi](https://github.com/ifixai-ai/iFixAi) 支持由人类或 Agent 自身发起行为审计，核心问题只有一个：Agent 是否在做它应该做的事。今日新增 **2109颗星**，总星标27405，是今日日榜涨幅最大的 AI 项目。在 Agent 自动化程度越来越高的部署场景中，需要做合规或安全检查的团队可以优先试用。

---

### vxcontrol/pentagi：全自主AI渗透测试Agent系统

**复杂渗透测试任务可以完全交给 Agent 自主执行。** [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi) 用 Go 实现，能够自主规划并执行渗透测试的多步骤任务，今日新增 **1025颗星**，总星标29464。项目面向安全研究人员和红队人员，适合自动化侦查和漏洞验证流程。接入真实环境前建议先在隔离测试环境中评估其行为边界。


![vxcontrol/pentagi：全自主AI渗透测试Agent系统 · README 展示图](https://github.com/user-attachments/assets/0828dc3e-15f1-4a1d-858e-9696a146e478 "vxcontrol/pentagi：全自主AI渗透测试Agent系统 · README 展示图")
---
## **◉ 社媒精选**

### FishAudio开源Drama 3，一段文字可演绎16个角色

**开源语音模型能同时分饰16个声音角色🔊。** Gorden Sun 在[实测整理推文](https://x.com/Gorden_Sun/status/2110387424291701204)中介绍，FishAudio 发布的 Drama 3 以 **35B-A3B 规模的 Qwen** 为文本骨干，显存需求远高于同类模型。支持情绪标签插入叹气和笑声，局部修改无需整段重新生成。模型已在 HuggingFace 公开，**仅限非商用**。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2110386102888804352/vid/avc1/1280x720/Y5rru7Dr-sHDdlcr.mp4?tag=29"></video>

---

## **😄 AI趣闻**

### 谢尔盖·布林亲自下场聊新模型，Google 开了场"家长会"

**Gemini 4 Argon** 发布后，官方没走常规发布会路线，而是让 **Logan Kilpatrick** 拉着谢尔盖·布林和几位产品负责人坐下来[聊了一段"我们怎么做到这一步、下一步去哪"的内部对话视频](https://x.com/GeminiApp/status/2110503223060828495)。布林本人出镜，讲了 Argon 的来路和前路。整个画风更像技术复盘，不像发布会。毕竟模型名字都叫"氩"了，氩是惰性气体，但这次 Google 明显不想惰着。

![谢尔盖·布林亲自下场聊新模型，Google 开了场 家长会 · 原文配图](https://pbs.twimg.com/amplify_video_thumb/2110419761301794816/img/ui0XbHjFqj4LsUB0.jpg "谢尔盖·布林亲自下场聊新模型，Google 开了场 家长会 · 原文配图")

## **❓ 相关问题**

### Claude 会员想用 Claude Code 做生物或药学脚本，每次都要从头解释研究背景吗？

**不是背景太复杂，是没把领域语境固定下来。** 今天的 [scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) 收录了覆盖生物、化学、医学的现成 Skill，可以把反复解释的研究术语和流程提前写进去。Claude Code 在终端直接调用，省掉每次重新铺垫的来回。工作流跑稳了再考虑长期续费，已有账号的话可以看[爱窝啦·AI账号店的 Claude 续费](https://www.aivora.cn/products/chong-zhi-xu-fei-yue-ka-2)；Skill 是工作方法，续费只是保持工具可用，两件事分开处理。