import { Clock, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink, WHATSAPP_CONFIG, BUSINESS_INFO } from "@/lib/constants";

const contactCards = [
  {
    icon: Clock,
    title: "Horário de Atendimento",
    info: BUSINESS_INFO.hours,
    subinfo: "Agendamento pelo WhatsApp",
  },
  {
    icon: MapPin,
    title: "Região",
    info: "BH + 50km",
    subinfo: "Região metropolitana",
  },
  {
    icon: Phone,
    title: "Contato",
    info: WHATSAPP_CONFIG.numberDisplay,
    subinfo: "WhatsApp",
  },
];

export const ContactSection = () => {
  return (
    <section id="contato" className="py-12 md:py-20 lg:py-28 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 frost-overlay opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Main CTA */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quer agendar agora?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Clique abaixo e fale direto no WhatsApp. Atendimento rápido e descomplicado.
          </p>

          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="xl" className="gap-3 text-lg px-10">
              <FaWhatsapp className="w-6 h-6" />
              Falar com o técnico agora
            </Button>
          </a>

          <p className="mt-4 text-white/60 text-sm">
            WhatsApp: {WHATSAPP_CONFIG.numberDisplay}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                <card.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-semibold text-white mb-1">{card.title}</h3>
              <p className="text-gold font-bold text-lg">{card.info}</p>
              <p className="text-white/60 text-sm">{card.subinfo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
