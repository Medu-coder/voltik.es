// scripts/generate-sitemap.mjs
import fs from 'node:fs';
import path from 'path';
import { execSync } from 'node:child_process';

// ------- Config -------
const ROOT = process.cwd();
const SITE_URL = process.env.SITE_URL || 'https://voltik.es';
const BLOG_TS = path.join(ROOT, 'src', 'features', 'blog', 'data', 'blogPosts.ts');
const APP_TSX = path.join(ROOT, 'src', 'App.tsx');
const OUT_DIR = path.join(ROOT, 'public');
const OUT_FILE = path.join(OUT_DIR, 'sitemap.xml');

// Rutas que NO queremos en el sitemap (404, catch-all, etc.)
const EXCLUDED_ROUTES = ['*', 'not-found', '404'];

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

// Escanea App.tsx para extraer rutas automáticamente
function extractRoutesFromApp() {
  try {
    const appContent = fs.readFileSync(APP_TSX, 'utf8');
    
    // Busca patrones de rutas: path="/ruta" o path="/:param"
    const routeMatches = appContent.match(/path=["']([^"']+)["']/g) || [];
    
    const routes = routeMatches
      .map(match => {
        // Extrae la ruta del match: path="/ruta" -> "/ruta"
        const route = match.match(/path=["']([^"']+)["']/)[1];
        return route;
      })
      .filter(route => {
        // Filtra rutas que queremos excluir
        return !EXCLUDED_ROUTES.some(excluded => 
          route.includes(excluded) || route.startsWith(':') || route.includes(':')
        );
      })
      .sort(); // Ordena alfabéticamente
    
    console.log(`Rutas detectadas automáticamente: ${routes.join(', ')}`);
    return routes;
  } catch (error) {
    console.warn('No se pudo escanear App.tsx, usando rutas por defecto:', error.message);
    // Fallback a rutas conocidas
    return ['/', '/servicios', '/como-funciona', '/formulario', '/formulario-sec', '/blog', '/privacidad'];
  }
}

// Mapea rutas a archivos para detectar fechas de modificación
function getFileForRoute(route) {
  const routeToFile = {
    '/': 'src/pages/home/Index.tsx',
    '/servicios': 'src/pages/services/Services.tsx',
    '/como-funciona': 'src/pages/como-funciona/ComoFunciona.tsx',
    '/formulario': 'src/pages/formulario/Formulario.tsx',
    '/formulario-sec': 'src/pages/formulario-sec/FormularioSec.tsx',
    '/blog': 'src/pages/blog/Blog.tsx',
    '/privacidad': 'src/pages/privacy/Privacy.tsx',
  };
  
  return routeToFile[route] || 'src/App.tsx'; // Fallback a App.tsx
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

  // 2) Escanea App.tsx para obtener rutas automáticamente
  const staticRoutes = extractRoutesFromApp();
  
  // 3) Genera URLs estáticas con lastmod desde git
  const staticUrls = staticRoutes.map(route => {
    const filePath = getFileForRoute(route);
    
    return {
      loc: `${SITE_URL}${route}`,
      lastmod: gitLastModFor(filePath),
      changefreq: route === '/' ? 'weekly' : 'weekly',
      priority: route === '/' ? '1.0' : '0.9'
    };
  });

  // 4) Rutas dinámicas del blog desde blogPosts.ts
  const tsText = fs.readFileSync(BLOG_TS, 'utf8');
  const posts = parseBlogPosts(tsText);
  const blogUrls = posts.map(p => ({
    loc: `${SITE_URL}/blog/${p.id}`,
    lastmod: p.lastmod,
    changefreq: 'monthly',
    priority: '0.8'
  }));

  // 5) Monta el XML final
  const urls = [...staticUrls, ...blogUrls];
  const xml = buildXml(urls);
  fs.writeFileSync(OUT_FILE, xml, 'utf8');
  console.log(`sitemap.xml generado automáticamente con ${urls.length} URLs → ${path.relative(ROOT, OUT_FILE)}`);
  console.log(`- ${staticUrls.length} páginas estáticas`);
  console.log(`- ${blogUrls.length} artículos del blog`);
}

main();
