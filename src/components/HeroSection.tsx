import { MapPin, Clock, Zap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/constants";
import heroImage from "@/assets/hero-technician.jpeg";

const badges = [
  { icon: MapPin, text: "Atendimento em até 50km de BH" },
  { icon: Zap, text: "Manutenção e consertos em geral" },
  { icon: Clock, text: "Agendamento fácil no WhatsApp" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Gradient Overlay - Reduced opacity for better image visibility */}
        <div className="absolute inset-0 bg-navy-dark/70" />
        {/* Frost texture - Reduced opacity */}
        <div className="absolute inset-0 frost-overlay opacity-30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-12 md:py-20 lg:py-24">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            Conserto e manutenção de refrigeração com{" "}
            <span className="text-gold">atendimento rápido</span> na região de BH.
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-xl text-white/90 mb-8 animate-fade-in-up font-medium" style={{ animationDelay: "0.1s" }}>
            Diagnóstico técnico, orientação clara e agendamento direto pelo WhatsApp.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 md:gap-4 mb-8 md:mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-navy-dark/60 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5 md:px-4 md:py-2"
              >
                <badge.icon className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                <span className="text-white text-xs md:text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="xl" className="gap-2 w-full sm:w-auto text-sm md:text-base">
                <FaWhatsapp className="w-5 h-5" />
                Agendar pelo WhatsApp
              </Button>
            </a>
            <a href="#servicos">
              <Button variant="outline-hero" size="xl" className="w-full sm:w-auto text-sm md:text-base">
                Ver serviços
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
