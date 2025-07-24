import { AlertTriangle, Clock, TrendingDown } from 'lucide-react'

export default function ProblemAgitation() {
  return (
    <section className="voltik-section bg-muted/50">
      <div className="voltik-container text-center">
        <div className="max-w-4xl mx-auto">
          {/* Problem Statement */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ¿Te han dejado <span className="text-destructive">colgado</span> esperando un electricista?
          </h2>

          {/* Pain Points Grid */}
          <div className="voltik-grid-3-centered mb-8">
            <div className="voltik-card bg-destructive/10 border border-destructive/20">
              <AlertTriangle size={48} className="mx-auto mb-4 text-destructive" />
              <h3 className="font-semibold mb-2 text-destructive">Sin electricidad</h3>
              <p className="text-sm text-muted-foreground">
                Cada hora sin luz es productividad perdida y estrés innecesario
              </p>
            </div>

            <div className="voltik-card bg-destructive/10 border border-destructive/20">
              <Clock size={48} className="mx-auto mb-4 text-destructive" />
              <h3 className="font-semibold mb-2 text-destructive">Esperas infinitas</h3>
              <p className="text-sm text-muted-foreground">
                Promesas incumplidas y electricistas que no aparecen
              </p>
            </div>

            <div className="voltik-card bg-destructive/10 border border-destructive/20">
              <TrendingDown size={48} className="mx-auto mb-4 text-destructive" />
              <h3 className="font-semibold mb-2 text-destructive">Pérdidas económicas</h3>
              <p className="text-sm text-muted-foreground">
                Cada hora de retraso cuesta dinero y credibilidad
              </p>
            </div>
          </div>

          {/* Solution Preview */}
          <div className="bg-primary/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              En Voltik hacemos las cosas diferentes
            </h3>
            <p className="lead">
              Respondemos en menos de 24h, entregamos trabajos con garantía de 2 años 
              y utilizamos tecnología para que todo sea más ágil y transparente.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}