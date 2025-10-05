import { useState, useRef, useEffect } from 'react'
import { useToast } from '@/hooks/use-toast'

interface FormData {
  fecha: string
  nombre: string
  email: string
  telefono: string
  tipo_servicio: string
  comentarios: string
}

interface FormErrors {
  nombre?: string
  email?: string
  telefono?: string
  tipo_servicio?: string
}

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScIlNgMWJlNWdF7zVI71jIhEurAXt9AtQp9vqovjkr_jkOzmw/formResponse'
const RECAPTCHA_SITE_KEY = '6Lft8dkrAAAAAMLeuF9nGQVsQelP7wIAJVGPHtF6'

export const useSecondaryContactForm = () => {
  const { toast } = useToast()
  const today = new Date().toISOString().slice(0, 10)

  const [formData, setFormData] = useState<FormData>({
    fecha: today,
    nombre: '',
    email: '',
    telefono: '',
    tipo_servicio: '',
    comentarios: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string>('')
  const [showRecaptcha, setShowRecaptcha] = useState(false)

  // Mostrar reCAPTCHA siempre (obligatorio)
  useEffect(() => {
    setShowRecaptcha(true)
  }, [])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Validar nombre
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio'
    } else if (formData.nombre.trim().length < 2) {
      newErrors.nombre = 'El nombre debe tener al menos 2 caracteres'
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Introduce un email válido'
    }

    // Validar teléfono
    const phoneRegex = /^[6-9]\d{8}$/
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es obligatorio'
    } else if (!phoneRegex.test(formData.telefono.replace(/\s/g, ''))) {
      newErrors.telefono = 'Introduce un teléfono válido (9 dígitos)'
    }

    // Validar tipo de servicio
    if (!formData.tipo_servicio) {
      newErrors.tipo_servicio = 'Debes seleccionar un tipo de servicio'
    }

    // Validar reCAPTCHA
    if (!recaptchaToken) {
      toast({
        title: 'Verificación requerida',
        description: 'Por favor, completa la verificación reCAPTCHA antes de enviar.',
        variant: 'destructive',
      })
      return false
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleRecaptchaVerify = (token: string) => {
    setRecaptchaToken(token)
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
      // Preparar datos para Google Forms (usando los mismos Entry IDs del formulario clonado)
      const googleFormPayload = new FormData()
      googleFormPayload.append('entry.456367614', formData.fecha)
      googleFormPayload.append('entry.1367672553', formData.nombre)
      googleFormPayload.append('entry.1372703949', formData.email)
      googleFormPayload.append('entry.725191283', formData.telefono)
      googleFormPayload.append('entry.916166591', formData.tipo_servicio)
      googleFormPayload.append('entry.1602707373', formData.comentarios || 'Sin comentarios adicionales')

      // Enviar a Google Forms
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: googleFormPayload,
      })

      setSubmitted(true)
      toast({
        title: '¡Solicitud enviada!',
        description: 'Te contactaremos en menos de 48h para gestionar tu solicitud.',
      })

      // Resetear formulario
      setFormData({
        fecha: new Date().toISOString().slice(0, 10),
        nombre: '',
        email: '',
        telefono: '',
        tipo_servicio: '',
        comentarios: '',
      })
      setRecaptchaToken('')
      // Mantener showRecaptcha en true para que se muestre después del reset
      
      // Resetear reCAPTCHA - el componente se resetea automáticamente
      
    } catch (error) {
      toast({
        title: 'No hemos podido enviar tus datos',
        description: 'Vuelve a intentarlo en unos minutos o escríbenos por email.',
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
    
    // Funciones
    handleChange,
    handleRecaptchaVerify,
    handleRecaptchaError,
    handleSubmit,
    resetForm,
    
    // Constantes
    RECAPTCHA_SITE_KEY
  }
}
