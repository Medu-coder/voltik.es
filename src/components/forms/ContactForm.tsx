import { UploadCloud, FileText, X, MessageCircle } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import ReCaptcha from '@/components/ui/ReCaptcha'
import { useContactForm } from '@/hooks/use-contact-form'
import { pushDataLayerEvent } from '@/lib/analytics'
import { getWhatsAppUrlBySource } from '@/lib/whatsapp'
import ContactFormSuccess from './ContactFormSuccess'

interface ContactFormProps {
  title?: string
  subtitle?: string
  showTitle?: boolean
  className?: string
  fuente?: string
}

export default function ContactForm({ 
  title = "Envía tu factura",
  subtitle = "Tardas menos de 1 minuto. Gratis y sin compromiso.",
  showTitle = true,
  className = "",
  fuente
}: ContactFormProps) {
  const {
    formData,
    errors,
    isSubmitting,
    submitted,
    file,
    fileError,
    isFileValid,
    showRecaptcha,
    recaptchaToken,
    fileInputRef,
    handleChange,
    handleFileChange,
    handleRemoveFile,
    handleRecaptchaVerify,
    handleRecaptchaError,
    handleSubmit,
    resetForm,
    RECAPTCHA_SITE_KEY
  } = useContactForm(fuente)

  const whatsappPreFormUrl = getWhatsAppUrlBySource(fuente, 'pre_form')
  const whatsappPostFormUrl = getWhatsAppUrlBySource(fuente, 'post_form')

  // Si el formulario se ha enviado exitosamente, mostrar pantalla de éxito
  if (submitted) {
    return (
      <ContactFormSuccess
        onReset={resetForm}
        className={className}
        whatsappUrl={whatsappPostFormUrl}
      />
    )
  }

  return (
    <div className={`voltik-card ${className}`}>
      {showTitle && (
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground">
            {subtitle}
          </p>
        </div>
      )}

      <div className="mb-6 rounded-[2rem] border border-green-500/20 bg-green-50/60 p-4 text-center">
        <p className="text-sm text-muted-foreground mb-3">
          ¿Prefieres escribirnos por WhatsApp?
        </p>
        <VoltikButton
          variant="outline"
          size="md"
          asChild
          className="border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600 hover:text-green-700"
        >
          <a
            href={whatsappPreFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              pushDataLayerEvent({
                event: 'whatsapp_cta_click',
                cta_layer: 'pre_form',
                cta_location: 'contact_form_card',
                cta_message: 'pre_form',
              })
            }
          >
            <MessageCircle size={18} className="mr-2" />
            WhatsApp
          </a>
        </VoltikButton>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
            className={`w-full px-5 py-3 rounded-full border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
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
            className={`w-full px-5 py-3 rounded-full border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
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
            className={`w-full px-5 py-3 rounded-full border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
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

        <div className="rounded-[2.5rem] border border-dashed border-primary/50 bg-primary/5 p-6">
          <div className="flex items-center gap-3 mb-4">
            <UploadCloud size={20} className="text-primary" />
            <p className="text-base font-semibold text-foreground">Subir factura (PDF)</p>
          </div>
          <p className="text-sm text-muted-foreground mb-4 text-left">
            Selecciona tu factura PDF.<br />
            Máximo 10 MB.
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
              <div className="flex items-center gap-3 p-3 bg-background rounded-2xl border">
                <FileText size={20} className="text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground" title={file.name}>
                    {file.name.length > 30 ? `${file.name.substring(0, 30)}...` : file.name}
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
                  className="p-1 hover:bg-destructive/10 rounded transition-colors flex-shrink-0"
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
                <div className={`space-y-3 p-4 rounded-[2rem] transition-all duration-300 ${
                  recaptchaToken 
                    ? 'bg-voltik-success/10 border border-voltik-success/30' 
                    : 'bg-gray-50 border border-gray-200'
                }`}>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      {recaptchaToken && (
                        <div className="w-5 h-5 rounded-full bg-voltik-success flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                      <p className={`text-sm font-medium ${
                        recaptchaToken ? 'text-voltik-success' : 'text-gray-700'
                      }`}>
                        {recaptchaToken ? 'Verificación completada' : 'Verificación de seguridad'}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <ReCaptcha
                      siteKey={RECAPTCHA_SITE_KEY}
                      onVerify={handleRecaptchaVerify}
                      onError={handleRecaptchaError}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">
                      Este sitio está protegido por reCAPTCHA y se aplican la 
                      <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                        Política de privacidad
                      </a> y los 
                      <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                        Términos de servicio
                      </a> de Google.
                    </p>
                  </div>
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

        <VoltikButton 
          type="submit" 
          variant="primary" 
          size="lg" 
          className="w-full" 
          disabled={isSubmitting || (file && !showRecaptcha)}
        >
          {isSubmitting ? 'Enviando datos…' : 'Enviar factura'}
        </VoltikButton>
      </form>
    </div>
  )
}
