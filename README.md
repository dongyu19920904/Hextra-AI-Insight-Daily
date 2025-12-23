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

## 📝 内容更新流程说明

### 🎯 重要提示：前后端内容路径说明

本项目有**两个不同的内容目录**，用于不同的展示路径：

1. **`content/cn/2025-12/`** - 主要展示路径（侧边栏导航）
   - URL: `https://news.aivora.cn/2025-12/2025-12-23/`
   - 用途：按月份组织的日报归档
   - **这是用户主要访问的路径**

2. **`content/cn/daily/`** - 备用路径
   - URL: `https://news.aivora.cn/daily/2025-12-23/`
   - 用途：临时存储或测试

### ⚠️ 后端开发者注意事项

**如果后端生成的内容有问题（如包含 AI 思考过程），请不要修改后端代码！**

问题的根源在于：
- 后端可能将内容推送到了 `content/cn/daily/` 目录
- 但用户实际访问的是 `content/cn/2025-12/` 目录
- 两个目录的内容可能不同步

**正确的修复流程**：

1. ✅ 确认后端生成的内容是否正确（检查 `content/cn/daily/` 中的文件）
2. ✅ 如果 `content/cn/daily/` 中的内容正确，问题在前端
3. ✅ 需要前端将正确内容复制到 `content/cn/2025-12/` 目录
4. ❌ 不要修改后端代码，除非确认后端生成的内容本身有问题

### 🔍 问题排查步骤

#### 步骤 1：确认问题现象

访问网站时，如果看到：
- ❌ 内容包含 `**Revising Summarization Strategy**` 等英文思考过程
- ❌ 内容包含 `I'm currently revising my strategy...` 等 AI 内部思考
- ❌ 内容格式不正确或显示异常

#### 步骤 2：检查两个目录的内容

```bash
# 检查主要展示路径的内容（用户看到的）
cat content/cn/2025-12/2025-12-23.md | head -30

# 检查备用路径的内容（后端推送的）
cat content/cn/daily/2025-12-23.md | head -30
```

#### 步骤 3：对比内容差异

- 如果 `content/cn/daily/` 中的内容**正确**（无思考过程）
- 但 `content/cn/2025-12/` 中的内容**错误**（有思考过程）
- **说明问题在前端，不是后端的问题**

### 🛠️ 前端修复步骤

#### 方法 1：手动复制内容（推荐）

```bash
# 1. 读取正确的内容（从 daily 目录）
cat content/cn/daily/2025-12-23.md

# 2. 复制内容到主展示目录
# 注意：需要保留 front matter（YAML 头部）
# front matter 示例：
# ---
# linkTitle: 12-23-日报
# title: 12-23-日报-AI资讯日报
# weight: 9
# breadcrumbs: false
# comments: true
# description: "..."
# ---

# 3. 编辑文件
nano content/cn/2025-12/2025-12-23.md
# 或使用其他编辑器
```

#### 方法 2：使用脚本自动同步

```bash
# 创建同步脚本
cat > sync-daily-content.sh << 'EOF'
#!/bin/bash
DATE=$1
if [ -z "$DATE" ]; then
    echo "Usage: $0 YYYY-MM-DD"
    exit 1
fi

YEAR_MONTH=$(echo $DATE | cut -d'-' -f1,2)
SOURCE="content/cn/daily/${DATE}.md"
TARGET="content/cn/${YEAR_MONTH}/${DATE}.md"

if [ ! -f "$SOURCE" ]; then
    echo "Error: Source file not found: $SOURCE"
    exit 1
fi

# 提取 front matter
FRONT_MATTER=$(sed -n '/^---$/,/^---$/p' "$TARGET" 2>/dev/null)

# 提取正文内容（跳过 front matter）
CONTENT=$(sed '1,/^---$/d; /^---$/d' "$SOURCE")

# 合并并写入目标文件
echo "$FRONT_MATTER" > "$TARGET"
echo "" >> "$TARGET"
echo "$CONTENT" >> "$TARGET"

echo "✅ Content synced: $SOURCE -> $TARGET"
EOF

chmod +x sync-daily-content.sh

# 使用示例
./sync-daily-content.sh 2025-12-23
```

### 🚀 提交和部署

修复完成后，需要提交并推送到 GitHub：

```bash
# 1. 添加修改的文件
git add content/cn/2025-12/2025-12-23.md

# 2. 提交更改
git commit -m "fix: replace incorrect daily content with correct version"

# 3. 推送到远程仓库
git push origin main
```

GitHub Actions 会自动触发部署，大约 1-2 分钟后网站内容会更新。

### 🔧 技术细节说明

#### Hugo 构建配置

项目使用 Hugo 静态站点生成器，关键配置：

```yaml
# .github/workflows/pages.yaml
- name: Build with Hugo
  run: |
    hugo \
      --gc --minify --ignoreCache \
      --baseURL "${{ steps.pages.outputs.base_url }}/"
```

**重要参数**：
- `--gc`: 清理未使用的缓存文件
- `--minify`: 压缩输出的 HTML/CSS/JS
- `--ignoreCache`: **忽略缓存，确保每次构建使用最新内容**

#### 为什么需要 `--ignoreCache`？

在之前的问题排查中发现：
1. Hugo 可能会缓存旧的内容文件
2. 即使源文件更新了，构建时仍使用缓存的旧版本
3. 导致网站显示的内容与仓库中的文件不一致

添加 `--ignoreCache` 参数后，每次构建都会重新读取所有源文件，确保内容同步。

### ❓ 常见问题 FAQ

#### Q1: 为什么网站显示的内容和仓库中的文件不一致？

**A**: 可能的原因：
1. **Hugo 缓存问题**：已通过添加 `--ignoreCache` 参数解决
2. **CDN 缓存问题**：GitHub Pages 使用 CDN，可能需要 5-10 分钟更新
3. **浏览器缓存**：强制刷新浏览器（Ctrl+F5）
4. **文件路径错误**：检查是否修改了正确的文件（`content/cn/2025-12/` 而不是 `content/cn/daily/`）

#### Q2: 后端推送的内容去哪了？

**A**: 后端通常推送到 `content/cn/daily/` 目录，但用户访问的是 `content/cn/2025-12/` 目录。需要前端手动同步内容。

#### Q3: 如何验证修复是否成功？

**A**:
1. 访问网站：`https://news.aivora.cn/2025-12/2025-12-23/`
2. 查看页面源代码（右键 -> 查看源代码）
3. 搜索 `Revising Summarization Strategy`
4. 如果找不到，说明修复成功

#### Q4: 部署后多久能看到更新？

**A**:
- GitHub Actions 构建：30-60 秒
- GitHub Pages 部署：1-2 分钟
- CDN 缓存更新：5-10 分钟
- **总计**：约 10-15 分钟

---

### 📋 最佳实践建议

#### 1. 内容管理

- ✅ **统一路径**：建议后端直接推送到 `content/cn/YYYY-MM/` 目录
- ✅ **自动同步**：使用 GitHub Actions 自动同步两个目录
- ✅ **定期检查**：每周检查一次内容一致性

#### 2. 部署优化

- ✅ **使用 `--ignoreCache`**：确保每次构建使用最新内容
- ✅ **监控部署日志**：检查 GitHub Actions 是否成功
- ✅ **测试环境**：在本地先测试，确认无误后再推送

#### 3. 问题预防

- ✅ **文档化流程**：记录内容更新流程（本 README）
- ✅ **自动化检查**：添加 CI 检查内容格式
- ✅ **版本控制**：使用 Git 追踪所有更改

---

### 🔗 相关链接

- **前端仓库**：[Hextra-AI-Insight-Daily](https://github.com/dongyu19920904/Hextra-AI-Insight-Daily)
- **后端仓库**：[CloudFlare-AI-Insight-Daily](https://github.com/dongyu19920904/CloudFlare-AI-Insight-Daily)
- **网站地址**：[https://news.aivora.cn](https://news.aivora.cn)
- **Hugo 文档**：[https://gohugo.io/documentation/](https://gohugo.io/documentation/)

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
