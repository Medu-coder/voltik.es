import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const testimonials = [
    {
      quote: "Voltik me instaló el cargador para mi coche eléctrico en 48h y sin cortar la luz de mi negocio. Profesionalidad de primera.",
      author: "María González",
      role: "Propietaria de restaurante",
      rating: 5,
      location: "Centro de Córdoba"
    },
    {
      quote: "Reforma eléctrica impecable y limpia. Cumplieron plazos y precio al céntimo. Los recomiendo sin dudarlo.",
      author: "Javier Martín",
      role: "Particular",
      rating: 5,
      location: "Provincia de Córdoba"
    },
    {
      quote: "Respondieron a una avería un domingo en menos de dos horas. Atención de 10 y precios transparentes.",
      author: "Carmen López",
      role: "Comercio local",
      rating: 5,
      location: "Barrio de Cañero"
    },
    {
      quote: "Instalación completa de placas solares en tiempo récord. Además puedo ver la producción desde el móvil.",
      author: "Ana Delgado",
      role: "Vivienda unifamiliar",
      rating: 5,
      location: "El Tablero"
    },
    {
      quote: "Optimizaron la potencia contratada y ahora pago 150€ menos cada mes. Una inversión que se paga sola.",
      author: "Rubén Torres",
      role: "Oficina",
      rating: 5,
      location: "Polígono Industrial las Quemadas"
    },
    {
      quote: "Legalización express en Industria. Documentación perfecta y seguimiento constante por WhatsApp.",
      author: "Miguel Ruiz",
      role: "Empresa industrial",
      rating: 5,
      location: "Polígono de La Torrecilla"
    }
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
    <section id="casos" className="voltik-section bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="voltik-container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Testimonios de clientes que confiaron en Voltik
          </h2>
          <p className="lead">
            Más de 500 proyectos completados con éxito en toda la provincia de Córdoba. 
            Conoce las experiencias reales de nuestros clientes.
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
            <a href="#contacto">Pide tu presupuesto gratis</a>
          </VoltikButton>
        </div>
      </div>
    </section>
  )
}