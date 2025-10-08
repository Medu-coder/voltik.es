import { useState, useEffect, useRef } from 'react'
import { Star, Quote, MapPin, TrendingDown } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import useScrollAnimation from '@/hooks/use-scroll-animation'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()

  const testimonials = [
    {
      quote: 'No me lo podía creer. Envié la factura y al día siguiente ya tenía una oferta mejor totalmente gratis. Ahora pago 29€ menos cada mes.',
      author: 'Antonio González',
      role: 'Piso',
      rating: 5,
      location: 'Madrid',
      savings: '29€/mes',
      initials: 'MG',
      time: 'Hace 2 semanas',
    },
    {
      quote: 'Mi madre me insistió en que lo probara. Al principio no me fiaba, pero ahora ahorro 45€ al mes en mi casa. Totalmente recomendable.',
      author: 'Carlos Ruiz',
      role: 'Casa unifamiliar',
      rating: 5,
      location: 'Valencia',
      savings: '45€/mes',
      initials: 'CR',
      time: 'Hace 1 mes',
    },
    {
      quote: 'Para el bar conseguimos una tarifa mucho mejor. Sin cambiar nada de nuestros horarios, la factura bajó 80€ al mes.',
      author: 'Ana Luque',
      role: 'Restaurante',
      rating: 5,
      location: 'Córdoba',
      savings: '80€/mes',
      initials: 'AM',
      time: 'Hace 3 semanas',
    },
    {
      quote: 'Estaba pagando una barbaridad en mi oficina. Ahora con la nueva tarifa ahorro 100€ al mes. No entiendo por qué no lo hice antes.',
      author: 'David López',
      role: 'Oficina',
      rating: 5,
      location: 'Sevilla',
      savings: '100€/mes',
      initials: 'DL',
      time: 'Hace 1 semana',
    },
    {
      quote: 'Mi pareja y yo estábamos hartos de pagar tanto dinero en luz. En 48 horas teníamos una oferta que nos ahorra 35€ mensuales.',
      author: 'Sofía Herrera',
      role: 'Pareja joven',
      rating: 5,
      location: 'Bilbao',
      savings: '35€/mes',
      initials: 'SH',
      time: 'Hace 1 mes',
    },
    {
      quote: 'Para la tienda de ropa conseguimos una tarifa por tramos perfecta. Ahorramos 95€ al mes sin tocar nada.',
      author: 'Roberto Silva',
      role: 'Local',
      rating: 5,
      location: 'Málaga',
      savings: '95€/mes',
      initials: 'RS',
      time: 'Hace 2 semanas',
    },
    {
      quote: 'No sabía que se podía negociar la luz. Ahora pago 42€ menos cada mes en mi piso. El proceso fue súper fácil.',
      author: 'Laura Jiménez',
      role: 'Piso',
      rating: 5,
      location: 'Zaragoza',
      savings: '42€/mes',
      initials: 'LJ',
      time: 'Hace 1 mes',
    },
    {
      quote: 'Mi negociofunciona 24/7 y la factura era un drama. Ahora ahorramos 150€ al mes con la nueva tarifa industrial.',
      author: 'Miguel Torres',
      role: 'Negocio industrial',
      rating: 5,
      location: 'Murcia',
      savings: '150€/mes',
      initials: 'MT',
      time: 'Hace 3 semanas',
    },
  ]

  // Auto-scroll infinito
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Review Schema Markup
  useEffect(() => {
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Voltik",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": testimonials.length,
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": testimonials.map(testimonial => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": testimonial.author,
          "jobTitle": testimonial.role
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": testimonial.rating,
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": testimonial.quote,
        "datePublished": new Date().toISOString().split('T')[0],
        "publisher": {
          "@type": "Organization",
          "name": "Voltik"
        },
        "itemReviewed": {
          "@type": "Service",
          "name": "Servicios de Eficiencia Energética",
          "provider": {
            "@type": "ProfessionalService",
            "name": "Voltik"
          }
        }
      }))
    }

    // Remove existing review schema if any
    const existingSchema = document.getElementById('review-schema')
    if (existingSchema) {
      existingSchema.remove()
    }

    // Add new review schema
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'review-schema'
    script.textContent = JSON.stringify(reviewSchema)
    document.head.appendChild(script)

    return () => {
      const schemaToRemove = document.getElementById('review-schema')
      if (schemaToRemove) {
        schemaToRemove.remove()
      }
    }
  }, [testimonials])

  // Duplicar testimonios para el efecto infinito
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section id="testimonios" className="voltik-section bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="voltik-container px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div 
          ref={sectionRef}
          className={`text-center mb-16 scroll-animate-stagger ${sectionVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            Miles de hogares y negocios en toda España ya están ahorrando en su factura de luz.<br /> 
            Historias reales de ahorro energético, ahorros reales en euros.<br /> 
            <a href="/como-funciona" className="text-muted-foreground hover:text-primary underline hover:no-underline transition-colors">Descubre cómo funciona</a>.
          </p>
        </div>

        {/* Infinite Carousel */}
        <div className="relative overflow-hidden max-w-3xl mx-auto">
          <div 
            ref={scrollContainerRef}
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)`,
              width: `${testimonials.length * 2 * 100}%`
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 px-2 sm:px-3"
                style={{ width: `${100 / (testimonials.length * 2)}%` }}
              >
                <div className="voltik-card bg-background/95 backdrop-blur-sm border border-primary/20 p-6 h-full">
                  {/* Savings Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/40 text-text text-sm font-semibold">
                      <TrendingDown size={14} />
                      {testimonial.savings}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.time}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-base text-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-primary font-semibold flex items-center justify-center text-sm">
                      {testimonial.initials}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground text-sm">
                        {testimonial.author}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin size={12} />
                        {testimonial.location} • {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-primary w-6' 
                  : 'bg-primary/30'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            ¿Quieres ser el siguiente en ahorrar?
          </h3>
          <VoltikButton variant="voltik" size="lg" asChild>
            <a href="/formulario">Empieza a ahorrar ahora</a>
          </VoltikButton>
        </div>
      </div>
    </section>
  )
}
