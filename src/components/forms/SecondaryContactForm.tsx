import { FileText, MessageSquare } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import ReCaptcha from '@/components/ui/ReCaptcha'
import { useSecondaryContactForm } from '@/hooks/use-secondary-contact-form'
import SecondaryContactFormSuccess from './SecondaryContactFormSuccess'

interface SecondaryContactFormProps {
  title?: string
  subtitle?: string
  showTitle?: boolean
  className?: string
}

export default function SecondaryContactForm({ 
  title = "Solicita tu servicio",
  subtitle = "Completa el formulario y te contactaremos en menos de 48h para gestionar tu solicitud.",
  showTitle = true,
  className = ""
}: SecondaryContactFormProps) {
  const {
    formData,
    errors,
    isSubmitting,
    submitted,
    showRecaptcha,
    recaptchaToken,
    handleChange,
    handleRecaptchaVerify,
    handleRecaptchaError,
    handleSubmit,
    resetForm,
    RECAPTCHA_SITE_KEY
  } = useSecondaryContactForm()

  // Si el formulario se ha enviado exitosamente, mostrar pantalla de éxito
  if (submitted) {
    return <SecondaryContactFormSuccess onReset={resetForm} className={className} />
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

        <div>
          <label htmlFor="tipo_servicio" className="block text-sm font-semibold text-foreground mb-2">
            Tipo de servicio *
          </label>
          <select
            id="tipo_servicio"
            name="tipo_servicio"
            value={formData.tipo_servicio}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
              errors.tipo_servicio ? 'border-destructive bg-destructive/5' : 'border-input bg-background hover:border-primary/50'
            }`}
            required
          >
            <option value="">Selecciona un servicio</option>
            <option value="Certificado de eficiencia energética">Certificado de eficiencia energética</option>
            <option value="Boletín (CIE)">Boletín (CIE)</option>
            <option value="Otros">Otros</option>
          </select>
          {errors.tipo_servicio && (
            <p className="mt-1 text-sm text-destructive" role="alert">
              {errors.tipo_servicio}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="comentarios" className="block text-sm font-semibold text-foreground mb-2">
            <MessageSquare size={16} className="inline mr-2" />
            Comentarios adicionales
          </label>
          <textarea
            id="comentarios"
            name="comentarios"
            value={formData.comentarios}
            onChange={handleChange}
            placeholder="Cuéntanos más detalles sobre tu solicitud, ubicación del inmueble, tipo de instalación, etc."
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-input bg-background hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none"
          />
          <p className="mt-1 text-xs text-muted-foreground">
            Información opcional que nos ayudará a preparar mejor tu solicitud
          </p>
        </div>

        {/* reCAPTCHA */}
        {showRecaptcha && (
          <div className="rounded-xl border border-dashed border-primary/50 bg-primary/5 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-base font-semibold text-foreground">Verificación de seguridad</p>
            </div>
            <p className="text-sm text-muted-foreground mb-4 text-left">
              Completa la verificación para enviar tu solicitud de forma segura.
            </p>
            
            <div className="space-y-4">
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
          </div>
        )}

        <VoltikButton
          type="submit"
          size="lg"
          className="w-full"
          disabled={isSubmitting || !recaptchaToken}
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Enviando solicitud...
            </>
          ) : (
            <>
              <FileText size={20} className="mr-2" />
              Enviar solicitud
            </>
          )}
        </VoltikButton>

        <p className="text-xs text-muted-foreground text-center">
          Al enviar este formulario, aceptas nuestra{' '}
          <a href="/privacidad" className="text-primary hover:underline">
            política de privacidad
          </a>
          . Tus datos serán tratados de forma confidencial.
        </p>
      </form>
    </div>
  )
}
