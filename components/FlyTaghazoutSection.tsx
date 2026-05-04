"use client";
import { useRef, useEffect, useState } from "react";
import { Star, Camera, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const features = [
  { icon: Star,   text: "Un spot côtier unique révélant plages, dunes et falaises atlantiques" },
  { icon: Award,  text: "Un encadrement premium assuré par des pilotes certifiés" },
  { icon: Camera, text: "Des prises de vues spectaculaires pour sublimer vos souvenirs" },
  { icon: Users,  text: "Une activité accessible à tous, sans prérequis sportif" },
];

const stats = [
  { value: "20min", label: "Durée moyenne" },
  { value: "500m",  label: "Altitude max" },
  { value: "4K",    label: "Vidéo incluse" },
  { value: "100%",  label: "Sensations" },
];

function useInViewOnce(margin = "0px") {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { rootMargin: margin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);
  return { ref, inView };
}

export const FlyTaghazoutSection = () => {
  const { ref, inView } = useInViewOnce("-80px");

  return (
    <section
      id="fly-taghazout"
      aria-labelledby="fly-taghazout-heading"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/taghazout.webp"
          alt="Vue aérienne de Taghazout, Maroc"
          fill
          sizes="100vw"
          className="object-cover"
          quality={80}
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70"
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 mb-6">
              <Star className="w-4 h-4 text-primary fill-primary" aria-hidden="true" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Expérience Signature
              </span>
            </div>

            <h2
              id="fly-taghazout-heading"
              className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-none mb-6"
            >
              FLY <span className="text-gradient">TAGHAZOUT</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              FLY TAGHAZOUT est l'expérience signature d'Extreme Sports Events.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Survolez les plages mythiques de Taghazout, ses falaises sauvages,
              ses spots de surf emblématiques et ses villages côtiers. Un vol à
              couper le souffle, accessible à tous, réalisé par des pilotes certifiés.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 transition-all duration-500 ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: inView ? `${200 + index * 80}ms` : "0ms" }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <p className="text-foreground pt-2">{feature.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="hero" size="xl" asChild>
                <a href="#reservation">Réserver FLY TAGHAZOUT</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="https://flytaghazout.com" target="_blank" rel="noopener noreferrer">
                  Explorer l'Expérience
                </a>
              </Button>
            </div>
          </div>

          {/* Visual Side */}
          <div
            className={`hidden lg:block transition-all duration-700 ${
              inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: inView ? "150ms" : "0ms" }}
          >
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-primary/30 rounded-3xl" aria-hidden="true" />
              <div className="absolute -inset-8 border border-primary/10 rounded-3xl" aria-hidden="true" />

              <div className="relative bg-gradient-card rounded-2xl p-8 border border-border shadow-card">
                <div className="text-center mb-8">
                  <span className="font-display text-8xl text-gradient">FLY</span>
                  <div className="font-display text-4xl text-foreground tracking-widest mt-2">
                    TAGHAZOUT
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 rounded-xl bg-background/50">
                      <div className="font-display text-2xl text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/20 blur-3xl rounded-full"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
