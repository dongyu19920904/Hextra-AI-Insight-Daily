---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/8/5
breadcrumbs: false
next: /2026-08/2026-08-05
description: "MiniMax H3开源登顶全球有声视频榜，微软MAI Realtime全双工语音同日曝光，字节飞书并入豆包体系。 大模型竞争逻辑已从跑分转向Agent任务性价比，工具、办公、安全基础设施正在同步补位。 今天优先看第8条和开源两栏，再评估手头Agent工作流的选型和中转站安全风险。"
cascade:
  type: docs
---

## **今日摘要**

```
MiniMax H3开源登顶全球有声视频榜，微软MAI Realtime全双工语音同日曝光，字节飞书并入豆包体系。
大模型竞争逻辑已从跑分转向Agent任务性价比，工具、办公、安全基础设施正在同步补位。
今天优先看第8条和开源两栏，再评估手头Agent工作流的选型和中转站安全风险。
```

## **🔥 今日焦点 TOP 10**

### 1. MiniMax H3开源，有声视频编辑榜登顶全球第一

**国产视频模型拿下全球榜首。** MiniMax 正式开源通用视频模型 MiniMax H3，[36氪报道显示](https://www.36kr.com/p/3923895999068550)其在 Artificial Analysis 有声视频编辑榜单以 **1130 分 Elo** 位列第一，领先 Gemini Omni Flash 和 Wan 2.7。模型支持最长 **15 秒、2K 分辨率**的视频生成，并内置原生立体声音频，首日已有 16 家芯片及云平台完成适配。

![MiniMax H3位列有声视频编辑榜单榜首](https://img.36krcdn.com/hsossms/20260803/v2_e233790270994d549e2c190f85bface2@000000_oswg111828oswg1080oswg446_img_000?x-oss-process=image/format,jpg/interlace,1"MiniMax H3位列有声视频编辑榜单榜首")

---

### 2. MiniMax H3开源却对美国等地区设访问限制

**开源但地区受限，原因是版权自保。** MiniMax H3 在开源的同时限制了美国、欧盟、英国等地区访问，[AI日报的报道指出](https://www.aibase.com/zh/news/30106)这并非主动封锁，而是规避好莱坞**版权诉讼**风险的被动应对。这提醒国内开发者：模型开源不等于全球可用，下游部署前需核查自身所在区域和内容来源的法律合规情况。

---

### 3. 微软首款自研全双工实时语音模型MAI Realtime曝光

**微软入局实时语音，打破轮次交替模式。** 根据[AI日报的报道](https://www.aibase.com/zh/news/30106)，微软正在测试首款原生实时语音模型 **MAI Realtime**，支持 **16 种语言**和两种语音风格，实现听说并行的全双工交互，并具备端点检测技术，支持用户中途插话后即时调整输出。目前该模型不支持唱歌或非语音音效，仍处于测试阶段。

![MAI Realtime全双工语音模型示意](https://upload.chinaz.com/2026/0804/6392143036240345895042241.png "微软MAI Realtime全双工语音模型")

---

### 4. 商汤发布8B小模型U1.5-Lite-Preview

**商汤推出轻量级新模型。** 根据[AI日报的报道](https://www.aibase.com/zh/news/30106)，商汤发布 **U1.5-Lite-Preview**，参数量为 **8B**，定位为"小钢炮"——在边缘部署和低成本调用场景下提供有竞争力的能力。8B 量级的模型意味着本地部署门槛更低，适合有私有化需求的开发者试水。

---

### 5. Cloudflare给AI Agent配上专属数字钱包

**Agent自主花钱的基础设施来了。** Cloudflare 推出 Cloudflare Pay，[即刻用户分享的产品信息](https://m.okjike.com/originalPosts/6a720116141b85b2923509e6)显示分为"钱包账户"和"**虚拟钱包**"两类：前者由人类持有并可充提现，后者通过 API Key 供 Agent 运行，可设**支出上限**和白名单规则，解决了 Agent 身份认证与预算管控两个核心痛点。有人建议提前用自己名字抢注地址。

![Cloudflare Agent钱包产品界面](https://cdnv2.ruguoapp.com/Fvn8KJPGDux0SeGaHrmf9hgPbItVv3.png?imageMogr2/meta-keep-list/ZXhpZixVc2VyQ29tbWVudA==/auto-orient "Cloudflare Pay Agent虚拟钱包")

---

### 6. 字节阿里腾讯两周内集体重押AI办公

**三大厂同时重构AI办公产品线。** [36氪报道](https://www.36kr.com/p/3923895877794183)称字节将飞书并入豆包体系、腾讯 WorkBuddy 上线**人机双写**协同编辑、阿里千问办公正式公测并整合三款 Agent 产品——两周内三家同时动作，指向同一个判断：AI 要从独立功能变成办公 App 的**底层基础能力**。

---

### 7. DeepSeek-V4-Flash实测反响强烈，被称触达AGI感

**一次实测引爆"黄金时代"讨论。** 来自[云涌AI频道的实测文章](https://t.me/aigc1024/22824)引述评测者的体验：**DeepSeek-V4-Flash** 的表现让其产生"这就是我心里的 AGI"的感受。虽然属于个人主观感受，但多个维度的任务表现叠加出的情绪共鸣，正成为衡量新模型"是否好用"的真实社会信号。

---

### 8. AI大模型竞争从跑分转向任务综合性价比

**单轮跑分时代结束，Agent性价比成新战场。** [云涌AI观察的分析](https://t.me/aigc1024/22829)指出，随着 Agent 成为主流应用场景，模型竞争逻辑已从单轮对话得分转向**任务维度的综合性价比**，斩杀线持续上移——意味着中小模型厂商面临的生存压力比跑分时代更残酷，普通开发者选型时应优先看"完成真实任务的成本"而非榜单排名。

![大模型行业竞争格局分析](https://cdn5.telesco.pe/file/kijB3Zm7DYDxgZjvBchkbXmFqxW-B1g0d5J-5fLoQaQVrAiTj8RvT9cUQR7vlk-omlmWdX9Z_IgeCrqHU5I5NZGh6XiPIVnha1rAT0UgiUS9b1_0hSUCsYi0KCftgbT1HgOBLvrF4QSlgQknsB4pHy4vD6I00dw7P-k4WJsx38G9JDotEXyrr5WU3LATZhmYdDYebYAONGUG07YfLztUh6uAaEcFINacze2BN9x3P-TrnKF-t9AjbjxZqmYTV6ZbZ_fCGZ-JNz4HGt_L55qfLk-ZvsnFjpOYoS6kv7OmJ_G3pzs31Udixzaj1JmJRXb66hGHTYTCSJhN4sQs9xNvGQ.jpg "大模型竞争从跑分转向任务性价比")

---

### 9. Every工程师全交Agent写代码，工作量没减难度升

**把代码全交 Agent，工程师不是解放了。** 来自[向阳乔木的 X 帖](https://x.com/vista8/status/2084687821890269681)：Every 工程师已不自己写代码，全部交给 **Agent** 完成，但产出内容需要人持续判断和审查，结论是"工作量没少，难度上去了"。这和"AI 让工程师失业"的叙事正好相反，**判断力和不确定性处理**才是当前人不可替代的核心能力。

---

### 10. compound-engineering-plugin：Claude Code等IDE的官方工程插件

**官方出品的复合工程插件登上日榜。** EveryInc 发布的 [compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) 今日在 GitHub Trending 新增 **40 颗星**，总星数达 **23869**，是官方适配 Claude Code、Codex、Cursor 等主流 AI 编程工具的插件，适合正在用多工具协作开发的团队接入。

---

## **⚡ 产品与功能更新**

### flomo Echo改版，无笔记用户可接入社交记录参与

**flomo Agent 扩大了用户门槛。** [即刻帖子介绍](https://m.okjike.com/originalPosts/6a717e60f7fa8c22dbe14a2d)显示，flomo Echo（echo.flomoapp.com）此前只能读取 flomo 笔记，改版后不需要有任何 flomo 记录，接入微博、小红书等**社交网站历史记录**即可启动。适合想体验 AI 个人助手但没有积累笔记习惯的用户，目前处于**内测**阶段。

---
## **◎ 行业变化与个人影响**
## **⌘ 开源 TOP 项目**

### uber/ADR：为企业 AI Agent 做安全防护

[uber/ADR 项目仓库](https://github.com/uber/ADR)是 Uber 内部已部署的 AI Agent 安全框架，今日新增 **148 颗星**，总星数 **678**。它通过可观测性监控、安全基准测试和威胁检测三层机制来保护生产级 Agent，适合正在将 Agent 引入企业内部系统、担心提示词注入和权限滥用的工程团队率先试用。

### obra/superpowers：给 Agent 装上实用技能的框架

[obra/superpowers 项目仓库](https://github.com/obra/superpowers)是一个用 Shell 写成的智能体技能框架与软件开发方法论工具集，今日新增 **653 颗星**，总星数已达 **266480**。与其说是单纯的库，它更像是一套让 Agent 在真实开发任务中"做对事"的工程实践集合，适合想让自己的 AI 辅助开发工作流更系统化的独立开发者入手参考。

---
## **◉ 社媒精选**

### 中转站存在提示词注入风险，安全性无任何保障

**使用 AI 中转站，等于把控制权交出去。** 安全研究者 [Gorden Sun 发帖指出](https://x.com/Gorden_Sun/status/2084538742182948869)，有报告称某中转站被投毒并删除用户文件，虽然真实性存疑，但他明确警告：中转站可通过**提示词注入**控制用户电脑，使用者对此毫无防御手段。对依赖第三方中转调用大模型的用户，这是值得认真对待的结构性风险。

### 向阳乔木用Codex解决字体缺失，顺带安装方正客户端

**Codex 不只下载字体，还自动找到合规替代方案。** [向阳乔木在 X 分享](https://x.com/vista8/status/2084474840485130406)：制作抖音课程 PPT 时遇到字体缺失，把缺失字体信息交给 **Codex**，它不仅自动下载安装，还识别出其中方正的商业授权字体，主动安装**方正客户端**并找到免费商用字体替换——绕开了版权风险，整个流程不需要人工介入。

### 宝玉推荐用开源harness学真实工程，顺提Claude Code源码

**学 harness 最好钻透一个，别浅尝每个。** [宝玉在 X 发帖推荐](https://x.com/dotey/status/2084681383113380197)了一份生产级 harness 开源学习列表，建议重点研究 pi-mono，同时补充说明这份列表漏掉了一个"重量级"——前不久泄漏的 **Claude Code 源码**。作为开发者，从真实工程代码里学 AI 工具集成的方式，正在成为比读文档更高效的路径。

---
## **😄 AI趣闻**

### AI帮作者读播客，夸出了幻方工程师的"生死线"气质

向阳乔木想回顾一期夸 DeepSeek 的播客，但自己没时间听，于是让 AI [把小宇宙播客转成了一篇文章](https://x.com/vista8/status/2084676687191765046)。AI 总结出的内容里，有一句话让他截图发帖："幻方出来的工程师，骨子里就是把系统性能当生死线来对待的。"——这句话不是播客作者写的，也不是他自己写的，是 AI 提炼出来的。结果反而比人工记笔记更像在夸人。

---
## **❓ 相关问题**

### MiniMax H3 国内怎么用？

MiniMax H3 已正式开源，国内用户可直接通过 MiniMax 官方渠道获取模型权重，无需特殊账号。需要注意的是，模型对**美国、欧盟、英国**等地区有访问限制，国内用户不受此约束，但下载和部署前应核查使用条款中关于内容来源的版权要求，避免用于涉及版权内容的生产场景。调用 API 或使用云端推理服务需关注 MiniMax 平台的账号和计费政策，目前官方尚未在本次开源公告中列出详细额度信息。

需要进一步比较当前公开的 AI 账号或订阅服务时，可查看 [**爱窝啦·AI账号店**](https://www.aivora.cn/)；商品、价格与可用状态以官网实时页面为准。