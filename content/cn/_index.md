---
linkTitle: AI Daily
title: AI Daily-AI资讯日报
breadcrumbs: false
description: "每日自动汇总最新 AI 行业动态,帮中文用户用最低成本玩转 ChatGPT、Claude、Cursor、Augment 等 AI 工具。由爱窝啦 AI 账号店提供支持。"
cascade:
  type: docs
---

<script>
// 自动重定向到最新可用的日报
(function() {
  // 检查指定日期的页面是否存在
  async function checkPageExists(url) {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch (e) {
      return false;
    }
  }

  // 查找最新可用的日报
  async function findLatestDaily() {
    const now = new Date();
    const maxDaysBack = 7; // 最多往前查找 7 天

    for (let i = 0; i < maxDaysBack; i++) {
      const checkDate = new Date(now);
      checkDate.setDate(now.getDate() - i);

      const year = checkDate.getFullYear();
      const month = String(checkDate.getMonth() + 1).padStart(2, '0');
      const day = String(checkDate.getDate()).padStart(2, '0');
      const dateStr = `${year}-${month}-${day}`;
      const url = `/${year}-${month}/${dateStr}/`;

      console.log(`Checking for daily report: ${url}`);

      // 检查页面是否存在
      const exists = await checkPageExists(url);
      if (exists) {
        console.log(`Found latest daily report: ${url}`);
        window.location.replace(url);
        return;
      }
    }

    // 如果没有找到任何日报，显示错误信息
    console.error('No daily report found in the last 7 days');
    document.body.innerHTML = '<div style="text-align:center;padding:2rem;"><h2>暂无可用的日报</h2><p>最近 7 天内没有找到已生成的日报。</p></div>';
  }

  findLatestDaily();
})();
</script>

<noscript>
  <meta http-equiv="refresh" content="0; url=/2025-12/2025-12-23/">
</noscript>

正在跳转到最新日报...

如果没有自动跳转，请点击：[查看最新日报](/2025-12/2025-12-23/)
