/**
 * Helpers de rastreamento e preservação de UTMs (requisitos RF-08, RF-09 e RF-11 do PRD).
 * Os IDs vêm de variáveis de ambiente — sem ID configurado, nada é carregado.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
export const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL ?? "#oferta";
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "ref",
  "aff",
] as const;

/** Anexa as UTMs da página atual ao link de checkout (suporte a afiliados). */
export function checkoutHref(): string {
  if (typeof window === "undefined" || CHECKOUT_URL.startsWith("#")) {
    return CHECKOUT_URL;
  }
  try {
    const url = new URL(CHECKOUT_URL);
    const params = new URLSearchParams(window.location.search);
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value && !url.searchParams.has(key)) {
        url.searchParams.set(key, value);
      }
    }
    return url.toString();
  } catch {
    return CHECKOUT_URL;
  }
}

export function whatsappHref(): string {
  const message = encodeURIComponent(
    "Olá! Quero saber mais sobre a Antena Digital."
  );
  return WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
    : "#oferta";
}

/** Dispara o mesmo evento no GA4 e no Pixel Meta. */
export function trackEvent(
  name: "cta_click" | "initiate_checkout" | "whatsapp_click",
  params?: Record<string, string>
) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
  if (name === "initiate_checkout") {
    window.fbq?.("track", "InitiateCheckout", params);
  } else {
    window.fbq?.("trackCustom", name, params);
  }
}
