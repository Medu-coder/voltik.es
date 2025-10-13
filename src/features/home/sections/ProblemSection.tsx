import { useScrollAnimationOptimized } from '@/hooks/use-scroll-animation-optimized'

export default function ProblemSection() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimationOptimized()

  const painPoints = [
    {
      title: 'Pagas mucho de luz cada mes',
      description: 'Las tarifas antiguas y los cambios de mercado disparan tu factura sin avisar',
    },
    {
      title: 'No sabes si tu tarifa es la mejor',
      description: 'Hay cientos de ofertas y tarifas diferentes. Es imposible saber cuál te conviene más',
    },
    {
      title: 'Cambiar de compañía da pereza',
      description: 'Trámites, papeleo, llamadas... Te desanimas antes de empezar y sigues pagando de más',
    },
  ]

  return (
    <section id="problema" className="voltik-section bg-muted/40 pb-6 md:pb-8 lg:pb-10">
      <div className="voltik-container">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={sectionRef}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              ¿Pagas de más en tu factura de luz? Te ayudamos a ahorrar
            </h2>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch stagger-container">
              {painPoints.map((point, index) => (
                <div
                  key={point.title}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-destructive/5 to-destructive/10 border border-destructive/20 p-6 flex flex-col scroll-animate-stagger ${index === 2 ? 'sm:col-span-2 sm:justify-self-center sm:max-w-sm lg:col-span-1 lg:justify-self-stretch lg:max-w-none' : ''} ${sectionVisible ? 'animate-in' : ''}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-destructive to-destructive/80 text-white text-sm font-bold shadow-md">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-destructive mb-3 group-hover:text-destructive/90">{point.title}</h3>
                        <p className="text-muted-foreground leading-relaxed flex-1">{point.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
