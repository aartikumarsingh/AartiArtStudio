import { useState } from 'react';
import { Star, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Art Collector, Delhi",
    content: "The artwork is absolutely breathtaking. The attention to detail and emotional depth in each piece is remarkable. I've purchased three paintings and each one tells a unique story.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-9989345c9b1a?w=200"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Gallery Owner, Mumbai",
    content: "Collaborating with Aarti Art Studio has been incredible. Their unique style blends traditional Indian art with contemporary expressions. Highly recommended for serious collectors.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200"
  },
  {
    id: 3,
    name: "Anita Desai",
    role: "Interior Designer, Bangalore",
    content: "I've commissioned multiple pieces for my clients. Each artwork exceeds expectations and brings spaces to life. The commission process is seamless and professional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h5 className="font-montserrat text-[#E14749] text-sm tracking-[0.3em] uppercase mb-4">
            TESTIMONIALS
          </h5>
          <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-4">
            What Collectors Say
          </h2>
          <div className="w-20 h-1 bg-[#E14749] mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-[#FDF8F2] p-8 md:p-12 rounded-2xl shadow-xl">
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-[#E14749] text-[#E14749]" />
              ))}
            </div>
            
            <p className="font-cormorant text-xl md:text-2xl text-gray-700 italic mb-6">
              "{testimonials[current].content}"
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-playfair text-gray-900 text-lg">
                    {testimonials[current].name}
                  </h4>
                  <p className="font-poppins text-gray-500 text-sm">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => window.open('https://wa.me/919027352937', '_blank')}
                className="p-3 bg-[#25D366] text-white rounded-full hover:scale-110 transition-transform"
              >
                <MessageCircle size={20} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current ? 'w-8 bg-[#E14749]' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}