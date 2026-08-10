import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918019574565?text=Hi!%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20artworks."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform z-50"
    >
      <MessageCircle size={28} />
    </a>
  );
}