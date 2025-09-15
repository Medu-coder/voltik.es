# Voltik · Web corporativa

Sitio web de Voltik (instalaciones eléctricas en Córdoba) construido con Vite + React + TypeScript y Tailwind, con un pequeño Design System propio.

## Tecnologías
- Vite, React 18, TypeScript, React Router
- TanStack Query (React Query)
- Tailwind CSS + shadcn/ui (Radix)
- Design System: tokens y utilidades `voltik-*`
- Deploy: Vercel (SPA)

## Arquitectura
- Entrada HTML: `index.html`
- Bootstrap React: `src/main.tsx`
- Rutas y providers: `src/App.tsx` (incluye React Query, toasts, tooltips y `<Canonical />`)
- Páginas: `src/pages/home/Index.tsx`, `src/pages/services/Services.tsx`, `src/pages/blog/Blog.tsx`, `src/pages/blog/BlogArticle.tsx`, `src/pages/privacy/Privacy.tsx`, `src/pages/not-found/NotFound.tsx`
- Secciones Home: `src/features/home/sections/*`
- Layout: `src/components/layout/*` (Header, Footer)
- UI compartida: `src/components/ui/*` (incl. `voltik-button.tsx`)
- Datos Blog: `src/features/blog/data/blogPosts.ts` + imágenes en `public/blog/`
- Estilos y tokens: `src/index.css`, `src/design-system/*`, `tailwind.config.ts`
- SEO: `public/robots.txt`, `scripts/generate-sitemap.mjs` (genera `public/sitemap.xml` en build) y `<Canonical />` (`src/app/seo/Canonical.tsx`)

## Scripts
- `npm run dev`: servidor de desarrollo
- `npm run build`: genera sitemap y build de producción
- `npm run preview`: previsualización del build
- `npm run lint`: ESLint

## Flujo de la Home
- `src/pages/home/Index.tsx` compone: Hero, ProblemAgitation, Services, Values, Testimonials, ContactForm.
  - Anclajes internos: `/#servicios`, `/#valores`, `/#casos`, `/#contacto`.

## Blog
- Listado: `src/pages/blog/Blog.tsx` (búsqueda, categorías, destacados)
- Detalle: `src/pages/blog/BlogArticle.tsx` (obtiene el post por `id` y renderiza HTML del contenido)
- Fuente de posts: `src/features/blog/data/blogPosts.ts`
  - Campo `image` debe apuntar a `/blog/...` (colocar assets en `public/blog/`).
  - Al añadir un post nuevo, ejecutar `npm run build` para regenerar el sitemap.

## Formulario de contacto
- `src/features/home/sections/ContactForm.tsx`
  - Validación básica; envío a Google Forms (endpoint definido en el componente).
  - WhatsApp/teléfono/email están comentados o deshabilitados temporalmente; habilitar quitando comentarios y actualizando valores.

## Estilos y Design System
- Tokens CSS base y utilidades Voltik en `src/index.css` (clases `voltik-*`).
- Tokens de diseño y documentación en `src/design-system/*`.
- Configuración y mapeo a Tailwind en `tailwind.config.ts`.

## SEO y despliegue
- Metadatos base en `index.html` (OG/Twitter base, `lang=es`, `robots`, preconnect fonts) y JSON‑LD `LocalBusiness`.
- SEO per‑route: `src/app/seo/Seo.tsx` permite fijar `title`, `description`, `og:*`, `twitter:*`, `robots` y JSON‑LD por página. Está integrado en Servicios, Blog, BlogArticle, Privacidad y 404.
- Canonical: `src/app/seo/Canonical.tsx` mantiene `<link rel="canonical">` según la ruta y `VITE_SITE_URL`.
- Robots: `public/robots.txt`.
- Sitemap: autogenerado por `scripts/generate-sitemap.mjs` en `prebuild` (usa `SITE_URL`).
- Vercel: `vercel.json` con `rewrites` a `index.html`, `framework: "vite"` e instalación con `npm ci`.

## Analítica (GTM + GA4)
- Carga: solo Google Tag Manager en `index.html` (no se incluye GA4 directo). ID actual: `GTM-5R9ZBQFP`.
- Envío de pageviews en SPA: `src/app/analytics/RouteAnalytics.tsx` envía a `dataLayer` un evento `pageview` en cada cambio de ruta. El primer page_view lo deja para GTM (evita duplicados).
  - Payload enviado: `{ event: 'pageview', page_title, page_location, page_path }`.
- Integración recomendada en GTM:
  - Crear variables de Data Layer `page_title`, `page_location` y (opcional) `page_path`.
  - Crear un trigger de Custom Event `pageview`.
  - Crear etiqueta de GA4 (evento) `page_view` que use el trigger `pageview` y mapee los parámetros anteriores.
  - Si mantienes el page_view automático del Google tag, no habrá duplicados porque el primer page_view no lo emite el código (ver `RouteAnalytics.tsx`).

## Para agentes/IA
Consulta `AGENT.md` para una guía detallada de navegación del código, patrones y recetas (añadir páginas, posts, habilitar canales de contacto, etc.).
