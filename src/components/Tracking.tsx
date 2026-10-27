"use client";

import Script from "next/script";
import { useEffect } from "react";
import { captureAttribution } from "@/lib/contact";

const META_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

export function Tracking() {
  useEffect(() => captureAttribution(), []);

  return (
    <>
      {META_ID && (
        <Script id="meta-pixel" strategy="lazyOnload">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','${META_ID}');fbq('track','PageView');
        `}</Script>
      )}
      {ADS_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`} strategy="lazyOnload" />
          <Script id="google-ads" strategy="lazyOnload">{`
            window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
            window.gtag=gtag;gtag('js',new Date());gtag('config','${ADS_ID}');
          `}</Script>
        </>
      )}
    </>
  );
}
