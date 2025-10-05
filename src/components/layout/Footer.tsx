import { Phone, Mail, MapPin, Clock, MessageCircle, UploadCloud, Facebook, Instagram, Linkedin } from 'lucide-react'
import ComingSoonModal from '@/components/ui/ComingSoonModal'
import voltikLogo from '@/assets/voltik-logo-web.svg'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background">
      <div className="voltik-container">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info */}
            <div className="lg:col-span-2">
              <img 
                src={voltikLogo} 
                alt="Voltik" 
                className="h-8 mb-4 filter brightness-0 invert"
              />
              <p className="text-background/80 mb-6 max-w-md">
                Servicios de eficiencia energética para hogares y negocios. Analizamos tu factura de luz y negociamos las mejores condiciones para que empieces a ahorrar ahora.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                {/*
                <div className="flex items-center">
                  <Phone size={18} className="mr-3 text-primary" />
                  <div>
                    <a href="tel:+34600000000" className="hover:text-primary transition-colors">
                      600 00 00 00
                    </a>
                    <span className="text-background/60 text-sm ml-2">
                      (24/7 urgencias)
                    </span>
                  </div>
                </div>
                */}
                
                <div className="flex items-center">
                  <Mail size={18} className="mr-3 text-primary" />
                  <a 
                    href="mailto:contacto@voltik.es" 
                    className="hover:text-primary transition-colors"
                  >
                    contacto@voltik.es
                  </a>
                </div>
                
                <div className="flex items-center">
                  <MapPin size={18} className="mr-3 text-primary" />
                  <span>Toda España</span>
                </div>
                
                <div className="flex items-center">
                  <Clock size={18} className="mr-3 text-primary" />
                  <span>Lun-Vie 9:00-18:00</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-primary">Servicios</h3>
              <ul className="space-y-2 text-background/80">
                <li><a href="/formulario" className="hover:text-primary transition-colors">Ahorro en tu factura de luz</a></li>
                <li><a href="/formulario-sec" className="hover:text-primary transition-colors">Certificados de eficiencia energética</a></li>
                <li><a href="/formulario-sec" className="hover:text-primary transition-colors">Boletines eléctricos (CIE)</a></li>
                <li><a href="/servicios" className="hover:text-primary transition-colors">Servicios profesionales</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-primary">Empresa</h3>
              <ul className="space-y-2 text-background/80">
                <li><a href="/como-funciona" className="hover:text-primary transition-colors">Cómo funciona</a></li>
                <li><a href="/#testimonios" className="hover:text-primary transition-colors">Testimonios</a></li>
                <li><a href="/blog" className="hover:text-primary transition-colors">Blog Voltik</a></li>
                <li><a href="/#faqs" className="hover:text-primary transition-colors">FAQs</a></li>
                <li><a href="/privacidad" className="hover:text-primary transition-colors">Política de privacidad</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="py-8 border-t border-secondary/20">
          <div className="max-w-3xl mx-auto text-center bg-primary/10 rounded-2xl px-8 py-10 shadow-lg shadow-background/30">
            <div className="flex items-center justify-center gap-3 text-primary mb-4">
              <UploadCloud size={24} />
              <span className="text-sm font-semibold uppercase tracking-wide">Empieza a ahorrar hoy</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-background">
              ¿Listo para recibir tu propuesta personalizada?
            </h3>
            <p className="text-background/80 mb-6">
              Adjunta tu factura y en menos de 48 horas recibirás una comparativa clara con la mejor oferta del mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/formulario"
                className="inline-flex items-center px-6 py-3 bg-primary text-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-md"
              >
                Subir mi factura
              </a>
              <a
                href="/como-funciona"
                className="inline-flex items-center px-6 py-3 bg-background text-foreground rounded-lg border border-primary/40 hover:border-primary/80 transition-colors"
              >
                Ver cómo funciona
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/60 text-sm mb-4 md:mb-0">
              © {currentYear} Voltik · Servicios de eficiencia energética. Todos los derechos reservados.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="mailto:contacto@voltik.es"
                className="p-2 hover:bg-background/10 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              
              <ComingSoonModal
                trigger={
                  <button
                    className="p-2 hover:bg-background/10 rounded-lg transition-colors"
                    aria-label="WhatsApp (próximamente)"
                  >
                    <MessageCircle size={20} />
                  </button>
                }
                serviceName="WhatsApp"
                description="WhatsApp estará disponible próximamente. Por ahora, puedes contactarnos por email y te responderemos lo antes posible."
              />

              <ComingSoonModal
                trigger={
                  <button
                    className="p-2 hover:bg-background/10 rounded-lg transition-colors"
                    aria-label="Teléfono (próximamente)"
                  >
                    <Phone size={20} />
                  </button>
                }
                serviceName="Teléfono"
                description="El servicio telefónico estará disponible próximamente. Por ahora, puedes contactarnos por email y te responderemos lo antes posible."
              />
              <div
                className="p-2 opacity-50 cursor-not-allowed"
                aria-label="Facebook (próximamente)"
                title="Facebook (próximamente)"
              >
                <Facebook size={20} />
              </div>
              <div
                className="p-2 opacity-50 cursor-not-allowed"
                aria-label="Instagram (próximamente)"
                title="Instagram (próximamente)"
              >
                <Instagram size={20} />
              </div>
              <div
                className="p-2 opacity-50 cursor-not-allowed"
                aria-label="LinkedIn (próximamente)"
                title="LinkedIn (próximamente)"
              >
                <Linkedin size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
