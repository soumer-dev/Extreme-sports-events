import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import {
  GoogleTagManagerScript,
  GoogleTagManagerNoScript,
} from "@/components/GoogleTagManager";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://extremesportsevents.ma";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Extreme Sports Events — Sports Aériens au Maroc | Paramoteur, Parapente, Parachutisme",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Preconnect to Google Fonts for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Google Tag Manager — loads after page is interactive */}
        <GoogleTagManagerScript />
      </head>
      <body>
        {/* GTM noscript fallback — must be first child of body */}
        <GoogleTagManagerNoScript />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
