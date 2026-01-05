import { ArrowRight } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import { useScrollAnimationOptimized } from '@/hooks/use-scroll-animation-optimized'
import analisisImage from '@/assets/analisis-factura.png'

export default function SolutionSection() {
  const { ref: solutionRef, isVisible: solutionVisible } = useScrollAnimationOptimized()

  const solutionHighlights = [
    'Sube tu factura de luz y recibe la mejor oferta personalizada en menos de 48 horas',
    'Nosotros nos encargamos de todo el papeleo y trámites. Tú solo ahorras',
    'Sin compromiso ni permanencia. Cambias cuando quieras y ahorras desde el primer mes',
  ]

  return (
    <section
      id="solucion"
      className="voltik-section-compact relative overflow-hidden"
    >
      <div className="absolute -top-24 left-8 h-56 w-56 rounded-full bg-primary/15 blur-3xl" aria-hidden />
      <div className="voltik-container-narrow relative">
        <div className="max-w-5xl mx-auto">
          <div 
            ref={solutionRef}
            className="voltik-card bg-background/90 border border-primary/20 shadow-xl rounded-[3rem] relative overflow-hidden"
          >
            <div className="absolute inset-y-0 right-0 w-1/3 bg-primary/10 blur-2xl" aria-hidden />
            <div className="mb-6 flex justify-center">
              <div className="voltik-chip">
                Cómo funciona Voltik
              </div>
            </div>
            <div className="grid gap-10 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 text-left">
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-left">
                  <a href="/como-funciona" className="voltik-inline-link">Analizamos tu factura</a> y te enviamos la mejor oferta.<br />
                  Gratis. Sin coste. Sin compromiso. <br />
                  Nosotros nos encargamos de todo.<br />
                  Deja que las eléctricas se peleen por ti.
                </h3>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 stagger-container text-left">
                  {solutionHighlights.map((text, index) => (
                    <div
                      key={text}
                      className={`group relative overflow-hidden rounded-[2.5rem] bg-primary/20 border border-primary/20 p-6 flex flex-col shadow-lg hover:shadow-2xl backdrop-blur-sm scroll-animate-stagger ${solutionVisible ? 'animate-in' : ''}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-70"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100"></div>
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-text text-md font-bold shadow-md">
                            {index + 1}
                          </div>
                          <p className="text-base md:text-lg text-muted-foreground leading-relaxed flex-1 text-left">{text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-[3rem] border border-primary/20 shadow-xl">
                  <img
                    src={analisisImage}
                    alt="Técnico eléctrico revisando instalación para optimizar el consumo"
                    className="h-64 w-full object-cover md:h-72 lg:h-[420px]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-[2rem] bg-background/85 p-4 shadow-lg">
                    <p className="text-sm font-semibold text-foreground">Proceso guiado y sin papeleo</p>
                    <p className="text-xs text-muted-foreground">Nosotros nos ocupamos de todo para que ahorres sin esfuerzo.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-center">
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
