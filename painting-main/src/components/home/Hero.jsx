import { ArrowRight, MessageCircle } from 'lucide-react';
import { IMAGES } from '../../api/cloudinary';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = IMAGES.slice(0, 4);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/918019574565?text=Hi!%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20artworks.', '_blank');
  };

  return (
    <div className="relative h-screen max-h-[900px] min-h-[700px] w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.public_id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.url}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl text-white">
            <div className="inline-block px-4 py-2 bg-[#E14749] rounded-full mb-6">
              <span className="font-montserrat text-sm">AARTI ART STUDIO</span>
            </div>
            
            <h1 className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Original <span className="text-[#E14749]">Artworks</span>
              <br />For Every Space
            </h1>
            
            <p className="font-poppins text-lg md:text-xl text-white/90 mb-8 max-w-lg">
              Discover hand-painted masterpieces that bring beauty and emotion to your home or office.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/gallery"
                className="px-8 py-4 bg-[#E14749] text-white font-montserrat text-sm font-semibold rounded-lg hover:bg-[#C13535] transition-all hover:scale-105 flex items-center justify-center gap-2 group"
              >
                EXPLORE GALLERY
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button 
                onClick={handleWhatsApp}
                className="px-8 py-4 bg-white text-gray-900 font-montserrat text-sm font-semibold rounded-lg hover:bg-gray-100 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                CHAT ON WHATSAPP
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/20">
              <div>
                <div className="font-montserrat text-2xl font-bold">{IMAGES.length}+</div>
                <div className="font-poppins text-sm text-white/70">Artworks</div>
              </div>
              <div>
                <div className="font-montserrat text-2xl font-bold">15+</div>
                <div className="font-poppins text-sm text-white/70">Categories</div>
              </div>
              <div>
                <div className="font-montserrat text-2xl font-bold">10+</div>
                <div className="font-poppins text-sm text-white/70">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-[#E14749]' : 'w-2 bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
}