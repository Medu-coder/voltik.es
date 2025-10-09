import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { VoltikButton } from '@/components/ui/voltik-button'
import voltikLogo from '@/assets/voltik-logo-web.svg'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // BreadcrumbList Schema Markup
  useEffect(() => {
    const getBreadcrumbItems = () => {
      const pathSegments = location.pathname.split('/').filter(Boolean)
      const breadcrumbItems = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://voltik.es/"
        }
      ]

      let currentPath = ""
      pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`
        const name = segment === 'servicios' ? 'Servicios de eficiencia energética' :
                    segment === 'como-funciona' ? 'Cómo funciona el ahorro energético' :
                    segment === 'blog' ? 'Blog de eficiencia energética' :
                    segment === 'formulario' ? 'Formulario de análisis gratuito' :
                    segment === 'formulario-sec' ? 'Formulario Secundario' :
                    segment === 'privacidad' ? 'Política de privacidad' :
                    segment.charAt(0).toUpperCase() + segment.slice(1)

        breadcrumbItems.push({
          "@type": "ListItem",
          "position": index + 2,
          "name": name,
          "item": `https://voltik.es${currentPath}`
        })
      })

      return breadcrumbItems
    }

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": getBreadcrumbItems()
    }

    // Remove existing breadcrumb schema if any
    const existingSchema = document.getElementById('breadcrumb-schema')
    if (existingSchema) {
      existingSchema.remove()
    }

    // Add new breadcrumb schema
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'breadcrumb-schema'
    script.textContent = JSON.stringify(breadcrumbSchema)
    document.head.appendChild(script)

    return () => {
      const schemaToRemove = document.getElementById('breadcrumb-schema')
      if (schemaToRemove) {
        schemaToRemove.remove()
      }
    }
  }, [location.pathname])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navigationItems = [
    { href: '/', label: 'Inicio' },
    { href: '/como-funciona', label: 'Cómo funciona' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/#faqs', label: 'Preguntas frecuentes' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>
      
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-md' 
            : 'bg-transparent'
        }`}
      >
      <div className="voltik-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="/" 
            className="flex-shrink-0 hover:opacity-80 transition-opacity"
            aria-label="Voltik · Servicios de eficiencia energética"
          >
            <img 
              src={voltikLogo} 
              alt="Voltik - Servicios de eficiencia energética y ahorro en factura de luz" 
              className="h-8 md:h-10 w-auto"
              loading="eager"
              fetchPriority="high"
              width="120"
              height="40"
              style={{ willChange: 'auto' }}
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
            {/*
            <a
              href="tel:+34957000000"
              className="flex items-center text-sm text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Llamar al 600 00 00 00"
            >
              <Phone size={16} className="mr-2" />
                      600 00 00 00
            </a>
            */}
            <VoltikButton variant="voltik" size="md" asChild>
              <a href="/formulario" className="flex items-center">
                Subir mi factura
                <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-voltik-success/20 text-voltik-success font-semibold">
                  Gratis
                </span>
              </a>            
            </VoltikButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-3 rounded-lg hover:bg-accent transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
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
                  className="block px-4 py-4 text-foreground/80 hover:text-foreground hover:bg-accent/50 transition-colors rounded-lg min-h-[44px] flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile CTA */}
              <div className="px-4 pt-4 border-t border-border space-y-3">
                {/*
                <a
                  href="tel:+34600000000"
                  className="flex items-center py-3 text-foreground hover:text-primary transition-colors"
                >
                  <Phone size={20} className="mr-3" />
                  <div>
                    <div className="font-medium">Llama ahora</div>
                    <div className="text-sm text-muted-foreground">600 00 00 00</div>
                  </div>
                </a>
                
                <a
                  href="https://wa.me/34600000000"
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
                */}

                <VoltikButton variant="voltik" className="w-full" asChild>
                  <a href="/formulario" onClick={() => setIsMenuOpen(false)}>
                    Subir mi factura
                  </a>
                </VoltikButton>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
    </>
  )
}
