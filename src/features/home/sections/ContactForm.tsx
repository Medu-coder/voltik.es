import { ShieldCheck, Clock, Lock } from 'lucide-react'
import ContactForm from '@/components/forms/ContactForm'
import envio from '@/assets/envio-factura.png'

export default function ContactFormSection() {

  return (
    <section id="formulario" className="py-10 relative overflow-hidden">
      <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl" aria-hidden />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/25 blur-3xl" aria-hidden />
      <div className="voltik-container-narrow relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="voltik-chip mx-auto mb-4">
            No pagas nada · Servicio totalmente gratuito
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
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
              className="bg-background/95 border border-primary/20 shadow-xl backdrop-blur-sm"
            />
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="relative overflow-hidden rounded-[3rem] border border-primary/20 shadow-xl">
              <img
                src={envio}
                alt="Hogar con consumo optimizado y ahorro energético"
                className="h-56 w-full object-cover md:h-64 lg:h-72"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-[2rem] bg-background/85 p-4 shadow-lg">
                <p className="text-sm font-semibold text-foreground">Ahorro real en tu factura</p>
                <p className="text-xs text-muted-foreground">Comparamos tarifas y te enviamos la mejor oferta en 48h.</p>
              </div>
            </div>
            <div className="voltik-card bg-background/85 border border-primary/10 shadow-lg">
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

            <div className="voltik-card bg-secondary/20 border-secondary/40 text-sm text-muted-foreground shadow-md">
              <p>
                Al enviar el formulario aceptas que podamos contactarte para compartir tu propuesta de ahorro. Consulta la
                <a href="/privacidad" className="voltik-inline-link-simple ml-1">política de privacidad</a> para más información.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
