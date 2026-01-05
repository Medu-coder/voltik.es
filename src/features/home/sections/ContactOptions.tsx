import { VoltikButton } from '@/components/ui/voltik-button'
import { MessageCircle, Phone, Mail } from 'lucide-react'
import ComingSoonModal from '@/components/ui/ComingSoonModal'
import { useScrollAnimationOptimized } from '@/hooks/use-scroll-animation-optimized'

export default function ContactOptions() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimationOptimized()

  return (
    <section id="contacto-alternativo" className="voltik-section-compact relative overflow-hidden">
      <div className="absolute -top-24 left-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl" aria-hidden />
      <div className="voltik-container-narrow max-w-4xl mx-auto text-center relative">
        <div 
          ref={sectionRef}
          className={`voltik-card bg-primary/10 border-primary/30 shadow-xl rounded-3xl scroll-animate-stagger ${sectionVisible ? 'animate-in' : ''}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Prefieres contactarnos por otro canal?
          </h2>
          <p className="text-muted-foreground mb-8">
            Si lo prefieres, escríbenos directamente o llámanos. Resolveremos todas tus dudas inmediatamente
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <VoltikButton variant="voltik" size="lg" asChild className="md:flex-1">
              <a href="mailto:contacto@voltik.es" aria-label="Enviar correo a Voltik">
                <Mail size={20} className="mr-2" />
                Email
              </a>
            </VoltikButton>

            <ComingSoonModal
              trigger={
                <VoltikButton variant="outline" size="lg" className="md:flex-1 border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600 hover:text-green-700">
                  <MessageCircle size={20} className="mr-2" />
                  WhatsApp
                </VoltikButton>
              }
              serviceName="WhatsApp"
              description="WhatsApp estará disponible próximamente. Por ahora, puedes contactarnos por email y te responderemos lo antes posible."
            />

            <ComingSoonModal
              trigger={
                <VoltikButton variant="outline" size="lg" className="md:flex-1">
                  <Phone size={20} className="mr-2" />
                  Teléfono
                </VoltikButton>
              }
              serviceName="Teléfono"
              description="El servicio telefónico estará disponible próximamente. Por ahora, puedes contactarnos por email y te responderemos lo antes posible."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
