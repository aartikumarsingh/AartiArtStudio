import { useImages } from '../hooks/useImages';
import { ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useSearchParams, Link } from 'react-router-dom';

export default function Gallery() {
  const { images, loading } = useImages();
  const { addToCart } = useCart();
  const [searchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categoryFromUrl = searchParams.get('category');
  
  // Get unique categories
  const categories = ['all', ...new Set(images.map(img => img.category))];
  
  useEffect(() => {
    if (categoryFromUrl) {
      setActiveFilter(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const filtered = activeFilter === 'all' 
    ? images 
    : images.filter(img => img.category === activeFilter);

  const handleAddToCart = (item, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (item.isSold) return;
    addToCart({
      id: item.public_id,
      title: item.title,
      price: item.price,
      image: item.url,
      category: item.category,
      quantity: 1
    });
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] pt-20">
        <div className="w-full px-4 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[1,2,3,4,5,6,7,8].map(n => (
              <div key={n} className="bg-white/10 backdrop-blur-sm h-80 rounded-xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] pt-20">
      <div className="w-full px-4 py-8">
        {/* Header */}
        <div className="w-full max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-['Poppins'] font-bold text-white mb-4">
            Art Gallery
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Explore our collection of {images.length} original artworks
          </p>
        </div>

        {/* Filters */}
        <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-['Poppins'] font-medium transition-all ${
                activeFilter === cat
                  ? 'bg-white text-[#667eea] shadow-lg'
                  : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <div key={item.public_id} className="group">
                <Link to={`/product/${item.public_id}`}>
                  <div className="relative bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:scale-105 transition-all duration-300">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {item.isSold && (
                        <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                          Sold
                        </span>
                      )}
                      {item.year === 2026 && !item.isSold && (
                        <span className="bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-full">
                          New
                        </span>
                      )}
                    </div>
                    
                    {/* Add to Cart Button */}
                    {!item.isSold && (
                      <button 
                        onClick={(e) => handleAddToCart(item, e)}
                        className="absolute bottom-3 right-3 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-[#667eea]"
                      >
                        <ShoppingBag size={18} />
                      </button>
                    )}
                  </div>
                </Link>
                
                <div className="mt-3 text-white">
                  <Link to={`/product/${item.public_id}`}>
                    <h3 className="font-['Poppins'] font-semibold hover:text-yellow-300 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                  </Link>
                  <p className="text-white/60 text-sm">{item.category}</p>
                  {item.isSold ? (
                    <span className="text-red-400 font-semibold">Sold</span>
                  ) : (
                    <span className="font-bold text-yellow-300">₹{item.price.toLocaleString('en-IN')}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}