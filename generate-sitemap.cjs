// generate-sitemap.cjs
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream, readFileSync } = require('fs');

const baseUrl = 'https://voltik.es';

const staticRoutes = [
  '',      // Home
  'blog',  // Listado de blog
];

let blogSlugs = [];
try {
  blogSlugs = JSON.parse(readFileSync('./blog-slugs.json', 'utf-8'));
} catch {
  console.warn('No se encontraron slugs de blog');
}

const sitemap = new SitemapStream({ hostname: baseUrl });

[...staticRoutes, ...blogSlugs.map(slug => `blog/${slug}`)].forEach(route => {
  sitemap.write({ url: `/${route}`, changefreq: 'weekly', priority: 0.7 });
});
sitemap.end();

streamToPromise(sitemap)
  .then(data => {
    createWriteStream('./public/sitemap.xml').write(data.toString());
    console.log('Sitemap generado');
  })
  .catch(console.error);