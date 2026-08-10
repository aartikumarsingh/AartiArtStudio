import { useEffect, useState } from 'react';
import { useImages } from '../../hooks/useImages';

export default function Stats() {
  const { images } = useImages();
  const [counts, setCounts] = useState({
    artworks: 0,
    categories: 0,
    years: 0,
    collectors: 0
  });

  useEffect(() => {
    const categories = new Set(images.map(img => img.category)).size;
    
    // Counter animation
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounts({
        artworks: Math.floor(images.length * progress),
        categories: Math.floor(categories * progress),
        years: Math.floor(10 * progress),
        collectors: Math.floor(200 * progress)
      });
      
      if (step >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images]);

  return (
    <section className="py-16 bg-[#E14749]">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center text-white">
            <div className="font-playfair text-3xl md:text-4xl mb-2">{counts.artworks}+</div>
            <div className="font-poppins text-sm opacity-90">Artworks</div>
          </div>
          <div className="text-center text-white">
            <div className="font-playfair text-3xl md:text-4xl mb-2">{counts.categories}</div>
            <div className="font-poppins text-sm opacity-90">Categories</div>
          </div>
          <div className="text-center text-white">
            <div className="font-playfair text-3xl md:text-4xl mb-2">{counts.years}+</div>
            <div className="font-poppins text-sm opacity-90">Years</div>
          </div>
          <div className="text-center text-white">
            <div className="font-playfair text-3xl md:text-4xl mb-2">{counts.collectors}+</div>
            <div className="font-poppins text-sm opacity-90">Collectors</div>
          </div>
        </div>
      </div>
    </section>
  );
}