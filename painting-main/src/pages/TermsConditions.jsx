import { Link } from 'react-router-dom';
import { FileText, Scale, Gavel, AlertCircle } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#667eea] to-[#764ba2] pt-24 pb-16">
      <div className="w-full max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-full mb-4 border border-white/20">
            <FileText size={40} className="text-yellow-300" />
          </div>
          <h1 className="text-3xl md:text-4xl font-['Poppins'] font-bold text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using our website
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/20 text-white/90 space-y-8">
          
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300 flex items-center gap-2">
              <Scale size={24} />
              Introduction
            </h2>
            <p className="leading-relaxed">
              Welcome to AARTI ART STUDIO. By accessing our website at aartiartstudio.com, you agree to be bound by these terms and conditions. If you disagree with any part of these terms, you may not access the website.
            </p>
            <p className="leading-relaxed">
              These terms and conditions apply to all users, visitors, and others who access or use our Service.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300">Intellectual Property</h2>
            <p className="leading-relaxed">
              The Service and its original content, features, and functionality are and will remain the exclusive property of AARTI ART STUDIO and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.
            </p>
            <p className="leading-relaxed">
              Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of AARTI ART STUDIO.
            </p>
          </section>

          {/* Purchases */}
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300">Purchases</h2>
            <p className="leading-relaxed">
              If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
            </p>
            <p className="leading-relaxed font-semibold">
              We reserve the right to refuse or cancel your order at any time for certain reasons including but not limited to: product availability, errors in the description or price of the product, error in your order, or other reasons.
            </p>
          </section>

          {/* Pricing */}
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300">Pricing Information</h2>
            <p className="leading-relaxed">
              We strive to ensure that all pricing information on the website is accurate. However, errors may occur. If we discover an error in the price of any product you have ordered, we will inform you as soon as possible and give you the option of reconfirming your order at the correct price or canceling it.
            </p>
            <p className="leading-relaxed">
              All prices are in Indian Rupees (₹) and are inclusive of applicable taxes unless stated otherwise.
            </p>
          </section>

          {/* Shipping and Delivery */}
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300">Shipping and Delivery</h2>
            <p className="leading-relaxed">
              We offer free shipping on all orders above ₹999 within India. Orders are typically processed within 2-3 business days and delivered within 5-7 business days depending on your location.
            </p>
            <p className="leading-relaxed">
              International shipping rates and delivery times vary by destination. Please contact us for specific shipping quotes.
            </p>
          </section>

          {/* Returns and Refunds */}
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300">Returns and Refunds</h2>
            <p className="leading-relaxed">
              We have a 7-day return policy, which means you have 7 days after receiving your item to request a return. To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging.
            </p>
            <p className="leading-relaxed">
              To start a return, you can contact us at aartikumarsingh555@gmail.com. If your return is accepted, we'll send you instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="space-y-4 bg-red-400/10 p-6 rounded-xl border border-red-400/30">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300 flex items-center gap-2">
              <Gavel size={24} />
              Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              In no event shall AARTI ART STUDIO, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your access to or use of or inability to access or use the Service;</li>
              <li>Any conduct or content of any third party on the Service;</li>
              <li>Any content obtained from the Service; and</li>
              <li>Unauthorized access, use or alteration of your transmissions or content.</li>
            </ul>
          </section>

          {/* Changes to Terms */}
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300">Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-yellow-300">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms, please contact us at:
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