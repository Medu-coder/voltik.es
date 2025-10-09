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

export const useScrollAnimationOptimized = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.2, // Menos sensible
    rootMargin = '0px 0px -100px 0px', // Más conservador
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
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      });
    }

    const callback = () => setIsVisible(true);
    observedElements.set(element, callback);
    globalObserver.observe(element);

    return () => {
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
