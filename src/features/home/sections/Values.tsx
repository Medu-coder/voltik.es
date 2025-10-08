import { BadgeCheck, Clock3, Lightbulb, Handshake } from 'lucide-react'
import useScrollAnimation from '@/hooks/use-scroll-animation'

export default function Values() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()

  const differentiators = [
    {
      icon: BadgeCheck,
      title: 'Transparencia total',
      description: 'Te mostramos comparativas reales y sin letra pequeña para que elijas con seguridad.',
      accent: 'bg-voltik-secondary/40 text-text',
      metric: '+8.000 informes emitidos',
    },
    {
      icon: Clock3,
      title: 'Ágiles y profesionales',
      description: 'Tu informe personalizado llega en menos de 48 horas, solo necesitamos tu aprobación para tramitar todo por ti.',
      accent: 'bg-voltik-success/15 text-text',
      metric: 'Tiempo de respuesta < 48h',
    },
    {
      icon: Lightbulb,
      title: 'Experiencia en el sector',
      description: 'Más de 10 años gestionando tarifas y proyectos para hogares, comercios e industria.',
      accent: 'bg-voltik-secondary/40 text-text',
      metric: '10 años de experiencia',
    },
    {
      icon: Handshake,
      title: 'Confianza y seguridad',
      description: 'Nosotros negociamos por ti, pero la última palabra siempre es tuya. Sin compromisos.',
      accent: 'bg-voltik-success/15 text-text',
      metric: '98% clientes satisfechos',
    },
  ]

  return (
    <section id="beneficios" className="voltik-section bg-muted/30">
      <div className="voltik-container px-4 lg:px-8">
        <div 
          ref={sectionRef}
          className={`text-center max-w-5xl mx-auto mb-12 scroll-animate-stagger ${sectionVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Valores que marcan la diferencia
          </h2>
          <p className="text-lg text-muted-foreground">
            En Voltik creemos en las relaciones a largo plazo, por eso velamos siempre por tus intereses energéticos. <br />
            Servicios de eficiencia energética con transparencia total y ahorro garantizado. <br />
            Descubre <a href="/#testimonios" className="text-muted-foreground hover:text-primary underline hover:no-underline transition-colors">lo que dicen nuestros clientes</a> y 
            conoce nuestros <a href="/servicios" className="text-muted-foreground hover:text-primary underline hover:no-underline transition-colors">servicios de eficiencia energética</a>.
          </p>
        </div>

        <div className="voltik-grid-4 stagger-container">
          {differentiators.map((item, index) => (
            <article
              key={item.title}
              className={`voltik-card text-left relative overflow-hidden group flex flex-col h-full scroll-animate-stagger ${sectionVisible ? 'animate-in' : ''}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${item.accent}`}>
                  <item.icon size={22} />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm md:text-base">
                {item.description}
              </p>
              <p className="mt-auto pt-6 text-xs uppercase tracking-wide text-text font-semibold">
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
