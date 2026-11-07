// Renders every page to dist/, copies public/, writes sitemap.xml and robots.txt.
// Tailwind runs afterwards (npm run build:css) and writes dist/assets/styles.css.
import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_URL, BASE_PATH, site } from '../site.config.mjs';
import { document } from '../src/layout.mjs';
import { home } from '../src/pages/home.mjs';
import { legal, notFound } from '../src/pages/legal.mjs';
import { privacy } from '../src/content/privacy.mjs';
import { terms } from '../src/content/terms.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

const pages = [
  home('en'),
  home('vi'),
  legal('privacy', 'en', privacy.en),
  legal('privacy', 'vi', privacy.vi),
  legal('terms', 'en', terms.en),
  legal('terms', 'vi', terms.vi),
];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(join(root, 'public'), dist, { recursive: true });

const write = async (rel, html) => {
  const file = join(dist, rel);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
};

for (const page of pages) await write(join(page.path, 'index.html'), document(page));
await write('404.html', document(notFound(BASE_PATH)));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (p) => `  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <lastmod>${site.legalUpdated}</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}${p.alternates.en}"/>
    <xhtml:link rel="alternate" hreflang="vi" href="${SITE_URL}${p.alternates.vi}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${p.alternates.en}"/>
  </url>`
  )
  .join('\n')}
</urlset>
`;
await write('sitemap.xml', sitemap);
await write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}sitemap.xml\n`);
// GitHub Pages: serve files as-is, without Jekyll.
await write('.nojekyll', '');

console.log(`Built ${pages.length + 1} pages into dist/ for ${SITE_URL}`);
