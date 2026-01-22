const WHATSAPP_NUMBER = '34604136723'
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export const WHATSAPP_MESSAGE_PRE_FORM =
  'Hola, estoy interesado en que analicéis mi factura y me ofrezcáis una mejor oferta.'

export const WHATSAPP_MESSAGE_POST_FORM =
  'Hola, acabo de enviar el formulario en la web de Voltik para que reviséis mi factura.'

export const WHATSAPP_SOURCE_PRAPARTMENTS = 'colectivos-prapartments'

export const WHATSAPP_MESSAGE_PRE_FORM_PRAPARTMENTS =
  'Hola, estoy interesado en que analicéis mi factura y me ofrezcáis una mejor oferta para el coletivo P&R Apartment'

export const WHATSAPP_MESSAGE_POST_FORM_PRAPARTMENTS =
  'Hola, acabo de enviar el formulario de coletivo P&R Apartment para que reviséis mi factura.'

export const getWhatsAppUrl = (message: string) =>
  `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`

export const WHATSAPP_URL_PRE_FORM = getWhatsAppUrl(WHATSAPP_MESSAGE_PRE_FORM)
export const WHATSAPP_URL_POST_FORM = getWhatsAppUrl(WHATSAPP_MESSAGE_POST_FORM)

export const getWhatsAppUrlBySource = (
  source: string | undefined,
  kind: 'pre_form' | 'post_form'
) => {
  const isPrapartments = source === WHATSAPP_SOURCE_PRAPARTMENTS
  const message =
    kind === 'pre_form'
      ? isPrapartments
        ? WHATSAPP_MESSAGE_PRE_FORM_PRAPARTMENTS
        : WHATSAPP_MESSAGE_PRE_FORM
      : isPrapartments
      ? WHATSAPP_MESSAGE_POST_FORM_PRAPARTMENTS
      : WHATSAPP_MESSAGE_POST_FORM

  return getWhatsAppUrl(message)
}
