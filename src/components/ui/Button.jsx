export default function Button({ 
  children, 
  variant = 'primary', 
  onClick,
  className = '',
  ...props 
}) {
  const baseStyles = 'px-6 py-3 font-montserrat text-sm tracking-wider rounded-lg transition-all duration-300';
  
  const variants = {
    primary: 'bg-[#E14749] text-white hover:bg-[#C13535] hover:shadow-lg',
    secondary: 'border-2 border-[#E14749] text-[#E14749] hover:bg-[#E14749] hover:text-white',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-black'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}