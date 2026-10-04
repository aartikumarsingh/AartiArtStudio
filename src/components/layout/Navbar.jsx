import { Link, NavLink, useNavigate } from 'react-router-dom';
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (query) {
      navigate(`/gallery?search=${encodeURIComponent(query)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

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
            {isSearchOpen ? (
              <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search artworks..."
                  className="w-36 sm:w-56 px-3 py-1.5 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-black text-black placeholder-gray-400"
                />
                <button type="submit" className="nav-icon" aria-label="Search">
                  <Search size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                  className="nav-icon"
                  aria-label="Close search"
                >
                  <X size={20} />
                </button>
              </form>
            ) : (
              <button
                className="nav-icon"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Open search"
              >
                <Search size={20} />
              </button>
            )}

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
          <h2 className="text-xl font-['Poppins'] font-bold text-black">MENU</h2>
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <form
          onSubmit={(e) => {
            handleSearchSubmit(e);
            setIsMenuOpen(false);
          }}
          className="px-6 pt-2"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search artworks..."
            className="w-full px-4 py-3 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-black text-black placeholder-gray-400"
          />
        </form>

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
