import { ArrowRight } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'

export default function ProblemAgitation() {
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
    'Analizamos tu consumo real y detectamos sobrecostes',
    'Lanzamos tu factura a comercializadoras para recibir sus mejores propuestas',
    'Te entregamos un informe claro para que solo tengas que decidir',
  ]

  return (
    <section id="problema" className="voltik-section bg-muted/40">
      <div className="voltik-container">
        <div className="max-w-6xl mx-auto grid gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¿Pagas demasiado en tu factura de la luz?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Las tarifas cambian cada mes y la mayoría de hogares y negocios siguen pagando condiciones que dejaron de ser competitivas hace tiempo. Sin un estudio experto, es fácil asumir costes que no corresponden.
            </p>

            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <div
                  key={point.title}
                  className="voltik-card bg-gradient-to-r from-destructive/10 via-background to-background border border-destructive/20 text-left flex items-start gap-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-destructive text-white text-sm font-semibold shadow-md">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-destructive mb-2">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="voltik-card bg-background relative overflow-hidden">
            <div className="absolute inset-y-0 right-0 w-1/3 bg-primary/10 blur-2xl" aria-hidden />
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium mb-6">
              La solución Voltik
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Analizamos tu factura y te enviamos la mejor oferta. Gratis y sin complicaciones.
            </h3>
            <p className="text-muted-foreground mb-8">
              Deja que las eléctricas se peleen por ofrecerte su mejor precio. Nosotros nos encargamos de todo y tú solo eliges si quieres aceptar la propuesta.
            </p>

            <ul className="space-y-4">
              {solutionHighlights.map((text, index) => (
                <li key={text} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold text-foreground">
                    {index + 1}
                  </div>
                  <span className="text-sm md:text-base text-foreground/90 flex-1">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-center">
              <VoltikButton variant="voltik" size="lg" asChild>
                <a href="#formulario" className="group">
                  Quiero mi oferta ya
                  <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </VoltikButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
