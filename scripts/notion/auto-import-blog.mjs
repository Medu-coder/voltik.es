#!/usr/bin/env node

/**
 * Herramienta de importación automática desde Notion
 * Uso: node scripts/auto-import-blog.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { notionToHtml, generateId, estimateReadTime } from './notion-to-blog.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para extraer metadatos del contenido de Notion
function extractMetadata(content) {
  const lines = content.split('\n');
  const metadata = {};
  
  for (const line of lines) {
    if (line.startsWith('**Título:**')) {
      metadata.title = line.replace('**Título:**', '').trim();
    } else if (line.startsWith('**Subtítulo:**')) {
      metadata.subtitle = line.replace('**Subtítulo:**', '').trim();
    } else if (line.startsWith('**Excerpt:**')) {
      metadata.excerpt = line.replace('**Excerpt:**', '').trim();
    } else if (line.startsWith('**Categoría:**')) {
      metadata.category = line.replace('**Categoría:**', '').trim();
    } else if (line.startsWith('**Tags:**')) {
      const tagsStr = line.replace('**Tags:**', '').trim();
      metadata.tags = tagsStr.split(',').map(tag => tag.trim().replace(/[\[\]]/g, ''));
    } else if (line.startsWith('**Destacado:**')) {
      const destacado = line.replace('**Destacado:**', '').trim().toLowerCase();
      metadata.featured = destacado === 'sí' || destacado === 'si' || destacado === 'yes';
    } else if (line.startsWith('**Imagen:**')) {
      metadata.imageName = line.replace('**Imagen:**', '').trim();
    } else if (line.startsWith('**CTA Label:**')) {
      metadata.ctaLabel = line.replace('**CTA Label:**', '').trim();
    } else if (line.startsWith('**CTA Link:**')) {
      metadata.ctaLink = line.replace('**CTA Link:**', '').trim();
    }
  }
  
  return metadata;
}

// Función para extraer el contenido del artículo
function extractContent(content) {
  const lines = content.split('\n');
  let contentStart = false;
  let articleContent = [];
  
  for (const line of lines) {
    if (line.startsWith('---') && contentStart) {
      break; // Fin del contenido
    }
    if (line.startsWith('## Contenido del Artículo')) {
      contentStart = true;
      continue;
    }
    if (contentStart && !line.startsWith('**') && !line.startsWith('---') && line.trim() !== '') {
      articleContent.push(line);
    }
  }
  
  return articleContent.join('\n').trim();
}

// Función para añadir artículo al archivo blogPosts.ts
function addToBlogPosts(blogPost) {
  const blogPostsPath = path.join(__dirname, '..', '..', 'src', 'features', 'blog', 'data', 'blogPosts.ts');
  
  try {
    let content = fs.readFileSync(blogPostsPath, 'utf8');
    
    // Encontrar la línea "// añade más artículos aquí"
    const insertPoint = content.indexOf('// añade más artículos aquí');
    
    if (insertPoint === -1) {
      throw new Error('No se encontró el punto de inserción en blogPosts.ts');
    }
    
    // Generar el código del artículo
    const articleCode = `{
  id: '${blogPost.id}',
  title: '${blogPost.title}',
  subtitle: '${blogPost.subtitle}',
  excerpt: '${blogPost.excerpt}',
  content: \`${blogPost.content.replace(/`/g, '\\`')}\`,
  date: '${blogPost.date}',
  readTime: '${blogPost.readTime}',
  category: '${blogPost.category}',
  tags: [${blogPost.tags.map(tag => `'${tag}'`).join(', ')}],
  featured: ${blogPost.featured},
  image: '${blogPost.image}',
  ctaLabel: '${blogPost.ctaLabel}',
  ctaLink: '${blogPost.ctaLink}'
},`;
    
    // Insertar el artículo
    const newContent = content.slice(0, insertPoint) + articleCode + '\n' + content.slice(insertPoint);
    
    // Escribir el archivo actualizado
    fs.writeFileSync(blogPostsPath, newContent);
    console.log('Artículo añadido al blog exitosamente');
    
    return true;
  } catch (error) {
    console.error('Error al añadir el artículo:', error.message);
    return false;
  }
}

// Función principal
function importFromNotion() {
  console.log('Importador automático desde Notion\n');
  
  // Leer el contenido desde un archivo temporal
  const tempFile = path.join(__dirname, '..', 'tmp', 'notion-content.txt');
  
  if (!fs.existsSync(tempFile)) {
    console.log('Creando archivo temporal...');
    console.log('Por favor, copia tu contenido de Notion en: tmp/notion-content.txt');
    
    // Crear directorio tmp si no existe
    const tmpDir = path.join(__dirname, '..', 'tmp');
    if (!fs.existsSync(tmpDir)) {
      fs.mkdirSync(tmpDir, { recursive: true });
    }
    
    // Crear archivo de ejemplo
    const exampleContent = `**Título:** Mi nuevo artículo
**Subtítulo:** Descripción del artículo
**Excerpt:** Resumen corto del artículo
**Categoría:** Movilidad Eléctrica
**Tags:** [tag1, tag2, tag3]
**Destacado:** No
**Imagen:** mi-articulo.jpg
**CTA Label:** Reduce tu factura
**CTA Link:** /formulario

---

## 📝 Contenido del Artículo

# Mi nuevo artículo

Este es el contenido de mi artículo.

## Sección 1

Contenido de la sección.

**Conclusión:** Final del artículo.`;
    
    fs.writeFileSync(tempFile, exampleContent);
    console.log(`Archivo de ejemplo creado: ${tempFile}`);
    console.log('\nInstrucciones:');
    console.log('1. Abre el archivo tmp/notion-content.txt');
    console.log('2. Reemplaza el contenido con tu artículo de Notion');
    console.log('3. Ejecuta este script nuevamente');
    return;
  }
  
  try {
    const notionContent = fs.readFileSync(tempFile, 'utf8');
    
    // Extraer metadatos y contenido
    const metadata = extractMetadata(notionContent);
    const articleContent = extractContent(notionContent);
    
    const htmlContent = notionToHtml(articleContent);
    
    // Validar metadatos requeridos
    const required = ['title', 'subtitle', 'excerpt', 'category', 'tags', 'imageName', 'ctaLabel', 'ctaLink'];
    const missing = required.filter(field => !metadata[field]);
    
    if (missing.length > 0) {
      console.error('Faltan metadatos requeridos:', missing.join(', '));
      return;
    }
    
    // Generar datos del artículo
    const blogPost = {
      id: generateId(metadata.title),
      title: metadata.title,
      subtitle: metadata.subtitle,
      excerpt: metadata.excerpt,
      content: htmlContent,
      date: new Date().toISOString().split('T')[0],
      readTime: estimateReadTime(articleContent),
      category: metadata.category,
      tags: metadata.tags,
      featured: metadata.featured || false,
      image: `/blog/${metadata.imageName}`,
      ctaLabel: metadata.ctaLabel,
      ctaLink: metadata.ctaLink
    };
    
    console.log('Artículo procesado:');
    console.log(`   Título: ${blogPost.title}`);
    console.log(`   ID: ${blogPost.id}`);
    console.log(`   Categoría: ${blogPost.category}`);
    console.log(`   Tiempo de lectura: ${blogPost.readTime}`);
    
    // Añadir al blog
    if (addToBlogPosts(blogPost)) {
      console.log('\nArtículo importado exitosamente!');
      console.log('\nPróximos pasos:');
      console.log('1. Añade la imagen a public/blog/');
      console.log('2. Ejecuta el proyecto para ver el resultado');
      console.log('3. Opcional: elimina el archivo temporal tmp/notion-content.txt');
    }
    
  } catch (error) {
    console.error('Error al procesar el contenido:', error.message);
  }
}

// Ejecutar si se llama directamente
if (process.argv[1] && process.argv[1].endsWith('auto-import-blog.mjs')) {
  importFromNotion();
}

export { extractMetadata, extractContent, addToBlogPosts };
