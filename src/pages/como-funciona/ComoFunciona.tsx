import { useEffect } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { VoltikButton } from '@/components/ui/voltik-button'
import { Upload, BarChart3, Sparkles, CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react'
import analisis from '@/assets/analisis-factura.png'
import Seo from '@/app/seo/Seo'

const ComoFuncionaPage = () => {
  useEffect(() => {
    // Mantiene comportamiento de scroll y otros efectos si se añaden en el futuro
  }, [])

  const steps = [
    {
      title: 'Sube tu factura',
      description: 'Adjunta tu última factura de luz junto con tus datos de contacto. Tardas menos de un minuto.',
      icon: Upload,
        details: [
          'Sube un PDF o una foto de tu factura',
          'No almacenamos tus datos',
          'Datos protegidos por RGPD',
          'Todo 100% gratis: no pasas nada'
        ]
    },
    {
      title: 'Analizamos tu consumo',
      description: 'Comparamos tarifas, potencias y condiciones para detectar sobrecostes y oportunidades de ahorro.',
      icon: BarChart3,
      details: [
        'Trabajamos con más de 70 eléctricas',
        'Comparamos tarifas y condiciones',
        'Detección de sobrecostes ocultos',
        'Cálculo de ahorro real'
      ]
    },
    {
      title: 'Recibe tu oferta',
      description: 'En menos de 48h tendrás una propuesta personalizada. Tú decides si te encaja.',
      icon: Sparkles,
        details: [
          'Propuesta personalizada en 48h',
          'Informe detallado de ahorro',
          'Tú tienes la última palabra',
          'Todo 100% gratis: no pasas nada'
        ]
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Respuesta en menos de 48h',
      description: 'Sabemos que no quieres esperar. Somos ágiles.'
    },
    {
      icon: ShieldCheck,
      title: 'Expertos independientes',
      description: 'Trabajamos con más de 70 comercializadoras y tú tienes siempre la última palabra.'
    },
    {
      icon: CheckCircle2,
      title: 'Sin compromiso y gratis',
      description: 'Analizamos tu factura gratis y te envíamos las mejores ofertas. Sin coste alguno. Tú decides si quieres comenzar a ahorrar.'
    }
  ]

  return (
    <>
      <Seo
        title="Cómo funciona Voltik - Ahorro en factura de luz en 3 pasos"
        description="Proceso simple para ahorrar en tu factura de luz: sube tu factura, analizamos tu consumo y recibes la mejor oferta en 48h. Servicio gratuito sin compromiso para hogares y negocios."
        type="website"
      />
      <Header />

      <main id="main-content" className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="voltik-section bg-gradient-to-br from-primary/10 to-secondary/20 relative overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0 opacity-60">
            <img
              src={analisis}
              alt="Proceso de análisis de factura con Voltik"
              className="w-full h-full object-cover object-center lg:object-[70%_60%]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
          </div>
          
          <div className="voltik-container relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Así de fácil es ahorrar con nosotros
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Nuestro equipo de ingenieros eléctricos se encarga de todo el trabajo pesado para que tú solo tengas que subir tu factura de luz y aprobar la mejor oferta.<br />
                Conoce también todos nuestros <a href="/servicios" className="text-muted-foreground hover:text-foreground underline hover:no-underline transition-colors">servicios de eficiencia energética</a>.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="voltik-section">
          <div className="voltik-container">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nuestro proceso en 3 pasos
              </h2>
              <p className="text-lg text-muted-foreground">
                Un proceso simple y transparente diseñado para maximizar tu ahorro energético.<br /> 
                Descubre <a href="/#testimonios" className="text-muted-foreground hover:text-primary underline hover:no-underline transition-colors">las experiencias de nuestros clientes</a>.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {steps.map((step, index) => (
                <article
                  key={step.title}
                  className="voltik-card h-full relative overflow-hidden text-left group hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon size={22} className="text-text" />
                    </div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-base mb-6 flex-1">
                    {step.description}
                  </p>

                  <div className="space-y-3 mt-auto">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-text mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="voltik-section bg-secondary/10">
          <div className="voltik-container">
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
                  <div className="flex items-center gap-3 mb-2">
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
          <div className="voltik-container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                ¿Listo para empezar a ahorrar?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Sube tu factura y recibe tu propuesta personalizada en menos de 48h.<br /> 
                <strong>Totalmente gratis y sin compromiso.</strong>
              </p>
              <VoltikButton variant="voltik" size="lg" asChild>
                <a href="/formulario" className="group">
                  Subir mi factura ahora
                  <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </VoltikButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default ComoFuncionaPage
