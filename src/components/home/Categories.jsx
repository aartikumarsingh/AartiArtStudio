import { useImages } from '../../hooks/useImages';

export default function Categories() {
  const { images } = useImages();
  
  // Count images per category
  const categoryCount = images.reduce((acc, img) => {
    acc[img.category] = (acc[img.category] || 0) + 1;
    return acc;
  }, {});

  const categories = Object.entries(categoryCount).slice(0, 6);

  return (
    <section className="py-20 bg-[#FDF8F2]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h5 className="font-montserrat text-[#E14749] text-sm tracking-[0.3em] uppercase mb-4">
            EXPLORE
          </h5>
          <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-4">
            Art Categories
          </h2>
          <div className="w-20 h-1 bg-[#E14749] mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(([category, count]) => (
            <div
              key={category}
              onClick={() => window.location.href = `/gallery?category=${category}`}
              className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 text-center"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {category === 'Landscape' && '🏞️'}
                {category === 'Wildlife' && '🦁'}
                {category === 'Abstract' && '🎨'}
                {category === 'Floral' && '🌸'}
                {category === 'Spiritual' && '🕉️'}
                {category === 'Figurative' && '👤'}
              </div>
              <h3 className="font-playfair text-gray-900 mb-1">{category}</h3>
              <p className="font-poppins text-sm text-gray-500">{count} artworks</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}