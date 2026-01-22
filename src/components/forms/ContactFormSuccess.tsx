import { Check, MessageCircle } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import { pushDataLayerEvent } from '@/lib/analytics'
import { WHATSAPP_URL_POST_FORM } from '@/lib/whatsapp'

interface ContactFormSuccessProps {
  onReset: () => void
  className?: string
  whatsappUrl?: string
}

export default function ContactFormSuccess({
  onReset,
  className = "",
  whatsappUrl = WHATSAPP_URL_POST_FORM
}: ContactFormSuccessProps) {
  return (
    <div className={`voltik-card text-center bg-background ${className}`}>
      <Check size={56} className="mx-auto text-voltik-success mb-6" />
      <h2 className="text-3xl font-bold text-foreground mb-4">¡Factura enviada!</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Te contactaremos en menos de 48 horas con tu propuesta personalizada de ahorro.
      </p>
      <div className="flex flex-col items-center gap-3">
        <VoltikButton
          variant="outline"
          size="lg"
          onClick={onReset}
          className="px-8"
        >
          Enviar otra factura
        </VoltikButton>
        <VoltikButton
          variant="voltik"
          size="lg"
          asChild
          className="px-8"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              pushDataLayerEvent({
                event: 'whatsapp_cta_click',
                cta_layer: 'post_submit',
                cta_location: 'contact_form_success',
                cta_message: 'post_form',
              })
            }
          >
            <MessageCircle size={18} className="mr-2" />
            Contactar por WhatsApp
          </a>
        </VoltikButton>
      </div>
      <div className="mt-6 rounded-[1.75rem] border border-green-500/20 bg-green-50/60 p-4 text-center">
        <p className="text-sm font-semibold text-foreground">Atención al cliente</p>
        <p className="text-xs text-muted-foreground mt-1">
          Respuesta en horario laboral (L-V 9:00-18:00)
        </p>
      </div>
    </div>
  )
}
