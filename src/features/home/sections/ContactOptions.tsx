import { VoltikButton } from '@/components/ui/voltik-button'
import { MessageCircle, Phone, Mail } from 'lucide-react'

export default function ContactOptions() {
  return (
    <section id="contacto-alternativo" className="voltik-section">
      <div className="voltik-container px-4 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="voltik-card bg-primary/10 border-primary/30">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Prefieres que te contactemos por otro canal?
          </h2>
          <p className="text-muted-foreground mb-8">
            Si lo prefieres, escríbenos directamente o llámanos. Resolveremos todas tus dudas inmediatamente.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <VoltikButton variant="voltik" size="lg" asChild className="md:flex-1 shadow-md">
              <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
                <MessageCircle size={20} className="mr-2" />
                WhatsApp
              </a>
            </VoltikButton>
            <VoltikButton variant="outline" size="lg" asChild className="md:flex-1">
              <a href="tel:+34957000000" aria-label="Llamar por teléfono">
                <Phone size={20} className="mr-2" />
                Teléfono
              </a>
            </VoltikButton>
            <VoltikButton variant="ghost" size="lg" asChild className="md:flex-1">
              <a href="mailto:contacto@voltik.es" aria-label="Enviar correo a Voltik">
                <Mail size={20} className="mr-2" />
                Email
              </a>
            </VoltikButton>
          </div>
        </div>
      </div>
    </section>
  )
}
