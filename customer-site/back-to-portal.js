/* back-to-portal.js — floating "Back to portal" button for any guide/document.
   Determines which portal the reader came from (via document.referrer) and links
   back to it. Falls back to a per-page default (<meta name="back-portal">) or the
   internal portal. Hidden in print. Drop in with: <script src="back-to-portal.js"></script> */
(function () {
  var PORTALS = { 'Portal.html': 'Manager & Admin Portal', 'index.html': 'Manager & Admin Portal' };

  function portalFromReferrer() {
    try {
      if (!document.referrer) return null;
      var u = new URL(document.referrer, location.href);
      if (u.origin !== location.origin) return null;
      var last = decodeURIComponent(u.pathname.split('/').pop() || '');
      if (PORTALS.hasOwnProperty(last)) return { href: u.href, name: PORTALS[last] };
      return null;
    } catch (e) { return null; }
  }

  function fallbackTarget() {
    var meta = document.querySelector('meta[name="back-portal"]');
    var file = (meta && meta.getAttribute('content')) || 'index.html';
    return { href: file, name: PORTALS[file] || 'portal' };
  }

  function build() {
    var target = portalFromReferrer() || fallbackTarget();

    var style = document.createElement('style');
    style.textContent =
      '.btp-bar{position:fixed;top:16px;left:16px;z-index:9999;}' +
      '.btp-bar a{font-family:var(--font-sans,"Poppins",system-ui,sans-serif);font-size:13px;font-weight:700;' +
      'color:var(--ink-900,#1c1d1f);background:var(--paper,#fff);border:1px solid var(--line-300,#e4e0d8);' +
      'border-radius:999px;padding:9px 16px 9px 13px;cursor:pointer;text-decoration:none;display:inline-flex;' +
      'align-items:center;gap:7px;box-shadow:0 2px 10px rgba(28,29,31,.10);transition:border-color .14s,box-shadow .14s,transform .14s;}' +
      '.btp-bar a:hover{border-color:var(--blue-300,#7ec0ff);box-shadow:0 4px 16px rgba(28,29,31,.14);transform:translateY(-1px);}' +
      '.btp-bar svg{width:15px;height:15px;stroke:var(--blue-600,#0070e0);}' +
      '@media print{.btp-bar{display:none!important;}}';
    document.head.appendChild(style);

    var bar = document.createElement('div');
    bar.className = 'btp-bar';
    var a = document.createElement('a');
    a.href = target.href;
    a.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>' +
      '<span>Back to ' + (target.name || 'portal') + '</span>';
    bar.appendChild(a);
    document.body.appendChild(bar);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
