import { useState, useEffect } from 'react'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import voltikLogo from '@/assets/voltik-logo-web.svg'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navigationItems = [
    { href: '/#home', label: 'Inicio' },
    { href: '/#servicios', label: 'Servicios' },
    { href: '/#valores', label: 'Valores' },
    { href: '/#casos', label: 'Casos de éxito' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="voltik-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="/#home" 
            className="flex-shrink-0 hover:opacity-80 transition-opacity"
            aria-label="Voltik - Inicio"
          >
            <img 
              src={voltikLogo} 
              alt="Voltik" 
              className="h-8 md:h-10 w-auto"
              loading="eager"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Navegación principal">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-foreground/80 hover:text-foreground transition-colors text-base font-medium group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+34957000000"
              className="flex items-center text-sm text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Llamar al 957 000 000"
            >
              <Phone size={16} className="mr-2" />
              957 000 000
            </a>
            <VoltikButton variant="voltik" size="sm" asChild>
              <a href="/#contacto">Pide presupuesto</a>
            </VoltikButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="py-4 space-y-2" aria-label="Navegación móvil">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-accent/50 transition-colors rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile CTA */}
              <div className="px-4 pt-4 border-t border-border space-y-3">
                <a
                  href="tel:+34957000000"
                  className="flex items-center py-3 text-foreground hover:text-primary transition-colors"
                >
                  <Phone size={20} className="mr-3" />
                  <div>
                    <div className="font-medium">Llama ahora</div>
                    <div className="text-sm text-muted-foreground">957 000 000</div>
                  </div>
                </a>
                
                <a
                  href="https://wa.me/34957000000"
                  className="flex items-center py-3 text-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={20} className="mr-3" />
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm text-muted-foreground">Consulta rápida</div>
                  </div>
                </a>
                
                <VoltikButton variant="voltik" className="w-full" asChild>
                  <a href="/#contacto" onClick={() => setIsMenuOpen(false)}>
                    Pide presupuesto gratis
                  </a>
                </VoltikButton>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}