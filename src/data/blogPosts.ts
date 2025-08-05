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
    image: '/blog/wallbox.jpg',
    ctaLabel: 'Solicita información sobre tu punto de recarga',
    ctaLink: '/#contacto'
  },
  {
  id: 'bicicletas-electricas-y-ahorro-energia',
  title: 'Bicicletas eléctricas: ahorro energético sobre ruedas',
  subtitle: 'Descubre por qué las e-bikes son clave en la movilidad sostenible urbana',
  excerpt: 'Las bicicletas eléctricas consumen menos energía, reducen emisiones y agilizan los trayectos urbanos.',
  content: `<p>Las bicicletas eléctricas, conocidas también como e-bikes, están transformando la manera en que nos desplazamos por la ciudad. Más eficientes energéticamente que los vehículos tradicionales, permiten recorrer más kilómetros con mucho menos impacto ambiental. Pero ¿qué tan eficientes son realmente, y cómo pueden formar parte de un estilo de vida más sostenible?</p>

<h2>¿Por qué las bicicletas eléctricas son energéticamente eficientes?</h2>
<p>Una bicicleta eléctrica consume, en promedio, entre 1 y 1,5 kWh por cada 100 kilómetros recorridos. Para tener una idea, eso es menos energía que la que usa una tostadora en 20 minutos. Frente a los coches particulares —que requieren entre 15 y 20 kWh para la misma distancia— la diferencia es abismal.</p>
<ul>
  <li><strong>Baja demanda energética:</strong> los motores eléctricos de las e-bikes suelen tener potencias limitadas (250W en la mayoría de modelos urbanos), lo que reduce su consumo.</li>
  <li><strong>Recarga sencilla:</strong> las baterías se recargan en casa o en el trabajo, usando una toma de corriente estándar.</li>
  <li><strong>Sin emisiones directas:</strong> al no depender de combustibles fósiles, ayudan a reducir la huella de carbono urbana.</li>
</ul>

<h2>Ventajas frente a otros medios de transporte</h2>
<p>Además de la eficiencia energética, las bicicletas eléctricas ofrecen ventajas prácticas cotidianas. No requieren combustible, ni seguro obligatorio, y los costes de mantenimiento son mínimos si se comparan con los de un automóvil.</p>
<ol>
  <li><strong>Agilidad urbana:</strong> se evitan atascos y se accede fácilmente a zonas peatonales o restringidas.</li>
  <li><strong>Economía:</strong> recargar la batería cuesta apenas unos céntimos de euro.</li>
  <li><strong>Salud y bienestar:</strong> el pedaleo asistido permite hacer ejercicio sin agotarse.</li>
</ol>
<p>Muchas ciudades han comenzado a incentivar su uso con subvenciones y carriles específicos, consolidando a la bicicleta eléctrica como uno de los medios de transporte del futuro inmediato.</p>

<h2>Ahorra energía y contribuye al cambio desde hoy</h2>
<p>Integrar una e-bike en el día a día no solo reduce el gasto en transporte, sino que también contribuye a alcanzar metas como las del Plan Nacional Integrado de Energía y Clima, que impulsa el uso de medios eléctricos no contaminantes.</p>
<p>Algunas recomendaciones para maximizar el ahorro con tu bicicleta eléctrica:</p>
<ul>
  <li>Usar el modo de asistencia más bajo posible en tramos fáciles.</li>
  <li>Mantener la presión adecuada en los neumáticos.</li>
  <li>Optimizar la ruta para evitar desniveles innecesarios.</li>
</ul>

<h2>Conclusión</h2>
<p>Las bicicletas eléctricas combinan eficiencia energética, movilidad sostenible y ahorro cotidiano. Si estás buscando una forma inteligente de moverte por la ciudad, reducir tu impacto ambiental y mejorar tu salud, este es el momento perfecto para dar el salto sobre dos ruedas.</p>
<p><strong>¿Quieres asesoramiento sobre cómo integrar soluciones eléctricas eficientes como las bicicletas eléctricas en tu día a día o negocio?</strong> Ponte en contacto con nosotros. Desde Voltik te ayudamos a dar el primer paso hacia una movilidad más sostenible.</p>`,
  date: '2024-06-04',
  readTime: '4 min',
  category: 'Movilidad Eléctrica',
  tags: ['bicicletas eléctricas', 'eficiencia energética', 'movilidad urbana'],
  featured: false,
  image: '/blog/bicicletas-electricas-y-ahorro-energia_image.png',
  ctaLabel: 'Consulta cómo pasarte a la movilidad eléctrica',
  ctaLink: '/#contacto'
},
  // añade más artículos aquí
];

export default blogPosts;