import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import {
  GoogleTagManagerScript,
  GoogleTagManagerNoScript,
} from "@/components/GoogleTagManager";

// ─── Fonts via next/font ──────────────────────────────────────────────────────
// Self-hosted by Next.js — zero external network request, zero render-blocking.
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  weight: ["300", "400", "500", "600", "700"],
});

// ─── Metadata ─────────────────────────────────────────────────────────────────
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://extremesportsevents.ma";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Extreme Sports Events — Sports Aériens au Maroc | Paramoteur, Parapente, Parachutisme",
    template: "%s | Extreme Sports Events Maroc",
  },
  description:
    "Vivez des expériences aériennes inoubliables au Maroc avec Extreme Sports Events. Paramoteur, parapente, parachutisme et montgolfière à Marrakech, Agadir et Taghazout. Pilotes certifiés, sécurité garantie.",
  keywords: [
    "sports aériens Maroc",
    "paramoteur Maroc",
    "parapente Maroc",
    "parachutisme Maroc",
    "montgolfière Marrakech",
    "FLY TAGHAZOUT",
    "sports extrêmes Agadir",
    "vol en tandem Maroc",
    "Extreme Sports Events",
  ],
  authors: [{ name: "Extreme Sports Events" }],
  creator: "Extreme Sports Events",
  publisher: "Extreme Sports Events",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: siteUrl,
    siteName: "Extreme Sports Events",
    title: "Extreme Sports Events — Sports Aériens au Maroc",
    description:
      "Paramoteur, parapente, parachutisme et montgolfière à Marrakech, Agadir et Taghazout. Pilotes certifiés, sécurité garantie.",
    images: [
      {
        url: "/images/hero-activites.webp",
        width: 1200,
        height: 630,
        alt: "Paramoteur au-dessus des falaises du Maroc — Extreme Sports Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Extreme Sports Events — Sports Aériens au Maroc",
    description:
      "Paramoteur, parapente, parachutisme et montgolfière à Marrakech, Agadir et Taghazout.",
    images: ["/images/hero-activites.webp"],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${bebasNeue.variable} ${inter.variable}`}
    >
      <head>
        {/*
         * Preload the LCP hero image.
         * The browser starts fetching this before React hydrates,
         * giving the image a head-start on the critical path.
         */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-activites.webp"
          type="image/webp"
          // @ts-expect-error — fetchpriority is valid HTML but not yet in React types
          fetchpriority="high"
        />
        {/*
         * DNS prefetch for GTM — resolves the hostname early so the
         * lazyOnload script connects faster when it eventually fires.
         */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>
        {/* GTM noscript — must be first child of body */}
        <GoogleTagManagerNoScript />
        <Providers>{children}</Providers>
        {/*
         * GTM script — strategy="lazyOnload" fires after the page is fully
         * loaded and idle. This is the maximum deferral available in Next.js
         * and eliminates GTM from the TBT critical path entirely.
         */}
        <GoogleTagManagerScript />
      </body>
    </html>
  );
}
