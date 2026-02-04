import { MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink, BUSINESS_INFO } from "@/lib/constants";
import technicianImage from "@/assets/technician-working.jpeg";

export const AreaSection = () => {
  return (
    <section id="area" className="py-12 md:py-20 lg:py-28 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 frost-overlay opacity-10" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-gold font-semibold text-sm uppercase tracking-wider mb-3 block">
              Área de Atendimento
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Belo Horizonte e região metropolitana
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Atendemos em um raio de até 50km de BH, incluindo diversas cidades e bairros da região metropolitana.
            </p>

            {/* Areas list */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {BUSINESS_INFO.areas.map((area, index) => (
                <div key={index} className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="text-white/90 font-medium">{area}</span>
                </div>
              ))}
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-white/90 font-medium">E mais bairros...</span>
              </div>
            </div>

            {/* CTA */}
            <a href={getWhatsAppLink("Olá! Gostaria de confirmar se vocês atendem no meu bairro.")} target="_blank" rel="noopener noreferrer">
              <Button variant="cta" size="lg" className="gap-2">
                <FaWhatsapp className="w-5 h-5" />
                Confirmar atendimento no meu bairro
              </Button>
            </a>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={technicianImage}
                alt="Técnico realizando manutenção"
                className="w-full h-auto object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="font-bold text-navy">Raio de 50km</p>
                    <p className="text-sm text-muted-foreground">A partir de Belo Horizonte</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
