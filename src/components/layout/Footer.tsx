import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Linkedin } from 'lucide-react'
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
                Instaladores eléctricos autorizados en Córdoba. Combinamos un trato humano impecable 
                con procesos 100% digitales para ofrecerte el mejor servicio.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                {/*
                <div className="flex items-center">
                  <Phone size={18} className="mr-3 text-primary" />
                  <div>
                    <a href="tel:+34957000000" className="hover:text-primary transition-colors">
                      957 000 000
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
                  <span>Córdoba, España</span>
                </div>
                
                <div className="flex items-center">
                  <Clock size={18} className="mr-3 text-primary" />
                  <span>Lun-Vie 8:00-18:00</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-primary">Servicios</h3>
              <ul className="space-y-2 text-background/80">
                <li><a href="/servicios" className="hover:text-primary transition-colors">Instalaciones eléctricas</a></li>
                <li><a href="/servicios" className="hover:text-primary transition-colors">Paneles solares</a></li>
                <li><a href="/servicios" className="hover:text-primary transition-colors">Domótica y automatización</a></li>
                <li><a href="/servicios" className="hover:text-primary transition-colors">Puntos de recarga VE</a></li>
                <li><a href="/servicios" className="hover:text-primary transition-colors">Mantenimiento preventivo</a></li>
                <li><a href="/servicios" className="hover:text-primary transition-colors">Urgencias 24/7</a></li>
                <li><a href="/servicios" className="hover:text-primary transition-colors">Legalizaciones</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-primary">Empresa</h3>
              <ul className="space-y-2 text-background/80">
                <li><a href="/#valores" className="hover:text-primary transition-colors">Nuestros valores</a></li>
                <li><a href="/#casos" className="hover:text-primary transition-colors">Casos de éxito</a></li>
                <li><a href="/blog" className="hover:text-primary transition-colors">Blog Voltik</a></li>
                <li><a href="/#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
                <li><a href="/#contacto" className="hover:text-primary transition-colors">Pedir presupuesto</a></li>
                <li><a href="/privacidad" className="hover:text-primary transition-colors">Política de privacidad</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="py-8 border-t border-background/20">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              ¿Tienes alguna consulta sobre tu instalación eléctrica?
            </h3>
            <p className="text-background/80 mb-6">
              Respuesta garantizada en menos de 24h laborables
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* 
              <a
                href="https://wa.me/34957000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <MessageCircle size={20} className="mr-2" />
                WhatsApp directo
              </a> 
              */}
              <a
                href="/#contacto"
                className="inline-flex items-center px-6 py-3 bg-primary text-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Rellena el formulario
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-background/60 text-sm mb-4 md:mb-0">
              © {currentYear} Voltik. Todos los derechos reservados. {/*  | 
              <span className="ml-1">Instalador autorizado nº XXXX</span> */}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 hover:bg-background/10 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-background/10 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-background/10 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
