import { BUSINESS_INFO } from "@/lib/constants";
import logoImage from "@/assets/logo-polartech.png";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#area", label: "Área" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export const Footer = () => {
  return (
    <footer className="bg-navy-dark py-12 lg:py-16">
      <div className="container">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img
              src={logoImage}
              alt="Polartech Refrigerações"
              className="h-16 mb-4"
            />
            <p className="text-white/70 max-w-sm">
              Serviço técnico especializado em manutenção e conserto de refrigeração. Atendimento em Belo Horizonte e região metropolitana (até 50km).
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Atendimento</h4>
            <div className="space-y-2 text-white/70">
              <p>{BUSINESS_INFO.hours}</p>
              <p>{BUSINESS_INFO.region}</p>
              <p className="text-gold font-semibold">Agendamento via WhatsApp</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Legal */}
            <p className="text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {BUSINESS_INFO.name}. Serviço técnico especializado em refrigeração.
            </p>

            {/* Credits */}
            <p className="text-white/50 text-sm">
              Produzida com 💚 por Camaly
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
