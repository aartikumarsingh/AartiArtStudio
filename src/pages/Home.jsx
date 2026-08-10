import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  ShoppingBag, Truck, Shield, RotateCcw, 
  ArrowRight, TrendingUp, Award, 
  FileText, Shield as ShieldIcon, AlertCircle,
  Mail, Users, ChevronRight
} from 'lucide-react';
import { useImages } from '../hooks/useImages';
import { useCart } from '../context/CartContext';

export default function Home() {
  const { images, loading } = useImages();
  const { addToCart } = useCart();
  const [hoveredCard, setHoveredCard] = useState(null);

  // Top selling paintings (based on price)
  const topSelling = images.filter(img => 
    img.price > 2000 || img.category.includes('Spiritual') || img.category.includes('Abstract')
  ).slice(0, 4);

  const categories = [
    { name: 'Landscape', image: images[0]?.url, count: 25 },
    { name: 'Wildlife', image: images[1]?.url, count: 18 },
    { name: 'Abstract', image: images[2]?.url, count: 15 },
    { name: 'Floral', image: images[5]?.url, count: 22 }
  ];

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
    <div className="w-full min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2]">
      
      {/* Simple Hero Section */}
      <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {images[0] && (
            <img 
              src={images[0].url} 
              alt="Hero" 
              className="w-full h-full object-cover opacity-20"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-[#667eea] to-[#764ba2] opacity-90"></div>
        </div>
        
        <div className="relative w-full max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Poppins'] font-bold mb-6">
            AARTI ART STUDIO
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Hand-painted masterpieces that bring beauty and emotion to your space since 2014
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/gallery" className="px-8 py-4 bg-white text-[#667eea] font-['Poppins'] font-medium rounded-xl hover:shadow-2xl hover:scale-105 transition-all">
              EXPLORE GALLERY
              <ArrowRight className="inline ml-2" size={18} />
            </Link>
            <Link to="/contact" className="px-8 py-4 border-2 border-white text-white font-['Poppins'] font-medium rounded-xl hover:bg-white hover:text-[#667eea] transition-all">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>

      {/* Top Selling Section */}
      {topSelling.length > 0 && (
        <section className="w-full py-12 px-4">
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="text-yellow-300" size={24} />
              <h2 className="text-2xl md:text-3xl font-['Poppins'] font-bold text-white">
                Top Selling Artworks
              </h2>
              <Award className="text-yellow-300" size={24} />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {topSelling.map((item, index) => (
                <div key={item.public_id} className="group relative bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:scale-105 transition-all duration-300">
                  <Link to={`/product/${item.public_id}`}>
                    <img 
                      src={item.url} 
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
                      #{index + 1} Top Seller
                    </div>
                    <div className="p-3">
                      <h3 className="text-white font-['Poppins'] font-semibold text-sm mb-1 line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-xs mb-2">{item.category}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-yellow-300 font-bold">₹{item.price.toLocaleString('en-IN')}</span>
                        {!item.isSold && (
                          <button 
                            onClick={(e) => handleAddToCart(item, e)}
                            className="bg-white/20 hover:bg-white hover:text-[#667eea] p-2 rounded-full transition-colors"
                          >
                            <ShoppingBag size={16} />
                          </button>
                        )}
                        {item.isSold && (
                          <span className="text-red-400 text-xs font-semibold">Sold</span>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Artworks */}
      <section className="w-full py-16 px-4">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold text-white text-center mb-12">
            Featured Artworks
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.slice(0, 8).map((item, index) => (
              <div 
                key={item.public_id}
                className="group"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
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
                    
                    {/* Add to Cart Button - Hide if sold */}
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

          <div className="text-center mt-12">
            <Link to="/gallery" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#667eea] font-['Poppins'] font-medium rounded-xl hover:shadow-2xl hover:scale-105 transition-all">
              VIEW ALL ARTWORKS
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 px-4 bg-white/5 backdrop-blur-sm">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold text-white text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <Truck size={40} className="mx-auto text-yellow-300 mb-4" />
              <h3 className="font-['Poppins'] font-semibold text-xl mb-2">Before Shipping</h3>
              <p className="text-white/80">Talk to us.</p>
            </div>
            <div className="text-center text-white">
              <Shield size={40} className="mx-auto text-yellow-300 mb-4" />
              <h3 className="font-['Poppins'] font-semibold text-xl mb-2">Secure Payment</h3>
              <p className="text-white/80">100% secure transactions</p>
            </div>
            <div className="text-center text-white">
              <RotateCcw size={40} className="mx-auto text-yellow-300 mb-4" />
              <h3 className="font-['Poppins'] font-semibold text-xl mb-2">Chat With Us on Whatsapp</h3>
              <p className="text-white/80">Directly Connect with Us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-16 px-4">
        <div className="w-full max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold text-white text-center mb-12">
            Shop by Category
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <Link 
                to="/gallery"
                key={index} 
                className="group relative h-64 rounded-xl overflow-hidden"
              >
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-2xl font-['Poppins'] font-bold">{cat.name}</h3>
                    <p className="text-white/80 text-sm mt-1">{cat.count} Artworks</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="w-full py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="w-full max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get updates about new artworks and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl focus:outline-none text-gray-800"
            />
            <button className="px-8 py-4 bg-white text-purple-600 font-['Poppins'] font-medium rounded-xl hover:shadow-2xl transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Important Pages Section */}
      <section className="w-full py-16 px-4 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 backdrop-blur-sm border-y border-white/10">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-yellow-300" size={28} />
            <h2 className="text-2xl md:text-3xl font-['Poppins'] font-bold text-white">
              Important Information
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Privacy Policy */}
            <Link to="/privacy-policy" className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:scale-105 hover:border-yellow-300 transition-all">
              <ShieldIcon size={32} className="text-yellow-300 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-['Poppins'] font-semibold text-lg mb-2">Privacy Policy</h3>
              <p className="text-white/60 text-sm mb-3">How we collect and use your data, cookie information, and your privacy rights.</p>
              <span className="text-yellow-300 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More <ChevronRight size={14} />
              </span>
            </Link>

            {/* Terms & Conditions */}
            <Link to="/terms-conditions" className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:scale-105 hover:border-yellow-300 transition-all">
              <FileText size={32} className="text-yellow-300 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-['Poppins'] font-semibold text-lg mb-2">Terms & Conditions</h3>
              <p className="text-white/60 text-sm mb-3">Rules, guidelines, and legal agreements for using our website and services.</p>
              <span className="text-yellow-300 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More <ChevronRight size={14} />
              </span>
            </Link>

            {/* Disclaimer */}
            <Link to="/disclaimer" className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:scale-105 hover:border-yellow-300 transition-all">
              <AlertCircle size={32} className="text-yellow-300 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-['Poppins'] font-semibold text-lg mb-2">Disclaimer</h3>
              <p className="text-white/60 text-sm mb-3">Limitation of liability, warranty disclaimers, and important legal information.</p>
              <span className="text-yellow-300 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More <ChevronRight size={14} />
              </span>
            </Link>

            {/* About Us */}
            <Link to="/about" className="group bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:scale-105 hover:border-yellow-300 transition-all">
              <Users size={32} className="text-yellow-300 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-['Poppins'] font-semibold text-lg mb-2">About Us</h3>
              <p className="text-white/60 text-sm mb-3">Our story, mission, vision, and the artist behind AARTI ART STUDIO.</p>
              <span className="text-yellow-300 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Read More <ChevronRight size={14} />
              </span>
            </Link>
          </div>

          <div className="mt-6 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 text-white/80 hover:text-yellow-300 transition-colors">
              <Mail size={16} />
              Contact Us: aartikumarsingh555@gmail.com
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-4 bg-gray-900 text-white">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-['Poppins'] font-bold mb-4">AARTI ART STUDIO</h3>
              <p className="text-gray-400 text-sm">
                Creating beautiful artwork that brings joy and inspiration to your space since 2014.
              </p>
            </div>
            
            <div>
              <h4 className="font-['Poppins'] font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-['Poppins'] font-semibold mb-4">Legal Pages</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors">Disclaimer</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-['Poppins'] font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>📍 C-807, Mayflower grand, Nacharam - Mallapur, Hyderabad- 500076</li>
                <li>📞 +91 80195 74565</li>
                <li>✉️ aartikumarsingh555@gmail.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p className="mb-2">&copy; 2024 AARTI ART STUDIO. All rights reserved.</p>
            <div className="flex justify-center gap-6 text-xs">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms</Link>
              <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
              <Link to="/about" className="hover:text-white transition-colors">About</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}