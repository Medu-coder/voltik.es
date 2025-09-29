import { useEffect } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactForm from '@/features/home/sections/ContactForm'
import { VoltikButton } from '@/components/ui/voltik-button'
import { Home, Building2, Zap, CheckCircle2, Shield, Clock, Wrench, Car } from 'lucide-react'
import residentialImage from '@/assets/residential-service.jpg'
import commercialImage from '@/assets/commercial-service.jpg'
import emergencyImage from '@/assets/emergency-service.jpg'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Seo from '@/app/seo/Seo'

const ServicesPage = () => {
  useEffect(() => {
    // Mantiene comportamiento de scroll y otros efectos si se añaden en el futuro
  }, [])

  const services = [
    {
      id: 'viviendas',
      icon: Home,
      title: 'Viviendas',
      image: residentialImage,
      lead:
        'Instalaciones eléctricas, certificados de eficiencia energética, placas solares, puntos de recarga y domótica inteligente con un trato profesional impecable.',
      include: [
        'Instalaciones nuevas y reformas',
        'Certificados de eficiencia energética y boletines',
        'Expedición de boletines eléctricos',
        'Placas solares e instalaciones de autoconsumo',
        'Puntos de recarga para vehículo eléctrico',
        'Domótica, iluminación, clima y seguridad conectada',
      ],
      cases: [
        'Reforma integral con redistribución de puntos de luz y tomas',
        'Ánalisis y mejora de eficiencia energética',
        'Sustituciones de cuadros eléctricos',
        'Instalación de cargador VE en garaje comunitario o privado',
        'Integración de sensores y escenas de iluminación'
      ]
    },
    {
      id: 'negocios',
      icon: Building2,
      title: 'Negocios',
      image: commercialImage,
      lead:
        'Cuadros eléctricos, estudios de eficiencia energética, mantenimiento preventivo y legalizaciones para tu empresa o local.',
      include: [
        'Diseño de instalaciones comerciales y adaptación a normativa vigente',
        'Certificados de eficiencia energética',
        'Iluminación LED eficiente para locales, oficinas y naves',
        'Mantenimiento preventivo y correctivo',
        'Ampliaciones de potencia y equilibrado de cargas',
        'Legalizaciones y boletines'

      ],
      cases: [
        'Apertura de local con instalación y cuadros nuevos',
        'Estudios de impacto enérgetico para reducir consumo',
        'Planes de mantenimiento periódicos',
        'Legalización y adecuación tras inspecciones'
      ]
    },
    {
      id: 'urgencias',
      icon: Zap,
      title: 'Urgencias 24/7',
      image: emergencyImage,
      lead:
        'Atención a averías con respuesta ágil. Realizamos un diagnóstico claro del problema y buscamos la mejor solución para ti o tu negocio.',
      include: [
        'Diagnóstico rápido de fallos e interrupciones',
        'Reparación de cortocircuitos y derivaciones',
        'Restitución de suministro',
        'Sustitución de protecciones y componentes dañados',
        'Asesoramiento preventivo'
      ],
      cases: [
        'Cuadros de mando dañados',
        'Olor a quemado o sobrecalentamiento en un punto',
        'Pérdida parcial de tensión en estancias',
        'Fallo en cargador de vehículo o termo eléctrico'
      ]
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Cuéntanos tu proyecto',
      description:
        'Explícanos qué necesitas por formulario o WhatsApp. Te orientamos sin tecnicismos y valoramos la solución que mejor se adapte a ti.',
      icon: Wrench
    },
    {
      step: '2',
      title: 'Presupuesto en 24h',
      description:
        'Propuesta detallada con materiales, plazos y precios transparentes. Ajustes ágiles hasta cerrar el alcance final.',
      icon: Shield
    },
    {
      step: '3',
      title: 'Instalación sin estrés',
      description:
        'Ejecución limpia y segura. Seguimiento digital, firma electrónica y garantía de 2 años.',
      icon: Car
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Voltik · Servicios de eficiencia energética"
        description="Optimiza tu consumo eléctrico con servicios de certificados, boletines y proyectos de eficiencia. Analizamos tu factura y gestionamos todo el proceso para hogares y negocios."
        type="website"
      />
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="voltik-section hero-bg">
          <div className="voltik-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Servicios eléctricos profesionales
            </h1>
            <p className="lead">
              Instalaciones eléctricas, mantenimiento y eficiencia energética para viviendas y negocios en Córdoba. Proyecto claro, ejecución profesional y garantía escrita.
            </p>
          </div>
        </section>

        {/* Summary grid */}
        <section className="voltik-section">
          <div className="voltik-container">
            <div className="voltik-grid-3 mb-2">
              {services.map((s) => (
                <article key={s.id} className="voltik-card group hover:scale-[1.02] flex flex-col h-full">
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 p-3 bg-primary rounded-full">
                      <s.icon size={24} className="text-primary-foreground" />
                    </div>
                  </div>
                  <h2 className="text-xl font-semibold mb-3">{s.title}</h2>
                  <p className="text-muted-foreground mb-6">{s.lead}</p>
                  <VoltikButton variant="outline" className="w-full mt-auto" asChild>
                    <a href={`#${s.id}`}>Ver detalle</a>
                  </VoltikButton>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed sections */}
        {services.map((s, idx) => (
          <section id={s.id} key={s.id} className={`voltik-section ${idx % 2 === 1 ? 'bg-muted/30' : ''}`}>
            <div className="voltik-container">
              <div className="mb-8 flex items-center gap-3">
                <s.icon className="text-primary" size={28} />
                <h2 className="text-2xl md:text-3xl font-bold">{s.title}</h2>
              </div>

              {/* Harmonized 12-col layout with alternating image/text */}
              <div className="grid gap-8 lg:grid-cols-12 items-start">
                {/* Visual side */}
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="voltik-card">
                    <img src={s.image} alt={s.title} className="w-full h-64 object-cover rounded-lg mb-6" loading="lazy" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Shield size={18} className="text-primary" />
                        <span>Garantía escrita 2 años</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={18} className="text-primary" />
                        <span>Plazos claros</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wrench size={18} className="text-primary" />
                        <span>Materiales de calidad</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Car size={18} className="text-primary" />
                        <span>Ejecución limpia</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Textual side */}
                <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'} h-full flex flex-col`}>
                  <p className="text-muted-foreground mb-8">{s.lead}</p>

                  {/* Two balanced cards within unified grid lines */}
                  <div className="grid gap-6 md:grid-cols-2 items-stretch grow">
                    <div className="bg-card rounded-xl p-6 border border-border h-full">
                      <h3 className="text-lg font-semibold mb-4">Qué incluye</h3>
                      <ul className="space-y-3 text-sm">
                        {s.include.map((item) => (
                          <li key={item} className="flex items-start">
                            <CheckCircle2 className="text-primary mr-3 mt-0.5 shrink-0 w-4 h-4" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-card rounded-xl p-6 border border-border h-full">
                      <h3 className="text-lg font-semibold mb-4">Casos típicos</h3>
                      <ul className="space-y-3 text-sm">
                        {s.cases.map((item) => (
                          <li key={item} className="flex items-start">
                            <CheckCircle2 className="text-primary mr-3 mt-0.5 shrink-0 w-4 h-4" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-8">
                    <VoltikButton variant="voltik" asChild>
                      <a href="#contacto">Pedir presupuesto</a>
                    </VoltikButton>
                    <VoltikButton variant="outline" asChild>
                      <a href="/#valores">Por qué Voltik</a>
                    </VoltikButton>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Process */}
        <section className="voltik-section">
          <div className="voltik-container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Cómo trabajamos</h2>
              <p className="lead">Simplicidad y transparencia de principio a fin.</p>
            </div>

            <div className="voltik-grid-3">
              {process.map((p, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mb-4">
                    {p.step}
                  </div>
                  <p.icon size={32} className="mx-auto mb-3 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="voltik-section bg-muted/30">
          <div className="voltik-container">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Preguntas frecuentes</h2>
              <p className="lead">Resolvemos las dudas más habituales antes de empezar.</p>
            </div>

            <div className="max-w-4xl mx-auto bg-card rounded-xl border border-border p-2 md:p-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>¿Qué garantía tengo de vuestro trabajo?</AccordionTrigger>
                  <AccordionContent>
                    Somos profesionales con amplio conocmiento y experiencia. Todos nuestros trabajos cuentan con garantía de 2 años.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>¿Realizáis certificados energéticos y legalizaciones?</AccordionTrigger>
                  <AccordionContent>
                    Sí. No tienes que preocuparte de nada, nosotros gestionamos toda la documentación necesaria para expedir tu certificado energético, boletín o legalizar tu instalación.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>¿Trabajáis en comunidades de vecinos y garajes?</AccordionTrigger>
                  <AccordionContent>
                    Sí, tanto en zonas comunes como en viviendas o plazas particulares, coordinándonos con la comunidad y cuidando del bienestar de los residentes.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>¿Cómo se calcula el presupuesto?</AccordionTrigger>
                  <AccordionContent>
                    Desglosamos materiales y mano de obra con precios unitarios y transparentes. Ajustamos el alcance contigo antes de comenzar.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>¿Atendéis urgencias fuera del horario laboral?</AccordionTrigger>
                  <AccordionContent>
                    Prestamos servicios de urgencias 24h para averías prioritarias, respondiendo rápido con la máxima calidad.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA + Contact form */}
        <section className="voltik-section">
          <div className="voltik-container text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">¿Listo para empezar?</h2>
            <p className="lead">Cuéntanos tu idea y recibe un presupuesto claro en menos de 24h laborables.</p>
          </div>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ServicesPage
