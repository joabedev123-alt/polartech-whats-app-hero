import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppLink } from "@/lib/constants";

export const WhatsAppFloat = () => {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-whatsapp hover:bg-whatsapp-dark rounded-full flex items-center justify-center shadow-lg whatsapp-pulse transition-colors"
      aria-label="Abrir WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8 text-white" />
    </a>
  );
};
