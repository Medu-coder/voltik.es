import { FileText, ScrollText } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'

export default function Services() {
  const secondaryServices = [
    {
      title: 'Certificados de eficiencia energética',
      description: 'Preparamos el certificado oficial que necesitas para vender o alquilar tu inmueble, incluyendo asesoramiento sobre mejoras de consumo.',
      icon: FileText,
      cta: 'Solicitar certificado',
    },
    {
      title: 'Boletines eléctricos (CIE)',
      description: 'Tramitamos y legalizamos tu instalación para altas nuevas, cambios de potencia o revisiones obligatorias ante la distribuidora.',
      icon: ScrollText,
      cta: 'Solicitar boletín',
    },
  ]

  return (
    <section id="servicios" className="voltik-section">
      <div className="voltik-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Servicios que completan tu ahorro energético
          </h2>
          <p className="text-lg text-muted-foreground">
            Además de optimizar tu tarifa, gestionamos todos los trámites técnicos y legales para que tengas tu instalación al día sin complicaciones.
          </p>
        </div>

        <div className="voltik-grid-2">
          {secondaryServices.map((service) => (
            <article
              key={service.title}
              className="voltik-card h-full flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div>
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-base">
                  {service.description}
                </p>
              </div>
              <VoltikButton variant="outline" size="lg" className="mt-8 border-primary/40 hover:border-primary" asChild>
                <a href="#formulario">{service.cta}</a>
              </VoltikButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
