import { Wrench, Search, RefreshCw, Sparkles, Building2, HeadphonesIcon, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/constants";

const services = [
  {
    icon: RefreshCw,
    title: "Manutenção preventiva",
    description: "Revisão completa para evitar problemas futuros e aumentar a vida útil do equipamento.",
  },
  {
    icon: Search,
    title: "Conserto e diagnóstico",
    description: "Identificação precisa do problema e reparo eficiente com peças de qualidade.",
  },
  {
    icon: Wrench,
    title: "Troca de componentes",
    description: "Substituição de compressores, termostatos, motores e demais peças técnicas.",
  },
  {
    icon: Sparkles,
    title: "Higienização e revisão",
    description: "Limpeza profunda e verificação completa para máximo desempenho.",
  },
  {
    icon: Building2,
    title: "Residencial e comercial",
    description: "Atendimento para casas, apartamentos, lojas, restaurantes e empresas.",
  },
  {
    icon: HeadphonesIcon,
    title: "Orientação técnica",
    description: "Tire dúvidas antes do atendimento e receba orientação especializada.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-ice">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Soluções completas em refrigeração
          </h2>
          <p className="text-muted-foreground text-lg">
            Atendimento técnico especializado para todos os tipos de equipamentos de refrigeração.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 lg:p-8 shadow-card card-hover border border-border/50"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-5">{service.description}</p>

              {/* Mini CTA */}
              <a href={getWhatsAppLink(`Olá! Tenho interesse no serviço: ${service.title}`)}>
                <Button variant="link" className="p-0 h-auto text-secondary font-semibold gap-1">
                  <MessageCircle className="w-4 h-4" />
                  Agendar
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
