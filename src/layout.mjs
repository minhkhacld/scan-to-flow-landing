import { SITE_URL, site } from '../site.config.mjs';

export const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Relative prefix from a page path ("vi/privacy/") back to the site root ("../../"). */
export const relRoot = (path) => {
  const depth = path.split('/').filter(Boolean).length;
  return depth ? '../'.repeat(depth) : './';
};

const ui = {
  en: {
    skip: 'Skip to content',
    langName: 'English',
    otherLang: 'Tiếng Việt',
    otherLangShort: 'VI',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    contact: 'Contact',
    home: 'Home',
    rights: 'All rights reserved.',
    madeBy: 'Made by an independent developer in Vietnam.',
  },
  vi: {
    skip: 'Bỏ qua đến nội dung',
    langName: 'Tiếng Việt',
    otherLang: 'English',
    otherLangShort: 'EN',
    privacy: 'Chính sách quyền riêng tư',
    terms: 'Điều khoản sử dụng',
    contact: 'Liên hệ',
    home: 'Trang chủ',
    rights: 'Bảo lưu mọi quyền.',
    madeBy: 'Phát triển bởi một nhà phát triển độc lập tại Việt Nam.',
  },
};
export const t = (lang) => ui[lang];

/** The Scan to Flow mark: a viewfinder open on one side, with a flow line leaving it. */
export const mark = ({ size = 28, frame = 'currentColor', flow = '#2DD4BF', stroke = 8, label } = {}) => `
<svg width="${size}" height="${size}" viewBox="0 0 96 96" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="${stroke}" ${
  label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true"'
}>
  <path stroke="${frame}" d="M14 32V24a10 10 0 0 1 10-10h8M64 14h8a10 10 0 0 1 10 10v8M82 64v8a10 10 0 0 1-10 10h-8M32 82h-8a10 10 0 0 1-10-10v-8"/>
  <path stroke="${flow}" d="M26 56c10 0 12-16 24-16s12 8 38 8M79 39l9 9-9 9"/>
</svg>`;

export const wordmark = (cls = '') =>
  `<span class="font-semibold tracking-[-0.03em] ${cls}">Scan <span class="font-normal opacity-60">to</span> Flow</span>`;

/**
 * Render a full HTML document.
 * page: { lang, path, alternates: {en, vi}, title, description, theme: 'dark'|'auto', body, root? }
 * root overrides the relative prefix (404.html uses an absolute base path).
 */
export function document(page) {
  const root = page.root ?? relRoot(page.path);
  const url = SITE_URL + page.path;
  const ogImage = SITE_URL + 'og.png';
  const dark = page.theme === 'dark';
  const alt = page.alternates;
  const hreflang = alt
    ? `<link rel="alternate" hreflang="en" href="${SITE_URL + alt.en}">
<link rel="alternate" hreflang="vi" href="${SITE_URL + alt.vi}">
<link rel="alternate" hreflang="x-default" href="${SITE_URL + alt.en}">`
    : '';
  const jsonLd = page.jsonLd ? `<script type="application/ld+json">${JSON.stringify(page.jsonLd)}</script>` : '';

  return `<!doctype html>
<html lang="${page.lang}" class="${dark ? 'bg-ink-900' : 'bg-paper dark:bg-ink-900'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
${page.noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${url}">`}
${hreflang}
<meta name="color-scheme" content="${dark ? 'dark' : 'light dark'}">
<meta name="theme-color" content="${dark ? '#0b0f0e' : '#f4f6f5'}"${dark ? '' : ' media="(prefers-color-scheme: light)"'}>
${dark ? '' : '<meta name="theme-color" content="#0b0f0e" media="(prefers-color-scheme: dark)">'}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${site.name}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="${page.lang === 'vi' ? 'vi_VN' : 'en_US'}">
<meta name="twitter:card" content="summary_large_image">
<meta name="apple-itunes-app" content="app-id=6446432287">
<link rel="icon" href="${root}favicon.svg" type="image/svg+xml">
<link rel="icon" href="${root}icon-512.png" type="image/png" sizes="512x512">
<link rel="apple-touch-icon" href="${root}apple-touch-icon.png">
<link rel="preload" href="${root}fonts/be-vietnam-pro-400-${page.lang === 'vi' ? 'vietnamese' : 'latin'}.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${root}assets/styles.css">
<script>document.documentElement.classList.add('js')</script>
${page.head ?? ''}
${jsonLd}
</head>
<body class="${
    dark ? 'bg-ink-900 text-mist' : 'bg-paper text-ink dark:bg-ink-900 dark:text-mist'
  } font-sans antialiased min-h-dvh overflow-x-clip">
<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-teal-bright focus:px-4 focus:py-2 focus:text-ink">${t(page.lang).skip}</a>
${page.body}
${page.scripts ?? ''}
</body>
</html>
`;
}

/** Shared footer. */
export function footer({ lang, root, alternates, dark = true }) {
  const s = t(lang);
  const pfx = lang === 'vi' ? 'vi/' : '';
  const other = lang === 'vi' ? alternates?.en : alternates?.vi;
  const muted = dark ? 'text-mist-2' : 'text-label-2 dark:text-mist-2';
  const line = dark ? 'border-white/10' : 'border-ink/10 dark:border-white/10';
  const hover = dark ? 'hover:text-teal-bright' : 'hover:text-teal dark:hover:text-teal-bright';
  const year = new Date(site.legalUpdated).getFullYear();
  return `
<footer class="border-t ${line}">
  <div class="mx-auto max-w-6xl px-4 sm:px-6 py-12 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
    <div class="flex flex-col gap-3 max-w-sm">
      <a href="${root}${pfx}" class="inline-flex items-center gap-2.5 text-lg">${mark({ size: 26, frame: dark ? '#F3F6F5' : 'currentColor', flow: dark ? '#2DD4BF' : '#0A7C6E' })}${wordmark()}</a>
      <p class="text-sm ${muted}">${site.tagline} ${s.madeBy}</p>
      <div class="barcode h-4 w-40 ${dark ? 'text-white/15' : 'text-ink/15 dark:text-white/15'}" aria-hidden="true"></div>
    </div>
    <nav aria-label="Footer" class="grid grid-cols-2 gap-x-12 gap-y-3 text-sm">
      <a class="${muted} ${hover} transition-colors" href="${root}${pfx}privacy/">${s.privacy}</a>
      <a class="${muted} ${hover} transition-colors" href="${site.appStoreUrl}" rel="noopener">App Store</a>
      <a class="${muted} ${hover} transition-colors" href="${root}${pfx}terms/">${s.terms}</a>
      <a class="${muted} ${hover} transition-colors" href="${site.playStoreUrl}" rel="noopener">Google Play</a>
      <a class="${muted} ${hover} transition-colors" href="mailto:${site.email}">${s.contact}</a>
      ${other !== undefined ? `<a class="${muted} ${hover} transition-colors" href="${root}${other}" hreflang="${lang === 'vi' ? 'en' : 'vi'}" lang="${lang === 'vi' ? 'en' : 'vi'}">${s.otherLang}</a>` : ''}
    </nav>
  </div>
  <div class="mx-auto max-w-6xl px-4 sm:px-6 pb-10 font-mono text-xs ${muted}">© ${year} ${site.developer}. ${s.rights}</div>
</footer>`;
}
