// extract-blog-slugs.js
const fs = require('fs');
const path = require('path');

// Cambia esta ruta si tu blogPosts está en otro sitio
const BLOG_POSTS_PATH = path.resolve(__dirname, 'src/data/blogPosts.ts');
const OUTPUT_JSON = path.resolve(__dirname, 'blog-slugs.json');

const content = fs.readFileSync(BLOG_POSTS_PATH, 'utf-8');

// Busca todos los id: 'lo-que-sea'
const regex = /id:\s*['"]([^'"]+)['"]/g;
const slugs = [];
let match;
while ((match = regex.exec(content)) !== null) {
  slugs.push(match[1]);
}

fs.writeFileSync(OUTPUT_JSON, JSON.stringify(slugs, null, 2));
console.log('✅ blog-slugs.json generado con', slugs.length, 'slugs');