import { FileText, ScrollText } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import { useScrollAnimationOptimized } from '@/hooks/use-scroll-animation-optimized'

export default function Services() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimationOptimized()

  const secondaryServices = [
    {
      title: 'Certificados de eficiencia energética',
      description: 'Preparamos el certificado oficial que necesitas para vender o alquilar tu inmueble, incluyendo asesoramiento sobre mejoras de consumo',
      icon: FileText,
      cta: 'Solicitar certificado',
    },
    {
      title: 'Boletines eléctricos (CIE)',
      description: 'Tramitamos y legalizamos tu instalación para altas nuevas, cambios de potencia o revisiones obligatorias ante la distribuidora',
      icon: ScrollText,
      cta: 'Solicitar boletín',
    },
  ]

  return (
    <section id="servicios" className="voltik-section">
      <div className="voltik-container">
        <div 
          ref={sectionRef}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Servicios que completan tu ahorro energético
          </h2>
          <p className="text-lg text-muted-foreground">
            Somos asesores energéticos e ingenieros eléctricos colegiados.<br />
            Realizamos todo tipo de gestiones técnicas y legales en tus instalaciones.<br />
            <a href="/servicios" className="text-muted-foreground hover:text-primary underline hover:no-underline transition-all duration-base ease-out hover:-translate-y-0.5">Conoce todos nuestros servicios</a> y 
            <a href="/como-funciona" className="text-muted-foreground hover:text-primary underline hover:no-underline transition-all duration-base ease-out hover:-translate-y-0.5"> descubre cómo funciona</a>.
          </p>
        </div>

        <div className="voltik-grid-2 stagger-container">
          {secondaryServices.map((service, index) => (
            <article
              key={service.title}
              className={`voltik-card h-full flex flex-col justify-between scroll-animate-stagger ${sectionVisible ? 'animate-in' : ''}`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/60 flex items-center justify-center">
                    <service.icon size={22} className="text-text" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground text-base">
                  {service.description}
                </p>
              </div>
              <VoltikButton variant="voltik" size="lg" className="mt-8 border-primary/40 hover:border-primary" asChild>
                <a href="/formulario-sec">{service.cta}</a>
              </VoltikButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
