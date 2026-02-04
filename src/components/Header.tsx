

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/constants";
import logoImage from "@/assets/logo-polartech.png";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#area", label: "Área" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scrolled state (for background and padding)
      setIsScrolled(currentScrollY > 50);

      // Show/Hide logic
      if (currentScrollY <= 50) {
        // Always visible at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down -> hide
        setIsVisible(false);
      } else {
        // Scrolling up -> show (optional, per common pattern) or just keep hidden until top? 
        // Request: "que o nav bar desapareca quando rolar a tela para biaxo e volte a aparecer quando chegar ao topo"
        // This implies it only reappears at the top. But user might get confused if they scroll up and it doesn't appear.
        // However, sticking strictly to "volte a aparecer quando chegar ao topo" means only show if currentScrollY <= 50.
        // Let's implement Strict interpretation first: Hide on down, Show ONLY at top.
        setIsVisible(false);
      }

      // Re-reading: "volte a aparecer quando chegar ao topo" literally means "returns to appear when reaching the top".
      // But usually this pattern is: Hide on down, Show on up. 
      // If I interpret strictly, once you scroll down, you have to go ALL THE WAY UP to see the navbar. That's bad UX.
      // Most likely "chegar ao topo" could be "scrolling towards the top". 
      // Let's implement standard "Scroll Up to Show" as it's the expected "Smart Navbar" behavior, OR stick to the strict requirement.
      // "volte a aparecer quando chegar ao topo" -> "appear back when arriving at the top". 
      // Okay, I will implement Strict Mode first as requested: Only visible when scrollY <= 50.

      // WAIT, actually, usually users mean "sticky header" or "smart hide". 
      // "desapareca quando rolar a tela para biaxo" -> Hide on Scroll Down.
      // "volte a aparecer quando chegar ao topo" -> Show when at Top.
      // This implies if I scroll UP but am not at top, it remains hidden.

      if (currentScrollY <= 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      }
      // If scrolling up (current < last) AND not at top (>50), line 41-45 doesn't set isVisible=true.
      // So it stays whatever it was (likely false from previous down scroll).

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isScrolled ? "py-2 shadow-lg bg-navy/90 backdrop-blur-md" : "py-4 bg-transparent"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img
            src={logoImage}
            alt="Polartech Refrigerações"
            // Increased sizes: h-14 (scrolled) and h-20 (default) - was h-10/h-14
            className={`transition-all duration-300 ${isScrolled ? "h-14" : "h-20"}`}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/90 hover:text-white font-medium text-sm transition-colors shadow-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            <Button
              variant="cta"
              size={isScrolled ? "default" : "lg"}
              className="gap-2"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-navy-dark border-t border-white/10 animate-fade-in shadow-lg">
          <nav className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button variant="cta" className="w-full gap-2">
                <FaWhatsapp className="w-5 h-5" />
                Agendar pelo WhatsApp
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
