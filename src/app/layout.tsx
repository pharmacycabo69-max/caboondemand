import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Tracking } from "@/components/Tracking";
import { site } from "@/config/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Pharmacy, IV Therapy & Doctor Delivered in Los Cabos | Cabo On Demand",
  description: site.description,
  openGraph: {
    title: "Pharmacy, IV therapy and a doctor — delivered to your villa in Los Cabos",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_US",
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#0F2341" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
        <Tracking />
      </body>
    </html>
  );
}
