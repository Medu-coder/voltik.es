import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const testimonials = [
    {
      quote: 'Envié mi factura un lunes y el miércoles ya tenía una oferta nueva. Ahora pago 32€ menos al mes en mi piso.',
      author: 'Lucía Rodríguez',
      role: 'Hogar urbano (2 personas)',
      rating: 5,
      location: 'Córdoba capital',
      savings: 'Ahorro mensual 32€',
      initials: 'LR',
    },
    {
      quote: 'Nos ajustaron la potencia nocturna y añadieron discriminación horaria. La factura de mi familia bajó 480€ al año.',
      author: 'Familia Sánchez',
      role: 'Vivienda unifamiliar',
      rating: 5,
      location: 'Almodóvar del Río',
      savings: 'Ahorro anual 480€',
      initials: 'FS',
    },
    {
      quote: 'Compararon 6 comercializadoras y negociaron por nosotros. El restaurante ahorra un 21% sin cambiar de hábitos.',
      author: 'Laura Gómez',
      role: 'Restaurante de barrio',
      rating: 5,
      location: 'Lucena',
      savings: 'Ahorro mensual 210€',
      initials: 'LG',
    },
    {
      quote: 'Para la nave industrial consiguieron una tarifa indexada con cobertura. El ahorro anual supera los 3.500€.',
      author: 'Manuel Ortega',
      role: 'Empresa industrial',
      rating: 5,
      location: 'Polígono Las Quemadas',
      savings: 'Ahorro anual 3.500€',
      initials: 'MO',
    },
  ]

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlay) return
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(timer)
  }, [isAutoPlay, testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
  }

  return (
    <section id="testimonios" className="voltik-section bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="voltik-container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Historias reales de ahorro con Voltik
          </h2>
          <p className="lead">
            Hogares, comercios e industria ya están pagando menos por la luz gracias a nuestro análisis personalizado.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative w-full mx-auto lg:max-w-4xl">
          <div className="overflow-x-hidden rounded-2xl max-w-full w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="voltik-card text-center bg-background/80 backdrop-blur-sm border border-primary/20 px-4 py-6">
                    {testimonial.savings && (
                      <span className="inline-flex items-center px-3 py-1 mb-4 rounded-full bg-primary text-sm font-semibold text-foreground">
                        {testimonial.savings}
                      </span>
                    )}
                    {/* Quote Icon */}
                    <Quote size={48} className="mx-auto mb-6 text-primary/30" />

                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl text-foreground mb-8 italic font-medium">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="border-t border-primary/20 pt-6">
                      <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary/15 text-primary font-semibold flex items-center justify-center">
                          {testimonial.initials}
                        </div>
                      </div>
                      <div className="font-semibold text-foreground text-lg">
                        {testimonial.author}
                      </div>
                      <div className="text-primary font-medium">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 p-3 bg-background shadow-lg rounded-full hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 p-3 bg-background shadow-lg rounded-full hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                  currentSlide === index 
                    ? 'bg-primary' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            ¿Tú también quieres ser un cliente satisfecho?
          </h3>
          <VoltikButton variant="voltik" size="lg" asChild>
            <a href="/formulario">Contacta con nosotros gratis</a>
          </VoltikButton>
        </div>
      </div>
    </section>
  )
}
