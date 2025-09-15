import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    dataLayer?: any[]
    gtag?: (...args: any[]) => void
  }
}

export default function RouteAnalytics() {
  const { pathname } = useLocation()
  const isFirst = useRef(true)

  useEffect(() => {
    // Skip the initial pageview to avoid duplicates, since GTM likely
    // auto-sends a page_view on load via the Google tag.
    if (isFirst.current) {
      isFirst.current = false
      return
    }

    const page_location = window.location.href
    const page_title = document.title
    const page_path = pathname

    // Always push to dataLayer for GTM setups
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'pageview',
      page_location,
      page_path,
      page_title,
    })

    // If GA4 gtag is present (in case someone adds it), send SPA page_view explicitly
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_title,
        page_location,
        page_path,
      })
    }
  }, [pathname])

  return null
}
