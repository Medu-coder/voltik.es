import { Home, Building2, Zap, Wrench, Car, Shield } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import residentialImage from '@/assets/residential-service.jpg'
import commercialImage from '@/assets/commercial-service.jpg'
import emergencyImage from '@/assets/emergency-service.jpg'

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Viviendas",
      description: "Reformas eléctricas completas, domótica inteligente y puntos de recarga para vehículo eléctrico.",
      image: residentialImage,
      features: ["Instalaciones nuevas", "Reformas eléctricas", "Domótica", "Puntos de recarga VE"]
    },
    {
      icon: Building2,
      title: "Negocios",
      description: "Cuadros eléctricos industriales, mantenimiento preventivo y legalizaciones oficiales.",
      image: commercialImage,
      features: ["Instalaciones comerciales", "Cuadros eléctricos", "Mantenimiento", "Legalizaciones"]
    },
    {
      icon: Zap,
      title: "Urgencias 24/7",
      description: "Reparación inmediata de averías y cortocircuitos sin esperas ni sorpresas.",
      image: emergencyImage,
      features: ["Respuesta inmediata", "Disponible 24/7", "Sin sobrecostes", "Diagnóstico gratuito"]
    }
  ]

  const process = [
    {
      step: "1",
      title: "Cuéntanos tu proyecto",
      description: "Rellena un breve formulario o envíanos WhatsApp con lo que necesitas.",
      icon: Wrench
    },
    {
      step: "2", 
      title: "Presupuesto en 24h",
      description: "Recibe una propuesta detallada con plazos claros y precios transparentes.",
      icon: Shield
    },
    {
      step: "3",
      title: "Instalación sin estrés",
      description: "Seguimiento digital, firma electrónica y garantía escrita de 2 años.",
      icon: Car
    }
  ]

  return (
    <section id="servicios" className="voltik-section">
      <div className="voltik-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Servicios eléctricos profesionales
          </h2>
          <p className="lead">
            Desde instalaciones domésticas hasta proyectos industriales, 
            con la garantía y profesionalidad que tu proyecto merece.
          </p>
        </div>

        {/* Services Grid */}
        <div className="voltik-grid-3 mb-20">
          {services.map((service, index) => (
            <div key={index} className="voltik-card group hover:scale-105 transition-transform duration-300">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 p-3 bg-primary rounded-full">
                  <service.icon size={24} className="text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <VoltikButton variant="outline" size="sm" className="w-full">
                Más información
              </VoltikButton>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-primary/10 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Nuestro proceso en 3 pasos
            </h3>
            <p className="lead">
              Simplicidad y transparencia desde el primer contacto hasta la entrega final
            </p>
          </div>

          <div className="voltik-grid-3-centered">
            {process.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/30"></div>
                  )}
                </div>
                
                <step.icon size={32} className="mx-auto mb-4 text-primary" />
                <h4 className="text-lg font-semibold mb-3">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <VoltikButton variant="voltik" size="lg" asChild>
              <a href="#contacto">Empezar mi proyecto ahora</a>
            </VoltikButton>
          </div>
        </div>
      </div>
    </section>
  )
}