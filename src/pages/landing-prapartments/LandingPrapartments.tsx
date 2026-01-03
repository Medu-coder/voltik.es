import ContactForm from '@/components/forms/ContactForm'
import VoltikLogo from '@/components/ui/VoltikLogo'
import Footer from '@/components/layout/Footer'
import Seo from '@/app/seo/Seo'
import { Clock, ShieldCheck, Lock, BadgeCheck } from 'lucide-react'

const LandingPrapartments = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Respuesta en menos de 48h',
      description: 'Sabemos que no quieres esperar. Somos ágiles.',
    },
    {
      icon: ShieldCheck,
      title: 'Expertos independientes',
      description:
        'Trabajamos con más de 70 comercializadoras y tú tienes siempre la última palabra.',
    },
    {
      icon: Lock,
      title: 'Tus datos son tuyos',
      description: 'No almacenamos tus datos. Solo los usamos para preparar tu oferta.',
    },
  ]

  return (
    <>
      <Seo
        title="Voltik · Colectivo P&R Apartments - Envía tu factura y ahorra en luz"
        description="Sube tu factura de la luz y recibe una propuesta personalizada de ahorro en menos de 48h. Gratis y sin compromiso."
        type="website"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="voltik-container py-12 md:py-16">
          {/* Logo colaboración */}
          <div className="mb-12 text-center space-y-8">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-[0.35em] uppercase text-foreground">
              Colaboración especial
            </h1>
            <div className="flex flex-col items-center gap-4 sm:gap-5">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-5 md:gap-8">
                <img
                  src="/partners/logo-pr.png"
                  alt="P&R Apartments"
                  className="h-20 md:h-18 w-auto drop-shadow-lg"
                  loading="lazy"
                />
                <span className="text-sm uppercase tracking-[0.5em] text-muted-foreground">by</span>
                <a
                  href="https://voltik.es"
                  className="inline-flex items-center hover:opacity-80 transition-opacity"
                  aria-label="Voltik - Ir a la página principal"
                >
                  <VoltikLogo className="h-10 md:h-14 w-auto" alt="Voltik - Eficiencia energética" />
                </a>
              </div>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl pt-2">
                Sube tu factura de la luz y comienza a ahorrar gracias a la colaboración con P&amp;R
                Apartments
              </p>
            </div>
          </div>

          {/* Formulario + beneficios */}
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
              <ContactForm
                fuente="colectivos-prapartments"
                showTitle={false}
                className="bg-background/95 shadow-2xl rounded-2xl border border-primary/5 backdrop-blur-sm"
              />

              <aside className="voltik-card bg-background/80 border border-primary/10 shadow-lg rounded-2xl p-6 lg:p-8 space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-voltik-success/15 border border-voltik-success/30 text-voltik-success text-xs font-semibold mb-4">
                    Servicio 100% gratuito
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Analizamos tu factura sin compromiso
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Completa el formulario y sube tu factura. Te enviaremos tu propuesta personalizada
                    en menos de 48h.
                  </p>
                </div>

                <div className="space-y-5">
                  {benefits.map((benefit) => (
                    <div key={benefit.title} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon size={22} className="text-foreground" />
                      </div>
                      <div className="text-left space-y-1">
                        <h4 className="text-base font-semibold text-foreground">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="voltik-card bg-primary/5 border border-primary/20 p-4 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <BadgeCheck size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-foreground mb-1">Garantía de privacidad</h4>
                      <p className="text-sm text-muted-foreground">
                        Tus datos están protegidos por RGPD. Solo los usamos para preparar tu propuesta
                        y nunca los compartimos con terceros.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default LandingPrapartments
