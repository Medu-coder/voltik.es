import { useState } from 'react'
import { UploadCloud, ShieldCheck, Clock, Lock, Check, BadgeCheck } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import { useToast } from '@/hooks/use-toast'

interface FormData {
  fecha: string
  nombre: string
  email: string
  telefono: string
}

interface FormErrors {
  nombre?: string
  email?: string
  telefono?: string
}

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdaF5kkJAPlsVZYph1V01g0ZflxRoQLxWlylTo6L5nDNh3I9g/formResponse'

export default function ContactForm() {
  const { toast } = useToast()
  const today = new Date().toISOString().slice(0, 10)

  const [formData, setFormData] = useState<FormData>({
    fecha: today,
    nombre: '',
    email: '',
    telefono: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: FormErrors = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio.'
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'Introduce al menos dos caracteres.'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio.'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Introduce un email válido.'
    }

    const phoneRegex = /^(\+34)?[6-9]\d{8}$/
    const normalizedPhone = formData.telefono.replace(/\s|-/g, '')
    if (!normalizedPhone) {
      newErrors.telefono = 'El teléfono es obligatorio.'
    } else if (!phoneRegex.test(normalizedPhone)) {
      newErrors.telefono = 'Introduce un teléfono móvil español válido.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const payload = new FormData()
      payload.append('entry.456367614', formData.fecha)
      payload.append('entry.1367672553', formData.nombre)
      payload.append('entry.1372703949', formData.email)
      payload.append('entry.725191283', formData.telefono)
      payload.append('entry.916166591', 'Análisis y optimización de factura eléctrica')
      payload.append(
        'entry.1602707373',
        'Solicitud enviada desde voltik.es para analizar factura eléctrica. Adjuntaremos el PDF manualmente hasta habilitar la subida desde la web.'
      )

      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: payload,
      })

      setSubmitted(true)
      toast({
        title: '¡Factura enviada!',
        description: 'Te contactaremos en menos de 48h con tu oferta para que comiences a ahorrar ya.',
      })

      setFormData({
        fecha: new Date().toISOString().slice(0, 10),
        nombre: '',
        email: '',
        telefono: '',
      })
    } catch (error) {
      toast({
        title: 'No hemos podido enviar tus datos',
        description: 'Vuelve a intentarlo en unos minutos o escríbenos por WhatsApp.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="formulario" className="voltik-section bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="voltik-container max-w-3xl mx-auto">
          <div className="voltik-card text-center bg-background">
            <Check size={56} className="mx-auto text-voltik-success mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">¡Factura enviada!</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Te contactaremos en menos de 48 horas con tu propuesta personalizada de ahorro. Si quieres, puedes preparar el PDF de tu factura para adjuntarlo cuando te escribamos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <VoltikButton variant="voltik" size="lg" onClick={() => setSubmitted(false)}>
                Enviar otra factura
              </VoltikButton>
              <VoltikButton variant="outline" size="lg" asChild>
                <a href="#contacto-alternativo">Hablar con el equipo</a>
              </VoltikButton>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="formulario" className="voltik-section bg-gradient-to-br from-primary/10 to-secondary/20">
      <div className="voltik-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Recibe tu oferta personalizada en menos de 48h
          </h2>
          <p className="text-lg text-muted-foreground">
            Completa el formulario, sube tu factura cuando esté disponible la opción y nuestros analistas te enviarán la mejor propuesta sin compromiso.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Tus datos están seguros. Solo los usamos para preparar tu oferta.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BadgeCheck size={18} className="text-primary" />
            Registro de comercializadoras homologadas
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck size={18} className="text-primary" />
            Datos cifrados y alojados en la UE
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock size={18} className="text-primary" />
            Informe en &lt; 48h garantizado
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="voltik-card space-y-6 bg-background/95" noValidate>
              <input type="hidden" name="fecha" value={formData.fecha} readOnly />

              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-foreground mb-2">
                  Nombre completo *
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre y apellidos"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.nombre ? 'border-destructive bg-destructive/5' : 'border-input bg-background hover:border-primary/50'
                  }`}
                  required
                />
                {errors.nombre && (
                  <p className="mt-1 text-sm text-destructive" role="alert">
                    {errors.nombre}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.email ? 'border-destructive bg-destructive/5' : 'border-input bg-background hover:border-primary/50'
                  }`}
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-semibold text-foreground mb-2">
                  Teléfono *
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="687 654 321"
                  className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.telefono ? 'border-destructive bg-destructive/5' : 'border-input bg-background hover:border-primary/50'
                  }`}
                  required
                />
                {errors.telefono && (
                  <p className="mt-1 text-sm text-destructive" role="alert">
                    {errors.telefono}
                  </p>
                )}
              </div>

              <div className="rounded-xl border border-dashed border-primary/50 bg-primary/5 p-6">
                <div className="flex items-start gap-4">
                  <UploadCloud size={28} className="text-primary mt-1" />
                  <div>
                    <p className="text-base font-semibold text-foreground mb-1">Subir factura (PDF)</p>
                    <p className="text-sm text-muted-foreground">
                      Estamos ultimando la subida directa de archivos. De momento, tras enviar tus datos te pediremos el PDF por email.
                    </p>
                    <VoltikButton variant="outline" size="sm" className="mt-4" disabled>
                      Próximamente disponible
                    </VoltikButton>
                  </div>
                </div>
              </div>

              <VoltikButton type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando datos…' : 'Enviar factura'}
              </VoltikButton>
            </form>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="voltik-card bg-background/80">
              <div className="flex items-start gap-4 mb-4">
                <Clock size={24} className="text-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Respuesta en menos de 48h</h3>
                  <p className="text-sm text-muted-foreground">
                    Te enviamos un informe claro con la mejor propuesta de ahorro para tu consumo real.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <ShieldCheck size={24} className="text-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Expertos independientes</h3>
                  <p className="text-sm text-muted-foreground">
                    Trabajamos con varias comercializadoras y tú eliges si quieres cambiarte o no.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Lock size={24} className="text-primary" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Datos protegidos</h3>
                  <p className="text-sm text-muted-foreground">
                    Seguimos las mejores prácticas de seguridad y no compartimos tus datos sin tu permiso.
                  </p>
                </div>
              </div>
            </div>

            <div className="voltik-card bg-secondary/20 border-secondary/40 text-sm text-muted-foreground">
              <p>
                Al enviar el formulario aceptas que podamos contactarte para compartir tu propuesta de ahorro. Consulta la
                <a href="/privacidad" className="ml-1 underline text-foreground hover:text-primary">política de privacidad</a> para más información.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
