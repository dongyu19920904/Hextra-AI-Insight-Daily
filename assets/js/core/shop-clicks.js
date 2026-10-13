(function () {
  function shopTarget(anchor) {
    if (!anchor || !anchor.href) return null;
    try {
      const url = new URL(anchor.href, window.location.href);
      return url.origin === 'https://www.aivora.cn' && !url.username && !url.password ? url : null;
    } catch (_) {
      return null;
    }
  }

  // Restore only our store's referral; never weaken the policy of other links.
  function prepare(anchor) {
    if (!shopTarget(anchor)) return;
    anchor.relList.remove('noreferrer');
    anchor.relList.add('noopener');
    anchor.referrerPolicy = 'strict-origin-when-cross-origin';
  }

  document.querySelectorAll('a[href]').forEach(prepare);
  function track(event) {
    if (event.defaultPrevented || (event.type === 'auxclick' && event.button !== 1)) return;
    const anchor = event.target.closest && event.target.closest('a[href]');
    const target = shopTarget(anchor);
    if (!target) return;
    prepare(anchor);
    const placement = anchor.closest('.content') ? 'article' :
      anchor.closest('.footer-wrapper') ? 'footer' :
      anchor.closest('nav, .sidebar-container') ? 'navigation' : 'other';
    const properties = { page: window.location.pathname, target: target.pathname, placement: placement };
    // Reuse installed analytics. Failure must never interrupt navigation.
    try { if (typeof window.gtag === 'function') window.gtag('event', 'shop_click', properties); } catch (_) {}
    try { if (window.umami && typeof window.umami.track === 'function') window.umami.track('shop_click', properties); } catch (_) {}
  }
  document.addEventListener('click', track);
  document.addEventListener('auxclick', track);
})();
