import { ArrowRight } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import { useScrollAnimationOptimized } from '@/hooks/use-scroll-animation-optimized'

export default function SolutionSection() {
  const { ref: solutionRef, isVisible: solutionVisible } = useScrollAnimationOptimized()

  const solutionHighlights = [
    'Sube tu factura de luz y recibe la mejor oferta personalizada en menos de 48 horas.',
    'Nosotros nos encargamos de todo el papeleo y trámites. Tú solo ahorras.',
    'Sin compromiso ni permanencia. Cambias cuando quieras y ahorras desde el primer mes.',
  ]

  return (
    <section id="solucion" className="voltik-section pt-6 md:pt-8 lg:pt-10">
      <div className="voltik-container px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div 
            ref={solutionRef}
            className="voltik-card bg-background relative overflow-hidden"
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
