import { Link } from 'react-router-dom';
import { Users, Heart, Target, Eye, Award, Clock } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] pt-24 pb-16">
      <div className="w-full max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-full mb-4 border border-white/20">
            <Users size={40} className="text-yellow-300" />
          </div>
          <h1 className="text-3xl md:text-4xl font-['Poppins'] font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Discover the story behind AARTI ART STUDIO
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/20 text-white/90 space-y-8">
          
          {/* Our Story */}
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300 flex items-center gap-2">
              <Heart size={24} />
              Our Story
            </h2>
            <p className="leading-relaxed">
              AARTI ART STUDIO was founded in 2014 by Aarti Kumar Singh, a passionate artist from the holy city of Mathura. What began as a small studio in a humble space has now grown into a renowned art gallery representing some of the most talented artists from around the world.
            </p>
            <p className="leading-relaxed">
              With a deep connection to the rich cultural heritage of Braj, our studio specializes in creating soulful artwork that blends traditional Indian art forms with contemporary expressions. Each piece in our collection tells a story - of devotion, of nature, of the divine love of Radha-Krishna.
            </p>
          </section>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-6 rounded-xl">
              <Target size={32} className="text-yellow-300 mb-4" />
              <h3 className="text-xl font-['Poppins'] font-bold text-white mb-2">Our Mission</h3>
              <p className="text-white/80">
                To make original art accessible to everyone by providing high-quality, affordable paintings that bring beauty, emotion, and inspiration into homes and spaces around the world.
              </p>
            </div>
            <div className="bg-white/5 p-6 rounded-xl">
              <Eye size={32} className="text-yellow-300 mb-4" />
              <h3 className="text-xl font-['Poppins'] font-bold text-white mb-2">Our Vision</h3>
              <p className="text-white/80">
                To become the most trusted destination for art lovers worldwide, creating a global community where artists and collectors connect through the universal language of creativity.
              </p>
            </div>
          </div>

          {/* The Artist */}
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300">The Artist</h2>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 p-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                  <span className="text-6xl">🎨</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-['Poppins'] font-bold text-white mb-2">Aarti Kumar Singh</h3>
                <p className="text-white/80 leading-relaxed">
                  Aarti Kumar Singh, a Master of Fine Arts from Banaras Hindu University, has been creating art for over a decade. Her journey began at the banks of River Yamuna, drawing inspiration from the divine love of Radha-Krishna and the rich cultural heritage of Braj region. Her work has been exhibited in prestigious galleries across India, including Lalit Kala Akademi, National Gallery of Modern Art, and India Habitat Centre.
                </p>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300 flex items-center gap-2">
              <Award size={24} />
              Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-3xl font-bold text-yellow-300">500+</p>
                <p className="text-white/80">Artworks Created</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-3xl font-bold text-yellow-300">25+</p>
                <p className="text-white/80">Exhibitions</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-3xl font-bold text-yellow-300">200+</p>
                <p className="text-white/80">Happy Collectors</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <p className="text-3xl font-bold text-yellow-300">10+</p>
                <p className="text-white/80">Years of Excellence</p>
              </div>
            </div>
          </section>

          {/* Studio Info */}
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300 flex items-center gap-2">
              <Clock size={24} />
              Studio Information
            </h2>
            <div className="bg-white/5 p-4 rounded-lg space-y-2">
              <p><span className="font-semibold">📍 Address:</span> C-807, Mayflower grand, Nacharam - Mallapur, Hyderabad- 500076</p>
              <p><span className="font-semibold">📞 Phone:</span> +91 80195 74565</p>
              <p><span className="font-semibold">✉️ Email:</span> aartikumarsingh555@gmail.com</p>
              <p><span className="font-semibold">🕒 Studio Hours:</span> Tuesday - Sunday: 10AM - 7PM | Monday: Closed</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}