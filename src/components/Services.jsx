import React from 'react';
import { Card, CardContent } from './ui/card';
import { BookOpen, Users, TrendingUp, Gavel, FileText, Building } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Formación Especializada",
      description: "Material formativo de alta especialización y eminentemente práctico.",
      features: ["Guía práctica compra de créditos NPL", "Comunidad formativa", "Consultas personales"]
    },
    {
      icon: Users,
      title: "Consultoría Estratégica",
      description: "Asesoramiento personalizado para estructurar tu estrategia de inversión y maximizar el retorno en activos judiciales.",
      features: ["Análisis detallado", "Estrategia personalizada", "Seguimiento continuo"]
    },
    {
      icon: TrendingUp,
      title: "Oportunidades de Inversión",
      description: "Acceso exclusivo a oportunidades seleccionadas de compra de créditos NPL y cesiones de remate.",
      features: ["Selección rigurosa", "Due diligence completa", "Rentabilidad superior"]
    },
    {
      icon: Gavel,
      title: "Gestión de Subastas",
      description: "Participación estratégica en subastas judiciales con análisis previo y gestión integral del proceso.",
      features: ["Análisis previo", "Estrategia de puja", "Gestión post-subasta"]
    },
    {
      icon: FileText,
      title: "Compra de Créditos NPL",
      description: "Identificación y adquisición de posiciones en créditos Non Performing (NPL).",
      features: ["Evaluación de posiciones", "Negociación directa", "Gestión pre y post firma"]
    },
    {
      icon: Building,
      title: "Gestión Off Market",
      description: "Acceso a oportunidades de inversión no publicadas, activos singulares y operaciones inmobiliarias fuera de circuito tradicional.",
      features: ["Red exclusiva", "Acceso Prioritario", "Confidencialidad total"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Building size={16} />
            <span>Nuestros Servicios</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Soluciones Integrales para{' '}
            <span className="text-green-600">Inversores Profesionales</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicios personalizados y acompañamiento para <span className="text-green-600 font-semibold">maximizar la rentabilidad</span> de tu inversión.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-green-100 hover:border-green-200">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="p-4 bg-green-100 rounded-2xl w-fit group-hover:bg-green-200 transition-colors duration-300">
                      <Icon size={32} className="text-green-600" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;