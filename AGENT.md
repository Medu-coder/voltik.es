# AGENT: Guía para navegar y extender el código de Voltik

Este archivo está diseñado para que un agente de IA (o cualquier desarrollador) entienda rápidamente cómo está construida la web, dónde están las piezas clave y cómo realizar cambios sin romper nada.

## Resumen del proyecto
- Framework: Vite + React 18 + TypeScript + React Router
- Datos remotos/caché: TanStack Query (React Query)
- Estilos: Tailwind CSS con tokens de diseño propios (sistema Voltik)
- UI: shadcn/ui (Radix) + componentes personalizados `VoltikButton` y utilidades `voltik-*`
- Datos: Artículos de blog en `src/features/blog/data/blogPosts.ts` y assets en `public/blog`
- SEO: `public/robots.txt`, JSON‑LD `LocalBusiness` en `index.html` y sitemap generado en build
- Deploy: Vercel (SPA con rewrites)

## Entradas y arranque
- HTML raíz: `index.html`
  - Metadatos SEO base (OG/Twitter), `lang=es`, JSON‑LD LocalBusiness y solo GTM (sin GA4 directo).
- Punto de entrada JS: `src/main.tsx`
  - Monta React y envuelve con `BrowserRouter`.
- App + rutas: `src/App.tsx`
  - Proveedores: React Query (`QueryClientProvider`), tooltips, toasts y `<Canonical />`.
  - Rutas declaradas: `/`, `/servicios`, `/blog`, `/blog/:id`, `/privacidad`, y catch-all `*`.

## Rutas y páginas
- Home: `src/pages/home/Index.tsx`
  - Secciones: Hero, ProblemAgitation, Services, Values, Testimonials, ContactForm.
  - Gestiona anchors con `useLocation` para scroll suave.
- Servicios: `src/pages/services/Services.tsx`
  - Página de detalle de servicios (viviendas, negocios, urgencias), proceso y FAQ.
- Blog (listado): `src/pages/blog/Blog.tsx`
  - Filtro por texto/categoría, destacados, tarjetas y CTA.
- Blog (detalle): `src/pages/blog/BlogArticle.tsx`
  - Busca el post por `id` en `blogPosts`. Render con `dangerouslySetInnerHTML`.
- Privacidad: `src/pages/privacy/Privacy.tsx`
- 404: `src/pages/not-found/NotFound.tsx`

## Datos del blog
- Fuente de artículos: `src/features/blog/data/blogPosts.ts`
  - Tipo `BlogPost` y array con posts.
  - Imágenes colocadas en `public/blog/*` y referenciadas por ruta absoluta (ej. `/blog/wallbox.jpg`).
  - El campo `content` es HTML listo para inyectar.

### Añadir un nuevo artículo
1) Copia una imagen de cabecera en `public/blog/`.
2) Añade un objeto al array en `src/features/blog/data/blogPosts.ts` con:
   - `id`, `title`, `subtitle`, `excerpt`, `content` (HTML), `date` (`YYYY-MM-DD`), `readTime`, `category`, `tags`, `featured?`, `image`, `ctaLabel`, `ctaLink`.
3) Ejecuta `npm run build` para regenerar `public/sitemap.xml` (ver “Sitemap”).

## Layout y secciones
- Cabecera: `src/components/layout/Header.tsx`
  - Menú responsive, anclas a secciones y CTA principal.
- Pie: `src/components/layout/Footer.tsx`
  - Información de contacto, enlaces y CTA final.
- Secciones Home:
  - Hero: `src/features/home/sections/Hero.tsx`
  - Problema/Agitación: `src/features/home/sections/ProblemAgitation.tsx`
  - Servicios: `src/features/home/sections/Services.tsx`
  - Valores: `src/features/home/sections/Values.tsx`
  - Testimonios: `src/features/home/sections/Testimonials.tsx`
  - Formulario contacto: `src/features/home/sections/ContactForm.tsx`

## UI y utilidades
- Botón de marca: `src/components/ui/voltik-button.tsx`
  - Variantes: `primary`, `secondary`, `outline`, `ghost`, `voltik`, `emergency`.
- Utilidad de clases: `src/lib/utils.ts` (`cn` con tailwind-merge)
- Toaster y tooltip: en `src/components/ui/*` (shadcn)

## Diseño y estilos
- Tokens + utilidades: `src/index.css`
  - Define CSS custom properties de marca (`--voltik-*`) y mapea a Tailwind (`--primary`, etc.).
  - Utilidades `voltik-container`, `voltik-section`, `voltik-card`, `voltik-grid-*`, `lead`, `hero-bg`.
- Config Tailwind: `tailwind.config.ts`
  - Extiende colores/tipografía, anima acordeón, y escanea `./src/**/*.{ts,tsx}`.
- Design System docs/tokens:
  - `src/design-system/README.md` (guía)
  - `src/design-system/tokens.json` (fuente de verdad)
  - `src/design-system/tokens.css` (variables listas para CSS)

## Formulario de contacto
- Componente: `src/features/home/sections/ContactForm.tsx`
  - Validación básica (nombre, email, teléfono español, servicio y mensaje).
  - Envío vía `fetch` a Google Forms (endpoint en el archivo).
  - Estados: `isSubmitting`, `submitted`, notificaciones con `useToast`.
  - Algunos canales (teléfono/WhatsApp/email) están comentados o “temporalmente deshabilitados”. Habilítalos retirando comentarios y actualizando números/URLs.

## SEO y analítica
- Metas base: `index.html` (title, description, OG/Twitter y favicon) + JSON‑LD `LocalBusiness`.
- SEO per‑route: `src/app/seo/Seo.tsx` para title/description/OG/Twitter/robots/JSON‑LD por página.
- Canonical: `src/app/seo/Canonical.tsx` fija `<link rel="canonical">` usando `VITE_SITE_URL`.
- Robots: `public/robots.txt`
- Sitemap:
  - Generador: `scripts/generate-sitemap.mjs`
  - Hook: se ejecuta en `prebuild` y produce `public/sitemap.xml`.
  - Incluye: `/`, `/servicios`, `/blog`, `/privacidad` + `/blog/:id` a partir de `blogPosts.ts`.
- Analytics (GTM + GA4 mediante GTM):
  - SPA pageviews desde `src/app/analytics/RouteAnalytics.tsx` → `dataLayer` `{ event: 'pageview', page_title, page_location, page_path }`.
  - El primer page_view lo envía GTM (se evita duplicado en el código).
  - Configurar en GTM una etiqueta GA4 de evento `page_view` con trigger Custom Event `pageview`.

## Build y despliegue
- Scripts (`package.json`):
  - `dev` (Vite), `prebuild` (sitemap), `build` (Vite), `preview`, `lint`.
- Vercel: `vercel.json` (SPA, rewrite a `index.html`).
- Config Vite: `vite.config.ts` (alias `@` a `src/`, server `:8080`).

## Convenciones y patrones
- Alias de imports: usa `@/` para rutas relativas a `src/`.
- Prefijo de utilidades CSS personalizadas: clases `voltik-*` en `src/index.css`.
- Componentes React en español y enfocados a UX de servicios.
- Accesibilidad: foco visible, roles y etiquetas; contrastes base en tokens.

## Tareas comunes (recetas)

1) Crear una nueva página y ruta
   - Crea `src/pages/Nueva.tsx`.
   - Añade `<Route path="/nueva" element={<Nueva />} />` en `src/App.tsx`.
   - Enlaza desde `Header`/`Footer` si procede.

2) Añadir un nuevo bloque/CTA en Home
   - Crea un componente en `src/features/home/sections/`.
   - Impórtalo y colócalo en `src/pages/home/Index.tsx` dentro del `<main>`.

3) Añadir un componente UI compartido
   - Crea en `src/components/ui/` y reutiliza `cn` y `tailwind`.
   - Mantén variantes con `class-variance-authority` si aplica (ver `voltik-button`).

4) Actualizar tokens de diseño
   - Cambia `src/design-system/tokens.json` y sincroniza si necesitas exportar a CSS (`tokens.css`) o a Tailwind (`src/index.css` y `tailwind.config.ts`).

5) Habilitar WhatsApp/teléfono/email reales
   - En `Header`, `Footer` y `ContactForm`, descomenta bloques marcados y actualiza valores.

## Puntos de atención
- `BlogArticle` usa `dangerouslySetInnerHTML`: el contenido debe ser HTML de confianza (interno).
- Si cambias rutas del blog o estructura, ajusta `scripts/generate-sitemap.mjs`.
- GA4/GTM: revisa IDs reales en `index.html` antes de producción.
- `public/sitemap.xml` se sobreescribe en cada build.

## Árbol de carpetas (alto nivel)

```
src/
  App.tsx              # Rutas + providers
  main.tsx             # Entrada React
  index.css            # Tokens + utilidades Voltik y Tailwind
  assets/              # Imágenes internas
  components/
    layout/            # Header, Footer
    ui/                # shadcn + UI de marca (VoltikButton)
  features/
    home/
      sections/        # Bloques de la Home y Contacto
    blog/
      data/
        blogPosts.ts   # Array de artículos
  hooks/               # use-toast, use-mobile
  lib/                 # utils (cn)
  pages/
    home/              # Index
    services/          # Services
    blog/              # Blog, BlogArticle
    privacy/           # Privacy
    not-found/         # NotFound
public/
  blog/                # Imágenes de artículos
  robots.txt           # Robots
  sitemap.xml          # Generado en build
scripts/
  generate-sitemap.mjs # Generador de sitemap
```

Con esto, un agente de IA puede localizar rápidamente los puntos de extensión, entender el flujo de renderizado y modificar/añadir contenido sin ambigüedades.
