import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Vocês atendem meu bairro?",
    answer:
      "Atendemos Belo Horizonte e toda a região metropolitana em um raio de até 50km, incluindo Contagem, Betim, Nova Lima, Venda Nova, Pampulha e muitos outros bairros. Entre em contato pelo WhatsApp para confirmar!",
  },
  {
    question: "Quanto custa a visita/diagnóstico?",
    answer:
      "O valor da visita técnica varia de acordo com a região. Entre em contato pelo WhatsApp para informar seu endereço e receber o valor exato. Fazemos orçamento transparente antes de iniciar qualquer serviço.",
  },
  {
    question: "Fazem manutenção preventiva?",
    answer:
      "Sim! Realizamos manutenção preventiva completa para evitar problemas futuros, aumentar a vida útil do equipamento e garantir melhor desempenho. É recomendado fazer a cada 6 a 12 meses.",
  },
  {
    question: "Em quanto tempo conseguem agendar?",
    answer:
      "Trabalhamos para atender o mais rápido possível. Dependendo da disponibilidade, podemos agendar para o mesmo dia ou próximos dias. Consulte nossa agenda pelo WhatsApp!",
  },
  {
    question: "Atendem residência e comércio?",
    answer:
      "Sim, atendemos tanto residências (casas e apartamentos) quanto estabelecimentos comerciais (lojas, restaurantes, mercados, etc). Trabalhamos com diversos tipos de equipamentos de refrigeração.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "Aceitamos diversas formas de pagamento: dinheiro, PIX, cartões de débito e crédito. O pagamento é realizado após a conclusão do serviço. Informamos todos os valores antes de iniciar.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas e Respostas
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas principais dúvidas sobre nossos serviços.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-secondary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
