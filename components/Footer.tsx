// Server component — no "use client" needed, no framer-motion
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  activities: [
    { label: "Paramoteur", href: "#activites" },
    { label: "Parapente", href: "#activites" },
    { label: "Parachutisme", href: "#activites" },
    { label: "Montgolfière", href: "#activites" },
    { label: "FLY TAGHAZOUT", href: "https://www.flytaghazout.com/", external: true },
  ],
  destinations: [
    { label: "Marrakech", href: "#destinations" },
    { label: "Agadir", href: "#destinations" },
    { label: "Taghazout", href: "#destinations" },
    { label: "Autres destinations", href: "#destinations" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/extreme_adrenaline_sports", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/share/1BwrZZQzYJ/", label: "Facebook" },
];

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-3 mb-6">
              <img
                src="/lovable-uploads/logo-extrem-sport-footer.svg"
                alt="Extreme Sports Events"
                width={120}
                height={48}
                className="h-12 w-auto"
              />
              <span className="font-display text-xl tracking-wider text-foreground">
                EXTREME<span className="text-primary">SPORT</span> EVENTS
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Votre partenaire pour des expériences aériennes inoubliables au Maroc. Sécurité, passion et adrénaline
              garanties.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Activities */}
          <nav aria-label="Activités">
            <h4 className="font-display text-lg text-foreground mb-4">Activités</h4>
            <ul className="space-y-3">
              {footerLinks.activities.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Destinations */}
          <nav aria-label="Destinations">
            <h4 className="font-display text-lg text-foreground mb-4">Destinations</h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-foreground mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-muted-foreground text-sm">Marrakech, Agadir, Taghazout, Maroc</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+212661447158"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +212 661-447158
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:contact@extremesportsevents.ma"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
                >
                  contact@extremesportsevents.ma
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()}{" "}Extreme Sports Events, appuyé par{" "}
              <a
                href="https://monarkit.net"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:text-primary transition-colors"
              >
                MONARK IT
              </a>
              . Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
