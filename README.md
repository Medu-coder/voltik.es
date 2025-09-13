# Voltik · Web corporativa

Sitio web de Voltik (instalaciones eléctricas en Córdoba) construido con Vite + React + TypeScript y Tailwind, con un pequeño Design System propio.

## Tecnologías
- Vite, React 18, TypeScript, React Router
- Tailwind CSS + shadcn/ui (Radix)
- Design System: tokens y utilidades `voltik-*`
- Deploy: Vercel (SPA)

## Arquitectura
- Entrada HTML: `index.html`
- Bootstrap React: `src/main.tsx`
- Rutas y providers: `src/App.tsx`
- Páginas: `src/pages/*` (Home, Blog, BlogArticle, Privacy, 404)
- Secciones Home: `src/components/sections/*`
- Layout: `src/components/layout/*` (Header, Footer)
- UI compartida: `src/components/ui/*` (incl. `voltik-button.tsx`)
- Datos Blog: `src/data/blogPosts.ts` + imágenes en `public/blog/`
- Estilos y tokens: `src/index.css`, `src/design-system/*`, `tailwind.config.ts`
- SEO: `public/robots.txt` y `scripts/generate-sitemap.mjs` (genera `public/sitemap.xml` en build)

## Scripts
- `npm run dev`: servidor de desarrollo
- `npm run build`: genera sitemap y build de producción
- `npm run preview`: previsualización del build
- `npm run lint`: ESLint

## Flujo de la Home
- `src/pages/Index.tsx` compone: Hero, ProblemAgitation, Services, Values, Testimonials, ContactForm.
- Anclajes internos: `/#servicios`, `/#valores`, `/#casos`, `/#contacto`.

## Blog
- Listado: `src/pages/Blog.tsx` (búsqueda, categorías, destacados)
- Detalle: `src/pages/BlogArticle.tsx` (obtiene el post por `id` y renderiza HTML del contenido)
- Fuente de posts: `src/data/blogPosts.ts`
  - Campo `image` debe apuntar a `/blog/...` (colocar assets en `public/blog/`).
  - Al añadir un post nuevo, ejecutar `npm run build` para regenerar el sitemap.

## Formulario de contacto
- `src/components/sections/ContactForm.tsx`
  - Validación básica; envío a Google Forms (endpoint definido en el componente).
  - WhatsApp/teléfono/email están comentados o deshabilitados temporalmente; habilitar quitando comentarios y actualizando valores.

## Estilos y Design System
- Tokens CSS base y utilidades Voltik en `src/index.css` (clases `voltik-*`).
- Tokens de diseño y documentación en `src/design-system/*`.
- Configuración y mapeo a Tailwind en `tailwind.config.ts`.

## SEO y despliegue
- Metadatos básicos y GA4/GTM en `index.html`.
- Robots: `public/robots.txt`.
- Sitemap: autogenerado por `scripts/generate-sitemap.mjs` en `prebuild`.
- Vercel: `vercel.json` (SPA rewrite a `index.html`).

## Para agentes/IA
Consulta `AGENT.md` para una guía detallada de navegación del código, patrones y recetas (añadir páginas, posts, habilitar canales de contacto, etc.).
