import React from 'react';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#00E5FF] text-center mb-4">Nuestro Trabajo</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Proyectos que demuestran nuestra pasión por la tecnología y el diseño de vanguardia. ¿Quieres estar aquí? Contáctanos.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Green Consulting */}
          <div className="bg-[#161B22] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-80 overflow-hidden">
              <img 
                src="/greencapture.png" 
                alt="Green Consulting Ingeniería"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#60A5FA] mb-2">Green Consulting Ingeniería</h3>
              <p className="text-gray-400 mb-4">
                Sitio web corporativo para consultoría de ingeniería sostenible y ambiental.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gray-700 text-[#00E5FF] px-3 py-1 rounded-full">HTML</span>
                <span className="text-xs bg-gray-700 text-[#00E5FF] px-3 py-1 rounded-full">CSS</span>
                <span className="text-xs bg-gray-700 text-[#00E5FF] px-3 py-1 rounded-full">JS</span>
              </div>
              <a 
                href="https://greenconsultingingenieria.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-[#3B82F6] hover:text-[#60A5FA] font-semibold transition-colors"
              >
                Ver Página →
              </a>
            </div>
          </div>

          {/* Ley Explico */}
          <div className="bg-[#161B22] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-80 overflow-hidden">
              <img 
                src="/leycapture.png" 
                alt="Ley Explico"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#60A5FA] mb-2">Ley Explico</h3>
              <p className="text-gray-400 mb-4">
                Plataforma educativa para explicar leyes de manera sencilla y accesible.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gray-700 text-[#00E5FF] px-3 py-1 rounded-full">Next.js</span>
                <span className="text-xs bg-gray-700 text-[#00E5FF] px-3 py-1 rounded-full">Tailwind.css</span>
                <span className="text-xs bg-gray-700 text-[#00E5FF] px-3 py-1 rounded-full">Education</span>
              </div>
              <a 
                href="https://ley-explico.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-[#3B82F6] hover:text-[#60A5FA] font-semibold transition-colors"
              >
                Ver Página →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;