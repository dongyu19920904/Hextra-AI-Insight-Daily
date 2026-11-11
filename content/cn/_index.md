---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/11/11
breadcrumbs: false
next: /2026-11/2026-11-11
description: "Anthropic发布Fable 5.2与Mythos 5.2，编程推理视觉均改进。 开源模型冲击商业基准的同时，软件形态正从人用转向Agent用。 先试两款新模型，再评估agent-skills能否直接接入现有项目。"
cascade:
  type: docs
---

## **今日摘要**

```
Anthropic发布Fable 5.2与Mythos 5.2，编程推理视觉均改进。
开源模型冲击商业基准的同时，软件形态正从人用转向Agent用。
先试两款新模型，再评估agent-skills能否直接接入现有项目。
```

## **🔥 今日焦点 TOP 10**

### 1. Anthropic 同日发布两款新模型

**Fable 5.2 与 Mythos 5.2 同步上线。** **Anthropic** [官方账号宣布](https://x.com/AnthropicAI/status/2119867707546071125)两款模型今日可用，定位是应对最严苛技术挑战的协作工具。两款模型在编程、推理和视觉方面均有改进。有编程或复杂推理需求的用户，现在可以在 Claude 平台上直接切换试用。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2119862225028452352/vid/avc1/1920x1080/E6naF0FCPw_qRYv0.mp4?tag=29"></video>

---

### 2. 开源世界模型 PAN 2 超越 NVIDIA Cosmos

**开源扩散模型超越商业基准。** MBZUAI 发布的 PAN 2 将 29B 参数扩散视频生成器与 LLM 推理结合，[BestBlogs 整理的技术摘要](https://www.bestblogs.dev/en/status/2120214912735854713?utm_source=rss&utm_medium=feed&utm_campaign=resources&entry=rss_article_item)显示任务规划成功率达 **34%**。模型权重 **58GB**，使用 Apache 2.0 许可证开放下载。做自动驾驶或机器人仿真的开发者，可以在 Hugging Face 上直接拉取权重试跑；但约三分之二的模拟场景中物理一致性仍不稳定。

---

### 3. Claude 新增白板与表格协作功能

**所有付费套餐可用白板和表格。** Anthropic 11 月 10 日为 **Claude** 添加了 Whiteboards 和 Sheets，[Claude 新增白板与表格协作功能](https://x.com/dotey/status/2120312745543315897)显示这两项功能以测试版形式分批推送，网页、桌面和手机 App 均支持。同期上线的 **Claude** Data 是原仪表盘改名后的正式版，需先连接数据仓库或 CRM 数据源。账号里暂时看不到入口属于正常，直接在对话中描述需求即可触发。


![Claude 新增白板与表格协作功能 · 原文配图](https://pbs.twimg.com/media/HWx89ZkXMAAqMO6?format=png&name=orig "Claude 新增白板与表格协作功能 · 原文配图")

---

### 4. MiniMax 开源 H3-Image 图像生成模型

**MiniMax 图像模型已公开权重。** Gorden Sun 发帖披露，[MiniMax 开源 H3-Image 图像生成模型](https://x.com/Gorden_Sun/status/2120161175724007651)，从 H3 视频模型演化而来，支持生成 **4K×4K** 分辨率，最多接受 **16 张**参考图。发布时模型页面一度出现 404，权重仍在上传中。需要高分辨率图像生成或多参考图合成的开发者，可以关注 Hugging Face 页面等待权重上传完成。

---

### 5. 一图生成物理合理驾驶视频，Waymo 实测第一

**Motion Forcing 在物理合理性上排首位。** 量子位[报道了港科广的这一新框架](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247942445&idx=3&sn=daa8c5e19b4475029e89910f836ad72a&chksm=e9b4ae61863aef2020603861565433dec4ae86ef52ba16818aa1facf2a3495140e23fb619882&scene=0&xtrack=1#rd)，输入单张图片即可生成包含加塞、急刹等长尾场景的驾驶视频。在 **Waymo** 数据集的物理合理性评测中位列第一，框架代码已开源。**自动驾驶数据团队**可以利用它快速扩充稀缺场景的训练数据。

![港科广 Motion Forcing 自动驾驶视频生成框架](https://mmbiz.qpic.cn/mmbiz_jpg/A6fTew8FFGHc720JG8uqoyYJWYPyrXWsrUhMNBLOnmqDgTSCQbGIemicz2CicbMN41mLsCg64LpMbcpeibrsAzialrdRoAQmykibuUpBvIL4vobM/300?wxtype=jpeg&wxfrom=0 "港科广 Motion Forcing 自动驾驶视频生成框架")

---

### 6. 腾讯 AI 游戏陪伴 Agent"鹅次元"开启内测

**腾讯鹅次元进入游戏陪伴赛道。** AIBase [报道称](https://www.aibase.com/zh/news/32213)该产品能实时感知游戏画面并提供**即时问答**，支持 QQ 跨端聊天、桌宠和变声交互。首批适配无畏契约、英雄联盟等主流游戏，共推出 **4 位** AI 角色。想体验的用户可以访问 eciyuan.qq.com 申请内测资格。

![腾讯鹅次元 AI 游戏陪伴 Agent 内测](https://upload.chinaz.com/2026/1110/6392990181021528634027091.jpg "腾讯鹅次元 AI 游戏陪伴 Agent 内测")

---

### 7. Grok bot 新增 Tailscale 访问任意服务器

**Grok Bot 已支持 Tailscale 直连。** 一位 V2EX 用户[Grok bot 新增 Tailscale 访问任意服务器](https://www.v2ex.com/t/1255959#reply3)，指出 **Grok** Bot 已可通过 Tailscale 访问任意服务器，而 OpenAI Dots 目前仅支持 Ubuntu 24.04 和 26.04 桌面版，且不允许安装第三方网络工具。有多台设备**远程接入需求的开发者**，Grok Bot 的这一差异值得纳入工具选型参考。

![有没有大佬用的 Linux 桌面端的 Codex，咨询下 Dots 能否直连 Linux ？](https://i.imgur.com/Ehr59Fb.png "有没有大佬用的 Linux 桌面端的 Codex，咨询下 Dots 能否直连 Linux ？")

---

### 8. 向阳乔木开源 X 长文自动转中文网站项目

**开源工具可自动抓取 X 长文并转写为中文网站。** 向阳乔木[发布这一新项目](https://x.com/vista8/status/2120099636149153857)，使用 Grok Bot 每天抓取分析 X 上的海外优质长文，**自动转写成中文**并**发布为可访问的网站**。项目支持改造成盯住特定研究员或模型公司账号的信息源。开发者可以在帖子评论区找到体验网站地址和开源仓库链接。

![向阳乔木开源 X 长文转中文网站项目](https://pbs.twimg.com/media/HWwaJ3DboAAWo92.jpg "向阳乔木开源 X 长文转中文网站项目")

---

### 9. AI4M 闭门会：中国制造数据规模不等于优势

**数据量大不自动转化为 AI 材料优势。** 姬十三整理的[未来光锥 AI for Material 闭门会纪要](https://m.okjike.com/originalPosts/6af2acc4320fd7e1b533cb73)汇集了 20 多位创业者、科学家和投资人的观点，核心结论是：工厂多、产业链长，但失败样品记录分散、格式不一，配方与工艺无法关联。**自动化实验室**的真实门槛在于长流程稳定执行，单步演示成功不代表批量可靠运行。正在布局 **AI4M** 赛道的团队，需要从数据体系建设而非模型能力开始规划。

![11.5 未来光锥 AI for Material 闭门会纪要 请了 20 多名创业者、科学家、](https://cdnv2.ruguoapp.com/FlVXSqosuj6p5cJ2JLYD3gI_5e5Cv3.heic "11.5 未来光锥 AI for Material 闭门会纪要 请了 20 多名创业者、科学家、")

---

### 10. 上官媒不等于有护身符，AI 创业者需清醒

**媒体曝光不能替代产品真实性。** The沐秋[在即刻发帖指出](https://m.okjike.com/originalPosts/6af2c0df320fd7e1b535f248)，恒大、乐视、威马、哪吒汽车等公司都曾登上央视或人民日报，最终仍未能避免危机。这段话直接点名 AI 应用、具身智能和世界模型领域的创始人。对正在寻求官媒背书的 AI 创业者而言，产品能力和商业可持续性仍是唯一真实护城河。

---

## **◎ 行业变化与个人影响**

### AI 加速开发流程，但调试思维也在同步萎缩

**编程技能正在被 AI 替代，但认知代价被低估。** 一位开发者[在掘金分享了自己的转变](https://juejin.cn/post/7705961716425490447)：报错截图发给 AI，等方案，复制粘贴，调试面板越来越少打开。速度快了，但逐行读源码、追踪调用链的习惯随之消失。他提到，大型项目的国际化改造和 Vue 升级几乎全由 AI 主导。对长期靠独立调试积累经验的开发者而言，今天值得问一次：**主动思考**的时间还留了多少。

![AI 正在蚕食我们的编码能力](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/3dab39ef3e474bd7914af5f82ce4a2fe~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg55-z5bCP55-zT3J6:q75.awebp?rk3s=f64ab15b&x-expires=1794824744&x-signature=xDz6LYW8OXqifhe8v2EFQXgEVtE%3D "AI 正在蚕食我们的编码能力")

---
## **⌘ 开源 TOP 项目**

### addyosmani/agent-skills：面向 AI 编程智能体的生产级工程技能库

**专为 AI 编程 Agent 设计的工程技能集合。** [addyosmani/agent-skills 已公开全部代码](https://github.com/addyosmani/agent-skills)，由 Chrome DevTools 核心贡献者 Addy Osmani 维护，使用 JavaScript 编写，收录了可直接接入生产环境的 AI 编程智能体工程技能。今日新增 **465 颗** Stars，总 Stars 达 **115,168**。正在搭建 AI 编程 Agent 或需要成熟工程技能参考的开发者，可以直接拉取仓库查看可用技能列表。


![addyosmani/agent-skills：面向 AI 编程智能体的生产级工程技能库 · R](https://addyosmani.com/assets/images/addys-agent-skills.jpg "addyosmani/agent-skills：面向 AI 编程智能体的生产级工程技能库 · R")

---
## **◉ 社媒精选**

### WordCraft 实测：英文草稿合格，中文长文还差一套字体

**开源 Word 替代品中文显示有缺陷。** 时空猫[完整跑了一遍 WordCraft](https://m.okjike.com/originalPosts/6af300c738389f5993b3a5ea)，这款 17,726 Stars 的浏览器端文档工具支持 4 个模板和 11 种导出格式，导出 docx 时中文字符完整保留。但屏幕上「署」「品」「传」等字显示为方框，PDF 和 PNG 导出同样带框——问题出在 Web 版缺少完整中文字体。结论是**英文文档**草稿纸合格，中文长文暂时用不了，写完先导出 docx 再校对。

![WordCraft 中文字体缺失实测截图](https://cdnv2.ruguoapp.com/FooulOh9PyY_ub8_ifTEkMpf5nHUv3.png "WordCraft 中文字体缺失实测截图")

## **😄 AI趣闻**

### OpenAI 发了台掌机，评论区在催模型

OpenAI 周边商店上架了一台 **Game Boy 造型掌机**，配十字键、卡带槽，卖 **200 美元**。卖点是用 **Codex** 说几句话就能生成小游戏，写进实体卡带插上玩。评论区倒是挺热闹——[网友在催更 GPT-6.2](https://www.36kr.com/p/4063341927748736)。掌机梦圆了，催更梦没圆。

![OpenAI 发了台掌机，评论区在催模型 · 原文配图](https://img.36krcdn.com/hsossms/20261110/v2_67edb1f677e241268678316b459b6cb8@1200352198_oswg782249oswg1080oswg1153_img_000?x-oss-process=image/format,jpg/interlace,1 "OpenAI 发了台掌机，评论区在催模型 · 原文配图")

## **❓ 相关问题**

**Claude 新增了白板和表格功能，哪种套餐能用？**

Anthropic 已为 Claude 上线 Whiteboards 和 Sheets 功能，所有付费套餐均可使用，目前是测试版，正在分批推送。在对话里直接描述需求即可触发，不需要找专门入口。