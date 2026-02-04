import { MessageCircle, FileText, Calendar, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: 1,
    title: "Você chama no WhatsApp",
    description: "Clique no botão e inicie a conversa diretamente conosco.",
  },
  {
    icon: FileText,
    step: 2,
    title: "Explica o problema",
    description: "Descreva rapidamente o que está acontecendo com seu equipamento.",
  },
  {
    icon: Calendar,
    step: 3,
    title: "Agendamos o horário",
    description: "Definimos a melhor data e hora para o atendimento.",
  },
  {
    icon: CheckCircle,
    step: 4,
    title: "Atendimento + solução",
    description: "Técnico realiza o diagnóstico e resolve o problema.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-12 md:py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simples e rápido em 4 passos
          </h2>
          <p className="text-muted-foreground text-lg">
            Do primeiro contato à solução do seu problema, tudo pelo WhatsApp.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop connector line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-gold to-secondary -translate-y-1/2 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Step number circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-navy flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="w-8 h-8 text-gold" />
                  {/* Step badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-navy font-bold text-sm shadow-md">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
