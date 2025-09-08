import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo y Texto */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://i.ibb.co/C5PQRBHQ/logo.png"
              alt="Distressed Real Estate Consulting Logo" 
              className="w-10 h-10 object-contain"
            />
            <div className="text-xl font-bold text-gray-900">
              Distressed <span className="text-green-600">Real Estate</span> Consulting
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#servicios" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Servicios
            </a>
            <a href="#oportunidades" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Webs del Grupo
            </a>
            <a href="#contacto" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
              Contacto
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#servicios" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                Servicios
              </a>
              <a href="#oportunidades" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                Webs del Grupo
              </a>
              <a href="#contacto" className="text-gray-600 hover:text-green-600 transition-colors font-medium">
                Contacto
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;