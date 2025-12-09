# 爱窝啦 Aivora 品牌改造方案

> **项目目标**：将 Hextra-AI-Insight-Daily 改造为"爱窝啦 · 每日 AI 资讯"品牌站点  
> **改造原则**：尽量少改代码，通过配置和 partial 实现品牌化  
> **制定日期**：2025-12-09

---

## 📋 项目结构分析

### 1. 站点配置文件
- **位置**：`hugo.yaml`（根目录）
- **关键配置字段**：
  - `title`：站点标题
  - `params.description` / `params.descriptionEn`：站点描述
  - `baseURL`：未在当前配置中显式设置（Hugo 默认根据部署环境决定），但可以在 `hugo.yaml` 中手动添加
  - `params.author.name` / `params.publisher.name`：作者/发布者信息
  - `menu.main`：导航菜单配置

### 2. Content 目录结构
- **每日 AI 日报位置**：
  - 中文版：`content/cn/2025-06/`, `content/cn/2025-07/`, ... `content/cn/2025-12/`（按月份组织）
  - 英文版：`content/en/2025-XX/`（同样结构）
  - 每篇日报是独立的 Markdown 文件，如 `2025-06-01.md`
- **独立页面**：`content/cn/about.md`、`content/cn/contact.md` 等

### 3. 单篇文章页面模板
- **重要发现**：项目使用的是 **Hextra 主题**（通过 Hugo Module 方式引入，见 `go.mod`）
- **当前项目中没有自定义的 `single.html`**：
  - `layouts/_default/` 下只有 `_markup/` 子目录（用于自定义 link 渲染）
  - 没有 `layouts/posts/single.html` 或 `layouts/_default/single.html`
  - 意味着项目完全依赖 **Hextra 主题自带的 single.html 模板**
- **主题覆盖机制**：
  - Hextra 主题支持通过 `layouts/partials/custom/` 自定义 partial 片段
  - 目前已有 `layouts/partials/custom/footer.html` 和 `layouts/partials/custom/head-end.html`
  - **推荐方式**：创建一个新的 custom partial 用于文章底部推广，然后想办法注入到文章内容后

### 4. 现有自定义点
- **Custom Partials**：
  - `layouts/partials/custom/footer.html`：自定义页脚（联系我们、隐私政策、访问量统计）
  - `layouts/partials/custom/head-end.html`：注入第三方分析脚本、广告拦截提示等
- **自定义样式**：`assets/css/custom.css`（已有 347 行样式）

---

## 🎯 最小改动改造方案（分步骤）

### **Step 1：修改站点基础信息（品牌化）**

**目标**：将站点从"何夕2077的AI资讯日报"改为"爱窝啦 · 每日 AI 资讯"

**涉及文件**：
- `hugo.yaml`

**改动类型**：
- 纯配置修改，不涉及代码

**具体操作**：
1. 修改 `title` 字段为：`爱窝啦 · 每日 AI 资讯 | AI 工具账号 | ChatGPT Claude Cursor`
2. 修改 `params.description` 为：  
   `"每日自动汇总最新 AI 行业动态，帮中文用户用最低成本玩转 ChatGPT、Claude、Cursor、Augment 等 AI 工具。由爱窝啦 AI 账号店提供支持。"`
3. 修改 `params.descriptionEn` 为对应英文描述
4. 添加 `baseURL` 字段：先设为 GitHub Pages 临时地址，后续改为 `https://news.aivora.cn`
5. 修改 `params.author.name` 和 `params.publisher.name` 为：`"爱窝啦 Aivora"`
6. 修改 `params.author.website` 和 `params.publisher.url` 为：`"https://aivora.cn"`
7. 修改 Google Analytics ID 为你自己的（如果有）

**分类**：✅ **必做**

---

### **Step 2：调整导航菜单，预留"关于爱窝啦"入口**

**目标**：在顶部导航中添加"关于爱窝啦"链接，替换现有的"关于我"

**涉及文件**：
- `hugo.yaml`（`menu.main` 部分）
- `content/cn/about.md`（后续你自己编辑内容）

**改动类型**：
- 配置修改 + 内容页面准备

**具体操作**：
1. 在 `menu.main` 中，找到 `identifier: about` 的菜单项
2. 修改 `name` 为：`"关于爱窝啦"`（或 `"关于我们"`）
3. 修改 `url` 为：`"/about"`（指向站内页面，不再是外部链接）
4. 将 `pageRef` 设为：`/about`
5. 保留 `weight: 3`（排序位置）

**备注**：`content/cn/about.md` 的内容你后续自己编辑，方案中不包含该页面的文案。

**分类**：✅ **必做**

---

### **Step 3：创建文章底部推广 Partial（核心推广模块）**

**目标**：新增一个可复用的 HTML 片段，用于在每篇日报底部展示"爱窝啦发卡站"推广

**涉及文件**：
- `layouts/partials/custom/aivora-promo.html`（新建）

**改动类型**：
- 新增 partial 文件

**具体操作**：
1. 在 `layouts/partials/custom/` 下创建 `aivora-promo.html`
2. 内容结构建议：
   - 一个 `<div>` 容器（类名如 `aivora-promo-box`）
   - 标题：`<h3>💡 想亲自体验这些 AI 工具？</h3>`
   - 说明段落：介绍"爱窝啦 · AI 账号店"提供 ChatGPT、Claude、Cursor、Augment、Gemini 等工具的低成本账号，支持自动发卡 + 中文售后
   - 按钮：`<a href="https://aivora.cn" target="_blank" rel="noopener" class="aivora-cta-button">前往爱窝啦发卡站 →</a>`
3. 样式：
   - 复用主题现有的卡片/提示框样式（如 `.hextra-card` 或 `.hextra-callout`），避免自己从零写 CSS
   - 必要时在 `assets/css/custom.css` 中添加少量补充样式（如按钮颜色、间距）

**HTML 语义建议**：
- 使用 `<aside>` 标签包裹推广内容（语义上表示"附加信息"），有利于 AI 搜索理解这是推广区块
- 添加 `aria-label="工具推广"`，增强可访问性

**分类**：✅ **必做**

---

### **Step 4：在单篇文章模板中注入推广 Partial**

**目标**：让每篇日报文章底部自动显示推广模块

**涉及文件**：
- **问题**：项目当前没有自定义的 `single.html`，完全依赖 Hextra 主题的模板
- **解决方案**：
  - **方案 A（推荐）**：检查 Hextra 主题是否支持 `layouts/partials/custom/` 下的特定 hook partial（如 `content-end.html` 或 `article-footer.html`），如果支持，直接在对应 hook 文件中引入 `{{ partial "custom/aivora-promo.html" . }}`
  - **方案 B（备选）**：如果主题不支持 hook，则需要创建一个完整的 `layouts/_default/single.html`，从主题中复制模板，并在 `{{ .Content }}` 后面插入 `{{ partial "custom/aivora-promo.html" . }}`

**改动类型**：
- 模板修改（新增或覆盖主题模板）

**具体操作（以方案 A 为例）**：
1. 查阅 Hextra 主题文档或源码，确认是否有类似 `content-end.html` 的 hook
2. 如果有，创建 `layouts/partials/custom/content-end.html`（或对应名称），内容为：
   ```go
   {{ partial "custom/aivora-promo.html" . }}
   ```
3. 如果没有 hook（方案 B），则：
   - 从 Hextra 主题的 GitHub 仓库（`github.com/imfing/hextra`）中找到 `layouts/_default/single.html`
   - 复制到本地项目的 `layouts/_default/single.html`
   - 在 `{{ .Content }}` 之后（通常在 `</article>` 标签内），插入：
     ```go
     {{ partial "custom/aivora-promo.html" . }}
     ```

**备注**：方案 A 更优雅（不用复制整个模板），但需要确认主题支持。如果主题不支持，方案 B 是可靠的后备方案。

**分类**：✅ **必做**

---

### **Step 5：样式微调（可选但建议）**

**目标**：为推广模块补充少量自定义样式，确保视觉效果与主题一致

**涉及文件**：
- `assets/css/custom.css`

**改动类型**：
- 样式增补

**具体操作**：
1. 在 `custom.css` 末尾添加推广模块的样式，例如：
   ```css
   /* 爱窝啦推广模块 */
   .aivora-promo-box {
     margin-top: 3rem;
     padding: 1.5rem;
     border: 1px solid var(--color-border);
     border-radius: 0.5rem;
     background-color: var(--color-bg-secondary);
   }
   .aivora-cta-button {
     display: inline-block;
     padding: 0.75rem 1.5rem;
     background-color: #4CAF50; /* 或品牌绿色 */
     color: white;
     border-radius: 0.375rem;
     text-decoration: none;
     font-weight: 600;
     transition: background-color 0.2s;
   }
   .aivora-cta-button:hover {
     background-color: #45a049;
   }
   ```
2. 如果主题已有类似样式（如 `.hextra-card`），优先复用，仅微调颜色/间距

**分类**：⭐ **可选增强**（但强烈建议做，确保视觉一致性）

---

### **Step 6：GEO / AI 搜索优化结构准备（建议）**

**目标**：为后续 SEO 和 AI 搜索优化打好基础

**涉及文件**：
- 无需改动现有文件（仅结构检查）
- 可选：`content/cn/about.md`（后续添加结构化内容）

**改动类型**：
- 结构验证 + 建议

**具体操作**：
1. **确认语义化标签结构**（不用改，只需验证）：
   - 检查 Hextra 主题的 `single.html` 模板中，文章标题是否为 `<h1>`
   - 小节标题是否为 `<h2>`、`<h3>`
   - Markdown 内容中，一级标题（`#`）应为 `<h1>`，二级标题（`##`）应为 `<h2>`（后端生成时已保证）
   - 如果发现主题模板中标题层级不合理，可以在 Step 4 中一并修正

2. **内部链接优化（可选）**：
   - 在"关于爱窝啦"页面（`content/cn/about.md`）中，添加指向主站（`https://aivora.cn`）的链接
   - 在推广模块中，已经包含了指向主站的链接（Step 3）
   - 可选：在首页（`content/cn/_index.md`）顶部添加一句品牌介绍 + 链接到 About 页面

3. **结构化数据（可选，后续再做）**：
   - 如果后续需要，可以在 `layouts/partials/custom/head-end.html` 中添加 JSON-LD 结构化数据（如 `Organization`、`WebSite`、`NewsArticle`）
   - 这一步不在当前方案范围内，仅作为方向建议

**分类**：⭐ **可选增强**（结构检查是必要的，但不需要大改）

---

### **Step 7：更新 README.md（可选）**

**目标**：更新项目 README，体现新的品牌信息

**涉及文件**：
- `README.md`

**改动类型**：
- 文档更新

**具体操作**：
1. 修改项目标题为：`爱窝啦 · 每日 AI 资讯 - 全自动 AI 日报前端`
2. 更新项目简介，提及"爱窝啦 AI 账号店"品牌
3. 更新部署说明中的示例域名为 `https://news.aivora.cn`
4. 保留原有的技术架构说明（基于 Hextra + CloudFlare Workers）

**分类**：⭐ **可选增强**（对站点功能无影响，但有助于开源协作）

---

## 📝 方案总结

### 必做步骤（核心改造）
| 步骤 | 文件 | 改动类型 | 目的 |
|------|------|----------|------|
| **Step 1** | `hugo.yaml` | 配置修改 | 品牌化站点信息（标题、描述、作者） |
| **Step 2** | `hugo.yaml` | 配置修改 | 调整导航菜单，预留"关于爱窝啦"入口 |
| **Step 3** | `layouts/partials/custom/aivora-promo.html` | 新增 partial | 创建文章底部推广模块 |
| **Step 4** | `layouts/_default/single.html` 或 hook partial | 模板修改 | 在单篇文章中注入推广模块 |

### 可选增强步骤
| 步骤 | 文件 | 改动类型 | 目的 |
|------|------|----------|------|
| **Step 5** | `assets/css/custom.css` | 样式增补 | 美化推广模块，保持视觉一致性 |
| **Step 6** | 结构检查 + `content/cn/about.md` | 验证 + 建议 | 为 SEO/AI 搜索优化打基础 |
| **Step 7** | `README.md` | 文档更新 | 更新项目说明，体现新品牌 |

---

## 🚨 重要约束与注意事项

1. **不改动数据生成逻辑**：
   - 不修改 `.github/workflows/` 中的 CI/CD 配置
   - 不改动后端仓库（`CloudFlare-AI-Insight-Daily`）的推送逻辑
   - 只关注 Hugo 前端展示层

2. **尽量少改主题代码**：
   - 优先通过 `layouts/partials/custom/` 实现自定义
   - 避免大范围覆盖主题模板（除非必须）
   - Step 4 中，优先尝试 hook 方式（方案 A），最后才考虑复制整个 `single.html`

3. **保持现有功能不受影响**：
   - 不删除现有的自定义 footer、head-end 等 partial
   - 不改动现有的广告脚本、分析代码（除非你要替换 GA ID）
   - 确保推广模块在移动端也有良好显示（响应式）

4. **品牌一致性**：
   - 所有提及"爱窝啦"的地方，使用统一名称：`爱窝啦 Aivora` 或 `爱窝啦 · AI 账号店`
   - 链接统一指向：`https://aivora.cn`
   - 如果有 logo，后续可替换 `static/images/logo.png` 和 `logo-dark.png`

---

## 🎯 执行顺序建议

### 第一批：基础配置（Step 1 + Step 2）
→ 修改 `hugo.yaml`，完成品牌化和导航调整

### 第二批：推广模块（Step 3 + Step 4 + Step 5）
→ 创建 `aivora-promo.html`、注入到文章模板、添加样式

### 第三批：可选增强（Step 6 + Step 7）
→ 结构检查建议、更新 README

---

## 📌 品牌信息清单

### 品牌名称
- 中文：爱窝啦 / 爱窝啦 · AI 账号店
- 英文：Aivora

### 关键链接
- 主站发卡地址：`https://aivora.cn`
- 日报站域名（计划）：`https://news.aivora.cn`

### 核心卖点
- 帮中文用户低成本体验 ChatGPT、Claude、Cursor、Augment、Gemini 等 AI 工具
- 支持自动发卡 + 中文售后

### 推广文案参考
```
💡 想亲自体验这些 AI 工具？

爱窝啦 · AI 账号店为中文用户提供 ChatGPT、Claude、Cursor、Augment、Gemini 等主流 AI 工具的低成本账号服务。支持自动发卡，提供中文售后支持，让您用最低成本玩转最强 AI 工具。

[前往爱窝啦发卡站 →](https://aivora.cn)
```

---

**方案制定完成，等待执行指令。**
