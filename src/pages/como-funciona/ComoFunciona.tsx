import { useEffect } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { VoltikButton } from '@/components/ui/voltik-button'
import { Upload, BarChart3, Sparkles, CheckCircle2, Clock, ShieldCheck, ArrowRight } from 'lucide-react'
import voltikLogo from '@/assets/voltik-logo-web.svg'
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
        'Gratis y sin compromiso'
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
        'Solo tienes que aceptar la oferta'
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
      title: 'Sin compromiso',
      description: 'Analizamos tu factura gratis. Solo pagas si decides cambiar de tarifa.'
    }
  ]

  return (
    <>
      <Seo
        title="Cómo funciona Voltik - Proceso de ahorro energético"
        description="Descubre cómo funciona Voltik: sube tu factura, analizamos tu consumo y te enviamos la mejor oferta personalizada en menos de 48h. Gratis y sin compromiso."
        type="website"
      />
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="voltik-section bg-gradient-to-br from-primary/10 to-secondary/20 relative overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src={voltikLogo}
              alt="Ahorro energético con Voltik"
              className="w-full h-full object-contain sm:object-cover object-top sm:object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent"></div>
          </div>
          
          <div className="voltik-container px-4 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Así de fácil es ahorrar con nosotros
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Nuestro equipo se encarga de todo el trabajo pesado para que tú solo tengas que subir tu factura y aprobar la mejor oferta.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="voltik-section">
          <div className="voltik-container px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Nuestro proceso en 3 pasos
              </h2>
              <p className="text-lg text-muted-foreground">
                Un proceso simple y transparente diseñado para maximizar tu ahorro energético.
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
