import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SecondaryContactForm from '@/components/forms/SecondaryContactForm'
import { Clock, ShieldCheck, Lock, BadgeCheck } from 'lucide-react'
import { useSecondaryContactForm } from '@/hooks/use-secondary-contact-form'
import voltikLogo from '@/assets/voltik-logo-web.svg'
import Seo from '@/app/seo/Seo'

const FormularioSec = () => {
  const location = useLocation()
  const { submitted } = useSecondaryContactForm()

  useEffect(() => {
    if (location.hash) {
      // Si hay un ancla, esperamos un tick y hacemos scroll al elemento
      const id = location.hash.slice(1)
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 0)
    } else {
      // Si no hay hash, colocamos la página en el inicio
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return (
    <>
      <Seo
        title={submitted ? "Solicitud enviada - Voltik" : "Servicios técnicos - Voltik · Certificados y boletines"}
        description={submitted 
          ? "Tu solicitud ha sido enviada correctamente. Te contactaremos en menos de 48h para gestionar tu solicitud de servicio técnico."
          : "Solicita tu certificado de eficiencia energética o boletín eléctrico (CIE). Servicios técnicos profesionales para tu inmueble o instalación."
        }
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
              alt="Servicios técnicos con Voltik"
              className="w-full h-full object-contain sm:object-cover object-top sm:object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent"></div>
          </div>
          
          <div className="voltik-container px-4 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Servicios técnicos profesionales
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Certificados de eficiencia energética y boletines eléctricos (CIE).<br />
                Tramitación completa y asesoramiento técnico especializado.<br />
                Ingenieros colegiados.
              </p>
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="formulario-sec" className="voltik-section">
          <div className="voltik-container px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid gap-8 lg:grid-cols-2 items-start">
                {/* Formulario */}
                <SecondaryContactForm />

                {/* Benefits */}
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      ¿Por qué elegirnos?
                    </h3>
                    <p className="text-muted-foreground">
                      Nuestro compromiso es facilitar que los servicios técnicos sean accesibles, transparentes y de calidad.
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
                        <h4 className="text-lg font-semibold text-foreground">Ingenieros colegiados</h4>
                      </div>
                      <p className="text-muted-foreground ml-11">Profesionales titulados y colegiados con amplia experiencia en el sector energético.</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Lock size={22} className="text-text" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">Tus datos son tuyos</h4>
                      </div>
                      <p className="text-muted-foreground ml-11">No almacenamos tus datos. Solo los usamos para gestionar tu solicitud.</p>
                    </div>
                  </div>

                  <div className="voltik-card bg-primary/5 border border-primary/20 p-6">
                    <div className="flex items-start gap-3">
                      <BadgeCheck size={24} className="text-text mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Garantía de privacidad</h4>
                        <p className="text-sm text-muted-foreground">
                          Tus datos están protegidos por RGPD. Solo los usamos para gestionar tu solicitud y nunca los compartimos con terceros.
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

export default FormularioSec