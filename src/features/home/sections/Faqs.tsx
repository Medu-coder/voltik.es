import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: '¿Cuánto cuesta el análisis de mi factura?',
    answer: 'Nuestro servicio es 100% gratuito. Solo necesitamos tu factura para comparar tarifas y proponerte la opción de ahorro que mejor se adapte a tu consumo.',
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
  return (
    <section id="faqs" className="voltik-section bg-muted/30">
      <div className="voltik-container max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Resolviendo las dudas más habituales antes de que subas tu factura.
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="faq-0" className="bg-background/80 border border-primary/20 rounded-xl divide-y">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`} className="px-4">
              <AccordionTrigger className="text-base font-semibold text-foreground py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
