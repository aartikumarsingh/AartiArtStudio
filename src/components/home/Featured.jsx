import { useImages } from '../../hooks/useImages';
import { ShoppingBag, IndianRupee } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function Featured() {
  const { images, loading } = useImages();
  const { addToCart } = useCart();
  const featured = images.slice(0, 8);

  const handleAddToCart = (item, e) => {
    e.stopPropagation();
    addToCart({
      id: item.public_id,
      title: item.title,
      price: item.price,
      image: item.url,
      category: item.category
    });
  };

  if (loading) {
    return (
      <div className="container-custom py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4,5,6,7,8].map(n => (
            <div key={n} className="bg-gray-100 animate-pulse h-80 rounded-xl"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Artworks
          </h2>
          <p className="font-poppins text-gray-500 max-w-2xl mx-auto">
            Hand-picked selections from our collection
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featured.map((item) => (
            <div key={item.public_id} className="group">
              <Link to={`/product/${item.public_id}`}>
                <div className="relative overflow-hidden bg-gray-100 mb-3 rounded-xl aspect-square">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(item, e);
                    }}
                    className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md hover:bg-[#E14749] hover:text-white hover:scale-110"
                  >
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </Link>
              <Link to={`/product/${item.public_id}`}>
                <h3 className="font-montserrat text-sm font-semibold text-gray-900 mb-1 hover:text-[#E14749] transition-colors">
                  {item.title}
                </h3>
              </Link>
              <p className="font-poppins text-xs text-gray-500 mb-2">{item.category}</p>
              <div className="flex items-center gap-1">
                <IndianRupee size={14} className="text-[#E14749]" />
                <p className="font-montserrat text-sm font-bold text-[#E14749]">
                  {item.price.toLocaleString('en-IN')}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/gallery"
            className="inline-block px-8 py-3 border-2 border-[#E14749] text-[#E14749] font-montserrat text-sm font-semibold rounded-full hover:bg-[#E14749] hover:text-white transition-all hover:scale-105"
          >
            VIEW ALL ARTWORKS
          </Link>
        </div>
      </div>
    </section>
  );
}