import { ArrowRight } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import useScrollAnimation from '@/hooks/use-scroll-animation'

export default function ProblemAgitation() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const { ref: solutionRef, isVisible: solutionVisible } = useScrollAnimation()

  const painPoints = [
    {
      title: 'Pagas de más cada mes',
      description: 'Las tarifas antiguas y los cambios de mercado disparan tu factura sin avisar.',
    },
    {
      title: 'Oferta poco transparente',
      description: 'Comparar comercializadoras lleva horas y la letra pequeña complica cualquier decisión.',
    },
    {
      title: 'Sin datos para negociar',
      description: 'Sin un análisis experto, es difícil saber qué potencia y tramo horario realmente necesitas.',
    },
  ]

  const solutionHighlights = [
    'Nuestros expertos analizan tu consumo real y detectan sobrecostes',
    'Hacemos que las comercializadoras se peleen por ofrecerte las mejores ofertas',
    'Te entregamos un informe claro para que solo tengas que decidir',
  ]

  return (
    <section id="problema" className="voltik-section bg-muted/40">
      <div className="voltik-container px-4 lg:px-8">
        <div className="max-w-6xl mx-auto grid gap-12">
          <div 
            ref={sectionRef}
            className={`space-y-6 scroll-animate-stagger ${sectionVisible ? 'animate-in' : ''}`}
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

          <div 
            ref={solutionRef}
            className={`voltik-card bg-background relative overflow-hidden scroll-animate-stagger ${solutionVisible ? 'animate-in' : ''}`}
          >
            <div className="absolute inset-y-0 right-0 w-1/3 bg-primary/10 blur-2xl" aria-hidden />
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              La solución Voltik
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
              <a href="/como-funciona" className="text-foreground hover:text-primary underline hover:no-underline">Analizamos tu factura</a> y te enviamos la mejor oferta.<br />
              Gratis y sin complicaciones, nosotros nos encargamos de todo.<br />
              Deja que las eléctricas se peleen por ti.
            </h3>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch stagger-container">
              {solutionHighlights.map((text, index) => (
                <div
                  key={text}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 p-6 flex flex-col scroll-animate-stagger ${index === 2 ? 'sm:col-span-2 sm:justify-self-center sm:max-w-sm lg:col-span-1 lg:justify-self-stretch lg:max-w-none' : ''} ${solutionVisible ? 'animate-in' : ''}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/80 text-text text-md font-bold shadow-md">
                        {index + 1}
                      </div>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed flex-1">{text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <VoltikButton variant="voltik" size="lg" asChild>
                <a href="/formulario" className="group">
                  Quiero mi oferta ya
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1" />
                </a>
              </VoltikButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
