import { useEffect, useState } from 'react'

interface ReCaptchaProps {
  siteKey: string
  onVerify: (token: string) => void
  onError?: () => void
  className?: string
}

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

export default function ReCaptcha({ 
  siteKey, 
  onVerify, 
  onError, 
  className = '' 
}: ReCaptchaProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isExecuting, setIsExecuting] = useState(false)

  useEffect(() => {
    // Verificar si reCAPTCHA ya está cargado
    if (window.grecaptcha) {
      console.log('reCAPTCHA ya está cargado')
      setIsLoaded(true)
      return
    }

    // Si no está cargado, esperar a que se cargue
    let attempts = 0
    const maxAttempts = 50 // 5 segundos máximo
    
    const checkRecaptcha = () => {
      attempts++
      console.log(`Verificando reCAPTCHA, intento ${attempts}/${maxAttempts}`)
      
      if (window.grecaptcha) {
        console.log('reCAPTCHA cargado exitosamente')
        setIsLoaded(true)
      } else if (attempts < maxAttempts) {
        setTimeout(checkRecaptcha, 100)
      } else {
        console.error('reCAPTCHA no se pudo cargar después de 5 segundos')
        onError?.()
      }
    }
    checkRecaptcha()
  }, [onError])

  // NO ejecutar reCAPTCHA automáticamente al montar el componente
  // Solo ejecutar cuando el usuario haga clic en el botón

  const executeRecaptcha = async () => {
    console.log('Iniciando ejecución de reCAPTCHA...')
    console.log('isLoaded:', isLoaded)
    console.log('window.grecaptcha:', !!window.grecaptcha)
    console.log('siteKey:', siteKey)
    
    if (!isLoaded || !window.grecaptcha) {
      console.error('reCAPTCHA no está cargado o disponible')
      onError?.()
      return
    }

    setIsExecuting(true)
    console.log('Ejecutando reCAPTCHA...')

    try {
      await new Promise<void>((resolve, reject) => {
        window.grecaptcha.ready(async () => {
          try {
            console.log('reCAPTCHA ready callback ejecutado')
            const token = await window.grecaptcha.execute(siteKey, {
              action: 'submit_form'
            })
            console.log('Token reCAPTCHA obtenido:', token ? 'Sí' : 'No')
            onVerify(token)
            resolve()
          } catch (error) {
            console.error('Error ejecutando reCAPTCHA:', error)
            onError?.()
            reject(error)
          } finally {
            setIsExecuting(false)
          }
        })
      })
    } catch (error) {
      console.error('Error en reCAPTCHA:', error)
      onError?.()
      setIsExecuting(false)
    }
  }

  if (!isLoaded) {
    return (
      <div className={`flex items-center justify-center p-4 ${className}`}>
        <div className="text-sm text-muted-foreground">Cargando reCAPTCHA...</div>
      </div>
    )
  }

  return (
    <div className={`flex flex-col items-center space-y-2 ${className}`}>
      <p className="text-sm text-muted-foreground text-center">
        Verificación de seguridad automática
      </p>
      <button
        type="button"
        onClick={executeRecaptcha}
        disabled={isExecuting}
        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
      >
        {isExecuting ? 'Verificando...' : 'Verificar'}
      </button>
    </div>
  )
}