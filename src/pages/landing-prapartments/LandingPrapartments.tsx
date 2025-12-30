import ContactForm from '@/components/forms/ContactForm'
import VoltikLogo from '@/components/ui/VoltikLogo'
import Seo from '@/app/seo/Seo'

const LandingPrapartments = () => {
  return (
    <>
      <Seo
        title="Envía tu factura - Voltik · Colectivos Prapartments"
        description="Sube tu factura de la luz y recibe una propuesta personalizada de ahorro en menos de 48h. Gratis y sin compromiso."
        type="website"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/20">
        <div className="voltik-container py-12 md:py-16">
          {/* Logo clickeable */}
          <div className="mb-12 text-center">
            <a 
              href="https://voltik.es" 
              className="inline-block hover:opacity-80 transition-opacity"
              aria-label="Voltik - Ir a la página principal"
            >
              <VoltikLogo
                className="h-12 md:h-16 w-auto mx-auto"
                alt="Voltik - Servicios de eficiencia energética"
              />
            </a>
          </div>

          {/* Formulario centrado */}
          <div className="max-w-2xl mx-auto">
            <ContactForm 
              fuente="colectivos-prapartments"
              showTitle={false}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default LandingPrapartments

