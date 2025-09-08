import React from 'react';
import { Building, Mail, Linkedin, Twitter, Instagram, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Building size={32} className="text-green-500" />
              <div>
                <div className="text-2xl font-bold">Distressed <span className="text-green-500">Real Estate</span></div>
                <div className="text-green-500 font-medium">Consulting</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Especialistas en inversiones inmobiliarias de procedencia judicial. Inversión mediante capital propio, consultoría externa para inversores y formación especializada y exclusiva en el sector.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} className="text-green-500" />
                <span>info@abeleira.es</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <a 
                href="https://www.linkedin.com/in/pablonaveira/"
                className="flex items-center space-x-2 p-2 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a 
                href="https://x.com/subastracker"
                className="flex items-center space-x-2 p-2 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
                <span className="text-sm">Twitter</span>
              </a>
              <a 
                href="https://www.instagram.com/subastracker/"
                className="flex items-center space-x-2 p-2 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
                <span className="text-sm">Instagram</span>
              </a>
              <a 
                href="https://www.subastracker.com/"
                className="flex items-center space-x-2 p-2 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe size={20} />
                <span className="text-sm">Subastracker</span>
              </a>
              <a 
                href="https://www.invalore.com/"
                className="flex items-center space-x-2 p-2 bg-gray-800 rounded-lg hover:bg-green-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe size={20} />
                <span className="text-sm">InvaloRE</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} ABELEIRA PROPTECH S.L. - B44935229 - Juan Flórez, 8 5º - A Coruña. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;