import { Target, Eye, Heart, Star } from 'lucide-react';

export default function MissionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            OUR MISSION & VISION
          </h2>
          <div className="w-20 h-1 bg-[#E14749] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#E14749]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Target size={32} className="text-[#E14749]" />
            </div>
            <h3 className="font-montserrat text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
            <p className="font-poppins text-gray-600 text-center leading-relaxed">
              To make original art accessible to everyone by providing high-quality, 
              affordable paintings that bring beauty, emotion, and inspiration into 
              homes and spaces around the world.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-[#E14749]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Eye size={32} className="text-[#E14749]" />
            </div>
            <h3 className="font-montserrat text-2xl font-bold text-gray-900 mb-4 text-center">Our Vision</h3>
            <p className="font-poppins text-gray-600 text-center leading-relaxed">
              To become the most trusted destination for art lovers worldwide, 
              creating a global community where artists and collectors connect 
              through the universal language of creativity.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <Heart size={32} className="text-[#E14749] mx-auto mb-4" />
            <h4 className="font-montserrat font-semibold text-gray-900 mb-2">Passion</h4>
            <p className="font-poppins text-sm text-gray-500">Every artwork is created with love and dedication</p>
          </div>
          <div className="text-center p-6">
            <Star size={32} className="text-[#E14749] mx-auto mb-4" />
            <h4 className="font-montserrat font-semibold text-gray-900 mb-2">Quality</h4>
            <p className="font-poppins text-sm text-gray-500">Premium materials and attention to detail</p>
          </div>
          <div className="text-center p-6">
            <Target size={32} className="text-[#E14749] mx-auto mb-4" />
            <h4 className="font-montserrat font-semibold text-gray-900 mb-2">Authenticity</h4>
            <p className="font-poppins text-sm text-gray-500">100% original artwork, signed by artist</p>
          </div>
        </div>
      </div>
    </section>
  );
}