// WhatsApp link configuration for Polartech Refrigerações
export const WHATSAPP_CONFIG = {
  // Replace with actual number in E.164 format (no + sign)
  numberE164: "{{WHATSAPP_NUMBER_E164}}",
  // Display format
  numberDisplay: "{{WHATSAPP_NUMBER_DISPLAY}}",
  // Default message
  defaultMessage: "Olá! Quero agendar um atendimento de refrigeração com a Polartech.",
};

export const getWhatsAppLink = (customMessage?: string) => {
  const message = encodeURIComponent(customMessage || WHATSAPP_CONFIG.defaultMessage);
  return `https://wa.me/${WHATSAPP_CONFIG.numberE164}?text=${message}`;
};

export const BUSINESS_INFO = {
  name: "Polartech Refrigerações",
  slogan: "Conserto e manutenção de refrigeração com atendimento rápido na região de BH.",
  description: "Diagnóstico técnico, orientação clara e agendamento direto pelo WhatsApp.",
  region: "Belo Horizonte e região (até 50km)",
  areas: ["Belo Horizonte", "Contagem", "Betim", "Nova Lima", "Venda Nova", "Pampulha"],
  hours: "Segunda a Sábado",
};
