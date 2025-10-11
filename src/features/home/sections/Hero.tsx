import { ArrowRight, Upload, PiggyBank, ShieldCheck, Zap } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import heroImage from '@/assets/hero-family.png'
import voltikLogo from '@/assets/voltik-logo-web.svg'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex items-center pt-16 pb-16 md:pt-20 md:pb-24 bg-gradient-to-br from-primary/40 via-primary/20 to-secondary/30"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src={heroImage}
          alt="Familia ahorrando factura de luz con Voltik - Análisis gratuito de eficiencia energética en 48h"
          className="w-full h-full object-contain sm:object-cover object-top sm:object-center"
          loading="eager"
          fetchPriority="high"
          width="800"
          height="600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent"></div>
      </div>

      <div className="voltik-container relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left">

            <div className="mb-6">
            <img
              src={voltikLogo}
              alt="Voltik - Servicios de eficiencia energética y ahorro en factura de luz"
              className="h-16 md:h-20 w-auto mx-auto lg:mx-0"
              loading="eager"
              fetchPriority="high"
              width="200"
              height="80"
              style={{ willChange: 'auto' }}
            />
            </div>

            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Tu asesor energético de confianza para que empieces a ahorrar hoy
              </h1>
            </div>

            <p className="text-lg md:text-2xl text-foreground mb-8 lg:max-w-2xl mx-auto lg:mx-0">
              Servicios de eficiencia energética<br />
              Sube tu factura de luz y recibe la mejor oferta<br />
              Sin compromiso, totalmente gratis y con <a href="/como-funciona" className="text-foreground hover:text-foreground underline hover:no-underline transition-colors">oferta de ahorro en menos de 48&nbsp;horas</a>.
            </p>

            <div className="flex flex-col items-center sm:items-start gap-2">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                <div className="flex flex-col items-center gap-2">
                  <VoltikButton variant="primary" size="lg" className="shadow-lg shadow-primary/40 min-h-[48px] min-w-[200px]" asChild>
                    <a href="/formulario" className="group flex items-center justify-center">
                      Empieza a ahorrar hoy
                      <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </VoltikButton>
                  <span className="text-sm text-voltik-success font-bold uppercase tracking-wide text-center">
                    100% GRATIS - SIN COSTE - 0€
                  </span>
                </div>
                <VoltikButton variant="ghost" size="lg" className="bg-background/60 hover:bg-background/80 min-h-[48px] min-w-[180px]" asChild>
                  <a href="/como-funciona" className="group text-base flex items-center justify-center">
                    Ver cómo funciona
                    <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </VoltikButton>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              <div className="flex items-center justify-center sm:justify-start gap-3 bg-background/70 rounded-xl px-4 py-3 border border-primary/20">
                <Zap size={20} className="text-text" />
                <span className="text-sm font-medium">La misma luz por menos dinero</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3 bg-background/70 rounded-xl px-4 py-3 border border-primary/20">
                <PiggyBank size={20} className="text-text" />
                <span className="text-sm font-medium">Ahorro medio del 20%</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-3 bg-background/70 rounded-xl px-4 py-3 border border-primary/20">
                <ShieldCheck size={20} className="text-text" />
                <span className="text-sm font-medium">No almacenamos tus datos</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="voltik-card bg-background/95 backdrop-blur-sm border-0 shadow-2xl rounded-3xl max-w-sm mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-muted-foreground">Ahorro estimado</p>
                  <p className="text-2xl font-semibold text-primary-foreground">23%</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Tiempo medio de respuesta</p>
                  <p className="text-2xl font-semibold text-primary-foreground">&lt; 48h</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-xl border-0 p-4 bg-secondary/30">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">Ejemplo factura negocio</p>
                  <p className="text-2xl font-semibold text-foreground">Ahorro anual 1.280€</p>
                </div>
                <div className="rounded-xl border-0 p-4 bg-secondary/30">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">Ejemplo factura hogar</p>
                  <p className="text-2xl font-semibold text-foreground">Ahorro anual 456€</p>
                </div>
              </div>
              <p className="mt-6 text-sm font-semibold text-muted-foreground text-center">
                Más de 5.000 hogares y negocios ya confían en Voltik para ahorrar en su factura eléctrica
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
