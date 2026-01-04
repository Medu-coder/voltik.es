import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number; // Nuevo: delay personalizado
}

// Observer global optimizado
let globalObserver: IntersectionObserver | null = null;
const observedElements = new WeakMap<Element, () => void>();
const animationQueue = new Set<Element>(); // Cola de animaciones

const isInViewport = (element: Element, offset = 50) => {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight - offset && rect.bottom > 0;
};

export const useScrollAnimationOptimized = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.15, // Más sensible para activar antes
    rootMargin = '0px 0px -50px 0px', // Menos conservador para activar antes
    triggerOnce = true,
    delay = 0
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    const element = entry.target;
    const callback = observedElements.get(element);
    
    if (entry.isIntersecting && callback) {
      // Añadir a cola de animaciones
      animationQueue.add(element);
      
      // Procesar con delay para evitar reflows masivos
      setTimeout(() => {
        if (animationQueue.has(element)) {
          callback();
          animationQueue.delete(element);
          
          if (triggerOnce) {
            globalObserver?.unobserve(element);
            observedElements.delete(element);
          }
        }
      }, delay);
    } else if (!triggerOnce && callback) {
      setIsVisible(false);
    }
  }, [triggerOnce, delay]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Crear observer global si no existe (usar valores por defecto)
    if (!globalObserver) {
      globalObserver = new IntersectionObserver(handleIntersection, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px',
      });
    }

    const callback = () => setIsVisible(true);
    observedElements.set(element, callback);
    globalObserver.observe(element);

    const checkAndTrigger = () => {
      const current = ref.current;
      if (!current) return;
      if (isInViewport(current)) {
        callback();
        if (triggerOnce) {
          globalObserver?.unobserve(current);
          observedElements.delete(current);
          animationQueue.delete(current);
        }
      }
    };

    const rafId = requestAnimationFrame(checkAndTrigger);
    const handlePageShow = () => {
      if (document.visibilityState === 'visible') {
        requestAnimationFrame(checkAndTrigger);
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    document.addEventListener('visibilitychange', handlePageShow);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('pageshow', handlePageShow);
      document.removeEventListener('visibilitychange', handlePageShow);
      if (globalObserver) {
        globalObserver.unobserve(element);
        observedElements.delete(element);
        animationQueue.delete(element);
      }
    };
  }, [handleIntersection]);

  return { ref, isVisible };
};

export default useScrollAnimationOptimized;
