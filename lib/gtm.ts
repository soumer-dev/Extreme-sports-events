/**
 * Google Tag Manager utilities
 * Handles GTM script injection and dataLayer event pushing.
 */

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? "";

/** Push an event to the GTM dataLayer (client-side only). */
export function gtmEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });
}

/** Convenience wrappers for tracked conversions */
export const trackReservationSubmit = () =>
  gtmEvent("reservation_submit", { form_type: "reservation" });

export const trackWhatsAppClick = () =>
  gtmEvent("whatsapp_click", { cta_location: "floating_button" });
