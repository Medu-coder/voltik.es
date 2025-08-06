import { ArrowRight, Clock, Shield, Zap } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import heroImage from '@/assets/hero-electrician.jpg'
import voltikLogo from '@/assets/voltik-logo-web.svg'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-primary min-h-screen flex items-center pt-16 pb-20 md:pt-0 md:pb-0 scroll-mt-16 md:scroll-mt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Electricista profesional trabajando" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40"></div>
      </div>

      <div className="voltik-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Hero */}
          <div className="mb-8">
            <img 
              src={voltikLogo} 
              alt="Voltik - Instaladores eléctricos" 
              className="h-20 md:h-32 mx-auto mb-6"
              loading="eager"
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Tu instalación eléctrica,{' '}
            <span className="text-[hsl(var(--voltik-neutral-dark))]">
              resuelta en 24h
            </span>
          </h1>

          {/* Lead */}
          <p className="lead mb-8">
            Somos instaladores autorizados en Córdoba que combinan un trato humano impecable 
            con procesos 100% digitales: olvídate de esperas y complicaciones.
          </p>

          {/* Value Props - Quick */}
          <div className="flex flex-wrap justify-center text-center gap-6 mb-10 text-sm md:text-base">
            <div className="flex items-center justify-center bg-background/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock size={18} className="mr-2" />
              <span className="font-medium">Respuesta &lt; 24h</span>
            </div>
            <div className="flex items-center justify-center bg-background/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield size={18} className="mr-2" />
              <span className="font-medium">Garantía 2 años</span>
            </div>
            <div className="flex items-center justify-center bg-background/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Zap size={18} className="mr-2" />
              <span className="font-medium">Instalador autorizado</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <VoltikButton variant="voltik" size="lg" asChild>
              <a href="#contacto" className="group">
                Contacta con nosotros
                {/*
                Pide presupuesto en 1 min
                */}
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </VoltikButton>
            
            {/*
            <VoltikButton variant="outline" size="lg" asChild>
              <a href="tel:+34957000000">
                <Clock size={20} className="mr-2" />
                Urgencias 24/7
              </a>
            </VoltikButton>
            */}
          </div>

          {/* Trust Indicator */}
          <p className="mt-8 text-sm text-muted-foreground">
            Más de <strong className="text-foreground">500 instalaciones</strong> realizadas en Córdoba
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}