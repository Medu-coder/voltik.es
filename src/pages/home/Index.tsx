import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/features/home/sections/Hero';
import ProblemSection from '@/features/home/sections/ProblemSection';
import SolutionSection from '@/features/home/sections/SolutionSection';
import ContactForm from '@/features/home/sections/ContactForm';
import Services from '@/features/home/sections/Services';
import Values from '@/features/home/sections/Values';
import { useEffect, Suspense, lazy } from 'react';
import { useLocation } from 'react-router-dom';
import Seo from '@/app/seo/Seo';

// Lazy load non-critical components
const LazyTestimonials = lazy(() => import('@/features/home/sections/Testimonials'));
const LazyFaqs = lazy(() => import('@/features/home/sections/Faqs'));
const LazyContactOptions = lazy(() => import('@/features/home/sections/ContactOptions'));

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
    <div className="min-h-screen bg-gradient-to-b from-primary/60 via-background to-secondary/40">
      <Seo
        title="Voltik - Eficiencia energética | Ahorra en tu factura de luz"
        description="Reduce tu factura de luz hasta un 20%: sube tu factura y recibe la mejor oferta personalizada en 48h. Servicio gratuito sin compromiso para hogares y negocios en España."
        type="website"
      />
      <Header />
      <main id="main-content" className="pt-16 md:pt-20">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ContactForm />
        {/* <Services /> */}
        <Values />
        <Suspense fallback={<div className="h-32 bg-muted/20 animate-pulse rounded-lg mx-4" />}>
          <LazyTestimonials />
        </Suspense>
        <Suspense fallback={<div className="h-32 bg-muted/20 animate-pulse rounded-lg mx-4" />}>
          <LazyFaqs />
        </Suspense>
        <Suspense fallback={<div className="h-32 bg-muted/20 animate-pulse rounded-lg mx-4" />}>
          <LazyContactOptions />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
