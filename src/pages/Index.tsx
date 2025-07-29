import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import ProblemAgitation from '@/components/sections/ProblemAgitation'
import Services from '@/components/sections/Services'
import Values from '@/components/sections/Values'
import Testimonials from '@/components/sections/Testimonials'
import ContactForm from '@/components/sections/ContactForm'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 md:pt-20">
        <Hero />
        <ProblemAgitation />
        <Services />
        <Values />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

const IndexPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Si hay un hash en la URL, buscamos el elemento y nos desplazamos
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Esperamos un tick para que la página renderice
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [location]);
}

export default Index; IndexPage;