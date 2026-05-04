import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ActivitiesSection } from "@/components/ActivitiesSection";
import { FlyTaghazoutSection } from "@/components/FlyTaghazoutSection";
import { DestinationsSection } from "@/components/DestinationsSection";
import { ReservationSection } from "@/components/ReservationSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhyUsSection } from "@/components/WhyUsSection";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Extreme Sports Events",
  description:
    "Expériences aériennes haut de gamme au Maroc : paramoteur, parapente, parachutisme et montgolfière à Marrakech, Agadir et Taghazout.",
  url: "https://extremesportsevents.ma",
  telephone: "+212661447158",
  email: "contact@extremesportsevents.ma",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Marrakech",
    addressCountry: "MA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.6295,
    longitude: -7.9811,
  },
  areaServed: ["Marrakech", "Agadir", "Taghazout", "Taroudant", "Beni Mellal"],
  sameAs: [
    "https://www.instagram.com/extreme_adrenaline_sports",
    "https://www.facebook.com/share/1BwrZZQzYJ/",
    "https://www.flytaghazout.com/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sports Aériens au Maroc",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SportsEvent",
          name: "Paramoteur",
          description:
            "Vol proche du sol offrant une sensation de liberté pure au Maroc.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SportsEvent",
          name: "Parapente",
          description: "Vol en tandem dans le silence et la beauté des paysages marocains.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SportsEvent",
          name: "Parachutisme",
          description: "Chute libre à haute vitesse suivie d'un vol paisible sous voile.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SportsEvent",
          name: "Montgolfière",
          description: "Vol calme et poétique au lever du soleil sur les paysages marocains.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SportsEvent",
          name: "FLY TAGHAZOUT",
          description:
            "Survol des plages mythiques de Taghazout, falaises sauvages et spots de surf.",
        },
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main id="main-content" className="min-h-screen bg-background pt-20">
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <FlyTaghazoutSection />
        <DestinationsSection />
        <WhyUsSection />
        <ReservationSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
