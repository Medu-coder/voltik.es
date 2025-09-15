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
- Metadatos básicos y GA4/GTM en `index.html`.
- Canonical: componente `src/app/seo/Canonical.tsx` que fija `<link rel="canonical">` usando `VITE_SITE_URL`.
- Robots: `public/robots.txt`.
- Sitemap: autogenerado por `scripts/generate-sitemap.mjs` en `prebuild` (usa `SITE_URL`).
- Vercel: `vercel.json` con `rewrites` a `index.html`, `framework: "vite"` e instalación con `npm ci`.

## Para agentes/IA
Consulta `AGENT.md` para una guía detallada de navegación del código, patrones y recetas (añadir páginas, posts, habilitar canales de contacto, etc.).
