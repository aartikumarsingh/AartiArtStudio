import { Link } from 'react-router-dom';
import { AlertCircle, Info, ExternalLink } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] pt-24 pb-16">
      <div className="w-full max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-full mb-4 border border-white/20">
            <AlertCircle size={40} className="text-yellow-300" />
          </div>
          <h1 className="text-3xl md:text-4xl font-['Poppins'] font-bold text-white mb-4">
            Disclaimer
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Important information about our website and services
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/20 text-white/90 space-y-8">
          
          {/* General Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300 flex items-center gap-2">
              <Info size={24} />
              General Information
            </h2>
            <p className="leading-relaxed">
              The information provided by AARTI ART STUDIO ("we," "us," or "our") on aartiartstudio.com (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
            </p>
          </section>

          {/* Artwork Representation */}
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300">Artwork Representation</h2>
            <p className="leading-relaxed">
              We strive to display the colors and details of our artwork as accurately as possible. However, due to differences in computer monitors, mobile screens, and other display devices, we cannot guarantee that the colors you see on your screen will exactly match the actual artwork.
            </p>
            <p className="leading-relaxed">
              The dimensions and descriptions of our artwork are provided to the best of our knowledge. If you have any questions about a specific piece, please contact us before making a purchase.
            </p>
          </section>

          {/* Pricing Disclaimer */}
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300">Pricing Disclaimer</h2>
            <p className="leading-relaxed">
              All prices displayed on our website are subject to change without notice. We reserve the right to modify prices at any time. In the event of a pricing error, we will inform you and give you the option to proceed with the corrected price or cancel your order.
            </p>
          </section>

          {/* External Links */}
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300 flex items-center gap-2">
              <ExternalLink size={24} />
              External Links Disclaimer
            </h2>
            <p className="leading-relaxed">
              The Site may contain links to other websites or content belonging to or originating from third parties or links to websites and features. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
            </p>
            <p className="leading-relaxed">
              We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising.
            </p>
          </section>

          {/* Professional Disclaimer */}
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300">Professional Disclaimer</h2>
            <p className="leading-relaxed">
              The Site cannot and does not contain professional advice. The artistic information is provided for general informational and educational purposes only and is not a substitute for professional advice.
            </p>
            <p className="leading-relaxed">
              Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of professional advice.
            </p>
          </section>

          {/* Fair Use Disclaimer */}
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300">Fair Use Disclaimer</h2>
            <p className="leading-relaxed">
              The Site may contain copyrighted material, the use of which has not always been specifically authorized by the copyright owner. We are making such material available for criticism, comment, news reporting, teaching, scholarship, or research.
            </p>
            <p className="leading-relaxed">
              We believe this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the US Copyright Law. If you wish to use copyrighted material from this site for purposes of your own that go beyond fair use, you must obtain permission from the copyright owner.
            </p>
          </section>

          {/* Views Expressed Disclaimer */}
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300">Views Expressed Disclaimer</h2>
            <p className="leading-relaxed">
              The views and opinions expressed in any articles, blog posts, or comments on our site are those of the authors and do not necessarily reflect the official policy or position of AARTI ART STUDIO.
            </p>
          </section>

          {/* No Responsibility */}
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300">No Responsibility</h2>
            <p className="leading-relaxed">
              In no event shall AARTI ART STUDIO be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence, or other tort, arising out of or in connection with the use of the Service or the contents of the Service.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Disclaimer, please contact us at:
            </p>
            <div className="bg-white/5 p-4 rounded-lg">
              <p className="font-semibold">AARTI ART STUDIO</p>
              <p>C-807, Mayflower grand, Nacharam - Mallapur, Hyderabad- 500076</p>
              <p>Email: aartikumarsingh555@gmail.com</p>
              <p>Phone: +91 80195 74565</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}