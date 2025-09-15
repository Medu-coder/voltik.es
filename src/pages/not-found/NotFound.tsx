import { Home, ArrowLeft, Search, MessageCircle } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
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
                  <a href="/blog">
                    <Search size={20} className="mr-2" />
                    Explorar blog
                  </a>
                </VoltikButton>
              </div>

              {/* Help Section */}
              <div className="voltik-card bg-muted/50 text-left">
                <h3 className="text-xl font-semibold mb-4 text-center">
                  ¿Necesitas ayuda?
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Páginas populares:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="/servicios" className="text-seconday hover:underline">
                          Nuestros servicios
                        </a>
                      </li>
                      <li>
                        <a href="/#valores" className="text-seconday hover:underline">
                          Por qué elegirnos
                        </a>
                      </li>
                      <li>
                        <a href="/#casos" className="text-seconday hover:underline">
                          Casos de éxito
                        </a>
                      </li>
                      <li>
                        <a href="/#contacto" className="text-seconday hover:underline">
                          Pedir presupuesto
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Contacto directo:</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Teléfono:</strong>{' '}
                        <a href="tel:+34957000000" className="text-seconday hover:underline">
                          957 000 000
                        </a>
                      </div>
                      <div>
                        <strong>Email:</strong>{' '}
                        <a href="mailto:contacto@voltik.es" className="text-seconday hover:underline">
                          contacto@voltik.es
                        </a>
                      </div>
                      <div className="pt-2">
                        <VoltikButton variant="ghost" size="sm" asChild>
                          <a 
                            href="https://wa.me/34957000000" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            <MessageCircle size={16} className="mr-2" />
                            WhatsApp
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
