import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="w-full min-h-screen bg-white pt-24 pb-16">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-4 border border-gray-200">
            <Mail size={40} className="text-black" />
          </div>
          <h1 className="text-3xl md:text-4xl font-['Poppins'] font-bold text-black mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get in touch with us for any questions or inquiries
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-black text-center">
            Thank you for contacting us! We'll get back to you soon.
          </div>
        )}

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl font-['Poppins'] font-bold text-black mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black"
              />
              <input
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black"
              />
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black"
              />
              <textarea
                placeholder="Your Message *"
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black"
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-black text-white font-['Poppins'] font-medium rounded-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <Send size={18} />
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-200">
              <h2 className="text-2xl font-['Poppins'] font-bold text-black mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-black shrink-0 mt-1" />
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-black mb-1">Studio Address</h3>
                    <p className="text-gray-600">
                      Gulmohar Residency,<br />
                      Krishna Nagar, Moula Ali,<br />
                      Hyderabad - 500040, Telangana, INDIA
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={24} className="text-black shrink-0" />
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-black mb-1">Phone</h3>
                    <p className="text-gray-600">+91 80195 74565</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={24} className="text-black shrink-0" />
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-black mb-1">Email</h3>
                    <p className="text-gray-600">aartikumarsingh555@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock size={24} className="text-black shrink-0" />
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-black mb-1">Studio Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 10 am - 6 pm</p>
                    <p className="text-gray-500 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <a
                  href="https://wa.me/918019574565"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl hover:bg-[#128C7E] transition-colors"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gray-50 rounded-3xl p-6 md:p-8 border border-gray-200">
              <h2 className="text-xl font-['Poppins'] font-bold text-black mb-4">Quick Links</h2>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/privacy-policy" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</Link>
                <Link to="/terms-conditions" className="text-gray-600 hover:text-black transition-colors">Terms & Conditions</Link>
                <Link to="/disclaimer" className="text-gray-600 hover:text-black transition-colors">Disclaimer</Link>
                <Link to="/about" className="text-gray-600 hover:text-black transition-colors">About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
