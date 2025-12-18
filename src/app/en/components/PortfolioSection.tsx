import React from 'react';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-[#0D1117] to-[#161B22]">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Work</h2>
        <p className="section-subtitle">
          Projects that demonstrate our passion for technology and cutting-edge design. Want to be here? Contact us.
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
              <img 
                src="/greencapture.png" 
                alt="Green Consulting Engineering"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#60A5FA] mb-2">Green Consulting Engineering</h3>
              <p className="text-gray-400 mb-4">
                Corporate website for sustainable and environmental engineering consulting.
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
              <img 
                src="/leycapture.png" 
                alt="Ley Explico"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#60A5FA] mb-2">Ley Explico</h3>
              <p className="text-gray-400 mb-4">
                Educational platform to explain laws in a simple and accessible way.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gradient-to-r from-purple-700 to-purple-600 text-white px-3 py-1 rounded-full font-semibold">Next.js</span>
                <span className="text-xs bg-gradient-to-r from-purple-700 to-purple-600 text-white px-3 py-1 rounded-full font-semibold">Tailwind.css</span>
                <span className="text-xs bg-gradient-to-r from-purple-700 to-purple-600 text-white px-3 py-1 rounded-full font-semibold">Education</span>
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
              <img 
                src="/skycapture.png" 
                alt="Importadora Sky"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#60A5FA] mb-2">Importadora Sky</h3>
              <p className="text-gray-400 mb-4">
                Website for import services from the United States.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gradient-to-r from-blue-700 to-blue-600 text-white px-3 py-1 rounded-full font-semibold">Wordpress</span>
                <span className="text-xs bg-gradient-to-r from-blue-700 to-blue-600 text-white px-3 py-1 rounded-full font-semibold">Custom Themes</span>
                <span className="text-xs bg-gradient-to-r from-blue-700 to-blue-600 text-white px-3 py-1 rounded-full font-semibold">Additional CSS</span>
              </div>
            </div>
          </a>

          {/* Intragod */}
          <a 
            href="https://api.whatsapp.com/send?phone=573239007932&text=I%20want%20my%20website%20right%20now!%F0%9F%92%BB" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-[#161B22] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <div className="relative h-80 overflow-hidden group">
              <img 
                src="/intracapture.png" 
                alt="Intragod v.01"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#60A5FA] mb-2">Intragod v.01</h3>
              <p className="text-gray-400 mb-4">
                Web application with a payment model that integrates multiple corporate functionalities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gradient-to-r from-orange-500 to-orange-400 text-white px-3 py-1 rounded-full font-semibold">Next.js</span>
                <span className="text-xs bg-gradient-to-r from-orange-500 to-orange-400 text-white px-3 py-1 rounded-full font-semibold">Intranet</span>
                <span className="text-xs bg-gradient-to-r from-orange-500 to-orange-400 text-white px-3 py-1 rounded-full font-semibold">Custom Modules</span>
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
