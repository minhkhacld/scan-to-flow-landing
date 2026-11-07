import { site } from '../../site.config.mjs';
import { mark, wordmark, footer, t, relRoot } from '../layout.mjs';

const fmtDate = (iso, lang) =>
  new Intl.DateTimeFormat(lang === 'vi' ? 'vi-VN' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(
    new Date(iso + 'T00:00:00Z')
  );

/**
 * A legal document page, light by default with a dark mode, kept light-weight
 * because it opens inside the app's paywall and in-app browsers.
 * kind: 'privacy' | 'terms'
 */
export function legal(kind, lang, doc) {
  const s = t(lang);
  const pfx = lang === 'vi' ? 'vi/' : '';
  const path = `${pfx}${kind}/`;
  const root = relRoot(path);
  const alternates = { en: `${kind}/`, vi: `vi/${kind}/` };
  const other = lang === 'vi' ? alternates.en : alternates.vi;
  const sibling = kind === 'privacy' ? { href: `${root}${pfx}terms/`, label: s.terms } : { href: `${root}${pfx}privacy/`, label: s.privacy };
  const labels =
    lang === 'vi'
      ? { effective: 'Ngày hiệu lực', updated: 'Cập nhật lần cuối', contents: 'Nội dung', top: 'Lên đầu trang', back: 'Về trang chủ' }
      : { effective: 'Effective', updated: 'Last updated', contents: 'Contents', top: 'Back to top', back: 'Back to home' };

  const body = `
<header class="border-b border-ink/[0.08] dark:border-white/[0.08] bg-paper/80 dark:bg-ink-900/80 backdrop-blur-xl sticky top-0 z-40">
  <div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
    <a href="${root}${pfx}" class="inline-flex items-center gap-2.5 text-[1.05rem] text-ink dark:text-mist" aria-label="Scan to Flow, ${s.home}">
      <span class="dark:hidden">${mark({ size: 26, frame: '#101816', flow: '#0A7C6E' })}</span>
      <span class="hidden dark:inline">${mark({ size: 26, frame: '#F3F6F5', flow: '#2DD4BF' })}</span>
      ${wordmark()}
    </a>
    <nav aria-label="Legal" class="flex items-center gap-2 text-sm">
      <a href="${sibling.href}" class="hidden sm:inline-flex h-10 items-center rounded-full px-3 text-label-2 hover:text-ink dark:text-mist-2 dark:hover:text-mist">${sibling.label}</a>
      <a href="${root}${other}" hreflang="${lang === 'vi' ? 'en' : 'vi'}" lang="${lang === 'vi' ? 'en' : 'vi'}" aria-label="${s.otherLang}" class="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-ink/10 px-3 font-mono text-xs text-label-2 hover:border-teal hover:text-teal dark:border-white/10 dark:text-mist-2 dark:hover:border-teal-bright dark:hover:text-teal-bright">${s.otherLangShort}</a>
    </nav>
  </div>
</header>

<main id="main" class="mx-auto max-w-6xl px-4 sm:px-6 pb-24">
  <div class="border-b border-ink/[0.08] py-12 sm:py-16 dark:border-white/[0.08]">
    <div class="barcode mb-8 h-5 w-28 text-teal dark:text-teal-bright" aria-hidden="true"></div>
    <h1 class="text-[clamp(2.2rem,6vw,3.75rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-ink dark:text-mist">${doc.title}</h1>
    <p class="mt-4 text-lg text-label-2 dark:text-mist-2">Scan to Flow · iOS &amp; Android</p>
    <dl class="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-label-2 dark:text-mist-2">
      <div class="flex gap-2"><dt>${labels.effective}:</dt><dd class="text-ink dark:text-mist"><time datetime="${site.legalEffective}">${fmtDate(site.legalEffective, lang)}</time></dd></div>
      <div class="flex gap-2"><dt>${labels.updated}:</dt><dd class="text-ink dark:text-mist"><time datetime="${site.legalUpdated}">${fmtDate(site.legalUpdated, lang)}</time></dd></div>
    </dl>
  </div>

  <div class="grid gap-12 pt-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16">
    <nav aria-label="${labels.contents}" class="lg:sticky lg:top-24 lg:self-start">
      <details class="group rounded-2xl border border-ink/[0.08] bg-white p-4 dark:border-white/[0.08] dark:bg-ink-800 lg:border-0 lg:bg-transparent lg:p-0 lg:dark:bg-transparent" open>
        <summary class="cursor-pointer list-none font-mono text-xs uppercase tracking-[0.16em] text-teal dark:text-teal-bright lg:pointer-events-none">${labels.contents}</summary>
        <ol class="mt-4 flex flex-col gap-2 text-sm">
          ${doc.sections.map((sec) => `<li><a href="#${sec.id}" class="text-label-2 hover:text-teal dark:text-mist-2 dark:hover:text-teal-bright">${sec.title}</a></li>`).join('')}
        </ol>
      </details>
    </nav>

    <article class="legal max-w-[46rem] text-[1.0625rem] text-label-2 dark:text-mist-2">
      <aside class="rounded-3xl border border-teal/20 bg-teal-wash p-6 sm:p-8 dark:border-teal-bright/20 dark:bg-teal-night/50" aria-labelledby="summary">
        <p id="summary" class="font-mono text-xs uppercase tracking-[0.16em] text-teal dark:text-teal-bright">${doc.summaryTitle}</p>
        <ul class="mt-4 list-none pl-0 flex flex-col gap-3">
          ${doc.summary.map((x) => `<li class="flex gap-3 text-ink dark:text-mist"><span class="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-teal dark:bg-teal-bright" aria-hidden="true"></span><span>${x}</span></li>`).join('')}
        </ul>
      </aside>
      ${doc.sections.map((sec) => `<section id="${sec.id}" aria-labelledby="${sec.id}-h"><h2 id="${sec.id}-h">${sec.title}</h2>${sec.html}</section>`).join('\n')}
      <p class="mt-14"><a href="#main" class="font-mono text-sm">↑ ${labels.top}</a></p>
    </article>
  </div>
</main>
${footer({ lang, root, alternates, dark: false })}`;

  return {
    lang,
    path,
    alternates,
    title: `${doc.title} · Scan to Flow`,
    description: doc.description,
    theme: 'auto',
    body,
  };
}

export function notFound(base) {
  const body = `
<main id="main" class="relative isolate flex min-h-dvh flex-col items-center justify-center gap-8 overflow-hidden px-4 text-center">
  <div class="grid-bg absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_70%)]" aria-hidden="true"></div>
  <div class="viewfinder flex h-40 w-40 items-center justify-center rounded-2xl font-mono text-5xl font-semibold text-teal-bright">404</div>
  <h1 class="text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">No code found here.</h1>
  <p class="max-w-md text-mist-2">This page doesn’t exist. Không tìm thấy trang này.</p>
  <div class="flex flex-wrap justify-center gap-3">
    <a href="${base}" class="inline-flex h-12 items-center rounded-full bg-teal-bright px-6 font-semibold text-ink hover:bg-teal-soft">Home</a>
    <a href="${base}vi/" class="inline-flex h-12 items-center rounded-full border border-white/15 px-6 font-semibold text-mist hover:border-teal-bright/60" lang="vi">Trang chủ</a>
  </div>
  <p class="font-mono text-xs text-mist-3"><a class="hover:text-teal-bright" href="${base}privacy/">Privacy</a> · <a class="hover:text-teal-bright" href="${base}terms/">Terms</a></p>
</main>`;
  return {
    lang: 'en',
    path: '404.html',
    root: base,
    noindex: true,
    title: 'Page not found · Scan to Flow',
    description: 'This page does not exist.',
    theme: 'dark',
    body,
  };
}
