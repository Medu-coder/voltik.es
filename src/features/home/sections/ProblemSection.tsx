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
    <section
      id="problema"
      className="py-7 relative overflow-hidden"
    >
      <div className="absolute -top-24 right-0 h-56 w-56 rounded-full bg-destructive/10 blur-3xl" aria-hidden />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="voltik-container-narrow relative">
        <div className="max-w-5xl mx-auto">
          <div 
            ref={sectionRef}
            className="space-y-6"
          >
            <h2 className="text-xl md:text-3xl font-bold text-foreground text-center">
              ¿Pagas de más en tu factura de luz? Te ayudamos a ahorrar
            </h2>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch stagger-container">
              {painPoints.map((point, index) => (
                <div
                  key={point.title}
                  className={`group relative overflow-hidden rounded-[2.5rem] bg-background/90 border border-destructive/20 p-6 flex flex-col shadow-lg hover:shadow-2xl backdrop-blur-sm scroll-animate-stagger ${index === 2 ? 'sm:col-span-2 sm:justify-self-center sm:max-w-sm lg:col-span-1 lg:justify-self-stretch lg:max-w-none' : ''} ${sectionVisible ? 'animate-in' : ''}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-transparent opacity-70"></div>
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
