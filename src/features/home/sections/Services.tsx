import { FileText, ScrollText } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import { useScrollAnimationOptimized } from '@/hooks/use-scroll-animation-optimized'
import certificado from '@/assets/certificado.png'
import boletin from '@/assets/cie.png'

export default function Services() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimationOptimized()

  const secondaryServices = [
    {
      title: 'Certificados de eficiencia energética',
      description: 'Preparamos el certificado oficial que necesitas para vender o alquilar tu inmueble, incluyendo asesoramiento sobre mejoras de consumo',
      icon: FileText,
      cta: 'Solicitar certificado',
      image: certificado,
      imageAlt: 'Técnico evaluando eficiencia energética en un local comercial',
    },
    {
      title: 'Boletines eléctricos (CIE)',
      description: 'Tramitamos y legalizamos tu instalación para altas nuevas, cambios de potencia o revisiones obligatorias ante la distribuidora',
      icon: ScrollText,
      cta: 'Solicitar boletín',
      image: boletin,
      imageAlt: 'Instalación eléctrica revisada por técnicos certificados',
    },
  ]

  return (
    <section id="servicios" className="voltik-section-compact relative overflow-hidden">
      <div className="absolute -top-20 left-0 h-56 w-56 rounded-full bg-secondary/25 blur-3xl" aria-hidden />
      <div className="voltik-container-narrow relative">
        <div 
          ref={sectionRef}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            Servicios que completan tu ahorro energético
          </h2>
          <p className="text-lg text-muted-foreground">
            Somos asesores energéticos e ingenieros eléctricos colegiados.<br />
            Realizamos todo tipo de gestiones técnicas y legales en tus instalaciones.<br />
            <a href="/servicios" className="voltik-inline-link text-md">Conoce todos nuestros servicios</a> y{" "}
            <a href="/como-funciona" className="voltik-inline-link text-md">descubre cómo funciona</a>.
          </p>
        </div>

        <div className="voltik-grid-2 stagger-container">
          {secondaryServices.map((service) => (
            <article
              key={service.title}
              className={`voltik-card bg-background/95 border border-primary/10 shadow-lg h-full flex flex-col justify-between scroll-animate-stagger ${sectionVisible ? 'animate-in' : ''}`}
            >
              <div>
                <div className="relative mb-5 overflow-hidden rounded-[2.5rem] border border-primary/10">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-40 w-full object-cover md:h-44"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                </div>
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
