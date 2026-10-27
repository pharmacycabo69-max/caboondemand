"use client";

import { callHref, trackContact, whatsappHref } from "@/lib/contact";

type Props = {
  kind: "whatsapp" | "call";
  label: string;
  message?: string;
  variant?: "primary" | "outline" | "light" | "card";
  className?: string;
};

const styles = {
  primary: "bg-brand-green text-white hover:bg-[#187058]",
  outline: "border border-white/60 text-white hover:bg-white/10",
  light: "bg-white text-brand-navy hover:bg-slate-100",
  card: "border border-brand-green text-brand-green hover:bg-brand-green hover:text-white",
};

export function ContactButton({ kind, label, message = "", variant = "primary", className = "" }: Props) {
  const isWa = kind === "whatsapp";
  return (
    <a
      href={isWa ? whatsappHref(message) : callHref}
      target={isWa ? "_blank" : undefined}
      rel={isWa ? "noopener noreferrer" : undefined}
      onClick={(e) => {
        // Resolve the href at click time so stored UTM data is included.
        if (isWa) e.currentTarget.href = whatsappHref(message, true);
        trackContact(kind, label);
      }}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold transition-colors ${styles[variant]} ${className}`}
    >
      {isWa ? <WhatsAppIcon /> : <PhoneIcon />}
      {label}
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.4-8.3ZM12 21.7c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 0 1-1.5-5.1C2.1 6.500 6.500 2.100 12 2.100c2.600 0 5.100 1 6.900 2.900a9.700 9.700 0 0 1 2.900 6.900c0 5.400-4.400 9.800-9.800 9.800Zm5.400-7.300c-.3-.1-1.800-.9-2-1s-.5-.1-.7.1l-.9 1.100c-.2.200-.3.200-.6.100a8 8 0 0 1-4-3.500c-.3-.5.300-.5.900-1.600.1-.2 0-.4 0-.5l-.9-2.200c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.100-.8.400s-1 1-1 2.500 1.100 2.900 1.200 3.100c.1.200 2.100 3.200 5.100 4.500 1.900.8 2.600.9 3.600.7.600-.1 1.800-.7 2-1.400.3-.7.3-1.300.2-1.400-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.800 19.800 0 0 1-8.600-3.100 19.500 19.500 0 0 1-6-6A19.800 19.800 0 0 1 2.100 4.200 2 2 0 0 1 4.100 2h3a2 2 0 0 1 2 1.700c.1 1 .4 1.900.7 2.800a2 2 0 0 1-.5 2.100L8.100 9.900a16 16 0 0 0 6 6l1.300-1.300a2 2 0 0 1 2.100-.4c.9.300 1.800.6 2.800.7a2 2 0 0 1 1.700 2Z" />
    </svg>
  );
}
