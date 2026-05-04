"use client";
import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section
      aria-label="Bienvenue chez Extreme Sports Events"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden"
    >
      {/*
       * LCP image — priority + fetchPriority="high" tells the browser to
       * fetch this before any other resource. No JS needed for this to render.
       */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-activites.webp"
          alt="Paramoteur au-dessus des falaises du Maroc"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 bg-white/20" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.5)_100%)]" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center">
        <div className="max-w-5xl mx-auto">

          {/*
           * Badge — decorative, animate after paint.
           * Uses willChange:auto to avoid promoting to compositor layer prematurely.
           */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            style={{ willChange: "auto" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            <span className="text-sm font-medium text-primary">Marrakech • Agadir • Taghazout</span>
          </motion.div>

          {/*
           * H1 — rendered immediately, NO opacity:0 initial state.
           * This is the LCP text element. Hiding it delays LCP score.
           * CSS handles the visual appearance from the start.
           */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground leading-none mb-6">
            Vivez{" "}
            <span className="text-gradient">l'Adrénaline</span>
            <br />
            <span>des Sports Extrêmes</span>
          </h1>

          {/* Subtitle — animate in after H1 is painted */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ willChange: "auto" }}
            className="text-lg sm:text-xl text-black max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          >
            Vivez des sensations fortes et des moments inoubliables grâce à nos expériences aériennes haut de gamme,
            conçues pour vous offrir liberté, adrénaline et émerveillement.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ willChange: "auto" }}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-3">
              <Button variant="hero" size="xl" asChild>
                <a href="#reservation">Réserver votre expérience</a>
              </Button>
              <Button variant="heroOutline" size="xl" className="group" asChild>
                <a href="#activites">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  Découvrir nos activités
                </a>
              </Button>
            </div>

            {/* Scroll Indicator */}
            <motion.a
              href="#about"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              aria-label="Défiler vers la section À propos"
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded mt-2"
            >
              <ChevronDown className="w-6 h-6" aria-hidden="true" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Side Stats — decorative, hidden on mobile, animate after page load */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{ willChange: "auto" }}
        aria-label="Statistiques clés"
        className="absolute right-4 2xl:right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6"
      >
        {[
          { value: "15+", label: "Ans d'expérience" },
          { value: "5000+", label: "Vols réalisés" },
          { value: "100%", label: "Sécurité" },
        ].map((stat, index) => (
          <div key={index} className="text-right">
            <div className="font-display text-2xl 2xl:text-3xl text-primary">{stat.value}</div>
            <div className="text-xs text-foreground uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
