import { useEffect } from 'react'

export default function MetricoolTracker() {
  useEffect(() => {
    // Función para cargar el script de Metricool
    const loadScript = (callback: () => void) => {
      const head = document.getElementsByTagName("head")[0]
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.src = "https://tracker.metricool.com/resources/be.js"
      script.onload = callback
      // Para compatibilidad con IE (aunque ya no es necesario)
      if ('onreadystatechange' in script) {
        (script as any).onreadystatechange = callback
      }
      head.appendChild(script)
    }

    // Cargar el script y inicializar el tracking
    loadScript(() => {
      if ((window as any).beTracker) {
        (window as any).beTracker.t({ hash: "866fa3fecb3089a03788d867302baa03" })
      }
    })
  }, [])

  return null // Este componente no renderiza nada
}
