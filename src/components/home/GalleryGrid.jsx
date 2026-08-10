import { useImages } from '../../hooks/useImages';
import { MessageCircle, Eye } from 'lucide-react';
import { useState } from 'react';

export default function GalleryGrid() {
  const { images, loading } = useImages();
  const [hoveredId, setHoveredId] = useState(null);
  const displayImages = images.slice(0, 8);

  const handleWhatsApp = (image) => {
    const message = `Hi! I'm interested in the artwork "${image.title}". Can you share more details?`;
    window.open(`https://wa.me/919027352937?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (loading) {
    return (
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1,2,3,4,5,6,7,8].map(n => (
            <div key={n} className="bg-gray-200 animate-pulse h-80 rounded-xl"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#FDF8F2]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#E14749] font-montserrat text-sm tracking-[0.3em] uppercase">
            COLLECTION
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl text-gray-900 mt-4 mb-6">
            Featured <span className="text-[#E14749]">Artworks</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E14749] to-orange-400 mx-auto"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayImages.map((image, index) => (
            <div
              key={image.public_id}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(image.public_id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${
                hoveredId === image.public_id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-playfair text-white text-xl mb-2">{image.title}</h3>
                  <p className="font-poppins text-white/80 text-sm mb-4">{image.category}</p>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => window.location.href = `/gallery?img=${image.public_id}`}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-[#E14749] transition-colors"
                    >
                      <Eye size={18} />
                    </button>
                    <button 
                      onClick={() => handleWhatsApp(image)}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-[#25D366] transition-colors"
                    >
                      <MessageCircle size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Index Number */}
              <div className="absolute top-4 left-4 text-7xl font-playfair font-bold text-white/20">
                {(index + 1).toString().padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => window.location.href = '/gallery'}
            className="group relative px-8 py-4 bg-transparent text-[#E14749] font-montserrat text-sm tracking-wider overflow-hidden rounded-lg border-2 border-[#E14749] hover:text-white transition-colors duration-300"
          >
            <span className="relative z-10">VIEW ALL ARTWORKS</span>
            <div className="absolute inset-0 bg-[#E14749] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </div>
      </div>
    </section>
  );
}