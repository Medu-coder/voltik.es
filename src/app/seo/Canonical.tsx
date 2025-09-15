import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = (import.meta as any).env?.VITE_SITE_URL || 'https://voltik.es';

export default function Canonical() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Evita parámetros de tracking (UTM, etc.) en la canónica
    const href = `${SITE_URL}${pathname}`;
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }, [pathname]);

  return null;
}
