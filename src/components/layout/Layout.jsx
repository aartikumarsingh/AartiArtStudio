import Navbar from './Navbar';
import FloatingWhatsApp from './FloatingWhatsApp';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      <Navbar />
      <main className="pt-16 md:pt-20">
        {children}
      </main>
      <FloatingWhatsApp />
    </div>
  );
}