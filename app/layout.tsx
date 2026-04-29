import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import {
  GoogleTagManagerScript,
  GoogleTagManagerNoScript,
} from "@/components/GoogleTagManager";

export const metadata: Metadata = {
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
