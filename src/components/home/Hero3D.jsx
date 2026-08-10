import { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, Sparkles, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../api/cloudinary';

export default function Hero3D() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroImages = IMAGES.slice(0, 5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#1A2332] to-[#0B1120]"></div>
        
        {/* Floating 3D Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(225,71,73,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(225,71,73,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `perspective(500px) rotateX(60deg) translateZ(${mousePosition.x}px)`,
          animation: 'floatGrid 20s linear infinite'
        }}></div>

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#E14749] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatParticle ${5 + Math.random() * 10}s linear infinite`,
              opacity: 0.3,
              transform: `translateZ(${Math.random() * 100}px)`
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative container-custom min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white animate-fade-in-up">
            <div className="neon-badge mb-6 animate-float">
              <Sparkles size={16} className="inline mr-2" />
              AARTI ART STUDIO
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-neon">
              Discover the
              <br />Art of Expression
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-lg">
              Original paintings that bring beauty, emotion, and depth to your space. Each piece tells a unique story.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/gallery" className="neon-btn group">
                EXPLORE COLLECTION
                <ArrowRight size={18} className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="neon-btn" style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
                <MessageCircle size={18} className="inline mr-2" />
                CHAT ON WHATSAPP
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E14749]">{IMAGES.length}+</div>
                <div className="text-sm text-gray-400">Artworks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E14749]">15+</div>
                <div className="text-sm text-gray-400">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E14749]">10+</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
            </div>
          </div>

          {/* Right Content - Animated Paintings */}
          <div className="relative h-[500px] hidden lg:block preserve-3d">
            {heroImages.map((img, index) => {
              const delay = index * 0.2;
              const zIndex = heroImages.length - index;
              const scale = 1 - index * 0.1;
              const yOffset = index * 30;
              
              return (
                <div
                  key={img.public_id}
                  className="absolute inset-0 transition-all duration-1000"
                  style={{
                    transform: `
                      translateZ(${index === currentSlide ? 100 : 0}px)
                      rotateY(${mousePosition.x}deg)
                      rotateX(${mousePosition.y}deg)
                      scale(${index === currentSlide ? 1.1 : 0.8})
                      translateY(${index === currentSlide ? 0 : yOffset}px)
                    `,
                    opacity: index === currentSlide ? 1 : 0.3,
                    zIndex: index === currentSlide ? 10 : zIndex,
                    transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <div className="neon-card w-full h-full overflow-hidden">
                    <img
                      src={img.url}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Glowing Border */}
                    <div className="absolute inset-0 border-4 border-[#E14749] opacity-0 hover:opacity-100 transition-opacity"></div>
                    
                    {/* Index Badge */}
                    <div className="absolute bottom-4 left-4 neon-badge text-xs">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="neon-icon w-10 h-10 animate-bounce cursor-pointer">
          <ChevronRight size={20} className="transform rotate-90" />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-8 bg-[#E14749]' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}