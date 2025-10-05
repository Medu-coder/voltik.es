import { useState, useRef, useEffect } from 'react'
import { useToast } from '@/hooks/use-toast'
import { useFileUpload } from '@/hooks/use-file-upload'

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
const BACKEND_URL = 'https://backend-voltik-invoices.vercel.app/api/public/intake'

export const useContactForm = () => {
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

  // Mostrar reCAPTCHA siempre (obligatorio)
  useEffect(() => {
    setShowRecaptcha(true)
  }, [])

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

    // Validar reCAPTCHA siempre (obligatorio)
    if (!recaptchaToken) {
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
    handleFileSelect(selectedFile)
    
    // Mostrar reCAPTCHA cuando se selecciona un archivo
    if (selectedFile) {
      setShowRecaptcha(true)
    }
    
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

      // Enviar al backend con todos los datos
      try {
        const response = await fetch(BACKEND_URL, {
          method: 'POST',
          body: backendPayload,
        })
        
        if (!response.ok) {
          console.error('Error del backend:', response.status, response.statusText)
        }
        
      } catch (backendError) {
        console.error('Error enviando al backend:', backendError.message)
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

  const resetForm = () => {
    setSubmitted(false)
  }

  return {
    // Estados
    formData,
    errors,
    isSubmitting,
    submitted,
    recaptchaToken,
    showRecaptcha,
    file,
    fileError,
    isFileValid,
    fileInputRef,
    recaptchaRef,
    
    // Funciones
    handleChange,
    handleFileChange,
    handleRemoveFile,
    handleRecaptchaVerify,
    handleRecaptchaError,
    handleSubmit,
    resetForm,
    
    // Constantes
    RECAPTCHA_SITE_KEY
  }
}
