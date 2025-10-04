import { Check } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'

interface ContactFormSuccessProps {
  onReset: () => void
  className?: string
}

export default function ContactFormSuccess({ onReset, className = "" }: ContactFormSuccessProps) {
  return (
    <div className={`voltik-card text-center bg-background ${className}`}>
      <Check size={56} className="mx-auto text-voltik-success mb-6" />
      <h2 className="text-3xl font-bold text-foreground mb-4">¡Factura enviada!</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Te contactaremos en menos de 48 horas con tu propuesta personalizada de ahorro.
      </p>
      <div className="flex justify-center">
        <VoltikButton 
          variant="voltik" 
          size="lg" 
          onClick={onReset}
          className="px-8"
        >
          Enviar otra factura
        </VoltikButton>
      </div>
    </div>
  )
}
