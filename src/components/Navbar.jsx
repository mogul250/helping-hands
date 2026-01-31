import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-sage-100 to-cream-100 shadow-lg sticky top-0 z-50 border-b border-sage-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-2">
            <Heart className="text-terracotta-500" size={32} />
            <h1 className="text-3xl font-bold text-sage-800">Helping Hands</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sage-700 hover:text-terracotta-600 transition-colors duration-300 font-medium">Home</a>
            <a href="#about" className="text-sage-700 hover:text-terracotta-600 transition-colors duration-300 font-medium">About</a>
            <a href="#impact" className="text-sage-700 hover:text-terracotta-600 transition-colors duration-300 font-medium">Impact</a>
            <button className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 text-white px-6 py-3 rounded-full hover:from-terracotta-600 hover:to-terracotta-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">Donate</button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-sage-700 hover:text-terracotta-600 transition-colors duration-300">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <a href="#home" className="block text-sage-700 hover:text-terracotta-600 transition-colors duration-300 font-medium py-2">Home</a>
              <a href="#about" className="block text-sage-700 hover:text-terracotta-600 transition-colors duration-300 font-medium py-2">About</a>
              <a href="#impact" className="block text-sage-700 hover:text-terracotta-600 transition-colors duration-300 font-medium py-2">Impact</a>
              <button className="w-full bg-gradient-to-r from-terracotta-500 to-terracotta-600 text-white px-6 py-3 rounded-full hover:from-terracotta-600 hover:to-terracotta-700 transition-all duration-300 shadow-md">Donate</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
