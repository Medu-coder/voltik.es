// src/data/blogPosts.ts
export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
  image: string; // nueva propiedad para la foto de cabecera
  ctaLabel: string;
  ctaLink: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'instalacion-wallbox',
    title: 'Instalación de puntos de recarga para vehículos eléctricos: Guía completa 2025',
    subtitle: 'La guía definitiva para instalar tu punto de recarga',
    excerpt: 'Todo lo que necesitas saber sobre la instalación de wallbox en tu hogar o negocio…',
    content: `<p>Con el crecimiento de la movilidad eléctrica, disponer de un punto de recarga en casa o en tu negocio se ha convertido en una necesidad para ahorrar tiempo y dinero. En esta guía te explicamos todo lo que debes saber para instalar un wallbox en 2025, desde los requisitos legales hasta los pasos que debes seguir.</p>

<h2>¿Por qué instalar un wallbox en 2025?</h2>
<p>Instalar un punto de recarga privado te ofrece numerosas ventajas frente a la recarga pública. Entre ellas:</p>
<ul>
  <li><strong>Comodidad</strong>: recarga tu vehículo eléctrico mientras duermes o trabajas sin depender de estaciones públicas.</li>
  <li><strong>Ahorro</strong>: aprovéchate de tarifas nocturnas más económicas y reduce tu factura energética.</li>
  <li><strong>Rapidez</strong>: los cargadores de pared ofrecen una velocidad de recarga superior a la de un enchufe doméstico.</li>
  <li><strong>Seguridad</strong>: los equipos homologados protegen tu instalación eléctrica frente a sobrecargas y cortocircuitos.</li>
</ul>

<h2>Requisitos y permisos necesarios</h2>
<p>Antes de instalar un wallbox, debes tener en cuenta la normativa vigente:</p>
<ul>
  <li>Es recomendable contar con un boletín eléctrico actualizado que certifique que tu instalación puede soportar la potencia requerida.</li>
  <li>Si vives en una comunidad de propietarios, es necesario informar a la comunidad aunque no suele ser preciso pedir permiso.</li>
  <li>En instalaciones industriales o comerciales, puede ser necesario presentar un proyecto técnico visado por un ingeniero.</li>
</ul>

<h2>Proceso de instalación paso a paso</h2>
<p>Estos son los pasos generales que seguimos para instalar tu punto de recarga:</p>
<ol>
  <li><strong>Evaluación inicial</strong>: analizamos tu instalación eléctrica y definimos la mejor ubicación para el cargador.</li>
  <li><strong>Tramitación de permisos</strong>: gestionamos todos los trámites y nos aseguramos de que cumples con la normativa.</li>
  <li><strong>Instalación del equipo</strong>: nuestro equipo técnico instala el wallbox y los elementos de protección necesarios.</li>
  <li><strong>Puesta en marcha</strong>: probamos el sistema y te enseñamos a utilizar la aplicación de control.</li>
</ol>

<p>Recuerda que cada instalación es única y puede requerir ajustes adicionales. Por eso es importante contar con un instalador autorizado que te guíe durante todo el proceso.</p>

<h2>Conclusión</h2>
<p>La transición hacia la movilidad eléctrica es imparable y disponer de un punto de recarga privado te permitirá sacarle el máximo partido a tu vehículo. En Voltik te acompañamos desde la planificación hasta la puesta en marcha para que disfrutes de una recarga rápida, segura y económica.</p>`,
    date: '2025-01-15',
    readTime: '2 min',
    category: 'Movilidad Eléctrica',
    tags: ['wallbox', 'coche eléctrico'],
    featured: true,
    image: '/assets/blog/wallbox.jpg',
    ctaLabel: 'Solicita la instalación de tu punto de recarga',
    ctaLink: '/#contacto'
  },
  // añade más artículos aquí
];

export default blogPosts;