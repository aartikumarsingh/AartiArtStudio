import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Disclaimer from './pages/Disclaimer';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
        </Layout>
      </CartProvider>
    </BrowserRouter>
  );
}