import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const navItems = [
  { path: '/', label: 'HOME' },
  { path: '/gallery', label: 'GALLERY' },
  { path: '/about', label: 'ABOUT' },
  { path: '/contact', label: 'CONTACT' }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="logo">
            AARTI ART STUDIO
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Icons */}
          <div className="nav-icons">
            <button className="nav-icon">
              <Search size={20} />
            </button>
            <button className="nav-icon">
              <User size={20} />
            </button>
            <Link to="/cart" className="nav-icon">
              <ShoppingBag size={20} />
              {cart.totalItems > 0 && (
                <span className="cart-badge">{cart.totalItems}</span>
              )}
            </Link>
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="mobile-menu-header">
          <h2 className="text-xl font-['Poppins'] font-bold text-gradient">MENU</h2>
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="mobile-menu-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="mobile-menu-link"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}