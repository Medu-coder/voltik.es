# Plantilla de Artículo para Notion → Blog Voltik

## Metadatos del Artículo

**Título:** [Escribe aquí el título del artículo]
**Subtítulo:** [Escribe aquí el subtítulo descriptivo]
**Excerpt:** [Resumen corto de 1-2 líneas que aparecerá en la lista del blog]
**Categoría:** Movilidad Eléctrica  // Para una sola categoría
// o
**Categoría:** Mercado Eléctrico, Precio de la luz  // Para múltiples categorías (separadas por comas)
**Tags:** [tag1, tag2, tag3]
**Destacado:** [Sí / No]
**Imagen:** [nombre-del-archivo.jpg]
**CTA Label:** [Texto del botón de llamada a la acción]
**CTA Link:** [/formulario / /formulario-sec]

---

## Contenido del Artículo

[Escribe aquí todo el contenido de tu artículo usando el formato de Notion]

### Ejemplo de estructura:

# Título Principal del Artículo

Introducción del artículo. Puedes usar **negritas** y *cursivas*.

## Sección 1

Contenido de la primera sección.

### Subsección

- Lista de elementos
- Otro elemento
- Tercer elemento

## Sección 2

Más contenido con párrafos separados.

**Conclusión:** Final del artículo con llamada a la acción.

---

## Instrucciones de Uso

1. **Copia esta plantilla** en Notion
2. **Rellena los metadatos** en la parte superior
3. **Escribe tu contenido** usando el formato de Notion
4. **Copia todo el contenido** (incluyendo metadatos)
5. **Ejecuta el script:** `node scripts/notion-to-blog.mjs`
6. **Modifica los datos** en el script con tu contenido
7. **Copia el código generado** al archivo `blogPosts.ts`
8. **Añade la imagen** a la carpeta `public/blog/`

## Formato de Notion Soportado

✅ **Encabezados:** # ## ###
✅ **Negritas:** **texto**
✅ **Cursivas:** *texto*
✅ **Listas:** - elemento
✅ **Párrafos:** Separados por líneas en blanco

## Categorías Múltiples

✅ **Una categoría:** `**Categoría:** Movilidad Eléctrica`
✅ **Múltiples categorías:** `**Categoría:** Mercado Eléctrico, Precio de la luz`
- Separa las categorías con comas
- Los espacios se eliminan automáticamente
- Se generará un array: `['Mercado Eléctrico', 'Precio de la luz']`

## Ejemplo Completo

**Título:** Paneles solares en 2025: Guía completa
**Subtítulo:** Todo lo que necesitas saber sobre energía solar residencial
**Excerpt:** Descubre las ventajas, costes y proceso de instalación de paneles solares en tu hogar.
**Categoría:** Energía Solar, Eficiencia Energética
**Tags:** [paneles-solares, energía-renovable, ahorro-energético]
**Destacado:** Sí
**Imagen:** paneles-solares-2025.jpg
**CTA Label:** Solicitar presupuesto
**CTA Link:** /formulario

---

# Paneles solares en 2025: Guía completa

La energía solar se ha convertido en una de las opciones más rentables para reducir la factura eléctrica.

## ¿Por qué instalar paneles solares en 2025?

Los precios de los paneles solares han bajado significativamente.

### Ventajas principales

- **Ahorro económico:** Reduce tu factura hasta un 70%
- **Sostenibilidad:** Energía 100% renovable
- **Independencia:** Menos dependencia de la red eléctrica

## Proceso de instalación

El proceso incluye varios pasos importantes.

**Conclusión:** Los paneles solares son una inversión inteligente para 2025.
