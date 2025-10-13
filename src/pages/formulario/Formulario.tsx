import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactForm from '@/components/forms/ContactForm'
import { Clock, ShieldCheck, Lock, BadgeCheck } from 'lucide-react'
import { useContactForm } from '@/hooks/use-contact-form'
import VoltikLogo from '@/components/ui/VoltikLogo'
import Seo from '@/app/seo/Seo'

const FormularioPage = () => {
  const { submitted } = useContactForm()

  return (
    <>
      <Seo
        title={submitted ? "Factura enviada - Voltik" : "Sube tu factura - Voltik · Ahorro energético"}
        description={submitted 
          ? "Tu factura ha sido enviada correctamente. Te contactaremos en menos de 48h con tu propuesta personalizada de ahorro energético."
          : "Sube tu factura de la luz y recibe una propuesta personalizada de ahorro en menos de 48h. Gratis y sin compromiso. Análisis de más de 70 comercializadoras."
        }
        type="website"
      />
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="voltik-section bg-gradient-to-br from-primary/10 to-secondary/20 relative overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0 opacity-20">
            <VoltikLogo
              alt="Ahorro energético con Voltik"
              className="w-full h-full object-contain sm:object-cover object-top sm:object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent"></div>
          </div>
          
          <div className="voltik-container relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Sube tu factura y empieza a ahorrar
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Analizamos tu factura y te enviamos la mejor oferta personalizada.<br />
                <strong>Gratis. No pagas nada. Sin complicaciones.</strong> Nosotros nos encargamos de todo.<br />
                Deja que las eléctricas se peleen por ti.
              </p>
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="formulario" className="voltik-section bg-gradient-to-br from-primary/10 to-secondary/20">
          <div className="voltik-container">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-voltik-success/20 border border-voltik-success/30 text-voltik-success text-sm font-medium mb-6">
                No pagas nada · Servicio 100% gratuito · 0€
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Recibe tu oferta personalizada en menos de 48h
              </h2>
              <p className="text-xl text-muted-foreground">
                Completa el formulario, sube tu factura PDF y nuestros asesores te enviarán la mejor propuesta.<br />
                <strong>Gratis. No pagas nada. Sin compromiso.</strong>
              </p>
              <p className="text-md text-muted-foreground mt-2">
                Tus datos solo se utilizan para buscar la mejor oferta para ti. No los almacenamos.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 lg:grid-cols-2 items-start">
                {/* Formulario */}
                <ContactForm 
                  showTitle={false}
                  className="bg-background/95"
                />

                {/* Benefits */}
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      ¿Por qué elegirnos?
                    </h3>
                    <p className="text-muted-foreground">
                      Nuestro compromiso es hacer que el ahorro energético sea real, transparente e inmediato.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Clock size={22} className="text-text" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">Respuesta en menos de 48h</h4>
                      </div>
                      <p className="text-muted-foreground ml-11">Sabemos que no quieres esperar. Somos ágiles.</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <ShieldCheck size={22} className="text-text" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">Expertos independientes</h4>
                      </div>
                      <p className="text-muted-foreground ml-11">Trabajamos con más de 70 comercializadoras y tú tienes siempre la última palabra.</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Lock size={22} className="text-text" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">Tus datos son tuyos</h4>
                      </div>
                      <p className="text-muted-foreground ml-11">No almacenamos tus datos. Solo los usamos para preparar tu oferta.</p>
                    </div>
                  </div>

                  <div className="voltik-card bg-primary/5 border border-primary/20 p-6">
                    <div className="flex items-start gap-3">
                      <BadgeCheck size={24} className="text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Garantía de privacidad</h4>
                        <p className="text-sm text-muted-foreground">
                          Tus datos están protegidos por RGPD. Solo los usamos para preparar tu propuesta y nunca los compartimos con terceros.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default FormularioPage