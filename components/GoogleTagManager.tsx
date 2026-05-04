"use client";
import { useEffect } from "react";
import { GTM_ID } from "@/lib/gtm";

export function GoogleTagManagerScript() {
  useEffect(() => {
    if (!GTM_ID) return;

    let loaded = false;
    function loadGTM() {
      if (loaded) return;
      loaded = true;
      window.dataLayer = window.dataLayer ?? [];
      window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(script);
      window.removeEventListener("scroll", loadGTM);
      window.removeEventListener("click", loadGTM);
      window.removeEventListener("keydown", loadGTM);
    }

    // Load after 4s idle OR on first user interaction — whichever comes first
    const timer = setTimeout(loadGTM, 4000);
    window.addEventListener("scroll", loadGTM, { once: true, passive: true });
    window.addEventListener("click", loadGTM, { once: true });
    window.addEventListener("keydown", loadGTM, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", loadGTM);
      window.removeEventListener("click", loadGTM);
      window.removeEventListener("keydown", loadGTM);
    };
  }, []);

  return null;
}

export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0" width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}