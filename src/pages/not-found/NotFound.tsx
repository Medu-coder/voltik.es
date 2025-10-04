import { Home, ArrowLeft, UploadCloud, MessageCircle, Mail, Phone } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import voltikLogo from '@/assets/voltik-logo-web.svg'
import Seo from '@/app/seo/Seo'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="404 · Página no encontrada · Voltik · Servicios de eficiencia energética"
        description="La URL solicitada no existe o ha cambiado. Vuelve al inicio y envíanos tu factura para recibir una propuesta de ahorro."
        robots="noindex,follow"
        type="website"
      />
      <Header />
      
      <main className="pt-16 md:pt-20">
        <section className="voltik-section bg-primary"> 
          <div className="voltik-container text-center">
            <div className="max-w-2xl mx-auto">
              {/* 404 Visual */}
              <div className="mb-8">
                <div className="text-8xl md:text-9xl font-bold text-foreground/20 mb-4">
                  404
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
              </div>

              {/* Content */}
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                ¡Ups! Página no encontrada
              </h1>
              
              <p className="lead mb-8">
                Parece que la página que buscas no existe o ha sido movida. 
                No te preocupes, te ayudamos a encontrar lo que necesitas.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <VoltikButton variant="primary" size="lg" asChild>
                  <a href="/">
                    <Home size={20} className="mr-2" />
                    Volver a inicio
                  </a>
                </VoltikButton>
                
                <VoltikButton variant="outline" size="lg" asChild>
                  <a href="/formulario">
                    <UploadCloud size={20} className="mr-2" />
                    Subir mi factura
                  </a>
                </VoltikButton>
              </div>

              {/* Help Section */}
              <div className="voltik-card bg-muted/50 text-center max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-6">
                  ¿Necesitas ayuda?
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium mb-4">Páginas populares:</h4>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <a href="/formulario" className="text-text hover:underline">
                          Subir mi factura
                        </a>
                      </li>
                      <li>
                        <a href="/servicios" className="text-text hover:underline">
                          Nuestros servicios
                        </a>
                      </li>
                      <li>
                        <a href="/como-funciona" className="text-text hover:underline">
                          Cómo funciona
                        </a>
                      </li>
                      <li>
                        <a href="/#beneficios" className="text-text hover:underline">
                          Por qué elegirnos
                        </a>
                      </li>
                      <li>
                        <a href="/#testimonios" className="text-text hover:underline">
                          Testimonios
                        </a>
                      </li>
                      <li>
                        <a href="/blog" className="text-text hover:underline">
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-4">Contacto directo:</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <strong>Email:</strong>{' '}
                        <a href="mailto:contacto@voltik.es" className="text-text hover:underline">
                          contacto@voltik.es
                        </a>
                      </div>
                      <div className="pt-2">
                        <VoltikButton variant="outline" size="sm" asChild>
                          <a 
                            href="mailto:contacto@voltik.es"
                          >
                            <Mail size={16} className="mr-2" />
                            Enviar email
                          </a>
                        </VoltikButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back Link */}
              <div className="mt-8">
                <button 
                  onClick={() => window.history.back()} 
                  className="inline-flex items-center text-muted-foreground hover:text-neutral-light transition-colors"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Volver a la página anterior
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default NotFound
