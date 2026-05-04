import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-white relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716" 
          alt="Edificios background" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-white/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Inversión <span className="text-green-600">inmobiliaria</span> en activos de procedencia judicial
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Realizamos inversiones con capital propio adquiriendo activos directamente a bancos y fondos, así como también facilitamos consultoría para inversores. Estamos especializados en:
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Compra de créditos NPL</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Cesiones de remate</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Subastas judiciales</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Acceso a oportunidades off market</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 group">
                  Contacto
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>

          {/* Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 relative">
                <img 
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716" 
                  alt="Edificios comerciales" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
              </div>
              
              {/* Two smaller images */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1605146769289-440113cc3d00" 
                  alt="Propiedades residenciales" 
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1462899006636-339e08d1844e" 
                  alt="Rascacielos modernos" 
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
