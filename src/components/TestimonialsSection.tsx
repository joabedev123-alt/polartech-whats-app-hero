import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    location: "Pampulha, BH",
    rating: 5,
    text: "Atendimento excelente! Técnico pontual e resolveu o problema da minha geladeira no mesmo dia.",
  },
  {
    name: "Ana Paula",
    location: "Contagem",
    rating: 5,
    text: "Comunicação muito clara pelo WhatsApp. Explicaram tudo antes de começar o serviço.",
  },
  {
    name: "Roberto Silva",
    location: "Betim",
    rating: 5,
    text: "Profissional muito competente. Fez a manutenção preventiva e deu várias dicas úteis.",
  },
  {
    name: "Marina Costa",
    location: "Nova Lima",
    rating: 5,
    text: "Rápidos no agendamento e no atendimento. Preço justo e trabalho bem feito.",
  },
  {
    name: "Fernando Lima",
    location: "Venda Nova",
    rating: 5,
    text: "Ótima experiência! O técnico foi muito educado e o serviço ficou perfeito.",
  },
  {
    name: "Lucia Fernandes",
    location: "Centro, BH",
    rating: 5,
    text: "Recomendo demais! Consertaram meu freezer que outros técnicos não conseguiram.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-ice">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3 block">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-muted-foreground text-sm mb-12 italic">
          Depoimentos ilustrativos — substitua pelos seus reais quando tiver.
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-card-hover transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
