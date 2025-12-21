# 爱窝啦 · 每日 AI 资讯 - 全自动 AI 日报前端 🤖

一个基于 [Hextra Starter Template](https://github.com/imfing/hextra-starter-template) 和 [CloudFlare-AI-Insight-Daily](https://github.com/justlovemaki/CloudFlare-AI-Insight-Daily) 的全自动化 AI 新闻发布项目。

> ✨ **项目愿景**：每日清晨，自动为您抓取、汇总并发布最新的 AI 行业动态，帮助中文用户用最低成本玩转 ChatGPT、Claude、Cursor 等 AI 工具。

---

### 💡 项目简介

本项目结合了强大的后端自动化脚本与优雅的前端展示模板，旨在打造一个零成本、免维护的个人 AI 新闻聚合站。由 **[爱窝啦 · AI 账号店](https://aivora.cn)** 提供品牌支持。

*   **后端驱动**：核心逻辑由 [CloudFlare-AI-Insight-Daily](https://github.com/justlovemaki/CloudFlare-AI-Insight-Daily) 提供，利用 Cloudflare Workers 和 AI 实现新闻内容的自动化处理。
*   **前端呈现**：网站基于 [Hextra](https://imfing.github.io/hextra/) 主题构建，风格现代、响应式，并针对阅读进行了优化。
*   **品牌定位**：为中文用户提供 AI 资讯服务，并推广低成本 AI 工具账号获取渠道。

### ✨ 主要特性

*   🤖 **全自动化**：每日定时抓取、生成并发布 AI 新闻，无需人工干预。
*   ☁️ **零成本部署**：完美支持 GitHub Pages、Netlify 等免费静态托管平台。
*   🎨 **精美主题**：基于优雅、现代的 Hextra 主题，提供卓越的阅读体验。更有暗黑模式，看新闻也能有点小刺激。
*   🚀 **快速启动**：提供一键部署模板，几分钟内即可拥有自己的新闻站。
*   💡 **品牌推广**：内置推广模块，为中文用户提供 AI 工具低成本获取方案。

![默认主题](docs/images/light.png)
![暗黑主题](docs/images/dark.png)

### 🚀 快速开始与部署

您可以选择以下任一平台，轻松将此项目部署上线。

---

#### 🐙 部署到 GitHub Pages

项目内置了 GitHub Actions 工作流，可以自动构建和发布网站到 GitHub Pages。

1.  **Fork 本项目** 到您自己的 GitHub 账户。
2.  **启动工作流**：工作流通常会在您 Fork 后自动触发。如果未能自动运行，您可以前往仓库的 `Actions` 标签页，手动触发 `pages.yaml` 工作流。

> **⚠️ 重要提示**：
> 请务必在您的仓库 `Settings` -> `Pages` 设置中，将部署源（Source）更改为 **GitHub Actions**。
>
> <img src="https://github.com/imfing/hextra-starter-template/assets/5097752/99676430-884e-42ab-b901-f6534a0d6eee" width="600" alt="GitHub Pages Source Setting" />

---

#### ⚡️ 部署到 Netlify

点击下方按钮，一键将项目部署到 Netlify：

[![部署到 Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dongyu19920904/Hextra-AI-Insight-Daily)

**示例站点**：`https://news.aivora.cn`（计划中）

---

### 🏪 关于爱窝啦 AI 账号店

本项目由 **[爱窝啦 · AI 账号店](https://aivora.cn)** 提供品牌支持。

爱窝啦为中文用户提供 ChatGPT、Claude、Cursor、Augment、Gemini 等主流 AI 工具的低成本账号服务：
- ✨ 支持自动发卡
- 💬 提供中文售后
- 🚀 让您用最低成本玩转最强 AI 工具

访问 [https://aivora.cn](https://aivora.cn) 了解更多。

---

### 🤝 欢迎贡献

我们欢迎任何形式的贡献！如果您有好的想法或发现了 Bug，请随时：

*   提交一个 [Issue](https://github.com/dongyu19920904/Hextra-AI-Insight-Daily/issues)
*   或者创建一个 [Pull Request](https://github.com/justlovemaki/Hextra-AI-Insight-Daily/pulls)

---

## 📊 51la 访客统计配置指南

本项目已成功集成 51la 访客统计，以下是关键配置说明，方便您复制到新项目时参考。

### ✅ 成功配置的关键要素

#### 1. 统计代码配置（head-end.html）

**文件位置**：`layouts/partials/custom/head-end.html`

```html
<!-- Referrer 策略：使用浏览器默认策略，允许统计服务工作 -->
<meta name="referrer" content="no-referrer-when-downgrade">

<!-- 51la 统计代码：同步加载（官方推荐） -->
{{- if site.Params.la51Id -}}
<script charset="UTF-8" id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js"></script>
<script>LA.init({id:"{{- site.Params.la51Id | safeJS -}}",ck:"{{- site.Params.la51Id | safeJS -}}",autoTrack:true,hashMode:true})</script>
{{- end -}}
```

**关键参数说明**：
- `autoTrack:true` - 开启自动事件追踪（支持热力图）
- `hashMode:true` - 支持单页应用统计（Vue/React 等框架）
- 使用同步加载方式，统计更准确

#### 2. 数据挂件配置（footer.html）

**文件位置**：`layouts/partials/custom/footer.html`

```html
{{- /* 51la 数据挂件 */ -}}
{{- if site.Params.la51Id -}}
<div style="max-width: 900px; margin: 1rem auto 2rem; padding: 0 1rem; text-align: center;">
    <script id="LA-DATA-WIDGET" crossorigin="anonymous" charset="UTF-8" src="https://v6-widget.51.la/v6/{{- site.Params.la51Id | safeJS -}}/quote.js?theme=0&f=12"></script>
</div>
{{- end -}}
```

**主题参数**：
- `theme=0` - 深色主题（默认）
- `theme=3` - 浅色主题（推荐用于深色背景）
- `f=12` - 字体大小

#### 3. Hugo 配置（hugo.yaml）

```yaml
params:
  la51Id: "3ORsdpexcLjTPigW"  # 您的 51la 统计 ID
```

#### 4. 域名配置

**必须确保**：
- `hugo.yaml` 中的 `baseURL` 与实际访问域名一致
- `static/CNAME` 文件包含正确的域名
- DNS 解析正确（CNAME 指向 GitHub Pages）

**示例**：
```yaml
# hugo.yaml
baseURL: "https://news.aivora.cn/"
```

```
# static/CNAME
news.aivora.cn
```

### 🔧 常见问题排查

#### 问题 1：51la 后台显示"未检测到代码"

**可能原因**：
1. ❌ Referrer 策略设置为 `no-referrer`（阻止了统计）
2. ❌ 域名配置不一致（baseURL ≠ 实际访问域名）
3. ⏱️ 刚部署，需要等待 10-30 分钟

**解决方案**：
- 确认 Referrer 策略为 `no-referrer-when-downgrade`
- 检查域名配置是否一致
- 多次访问网站，等待 51la 服务器验证

#### 问题 2：数据挂件显示但数据为 0

**原因**：新站点，还没有历史数据

**解决方案**：
- 耐心等待 1-2 小时
- 多次访问网站（不同浏览器/设备）
- 数据会逐渐累积

#### 问题 3：数据挂件显示很暗

**原因**：深色主题在深色背景上不明显

**解决方案**：
```html
<!-- 方案 1：使用浅色主题 -->
<script src="...quote.js?theme=3&f=12"></script>

<!-- 方案 2：添加白色背景 -->
<div style="background-color: #ffffff; padding: 15px; border-radius: 8px;">
    <script src="...quote.js?theme=0&f=12"></script>
</div>
```

### 📋 复制到新项目的检查清单

创建新项目（如 AI 生命科学日报）时，请确保：

- [ ] 复制 `layouts/partials/custom/head-end.html`（包含统计代码）
- [ ] 复制 `layouts/partials/custom/footer.html`（包含数据挂件）
- [ ] 在 `hugo.yaml` 中添加新的 `la51Id`
- [ ] 修改 `baseURL` 为新域名
- [ ] 创建 `static/CNAME` 文件
- [ ] 在 51la 后台创建新的统计项目
- [ ] 配置 DNS 解析
- [ ] 部署后多次访问，等待数据显示

### 🎯 最佳实践

1. **统计代码位置**：放在 `<head>` 中，优先加载
2. **数据挂件位置**：放在页面底部，不影响首屏加载
3. **Referrer 策略**：使用 `no-referrer-when-downgrade`
4. **域名一致性**：确保所有配置中的域名完全一致
5. **耐心等待**：首次部署需要 10-30 分钟才能看到"代码已检测"

---
