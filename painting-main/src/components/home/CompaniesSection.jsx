import { Building2 } from 'lucide-react';

export default function CompaniesSection() {
  const companies = [
    { 
      name: "Art Gallery of Hyderabad", 
      logo: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=100&h=100&fit=crop",
      location: "Hyderabad",
      type: "Art Gallery"
    },
    { 
      name: "India Art Fair", 
      logo: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=100&h=100&fit=crop",
      location: "New Delhi",
      type: "Art Exhibition"
    },
    { 
      name: "Lalit Kala Akademi", 
      logo: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=100&h=100&fit=crop",
      location: "New Delhi",
      type: "National Academy"
    },
    { 
      name: "National Gallery of Modern Art", 
      logo: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=100&h=100&fit=crop",
      location: "Mumbai",
      type: "Modern Art Museum"
    },
    { 
      name: "Kalakriti Art Gallery", 
      logo: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=100&h=100&fit=crop",
      location: "Hyderabad",
      type: "Contemporary Gallery"
    },
    { 
      name: "Chitram Art Gallery", 
      logo: "https://picsum.photos/seed/chitram/100/100",
      location: "Chennai",
      type: "Traditional Art"
    },
    { 
      name: "Kochi Biennale", 
      logo: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?w=100&h=100&fit=crop",
      location: "Kochi",
      type: "Art Festival"
    },
    { 
      name: "Jehangir Art Gallery", 
      logo: "https://picsum.photos/seed/jehangir-art/100/100",
      location: "Mumbai",
      type: "Heritage Gallery"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-[#E14749]/10 rounded-full mb-4">
            <Building2 size={28} className="text-[#E14749]" />
          </div>
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted By Leading Institutions
          </h2>
          <p className="font-poppins text-gray-500 max-w-2xl mx-auto">
            Our artwork has been featured and collected by these prestigious organizations
          </p>
          <div className="w-20 h-1 bg-[#E14749] mx-auto mt-6"></div>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="group bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                {/* Small Image */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#E14749]/20 group-hover:border-[#E14749] transition-colors">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-montserrat text-sm font-semibold text-gray-900 truncate group-hover:text-[#E14749] transition-colors">
                    {company.name}
                  </h3>
                  <p className="font-poppins text-xs text-gray-500 truncate">
                    {company.type}
                  </p>
                  <p className="font-poppins text-xs text-[#E14749] mt-0.5">
                    {company.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4">
            <div className="text-2xl font-montserrat font-bold text-[#E14749] mb-1">50+</div>
            <p className="font-poppins text-xs text-gray-500">Corporate Collections</p>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-montserrat font-bold text-[#E14749] mb-1">25+</div>
            <p className="font-poppins text-xs text-gray-500">Gallery Partnerships</p>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-montserrat font-bold text-[#E14749] mb-1">15+</div>
            <p className="font-poppins text-xs text-gray-500">Exhibitions Featured</p>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl font-montserrat font-bold text-[#E14749] mb-1">1000+</div>
            <p className="font-poppins text-xs text-gray-500">Happy Collectors</p>
          </div>
        </div>

        {/* Featured In Badges */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 pt-6 border-t border-gray-200">
          <span className="font-poppins text-sm text-gray-400">FEATURED IN</span>
          <div className="flex flex-wrap gap-4">
            {['Art India', 'The Hindu', 'Times of India', 'Architectural Digest'].map((pub, idx) => (
              <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-xs font-poppins text-gray-600">
                {pub}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}