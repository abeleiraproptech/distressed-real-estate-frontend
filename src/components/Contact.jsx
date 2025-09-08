import React from 'react';
import { Card, CardContent } from './ui/card';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Mail size={16} />
            <span>Contacto</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Hablemos de <span className="text-green-600">inversión inmobiliaria</span> de alto rendimiento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ponte en contacto con nosotros y expón tus preferencias de inversión o consúltanos cualquier cuestión relacionada con la inversión en activos judiciales.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information Only */}
          <Card className="border-green-100">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Información de contacto
              </h3>

              <div className="flex justify-center">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Mail size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@abeleira.es</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;