import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useEffect } from 'react'
import { useScrollAnimationOptimized } from '@/hooks/use-scroll-animation-optimized'

const faqs = [
  {
    question: '¿Cuánto cuesta el análisis de mi factura?',
    answer: 'Nuestro servicio es 100% gratuito. Solo necesitamos tu factura para comparar tarifas y proponerte la opción de ahorro que mejor se adapte a tu consumo.',
  },
  {
    question: '¿Hay riesgo de que se corte mi suministro eléctrico?',
    answer: 'No. Tu suministro eléctrico siempre será seguro. Solo cambiamos la comercializadora, pero la luz sigue llegando exactamente igual. No hay cortes, no hay interrupciones, no hay riesgo alguno.',
  },
  {
    question: '¿Qué tengo que hacer una vez os envío la factura?',
    answer: 'Nada más. Analizamos los datos por ti, negociamos con las comercializadoras y te enviamos la propuesta lista para aceptar o rechazar.',
  },
  {
    question: '¿Cómo se realiza el cambio de comercializadora?',
    answer: 'Si aceptas la oferta, nos encargamos de toda la gestión con la comercializadora. Te mantenemos informado y tú solo confirmas el momento del cambio.',
  },
  {
    question: '¿Tengo algún compromiso o permanencia?',
    answer: 'No. Puedes utilizar nuestro informe como referencia y decidir libremente. No hay permanencias con Voltik y controlas la decisión final.',
  },
  {
    question: '¿Gestionáis certificados de eficiencia y boletines oficiales?',
    answer: 'Sí. Nuestro equipo técnico colegiado prepara certificados energéticos, boletines eléctricos (CIE) y cualquier documentación que necesites para legalizar tu instalación.',
  },
]

export default function Faqs() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimationOptimized()

  useEffect(() => {
    // FAQPage Schema Markup
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }

    // Remove existing FAQ schema if any
    const existingSchema = document.getElementById('faq-schema')
    if (existingSchema) {
      existingSchema.remove()
    }

    // Add new FAQ schema
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'faq-schema'
    script.textContent = JSON.stringify(faqSchema)
    document.head.appendChild(script)

    return () => {
      const schemaToRemove = document.getElementById('faq-schema')
      if (schemaToRemove) {
        schemaToRemove.remove()
      }
    }
  }, [])

  return (
    <section id="faqs" className="voltik-section-compact relative overflow-hidden bg-muted/20">
      <div className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" aria-hidden />
      <div className="voltik-container-tight relative">
        <div 
          ref={sectionRef}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            No queremos que tengas dudas, por eso resolvemos las más habituales
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="faq-0" className={`bg-background/80 border border-primary/20 rounded-[2.5rem] divide-y scroll-animate-stagger ${sectionVisible ? 'animate-in' : ''}`}>
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`} className="px-4">
              <AccordionTrigger className="text-md font-semibold text-foreground py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
