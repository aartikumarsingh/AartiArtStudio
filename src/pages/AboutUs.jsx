import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function About() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#E14749] pt-32 pb-20">
        <div className="container-custom text-center text-white">
          <h1 className="font-montserrat text-4xl md:text-6xl font-bold mb-4">ABOUT US</h1>
          <p className="font-poppins text-lg text-white/90 max-w-2xl mx-auto">
            Our story of passion and creativity
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-20">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <p className="font-poppins text-gray-700 leading-relaxed mb-6">
              AARTI ART STUDIO was founded in 2014 by Aarti Kumar Singh, a passionate artist 
              with a vision to bring beautiful, original artwork to collectors and art lovers. 
              Based in Hyderabad, our studio specializes in creating soulful paintings that 
              blend traditional techniques with contemporary expressions.
            </p>
            
            <p className="font-poppins text-gray-700 leading-relaxed mb-6">
              Each artwork in our collection is original, handcrafted with care and attention 
              to detail. From vibrant landscapes to spiritual pieces, every painting tells a 
              unique story and brings emotion to any space.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-gray-50 p-6">
                <h3 className="font-montserrat text-lg font-bold text-gray-900 mb-4">STUDIO INFO</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-[#E14749] shrink-0 mt-1" />
                    <p className="font-poppins text-sm text-gray-600">
                      C-807, Mayflower Grand<br />
                      Nacharam - Mallapur,<br />
                      Hyderabad - 500076
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-[#E14749] shrink-0" />
                    <p className="font-poppins text-sm text-gray-600">+91 80195 74565</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-[#E14749] shrink-0" />
                    <p className="font-poppins text-sm text-gray-600">aartikumarsingh555@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6">
                <h3 className="font-montserrat text-lg font-bold text-gray-900 mb-4">HOURS</h3>
                <div className="space-y-2">
                  <p className="font-poppins text-sm text-gray-600">Monday - Saturday: 10AM - 7PM</p>
                  <p className="font-poppins text-sm text-gray-600">Sunday: Closed</p>
                </div>
                <a
                  href="https://wa.me/918019574565"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-[#25D366] text-white font-montserrat text-sm font-semibold hover:bg-[#128C7E] transition-colors"
                >
                  <MessageCircle size={18} />
                  CHAT ON WHATSAPP
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}