# Voltik Design System

Sistema de diseño completo para Voltik, empresa de instalaciones eléctricas en Córdoba.

## Filosofía de Diseño

### Valores de Marca
- **Cercanía**: Diseño humano y accesible
- **Fiabilidad**: Consistencia visual y funcional  
- **Agilidad**: Interfaces rápidas e intuitivas
- **Eficiencia digital**: Componentes optimizados

### Principios de Diseño
1. **Claridad**: Comunicación directa sin tecnicismos innecesarios
2. **Confianza**: Elementos visuales que transmiten profesionalidad
3. **Accesibilidad**: WCAG AA como estándar mínimo
4. **Responsive**: Mobile-first en todos los componentes

## Tokens de Diseño

### Colores

#### Paleta Principal (NO MODIFICABLE)
```css
--voltik-primary: hsl(75, 33%, 85%);     /* #DDE6D5 - Verde salvia */
--voltik-secondary: hsl(46, 71%, 86%);   /* #F4E7C1 - Crema cálido */
--voltik-text: hsl(0, 0%, 10%);          /* #1A1A1A - Negro suave */
--voltik-background: hsl(0, 0%, 100%);   /* #FFFFFF - Blanco */
--voltik-neutral-light: hsl(0, 0%, 99%); /* #FCFCFC - Blanco cálido */
--voltik-neutral-dark: hsl(0, 0%, 31%);  /* #4F4F4F - Gris medio */
--voltik-error: hsl(0, 43%, 70%);        /* #C97E7E - Rojo suave */
```

#### Uso de Colores
- **Primary**: Fondos destacados, CTAs secundarios
- **Secondary**: Acentos, fondos suaves  
- **Text**: Texto principal, CTAs primarios
- **Neutral-light**: Fondos de tarjetas, áreas suaves
- **Neutral-dark**: Texto secundario, iconos
- **Error**: Estados de error, validaciones

### Tipografía

#### Fuente Principal
```css
font-family: 'Manrope', sans-serif;
```

#### Escala Tipográfica
- **H1**: 3rem (48px) / 3.75rem (60px) responsive
- **H2**: 1.875rem (30px) / 2.25rem (36px) responsive  
- **H3**: 1.5rem (24px) / 1.875rem (30px) responsive
- **Body**: 1rem (16px) base
- **Lead**: 1.125rem (18px) / 1.25rem (20px) responsive
- **Small**: 0.875rem (14px)

### Espaciado (8pt Grid)

```css
--space-1: 0.25rem;  /* 4px  - Elementos muy próximos */
--space-2: 0.5rem;   /* 8px  - Separaciones mínimas */
--space-3: 1rem;     /* 16px - Espaciado estándar */
--space-4: 1.5rem;   /* 24px - Separaciones medias */
--space-5: 2rem;     /* 32px - Separaciones amplias */
--space-6: 3rem;     /* 48px - Secciones pequeñas */
--space-7: 4rem;     /* 64px - Secciones medianas */
--space-8: 6rem;     /* 96px - Secciones grandes */
--space-9: 8rem;     /* 128px - Separaciones máximas */
```

## Componentes

### Botones

#### Variantes Disponibles
```tsx
// Botón principal - Fondo oscuro, alta prominencia
<VoltikButton variant="primary">Pide presupuesto</VoltikButton>

// Botón secundario - Fondo claro, prominencia media
<VoltikButton variant="secondary">Más información</VoltikButton>

// Botón con borde - Solo contorno, prominencia baja
<VoltikButton variant="outline">Ver más</VoltikButton>

// Botón de marca - Gradiente especial de Voltik
<VoltikButton variant="voltik">Contactar ahora</VoltikButton>

// Botón de emergencia - Rojo animado para urgencias
<VoltikButton variant="emergency">Urgencias 24/7</VoltikButton>
```

#### Tamaños
```tsx
<VoltikButton size="sm">Pequeño</VoltikButton>      /* h-9 px-4 */
<VoltikButton size="md">Mediano</VoltikButton>      /* h-12 px-6 (default) */
<VoltikButton size="lg">Grande</VoltikButton>       /* h-14 px-8 */
<VoltikButton size="xl">Extra grande</VoltikButton> /* h-16 px-10 */
```

### Layout

#### Contenedores
```tsx
// Contenedor principal con padding responsivo
<div className="voltik-container">
  {/* Máximo 1536px, padding lateral automático */}
</div>

// Sección con padding vertical estándar
<section className="voltik-section">
  {/* py-12 md:py-16 lg:py-20 */}
</section>
```

#### Grids Responsivos
```tsx
// Grid de 2 columnas en tablets+
<div className="voltik-grid-2">

// Grid de 3 columnas en desktop
<div className="voltik-grid-3">

// Grid de 4 columnas en desktop
<div className="voltik-grid-4">
```

#### Tarjetas
```tsx
// Tarjeta estándar con sombra y hover
<div className="voltik-card">
  {/* bg-card rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg */}
</div>
```

### Estados y Interacciones

#### Estados de Botones
- **Default**: Estado base
- **Hover**: Cambio de color y elevación (transform: translateY(-1px))
- **Focus**: Ring de enfoque para accesibilidad
- **Disabled**: Opacidad 50%, pointer-events: none
- **Loading**: Spinner y texto "Enviando..."

#### Transiciones
```css
/* Transición rápida para hovers */
transition: var(--transition-fast);

/* Transición estándar para animaciones */
transition: var(--transition-base);

/* Transición lenta para animaciones complejas */
transition: var(--transition-slow);
```

## Accesibilidad

### Contraste
- Todos los colores cumplen WCAG AA (contraste mínimo 4.5:1)
- Botones principales cumplen WCAG AAA (contraste mínimo 7:1)

### Navegación por Teclado
- Todos los elementos interactivos son accesibles via Tab
- Focus visible con ring de color primario
- Skip links para navegación rápida

### ARIA y Semántica
- Labels descriptivos en formularios
- Roles ARIA apropiados
- Live regions para actualizaciones dinámicas

## Responsive Design

### Breakpoints
```css
sm: 640px   /* Tablet pequeña */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop pequeño */
xl: 1280px  /* Desktop */
2xl: 1536px /* Desktop grande */
```

### Enfoque Mobile-First
1. Diseño base para móvil (320px+)
2. Mejoras progresivas en breakpoints superiores
3. Tipografía fluida con clamp()
4. Imágenes responsivas con lazy loading

## Implementación

### CSS Variables
Todos los tokens están definidos como CSS custom properties:

```css
:root {
  /* Colores de marca */
  --voltik-primary: hsl(75, 33%, 85%);
  --voltik-secondary: hsl(46, 71%, 86%);
  
  /* Espaciado */
  --space-3: 1rem;
  --space-4: 1.5rem;
  
  /* Transiciones */
  --transition-fast: 0.15s ease;
}
```

### Tailwind Config
Integración completa con Tailwind CSS para utilidades:

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'voltik-primary': 'hsl(var(--voltik-primary))',
      'voltik-secondary': 'hsl(var(--voltik-secondary))',
    },
    spacing: {
      'space-3': 'var(--space-3)',
      'space-4': 'var(--space-4)',
    }
  }
}
```

### Uso en Componentes
```tsx
// Importar token JSON
import tokens from './tokens.json'

// Usar utilidades de Tailwind
<div className="bg-voltik-primary p-space-4">

// Usar CSS custom properties directamente  
<div style={{ backgroundColor: 'hsl(var(--voltik-primary))' }}>
```

## Estructura de Archivos

```
src/design-system/
├── tokens.json          # Tokens exportables (JSON)
├── tokens.css           # CSS custom properties
├── README.md            # Esta documentación
└── components/          # Componentes base
    ├── Button.tsx
    ├── Card.tsx
    └── Layout.tsx
```

## Integración con Storybook

### Configuración
```js
// .storybook/main.js
module.exports = {
  stories: ['../src/design-system/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-controls']
}
```

### Estructura de Stories
```
src/design-system/
├── stories/
│   ├── Colors.stories.tsx
│   ├── Typography.stories.tsx
│   ├── Spacing.stories.tsx
│   └── Components.stories.tsx
```

## Versionado

### Versionado Semántico
- **Major**: Cambios incompatibles (ej: eliminar componente)
- **Minor**: Nuevas funcionalidades compatibles (ej: nueva variante)  
- **Patch**: Correcciones y mejoras menores

### Changelog
Documentar todos los cambios en `CHANGELOG.md`:

```markdown
## [1.1.0] - 2025-01-20
### Added
- Variante `emergency` para botones de urgencia
- Componente `ContactForm` con validación

### Changed  
- Mejorado contraste en estado hover de botones
- Optimizada carga de fuentes Manrope

### Fixed
- Corregido foco en navegación móvil
```

## Exportación y Distribución

### Formatos Disponibles
1. **JSON**: `tokens.json` para herramientas de diseño
2. **CSS**: Variables nativas para web
3. **SCSS**: Variables Sass para proyectos legacy  
4. **JS**: Tokens como objetos JavaScript
5. **Sketch/Figma**: Paletas y estilos importables

### NPM Package (Futuro)
```bash
npm install @voltik/design-system
```

```tsx
import { VoltikButton, tokens } from '@voltik/design-system'
import '@voltik/design-system/dist/styles.css'
```

## Mantenimiento

### Auditorías Regulares
- **Accesibilidad**: Test automático con axe-core
- **Performance**: Lighthouse CI en cada commit
- **Visual**: Chromatic para regression testing
- **Contraste**: Herramientas automatizadas de color

### Actualizaciones
- Revisión trimestral de tokens y componentes
- Feedback continuo del equipo de desarrollo
- Análisis de uso con métricas reales
- Evolución basada en necesidades del negocio