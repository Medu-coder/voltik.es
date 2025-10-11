# Voltik · Web corporativa

Sitio web de Voltik construido con Vite + React + TypeScript y Tailwind, con un Design System propio.

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
- UI compartida: `src/components/ui/*` (incl. `voltik-button.tsx`, `ReCaptcha.tsx`)
- Hooks personalizados: `src/hooks/*` (incl. `use-file-upload.tsx`)
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
  - **Funcionalidades implementadas:**
    - Validación de datos básicos (nombre, email, teléfono)
    - Subida de archivos PDF con validación (máximo 10MB)
    - Integración con reCAPTCHA v3 (solo cuando hay archivo)
    - Envío dual: Google Forms (fallback) + Backend API
  - **Flujo de usuario:**
    1. Completar datos básicos
    2. Seleccionar archivo PDF (opcional)
    3. Si hay archivo → completar reCAPTCHA
    4. Enviar formulario → datos van a ambos destinos

## Estilos y Design System
- Tokens CSS base y utilidades Voltik en `src/index.css` (clases `voltik-*`).
- Tokens de diseño y documentación en `src/design-system/*`.
- Configuración y mapeo a Tailwind en `tailwind.config.ts`.

## SEO y despliegue
- **Metadatos optimizados** en `index.html` (OG/Twitter, `lang=es`, `robots`, preconnect fonts) y JSON‑LD `ProfessionalService` completo.
- **SEO per‑route**: `src/app/seo/Seo.tsx` permite fijar `title`, `description`, `og:*`, `twitter:*`, `robots` y JSON‑LD por página. Integrado en todas las páginas.
- **Canonical**: `src/app/seo/Canonical.tsx` mantiene `<link rel="canonical">` según la ruta y `VITE_SITE_URL`.
- **Robots**: `public/robots.txt` optimizado con crawl delays y directivas específicas.
- **Sitemap**: autogenerado por `scripts/generate-sitemap.mjs` en `prebuild` con prioridades optimizadas (usa `SITE_URL`).
- **Vercel**: `vercel.json` con `rewrites` a `index.html`, `framework: "vite"` e instalación con `npm ci`.

### Optimizaciones SEO implementadas
- **Schema Markup**: ProfessionalService, FAQPage, Service, Organization+Review, BreadcrumbList, OfferCatalog
- **Core Web Vitals**: LCP, FID, CLS optimizados con preloading, code splitting y lazy loading
- **Performance**: Bundle splitting inteligente, assets inline, lazy loading de componentes
- **Mobile-First**: Responsive design, touch targets, viewport optimizado
- **Accesibilidad**: ARIA labels, skip links, navegación por teclado
- **Keywords**: Integración estratégica de palabras clave en títulos, descripciones y contenido
- **Enlaces**: 15+ enlaces internos optimizados + 5 enlaces externos a autoridades del sector

## Configuración de reCAPTCHA
- **Script**: Cargado en `index.html` con la clave de sitio
- **Componente**: `src/components/ui/ReCaptcha.tsx` (reCAPTCHA v3)
- **Configuración**: Solo se ejecuta cuando el usuario hace clic en "Verificar"

## Analítica (GTM + GA4)
- Carga: solo Google Tag Manager en `index.html` (no se incluye GA4 directo)
- Envío de pageviews en SPA: `src/app/analytics/RouteAnalytics.tsx` envía a `dataLayer` un evento `pageview` en cada cambio de ruta
