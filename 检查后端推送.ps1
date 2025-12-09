# 后端推送文件格式检查脚本
# 使用方法：.\检查后端推送.ps1

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  后端推送文件格式检查工具  " -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# 检查最新的日报文件
Write-Host "🔍 检查最近的日报文件..." -ForegroundColor Yellow
Write-Host ""

$cnFiles = Get-ChildItem "content/cn/2025-*/*.md" -Exclude "_index.md" -ErrorAction SilentlyContinue | Sort-Object LastWriteTime -Descending | Select-Object -First 5
$enFiles = Get-ChildItem "content/en/2025-*/*.md" -Exclude "_index.md" -ErrorAction SilentlyContinue | Sort-Object LastWriteTime -Descending | Select-Object -First 5

if (-not $cnFiles) {
    Write-Host "❌ 未找到中文日报文件" -ForegroundColor Red
    Write-Host "   预期路径：content/cn/2025-XX/2025-XX-XX.md" -ForegroundColor Yellow
} else {
    Write-Host "✅ 最近的中文日报文件（前5个）：" -ForegroundColor Green
    foreach ($file in $cnFiles) {
        $relativePath = $file.FullName.Replace($PWD.Path + "\", "")
        $modTime = $file.LastWriteTime.ToString("yyyy-MM-dd HH:mm:ss")
        Write-Host "   📄 $relativePath" -ForegroundColor White
        Write-Host "      最后修改：$modTime" -ForegroundColor Gray
        
        # 检查 Front Matter
        $content = Get-Content $file.FullName -Raw
        if ($content -match '---\s*\n(.*?)\n---') {
            Write-Host "      ✅ Front Matter 存在" -ForegroundColor Green
            
            # 检查必需字段
            $frontMatter = $matches[1]
            $missingFields = @()
            
            if ($frontMatter -notmatch 'title:') { $missingFields += "title" }
            if ($frontMatter -notmatch 'description:') { $missingFields += "description" }
            
            if ($missingFields.Count -gt 0) {
                Write-Host "      ⚠️  缺少字段：$($missingFields -join ', ')" -ForegroundColor Yellow
            } else {
                Write-Host "      ✅ 必需字段完整" -ForegroundColor Green
            }
        } else {
            Write-Host "      ❌ 缺少 Front Matter" -ForegroundColor Red
        }
        Write-Host ""
    }
}

Write-Host ""
Write-Host "----------------------------------" -ForegroundColor Gray
Write-Host ""

if (-not $enFiles) {
    Write-Host "⚠️  未找到英文日报文件（可选）" -ForegroundColor Yellow
} else {
    Write-Host "✅ 最近的英文日报文件（前5个）：" -ForegroundColor Green
    foreach ($file in $enFiles) {
        $relativePath = $file.FullName.Replace($PWD.Path + "\", "")
        Write-Host "   📄 $relativePath" -ForegroundColor White
    }
}

Write-Host ""
Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  检查完成" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# 检查最新的 Git 提交
Write-Host "📝 最近的 Git 提交（前5条）：" -ForegroundColor Yellow
Write-Host ""
git log --oneline --graph -5
Write-Host ""

# 检查是否有新的推送
$status = git status --porcelain
if ($status) {
    Write-Host "⚠️  有未提交的更改：" -ForegroundColor Yellow
    git status -s
} else {
    Write-Host "✅ 工作目录干净，与远程同步" -ForegroundColor Green
}

Write-Host ""
Write-Host "提示：" -ForegroundColor Cyan
Write-Host "  - 如果文件缺少 Front Matter，需要在后端代码中修正" -ForegroundColor Gray
Write-Host "  - 后端应推送到：content/cn/YYYY-MM/YYYY-MM-DD.md" -ForegroundColor Gray
Write-Host "  - 运行 'git pull' 拉取后端的最新推送" -ForegroundColor Gray
Write-Host ""

pause
