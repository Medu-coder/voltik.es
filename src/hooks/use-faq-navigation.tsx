import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export const useFaqNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToFaqs = () => {
    const faqSection = document.getElementById('faqs')
    if (faqSection) {
      // Calcular la posición considerando el header fijo
      const headerHeight = 80 // altura aproximada del header
      const elementPosition = faqSection.offsetTop - headerHeight
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleFaqClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    // Si estamos en la página de inicio, hacer scroll suave
    if (location.pathname === '/') {
      scrollToFaqs()
    } else {
      // Si estamos en otra página, navegar a inicio y luego hacer scroll
      navigate('/', { replace: false })
      
      // Usar un enfoque más robusto para esperar a que la página se cargue
      const checkAndScroll = () => {
        const faqSection = document.getElementById('faqs')
        if (faqSection) {
          scrollToFaqs()
        } else {
          // Si aún no existe, esperar un poco más
          setTimeout(checkAndScroll, 50)
        }
      }
      
      // Iniciar la verificación después de un pequeño delay
      setTimeout(checkAndScroll, 100)
    }
  }

  return { handleFaqClick }
}
