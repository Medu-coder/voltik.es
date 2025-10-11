import { ShieldCheck, Clock, Lock } from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'

export default function ContactFormSection() {

  return (
    <section id="formulario" className="voltik-section bg-gradient-to-br from-primary/10 to-secondary/20">
      <div className="voltik-container">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-voltik-success/20 border border-voltik-success/30 text-voltik-success text-sm font-medium mb-4">
            No pagas nada · Servicio 100% gratuito · 0€
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            Recibe tu oferta personalizada en menos de 48h
          </h2>
          <p className="text-xl text-muted-foreground">
            Completa el formulario, sube tu factura PDF y nuestros asesores te enviarán la mejor propuesta gratis.<br />
            <strong>No pagas nada. Sin compromiso.</strong>
          </p>
          <p className="text-md text-muted-foreground mt-2">
            Tus datos solo se utilizan para buscar la mejor oferta para ti. No los almacenamos.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <ContactForm 
              showTitle={false}
              className="bg-background/95"
            />
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="voltik-card bg-background/80">
              <div className="flex items-start gap-4 mb-4">
                <Lock size={24} className="text-text" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Tus datos son tuyos</h3>
                  <p className="text-sm text-muted-foreground">
                    No almacenamos tus datos. Solo los usamos para preparar tu oferta
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-4">
                <ShieldCheck size={28} className="text-text" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Expertos independientes</h3>
                  <p className="text-sm text-muted-foreground">
                    Trabajamos con varias comercializadoras y tú eliges si quieres cambiarte o no.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={28} className="text-text" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Respuesta en menos de 48h</h3>
                  <p className="text-sm text-muted-foreground">
                    Te enviamos un informe claro con la mejor propuesta de ahorro para tu consumo real
                  </p>
                </div>
              </div>
            </div>

            <div className="voltik-card bg-secondary/20 border-secondary/40 text-sm text-muted-foreground">
              <p>
                Al enviar el formulario aceptas que podamos contactarte para compartir tu propuesta de ahorro. Consulta la
                <a href="/privacidad" className="ml-1 underline text-foreground hover:text-primary">política de privacidad</a> para más información.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}