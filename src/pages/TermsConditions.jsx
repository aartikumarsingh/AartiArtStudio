import { Link } from 'react-router-dom';
import { FileText, Scale, Gavel, AlertCircle } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="w-full min-h-screen bg-white pt-24 pb-16">
      <div className="w-full max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-4 border border-gray-200">
            <FileText size={40} className="text-black" />
          </div>
          <h1 className="text-3xl md:text-4xl font-['Poppins'] font-bold text-black mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using our website
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-200 text-gray-700 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-black flex items-center gap-2">
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

          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-black">Intellectual Property</h2>
            <p className="leading-relaxed">
              The Service and its original content, features, and functionality are and will remain the exclusive property of AARTI ART STUDIO and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.
            </p>
            <p className="leading-relaxed">
              Our trademarks and trade Artwork may not be used in connection with any product or service without the prior written consent of AARTI ART STUDIO.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-black">Purchases</h2>
            <p className="leading-relaxed">
              If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
            </p>
            <p className="leading-relaxed font-semibold">
              We reserve the right to refuse or cancel your order at any time for certain reasons including but not limited to: product availability, errors in the description or price of the product, error in your order, or other reasons.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-black">Pricing Information</h2>
            <p className="leading-relaxed">
              We strive to ensure that all pricing information on the website is accurate. However, errors may occur. If we discover an error in the price of any product you have ordered, we will inform you as soon as possible and give you the option of reconfirming your order at the correct price or canceling it.
            </p>
            <p className="leading-relaxed">
              All prices are in Indian Rupees (₹) and are inclusive of applicable taxes unless stated otherwise.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-black">Shipping and Delivery</h2>
            <p className="leading-relaxed">
              We offer free shipping on all orders within India. Orders are typically processed within 2-3 business days and delivered within 5-7 business days depending on your location.
            </p>
            <p className="leading-relaxed">
              International shipping rates and delivery times vary by destination. Please contact us for specific shipping quotes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-black">Returns and Refunds</h2>
            <p className="leading-relaxed">
              All sales are final. Since each artwork is an original, one-of-a-kind, handcrafted piece, we do not accept returns or offer refunds for a change of mind once an order has been placed and shipped.
            </p>
            <p className="leading-relaxed font-semibold">
              The only exception to this policy is if your artwork arrives damaged in transit, or if you receive an item different from what you ordered. In either of these cases, please contact us at aartikumarsingh555@gmail.com within 48 hours of delivery, along with photographs of the artwork and its packaging, and we will arrange a replacement or a full refund.
            </p>
            <p className="leading-relaxed">
              We encourage you to carefully review each artwork's photographs, description, size, and medium before purchasing, or to reach out to us with any questions beforehand. If you are interested in a custom piece, we are happy to discuss your requirements in detail before beginning work, to ensure the final piece matches your expectations.
            </p>
          </section>

          <section className="space-y-4 bg-red-50 p-6 rounded-xl border border-red-200">
            <h2 className="text-2xl font-['Poppins'] font-bold text-black flex items-center gap-2">
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

          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-black">Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-black">Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-semibold text-black">AARTI ART STUDIO</p>
              <p>Gulmohar Residency, Krishna Nagar, Beside NFC, Moula Ali, Hyderabad-500040, Telangana, INDIA</p>
              <p>Email: aartikumarsingh555@gmail.com</p>
              <p>Phone: +91 80195 74565</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
