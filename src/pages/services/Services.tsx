import { useEffect } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactForm from '@/features/home/sections/ContactForm'
import { VoltikButton } from '@/components/ui/voltik-button'
import { FileText, ScrollText, PiggyBank, Clock, ShieldCheck, CheckCircle2, ArrowRight, Upload, BarChart3, Sparkles } from 'lucide-react'
import heroElectricianImage from '@/assets/hero-electrician.jpg'
import Seo from '@/app/seo/Seo'

const ServicesPage = () => {
  useEffect(() => {
    // Mantiene comportamiento de scroll y otros efectos si se añaden en el futuro
  }, [])

  const mainService = {
    title: 'Ahorra en tu factura de la luz',
    description: 'Buscamos la mejor oferta personalizada para ti. Gratis y sin compromiso.',
    icon: PiggyBank,
    features: [
      'Análisis gratuito de tu factura actual',
      'Comparación con las mejores tarifas del mercado',
      'Negociación directa con comercializadoras',
      'Propuesta personalizada en menos de 48h',
      'Sin compromiso ni permanencia',
      'Ahorro medio del 20% garantizado'
    ],
    process: [
      {
        step: 1,
        title: 'Sube tu factura',
        description: 'Adjunta tu última factura de luz junto con tus datos de contacto. Tardas menos de un minuto.',
        icon: Upload,
      },
      {
        step: 2,
        title: 'Analizamos tu consumo',
        description: 'Comparamos tarifas, potencias y condiciones para detectar sobrecostes y oportunidades de ahorro.',
        icon: BarChart3,
      },
      {
        step: 3,
        title: 'Recibe tu oferta',
        description: 'En menos de 48h tendrás una propuesta personalizada. Tú decides si quieres cambiarte o no.',
        icon: Sparkles,
      },
    ]
  }

  const secondaryServices = [
    {
      title: 'Certificados de eficiencia energética',
      description: 'Certificados de eficiencia energética oficiales que necesitas para vender o alquilar tu inmueble, asesorándote para obtener mejor calificación.',
      icon: FileText,
      cta: 'Solicitar certificado',
      features: [
        'Certificado energéticooficial',
        'Asesoramiento sobre mejoras de eficiencia',
        'Tramitación completa ante el registro',
        'Garantía de cumplimiento normativo'
      ]
    },
    {
      title: 'Boletines eléctricos (CIE)',
      description: 'Tramitamos y legalizamos tu instalación para altas nuevas, cambios de potencia o revisiones obligatorias ante la distribuidora.',
      icon: ScrollText,
      cta: 'Solicitar boletín',
      features: [
        'Boletín oficial ante distribuidora',
        'Legalización de instalaciones',
        'Cambios de potencia y altas',
        'Cumplimiento normativo vigente'
      ]
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Respondemos en menos de 48h',
      description: 'Sabemos que no quieres esperar. Somos ágiles.'
    },
    {
      icon: ShieldCheck,
      title: 'Expertos independientes',
      description: 'Trabajamos con más de 70 comercializadoras y tú tienes siempre la última palabra.'
    },
    {
      icon: CheckCircle2,
      title: 'Tus datos son tuyos',
      description: 'No almacenamos tus datos. Solo los usamos para preparar tu oferta.'
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
        <section className="voltik-section bg-gradient-to-br from-primary/10 to-secondary/20 relative overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src={heroElectricianImage}
              alt="Eficiencia energética y ahorro en facturas"
              className="w-full h-full object-contain sm:object-cover object-top sm:object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent"></div>
          </div>
          
          <div className="voltik-container px-4 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Servicios de eficiencia energética
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Somos asesores energéticos e ingenieros eléctricos colegiados.<br />
                Realizamos todo tipo de gestiones técnicas y legales en tus instalaciones.<br />
                Sencillo y sin complicaciones.
              </p>
            </div>
          </div>
        </section>

        {/* Main Service - Ahorro en factura */}
        <section className="voltik-section">
          <div className="voltik-container px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="voltik-card bg-gradient-to-br from-primary/5 to-secondary/10 border border-primary/20 p-8 md:p-12">
                <div className="text-center mb-12">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <mainService.icon size={36} className="text-text" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                      {mainService.title}
                    </h2>
                  </div>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {mainService.description}
                  </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2 items-start">
                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-6">¿Qué hacemos?</h3>
                    <div className="space-y-4">
                      {mainService.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 size={16} className="text-text" />
                          </div>
                          <p className="text-md text-muted-foreground">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-6">¿Cómo funciona?</h3>
                    <div className="space-y-6">
                      {mainService.process.map((step, index) => (
                        <div key={index}>
                          <div className="flex items-center gap-4 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-text text-md font-bold flex-shrink-0">
                              {step.step}
                            </div>
                            <h4 className="font-semibold text-foreground">{step.title}</h4>
                          </div>
                          <p className="text-md text-muted-foreground ml-12">{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <VoltikButton variant="voltik" size="lg" asChild>
                    <a href="/formulario" className="group">
                      Empieza a ahorrar hoy
                      <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </VoltikButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="formulario" className="voltik-section bg-gradient-to-br from-primary/10 to-secondary/20">
          <ContactForm />
        </section>

        {/* Secondary Services */}
        <section className="voltik-section">
          <div className="voltik-container px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Servicios que completan tu ahorro energético
              </h2>
              <p className="text-lg text-muted-foreground">
              Somos asesores energéticos e ingenieros eléctricos colegiados. Realizamos todo tipo de gestiones técnicas y legales en tus instalaciones.<br />
              Sencillo y sin complicaciones.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {secondaryServices.map((service, index) => (
                <article
                  key={service.title}
                  className="voltik-card h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/60 to-primary/40 flex items-center justify-center">
                      <service.icon size={24} className="text-text" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 flex-1">
                    {service.description}
                  </p>

                  <div className="mb-6 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-text mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <VoltikButton variant="voltik" size="lg" className="w-full border-primary/40 hover:border-primary" asChild>
                    <a href="/formulario-sec">{service.cta}</a>
                  </VoltikButton>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="voltik-section bg-secondary/30">
          <div className="voltik-container px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                ¿Por qué elegir Voltik?
              </h2>
              <p className="text-lg text-muted-foreground">
                Nuestro compromiso es hacer que el ahorro energético sea real, transparente e inmediato.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <benefit.icon size={22} className="text-text" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{benefit.title}</h3>
                  </div>
                  <p className="text-muted-foreground ml-11">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="voltik-section">
          <div className="voltik-container px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                ¿Listo para empezar a ahorrar?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sube tu factura y recibe tu propuesta personalizada en menos de 48h. 
                Gratis y sin compromiso.
              </p>
              <VoltikButton variant="voltik" size="lg" asChild>
                <a href="/formulario" className="group">
                  Quiero mi oferta ya
                  <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </VoltikButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ServicesPage