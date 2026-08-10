import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, Trash2, Plus, Minus, ArrowRight, 
  MessageCircle, IndianRupee 
} from 'lucide-react';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleWhatsAppCheckout = () => {
    if (cart.items.length === 0) return;

    const phoneNumber = '918019574565';
    let message = '🖼️ *New Art Order*\n\n';
    message += '*Items:*\n';
    
    cart.items.forEach((item, index) => {
      message += `${index + 1}. ${item.title} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}\n`;
    });
    
    message += `\n*Total Amount:* ₹${cart.totalPrice}`;
    message += `\n\nPlease confirm availability and payment details.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  if (cart.items.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-container">
          <div className="empty-cart">
            <ShoppingBag className="empty-cart-icon" size={80} />
            <h2 className="empty-cart-title">Your Cart is Empty</h2>
            <p className="empty-cart-text">Looks like you haven't added any artworks yet.</p>
            <Link to="/gallery" className="ecomm-btn inline-flex items-center gap-2">
              EXPLORE GALLERY
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        {/* Header */}
        <div className="cart-header">
          <h1 className="cart-title">Shopping Cart</h1>
          <button 
            onClick={clearCart}
            className="cart-clear-btn"
          >
            Clear Cart
          </button>
        </div>

        <div className="cart-grid">
          {/* Cart Items */}
          <div className="cart-items">
            {cart.items.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-content">
                  {/* Image */}
                  <Link to={`/product/${item.id}`} className="cart-item-image">
                    <img 
                      src={item.image} 
                      alt={item.title}
                    />
                  </Link>

                  {/* Details */}
                  <div className="cart-item-details">
                    <div className="cart-item-header">
                      <Link to={`/product/${item.id}`}>
                        <h3 className="cart-item-title">{item.title}</h3>
                      </Link>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="cart-item-remove"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    
                    <p className="cart-item-category">{item.category}</p>
                    
                    <div className="cart-item-footer">
                      {/* Quantity */}
                      <div className="cart-item-quantity">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="cart-quantity-btn"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="cart-quantity-value">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="cart-quantity-btn"
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="cart-item-price">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="cart-summary">
            <div className="summary-card">
              <h2 className="summary-title">Order Summary</h2>
              
              <div className="space-y-3">
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span className="font-['Poppins']">₹{cart.totalPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="summary-total">
                  <span>Total</span>
                  <span className="summary-total-price">₹{cart.totalPrice.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button 
                onClick={handleWhatsAppCheckout}
                className="cart-checkout-btn"
              >
                <MessageCircle size={18} />
                CHECKOUT VIA WHATSAPP
              </button>

              <Link 
                to="/gallery"
                className="cart-continue-btn"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}