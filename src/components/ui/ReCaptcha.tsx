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
      setIsLoaded(true)
      return
    }

    // Si no está cargado, esperar a que se cargue
    let attempts = 0
    const maxAttempts = 50 // 5 segundos máximo
    
    const checkRecaptcha = () => {
      attempts++
      
      if (window.grecaptcha) {
        setIsLoaded(true)
      } else if (attempts < maxAttempts) {
        setTimeout(checkRecaptcha, 100)
      } else {
        onError?.()
      }
    }
    checkRecaptcha()
  }, [onError])

  // NO ejecutar reCAPTCHA automáticamente al montar el componente
  // Solo ejecutar cuando el usuario haga clic en el botón

  const executeRecaptcha = async () => {
    if (!isLoaded || !window.grecaptcha) {
      console.warn('reCAPTCHA: No disponible')
      onError?.()
      return
    }

    setIsExecuting(true)
    console.log('reCAPTCHA: Iniciando verificación...')

    try {
      await new Promise<void>((resolve, reject) => {
        window.grecaptcha.ready(async () => {
          try {
            const token = await window.grecaptcha.execute(siteKey, {
              action: 'submit_form'
            })
            console.log('reCAPTCHA: Verificación exitosa')
            onVerify(token)
            resolve()
          } catch (error) {
            console.error('reCAPTCHA: Error en verificación:', error)
            onError?.()
            reject(error)
          } finally {
            setIsExecuting(false)
          }
        })
      })
    } catch (error) {
      console.error('reCAPTCHA: Error general:', error)
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