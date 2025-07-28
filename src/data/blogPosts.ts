// src/data/blogPosts.ts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
  image: string; // nueva propiedad para la foto de cabecera
}

const blogPosts: BlogPost[] = [
  {
    id: 'instalacion-wallbox',
    title: 'Instalación de puntos de recarga para vehículos eléctricos: Guía completa 2025',
    excerpt: 'Todo lo que necesitas saber sobre la instalación de wallbox en tu hogar o negocio…',
    content: `Contenido completo del artículo. Se pueden usar etiquetas HTML básicas como <p>, <h2>, <ul>, etc.`,
    date: '2025-01-15',
    readTime: '8 min',
    category: 'Movilidad Eléctrica',
    tags: ['wallbox', 'coche eléctrico'],
    featured: true,
    image: '/assets/blog/wallbox.jpg'
  },
  // añade más artículos aquí
];

export default blogPosts;