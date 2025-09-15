import { Heart, Shield, Zap, Smartphone } from 'lucide-react'

export default function Values() {
  const values = [
    {
      icon: Heart,
      title: "Cercanía",
      description: "Hablamos tu idioma y respondemos cada mensaje en menos de 2 horas.",
      color: "text-red-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Shield,
      title: "Fiabilidad", 
      description: "Cumplimos plazos y usamos solo material con certificación CE.",
      color: "text-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Zap,
      title: "Agilidad",
      description: "De la consulta al presupuesto firmado en un día laborable.",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Smartphone,
      title: "Eficiencia digital",
      description: "Todo tu proyecto, seguimiento y facturas en tu WhatsApp.",
      color: "text-green-500",
      bgColor: "bg-green-50"
    }
  ]

  return (
    <section id="valores" className="voltik-section bg-muted/30">
      <div className="voltik-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ¿Por qué elegirnos?
          </h2>
          <p className="lead">
            Nuestros valores son la base de cada proyecto que realizamos. 
            Conoce lo que nos hace diferentes en el sector eléctrico.
          </p>
        </div>

        {/* Values Grid */}
        <div className="voltik-grid-4">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="voltik-card text-center group hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background Icon */}
              <div className="absolute top-0 right-0 opacity-5 transform translate-x-4 -translate-y-4">
                <value.icon size={120} />
              </div>
              
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 ${value.bgColor} rounded-full flex items-center justify-center relative z-10`}>
                <value.icon size={32} className={value.color} />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 text-foreground relative z-10">
                {value.title}
              </h3>
              <p className="text-muted-foreground relative z-10">
                {value.description}
              </p>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Números que hablan por nosotros
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">+500</div>
                <div className="text-sm text-foreground/80">Instalaciones realizadas</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">&lt;24h</div>
                <div className="text-sm text-foreground/80">Tiempo de respuesta</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">2 años</div>
                <div className="text-sm text-foreground/80">Garantía incluida</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">98%</div>
                <div className="text-sm text-foreground/80">Clientes satisfechos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
