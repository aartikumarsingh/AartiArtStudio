import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function About() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#E14749] pt-16 pb-10">
        <div className="container-custom text-center text-white">
          <h1 className="font-montserrat text-4xl md:text-6xl font-bold mb-4">ABOUT THE ARTIST</h1>
          <p className="font-poppins text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Aarti Kumar Singh
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-20">
        <div className="container-custom max-w-6xl px-6 md:px-10 lg:px-16">
          {/* Story + Photo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
            {/* Left: Story text with proper left margin */}
            <div className="prose prose-lg md:pl-4 lg:pl-6 order-2 md:order-1">
              <p className="font-poppins text-gray-700 leading-relaxed mb-6">
              An accomplished artist and educator, Aarti Kumar Singh began her creative journey in 2012 while living in the United States. After mastering self-taught techniques in oils and acrylics inspired by iconic masters, she returned to India to formalize her expertise. Holding a Diploma in Fine Arts alongside a Diploma in Art Teacher’s Training, Aarti has expanded her repertoire to seamlessly blend technical precision with creative expression.
              </p>
              <p className="font-poppins text-gray-700 leading-relaxed mb-6">
              In 2017, she founded AARTI ART STUDIO with a vision to bring beautiful, original artwork to collectors and art lovers worldwide. Based in Hyderabad, the studio specializes in creating soulful paintings that bridge traditional techniques and contemporary expressions. Every handcrafted piece in the collection is an original labour of love, meticulously detailed to ensure that from vibrant landscapes to serene spiritual pieces, each painting tells a unique story and breathes emotion into any space.
              </p>
            </div>

            {/* Right: Artist photo */}
            <div className="order-1 md:order-2">
              <div className="w-full aspect-[2/3] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <img
                  src="/images/artist-profile.jpeg"
                  alt="Aarti Kumar Singh, founder of Aarti Art Studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Studio Info + Hours */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-50 p-6">
              <h3 className="font-montserrat text-lg font-bold text-gray-900 mb-4">STUDIO INFO</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#E14749] shrink-0 mt-1" />
                  <p className="font-poppins text-sm text-gray-600">
                    Gulmohar Residency, <br />
                    Krishna Nagar, Beside NFC, Moula Ali,<br />
                    Hyderabad - 500040, Telangana, INDIA
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
                <p className="font-poppins text-sm text-gray-600">Monday - Saturday: 10 am - 6 pm</p>
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
      </section>
    </>
  );
}
