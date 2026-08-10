export default function Card({ children, className = '', onClick }) {
  return (
    <div 
      className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}