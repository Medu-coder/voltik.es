/// <reference types="vite/client" />

// Declaraciones globales para Metricool
declare global {
  interface Window {
    beTracker: {
      t: (config: { hash: string }) => void;
    };
  }
}
