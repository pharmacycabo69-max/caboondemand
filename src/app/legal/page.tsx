import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Legal | Cabo On Demand",
  robots: { index: false },
};

export default function Legal() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 text-slate-700">
      <Link href="/" className="text-brand-green underline">← Back</Link>
      <h1 className="mt-6 text-3xl font-bold text-brand-navy">Legal</h1>

      <h2 className="mt-8 text-xl font-semibold text-brand-navy">Medical emergencies</h2>
      <p className="mt-2">{site.name} is not an emergency service. In a medical emergency, call 911.</p>

      <h2 className="mt-8 text-xl font-semibold text-brand-navy">Information only</h2>
      <p className="mt-2">
        Information on this website is general and does not replace an in-person evaluation. Services, prices and
        availability are confirmed with you before any service begins and may vary by location and time.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-brand-navy">Privacy</h2>
      <p className="mt-2">
        When you message us, we use the details you share only to arrange and deliver your service. This site uses
        advertising cookies and pixels (Meta, Google) to measure the performance of our ads, and stores campaign
        parameters (such as UTM tags) in your browser to identify how you found us.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-brand-navy">Contact</h2>
      <p className="mt-2">{site.phoneDisplay} (WhatsApp or call)</p>
    </main>
  );
}
