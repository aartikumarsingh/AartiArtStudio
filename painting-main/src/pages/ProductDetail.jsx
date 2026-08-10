import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { 
  ShoppingBag, Heart, Share2, ChevronLeft, Truck, Shield, 
  RotateCcw, MessageCircle, Minus, Plus, Package, 
  Palette, Ruler, Calendar, Info, Tag, Award
} from 'lucide-react';
import { useImages } from '../hooks/useImages';

export default function ProductDetail() {
  const { id } = useParams();
  const { images } = useImages();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    
    setTimeout(() => {
      const found = images.find(img => img.public_id === id);
      if (found) {
        setProduct(found);
      }
      setLoading(false);
    }, 300);
  }, [id, images]);

  const handleAddToCart = () => {
    if (product.isSold) return;
    
    addToCart({
      id: product.public_id,
      title: product.title,
      price: product.price,
      image: product.url,
      category: product.category,
      quantity: quantity
    });
    
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleWhatsApp = () => {
    if (product.isSold) return;
    
    const message = `Hi! I'm interested in "${product.title}" (${product.category}). Price: ₹${product.price}. SKU: ${product.sku}. Size: ${product.size}. Year: ${product.year}. Medium: ${product.medium}. Description: ${product.description}. Can you share more details?`;
    window.open(`https://wa.me/918019574565?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-white">Loading artwork...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] pt-20 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8 bg-white/10 backdrop-blur-md rounded-2xl">
          <Package size={64} className="mx-auto text-white/60 mb-4" />
          <h2 className="text-2xl font-['Poppins'] font-bold text-white mb-4">Product Not Found</h2>
          <p className="text-white/80 mb-8">The artwork you're looking for doesn't exist.</p>
          <Link to="/gallery" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#667eea] font-['Poppins'] font-medium rounded-lg hover:shadow-xl transition-all">
            <ChevronLeft size={18} />
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  // Calculate discount percentage if originalPrice exists
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] pt-20">
      <div className="w-full px-4 py-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-6 overflow-x-auto pb-2">
            <Link to="/" className="hover:text-white transition-colors whitespace-nowrap">Home</Link>
            <span className="text-white/40">/</span>
            <Link to="/gallery" className="hover:text-white transition-colors whitespace-nowrap">Gallery</Link>
            <span className="text-white/40">/</span>
            <span className="text-white truncate max-w-[200px]">{product.title}</span>
          </nav>

          {/* Main Content */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 md:p-6 lg:p-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
              
              {/* Left Column - Image - FIXED WIDTH */}
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/5">
                  <img 
                    src={product.url} 
                    alt={product.title}
                    className="w-full max-w-[500px] mx-auto h-[400px] md:h-[500px] lg:h-[550px] object-contain bg-black/20" 
                    // ✅ Fixed width: max-w-[500px] with object-contain
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isSold ? (
                      <span className="bg-red-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                        <Tag size={12} />
                        SOLD
                      </span>
                    ) : (
                      <>
                        {product.year === 2026 && (
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                            <Award size={12} />
                            New {product.year}
                          </span>
                        )}
                        {discountPercentage > 0 && (
                          <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                            <Tag size={12} />
                            {discountPercentage}% OFF
                          </span>
                        )}
                      </>
                    )}
                  </div>

                  {/* Sold Overlay */}
                  {product.isSold && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-500 text-white text-2xl font-['Poppins'] font-bold px-8 py-4 rounded-full transform -rotate-12 shadow-2xl">
                        SOLD
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="space-y-6 text-white">
                {/* Title and SKU */}
                <div>
                  <h1 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-2">
                    {product.title}
                  </h1>
                  <p className="text-white/60 text-sm">SKU: {product.sku || 'N/A'}</p>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-['Poppins'] font-bold text-yellow-300">
                      ₹{product.price?.toLocaleString('en-IN') || 'N/A'}
                    </span>
                    {product.originalPrice && !product.isSold && (
                      <span className="text-white/50 line-through text-lg">
                        ₹{product.originalPrice?.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl text-center border border-white/10">
                    <Calendar size={18} className="mx-auto text-yellow-300 mb-1" />
                    <p className="text-white/60 text-xs">Year</p>
                    <p className="font-semibold text-sm">{product.year || 'N/A'}</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl text-center border border-white/10">
                    <Ruler size={18} className="mx-auto text-yellow-300 mb-1" />
                    <p className="text-white/60 text-xs">Size</p>
                    <p className="font-semibold text-sm">{product.size || 'N/A'}</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl text-center border border-white/10">
                    <Palette size={18} className="mx-auto text-yellow-300 mb-1" />
                    <p className="text-white/60 text-xs">Medium</p>
                    <p className="font-semibold text-sm line-clamp-1">{product.medium || 'Acrylic'}</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-3 rounded-xl text-center border border-white/10">
                    <Award size={18} className="mx-auto text-yellow-300 mb-1" />
                    <p className="text-white/60 text-xs">Category</p>
                    <p className="font-semibold text-sm line-clamp-1">{product.category || 'N/A'}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10">
                  <h3 className="font-['Poppins'] font-semibold mb-2 flex items-center gap-2">
                    <Info size={18} className="text-yellow-300" />
                    Description
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {product.description || `Beautiful ${product.title} artwork created with passion and precision. This stunning piece captures the essence of ${product.category} art.`}
                  </p>
                </div>

                {/* Quantity - Hide if sold */}
                {!product.isSold && (
                  <div className="flex items-center gap-4">
                    <span className="font-['Poppins']">Quantity:</span>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-3 hover:bg-white/20 transition-colors rounded-l-lg"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-12 text-center font-['Poppins'] font-semibold">{quantity}</span>
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-3 hover:bg-white/20 transition-colors rounded-r-lg"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                {product.isSold ? (
                  <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6 text-center">
                    <Tag size={32} className="mx-auto text-red-400 mb-3" />
                    <p className="text-white font-['Poppins'] text-lg mb-2">This artwork has been sold</p>
                    <p className="text-white/70 text-sm mb-4">Check out similar artworks in our gallery</p>
                    <Link to="/gallery" className="inline-block px-6 py-3 bg-white text-[#667eea] rounded-lg hover:shadow-xl transition-all font-['Poppins']">
                      Browse Gallery
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={handleAddToCart}
                      className="flex-1 px-6 py-4 bg-white text-[#667eea] font-['Poppins'] font-medium rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ShoppingBag size={18} />
                      {addedToCart ? '✓ ADDED TO CART!' : 'ADD TO CART'}
                    </button>
                    <button 
                      onClick={handleWhatsApp}
                      className="flex-1 px-6 py-4 bg-[#25D366] text-white font-['Poppins'] font-medium rounded-xl hover:bg-[#128C7E] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={18} />
                      BUY ON WHATSAPP
                    </button>
                  </div>
                )}

                {/* Action Icons */}
                <div className="flex items-center gap-6 pt-4">
                  <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                    <Heart size={18} />
                    <span className="text-sm">Add to Wishlist</span>
                  </button>
                  <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                    <Share2 size={18} />
                    <span className="text-sm">Share</span>
                  </button>
                </div>

                {/* Shipping Info */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/20">
                  <div className="text-center">
                    <Truck size={20} className="mx-auto text-yellow-300 mb-1" />
                    <p className="text-white/80 text-xs">Shipping at your home</p>
                  </div>
                  <div className="text-center">
                    <Shield size={20} className="mx-auto text-yellow-300 mb-1" />
                    <p className="text-white/80 text-xs">Authenticity</p>
                  </div>
                  <div className="text-center">
                    <RotateCcw size={20} className="mx-auto text-yellow-300 mb-1" />
                    <p className="text-white/80 text-xs">Chat With Us Directly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {images.filter(img => img.category === product.category && img.public_id !== product.public_id).length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-['Poppins'] font-bold text-white mb-6">You May Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images
                  .filter(img => img.category === product.category && img.public_id !== product.public_id)
                  .slice(0, 4)
                  .map((item) => (
                    <Link 
                      to={`/product/${item.public_id}`} 
                      key={item.public_id}
                      className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 border border-white/20 relative"
                    >
                      <img 
                        src={item.url} 
                        alt={item.title}
                        className="w-full h-40 object-cover"
                      />
                      {item.isSold && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          Sold
                        </div>
                      )}
                      <div className="p-3">
                        <h3 className="text-white font-['Poppins'] text-sm font-semibold mb-1 truncate">
                          {item.title}
                        </h3>
                        <p className="text-yellow-300 font-bold text-sm">
                          {item.isSold ? 'Sold' : `₹${item.price?.toLocaleString('en-IN')}`}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}