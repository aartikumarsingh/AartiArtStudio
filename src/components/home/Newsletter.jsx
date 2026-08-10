import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="py-20 bg-[#E14749]">
      <div className="container-custom text-center">
        <h2 className="font-playfair text-3xl md:text-4xl text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="font-cormorant text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get updates on new artworks, exhibitions, and exclusive offers
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-white rounded-lg focus:outline-none font-poppins"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white font-montserrat text-sm rounded-lg hover:bg-gray-900 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
          
          {subscribed && (
            <div className="mt-4 text-white animate-fade-in">
              Thank you for subscribing! 🎨
            </div>
          )}
        </div>
    </section>
  );
}