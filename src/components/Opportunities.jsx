import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { MapPin, TrendingUp, Building, Eye } from 'lucide-react';
import { opportunities } from '../mock';

const Opportunities = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Disponible': return 'bg-green-100 text-green-700 hover:bg-green-200';
      case 'En proceso': return 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200';
      case 'Próximamente': return 'bg-blue-100 text-blue-700 hover:bg-blue-200';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Plataforma': return 'bg-purple-100 text-purple-700';
      case 'Newsletter': return 'bg-orange-100 text-orange-700';
      case 'Subasta': return 'bg-cyan-100 text-cyan-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="oportunidades" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Building size={16} />
            <span>Webs del Grupo</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Nuestras{' '}
            <span className="text-green-600">Webs Especializadas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra red de sitios web especializados en diferentes aspectos 
            del sector inmobiliario y de inversión en activos judiciales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {opportunities.map((opportunity) => (
            <Card key={opportunity.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-green-100 overflow-hidden">
              <div className="relative">
                <img 
                  src={opportunity.image} 
                  alt={opportunity.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getTypeColor(opportunity.type)}>
                    {opportunity.type}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(opportunity.status)}>
                    {opportunity.status}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {opportunity.title}
                </h3>

                {opportunity.location && (
                  <div className="flex items-center space-x-2 text-gray-600 mb-4">
                    <MapPin size={16} className="text-green-600" />
                    <span className="text-sm">{opportunity.location}</span>
                  </div>
                )}

                {/* Show description for both platforms */}
                {opportunity.description && (
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {opportunity.description}
                  </p>
                )}

                {/* Button with conditional link and text */}
                {opportunity.url && (
                  <a 
                    href={opportunity.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 group"
                  >
                    <Eye size={18} />
                    <span>
                      {opportunity.id === 1 ? "Visita Subastracker.com" : "Visita Invalore.com"}
                    </span>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            ¿Buscas oportunidades específicas o tienes un perfil de inversión particular?
          </p>
          <a href="#contacto">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Escríbenos y cuéntanos tu caso
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;