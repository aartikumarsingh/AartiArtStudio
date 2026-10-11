import { useParams, Link } from 'react-router-dom';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import {
  ShoppingBag, Heart, Share2, ChevronLeft, ChevronRight, Truck, Shield,
  RotateCcw, MessageCircle, Minus, Plus, Package,
  Palette, Ruler, Calendar, Info, Tag, Award, X, ZoomIn
} from 'lucide-react';
import { useImages } from '../hooks/useImages';

// Splits a description into separate lines: the intro sentence first, then each
// "✅ ..." point on its own line. A stray <br> typed into the data also counts as a break.
const splitDescription = (text) =>
  (text || '')
    .split(/\s*<br\s*\/?>\s*|\s+(?=✅)/i)
    .map((line) => line.trim())
    .filter(Boolean);

// "You May Also Like" slider: a swipeable row of artworks (4 across on larger screens,
// 2 on phones). The arrow buttons move one screenful at a time and grey out at either end.
function RelatedSlider({ items }) {
  const scrollerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  // measured before the first paint so the arrows never flash in the wrong state
  useLayoutEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, [items]);

  const scrollByPage = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    // one screenful plus the 16px gap, so the next card lines up at the left edge
    el.scrollBy({ left: direction * (el.clientWidth + 16), behavior: 'smooth' });
  };

  const arrowClass = (enabled) =>
    `w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition-colors ${
      enabled ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-gray-300 cursor-not-allowed'
    }`;

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-['Poppins'] font-bold text-black">You May Also Like</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scrollByPage(-1)}
            disabled={!canScrollLeft}
            aria-label="Previous artworks"
            className={arrowClass(canScrollLeft)}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scrollByPage(1)}
            disabled={!canScrollRight}
            aria-label="Next artworks"
            className={arrowClass(canScrollRight)}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onScroll={updateArrows}
        style={{ scrollbarWidth: 'none' }}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <Link
            to={`/product/${item.public_id}`}
            key={item.public_id}
            className="flex-none snap-start w-[calc(50%_-_0.5rem)] md:w-[calc(25%_-_0.75rem)] bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-black hover:shadow-lg transition-all duration-300 relative"
          >
            <img
              src={item.url}
              alt={item.title}
              loading="lazy"
              className="w-full aspect-[3/4] object-contain bg-black"
            />
            {item.isSold && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                Sold
              </div>
            )}
            <div className="p-3">
              <h3 className="text-black font-['Poppins'] text-sm font-semibold mb-1 truncate">
                {item.title}
              </h3>
              <p className="text-black font-bold text-sm">
                {item.isSold ? 'Sold' : `₹${item.price?.toLocaleString('en-IN')}`}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function ProductDetail() {
  const { id } = useParams();
  const { images } = useImages();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setCurrentImageIndex(0);
    setIsLightboxOpen(false);
    setTimeout(() => {
      const found = images.find(img => img.public_id === id);
      if (found) {
        setProduct(found);
      }
      setLoading(false);
    }, 300);
  }, [id, images]);

  // While the large-image viewer is open: Esc closes it, left/right arrow keys flip
  // through the photos, and the page behind it is locked so it doesn't scroll.
  useEffect(() => {
    if (!isLightboxOpen) return;
    const count = product?.images?.length > 0 ? product.images.length : 1;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
      else if (e.key === 'ArrowLeft') setCurrentImageIndex((prev) => (prev === 0 ? count - 1 : prev - 1));
      else if (e.key === 'ArrowRight') setCurrentImageIndex((prev) => (prev === count - 1 ? 0 : prev + 1));
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isLightboxOpen, product]);

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
    const message = `Hi! I'm interested in "${product.title}" (${product.category}). Price: ₹${product.price}. SKU: ${product.sku}. Size: ${product.size}. Year: ${product.year}. Medium: ${product.medium}. Description: ${splitDescription(product.description).join(' ')}. Can you share more details?`;
    window.open(`https://wa.me/918019574565?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-black">Loading artwork...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="w-full min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8 bg-gray-50 border border-gray-200 rounded-2xl">
          <Package size={64} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-['Poppins'] font-bold text-black mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-8">The artwork you're looking for doesn't exist.</p>
          <Link to="/gallery" className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-['Poppins'] font-medium rounded-lg hover:shadow-xl transition-all">
            <ChevronLeft size={18} />
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  // Support a product.images array; fall back to the single product.url
  // so existing products with only one photo keep working unchanged.
  const productImages = (product?.images && product.images.length > 0)
    ? product.images
    : (product?.url ? [product.url] : []);

  const descriptionLines = splitDescription(product.description);

  const goToPrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

  // Calculate discount percentage if originalPrice exists
  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="w-full min-h-screen bg-white pt-20">
      <div className="w-full px-4 py-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6 overflow-x-auto pb-2">
            <Link to="/" className="hover:text-black transition-colors whitespace-nowrap">Home</Link>
            <span className="text-gray-300">/</span>
            <Link to="/gallery" className="hover:text-black transition-colors whitespace-nowrap">Gallery</Link>
            <span className="text-gray-300">/</span>
            <span className="text-black truncate max-w-[200px]">{product.title}</span>
          </nav>

          {/* Main Content */}
          <div className="bg-gray-50 border border-gray-200 rounded-3xl p-4 md:p-6 lg:p-8">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
              {/* Left Column - Image - FIXED WIDTH */}
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200">
                  <img
                    src={productImages[currentImageIndex]}
                    alt={`${product.title} - image ${currentImageIndex + 1}`}
                    onClick={() => setIsLightboxOpen(true)}
                    className="w-full max-w-[500px] mx-auto h-[400px] md:h-[500px] lg:h-[550px] object-contain bg-gray-100 cursor-zoom-in"
                  />

                  {/* View larger */}
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    aria-label="View larger image"
                    className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 hover:bg-black hover:text-white text-black rounded-full flex items-center justify-center shadow-md transition-colors"
                  >
                    <ZoomIn size={18} />
                  </button>

                  {/* Prev/Next arrows - only shown when there is more than one image */}
                  {productImages.length > 1 && (
                    <>
                      <button
                        onClick={goToPrevImage}
                        aria-label="Previous image"
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-black hover:text-white text-black rounded-full flex items-center justify-center shadow-md transition-colors"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={goToNextImage}
                        aria-label="Next image"
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-black hover:text-white text-black rounded-full flex items-center justify-center shadow-md transition-colors"
                      >
                        <ChevronRight size={20} />
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                        {currentImageIndex + 1} / {productImages.length}
                      </div>
                    </>
                  )}

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
                          <span className="bg-amber-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
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
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center pointer-events-none">
                      <span className="bg-red-500 text-white text-2xl font-['Poppins'] font-bold px-8 py-4 rounded-full transform -rotate-12 shadow-2xl">
                        SOLD
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Details */}
              <div className="space-y-6 text-black">
                {/* Title and SKU */}
                <div>
                  <h1 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-2">
                    {product.title}
                  </h1>
                  <p className="text-gray-500 text-sm">SKU: {product.sku || 'N/A'}</p>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-4xl font-['Poppins'] font-bold text-black">
                      ₹{product.price?.toLocaleString('en-IN') || 'N/A'}
                    </span>
                    {product.originalPrice && !product.isSold && (
                      <span className="text-gray-400 line-through text-lg">
                        ₹{product.originalPrice?.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-white p-3 rounded-xl text-center border border-gray-200">
                    <Calendar size={18} className="mx-auto text-black mb-1" />
                    <p className="text-gray-500 text-xs">Year</p>
                    <p className="font-semibold text-sm">{product.year || 'N/A'}</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl text-center border border-gray-200">
                    <Ruler size={18} className="mx-auto text-black mb-1" />
                    <p className="text-gray-500 text-xs">Size</p>
                    <p className="font-semibold text-sm">{product.size || 'N/A'}</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl text-center border border-gray-200">
                    <Palette size={18} className="mx-auto text-black mb-1" />
                    <p className="text-gray-500 text-xs">Medium</p>
                    <p className="font-semibold text-sm line-clamp-1">{product.medium || 'Acrylic'}</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl text-center border border-gray-200">
                    <Award size={18} className="mx-auto text-black mb-1" />
                    <p className="text-gray-500 text-xs">Category</p>
                    <p className="font-semibold text-sm line-clamp-1">{product.category || 'N/A'}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-white p-5 rounded-xl border border-gray-200">
                  <h3 className="font-['Poppins'] font-semibold mb-2 flex items-center gap-2">
                    <Info size={18} className="text-black" />
                    Description
                  </h3>
                  <div className="text-gray-700 leading-relaxed space-y-2">
                    {descriptionLines.length > 0 ? (
                      descriptionLines.map((line, index) => (
                        <p key={index}>{line}</p>
                      ))
                    ) : (
                      <p>
                        {`Beautiful ${product.title} artwork created with passion and precision. This stunning piece captures the essence of ${product.category} art.`}
                      </p>
                    )}
                  </div>
                </div>

                {/* Quantity - Hide if sold */}
                {!product.isSold && (
                  <div className="flex items-center gap-4">
                    <span className="font-['Poppins']">Quantity:</span>
                    <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-3 hover:bg-gray-100 transition-colors rounded-l-lg"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-12 text-center font-['Poppins'] font-semibold">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="p-3 hover:bg-gray-100 transition-colors rounded-r-lg"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                {product.isSold ? (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                    <Tag size={32} className="mx-auto text-red-500 mb-3" />
                    <p className="text-black font-['Poppins'] text-lg mb-2">This artwork has been sold</p>
                    <p className="text-gray-600 text-sm mb-4">Check out similar artworks in our gallery</p>
                    <Link to="/gallery" className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:shadow-xl transition-all font-['Poppins']">
                      Browse Gallery
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 px-6 py-4 bg-black text-white font-['Poppins'] font-medium rounded-xl hover:bg-gray-800 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
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
                  <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                    <Heart size={18} />
                    <span className="text-sm">Add to Wishlist</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                    <Share2 size={18} />
                    <span className="text-sm">Share</span>
                  </button>
                </div>

                {/* Shipping Info */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <Truck size={20} className="mx-auto text-black mb-1" />
                    <p className="text-gray-600 text-xs">Shipping at your home</p>
                  </div>
                  <div className="text-center">
                    <Shield size={20} className="mx-auto text-black mb-1" />
                    <p className="text-gray-600 text-xs">Authenticity</p>
                  </div>
                  <div className="text-center">
                    <RotateCcw size={20} className="mx-auto text-black mb-1" />
                    <p className="text-gray-600 text-xs">Chat With Us Directly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {(() => {
            const related = images.filter(
              (img) => img.category === product.category && img.public_id !== product.public_id
            );
            return related.length > 0 ? (
              <RelatedSlider key={product.public_id} items={related} />
            ) : null;
          })()}
        </div>
      </div>

      {/* Full-screen image viewer */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${product.title} - enlarged image`}
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close"
            className="absolute top-4 right-4 w-11 h-11 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <X size={24} />
          </button>

          {productImages.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevImage(); }}
                aria-label="Previous image"
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); goToNextImage(); }}
                aria-label="Next image"
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight size={28} />
              </button>
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/10 text-white text-sm px-4 py-1.5 rounded-full">
                {currentImageIndex + 1} / {productImages.length}
              </div>
            </>
          )}

          <img
            src={productImages[currentImageIndex]}
            alt={`${product.title} - image ${currentImageIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
