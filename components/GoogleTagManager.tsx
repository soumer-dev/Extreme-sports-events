/**
 * GoogleTagManager
 * Renders the GTM <script> in <head> and the <noscript> fallback in <body>.
 * Only renders when NEXT_PUBLIC_GTM_ID is set.
 *
 * Usage:
 *   <GoogleTagManagerScript /> — place inside <head> (or at top of <body>)
 *   <GoogleTagManagerNoScript /> — place as first child of <body>
 */

import Script from "next/script";
import { GTM_ID } from "@/lib/gtm";

export function GoogleTagManagerScript() {
  if (!GTM_ID) return null;

  return (
    <Script
      id="gtm-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
        `.trim(),
      }}
    />
  );
}

export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
