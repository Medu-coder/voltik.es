# AGENTS.md

Guia breve para agentes/IA para navegar el repo con rapidez.

## Arranque rapido
- Dev server: `npm run dev`
- Build prod: `npm run build` (incluye sitemap)
- Preview build: `npm run preview`
- Lint: `npm run lint`

## Mapa del proyecto
- Entrada HTML: `index.html`
- Bootstrap React: `src/main.tsx`
- App y rutas: `src/App.tsx`
- Paginas:
  - Home: `src/pages/home/Index.tsx`
  - Servicios: `src/pages/services/Services.tsx`
  - Como funciona: `src/pages/como-funciona/ComoFunciona.tsx`
  - Blog listado: `src/pages/blog/Blog.tsx`
  - Blog detalle: `src/pages/blog/BlogArticle.tsx`
  - Privacy: `src/pages/privacy/Privacy.tsx`
  - Formularios: `src/pages/formulario/Formulario.tsx`, `src/pages/formulario-sec/FormularioSec.tsx`
  - Landing: `src/pages/landing-prapartments/LandingPrapartments.tsx`
  - Not found: `src/pages/not-found/NotFound.tsx`
- Layout: `src/components/layout/*`
- Formularios UI: `src/components/forms/*`
- UI compartida (shadcn): `src/components/ui/*`
- Hooks: `src/hooks/*`
- Design system y tokens: `src/design-system/*`, `src/index.css`, `tailwind.config.ts`
- Assets: `src/assets/*`, `public/*` (blog en `public/blog/*`)

## SEO y sitemap
- SEO por ruta: `src/app/seo/Seo.tsx`
- Canonical: `src/app/seo/Canonical.tsx`
- Analytics SPA: `src/app/analytics/RouteAnalytics.tsx`
- Sitemap: `scripts/generate-sitemap.mjs` (usa `SITE_URL`)
- Prerender: `scripts/prerender.mjs`

## Rutas y anchors
- Home anchors: `/#servicios`, `/#valores`, `/#casos`, `/#contacto` (ver `src/pages/home/Index.tsx`)
- CTA formularios: `src/pages/formulario/Formulario.tsx`, `src/pages/formulario-sec/FormularioSec.tsx`

## Blog
- Datos: `src/features/blog/data/blogPosts.ts`
- Imagenes: `public/blog/*` (el campo `image` debe apuntar a `/blog/...`)

## Formularios
- Contacto principal: `src/components/forms/ContactForm.tsx`
- Secundario: `src/components/forms/SecondaryContactForm.tsx`
- Logica: `src/hooks/use-contact-form.tsx`, `src/hooks/use-secondary-contact-form.tsx`

## Scripts
- Sitemap: `scripts/generate-sitemap.mjs`
- Prerender: `scripts/prerender.mjs`
- Notion: `scripts/notion/*` (si aplica a sincronizacion/inputs)
- Temporales: `scripts/tmp/*` (solo soporte interno)

## Design system y estilos
- Tokens base y utilidades: `src/index.css` (clases `voltik-*`)
- Documentacion DS: `src/design-system/README.md`
- Tokens DS: `src/design-system/tokens.json`, `src/design-system/tokens.css`
- Tailwind: `tailwind.config.ts`

## Convenciones rapidas
- Paginas nuevas: crear en `src/pages/<ruta>/` y registrar en `src/App.tsx`.
- Secciones Home: `src/features/home/sections/*`.
- Tokens: usar clases `voltik-*` definidas en `src/index.css`.
