#!/usr/bin/env node

/**
 * Script para convertir contenido de Notion a formato de blog
 * Uso: node scripts/notion-to-blog.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para convertir Markdown de Notion a HTML
function notionToHtml(markdown) {
  const lines = markdown.split('\n');
  const result = [];
  let inList = false;
  
  // Función para cerrar lista si está abierta
  const closeList = () => {
    if (inList) {
      result.push('</ul>');
      inList = false;
    }
  };
  
  // Función para abrir lista si no está abierta
  const openList = () => {
    if (!inList) {
      result.push('<ul>');
      inList = true;
    }
  };
  
  // Función para detectar si una línea es un encabezado con negritas
  const isBoldHeading = (line) => {
    const trimmed = line.trim();
    // Línea que empieza y termina con ** y no contiene texto largo (máximo 60 caracteres)
    return trimmed.match(/^\*\*(.+)\*\*\s*$/) && 
           trimmed.length <= 60;
  };
  
  // Función para detectar si una línea es una lista
  const isListItem = (line) => {
    return line.match(/^[\s]*[-*+] /) || line.match(/^[\s]*\d+\. /);
  };
  
  // Función para detectar si una línea es un encabezado con #
  const isHashHeading = (line) => {
    return line.match(/^#{1,3} /);
  };
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();
    
    // Líneas vacías - cerrar listas pero no añadir nada
    if (trimmedLine === '') {
      closeList();
      continue;
    }
    
    // Encabezados con #, ##, ###
    if (isHashHeading(line)) {
      closeList();
      const level = line.match(/^(#{1,3})/)[1].length;
      const text = line.replace(/^#{1,3} /, '');
      result.push(`<h${level}>${text}</h${level}>`);
    }
    // Encabezados con negritas (como "**Lo mejor**")
    else if (isBoldHeading(line)) {
      closeList();
      const headingText = trimmedLine.replace(/^\*\*(.*)\*\*\s*$/, '$1');
      result.push(`<h4><strong>${headingText}</strong></h4>`);
    }
    // Continuación de elementos de lista (líneas que empiezan con "(" u otro texto relacionado)
    else if (inList && result.length > 0 && /^<li>/.test(result[result.length - 1]) && trimmedLine.startsWith('(')) {
      // Añadir el texto al último elemento de la lista antes de cerrar </li>
      result[result.length - 1] = result[result.length - 1].replace(
        /<\/li>$/,
        ` ${trimmedLine}</li>`
      );
    }
    // Elementos de lista
    else if (isListItem(line)) {
      openList();
      const listText = line.replace(/^[\s]*[-*+] /, '').replace(/^[\s]*\d+\. /, '');
      result.push(`<li>${listText}</li>`);
    }
    // Párrafos normales
    else {
      closeList();
      result.push(`<p>${line}</p>`);
    }
  }
  
  // Cerrar lista si quedó abierta al final
  closeList();
  
  // Unir todo y aplicar formateo adicional
  let html = result.join('');
  
  // Convertir negritas, cursivas y enlaces
  html = html
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  
  return html;
}

function escapeTemplateLiteral(value) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
}

// Función para generar ID único
function generateId(title) {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Quitar acentos
    .replace(/[^a-z0-9\s-]/g, '') // Solo letras, números, espacios y guiones
    .replace(/\s+/g, '-') // Espacios a guiones
    .replace(/-+/g, '-') // Múltiples guiones a uno
    .replace(/^-|-$/g, ''); // Quitar guiones al inicio y final
}

// Función para estimar tiempo de lectura
function estimateReadTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min`;
}

// Función principal
function createBlogPost() {
  console.log('Generador de artículos desde Notion\n');
  
  // Datos del artículo (puedes modificar estos valores)
  const articleData = {
    title: 'Título del artículo',
    subtitle: 'Subtítulo descriptivo del artículo',
    excerpt: 'Resumen corto del artículo que aparecerá en la lista...',
    content: `# Título del artículo

Este es el contenido de tu artículo en formato Markdown de Notion.

## Sección 1

Puedes usar **negritas** y *cursivas*.

### Subsección

- Lista de elementos
- Otro elemento
- Tercer elemento

## Sección 2

Texto normal con párrafos separados.

**Conclusión:** Este es el final del artículo.`,
    category: 'Movilidad Eléctrica', // o ['Mercado Eléctrico', 'Precio de la luz'] para múltiples
    tags: ['tag1', 'tag2', 'tag3'],
    featured: false,
    imageName: 'nombre-imagen.jpg', // Nombre del archivo de imagen
    ctaLabel: 'Reduce tu factura de la luz',
    ctaLink: '/formulario'
  };
  
  // Generar datos automáticamente
  const id = generateId(articleData.title);
  const contentHtml = notionToHtml(articleData.content);
  const readTime = estimateReadTime(contentHtml);
  const safeContentHtml = escapeTemplateLiteral(contentHtml);
  const date = new Date().toISOString().split('T')[0]; // Fecha actual
  
  // Crear objeto del artículo
  const blogPost = {
    id,
    title: articleData.title,
    subtitle: articleData.subtitle,
    excerpt: articleData.excerpt,
    content: contentHtml,
    date,
    readTime,
    category: articleData.category,
    tags: articleData.tags,
    featured: articleData.featured,
    image: `/blog/${articleData.imageName}`,
    ctaLabel: articleData.ctaLabel,
    ctaLink: articleData.ctaLink
  };
  
  // Mostrar el resultado
  console.log('Artículo generado:');
  console.log('==================');
  console.log(`ID: ${id}`);
  console.log(`Título: ${articleData.title}`);
  console.log(`Categoría: ${articleData.category}`);
  console.log(`Tiempo de lectura: ${readTime}`);
  console.log(`Fecha: ${date}`);
  console.log('\nCódigo para añadir al blog:');
  console.log('==============================');
  
  // Función para formatear categoría (string o array)
  const formatCategory = (category) => {
    if (Array.isArray(category)) {
      return JSON.stringify(category);
    }
    return `'${category}'`;
  };

  // Generar código para copiar y pegar
  const codeToAdd = `{
  id: '${id}',
  title: '${articleData.title}',
  subtitle: '${articleData.subtitle}',
  excerpt: '${articleData.excerpt}',
  content: \`${safeContentHtml}\`,
  date: '${date}',
  readTime: '${readTime}',
  category: ${formatCategory(articleData.category)},
  tags: [${articleData.tags.map(tag => `'${tag}'`).join(', ')}],
  featured: ${articleData.featured},
  image: '/blog/${articleData.imageName}',
  ctaLabel: '${articleData.ctaLabel}',
  ctaLink: '${articleData.ctaLink}'
},`;
  
  console.log(codeToAdd);
  
  // Guardar en archivo temporal
  const tempFile = path.join(__dirname, '..', 'tmp', 'new-blog-post.js');
  fs.writeFileSync(tempFile, `// Artículo generado el ${new Date().toLocaleString()}\n\n${codeToAdd}`);
  
  console.log(`\nCódigo guardado en: ${tempFile}`);
  console.log('\nInstrucciones:');
  console.log('1. Copia el código de arriba');
  console.log('2. Abre el archivo src/features/blog/data/blogPosts.ts');
  console.log('3. Pega el código antes de la línea "// añade más artículos aquí"');
  console.log('4. Añade la imagen a la carpeta public/blog/');
  console.log('5. Listo! Tu artículo aparecerá en el blog');
}

// Ejecutar si se llama directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  createBlogPost();
}

export { notionToHtml, generateId, estimateReadTime, escapeTemplateLiteral };
