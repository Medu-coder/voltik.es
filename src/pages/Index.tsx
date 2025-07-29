import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ProblemAgitation from '@/components/sections/ProblemAgitation';
import Services from '@/components/sections/Services';
import Values from '@/components/sections/Values';
import Testimonials from '@/components/sections/Testimonials';
import ContactForm from '@/components/sections/ContactForm';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [location]);

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

export default Index;