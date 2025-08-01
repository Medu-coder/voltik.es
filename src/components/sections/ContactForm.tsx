import { useState } from 'react'
import { Check, MessageCircle, Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import { useToast } from '@/hooks/use-toast'

interface FormData {
  fecha: string
  entry_1367672553: string // nombre
  entry_1372703949: string // email
  entry_725191283: string // telefono
  entry_916166591: string // servicio
  entry_1602707373: string // mensaje
}

interface FormErrors {
  [key: string]: string
}

export default function ContactForm() {
  const { toast } = useToast()
  // Fecha actual en formato YYYY-MM-DD
  const today = new Date().toISOString().slice(0, 10)
  const [formData, setFormData] = useState<FormData>({
    fecha: today,
    entry_1367672553: '',
    entry_1372703949: '',
    entry_725191283: '',
    entry_916166591: '',
    entry_1602707373: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const serviceTypes = [
    'Instalación nueva',
    'Reforma eléctrica', 
    'Placas solares',
    'Punto de recarga VE',
    'Domótica',
    'Mantenimiento',
    'Urgencia',
    'Otro'
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Nombre
    if (!formData.entry_1367672553.trim()) {
      newErrors.entry_1367672553 = 'El nombre es obligatorio'
    } else if (formData.entry_1367672553.trim().length < 2) {
      newErrors.entry_1367672553 = 'El nombre debe tener al menos 2 caracteres'
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.entry_1372703949.trim()) {
      newErrors.entry_1372703949 = 'El email es obligatorio'
    } else if (!emailRegex.test(formData.entry_1372703949)) {
      newErrors.entry_1372703949 = 'Introduce un email válido'
    }

    // Teléfono (formato español)
    const phoneRegex = /^(\+34)?[6-9]\d{8}$/
    if (!formData.entry_725191283.trim()) {
      newErrors.entry_725191283 = 'El teléfono es obligatorio'
    } else if (!phoneRegex.test(formData.entry_725191283.replace(/\s/g, ''))) {
      newErrors.entry_725191283 = 'Introduce un teléfono válido (ej: 687654321)'
    }

    // Tipo de servicio
    if (!formData.entry_916166591) {
      newErrors.entry_916166591 = 'Selecciona el tipo de servicio'
    }

    // Mensaje
    if (!formData.entry_1602707373.trim()) {
      newErrors.entry_1602707373 = 'Describe brevemente lo que necesitas'
    } else if (formData.entry_1602707373.trim().length < 10) {
      newErrors.entry_1602707373 = 'Proporciona más detalles (mínimo 10 caracteres)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    try {
      // Construir FormData con los nombres de Google Forms
      const form = new FormData()
      form.append('entry.456367614', formData.fecha) // Fecha
      form.append('entry.1367672553', formData.entry_1367672553) // Nombre
      form.append('entry.1372703949', formData.entry_1372703949) // Email
      form.append('entry.725191283', formData.entry_725191283) // Teléfono
      form.append('entry.916166591', formData.entry_916166591) // Servicio
      form.append('entry.1602707373', formData.entry_1602707373) // Mensaje

      // Enviar a Google Forms
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSdaF5kkJAPlsVZYph1V01g0ZflxRoQLxWlylTo6L5nDNh3I9g/formResponse',
        {
          method: 'POST',
          mode: 'no-cors',
          body: form,
        }
      )

      setSubmitted(true)
      toast({
        title: "¡Mensaje enviado!",
        description: "Te responderemos en menos de 24h laborables.",
      })
      // Reset form
      setFormData({
        fecha: new Date().toISOString().slice(0, 10),
        entry_1367672553: '',
        entry_1372703949: '',
        entry_725191283: '',
        entry_916166591: '',
        entry_1602707373: '',
      })
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Inténtalo de nuevo o contacta por WhatsApp.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  if (submitted) {
    return (
      <section id="contacto" className="voltik-section bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="voltik-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="voltik-card bg-green-50 border border-green-200">
              <Check size={64} className="mx-auto mb-6 text-green-600" />
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                ¡Mensaje recibido!
              </h2>
              <p className="text-green-700 mb-6">
                Gracias por contactar con Voltik. Te responderemos en menos de 24h laborables 
                con un presupuesto detallado.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <VoltikButton 
                  variant="secondary" 
                  onClick={() => setSubmitted(false)}
                >
                  Enviar otro mensaje
                </VoltikButton>
                <VoltikButton variant="outline" asChild>
                  <a href="https://wa.me/34957000000" target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={20} className="mr-2" />
                    WhatsApp directo
                  </a>
                </VoltikButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="voltik-section bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="voltik-container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ¡Contacta con nosotros!
          </h2>
          <p className="lead">
            Déjanos tus datos y recibe tu presupuesto <strong>gratis</strong> antes de 24h laborables.
          </p>
        </div>
        {/* Formulario en una sola fila */}
        <div className="voltik-card w-full mb-8">
          {/* Aviso de empresa en construcción */}
          <div className="mb-6 p-4 rounded-lg bg-voltik-warning/30 border border-voltik-warning/90 text-lg text-center font-semibold">
            <strong>Aviso:</strong> Voltik aún está en proceso de construcción y no atendemos nuevas solicitudes, aunque puedes dejarnos tus datos. ¡Gracias por tu interés!
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 w-full" noValidate>
            {/* Fecha (oculto, autocompletado) */}
            <input
              type="hidden"
              id="entry.456367614"
              name="fecha"
              value={formData.fecha}
              readOnly
            />

            {/* Nombre */}
            <div>
              <label htmlFor="entry.1367672553" className="block text-sm font-medium text-foreground mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                id="entry.1367672553"
                name="entry_1367672553"
                value={formData.entry_1367672553}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.entry_1367672553 
                    ? 'border-destructive bg-destructive/5' 
                    : 'border-input bg-background hover:border-primary/50'
                }`}
                placeholder="Tu nombre y apellidos"
                required
              />
              {errors.entry_1367672553 && (
                <p className="mt-1 text-sm text-destructive" role="alert">
                  {errors.entry_1367672553}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="entry.1372703949" className="block text-sm font-medium text-foreground mb-2">
                Email *
              </label>
              <input
                type="email"
                id="entry.1372703949"
                name="entry_1372703949"
                value={formData.entry_1372703949}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.entry_1372703949 
                    ? 'border-destructive bg-destructive/5' 
                    : 'border-input bg-background hover:border-primary/50'
                }`}
                placeholder="tu@email.com"
                required
              />
              {errors.entry_1372703949 && (
                <p className="mt-1 text-sm text-destructive" role="alert">
                  {errors.entry_1372703949}
                </p>
              )}
            </div>

            {/* Teléfono */}
            <div>
              <label htmlFor="entry.725191283" className="block text-sm font-medium text-foreground mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                id="entry.725191283"
                name="entry_725191283"
                value={formData.entry_725191283}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.entry_725191283 
                    ? 'border-destructive bg-destructive/5' 
                    : 'border-input bg-background hover:border-primary/50'
                }`}
                placeholder="687 654 321"
                required
              />
              {errors.entry_725191283 && (
                <p className="mt-1 text-sm text-destructive" role="alert">
                  {errors.entry_725191283}
                </p>
              )}
            </div>

            {/* Tipo de servicio */}
            <div>
              <label htmlFor="entry.916166591" className="block text-sm font-medium text-foreground mb-2">
                Tipo de servicio *
              </label>
              <select
                id="entry.916166591"
                name="entry_916166591"
                value={formData.entry_916166591}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.entry_916166591 
                    ? 'border-destructive bg-destructive/5' 
                    : 'border-input bg-background hover:border-primary/50'
                }`}
                required
              >
                <option value="">Selecciona un servicio</option>
                {serviceTypes.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.entry_916166591 && (
                <p className="mt-1 text-sm text-destructive" role="alert">
                  {errors.entry_916166591}
                </p>
              )}
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="entry.1602707373" className="block text-sm font-medium text-foreground mb-2">
                Cuéntanos tu proyecto *
              </label>
              <textarea
                id="entry.1602707373"
                name="entry_1602707373"
                value={formData.entry_1602707373}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                  errors.entry_1602707373 
                    ? 'border-destructive bg-destructive/5' 
                    : 'border-input bg-background hover:border-primary/50'
                }`}
                placeholder="Describe lo que necesitas: tipo de instalación, ubicación, plazos..."
                required
              />
              {errors.entry_1602707373 && (
                <p className="mt-1 text-sm text-destructive" role="alert">
                  {errors.entry_1602707373}
                </p>
              )}
            </div>

            {/* Submit Button */}
            
            <VoltikButton 
              type="submit" 
              variant="voltik" 
              size="lg" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin mr-2"></div>
                  Enviando...
                </div>
              ) : (
                <>
                  <Send className="mr-2 w-6 h-6 flex-shrink-0" />
                  <span className="block sm:hidden">Presupuesto hoy</span> {/* Short text for mobile */}
                  <span className="hidden sm:block">Quiero mi presupuesto hoy</span> {/* Full text for desktop */}
                </>
              )}
            </VoltikButton>
            
            {/*
            <VoltikButton
              type="submit"
              variant="voltik"
              size="lg"
              className="w-full py-3 text-sm sm:text-base px-2 sm:px-4"
              disabled
            >
              Formulario temporalmente deshabilitado
            </VoltikButton>
            */}

            {/* Privacy Notice */}
            <p className="text-xs text-muted-foreground text-center">
              Al enviar este formulario aceptas que podamos contactarte para ofrecerte 
              nuestros servicios. Consulta nuestra <a href="/privacidad" className="underline hover:text-primary">política de privacidad</a>.
            </p>
          </form>
        </div>
        {/* Grid con las dos tarjetas: contacto y WhatsApp */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Details */}
          <div className="voltik-card w-full">
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone size={20} className="mr-3 mt-1 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">Urgencias 24/7</div>
                  {/*
                  <a 
                    href="tel:+34957000000" 
                    className="text-voltik-info hover:underline"
                  >
                    957 000 000
                  </a>
                  */}
                  <span className="block text-voltik-warning font-normal text-sm mt-1 mb-2 min-h-[1.5em]">No disponible temporalmente</span>
                </div>
              </div>

              <div className="flex items-start">
                <MessageCircle size={20} className="mr-3 mt-1 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">WhatsApp</div>
                  {/*
                  <a 
                    href="https://wa.me/34957000000" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-voltik-info hover:underline"
                  >
                    Consulta directa
                  </a>
                  */}
                  <span className="block text-voltik-warning font-normal text-sm mt-1 mb-2 min-h-[1.5em]">No disponible temporalmente</span>
                </div>
              </div>

              <div className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">Email</div>
                  {/*
                  <a 
                    href="mailto:contacto@voltik.es" 
                    className="text-voltik-info hover:underline"
                  >
                    contacto@voltik.es
                  </a>
                  */}
                  <span className="block text-voltik-warning font-normal text-sm mt-1 mb-2 min-h-[1.5em]">No disponible temporalmente</span>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">Zona de servicio</div>
                  <span>Córdoba y provincia</span>
                </div>
              </div>

              <div className="flex items-start">
                <Clock size={20} className="mr-3 mt-1 text-primary flex-shrink-0" />
                <div>
                  <div className="font-medium">Horario comercial</div>
                  <span>Lun-Vie 8:00-18:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="voltik-card w-full bg-green-50 border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-6">
              ¿Tienes prisa? ¡WhatsApp directo!
            </h3>
            <p className="text-green-700 mb-4 text-sm">
              Para consultas urgentes o si prefieres un contacto más directo.
            </p>
            {/*
            <VoltikButton variant="outline" asChild className="w-full border-green-600 text-green-700 hover:bg-green-600 hover:text-white">
              <a 
                href="https://wa.me/34957000000?text=Hola, necesito información sobre instalaciones eléctricas" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle size={20} className="mr-2" />
                Abrir WhatsApp
              </a>
            </VoltikButton>
            */}
            <VoltikButton
              variant="outline"
              className="w-full border-green-600 text-green-700 py-3 text-sm sm:text-base px-2 sm:px-4"
              disabled
            >
              <MessageCircle size={20} className="mr-2" />
              WhatsApp temporalmente deshabilitado
            </VoltikButton>
          </div>
        </div>
      </div>
    </section>
  )
}