import { ArrowRight, PiggyBank, ShieldCheck, Zap } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import heroImage from '@/assets/hero-family.png'
import VoltikLogo from '@/components/ui/VoltikLogo'

export default function Hero() {
  const highlights = [
    { icon: Zap, text: 'La misma luz por menos dinero' },
    { icon: PiggyBank, text: 'Ahorro medio del 23%' },
    { icon: ShieldCheck, text: 'No almacenamos tus datos' },
  ]

  return (
    <section
      id="hero"
      className="relative overflow-hidden py-10"
    >
      <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/25 blur-3xl" aria-hidden />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/40 blur-3xl" aria-hidden />

      <div className="voltik-container-narrow relative">
        <div className="grid gap-12 lg:grid-cols-12 items-center mb-12">
          <div className="lg:col-span-6 text-center lg:text-left">

            <div className="mb-6 -mt-4 md:mt-0">
            <VoltikLogo
              className="h-16 md:h-20 w-auto mx-auto lg:mx-0"
              alt="Voltik - Servicios de eficiencia energética y ahorro en factura de luz"
            />
            </div>

            <div className="mb-6 -mt-2 md:mt-0">
              <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold text-foreground leading-tight mb-6">
                Tu asesor energético de confianza para que empieces a ahorrar hoy
              </h1>
            </div>

            <p className="text-lg md:text-2xl text-foreground mb-8 lg:max-w-xl mx-auto lg:mx-0">
              Sube tu factura de luz o gas, recibe la mejor oferta y comienza a ahorrar.<br />
              Sin compromiso, totalmente gratis y con una oferta en menos de 48&nbsp;horas.
            </p>

            <div className="flex flex-col items-center sm:items-start gap-2">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                <div className="flex flex-col items-center gap-2">
                  <VoltikButton variant="primary" size="lg" className="shadow-lg shadow-primary/40 min-h-[48px] min-w-[200px]" asChild>
                    <a href="/formulario" className="group flex items-center justify-center">
                      Quiero ahorrar
                      <ArrowRight size={20} className="ml-2 transition-transform duration-base ease-out group-hover:translate-x-1" />
                    </a>
                  </VoltikButton>
                  <span className="text-sm text-voltik-success font-bold uppercase tracking-wide text-center">
                    Totalmente gratuito <br />
                    ¡SIN COSTE!
                  </span>
                </div>
                 <VoltikButton variant="ghost" size="lg" className="bg-background/60 hover:bg-background/80 border-muted-foreground/70 min-h-[48px] min-w-[120px] px-5" asChild>
                  <a href="/como-funciona" className="group text-base flex items-center justify-center">
                    Ver cómo funciona
                    <ArrowRight size={20} className="ml-2 transition-transform duration-base ease-out group-hover:translate-x-1" />
                  </a>
                </VoltikButton>
              </div>
            </div>

          </div>

          <div className="lg:col-span-6">
            <div className="relative max-w-xl mx-auto">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" aria-hidden />
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img
                  src={heroImage}
                  alt="Familia ahorrando factura de luz con Voltik - Análisis gratuito de eficiencia energética en 48h"
                  className="h-80 w-full object-cover md:h-[420px] lg:h-[480px]"
                  loading="eager"
                  fetchPriority="high"
                  width="900"
                  height="700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/70 via-transparent to-transparent" />
                <div className="absolute left-0 top-0 z-10 flex h-20 w-36 flex-col items-center justify-center bg-primary/80 rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-none rounded-bl-none border-2 border-primary/30 bg-background/95 px-5 text-center shadow-lg ring-1 ring-primary/20 sm:h-24 sm:w-40">
                  <p className="text-sm sm:text-md font-bold text-foreground uppercase">Ahorro medio</p>
                  <p className="text-sm sm:text-md font-bold text-foreground">23%</p>
                </div>
                <div className="absolute bottom-0 right-0 z-10 flex h-20 w-36 flex-col items-center justify-center bg-primary/80 rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-none rounded-bl-none border-2 border-primary/30 bg-background/95 px-4 text-center shadow-lg ring-1 ring-primary/20 sm:h-24 sm:w-40">
                  <p className="text-sm sm:text-md font-bold text-foreground uppercase">Tiempo de respuesta</p>
                  <p className="text-sm sm:text-md font-bold text-foreground">&lt; 48h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-[3rem] px-6 py-6 bg-background/50">
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            {highlights.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 rounded-full bg-background/90 border border-primary/20 px-5 py-3 text-sm font-semibold text-foreground shadow-sm"
              >
                <item.icon size={18} className="text-foreground" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-center text-sm font-semibold text-muted-foreground">
            Más de 5.000 hogares y negocios ya confían en Voltik para ahorrar en su factura eléctrica
          </p>
        </div>
      </div>
    </section>
  )
}
