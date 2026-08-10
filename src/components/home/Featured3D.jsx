import { useImages } from '../../hooks/useImages';
import { ShoppingBag, ArrowRight, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useState, useEffect } from 'react';

export default function Featured3D() {
  const { images, loading } = useImages();
  const { addToCart } = useCart();
  const [hoveredCard, setHoveredCard] = useState(null);
  const featured = images.slice(0, 6);

  const handleAddToCart = (item, e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: item.public_id,
      title: item.title,
      price: item.price,
      image: item.url,
      category: item.category,
      quantity: 1
    });
    
    // Show toast
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 neon-card p-4 z-50 border-l-4 border-[#E14749] animate-slide-in-right';
    toast.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="neon-icon w-12 h-12">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <div>
          <p class="font-semibold">Added to Cart!</p>
          <p class="text-sm text-gray-400">${item.title}</p>
        </div>
      </div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  };

  if (loading) {
    return (
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {[1,2,3,4,5,6].map(n => (
            <div key={n} className="w-72 h-80 rounded-2xl bg-[#1E2A3A] animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="neon-badge mb-4 animate-pulse">COLLECTION</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-neon">
            Featured Artworks
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our hand-picked selection of original paintings
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {featured.map((item, index) => (
            <div 
              key={item.public_id} 
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animation: `floatCard ${5 + index * 0.5}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Card */}
              <Link to={`/product/${item.public_id}`} className="block">
                <div className="relative w-72 h-80 rounded-2xl neon-card overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-2xl">
                  {/* Image */}
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-montserrat font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{item.category}</p>
                    <div className="neon-price inline-flex">
                      <IndianRupee size={14} />
                      <span className="font-bold">{item.price.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button 
                    onClick={(e) => handleAddToCart(item, e)}
                    className="absolute top-4 right-4 neon-icon w-12 h-12 opacity-0 group-hover:opacity-100 transition-all transform hover:scale-110 z-20"
                  >
                    <ShoppingBag size={20} />
                  </button>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 neon-badge text-xs z-20">
                    New
                  </div>

                  {/* 3D Shadow Effect */}
                  <div 
                    className="absolute -inset-4 bg-gradient-to-r from-[#E14749]/20 to-[#6366F1]/20 rounded-3xl blur-xl -z-10 transition-opacity duration-300"
                    style={{ opacity: hoveredCard === index ? 0.5 : 0 }}
                  ></div>
                </div>
              </Link>

              {/* Floating Number */}
              <div className="absolute -top-6 -left-6 text-8xl font-bold text-white/5 pointer-events-none select-none">
                {(index + 1).toString().padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/gallery" className="neon-btn inline-flex items-center gap-2 group">
            VIEW ALL ARTWORKS
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}