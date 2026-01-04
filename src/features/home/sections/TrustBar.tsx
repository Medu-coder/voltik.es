import { PiggyBank, ShieldCheck, Zap } from 'lucide-react'
import { useScrollAnimationOptimized } from '@/hooks/use-scroll-animation-optimized'

export default function TrustBar() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimationOptimized()

  const highlights = [
    {
      icon: Zap,
      text: 'La misma luz por menos dinero',
    },
    {
      icon: PiggyBank,
      text: 'Ahorro medio del 20%',
    },
    {
      icon: ShieldCheck,
      text: 'No almacenamos tus datos',
    },
  ]

  return (
    <section id="confianza" className="voltik-section-compact relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/10" aria-hidden />
      <div className="voltik-container-narrow relative">
        <div ref={sectionRef} className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center stagger-container">
          {highlights.map((item) => (
            <div
              key={item.text}
              className={`group flex items-center gap-3 rounded-full bg-background/90 border border-primary/20 px-5 py-3 shadow-md hover:shadow-xl transition-all duration-base ease-out hover:-translate-y-0.5 scroll-animate-stagger ${sectionVisible ? 'animate-in' : ''}`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/40 text-text shadow-sm">
                <item.icon size={20} />
              </div>
              <span className="text-sm md:text-base font-semibold text-foreground">
                {item.text}
              </span>
            </div>
          ))}
        </div>
        <p className={`mt-6 text-center text-sm font-semibold text-muted-foreground scroll-animate-stagger ${sectionVisible ? 'animate-in' : ''}`}>
          Más de 5.000 hogares y negocios ya confían en Voltik para ahorrar en su factura eléctrica
        </p>
      </div>
    </section>
  )
}
