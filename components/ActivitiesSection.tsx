"use client";
import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const activities = [
  {
    id: "paramoteur",
    title: "Paramoteur",
    description:
      "Un vol proche du sol, offrant une sensation de liberté pure. Une expérience douce mais intense pour découvrir le ciel autrement.",
    image: "/images/paramoteur.webp",
    cta: "Découvrir le paramoteur",
  },
  {
    id: "parapente",
    title: "Parapente",
    description:
      "Laissez-vous porter par le vent et savourez la légèreté du vol en tandem. Une immersion totale dans le silence et la beauté des paysages.",
    image: "/images/parapente.jpg",
    cta: "Réserver un vol parapente",
  },
  {
    id: "parachutisme",
    title: "Parachutisme",
    description:
      "L'ultime montée d'adrénaline : une chute libre à haute vitesse suivie d'un vol paisible sous voile. Une expérience puissante et mémorable.",
    image: "/images/parachutisme.jpg",
    cta: "Réserver votre saut",
  },
  {
    id: "montgolfiere",
    title: "Montgolfière",
    description:
      "Un vol calme et poétique au lever du soleil. Idéal pour admirer des panoramas majestueux et vivre un moment suspendu hors du temps.",
    image: "/images/montgolfiere.jpg",
    cta: "Explorer la montgolfière",
  },
];

/**
 * Lightweight hook — fires once when the element enters the viewport.
 * Uses native IntersectionObserver, zero JS library cost.
 */
function useInViewOnce(margin = "0px") {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  return { ref, inView };
}

export const ActivitiesSection = () => {
  const { ref, inView } = useInViewOnce("-80px");

  return (
    <section
      id="activites"
      aria-labelledby="activites-heading"
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-primary font-display text-xl tracking-wider mb-4 block">
            NOS ACTIVITÉS EXTRÊMES
          </span>
          <h2
            id="activites-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6"
          >
            Vivez l'adrénaline, l'évasion et des moments qui restent{" "}
            <span className="text-gradient">gravés</span>
          </h2>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {activities.map((activity, index) => (
            <article
              key={activity.id}
              className={`group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: inView ? `${index * 100}ms` : "0ms",
                transitionProperty: "opacity, transform",
                transitionDuration: "600ms",
              }}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"
                  aria-hidden="true"
                />
                {/* Activity Number */}
                <div
                  className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="font-display text-xl text-primary-foreground">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="font-display text-3xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {activity.description}
                </p>
                <Button variant="outline" className="group/btn" asChild>
                  <a href="#reservation">
                    {activity.cta}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
                  </a>
                </Button>
              </div>

              {/* Hover Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
