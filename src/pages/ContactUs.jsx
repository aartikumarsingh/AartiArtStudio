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
    // For demo - just show success message
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] pt-24 pb-16">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-full mb-4 border border-white/20">
            <Mail size={40} className="text-yellow-300" />
          </div>
          <h1 className="text-3xl md:text-4xl font-['Poppins'] font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Get in touch with us for any questions or inquiries
          </p>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-6 p-4 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl text-white text-center">
            Thank you for contacting us! We'll get back to you soon.
          </div>
        )}

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name *"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow-300"
              />
              
              <input
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow-300"
              />
              
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow-300"
              />
              
              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow-300"
              />
              
              <textarea
                placeholder="Your Message *"
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow-300"
              ></textarea>
              
              <button 
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-['Poppins'] font-medium rounded-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <Send size={18} />
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20">
              <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300 mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="text-yellow-300 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-white mb-1">Studio Address</h3>
                    <p className="text-white/80">
                      C-807, Mayflower grand,<br />
                      Nacharam - Mallapur,<br />
                      Hyderabad - 500076
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone size={24} className="text-yellow-300 shrink-0" />
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-white mb-1">Phone</h3>
                    <p className="text-white/80">+91 80195 74565</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail size={24} className="text-yellow-300 shrink-0" />
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-white mb-1">Email</h3>
                    <p className="text-white/80">aartikumarsingh555@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <Clock size={24} className="text-yellow-300 shrink-0" />
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-white mb-1">Studio Hours</h3>
                    <p className="text-white/80">Tuesday - Sunday: 10AM - 7PM</p>
                    <p className="text-white/60 text-sm">Monday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
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
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20">
              <h2 className="text-xl font-['Poppins'] font-bold text-yellow-300 mb-4">Quick Links</h2>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/privacy-policy" className="text-white/80 hover:text-yellow-300 transition-colors">Privacy Policy</Link>
                <Link to="/terms-conditions" className="text-white/80 hover:text-yellow-300 transition-colors">Terms & Conditions</Link>
                <Link to="/disclaimer" className="text-white/80 hover:text-yellow-300 transition-colors">Disclaimer</Link>
                <Link to="/about" className="text-white/80 hover:text-yellow-300 transition-colors">About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}