# Sistema de Importación de Artículos desde Notion

Este sistema te permite crear artículos para tu blog de forma súper sencilla escribiendo en Notion y importándolos automáticamente.

## Métodos Disponibles

### **Método 1: Importación Automática (Recomendado)**

**Paso 1:** Copia la plantilla de Notion
```bash
# Abre el archivo de plantilla
open scripts/Notion/notion-template.md
```

**Paso 2:** Crea tu artículo en Notion
- Copia la plantilla en Notion
- Rellena los metadatos (título, subtítulo, etc.)
- Escribe tu contenido usando el formato de Notion

**Paso 3:** Importa automáticamente
```bash
# Ejecuta el importador automático
node scripts/Notion/auto-import-blog.mjs
```

**Paso 4:** Sigue las instrucciones
- El script te creará un archivo temporal
- Copia tu contenido de Notion al archivo
- Ejecuta el script nuevamente
- ¡Listo! Tu artículo se añadirá automáticamente

### **Método 2: Generación Manual**

**Paso 1:** Ejecuta el generador
```bash
node scripts/notion-to-blog.mjs
```

**Paso 2:** Modifica los datos en el script
- Abre `scripts/notion-to-blog.mjs`
- Cambia los valores en `articleData`
- Ejecuta el script

**Paso 3:** Copia el código generado
- El script te mostrará el código para copiar
- Pégalo en `src/features/blog/data/blogPosts.ts`

## Formato de Notion Soportado

### **Elementos Soportados:**
- **Encabezados:** `# ## ###`
- **Negritas:** `**texto**`
- **Cursivas:** `*texto*`
- **Listas:** `- elemento`
- **Párrafos:** Separados por líneas en blanco

### **Metadatos Requeridos:**
```markdown
**Título:** [Título del artículo]
**Subtítulo:** [Subtítulo descriptivo]
**Excerpt:** [Resumen corto]
**Categoría:** [Movilidad Eléctrica / Energía Solar / Eficiencia Energética]
**Tags:** [tag1, tag2, tag3]
**Destacado:** [Sí / No]
**Imagen:** [nombre-archivo.jpg]
**CTA Label:** [Texto del botón]
**CTA Link:** [/formulario / /formulario-sec]
```

## Ejemplo Completo

### En Notion:
```markdown
**Título:** Paneles solares en 2025: Guía completa
**Subtítulo:** Todo lo que necesitas saber sobre energía solar residencial
**Excerpt:** Descubre las ventajas, costes y proceso de instalación de paneles solares en tu hogar.
**Categoría:** Energía Solar
**Tags:** [paneles-solares, energía-renovable, ahorro-energético]
**Destacado:** Sí
**Imagen:** paneles-solares-2025.jpg
**CTA Label:** Solicitar presupuesto
**CTA Link:** /formulario

---

## 📝 Contenido del Artículo

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
```

### Resultado en el Blog:
- ID generado automáticamente: `paneles-solares-2025-guia-completa`
- HTML convertido automáticamente
- Tiempo de lectura calculado: `3 min`
- Fecha actual añadida
- Código listo para copiar y pegar

## Archivos del Sistema

- `scripts/Notion/notion-template.md` - Plantilla para Notion
- `scripts/Notion/notion-to-blog.mjs` - Generador manual
- `scripts/Notion/auto-import-blog.mjs` - Importador automático
- `scripts/Notion/README-notion-blog.md` - Esta documentación

## Solución de Problemas

### Error: "No se encontró el punto de inserción"
- Verifica que el archivo `blogPosts.ts` tenga la línea `// añade más artículos aquí`

### Error: "Faltan metadatos requeridos"
- Asegúrate de incluir todos los metadatos en tu contenido de Notion
- Usa el formato exacto: `**Campo:** valor`

### Error: "No se puede leer el archivo"
- Verifica que el archivo temporal `tmp/notion-content.txt` exista
- Asegúrate de que el contenido esté en el formato correcto

## Consejos

1. **Usa la plantilla:** Siempre empieza con la plantilla para evitar errores
2. **Revisa los metadatos:** Asegúrate de que todos los campos estén completos
3. **Prueba primero:** Usa el método manual para probar antes del automático
4. **Imágenes:** Añade las imágenes a `public/blog/` después de importar

## ¡Listo!

Con este sistema puedes crear artículos de forma súper rápida:
1. Escribes en Notion (formato familiar)
2. Copias y pegas
3. Ejecutas un comando
4. ¡Tu artículo aparece en el blog!

¿Necesitas ayuda? Revisa los ejemplos o ejecuta los scripts para ver las instrucciones paso a paso.
