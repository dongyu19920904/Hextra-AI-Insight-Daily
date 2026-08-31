---
linkTitle: AI Daily
title: 爱窝啦 AI 日报 2026/8/31
breadcrumbs: false
next: /2026-08/2026-08-31
description: "腾讯开源百万窗口模型 Hy4 preview，OpenAI 给付费用户额度补到五成，Linux 内核服务器两成算力被 AI 爬虫占用。 长窗口模型、容器提权漏洞和 RAG 噪声处理三条线都在暴露同一个问题：基础设施还没准备好承接 AI 负载。 今天先看腾讯 Hy4 能不能省掉文档拆分，再查自己的…"
cascade:
  type: docs
---


## **今日摘要**

```
腾讯开源百万窗口模型 Hy4 preview，OpenAI 给付费用户额度补到五成，Linux 内核服务器两成算力被 AI 爬虫占用。
长窗口模型、容器提权漏洞和 RAG 噪声处理三条线都在暴露同一个问题：基础设施还没准备好承接 AI 负载。
今天先看腾讯 Hy4 能不能省掉文档拆分，再查自己的 Docker 配置有没有踩 Omarchy 那个坑。
```

## **🔥 今日焦点 TOP 10**

### 1. 腾讯开源 Hy4 preview，上下文窗口破百万

**新模型窗口很长。** 腾讯官方宣布，[腾讯开源 Hy4 preview，上下文窗口破百万](https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/)。模型采用混合专家架构，每次推理激活 **490 亿参数**。在腾讯内部盲测中，163 位专家给出的平均分为 **2.99/4.00**，略高于 GLM-5.3 和 Kimi K3。正在做长文档分析或整仓库理解的开发者，可以试试百万级窗口能不能省掉拆分步骤。

### 2. Codex 用户额度再次重置，续航提升最多五成

**额度补上了。** 据 36氪报道，OpenAI 产品负责人 Tibo 宣布，[Codex 用户额度再次重置，续航提升最多五成](https://www.36kr.com/p/3961764924702087)。本次**修复能让不同使用方式**的用户额度多撑 **10% 到 50%**。Tibo 在访谈中透露，他手上确实有一个实体按钮，觉得体验出问题就能自己按下去补偿。正在跑批量任务或经常遇到限流的开发者，今天可以重新测一次峰值负载。

![Tibo 的实体重置按钮](https://img.36krcdn.com/hsossms/20260830/v2_de93b219ece34d509a808e5139cd7e08@1200352198_oswg425773oswg1080oswg461_img_000?x-oss-process=image/format,jpg/interlace,1 "Tibo 的实体重置按钮")

### 3. Linux 内核服务器被 AI 爬虫占用两成算力

**开源基础设施被拖垮了。** Konstantin Ryabitsev 在博客中披露，[git.kernel.org 正遭受大量 AI 爬虫冲击](https://people.kernel.org/monsieuricon/creepy-crawlies)，系统 **20%** 的计算资源被占用。爬虫将 **148 万次** 提交逐页渲染成 HTML 并解析，而非直接克隆仓库。团队部署工作量证明挑战后，爬虫仍能通过验证，当前每天 600 万请求中合法流量估计仅占 **2%**。维护开源镜像或公共 Git 服务的团队，需要重新评估防御策略了。

### 4. Omarchy Docker 配置漏洞让所有用户进程可提权至 Root

**容器安全出了大问题。** 安全研究员披露，[Omarchy Docker 配置漏洞让所有用户进程可提权至 Root](https://0xcc.io/posts/omarchy-root-creds/)。这导致该用户的所有进程均可通过 Docker socket 以 **root 权限** 操作主机文件系统，无需密码或 sudo。浏览器、AI 代理、npm 脚本等任何运行中的程序都能直接控制宿主机。漏洞已在 2026 年 8 月修复，使用 Omarchy 的开发者需要**立即更新到最新版本**。

### 5. 社区发起 No AI Fridays 倡议，呼吁每周五停用 AI 工具

**有人开始抵制 AI 了。** Hacker News 上，[noaifridays.com 发起倡议](https://noaifridays.com/)，呼吁每周五停用 AI 工具。帖子获得 **259 个点赞** 和 173 条评论。发起者认为过度依赖 AI 会削弱独立思考和问题解决能力。建议至少留出一天时间完全依靠人类判断完成工作。正在用 AI 写代码或做内容的从业者，可以看看评论区里关于工具依赖和技能退化的讨论。

### 6. 用户在 V2EX 讨论 OpenAI 内部文化，对话被安全系统拦截

**模型审核卡住了话题。** **V2EX** 用户分享，[在与 Fable 5 讨论 OpenAI 内部文化文章时](https://www.v2ex.com/t/1238200#reply0)，对话因涉及网络安全被 flag。用户切换到 GLM 5.3 后才能继续讨论。原文来自 Dwarkesh 播客对 Hugging Face 的访谈，内容涉及 **OpenAI** 内部不同技术路线的分歧。正在测试模型安全边界或做多模型对比的开发者，可以留意不同厂商的审核策略差异。

![对话被拦截截图](https://i.v2ex.co/Sn4lY8Lp.png "对话被拦截截图")

### 7. 工程管理者称好文化比 AI 更能提升生产力

**组织问题比工具更重要。** Eng Leadership 专栏文章指出，[健康的团队文化才是最大的生产力杠杆](https://newsletter.eng-leadership.com/p/good-culture-is-the-biggest-productivity)。AI 工具只能放大已有的文化。许多高管错误地认为 AI 能自动带来 **10 倍** 生产力，却忽视了康威定律的影响。糟糕的文化必然导致糟糕的产品。作者提供了评估工程组织文化的完整检查清单，包括决策权、信任度、优先级清晰度等关键问题。正在推 AI 工具落地的团队负责人，可以先用这套清单自查一遍。

### 8. Plaud 发布首款 AI 耳机，售价 249.99 美元限量 2000 台

**AI 硬件又出新品类了。** 据 36氪报道，[Plaud 发布首款 AI 耳机，售价 249.99 美元限量 2000 台](https://www.36kr.com/p/3961453579746437)，售价 **249.99 美元**，全球限量 **2000 台**。Plaud 此前凭借吸附在手机背后的 Plaud Note 和可夹在衣服上的 NotePin，在 AI 会议纪要赛道开辟了一条路。这次把录音转写功能装进耳机，是在成熟品类里寻找新场景。正在做 AI 硬件或可穿戴设备的团队，可以关注这种从专用设备到通用品类的迁移路径。

![Plaud One Explorer Edition](https://img.36krcdn.com/hsossms/20260830/v2_c791324d842941e5aae1332d655a01e3@000000_oswg712137oswg1080oswg607_img_000?x-oss-process=image/format,jpg/interlace,1 "Plaud One Explorer Edition")

### 9. 量子位招聘编辑作者，岗位聚焦 AI 新进展追踪

**媒体在扩编辑团队。** 量子位公众号发布，[平台正在招聘编辑和作者岗位](http://mp.weixin.qq.com/s?__biz=MzIzNjc1NzUzMw==&mid=2247916663&idx=3&sn=2b8a52f333f6062e2253df2a3184ce40)。量子位定位为追踪 AI 新进展的内容平台，经过 **8 年** 积累已形成顶流影响力。正在找 AI 媒体或内容运营岗位的从业者，可以关注这条招聘信息。

### 10. FishCare AI 整合鱼类百科与识别功能

**垂直 AI 应用又多了一个。** Telegram 频道介绍，[FishCare AI 整合鱼类百科与识别功能](https://t.me/aigc1024/23892)。网站提供鱼缸尺寸计算器、水质参数检查、喂食计算器等**免费小工具**。涵盖水族箱设置、水质、喂食、鱼类兼容性等实用问题。正在做垂直领域 AI 应用或宠物相关项目的团队，可以看看这类工具的交互设计和功能组合。

---

## **⚡ 产品与功能更新**

### Google AI Overviews 开始默认完全展开

**搜索结果版式变了。** Telegram 频道观察到，[部分 Google AI Overviews 现在直接默认展开完整答案](https://t.me/aigc1024/23891)，不用再点 Show more 才能看到全文。自然搜索结果又被往下推了一截。正在做 SEO 或依赖 Google 流量的内容团队，需要重新评估首屏曝光策略了。

---
## **🧪 前沿研究**

### RAG 系统中的噪声文本挑战：经典拼写检查无法处理词边界错误

**文本清洗遇到新问题了。** Best Blogs 整理的文章指出，[企业 RAG 中的噪声文本表现为拼写错误、转录错误和 OCR 误读](https://www.bestblogs.dev/en/article/3daf944f2d?utm_source=rss&utm_medium=feed&utm_campaign=resources&entry=rss_article_item)。经典拼写校正在错误涉及有效单词或不正确词边界时就会失效，例如无法区分 "coverage" 与 "overage"。嵌入和 LLM 通过捕捉语义相似性来自然容忍这些错误，但需要专家字典来进行领域特定歧义消除。正在做文档 RAG 或 OCR 后处理的开发者，可以考虑用嵌入模型替代传统拼写检查。

---
## **⌘ 开源 TOP 项目**

### mvanhorn/last30days-skill：跨平台研究主题并生成有依据摘要

**多源信息聚合工具上榜了。** [last30days-skill 在 GitHub 日榜获得 230 个新 Stars](https://github.com/mvanhorn/last30days-skill)，总 Stars 已达 **6 万**。项目是一个 AI 智能体技能，可以在 Reddit、X、YouTube、Hacker News、Polymarket 和网络上研究任何主题，然后综合生成有依据的摘要。正在做信息收集或舆情分析的团队，可以试试这套工具能不能省掉人工跨平台查找的时间。

### punkpeye/awesome-mcp-servers：MCP 服务器集合清单

**协议实现清单项目上榜了。** [awesome-mcp-servers 在 GitHub 日榜获得 96 个新 Stars](https://github.com/punkpeye/awesome-mcp-servers)，总 Stars 已超过 **9 万**。项目收集了各类 MCP 服务器实现。正在研究 MCP 协议或需要找现成服务器的开发者，可以从这个清单快速筛选候选方案。

---
## **◉ 社媒精选**

### Grok Bot 加上 X 连接器后可以查看书签和搜索帖子

**社交平台 AI 功能扩展了。** 向阳乔木在推文中展示，[Grok Bot 添加 X 连接器后能查看书签并搜索 X 帖子](https://x.com/vista8/status/2093859425085968753)。这意味着 Grok 可以直接调用用户的社交数据，而不只是回答通用问题。正在做社交平台 AI 集成的开发者，可以参考这种连接器设计思路。

![Grok Bot 查看书签功能](https://pbs.twimg.com/media/HQ7iC3cagAAQQ9f.jpg "Grok Bot 查看书签功能")

### 宝玉称在不熟悉领域更愿意放手让 AI 写代码

**开发者经验分享来了。** 宝玉在推文中表示，[他在 Swift + AppKit 等不熟悉领域更愿意放手让 AI 写代码](https://x.com/dotey/status/2094133227627622605)。因为没办法判断自己能写得比 AI 更好。慢慢发现 AI 写的质量挺好，很多细节没必要纠结，只要整体在功能、安全、性能上没问题就好。架构划分和模块设计仍然是他和 AI 一起讨论后定下来的。正在纠结要不要让 AI 写生产代码的开发者，可以参考这种"熟悉领域自己主导、陌生领域交给 AI"的分工策略。

### Gorden Sun 介绍杨立昆参与的 LeVJEPA 视频预训练方法

**新的视频模型预训练方法出现了。** Gorden Sun 在推文中详细介绍，[LeVJEPA 是杨立昆参与的高性能视频模型预训练项目](https://x.com/Gorden_Sun/status/2093715104277914057)，训练计算量相比之前的顶尖模型减少了 **5 到 20 倍**。模型采用顺应时间流逝的单向理解方式，只根据当前和过去的内容来推断。项目在切块环节随机丢弃 **95%** 的方块，只保留 5% 的零散碎片送入模型。正在做视频理解或世界模型的研究者，可以关注这套激进抽稀策略带来的效率提升。

<video controls preload="metadata" playsinline style="max-width:100%; height:auto;" src="https://video.twimg.com/amplify_video/2093715070597664768/vid/avc1/576x576/3hCqw24TBmVK-ilO.mp4?tag=29"></video>

---

## **😄 AI趣闻**

### Anthropic 官宣永久提额，用户算完账发现被减配

Claude 本周宣布从 9 月 14 日起**永久提高 25% 的标准周限额**，听起来像送福利。但用户翻出日历才想起来，现在正享受的临时 **50% 加成**也会同步结束。[多家科技媒体算出实际变化](https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-is-cutting-claude-codes-current-weekly-limits-by-17-percent/)：从 1.5 倍掉到 1.25 倍，实际可用量反而**少了 17%**。这波操作让网友直呼"A 社改名 A 割"。

## **❓ 相关问题**

### 腾讯 Hy4 preview 国内怎么用？

腾讯 Hy4 preview 已经开源并提供预览版本。根据官方公告，模型拥有 7700 亿总参数和 100 万 tokens 上下文窗口，专注于提升编程、办公和科学研究领域的表现。模型通过高质量的行业数据训练，与腾讯内部软件工程、游戏、金融、安全等领域专家共同打造。具体的使用方式、API 接口和地区限制以腾讯官方发布页面为准。

需要进一步比较当前公开的 AI 账号或订阅服务时，可查看 [**爱窝啦·AI账号店**](https://www.aivora.cn/)；商品、价格与可用状态以官网实时页面为准。
