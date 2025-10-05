import { Check } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'

interface SecondaryContactFormSuccessProps {
  onReset: () => void
  className?: string
}

export default function SecondaryContactFormSuccess({ onReset, className = "" }: SecondaryContactFormSuccessProps) {
  return (
    <div className={`voltik-card text-center bg-background ${className}`}>
      <Check size={56} className="mx-auto text-voltik-success mb-6" />
      <h2 className="text-3xl font-bold text-foreground mb-4">¡Solicitud enviada!</h2>
      <p className="text-lg text-muted-foreground mb-6">
        Nuestro equipo te contactará en menos de 48h para gestionar tu solicitud.
      </p>
      <div className="flex justify-center">
        <VoltikButton 
          variant="voltik" 
          size="lg" 
          onClick={onReset}
          className="px-8"
        >
          Enviar otra solicitud
        </VoltikButton>
      </div>
    </div>
  )
}
