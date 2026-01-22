type DataLayerPayload = Record<string, unknown>

export const pushDataLayerEvent = (payload: DataLayerPayload) => {
  if (typeof window === 'undefined') return

  const page_location = window.location.href
  const page_path = window.location.pathname
  const page_title = document.title

  const targetWindow = window as { dataLayer?: DataLayerPayload[] }
  const dataLayer = targetWindow.dataLayer || []
  targetWindow.dataLayer = dataLayer
  dataLayer.push({ page_location, page_path, page_title, ...payload })
}
