// Local preview of dist/ under the same base path as GitHub Pages.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { BASE_PATH } from '../site.config.mjs';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const port = Number(process.env.PORT) || 4173;
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.webp': 'image/webp', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain',
};

createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (url.pathname === '/') return res.writeHead(302, { Location: BASE_PATH }).end();
  let rel = url.pathname.startsWith(BASE_PATH) ? url.pathname.slice(BASE_PATH.length) : null;
  if (rel === null) return send404(res);
  let file = normalize(join(dist, decodeURIComponent(rel)));
  if (!file.startsWith(dist)) return send404(res);
  try {
    if ((await stat(file)).isDirectory()) {
      if (!url.pathname.endsWith('/')) return res.writeHead(301, { Location: url.pathname + '/' }).end();
      file = join(file, 'index.html');
    }
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' }).end(body);
  } catch {
    send404(res);
  }
}).listen(port, () => console.log(`Preview: http://localhost:${port}${BASE_PATH}`));

async function send404(res) {
  res.writeHead(404, { 'Content-Type': types['.html'] }).end(await readFile(join(dist, '404.html')));
}
