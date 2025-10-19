// src/data/blogPosts.ts
export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string | string[];
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
    content: `<p>Con el crecimiento de la movilidad eléctrica, disponer de un punto de recarga en casa o en tu negocio se ha convertido en una necesidad para ahorrar tiempo y dinero. En esta guía te explicamos todo lo que debes saber para instalar un wallbox en 2025, desde los requisitos legales hasta los pasos que debes seguir.</p>

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
    tags: ['wallbox', 'coche-eléctrico'],
    featured: false,
    image: '/blog/wallbox.jpg',
    ctaLabel: 'Reduce tu factura de la luz',
    ctaLink: '/formulario'
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
  tags: ['bicicleta-eléctrica', 'eficiencia-energética', 'movilidad-urbana'],
  featured: false,
  image: '/blog/bicicletas-electricas-y-ahorro-energia_image.png',
  ctaLabel: 'Reduce tu factura de la luz',
  ctaLink: '/formulario'
},
{
  id: 'bici-electrica-vs-convencional-que-conviene-mas',
  title: 'Bicicleta eléctrica vs convencional: ¿qué conviene más?',
  subtitle: 'Ventajas, consumo y cuándo elegir cada tipo según tu estilo de vida',
  excerpt: 'Comparamos bicicletas eléctricas y tradicionales para ayudarte a elegir la mejor opción según tu uso y consumo.',
  content: `<p>Las bicicletas eléctricas han dejado de ser una rareza en las ciudades y poco a poco están ganando terreno como medio de transporte eficiente, económico y sostenible. Frente a ellas, las bicicletas convencionales siguen siendo la opción más simple, ligera y de bajo coste. Elegir entre una y otra depende del uso que vayas a darle, del entorno en el que vives y de tus hábitos energéticos.</p>

<h2>¿Cómo funciona una bici eléctrica y cuánto consume?</h2>
<p>Una bicicleta eléctrica incorpora un pequeño motor que asiste en el pedaleo, facilitando subir cuestas o recorrer largas distancias sin tanto esfuerzo. Este motor se alimenta de una batería recargable, que suele ofrecer entre 40 y 100 km de autonomía por carga, dependiendo del modelo y la asistencia empleada.</p>
<p>En términos de consumo, una recarga completa puede costarte entre 0,10 y 0,20 €, ya que la batería suele tener 400-600 Wh. Es decir, recorrer 100 km en bici eléctrica puede salirte más barato que un billete de transporte público, y desde luego mucho más que llenar el depósito de un coche.</p>

<h2>¿Cuándo conviene una bicicleta convencional?</h2>
<p>Las bicis tradicionales son insuperables en sencillez: no requieren carga, son más ligeras y fáciles de mantener, y cuestan menos. Representan una excelente opción si:</p>
<ul>
  <li>Tu trayecto diario no supera los 5-7 km sin muchas cuestas.</li>
  <li>Buscas hacer ejercicio físico con cada desplazamiento.</li>
  <li>Puedes estacionarla con seguridad y sin necesitar recargar nada.</li>
  <li>No quieres gastar en mantenimiento eléctrico o reemplazo de batería.</li>
</ul>
<p>Además, para quienes disfrutan del ciclismo deportivo o recreativo puro, la ligereza y respuesta de una bici convencional sigue siendo la más apreciada.</p>

<h2>¿Y cuándo es mejor una eléctrica?</h2>
<p>Una bici eléctrica es ideal para quien recorre largas distancias, va con prisa al trabajo (sin querer sudar), vive en zonas con desniveles o quiere reducir el uso del coche. Otras ventajas clave son:</p>
<ul>
  <li>Te permite llegar más rápido y con menos esfuerzo.</li>
  <li>Facilita trayectos donde el transporte público no llega bien.</li>
  <li>Es una excelente alternativa para personas mayores o con movilidad reducida.</li>
  <li>Puede ser clave en planes de movilidad sostenible en ciudades.</li>
</ul>
<p>Aunque son más caras (unos 1.000-2.500 € de media), su mantenimiento es simple y el ahorro energético a largo plazo puede compensar la inversión inicial, sobre todo si sustituyen al coche o la moto.</p>

<h2>¿Qué dice la normativa?</h2>
<p>En España, las bicicletas eléctricas están reguladas por el Reglamento General de Vehículos y la normativa europea. Para ser consideradas bicicletas (y no ciclomotores) deben:</p>
<ol>
  <li>Tener una potencia máxima de 250W.</li>
  <li>La asistencia debe cortarse al superar los 25 km/h.</li>
  <li>Sólo deben funcionar cuando el usuario pedalea (sin acelerador).</li>
</ol>
<p>Si cumple con estos requisitos, no necesitas matrícula ni seguro obligatorio, lo que simplifica su uso legal en la vía pública.</p>

<h2>Conclusión</h2>
<p>La bicicleta sigue ganando terreno como opción realista para el transporte urbano y activo. Elegir entre eléctrica o convencional no tiene una única respuesta correcta: dependerá de tus recorridos, tu ritmo de vida, tu estado físico y tu compromiso con una movilidad sostenible. Frente a atascos y combustibles caros, ambas son opciones ganadoras, solo que cada una brilla en situaciones diferentes. <strong>Si estás pensando en electrificar tu movilidad, en Voltik te ayudamos a calcular el impacto energético y te asesoramos en la instalación de puntos de carga domésticos.</strong></p>`,
  date: '2024-06-04',
  readTime: '4 min',
  category: 'Movilidad Eléctrica',
  tags: ['bicicleta-eléctrica', 'movilidad-urbana', 'eficiencia-energética'],
  featured: false,
  image: '/blog/bici-electrica-vs-convencional-que-conviene-mas_image.png',
  ctaLabel: 'Reduce tu factura de la luz',
  ctaLink: '/formulario'
},
{
  id: 'guia-definitiva-sobre-el-mercado-electrico-y-la-factura-de-la-luz-que-te-conviene-mas',
  title: 'Guía definitiva sobre el mercado eléctrico y la factura de la luz: ¿qué te conviene más?',
  subtitle: 'Hemos preparado esta guía para despejar todas las dudas sobre los mercados eléctricos. ¿Escuchas en las noticias que ha subido el precio de la luz? ¡Te explicamos para quiénes!',
  excerpt: 'En España existen dos formas de contratar la electricidad: el mercado libre y el mercado regulado…',
  content: `<h1>¿No sabes si te afecta el titular “Sube el precio de la luz”?</h1><p>Empecemos por el principio. En España existen dos formas de contratar la electricidad: el <strong>mercado libre</strong> y el <strong>mercado regulado</strong>. Aunque ambos suministran la misma energía, <strong>funcionan de manera muy distinta</strong> y pueden tener un impacto significativo en tu factura.</p><p>Los informativos y periódicos rara vez explican adecuadamente el contexto del precio de la luz, más allá de ese titular que se ha convertido en un clásico. En este artículo te contamos, de forma clara y sin tecnicismos, <strong>qué significa realmente que suba el precio de la luz</strong>.</p><h2><strong>Mercado regulado, o PVPC</strong></h2><p>En este modelo, el precio de la electricidad está completamente regulado y varía cada hora según la oferta y la demanda del mercado mayorista. Es decir, para cada franja horaria, las grandes empresas generadoras y compradoras de electricidad acuerdan un precio bajo una serie de condiciones fijadas por la Ley del Sector Eléctrico. Según esta ley, solo las <strong>comercializadoras de referencia</strong> pueden ofrecer contratos en este mercado. Como consumidor, puedes optar por esta modalidad, que tiene tanto ventajas como inconvenientes:</p><h3><strong>Lo mejor</strong></h3><ul><li>Es un mercado <strong>totalmente transparente</strong>. Puedes consultar en todo momento el precio de la electricidad publicado por <strong>Red Eléctrica de España</strong> (consúltalo <a href="https://www.esios.ree.es/es/pvpc" target="_blank" rel="noopener noreferrer">aquí</a> si tienes curiosidad).</li><li>Solo en este mercado puedes acceder al <strong>Bono Social</strong>, el descuento regulado por el Gobierno destinado a consumidores vulnerables o beneficiarios del <strong>Ingreso Mínimo Vital</strong> (<a href="https://www.miteco.gob.es/es/energia/pobreza-energetica/pe-001/que-es.html" target="_blank" rel="noopener noreferrer">aquí</a> tienes un enlace del Ministerio con más detalle).</li></ul><h3><strong>Lo que debes tener en cuenta</strong></h3><ul><li>Como el precio se establece <strong>cada hora</strong>, puede fluctuar mucho. Por ejemplo, cocinar o poner la lavadora a las 20:00 puede costarte el doble que hacerlo a las 10:00.</li><li>Esta volatilidad hace que sea <strong>imposible de prever</strong> cuánto pagarás cada mes.</li><li>Además, no permite pactar con la comercializadora descuentos especiales ni precios fijos.</li></ul><h2><strong>Mercado libre</strong></h2><p>En el mercado libre, las compañías eléctricas pueden ofrecer sus propias tarifas y condiciones. Aquí el precio <strong>no depende directamente del mercado diario</strong>, sino del contrato que acuerdes con tu comercializadora. Puedes encontrar precios fijos, tarifas planas o incluso planes personalizados según tus hábitos de consumo.</p><h3><strong>Lo mejor</strong></h3><ul><li>Permite <strong>mayor estabilidad</strong>: sabes cuánto pagarás por cada kWh durante todo el contrato, lo que facilita planificar tus gastos.</li><li>Puedes acceder a <strong>ofertas y descuentos</strong> puntuales o a servicios adicionales como mantenimiento o atención prioritaria.</li><li>Existe una <strong>gran variedad de opciones</strong>: desde tarifas 100 % verdes hasta planes adaptados a segundas residencias o empresas.</li></ul><h3><strong>Lo que debes tener en cuenta</strong></h3><ul><li>Algunas tarifas pueden incluir <strong>cláusulas o servicios adicionales</strong> que encarecen el precio final si no se revisan bien.</li><li>Es posible que el precio fijo pactado sea <strong>algo superior</strong> al del mercado regulado en los periodos en los que la luz es más barata.</li><li>Requiere <strong>comparar y revisar periódicamente</strong> para asegurarte de que tu tarifa sigue siendo competitiva.</li></ul><h2><strong>Entonces, ¿cuál te conviene más?</strong></h2><p>No existe una respuesta universal. Todo depende de tu <strong>perfil de consumo</strong> y de lo que más valores:</p><ul><li>Si prefieres <strong>previsibilidad y estabilidad</strong>, el <strong>mercado libre</strong> suele ser la mejor opción.</li><li>Si quieres pagar <strong>exactamente el precio del mercado en cada momento</strong>, aunque no sea el más competitivo, el <strong>regulado (PVPC)</strong> puede ser interesante, aunque asumas mayor riesgo de subidas.</li></ul><p>En definitiva, el mercado libre te da control y estabilidad; el regulado, transparencia y vinculación con el precio real de la energía.</p><p>En <strong>Voltik</strong> creemos que entender tu factura es el primer paso para ahorrar.</p><p>Por eso analizamos tu consumo y comparamos entre <strong>más de 70 comercializadoras</strong> para proponerte la tarifa que mejor se adapte a ti.</p>`,
  date: '2025-10-13',
  readTime: '4 min',
  category: ["Mercado Eléctrico","Precio de la luz"],
  tags: ['FacturaLuz', 'MercadoEléctrico', 'Ahorro'],
  featured: true,
  image: '/blog/precio-luz-mercado-regulado-y-libre.png',
  ctaLabel: 'Sube tu factura y descubre cuánto puedes ahorrar',
  ctaLink: '/formulario'
},
{
  id: 'el-apagon-de-espana-se-puede-volver-a-repetir',
  title: 'El apagón de España: ¿se puede volver a repetir?',
  subtitle: 'Una reflexión sobre la estabilidad del sistema eléctrico y las lecciones que dejó el gran corte de suministro de 2025.',
  excerpt: 'El apagón reveló las limitaciones de un sistema en plena transición energética. Analizamos por qué ocurrió, qué medidas se han tomado y…',
  content: `<h1>Un país entero sin luz durante horas</h1><p>El 28 de abril de 2025, España se quedó a oscuras durante horas. Fue un apagón histórico que paralizó transportes, industrias y hogares en todo el país.</p><p>Más allá del susto y las pérdidas económicas, el suceso puso en evidencia algo más profundo: <strong>la fragilidad de un sistema eléctrico que se encuentra en transición y en el que todas las tecnologías tienen un papel importante</strong>.</p><p>En los últimos años, las políticas del Gobierno de España han estado dirigidas hacia la descarbonización y la implantación de energías renovables. Más del 50 % de la electricidad generada procede ya de fuentes limpias como la eólica, la solar o la hidráulica. Sin embargo, el apagón de abril de 2025 demostró que <strong>la transición energética no solo trata de producir energía verde, sino de hacerlo con seguridad y equilibrio</strong>.</p><p>Hoy, meses después, la gran pregunta sigue siendo la misma: <strong>¿podría volver a pasar?</strong></p><h2><strong>Un sistema en cambio constante</strong></h2><p>El mix energético español está viviendo una transformación profunda. Las centrales térmicas y nucleares, que durante décadas aportaron estabilidad y respaldo, están siendo sustituidas por tecnologías renovables más verdes, pero también más intermitentes. Esta variabilidad —la dependencia del viento o de la radiación solar— obliga a disponer de <strong>mecanismos de respaldo</strong> que garanticen el suministro en todo momento.</p><p>Ahí entran en juego los <strong>ciclos combinados de gas natural</strong>, que se han convertido en el "seguro" del sistema. Durante los meses posteriores al apagón, estas centrales incrementaron su actividad más de un 40 %, compensando la falta de generación renovable y estabilizando la red. Estas plantas seguirán siendo necesarias mientras no exista suficiente almacenamiento o interconexión que permita mantener la estabilidad del sistema.</p><p>A medio plazo, el papel de estos ciclos combinados también podría transformarse. Algunas de estas plantas ya están adaptando sus instalaciones para operar con mezclas de hidrógeno verde y gas natural, lo que permitiría reducir emisiones sin renunciar a su función de respaldo. Este tipo de tecnologías híbridas pueden ser clave durante la próxima década, en tanto se despliegan soluciones de almacenamiento y gestión inteligente de la demanda.</p><p>Sin embargo, este recurso tiene un coste: <strong>mayor dependencia del gas importado y, por tanto, de los costes de generación</strong>.</p><h2><strong>¿Podría repetirse un apagón así?</strong></h2><p>La respuesta corta es <strong>sí, aunque cada vez es menos probable</strong>.</p><p>El riesgo sigue presente mientras el sistema mantenga una alta intermitencia renovable y una limitada interconexión con el resto de Europa. La Península Ibérica continúa siendo una “isla eléctrica”, con una capacidad de intercambio inferior al 8 % del total de su demanda máxima.</p><p>Aun así, desde 2025 se han puesto en marcha medidas importantes para reforzar la red:</p><ul><li>Nuevos <strong>proyectos de almacenamiento</strong> con baterías en varias comunidades autónomas.</li><li><strong>Interconexiones adicionales con Francia y Portugal</strong>, que permitirán equilibrar mejor los flujos de energía.</li><li>Mejores <strong>protocolos de respuesta automática</strong> en caso de caída de tensión o frecuencia.</li></ul><p>También se están revisando los mecanismos de mercado que premian la disponibilidad y la flexibilidad. El nuevo marco europeo de capacidad permitirá remunerar a las instalaciones que aporten estabilidad, como las baterías o los sistemas de gestión de demanda. En otras palabras, no se trata solo de producir más energía, sino de disponer de <strong>energía que responda cuando el sistema lo necesita</strong>.</p><p>Estos avances no eliminan el riesgo, pero sí lo reducen. La clave está en combinar un mix de generación equilibrado con una infraestructura acorde a las necesidades.</p><p>Más allá de las medidas estructurales, hay un factor clave que depende de cada usuario: la eficiencia.</p><h2><strong>Eficiencia: la lección que deja el apagón</strong></h2><p>El suceso de abril dejó claro que <strong>la eficiencia energética es una herramienta de estabilidad</strong>.</p><p>Cuando los hogares y las empresas gestionan mejor su consumo —evitando picos innecesarios, usando energía en horarios estratégicos o apostando por el autoconsumo—, no solo reducen su factura: también alivian la presión sobre la red.</p><p>Cada instalación optimizada, cada punto de recarga inteligente o cada sistema de control horario contribuye a usar la energía de una forma más inteligente y económica.</p><h2><strong>Mirar al futuro con responsabilidad</strong></h2><p>No sabemos si España se encuentra más preparada que hace unos meses, pero la lección del apagón sigue vigente: <strong>la integración de energías renovables no puede avanzar sin planificación, respaldo y eficiencia</strong>.</p><p>El futuro del sistema eléctrico dependerá, en gran medida, de la capacidad para adaptar la infraestructura y mantener un mix de generación equilibrado. La evolución de la red eléctrica nacional no solo pasa por nuevas centrales o infraestructuras más robustas, sino también por una gestión más eficiente de la energía disponible. Ajustar consumos y modernizar instalaciones se ha convertido en una parte esencial de la estabilidad operativa del sistema.</p><p>En este contexto de transformación, la eficiencia se convierte en una herramienta práctica al alcance de todos. <strong>En Voltik trabajamos precisamente en ese punto de equilibrio:</strong> ayudamos a hogares y negocios a consumir de forma más inteligente, analizando cada factura y optimizando su consumo para que ahorren sin perder seguridad ni estabilidad.</p>`,
  date: '2025-10-19',
  readTime: '5 min',
  category: ["Actualidad","Eficiencia energética"],
  tags: ['EficienciaEnergética', 'RedEléctrica', 'TransiciónEnergética'],
  featured: true,
  image: '/blog/apagon-espana.png',
  ctaLabel: 'Optimiza tu consumo',
  ctaLink: '/formulario'
},
// añade más artículos aquí
];

export default blogPosts;
