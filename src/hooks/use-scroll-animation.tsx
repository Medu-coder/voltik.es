import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

// Global observer instance for better performance
let globalObserver: IntersectionObserver | null = null;
const observedElements = new WeakMap<Element, () => void>();

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    const element = entry.target;
    const callback = observedElements.get(element);
    
    if (entry.isIntersecting) {
      if (callback) {
        callback();
        if (triggerOnce) {
          globalObserver?.unobserve(element);
          observedElements.delete(element);
        }
      }
    } else if (!triggerOnce && callback) {
      // Reset visibility if not triggerOnce
      setIsVisible(false);
    }
  }, [triggerOnce]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Create global observer if it doesn't exist
    if (!globalObserver) {
      globalObserver = new IntersectionObserver(handleIntersection, {
        threshold,
        rootMargin,
      });
    }

    // Store the callback for this element
    const callback = () => setIsVisible(true);
    observedElements.set(element, callback);

    // Observe the element
    globalObserver.observe(element);

    return () => {
      if (globalObserver) {
        globalObserver.unobserve(element);
        observedElements.delete(element);
      }
    };
  }, [threshold, rootMargin, handleIntersection]);

  return { ref, isVisible };
};

export default useScrollAnimation;
