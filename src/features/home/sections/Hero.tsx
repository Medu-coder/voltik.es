import { ArrowRight, Upload, PiggyBank, ShieldCheck } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import heroImage from '@/assets/hero-family.png'
import voltikLogo from '@/assets/voltik-logo-web.svg'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex items-center pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/40 via-primary/20 to-secondary/30"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src={heroImage}
          alt="Factura de luz digital"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent"></div>
      </div>

      <div className="voltik-container relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">

            <div className="mb-6">
              <img
                src={voltikLogo}
                alt="Voltik · Servicios de eficiencia energética"
                className="h-16 md:h-20 w-auto mx-auto lg:mx-0"
                loading="eager"
              />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Reducimos tu factura de la luz para que empieces a ahorrar hoy
            </h1>

            <p className="text-lg md:text-xl text-foreground mb-8 lg:max-w-2xl mx-auto lg:mx-0">
              Envíanos tu última factura y mejoramos tus condiciones. Gratis, sin compromiso y con una propuesta personalizada en menos de 48&nbsp;horas.
            </p>

            <div className="flex flex-col items-center sm:items-start gap-2">
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-start justify-center">
                <VoltikButton variant="primary" size="lg" className="shadow-lg shadow-primary/40" asChild>
                  <a href="#formulario" className="group">
                    Subir mi factura ahora
                    <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </VoltikButton>
                <VoltikButton variant="ghost" size="lg" className="bg-background/60 hover:bg-background/80" asChild>
                  <a href="#proceso" className="group text-base">
                    Ver cómo funciona
                    <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </VoltikButton>
              </div>
              <span className="text-xs text-muted-foreground uppercase tracking-wide text-center sm:text-left">
                Gratis y en menos de 1 minuto
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              <div className="flex items-center justify-center sm:justify-start gap-3 bg-background/70 rounded-xl px-4 py-3 border border-primary/20">
                <Upload size={20} className="text-primary" />
                <span className="text-sm font-medium">Sube tu factura en 1&nbsp;min</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3 bg-background/70 rounded-xl px-4 py-3 border border-primary/20">
                <PiggyBank size={20} className="text-primary" />
                <span className="text-sm font-medium">Ahorros medios del 20%</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3 bg-background/70 rounded-xl px-4 py-3 border border-primary/20">
                <ShieldCheck size={20} className="text-primary" />
                <span className="text-sm font-medium">Datos seguros y cifrados</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="voltik-card bg-background/90 backdrop-blur-sm border border-primary/30 shadow-xl transform md:-rotate-1 md:-translate-y-4">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Ahorro estimado</p>
                  <p className="text-3xl font-semibold text-primary-foreground">-28%</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Tiempo medio de respuesta</p>
                  <p className="text-3xl font-semibold text-primary-foreground">&lt; 48h</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border border-primary/20 p-4 bg-primary/10">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">Ejemplo factura negocio</p>
                  <p className="text-2xl font-semibold text-foreground">Ahorro anual 1.280€</p>
                </div>
                <div className="rounded-lg border border-primary/20 p-4 bg-secondary/10">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">Ejemplo factura hogar</p>
                  <p className="text-2xl font-semibold text-foreground">Ahorro mensual 38€</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-muted-foreground text-center">
                Más de 500 hogares y negocios ya confían en Voltik para ahorrar en su factura eléctrica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
