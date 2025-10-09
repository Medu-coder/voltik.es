import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Shield, Lock, Eye, Trash2, Download, AlertCircle, Mail, Phone } from 'lucide-react'
import voltikLogo from '@/assets/voltik-logo-web.svg'
import Seo from '@/app/seo/Seo'

const Privacy = () => {
  const sections = [
    {
      icon: Shield,
      title: "Responsable del tratamiento",
      content: "Voltik, con domicilio en España, es el responsable del tratamiento de tus datos personales. Puedes contactarnos en contacto@voltik.es"
    },
    {
      icon: Eye,
      title: "Datos que recopilamos",
      content: "Recopilamos únicamente los datos necesarios para proporcionarte nuestros servicios: nombre, email, teléfono y factura de la luz que nos envías para el análisis."
    },
    {
      icon: Lock,
      title: "Finalidad del tratamiento",
      content: "Utilizamos tus datos para analizar tu factura eléctrica, preparar tu propuesta personalizada de ahorro y contactarte con la mejor oferta disponible en el mercado."
    },
    {
      icon: Trash2,
      title: "Conservación de datos",
      content: "Utilizamos tus datos únicamente durante el tiempo necesario para cumplir con la finalidad del tratamiento. Una vez enviada tu propuesta, eliminamos tus datos personales."
    },
    {
      icon: Download,
      title: "Tus derechos",
      content: "Tienes derecho a acceder, rectificar, suprimir, oponerte al tratamiento, limitar el uso y portar tus datos. Contacta con nosotros para ejercer cualquier derecho."
    },
    {
      icon: AlertCircle,
      title: "Seguridad y confidencialidad",
      content: "Implementamos medidas técnicas y organizativas para proteger tus datos. No compartimos tu información con terceros sin tu consentimiento explícito."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Política de privacidad · Voltik · Servicios de eficiencia energética"
        description="Conoce cómo Voltik protege y trata tus datos personales. Transparencia total en el tratamiento de tu información conforme al RGPD."
        type="website"
        robots="index,follow"
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
          
          <div className="voltik-container relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Shield size={40} className="text-text" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Política de privacidad
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Tu privacidad es nuestra prioridad. Te explicamos de forma clara y transparente cómo protegemos y tratamos tus datos personales.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-voltik-success/20 text-voltik-success rounded-full text-sm font-medium">
                <Lock size={16} />
                Cumplimiento RGPD
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="voltik-section">
          <div className="voltik-container">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="voltik-card bg-gradient-to-br from-primary/5 to-secondary/10 border border-primary/20 mb-12">
                <div className="text-center p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Compromiso con tu privacidad
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    En Voltik creemos en la transparencia total. Por eso, te explicamos de manera sencilla 
                    qué datos recopilamos, para qué los usamos y cómo los protegemos. Tu confianza es fundamental para nosotros.
                  </p>
                </div>
              </div>

              {/* Main content */}
              <div className="grid gap-8 md:grid-cols-2">
                {sections.map((section, index) => (
                  <div key={index} className="voltik-card group hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <section.icon size={22} className="text-text" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Contact section */}
              <div className="voltik-card bg-gradient-to-br from-secondary/10 to-primary/10 border border-secondary/20 mt-12">
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    ¿Tienes preguntas sobre tu privacidad?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Nuestro equipo está disponible para resolver cualquier duda sobre el tratamiento de tus datos personales.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:contacto@voltik.es"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <Mail size={20} />
                      contacto@voltik.es
                    </a>
                    <a
                      href="https://www.aepd.es"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground rounded-lg border border-primary/40 hover:border-primary/80 transition-colors"
                    >
                      <AlertCircle size={20} />
                      Agencia Española de Protección de Datos
                    </a>
                  </div>
                </div>
              </div>

              {/* Last updated */}
              <div className="text-center mt-12 p-6 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Última actualización: {new Date().toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Privacy
