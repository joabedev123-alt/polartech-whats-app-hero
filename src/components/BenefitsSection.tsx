import { Clock, MessageSquare, Wrench, Target } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Agilidade no agendamento",
    description: "Resposta rápida e horários flexíveis para atender sua necessidade.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação clara e direta",
    description: "Explicamos cada etapa do serviço de forma simples e transparente.",
  },
  {
    icon: Wrench,
    title: "Serviço técnico e organizado",
    description: "Profissionalismo em cada atendimento, do diagnóstico à solução.",
  },
  {
    icon: Target,
    title: "Atendimento focado em resolver",
    description: "Nosso objetivo é solucionar seu problema de forma eficiente.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Por que escolher a Polartech
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Diferenciais do nosso atendimento
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-navy/5 to-navy/10 rounded-xl p-6 lg:p-8 border border-navy/10 hover:border-secondary/30 transition-all group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-gold" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
