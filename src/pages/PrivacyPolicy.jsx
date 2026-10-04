import { Link } from 'react-router-dom';
import { Shield, Database, Cookie, UserCheck, Share2, Lock, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="w-full min-h-screen bg-white pt-24 pb-16">
      <div className="w-full max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full mb-4 border border-gray-200">
            <Shield size={40} className="text-black" />
          </div>
          <h1 className="text-3xl md:text-4xl font-['Poppins'] font-bold text-black mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            How we collect, use, and protect your personal information
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-200 text-gray-700 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-black flex items-center gap-2">
              <Shield size={24} />
              Introduction
            </h2>
            <p className="leading-relaxed">
              AARTI ART STUDIO ("we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us through aartiartstudio.com (the "Site"). This Privacy Policy explains what information we collect, how we use it, and the choices you have.
            </p>
            <p className="leading-relaxed">
              By using our Site, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-black flex items-center gap-2">
              <Database size={24} />
              Information We Collect
            </h2>
            <p className="leading-relaxed">
              When you browse our Site, contact us, or place an order, we may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">Contact details</span> — your name, email address, phone number, and shipping address, when you submit a contact form or place an order.</li>
              <li><span className="font-semibold">Order information</span> — the artworks you view, add to cart, or purchase, and related transaction details.</li>
              <li><span className="font-semibold">Communication records</span> — messages you send us via our contact form or WhatsApp.</li>
              <li><span className="font-semibold">Usage data</span> — general information about how you browse the Site, such as pages visited, collected automatically through standard web technologies.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-black">How We Use Your Information</h2>
            <p className="leading-relaxed">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and fulfil your orders, including shipping and delivery</li>
              <li>Respond to your enquiries and provide customer support</li>
              <li>Send order confirmations and updates, including via WhatsApp when you choose to contact us that way</li>
              <li>Improve our Site, products, and the overall shopping experience</li>
              <li>Send you updates about new artworks or offers, only if you have opted in via our newsletter</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-black flex items-center gap-2">
              <Cookie size={24} />
              Cookies
            </h2>
            <p className="leading-relaxed">
              Our Site may use cookies and similar technologies to remember your preferences, such as items in your shopping cart, and to understand how visitors use the Site. You can choose to disable cookies through your browser settings, though some features of the Site may not function properly as a result.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-black flex items-center gap-2">
              <Share2 size={24} />
              Sharing of Information
            </h2>
            <p className="leading-relaxed">
              We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With shipping and delivery partners, solely to fulfil and deliver your order</li>
              <li>With service providers who help us operate the Site (such as hosting or image storage providers), who are only permitted to use your data to provide that service</li>
              <li>When required by law, or to protect our legal rights</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-black flex items-center gap-2">
              <Lock size={24} />
              Data Security
            </h2>
            <p className="leading-relaxed">
              We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-black flex items-center gap-2">
              <UserCheck size={24} />
              Your Rights
            </h2>
            <p className="leading-relaxed">
              You have the right to access, correct, or request deletion of the personal information we hold about you. If you would like to exercise any of these rights, or have questions about how your data is handled, please contact us using the details below.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-black">Children's Privacy</h2>
            <p className="leading-relaxed">
              Our Site is not directed at children under the age of 13, and we do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-black">Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and continued use of the Site after changes are posted constitutes your acceptance of the revised policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-['Poppins'] font-bold text-black flex items-center gap-2">
              <Mail size={24} />
              Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy or how your information is handled, please contact us at:
            </p>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-semibold text-black">AARTI ART STUDIO</p>
              <p>Gulmohar Residency, Krishna Nagar, Near NFC, Moula Ali, Hyderabad- 500040, Telangana, INDIA</p>
              <p>Email: aartikumarsingh555@gmail.com</p>
              <p>Phone: +91 80195 74565</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
