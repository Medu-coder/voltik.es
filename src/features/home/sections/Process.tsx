import { Upload, BarChart3, Sparkles } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'

const steps = [
  {
    title: 'Sube tu factura',
    description: 'Adjunta tu última factura de luz junto con tus datos de contacto. Tardas menos de un minuto.',
    icon: Upload,
  },
  {
    title: 'Analizamos tu consumo',
    description: 'Comparamos tarifas, potencias y condiciones para detectar sobrecostes y oportunidades de ahorro.',
    icon: BarChart3,
  },
  {
    title: 'Recibe tu oferta',
    description: 'En menos de 48h tendrás una propuesta personalizada. Tú decides si quieres cambiarte o no.',
    icon: Sparkles,
  },
]

export default function Process() {
  return (
    <section id="proceso" className="voltik-section bg-primary/10">
      <div className="voltik-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Así de fácil es ahorrar con Voltik
          </h2>
          <p className="text-lg text-muted-foreground">
            Nuestro equipo se encarga de todo el trabajo pesado para que tú solo tengas que subir tu factura y aprobar la mejor propuesta.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="voltik-card h-full relative overflow-hidden text-left"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 uppercase tracking-wide">
                  Paso {index + 1}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-primary/40 bg-primary/10 shadow-sm">
                  <step.icon size={24} className="text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-base">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <VoltikButton variant="voltik" size="lg" asChild>
            <a href="#formulario">Subir factura ahora</a>
          </VoltikButton>
        </div>
      </div>
    </section>
  )
}
