// scripts/generate-sitemap.mjs
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

// ------- Config -------
const ROOT = process.cwd();
const SITE_URL = process.env.SITE_URL || 'https://voltik.es';
const BLOG_TS = path.join(ROOT, 'src', 'data', 'blogPosts.ts');
const OUT_DIR = path.join(ROOT, 'public');
const OUT_FILE = path.join(OUT_DIR, 'sitemap.xml');

// Rutas "reales" rastreables (no ponemos anchors #... porque Google los ignora)
const STATIC_ROUTES = [
  '/',        // Home
  '/blog',    // Listado blog
  // si mañana creas páginas "reales" (no secciones por hash), añádelas aquí:
  // '/servicios', '/valores', '/casos-de-exito', etc.
];

// ------- Utils -------
const today = () => new Date().toISOString().slice(0, 10);

function gitLastModFor(fileRelative) {
  try {
    const out = execSync(`git log -1 --format=%cs -- "${fileRelative}"`, { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();
    // %cs -> YYYY-MM-DD
    return out || today();
  } catch {
    return today();
  }
}

// Extrae ids y (opcional) date de cada post desde blogPosts.ts con regex robusta
function parseBlogPosts(tsText) {
  // Captura objetos con id y, si existe, date
  // Busca: id: 'mi-slug'  ...  date: 'YYYY-MM-DD'
  const postBlocks = tsText.split(/}\s*,?\s*{\s*/g); // particiona objetos de array
  const posts = [];

  for (const block of postBlocks) {
    const idMatch = block.match(/id\s*:\s*['"]([^'"]+)['"]/);
    if (!idMatch) continue;

    const id = idMatch[1];
    const dateMatch = block.match(/date\s*:\s*['"](20\d{2}-\d{2}-\d{2})['"]/); // opcional
    const lastmod = dateMatch ? dateMatch[1] : today();
    posts.push({ id, lastmod });
  }
  return posts;
}

function xmlEscape(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
}

function buildXml(urls) {
  const items = urls.map(u => `
  <url>
    <loc>${xmlEscape(u.loc)}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- sitemap.xml generado automáticamente en build -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</urlset>
`;
}

function main() {
  // 1) Asegura public/
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // 2) Rutas estáticas con lastmod desde git si es posible
  const staticUrls = STATIC_ROUTES.map(route => {
    // Heurística para lastmod de cada página estática (puedes ajustar)
    // Home: usa src/pages/Index.tsx; Blog: src/pages/Blog.tsx, etc.
    let probe = 'src/pages/Index.tsx';
    if (route === '/blog') probe = 'src/pages/Blog.tsx';

    return {
      loc: `${SITE_URL}${route}`,
      lastmod: gitLastModFor(probe),
      changefreq: route === '/' ? 'weekly' : 'weekly',
      priority: route === '/' ? '1.0' : '0.9'
    };
  });

  // 3) Rutas dinámicas del blog desde blogPosts.ts
  const tsText = fs.readFileSync(BLOG_TS, 'utf8');
  const posts = parseBlogPosts(tsText);
  const blogUrls = posts.map(p => ({
    loc: `${SITE_URL}/blog/${p.id}`,
    lastmod: p.lastmod,
    changefreq: 'monthly',
    priority: '0.8'
  }));

  // 4) Monta el XML final
  const urls = [...staticUrls, ...blogUrls];
  const xml = buildXml(urls);
  fs.writeFileSync(OUT_FILE, xml, 'utf8');
  console.log(`sitemap.xml generado con ${urls.length} URLs → ${path.relative(ROOT, OUT_FILE)}`);
}

main();