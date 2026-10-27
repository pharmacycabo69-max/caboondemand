import Image from "next/image";
import Link from "next/link";
import { ContactButton } from "@/components/ContactButton";
import {
  audiences,
  badges,
  coverage,
  faqs,
  generalMessage,
  services,
  site,
  steps,
} from "@/config/site";

const visits = [
  {
    src: "/photos/visit-living-room.jpg",
    alt: "Nurse starting an IV for a guest on a sofa in a villa living room with ocean views",
  },
  {
    src: "/photos/visit-terrace.jpg",
    alt: "Nurse preparing IV supplies while guests relax on a villa terrace overlooking the bay",
  },
  {
    src: "/photos/visit-rooftop.jpg",
    alt: "Two guests receiving IV hydration on rooftop lounge chairs with an ocean view",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      description: site.description,
      areaServed: "Los Cabos, Baja California Sur, Mexico",
      telephone: site.phoneTel,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="pb-24 md:pb-0">
        {/* Hero */}
        <section className="bg-brand-navy text-white">
          <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 pb-14 pt-8 md:grid-cols-[1.2fr_1fr] md:pb-20">
            <div>
            <p className="text-lg font-bold tracking-tight">{site.name}</p>
            <h1 className="mt-10 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
              Pharmacy, IV therapy and a doctor — delivered to your villa in Los Cabos.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-200">
              Bilingual nurses and physicians, usually within the hour, priced in USD up front.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactButton kind="whatsapp" label="Message us on WhatsApp" message={generalMessage} className="sm:text-lg sm:px-8 sm:py-4" />
              <ContactButton kind="call" label={`Call ${site.phoneDisplay}`} variant="outline" className="sm:text-lg sm:px-8 sm:py-4" />
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {badges.map((b) => (
                <li key={b} className="rounded-full border border-white/25 px-3 py-1 text-sm text-slate-100">
                  {b}
                </li>
              ))}
            </ul>
            </div>
            {/* Hidden on mobile so the CTA stays above the fold and no image blocks LCP */}
            <Image
              src="/photos/hero.jpg"
              alt="Nurse attending guests receiving IV hydration by the pool at a Los Cabos villa"
              width={765}
              height={1020}
              sizes="(min-width: 768px) 400px, 0px"
              className="hidden aspect-[4/5] w-full rounded-2xl object-cover md:block"
            />
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-5xl px-5 py-16">
          <h2 className="text-3xl font-bold text-brand-navy">Services</h2>
          <p className="mt-2 text-slate-600">Clear prices in USD. Confirmed before we come.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.id} className="flex flex-col rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-brand-navy">{s.title}</h3>
                <p className="mt-2 flex-1 text-slate-600">
                  {s.description}
                  {s.meta && <span className="text-slate-500"> {s.meta}.</span>}
                </p>
                <p className="mt-4 text-lg font-bold text-brand-green">{s.price}</p>
                <ContactButton
                  kind="whatsapp"
                  label="Ask on WhatsApp"
                  message={s.message}
                  variant="card"
                  className="mt-4 py-3"
                />
              </article>
            ))}
          </div>
        </section>

        {/* Real visits */}
        <section className="mx-auto max-w-5xl px-5 pb-16">
          <h2 className="text-3xl font-bold text-brand-navy">Care where you&apos;re staying</h2>
          <p className="mt-2 text-slate-600">Poolside, on the terrace or in the living room. We set up wherever you are comfortable.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {visits.map((v) => (
              <Image
                key={v.src}
                src={v.src}
                alt={v.alt}
                width={765}
                height={1020}
                sizes="(min-width: 640px) 330px, 100vw"
                className="aspect-[3/4] w-full rounded-2xl object-cover"
              />
            ))}
          </div>
        </section>

        {/* Who it's for */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-5xl px-5 py-16">
            <h2 className="text-3xl font-bold text-brand-navy">Who it&apos;s for</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {audiences.map((a) => (
                <div key={a.title} className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-brand-green">{a.title}</h3>
                  <p className="mt-2 text-slate-600">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-5xl px-5 py-16">
          <h2 className="text-3xl font-bold text-brand-navy">How it works</h2>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-brand-navy">{s.title}</h3>
                <p className="mt-1 text-slate-600">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Coverage */}
        <section className="bg-brand-navy text-white">
          <div className="mx-auto max-w-5xl px-5 py-16">
            <h2 className="text-3xl font-bold">Coverage across Los Cabos</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {coverage.map((c) => (
                <li key={c} className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-slate-300">
              Outlying zones may carry a travel fee, quoted before booking.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-5 py-16">
          <h2 className="text-3xl font-bold text-brand-navy">Frequently asked questions</h2>
          <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-brand-navy">
                  {f.q}
                  <span aria-hidden className="ml-4 text-brand-green transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-green text-white">
          <div className="mx-auto max-w-5xl px-5 py-14 text-center">
            <h2 className="text-3xl font-bold">Not feeling well? Message us now.</h2>
            <p className="mt-2 text-white/90">Tell us where you are and what you need. We reply in 20–60 minutes.</p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <ContactButton kind="whatsapp" label="Message us on WhatsApp" message={generalMessage} variant="light" />
              <ContactButton kind="call" label={`Call ${site.phoneDisplay}`} variant="outline" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-navy px-5 py-8 pb-28 text-center text-sm text-slate-300 md:pb-8">
        <p className="font-semibold text-white">Not for medical emergencies — call 911.</p>
        <p className="mt-2">
          © {new Date().getFullYear()} {site.name} ·{" "}
          <Link href="/legal" className="underline">
            Legal
          </Link>
        </p>
      </footer>

      {/* Sticky mobile bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white p-3 md:hidden">
        <ContactButton kind="whatsapp" label="Message us on WhatsApp" message={generalMessage} className="w-full" />
      </div>
    </>
  );
}
