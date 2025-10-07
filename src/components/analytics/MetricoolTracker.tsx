import { useEffect } from 'react'

export default function MetricoolTracker() {
  useEffect(() => {
    // Script exacto de Metricool
    function loadScript(a: () => void) {
      var b = document.getElementsByTagName("head")[0]
      var c = document.createElement("script")
      c.type = "text/javascript"
      c.src = "https://tracker.metricool.com/resources/be.js"
      // @ts-ignore - onreadystatechange es para compatibilidad con IE
      c.onreadystatechange = a
      c.onload = a
      b.appendChild(c)
    }
    
    loadScript(function() {
      (window as any).beTracker.t({ hash: "866fa3fecb3089a03788d867302baa03" })
    })
  }, [])

  return null // Este componente no renderiza nada
}
