import { BadgeCheck, Clock3, Lightbulb, Handshake } from 'lucide-react'

export default function Values() {
  const differentiators = [
    {
      icon: BadgeCheck,
      title: 'Transparencia total',
      description: 'Te mostramos comparativas reales y sin letra pequeña para que elijas con seguridad.',
      accent: 'bg-primary/15 text-primary',
      metric: '+500 informes emitidos',
    },
    {
      icon: Clock3,
      title: 'Rapidez garantizada',
      description: 'Tu informe personalizado llega en menos de 48 horas para que empieces a ahorrar enseguida.',
      accent: 'bg-secondary/30 text-secondary-foreground',
      metric: 'Media de respuesta 36h',
    },
    {
      icon: Lightbulb,
      title: 'Experiencia en el sector',
      description: 'Más de 10 años gestionando tarifas y proyectos para hogares, comercios e industria.',
      accent: 'bg-primary/15 text-primary',
      metric: '10 años de experiencia',
    },
    {
      icon: Handshake,
      title: 'Confianza y control',
      description: 'Nosotros negociamos por ti, pero la última palabra siempre es tuya. Sin compromisos.',
      accent: 'bg-voltik-success/15 text-voltik-success',
      metric: '98% clientes satisfechos',
    },
  ]

  return (
    <section id="beneficios" className="voltik-section bg-muted/30">
      <div className="voltik-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Beneficios que marcan la diferencia
          </h2>
          <p className="text-lg text-muted-foreground">
            Elegir Voltik significa tener un equipo experto que cuida tu factura y tus datos como si fueran propios.
          </p>
        </div>

        <div className="voltik-grid-4">
          {differentiators.map((item) => (
            <article
              key={item.title}
              className="voltik-card text-left relative overflow-hidden group flex flex-col h-full"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${item.accent}`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {item.description}
              </p>
              <p className="mt-auto pt-6 text-xs uppercase tracking-wide text-primary font-semibold">
                {item.metric}
              </p>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
