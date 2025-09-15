# Voltik Design System

Guía de tokens y utilidades de interfaz usados en la web de Voltik.

## Qué incluye hoy

- Tokens de diseño en CSS variables (colores, tipografía, espaciado, sombras, animaciones) en `src/index.css`.
- Mapeo de tokens a Tailwind en `tailwind.config.ts`.
- Utilidades de layout y componentes atómicos en `src/index.css` (clases `voltik-*`).
- Referencia de tokens base en `src/design-system/tokens.json` y `src/design-system/tokens.css`.

## Tokens principales (CSS variables)

Definidos en `:root` dentro de `src/index.css`:

- Marca: `--voltik-primary`, `--voltik-secondary`, `--voltik-text`, `--voltik-background`, `--voltik-neutral-*`, `--voltik-error`, `--voltik-success`, `--voltik-warning`, `--voltik-info`.
- Sistema: `--background`, `--foreground`, `--primary{,-foreground}`, `--secondary{,-foreground}`, `--muted{,-foreground}`, `--accent{,-foreground}`, `--destructive{,-foreground}`, `--card{,-foreground}`, `--popover{,-foreground}`, `--border`, `--input`, `--ring`, `--radius`.
- Tipografía: `--text-xs` … `--text-6xl`.
- Espaciado: `--space-1` … `--space-9`.
- Sombras: `--shadow-sm|md|lg|xl`.
- Transiciones: `--transition-fast|base|slow`.

Todos están mapeados en `tailwind.config.ts` para permitir utilidades como `bg-voltik-primary`, `text-foreground`, `p-space-4`, etc.

## Utilidades listas para usar

Definidas en `@layer components` de `src/index.css`:

- `voltik-container`: contenedor centrado con ancho máximo y padding responsivo.
- `voltik-section`: padding vertical estándar de sección.
- `voltik-card`: tarjeta con fondo, borde y sombras coherentes.
- `voltik-grid-{2,3,4}`: atajos de grids responsivos.
- `lead`: texto introductorio grande y legible.
- `hero-bg`: fondo degradado sutil para secciones hero.

Ejemplos:

```tsx
<section className="voltik-section">
  <div className="voltik-container">
    <div className="voltik-card">
      <h3 className="text-xl">Título</h3>
      <p className="text-muted-foreground">Contenido…</p>
    </div>
  </div>
  
  <div className="voltik-grid-3 mt-8">
    <div className="voltik-card">A</div>
    <div className="voltik-card">B</div>
    <div className="voltik-card">C</div>
  </div>
</section>
```

## Botones de marca

`src/components/ui/voltik-button.tsx` expone variantes coherentes con los tokens:

- Variantes: `primary`, `secondary`, `outline`, `ghost`, `voltik`, `emergency`.
- Tamaños: `sm`, `md` (por defecto), `lg`, `xl`.

```tsx
<VoltikButton variant="voltik" size="lg">Contactar</VoltikButton>
```

## Estructura actual

```
src/design-system/
├── tokens.json   # Referencia de tokens
├── tokens.css    # Variables CSS exportadas
└── README.md     # Esta guía
```

Nota: No usamos Storybook en este repo ni existe una carpeta `components/` dentro de `src/design-system/`.

## Accesibilidad y responsive

- Tipografía y escala responsiva definidas en `src/index.css` (via Tailwind utilities).
- Foco visible por defecto con `outline` y `ring`.
- Breakpoints estándar de Tailwind (`sm`, `md`, `lg`, `xl`, `2xl`).

## Mantenimiento

- Ajusta tokens en `src/index.css` y sincroniza si procede con `tailwind.config.ts`.
- Para nuevos patrones utilitarios, añade clases a `@layer components` en `src/index.css` para mantener consistencia.
