# Rutina de despliegue en Vercel (Voltik)

Este proyecto es una SPA con Vite + React y enrutado con `react-router-dom`. Se despliega en Vercel como sitio estático con reescritura a `index.html`. El `sitemap.xml` se genera en build a partir de las rutas de la app y de los posts del blog definidos en `src/data/blogPosts.ts`.

## Configuración del Proyecto en Vercel

- Framework: Other (Vite)
- Install Command: (por defecto) `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`
- `vercel.json`:
  - `rewrites`: `/(.*) -> /index.html` (SPA)
  - Los ficheros estáticos como `/robots.txt` y `/sitemap.xml` se sirven directamente si existen en `dist/`.

## Generación del sitemap

- Script: `scripts/generate-sitemap.mjs`
  - Se ejecuta automáticamente en `prebuild` (ver `package.json`).
  - Escribe `public/sitemap.xml`, que Vite copiará a `dist/` en el build.
  - Fuentes de datos:
    - Rutas estáticas: `/, /blog, /privacidad` (ajústalas en el array `STATIC_ROUTES` si añades páginas reales nuevas).
    - Rutas dinámicas de blog: se extraen de `src/data/blogPosts.ts` (campo `id`).
  - `lastmod`: intenta obtener la fecha del último commit con `git log` por fichero; si no, usa la fecha actual.

### ¿Es necesario el script?

Sí, es recomendable para mantener el `sitemap.xml` sincronizado con las páginas reales y los slugs del blog sin tener que editarlo a mano. Alternativas:

- Mantener un `sitemap.xml` manual: viable pero propenso a errores y olvidos.
- Generación dinámica (serverless): posible con una función en `api/`, pero innecesario en este proyecto estático y complica el despliegue.

## Variables de entorno

- `SITE_URL`: dominio canónico de producción, por ejemplo `https://voltik.es`.
  - El script usa `SITE_URL` si está definida; si no, por defecto `https://voltik.es`.
  - Recomendación: definir `SITE_URL` en el Environment “Production” de Vercel.
- Opcional (previews): `VERCEL_ENV` y `VERCEL_URL` están disponibles en Vercel.
  - Si no quieres publicar sitemaps con dominio de producción en previsualizaciones, puedes condicionar el prebuild (ver “Buenas prácticas” más abajo).

## Flujo de despliegue (Git → Vercel)

1) Push a `main` (o a la rama conectada en Vercel).
2) Vercel clona el repo y ejecuta:
   - `npm install`
   - `npm run prebuild` → genera `public/sitemap.xml`
   - `npm run build` → construye a `dist/` y copia `public/*` (robots, sitemap, etc.)
3) Vercel sirve `dist/` en producción con la reescritura a `index.html`.

## Checklist al añadir nuevas páginas/posts

- Página nueva “real” (no sección con `#anchor`):
  - Añade la ruta en el router (`src/App.tsx`).
  - Añade la ruta en `STATIC_ROUTES` del script si debe indexarse.
  - Incluye meta tags/SEO si procede.
- Post del blog:
  - Añade un objeto en `src/data/blogPosts.ts` con `id` (slug), `date` y demás campos.
  - El sitemap se actualizará automáticamente en el siguiente build.

## SEO y verificación

- `robots.txt` ya referencia `Sitemap: https://voltik.es/sitemap.xml`.
- Una vez en producción, añade y verifica el dominio en Google Search Console y Bing Webmaster Tools y envía el sitemap una sola vez. Los bots lo re‑consultarán automáticamente.

## Limpieza de redundancias adoptadas

- `public/sitemap.xml` no se versiona (lo genera el build). Añadido a `.gitignore`.
- Eliminada la dependencia no utilizada `sitemap` del `package.json`.
- Nota: el fichero `CNAME` no lo usa Vercel; puedes mantenerlo si te sirve para otros despliegues, o eliminarlo si sólo usas Vercel.

## Buenas prácticas opcionales

- Condicionar el prebuild en previews:
  - Si prefieres no generar sitemap en entornos no productivos, cambia el script de `prebuild` a:
    ```sh
    # package.json
    "prebuild": "node -e \"process.exit(process.env.VERCEL_ENV==='production'?0:0)\" && node scripts/generate-sitemap.mjs"
    ```
    O bien usa un pequeño wrapper que sólo ejecute el generador cuando `VERCEL_ENV=production`.
- Canonical/meta por ruta: las páginas de blog se beneficiarían de `<title>`, `meta description`, `og:*` dinámicos por artículo.

---

Ante cualquier cambio de arquitectura (p. ej., pasar a SSR con Next.js), la generación del sitemap puede moverse a una ruta serverless y hacerse dinámica, pero para esta SPA estática el flujo anterior es simple, fiable y suficiente.

