import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useEffect } from 'react'
import Seo from '@/app/seo/Seo'

const Privacy = () => {
  useEffect(() => {
    // Mantén otros efectos si fueran necesarios
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Voltik · Política de privacidad"
        description="Información sobre el tratamiento de datos personales conforme a RGPD y LOPDGDD en voltik.es."
        type="website"
        robots="index,follow"
      />
      <Header />

      <main className="pt-16 md:pt-20">
        {/* Hero */}
        <section className="voltik-section hero-bg">
          <div className="voltik-container text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Política de privacidad
            </h1>
            <p className="lead">
              Información sobre cómo tratamos tus datos personales conforme al RGPD y la LOPDGDD.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="voltik-section bg-muted/30">
          <div className="voltik-container">
            <div className="voltik-card space-y-6">
              <p>
                En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y de la Ley Orgánica 3/2018 (LOPDGDD),
                te informamos sobre el tratamiento de tus datos personales cuando utilizas este sitio web.
              </p>

              <div>
                <h2 className="text-2xl font-semibold mb-2">1. Responsable del tratamiento</h2>
                <p>
                  <strong>Voltik</strong> — Córdoba, España — Correo de contacto:
                  <a className="text-voltik-info hover:underline ml-1" href="mailto:contacto@voltik.es">contacto@voltik.es</a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2">2. Datos que tratamos</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Datos de contacto que nos facilitas (p. ej., nombre, email y mensaje) a través del formulario.</li>
                  <li>Datos de uso del sitio (p. ej., páginas visitadas, dispositivo, navegador) mediante cookies o tecnologías similares.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2">3. Finalidades y base legal</h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Atender tus consultas o solicitudes enviadas mediante el formulario — <em>consentimiento</em> (art. 6.1.a RGPD).</li>
                  <li>Mejorar el sitio y su seguridad mediante estadísticas agregadas — <em>interés legítimo</em> (art. 6.1.f RGPD).</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2">4. Conservación</h2>
                <p>
                  Conservamos tus datos el tiempo necesario para la finalidad indicada y para cumplir obligaciones legales.
                  Las consultas comerciales se conservan, con carácter general, hasta 12 meses.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2">5. Destinatarios</h2>
                <p>
                  No cedemos tus datos a terceros salvo obligación legal. Podemos contar con proveedores que prestan servicios
                  (alojamiento, analítica, correo) bajo contratos de encargo de tratamiento y, en su caso, con garantías adecuadas.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2">6. Derechos</h2>
                <p>
                  Puedes ejercitar los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad enviando un email a
                  <a className="text-voltik-info hover:underline ml-1" href="mailto:contacto@voltik.es">contacto@voltik.es</a>.
                  Tienes derecho a presentar una reclamación ante la <a className="text-voltik-info hover:underline" href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">AEPD</a>.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2">7. Cookies</h2>
                <p>
                  Usamos cookies técnicas necesarias y, en su caso, de analítica de forma agregada. Puedes configurar o bloquear las cookies desde la 
                  configuración de tu navegador. Si publicamos una política de cookies específica, prevalecerá sobre este apartado.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2">8. Seguridad</h2>
                <p>
                  Aplicamos medidas técnicas y organizativas para proteger tus datos frente a accesos no autorizados, pérdida o alteración.
                </p>
              </div>

              <p className="text-sm text-muted-foreground">
                Última actualización: {new Date().toLocaleDateString('es-ES')}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Privacy
