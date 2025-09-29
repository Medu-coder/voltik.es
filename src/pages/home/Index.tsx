import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/features/home/sections/Hero';
import ProblemAgitation from '@/features/home/sections/ProblemAgitation';
import ContactForm from '@/features/home/sections/ContactForm';
import Services from '@/features/home/sections/Services';
import Process from '@/features/home/sections/Process';
import Values from '@/features/home/sections/Values';
import Testimonials from '@/features/home/sections/Testimonials';
import Faqs from '@/features/home/sections/Faqs';
import ContactOptions from '@/features/home/sections/ContactOptions';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Seo from '@/app/seo/Seo';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Si hay un ancla, esperamos un tick y hacemos scroll al elemento
      const id = location.hash.slice(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      // Si no hay hash, colocamos la página en el inicio
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Voltik · Servicios de eficiencia energética"
        description="Reducimos tu factura de la luz: sube tu factura y en menos de 48h te enviamos la mejor oferta energética, gratis y sin compromiso."
        type="website"
      />
      <Header />
      <main className="pt-16 md:pt-20">
        <Hero />
        <ProblemAgitation />
        <ContactForm />
        <Services />
        <Process />
        <Values />
        <Testimonials />
        <Faqs />
        <ContactOptions />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
