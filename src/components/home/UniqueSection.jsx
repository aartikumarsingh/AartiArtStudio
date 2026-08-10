import { Brush, Palette, Sparkles, Shield, Truck, CreditCard } from 'lucide-react';

export default function UniqueSection() {
  const features = [
    {
      icon: <Brush size={32} />,
      title: "Hand-Painted Originals",
      description: "Every artwork is meticulously hand-painted by skilled artists, ensuring each piece is truly one-of-a-kind."
    },
    {
      icon: <Palette size={32} />,
      title: "Premium Materials",
      description: "We use only the finest quality canvas, paints, and materials that are designed to last for generations."
    },
    {
      icon: <Sparkles size={32} />,
      title: "Unique Techniques",
      description: "Our artists blend traditional Indian techniques with contemporary styles for distinctive results."
    },
    {
      icon: <Shield size={32} />,
      title: "Authenticity Guaranteed",
      description: "Each artwork comes with a certificate of authenticity and is signed by the artist."
    },
    {
      icon: <Truck size={32} />,
      title: "Secure Worldwide Shipping",
      description: "Carefully packed and insured delivery to any corner of the globe."
    },
    {
      icon: <CreditCard size={32} />,
      title: "Easy Payment Options",
      description: "Flexible payment plans and secure checkout through WhatsApp."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-[#E14749] font-montserrat text-sm tracking-wider uppercase mb-4 block">
            WHY CHOOSE US
          </span>
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Makes Our Artwork Unique
          </h2>
          <p className="font-poppins text-gray-500 max-w-2xl mx-auto">
            Discover the qualities that set our artwork apart from the rest
          </p>
          <div className="w-20 h-1 bg-[#E14749] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gray-50 p-8 rounded-xl hover:bg-[#E14749] transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="text-[#E14749] group-hover:text-white mb-4 transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-montserrat text-xl font-semibold text-gray-900 group-hover:text-white mb-3 transition-colors">
                {feature.title}
              </h3>
              <p className="font-poppins text-gray-600 group-hover:text-white/90 text-sm leading-relaxed transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}