// Server component — static content, no client JS needed
import { Shield, Star, MapPin, Calendar, Check } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Sécurité Certifiée",
    description: "Encadrement par des pilotes et instructeurs titulaires d'accréditations internationales.",
  },
  {
    icon: Star,
    title: "Expérience Premium",
    description: "Accueil, briefing, matériel haute performance et accompagnement personnalisé.",
  },
  {
    icon: MapPin,
    title: "Destinations Splendides",
    description: "Marrakech, Agadir, Taghazout et d'autres lieux exclusifs au Maroc.",
  },
  {
    icon: Calendar,
    title: "Événementiel sur Mesure",
    description: "Team-building, incentives, shootings, campagnes marketing, demandes spéciales.",
  },
];

const guarantees = [
  "Pilotes certifiés et expérimentés",
  "Équipement haut de gamme",
  "Assurance incluse",
  "Photos et vidéos disponibles",
  "Flexibilité des horaires",
  "Accompagnement personnalisé",
];

export const WhyUsSection = () => {
  return (
    <section
      id="pourquoi-nous"
      aria-labelledby="pourquoi-nous-heading"
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-display text-xl tracking-wider mb-4 block">
            POURQUOI NOUS CHOISIR
          </span>
          <h2
            id="pourquoi-nous-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight"
          >
            L'excellence au service de{" "}
            <span className="text-gradient">vos sensations</span>
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {reasons.map((reason) => (
            <div key={reason.title} className="group relative">
              <div className="h-full p-6 lg:p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                </div>

                <h3 className="font-display text-2xl text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>

                {/* Hover line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-hero scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-background to-primary/5 border border-primary/20">
            <h3 className="font-display text-3xl text-center text-foreground mb-8">
              Nos Garanties
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {guarantees.map((guarantee) => (
                <div
                  key={guarantee}
                  className="flex items-center gap-3 p-4 rounded-xl bg-background/50"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
