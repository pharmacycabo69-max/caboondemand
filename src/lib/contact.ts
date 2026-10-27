import { site } from "@/config/site";

const STORAGE_KEY = "cod_attribution";
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

type Attribution = Partial<Record<(typeof UTM_KEYS)[number] | "gclid" | "fbclid", string>>;

export function captureAttribution() {
  try {
    const params = new URLSearchParams(window.location.search);
    const found: Attribution = {};
    for (const key of [...UTM_KEYS, "gclid", "fbclid"] as const) {
      const value = params.get(key);
      if (value) found[key] = value.slice(0, 60);
    }
    if (Object.keys(found).length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(found));
    }
  } catch {}
}

function readAttribution(): Attribution {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

// e.g. "(from google / summer-iv)" or "" when there is no attribution.
export function sourceSuffix(): string {
  const a = readAttribution();
  let source = a.utm_source;
  if (!source) source = a.gclid ? "google" : a.fbclid ? "meta" : undefined;
  if (!source) return "";
  const detail = [a.utm_medium === "cpc" ? "ads" : a.utm_medium, a.utm_campaign]
    .filter(Boolean)
    .join(" / ");
  return ` (from ${source}${detail ? ` / ${detail}` : ""})`;
}

export function whatsappHref(message: string, withSource = false): string {
  const text = message + (withSource ? sourceSuffix() : "");
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export const callHref = `tel:${site.phoneTel}`;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackContact(method: "whatsapp" | "call", label: string) {
  window.fbq?.("track", "Contact", { method, label });
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const convLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
  window.gtag?.("event", "Contact", { method, label });
  if (adsId && convLabel) {
    window.gtag?.("event", "conversion", { send_to: `${adsId}/${convLabel}` });
  }
}
