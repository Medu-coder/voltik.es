# Plan de implementación – Rediseño landing Voltik.es

## 1. Contexto y metas
- Rediseñar la home como landing de conversión centrada en la recogida de facturas.
- Mantener paleta, tipografía y componentes existentes; evitar estilos duplicados.
- Dejar intactas páginas de blog, artículos y privacidad salvo metadatos.

## 2. Preparación
1. Revisar contenidos y clases reutilizables en `src/features/home/sections`, `src/index.css`, `src/components/layout`.
2. Revisar comportamiento del formulario actual (`ContactForm.tsx`) y su integración con Google Forms.
3. Verificar dependencias activas (`lucide-react`, `VoltikButton`, componentes tailwind) para reutilizarlas.

## 3. Metadatos y SEO
1. `index.html`: actualizar `<title>`, metas OG/Twitter y JSON-LD con "Voltik · Servicios de eficiencia energética" y nueva propuesta de valor.
2. `src/app/seo/Seo.tsx`: confirmar reutilización y ajustar defaults si es necesario.
3. Rutas (`Home`, `Servicios`, `Blog`, `BlogArticle`, `Privacy`, `404`): revisar llamadas a `<Seo>` para reflejar la nueva promesa de ahorro; mantener descripciones específicas donde aplique.

## 4. Layout general y navegación
1. `src/components/layout/Header.tsx`: actualizar menú a nuevas secciones (Hero, Problema, Proceso, Testimonios, Formulario) y CTA principal "Subir mi factura" → `#formulario`.
2. `src/components/layout/Footer.tsx`: ajustar claim, CTA y enlaces legales; añadir contacto alternativo (WhatsApp, Teléfono, Email) respetando estilos existentes.
3. `src/pages/home/Index.tsx`: reorganizar importaciones para la nueva secuencia de secciones y mantener scroll suave por hash.

## 5. Secciones principales Home
1. **Hero (`Hero.tsx`)**
   - Copy nuevo (H1/H2/CTA), iconografía de ahorro y ancla al formulario.
   - Incorporar breve lista de beneficios inmediatos reutilizando badges existentes.
2. **Problema + Solución (`ProblemAgitation.tsx` → renombrar/copiar contenido)**
   - Reemplazar narrativa actual con problema de factura alta, solución Voltik y CTA secundario.
3. **Formulario destacado (`ContactForm.tsx`)**
   - Simplificar campos a Nombre completo, Email, Teléfono, selector/placeholder para PDF (sin lógica de subida todavía).
   - Cambiar mensajes de validación y texto de privacidad.
   - Actualizar toast y pantalla de éxito: "¡Factura enviada! Te contactaremos en menos de 48h...".
   - Mantener integración con Google Forms pero revisar mapping de campos.
4. **Servicios secundarios**
   - Crear sección reutilizando componentes existentes (`voltik-card`) con dos tarjetas: Certificados y Boletines.
   - Cada tarjeta con CTA "Solicitar certificado/boletín" → `#formulario`.
5. **Proceso en 3 pasos**
   - Nuevo componente o refactor del bloque actual (`Services.tsx` o nuevo archivo).
   - Pasos: Subir factura → Análisis → Recibir oferta.
   - CTA "Subir factura ahora".
6. **Beneficios / Diferenciadores**
   - Reutilizar grid/valores para destacar Transparencia, Rapidez, Experiencia, Confianza.
7. **Testimonios**
   - Actualizar datos a escenarios: Hogar pequeño, Hogar familiar, Negocio comercial, Negocio industrial.
   - Adaptar carrusel existente.
8. **FAQs**
   - Evaluar componente acordeón existente (`@radix-ui/react-accordion` si ya usado) o reutilizar bloques.
   - Preguntas listadas en el brief, asegurando copy actualizado.
9. **Contacto alternativo**
   - Sección con botones reutilizando variantes de `VoltikButton` para WhatsApp, Teléfono, Email.

## 6. Estilos
1. Ajustar `src/index.css` únicamente si se necesitan utilidades nuevas (por ejemplo, badges específicos o fondo de secciones).
2. Verificar consistencia Mobile-first: revisar breakpoints `md` y `lg` ya definidos.
3. Comprobar contraste y accesibilidad (texto sobre fondos).

## 7. QA y validación
1. Ejecutar `npm run lint` para asegurar consistencia.
2. Navegar manualmente en local (mobile y desktop) comprobando anclas, CTAs, validaciones y toasts.
3. Confirmar que el formulario genera petición `fetch` sin errores en consola.
4. Revisar Lighthouse (opcional) para performance y accesibilidad básica.

## 8. Entregables finales
- Código refactorizado listo para revisión en PR.
- Notas sobre tareas pendientes futuras: implementación real de subida de PDF, ajustes de automatización de CRM, copy finales si Marketing requiere iteraciones.
