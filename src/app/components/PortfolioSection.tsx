import React from 'react';
import Image from 'next/image';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Nuestro Trabajo</h2>
        <p className="section-subtitle">
          Proyectos que demuestran nuestra pasión por la tecnología y el diseño de vanguardia. ¿Quieres estar aquí? Contáctanos.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Green Consulting */}
          <a 
            href="https://greenconsultingingenieria.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-[#161B22] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <div className="relative h-80 overflow-hidden group">
              <Image
                src="/greencapture.png" 
                alt="Green Consulting Ingeniería"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#60A5FA] mb-2">Green Consulting Ingeniería</h3>
              <p className="text-gray-400 mb-4">
                Sitio web corporativo para consultoría de ingeniería sostenible y ambiental.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gradient-to-r from-emerald-500 to-green-400 text-white px-3 py-1 rounded-full font-semibold">HTML</span>
                <span className="text-xs bg-gradient-to-r from-emerald-500 to-green-400 text-white px-3 py-1 rounded-full font-semibold">CSS</span>
                <span className="text-xs bg-gradient-to-r from-emerald-500 to-green-400 text-white px-3 py-1 rounded-full font-semibold">JS</span>
              </div>
            </div>
          </a>

          {/* Ley Explico */}
          <a 
            href="https://ley-explico.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-[#161B22] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <div className="relative h-80 overflow-hidden group">
              <Image
                src="/leycapture.png" 
                alt="Ley Explico"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#60A5FA] mb-2">Ley Explico</h3>
              <p className="text-gray-400 mb-4">
                Plataforma educativa para explicar leyes de manera sencilla y accesible.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gradient-to-r from-purple-700 to-purple-600 text-white px-3 py-1 rounded-full font-semibold">Next.js</span>
                <span className="text-xs bg-gradient-to-r from-purple-700 to-purple-600 text-white px-3 py-1 rounded-full font-semibold">Tailwind.css</span>
                <span className="text-xs bg-gradient-to-r from-purple-700 to-purple-600 text-white px-3 py-1 rounded-full font-semibold">Educación</span>
              </div>
            </div>
          </a>

          {/* Importadora Sky */}
          <a 
            href="https://importadorasky.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-[#161B22] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <div className="relative h-80 overflow-hidden group">
              <Image
                src="/skycapture.png" 
                alt="Importadora Sky"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#60A5FA] mb-2">Importadora Sky</h3>
              <p className="text-gray-400 mb-4">
                Sitio web destinado a servicios de importación desde Estados Unidos.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gradient-to-r from-blue-700 to-blue-600 text-white px-3 py-1 rounded-full font-semibold">Wordpress</span>
                <span className="text-xs bg-gradient-to-r from-blue-700 to-blue-600 text-white px-3 py-1 rounded-full font-semibold">Temas Personalizados</span>
                <span className="text-xs bg-gradient-to-r from-blue-700 to-blue-600 text-white px-3 py-1 rounded-full font-semibold">CSS Adicional</span>
              </div>
            </div>
          </a>

          {/* Intranet Inegol */}
          <a 
            href="https://api.whatsapp.com/send?phone=573239007932&text=%C2%A1%20Quiero%20mi%20P%C3%A1gina%20Web%20ya%20mismo%20!%F0%9F%92%BB" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-[#161B22] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <div className="relative h-80 overflow-hidden group">
              <Image
                src="/intracapture.png" 
                alt="Intragod v.01"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#60A5FA] mb-2">Intragod v.01</h3>
              <p className="text-gray-400 mb-4">
                Aplicación web de modelo pago que integra múltiples funcionalidades corporativas.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gradient-to-r from-orange-500 to-orange-400 text-white px-3 py-1 rounded-full font-semibold">Next.js</span>
                <span className="text-xs bg-gradient-to-r from-orange-500 to-orange-400 text-white px-3 py-1 rounded-full font-semibold">Intranet</span>
                <span className="text-xs bg-gradient-to-r from-orange-500 to-orange-400 text-white px-3 py-1 rounded-full font-semibold">Módulos a la medida</span>
                <span className="text-xs bg-gradient-to-r from-orange-500 to-orange-400 text-white px-3 py-1 rounded-full font-semibold">Scraping</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;