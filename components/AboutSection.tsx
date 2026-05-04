// Server component — static content, no client JS needed
import { Shield, Award, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Shield, label: "Sécurité Certifiée" },
  { icon: Award, label: "Pilotes Experts" },
  { icon: MapPin, label: "Spots Uniques" },
  { icon: Users, label: "Team Building" },
];

const badges = [
  { value: "5000+", label: "Vols" },
  { value: "100%", label: "Sécurité" },
  { value: "4.9★", label: "Avis" },
  { value: "6+", label: "Bases" },
];

const badgePositions = ["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"];

export const AboutSection = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 lg:py-32 bg-gradient-dark relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-display text-xl tracking-wider mb-4 block">
              QUI SOMMES-NOUS
            </span>
            <h2
              id="about-heading"
              className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6"
            >
              L'Excellence des{" "}
              <span className="text-gradient">Sports Aériens</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Extreme Sports Events, c'est avant tout une équipe passionnée par l'univers des sports aériens
              et des expériences fortes. Basés à Marrakech, Agadir et Taghazout, nous créons des moments
              qui sortent de l'ordinaire.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nous accompagnons particuliers, entreprises, influenceurs, agences et organisateurs d'événements
              dans la création de moments forts, sécurisés et parfaitement orchestrés.
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/50"
                >
                  <feature.icon className="w-6 h-6 text-primary flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground">{feature.label}</span>
                </div>
              ))}
            </div>

            <Button variant="outline" size="lg" asChild>
              <a href="#reservation">Planifier votre aventure</a>
            </Button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-pulse" aria-hidden="true" />
              <div className="absolute inset-8 border-2 border-primary/30 rounded-full" aria-hidden="true" />
              <div className="absolute inset-16 border-2 border-primary/40 rounded-full" aria-hidden="true" />

              {/* Center content */}
              <div className="absolute inset-24 bg-gradient-card rounded-full flex flex-col items-center justify-center text-center p-6 border border-border shadow-glow">
                <span className="font-display text-6xl text-primary">15+</span>
                <span className="text-muted-foreground text-sm uppercase tracking-wider mt-2">
                  Années d'expérience
                </span>
              </div>

              {/* Floating badges */}
              {badges.map((badge, index) => (
                <div
                  key={badge.label}
                  className={`absolute ${badgePositions[index]} bg-card border border-border rounded-xl p-4 shadow-card`}
                >
                  <div className="font-display text-2xl text-primary">{badge.value}</div>
                  <div className="text-xs text-muted-foreground">{badge.label}</div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-12 text-center">
              <p className="text-2xl font-display text-foreground italic">
                "Relax, respirez… le ciel marocain vous attend."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
