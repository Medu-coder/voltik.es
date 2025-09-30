import { useState, useRef, useEffect } from 'react'
import { UploadCloud, ShieldCheck, Clock, Lock, Check, BadgeCheck, FileText, X } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import { useToast } from '@/hooks/use-toast'
import { useFileUpload } from '@/hooks/use-file-upload'
import ReCaptcha from '@/components/ui/ReCaptcha'

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
  archivo?: string
}

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdaF5kkJAPlsVZYph1V01g0ZflxRoQLxWlylTo6L5nDNh3I9g/formResponse'
const RECAPTCHA_SITE_KEY = '6Lft8dkrAAAAAMLeuF9nGQVsQelP7wIAJVGPHtF6'
// URL del backend para envío de facturas
const BACKEND_URL = 'http://localhost:3001/api/public/intake'

export default function ContactForm() {
  const { toast } = useToast()
  const today = new Date().toISOString().slice(0, 10)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const recaptchaRef = useRef<any>(null)

  const [formData, setFormData] = useState<FormData>({
    fecha: today,
    nombre: '',
    email: '',
    telefono: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string>('')
  const [showRecaptcha, setShowRecaptcha] = useState(false)

  // Hook para manejo de archivos
  const { file, error: fileError, isValid: isFileValid, handleFileSelect, reset: resetFile } = useFileUpload({
    maxSizeInMB: 10,
    allowedTypes: ['application/pdf']
  })

  // Mostrar reCAPTCHA cuando el archivo sea válido
  useEffect(() => {
    console.log('useEffect ejecutado:', { file: file?.name, isFileValid, showRecaptcha })
    if (file && isFileValid) {
      console.log('Mostrando reCAPTCHA')
      setShowRecaptcha(true)
    } else {
      console.log('Ocultando reCAPTCHA')
      setShowRecaptcha(false)
      setRecaptchaToken('')
    }
  }, [file, isFileValid])

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

    // Validar archivo si está presente
    if (file && !isFileValid) {
      newErrors.archivo = fileError || 'El archivo no es válido.'
    }

    // Validar reCAPTCHA si hay archivo
    if (file && !recaptchaToken) {
      newErrors.archivo = 'Debes completar la verificación reCAPTCHA.'
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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    event.stopPropagation()
    
    const selectedFile = event.target.files?.[0] || null
    console.log('Archivo seleccionado:', selectedFile?.name)
    
    handleFileSelect(selectedFile)
    
    // Limpiar errores de archivo
    if (errors.archivo) {
      setErrors((prev) => ({ ...prev, archivo: undefined }))
    }
  }

  const handleRemoveFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    resetFile()
    setShowRecaptcha(false)
    setRecaptchaToken('')
    setErrors((prev) => ({ ...prev, archivo: undefined }))
  }

  const handleRecaptchaVerify = (token: string) => {
    setRecaptchaToken(token)
    if (errors.archivo) {
      setErrors((prev) => ({ ...prev, archivo: undefined }))
    }
    toast({
      title: 'Verificación completada',
      description: 'Ya puedes enviar el formulario.',
    })
  }

  const handleRecaptchaError = () => {
    setRecaptchaToken('')
    toast({
      title: 'Error en reCAPTCHA',
      description: 'Hubo un problema con la verificación. Inténtalo de nuevo.',
      variant: 'destructive',
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.stopPropagation()
    console.log('Formulario enviado!', { formData, file: file?.name, recaptchaToken })
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Preparar datos para Google Forms (mantener formato original)
      const googleFormPayload = new FormData()
      googleFormPayload.append('entry.456367614', formData.fecha)
      googleFormPayload.append('entry.1367672553', formData.nombre)
      googleFormPayload.append('entry.1372703949', formData.email)
      googleFormPayload.append('entry.725191283', formData.telefono)
      googleFormPayload.append('entry.916166591', 'Análisis y optimización de factura eléctrica')
      googleFormPayload.append(
        'entry.1602707373',
        'Solicitud enviada desde voltik.es para analizar factura eléctrica.'
      )

      // Enviar a Google Forms (fallback)
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: googleFormPayload,
      })

      // Enviar al backend con todos los datos
      const backendPayload = new FormData()
      backendPayload.append('fecha', formData.fecha)
      backendPayload.append('nombre', formData.nombre)
      backendPayload.append('email', formData.email)
      backendPayload.append('telefono', formData.telefono)
      
      if (file) {
        backendPayload.append('archivo', file)
      }
      if (recaptchaToken) {
        backendPayload.append('recaptchaToken', recaptchaToken)
      }

      // Log del FormData para debugging
      console.log('📋 FormData creado:')
      for (const [key, value] of backendPayload.entries()) {
        if (value instanceof File) {
          console.log(`  - ${key}: File(${value.name}, ${value.size} bytes, ${value.type})`)
        } else {
          console.log(`  - ${key}: ${value}`)
        }
      }

      // Enviar al backend con todos los datos
      console.log('🚀 Iniciando envío al backend...')
      console.log('📍 URL del backend:', BACKEND_URL)
      console.log('📦 Datos a enviar al backend:')
      console.log('  - fecha:', formData.fecha)
      console.log('  - nombre:', formData.nombre)
      console.log('  - email:', formData.email)
      console.log('  - telefono:', formData.telefono)
      console.log('  - archivo:', file ? `${file.name} (${(file.size / 1024 / 1024).toFixed(2)}MB)` : 'No hay archivo')
      console.log('  - recaptchaToken:', recaptchaToken ? `${recaptchaToken.substring(0, 20)}...` : 'No hay token')
      
      try {
        console.log('📡 Enviando solicitud POST al backend...')
        const response = await fetch(BACKEND_URL, {
          method: 'POST',
          body: backendPayload,
        })
        
        console.log('✅ Respuesta del backend recibida:')
        console.log('  - Status:', response.status)
        console.log('  - Status Text:', response.statusText)
        console.log('  - Headers:', Object.fromEntries(response.headers.entries()))
        
        if (response.ok) {
          const responseData = await response.json()
          console.log('📄 Datos de respuesta:', responseData)
          console.log('🎉 ¡Envío al backend exitoso!')
        } else {
          console.error('❌ Error en la respuesta del backend:')
          console.error('  - Status:', response.status)
          console.error('  - Status Text:', response.statusText)
          const errorText = await response.text()
          console.error('  - Error Body:', errorText)
        }
        
      } catch (backendError) {
        console.error('💥 Error enviando al backend:')
        console.error('  - Tipo de error:', backendError.constructor.name)
        console.error('  - Mensaje:', backendError.message)
        console.error('  - Stack:', backendError.stack)
        console.warn('⚠️ Continuando con Google Forms como fallback...')
      }

      setSubmitted(true)
      toast({
        title: '¡Factura enviada!',
        description: 'Te contactaremos en menos de 48h con tu oferta para que comiences a ahorrar ya.',
      })

      // Resetear formulario
      setFormData({
        fecha: new Date().toISOString().slice(0, 10),
        nombre: '',
        email: '',
        telefono: '',
      })
      handleRemoveFile()
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
            Completa el formulario, sube tu factura PDF y nuestros analistas te enviarán la mejor propuesta sin compromiso.
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
                  <div className="flex-1">
                    <p className="text-base font-semibold text-foreground mb-1">Subir factura (PDF)</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      Selecciona tu factura PDF para un análisis más preciso. Máximo 10MB.
                    </p>
                    
                    {!file ? (
                      <div>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="application/pdf"
                          onChange={handleFileChange}
                          className="hidden"
                          id="file-upload"
                        />
                        <VoltikButton 
                          type="button"
                          variant="outline" 
                          size="sm" 
                          className="mt-2"
                          onClick={(e) => {
                            e.preventDefault()
                            fileInputRef.current?.click()
                          }}
                        >
                          <UploadCloud size={16} className="mr-2" />
                          Seleccionar archivo PDF
                        </VoltikButton>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-background rounded-lg border">
                          <FileText size={20} className="text-primary" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">
                              {file.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.preventDefault()
                              handleRemoveFile()
                            }}
                            className="p-1 hover:bg-destructive/10 rounded transition-colors"
                          >
                            <X size={16} className="text-destructive" />
                          </button>
                        </div>
                        
                        {fileError && (
                          <p className="text-sm text-destructive" role="alert">
                            {fileError}
                          </p>
                        )}
                        
                        {isFileValid && showRecaptcha && (
                          <div className="space-y-2">
                            <ReCaptcha
                              siteKey={RECAPTCHA_SITE_KEY}
                              onVerify={handleRecaptchaVerify}
                              onError={handleRecaptchaError}
                              className="flex justify-center"
                            />
                          </div>
                        )}
                      </div>
                    )}
                    
                    {errors.archivo && (
                      <p className="mt-2 text-sm text-destructive" role="alert">
                        {errors.archivo}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <VoltikButton 
                type="submit" 
                variant="primary" 
                size="lg" 
                className="w-full" 
                disabled={isSubmitting || (file && !recaptchaToken)}
              >
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
