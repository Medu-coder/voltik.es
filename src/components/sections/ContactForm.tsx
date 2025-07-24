import { useState } from 'react'
import { Check, MessageCircle, Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import { useToast } from '@/hooks/use-toast'

interface FormData {
  nombre: string
  email: string
  telefono: string
  tipoServicio: string
  mensaje: string
}

interface FormErrors {
  [key: string]: string
}

export default function ContactForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    tipoServicio: '',
    mensaje: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const serviceTypes = [
    'Instalación nueva',
    'Reforma eléctrica', 
    'Domótica',
    'Punto de recarga VE',
    'Mantenimiento',
    'Urgencia',
    'Otro'
  ]

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio'
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres'
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Introduce un email válido'
    }

    // Teléfono (formato español)
    const phoneRegex = /^(\+34)?[6-9]\d{8}$/
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es obligatorio'
    } else if (!phoneRegex.test(formData.telefono.replace(/\s/g, ''))) {
      newErrors.telefono = 'Introduce un teléfono válido (ej: 687654321)'
    }

    // Tipo de servicio
    if (!formData.tipoServicio) {
      newErrors.tipoServicio = 'Selecciona el tipo de servicio'
    }

    // Mensaje
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'Describe brevemente lo que necesitas'
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = 'Proporciona más detalles (mínimo 10 caracteres)'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simular envío de formulario
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      setSubmitted(true)
      toast({
        title: "¡Mensaje enviado!",
        description: "Te responderemos en menos de 24h laborables.",
      })
      
      // Reset form
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        tipoServicio: '',
        mensaje: ''
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
      <div className="voltik-container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              ¡Contacta con nosotros!
            </h2>
            <p className="lead">
              Déjanos tus datos y recibe tu presupuesto <strong>gratis</strong> antes de 24h laborables.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="voltik-card lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.nombre 
                        ? 'border-destructive bg-destructive/5' 
                        : 'border-input bg-background hover:border-primary/50'
                    }`}
                    placeholder="Tu nombre y apellidos"
                    required
                  />
                  {errors.nombre && (
                    <p className="mt-1 text-sm text-destructive" role="alert">
                      {errors.nombre}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.email 
                        ? 'border-destructive bg-destructive/5' 
                        : 'border-input bg-background hover:border-primary/50'
                    }`}
                    placeholder="tu@email.com"
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-destructive" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.telefono 
                        ? 'border-destructive bg-destructive/5' 
                        : 'border-input bg-background hover:border-primary/50'
                    }`}
                    placeholder="687 654 321"
                    required
                  />
                  {errors.telefono && (
                    <p className="mt-1 text-sm text-destructive" role="alert">
                      {errors.telefono}
                    </p>
                  )}
                </div>

                {/* Tipo de servicio */}
                <div>
                  <label htmlFor="tipoServicio" className="block text-sm font-medium text-foreground mb-2">
                    Tipo de servicio *
                  </label>
                  <select
                    id="tipoServicio"
                    name="tipoServicio"
                    value={formData.tipoServicio}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.tipoServicio 
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
                  {errors.tipoServicio && (
                    <p className="mt-1 text-sm text-destructive" role="alert">
                      {errors.tipoServicio}
                    </p>
                  )}
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                    Cuéntanos tu proyecto *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                      errors.mensaje 
                        ? 'border-destructive bg-destructive/5' 
                        : 'border-input bg-background hover:border-primary/50'
                    }`}
                    placeholder="Describe lo que necesitas: tipo de instalación, ubicación, plazos..."
                    required
                  />
                  {errors.mensaje && (
                    <p className="mt-1 text-sm text-destructive" role="alert">
                      {errors.mensaje}
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
                      <Send size={20} className="mr-2" />
                      Quiero mi presupuesto hoy
                    </>
                  )}
                </VoltikButton>

                {/* Privacy Notice */}
                <p className="text-xs text-muted-foreground text-center">
                  Al enviar este formulario aceptas que podamos contactarte para ofrecerte 
                  nuestros servicios. Consulta nuestra <a href="/privacidad" className="underline hover:text-primary">política de privacidad</a>.
                </p>
              </form>
            </div>

            {/* Contact Details */}
            <div className="voltik-card">
              <h3 className="text-xl font-semibold mb-6">Contacto directo</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone size={20} className="mr-3 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium">Urgencias 24/7</div>
                    <a 
                      href="tel:+34957000000" 
                      className="text-primary hover:underline"
                    >
                      957 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MessageCircle size={20} className="mr-3 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <a 
                      href="https://wa.me/34957000000" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Consulta directa
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail size={20} className="mr-3 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium">Email</div>
                    <a 
                      href="mailto:contacto@voltik.es" 
                      className="text-primary hover:underline"
                    >
                      contacto@voltik.es
                    </a>
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
            <div className="voltik-card bg-green-50 border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                ¿Tienes prisa? ¡WhatsApp directo!
              </h3>
              <p className="text-green-700 mb-4 text-sm">
                Para consultas urgentes o si prefieres un contacto más directo.
              </p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}