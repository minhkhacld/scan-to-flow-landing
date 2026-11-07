// Checks that every internal href/src in dist/*.html resolves to a file in dist/.
// Run after `npm run build`.
import { readdir, readFile, stat } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { BASE_PATH } from '../site.config.mjs';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const walk = async (d) => (await Promise.all((await readdir(d, { withFileTypes: true })).map((e) => (e.isDirectory() ? walk(join(d, e.name)) : join(d, e.name))))).flat();
const exists = async (p) => stat(p).then((s) => (s.isDirectory() ? stat(join(p, 'index.html')).then(() => true, () => false) : true), () => false);

let bad = 0;
let checked = 0;
for (const file of (await walk(dist)).filter((f) => f.endsWith('.html'))) {
  const html = await readFile(file, 'utf8');
  const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g), ...html.matchAll(/srcset="([^"]+)"/g)].flatMap((m) =>
    m[0].startsWith('srcset') ? m[1].split(',').map((s) => s.trim().split(' ')[0]) : [m[1]]
  );
  for (const ref of refs) {
    if (/^(https?:|mailto:|#|data:)/.test(ref)) continue;
    const path = ref.split('#')[0].split('?')[0];
    if (!path) continue;
    const target = path.startsWith('/')
      ? path.startsWith(BASE_PATH) ? join(dist, path.slice(BASE_PATH.length)) : null
      : join(dirname(file), path);
    checked++;
    if (!target || !(await exists(target))) {
      bad++;
      console.error(`✗ ${relative(dist, file)} → ${ref}`);
    }
  }
}
console.log(`${checked} internal links checked, ${bad} broken.`);
process.exit(bad ? 1 : 0);
