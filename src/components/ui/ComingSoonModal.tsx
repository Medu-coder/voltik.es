import { useState } from 'react'
import { Clock, Mail } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

interface ComingSoonModalProps {
  trigger: React.ReactNode
  serviceName: string
  description: string
}

export default function ComingSoonModal({ trigger, serviceName, description }: ComingSoonModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Clock size={20} className="text-text" />
            Próximamente
          </DialogTitle>
          <DialogDescription className="text-base text-left">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-3 mt-4">
          <a
            href="mailto:contacto@voltik.es"
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium text-center transition-colors"
          >
            <Mail size={16} className="inline mr-2" />
            Contactar por Email
          </a>
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md text-sm font-medium transition-colors"
          >
            Cerrar
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
