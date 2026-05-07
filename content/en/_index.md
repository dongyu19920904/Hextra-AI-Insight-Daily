---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/5/7
breadcrumbs: false
next: /2026-05/2026-05-07
description: "每日自动汇总最新 AI 行业动态，帮中文用户用最低成本玩转 ChatGPT、Claude、Cursor、Augment 等 AI 工具。由爱窝啦 AI 账号店提供支持。"
cascade:
  type: docs
---

## **今日摘要**

```
OpenAI 联合五大厂商开源 MRC 网络协议,解决几万张 GPU 训练时"一条链路挂全员等待"的致命问题,微秒级绕开故障。
豆包 App Store 挂出年费 5088 元收费声明,但你问它本包还说"永久免费",国产 AI 的免费时代正式结束。
基础设施开源潮来了,但收费也来了,今天重点看前两条——一个关乎技术突破,一个关乎钱包。
```

## ⚡ 快速导航

- [📰 今日 AI 资讯](#今日ai资讯) - 最新动态速览

> 💡 **提示**：想第一时间体验文中提到的最新 AI 模型（Claude 4.5、GPT、Gemini 3 Pro）？没有账号？来 [**爱窝啦 Aivora**](https://aivora.cn?utm_source=daily_news&utm_medium=mid_ad&utm_campaign=content) 领个号，一分钟上手，售后无忧。

## **今日AI资讯**

### **👀 只有一句话**
OpenAI 把训练 ChatGPT 的网络协议开源了,十几万张 GPU 终于不用再因为一条链路挂掉而集体罢工。

### **🔑 3 个关键词**
#基础设施突破 #开源狂欢 #AI收费潮

---

## **🔥 重磅 TOP 10**

### 1. [OpenAI 开源 MRC 网络协议](https://x.com/dotey/status/2052056444330000513)
训练大模型时,几万张 GPU 要保持步调一致,一笔数据晚到,所有卡都得干等。OpenAI 联合 AMD、博通、英特尔、微软、英伟达开发的 MRC 协议,把数据包拆散同时走几百条路径,链路出问题微秒级就能绕开,不需要交换机重算路由表。这套协议现在通过 OCP 开放给全行业,Stargate 这种规模的集群终于不用被网络卡脖子了。对搭大规模训练集群的团队来说,这是真正解决痛点的基础设施突破。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2052025253283651584/vid/avc1/1280x1280/d10uc7t793sKUGIk.mp4?tag=27"></video>

### 2. [豆包宣布收费,最高年费 5088 元](https://www.36kr.com/p/3795007016661767)
5 月 4 日青年节,豆包在 App Store 悄然更新收费声明,评论区瞬间炸锅。有意思的是,你去问豆包本包"你要收费了吗",它还能脸不红心不跳地回答"放心,我永久免费"。从免费到付费,豆包这一步走得小心翼翼,却依然引发巨大舆论波澜。这背后不仅是商业模式的转变,更是国产 AI 从烧钱抢市场到寻求商业闭环的必经之路。免费午餐结束了,但这也意味着产品要真正对得起用户的钱包。

![image](https://img.36krcdn.com/hsossms/20260504/v2_1926c048d72645f88650f7700312d59a@6361831_oswg179819oswg1080oswg834_img_000?x-oss-process=image/format,jpg/interlace,1)

### 3. [姚金刚开源 100+ 商业场景提示词合集](https://x.com/vista8/status/2052027791546233050)
姚老师把去年写的所有提示词整理开源了,覆盖 AI 方法、工作、学习、生活、教育、内容、编程、营销、思考等 9 类场景。跟很多提示词库不同,这些都是实干派产物,基本来自真实业务需求。尤其推荐里面的元提示词,包括简易版和进阶版,对不少人帮助挺大。如果你还在为怎么跟 AI 对话发愁,这个仓库值得收藏。

![Tweet Image](https://pbs.twimg.com/media/HHo4OJ0b0AAYlGV.jpg)

### 4. [Anthropic 用"员工手册"让 AI 失控率从 54% 降到 7%](https://www.36kr.com/p/3797755662883847)
同样的训练数据,配上不同的行为规范说明书,模型就会泛化出截然不同的立场。Anthropic 的"模型规范中期训练"研究发现,让 AI 在正式训练前先读一份行为准则,就像新员工入职前读员工手册,能大幅降低失控率。实验中,两个模型读了关于奶酪偏好的不同解释,结果在艺术、交通、经济政策等完全无关领域,表现出截然相反的立场。这说明,AI 的价值观不是训练数据决定的,而是你给它定的规矩决定的。

![image](https://img.36krcdn.com/hsossms/20260506/v2_5c59130798f142cea6d40f77ad93a533@5888275_oswg292386oswg1080oswg827_img_000?x-oss-process=image/format,jpg/interlace,1)

### 5. [Warp 团队开源内部工作流加速工具 Oz Skills](https://x.com/dotey/status/2051902838100439318)
Warp 在开源终端和文档后,又把团队内部用的 15 个 Skills 开源了。这些工具覆盖 Git/GitHub 协作流、CI 修复、issue 去重、数据分析等场景。比如 ci-fix 能定位失败的 GitHub Actions、拉日志、最小化修复后推到 ci-fix/ 分支验证,强调"最小 diff"和不放宽权限的安全约束。对开发团队来说,这些都是真正能提效的实战工具,不是玩具。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2051768407494918144/vid/avc1/1056x720/GEAEdOs4ZwY3p9gp.mp4?tag=14"></video>

### 6. [国产双开源组合:Cider + Mano-P 让 Mac 成为私人 AI 工作站](https://mp.weixin.qq.com/s?__biz=MzA3MzI4MjgzMw==&mid=2651031464&idx=1&sn=9c345be57f7ae7a14ff081ab1296ce50)
Cider 是一个开源的本地 AI 推理引擎,Mano-P 是配套的模型优化工具。两者组合能让 Mac 用户在本地跑大模型,不用担心数据隐私泄露,也不用每次都联网调用 API。对需要频繁使用 AI 但又在意隐私的用户来说,这套组合提供了一个快且实用的 Private AI 方案。虽然性能比不上云端 GPU 集群,但胜在数据完全掌握在自己手里。

![image](https://wechat2rss.bestblogs.dev/img-proxy/?k=7babd6c1&#x26;u=https%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2F5L8bhP5dIqGaXsuibOEUvytdxBk6KgK7EvwtCup4vnBPssyIibRUqicf6JzWCErforMuzrtXImpOq0S0icKLiaJCznvfdygS10hic2uOqnj0Yv1qc%2F0%3Fwx_fmt%3Djpeg)

### 7. [claude-mem:让 Claude Code 自动记住编码会话上下文](https://github.com/thedotmack/claude-mem)
这是一个 Claude Code 插件,能自动捕获 Claude 在编码会话期间做的一切,用 AI 压缩后注入到未来会话中。以前跟 AI 结对编程,每次新开会话都得重新解释项目背景,现在这个插件能让 Claude 记住你们之前聊过什么、改过什么代码。对频繁使用 AI 辅助编程的开发者来说,这能省下大量重复沟通的时间。

### 8. [Seed 2.0 Lite 给视频提优化建议](https://x.com/vista8/status/2052001776425926782)
Vista8 把自己录的产品演示视频发给 Seed 2.0 Lite,让它从吸引人观看和传播学角度给优化建议。模型不仅分析了视频结构,还提供了几个不错的 Hook(钩子)。继续追问后,又给了 5 个备选 Hook,都还行。对内容创作者来说,这种能理解视频内容并给出传播策略建议的能力,比单纯的剪辑工具更有价值。

![Tweet Image](https://pbs.twimg.com/media/HHosViKWIAUAS7G.jpg)

### 9. [Malus.sh 讽刺性展示 AI 时代开源协议的脆弱](https://juejin.cn/post/7636277855710232582)
Malus 提供"AI clean-room(开源洗白即服务)",只需上传 package.json、requirements.txt 等依赖文件,就能用 AI 重写出功能相同但代码完全不同的版本。Claude Code 源码刚泄漏,隔天就有 Rust 版;OpenClaw 开源没多久,变种就有十多种。这个项目用讽刺的方式展示了一个残酷现实:在 AI 时代,开源协议越来越难保护原创者的权益。

![image](https://p9-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/d219d456855b461b8314b6f1a4ce8c80~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5oGL54yrZGXlsI_pg60=:q75.awebp?rk3s=f64ab15b&#x26;x-expires=1778634549&#x26;x-signature=0ervbERhYpkMOMCQuSq3nGWj0iM%3D)

### 10. [Codex App 的 TreeView 和 Diff View 来自开源库 pierre](https://x.com/dotey/status/2051864435858276833)
Codex App 那套漂亮的文件树和代码对比视图,原来是用的第三方开源库 pierre。这个库由 @amadeus 开发,提供了现代化的代码浏览和对比界面。对正在开发代码编辑器或 IDE 的团队来说,这是一个可以直接拿来用的高质量组件,不用自己从零造轮子。

![image](https://pbs.twimg.com/media/HHmuMQ6WoAEYGPt?format=jpg&#x26;name=orig)

---

**[产品]** [Sim Studio 发布 AI 智能体编排平台](https://github.com/simstudioai/sim) - 构建、部署和编排 AI 智能体的中央智能层,让多个 Agent 协同工作不再是难题

**[产品]** [Flowise 可视化构建 AI 智能体](https://github.com/FlowiseAI/Flowise) - 拖拽式搭建 AI 工作流,不用写代码也能玩转 Agent

**[开源]** [AutoGPT 更新:让每个人都能使用和构建 AI](https://github.com/Significant-Gravitas/AutoGPT) - 提供工具让你专注于重要的事,而不是被技术细节困住

**[开源]** [OpenHands:AI 驱动的开发工具](https://github.com/OpenHands/OpenHands) - 用 AI 辅助整个开发流程,从需求到部署

**[开源]** [Semantic Kernel:快速集成 LLM 到应用](https://github.com/microsoft/semantic-kernel) - 微软出品,轻松把前沿 LLM 技术整合进你的应用

**[研究]** [视频对象学习的时间一致性新思路](https://arxiv.org/abs/2605.03650) - 从预测转向对应关系,利用自监督视觉特征区分对象

**[研究]** [散射介质中的颜色恢复条件](https://arxiv.org/abs/2605.03837) - 解决光学成像中的逆问题,让水下或雾中拍摄的图像恢复真实颜色

**[研究]** [单张线稿重建 3D 线框](https://arxiv.org/abs/2604.13549) - 用生成式深度估计把 2D 手绘草图转成 3D 模型,缩短草图到 CAD 的距离

---

### [豆包说自己永久免费,但 App Store 已经挂上收费声明](https://www.36kr.com/p/3795007016661767)
5 月 4 日,豆包在 App Store 悄然更新收费声明,最高年费 5088 元。有人去问豆包本包"你要收费了吗",它还能脸不红心不跳地回答"放心,我永久免费"。这种左手收费右手否认的操作,让人不知道该信产品还是信 AI。评论区里有人调侃:"豆包这是在用 AI 演示什么叫'我不知道我在说什么'。"看完这新闻,很多人第一反应大概不是骂收费,而是庆幸今天翻车的不是自己用的那个 AI。

![image](https://img.36krcdn.com/hsossms/20260504/v2_1926c048d72645f88650f7700312d59a@6361831_oswg179819oswg1080oswg834_img_000?x-oss-process=image/format,jpg/interlace,1)

---

## **🔮 AI趋势预测**

### GPT-5 正式发布
- **预测时间**:2026 年 Q3
- **预测概率**:70%
- **预测依据**:今日新闻显示 OpenAI 正在大规模优化基础设施(开源 MRC 网络协议),这通常是为更大规模模型训练做准备。根据历史发布节奏,OpenAI 在基础设施就绪后 2-3 个月内会发布重大更新。

### AI 收费成为行业标配
- **预测时间**:2026 年 Q2-Q3
- **预测概率**:85%
- **预测依据**:今日新闻[豆包宣布收费](https://www.36kr.com/p/3795007016661767)标志着国产 AI 从烧钱抢市场转向商业闭环。随着豆包这个国民级产品开始收费,其他厂商跟进只是时间问题。免费时代结束,付费订阅将成为主流商业模式。

### 开源 AI 基础设施迎来爆发期
- **预测时间**:2026 年 Q2-Q3
- **预测概率**:75%
- **预测依据**:今日新闻显示 OpenAI 开源 MRC 网络协议、Warp 开源内部工具、多个 AI 智能体平台开源,这些信号表明行业正在从"闭门造车"转向"开放协作"。随着基础设施成本降低,更多团队能搭建自己的 AI 系统。

---

## **❓ 相关问题**

### 如何体验 OpenAI 的最新技术?

OpenAI 的最新技术和模型通常需要付费订阅 ChatGPT Plus 或企业版才能使用。对于国内用户,可能面临支付困难或账号注册限制。

**解决方案**:访问 **[爱窝啦 Aivora](https://aivora.cn)** 获取成品账号,极速发货,售后无忧。