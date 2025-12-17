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
          <div className="bg-[#161B22] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-80 overflow-hidden">
              <img 
                src="/greencapture.png" 
                alt="Green Consulting Engineering"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#60A5FA] mb-2">Green Consulting Engineering</h3>
              <p className="text-gray-400 mb-4">
                Corporate website for sustainable and environmental engineering consulting.
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
                View Website →
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
                Educational platform to explain laws in a simple and accessible way.
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
                View Website →
              </a>
            </div>
          </div>

          {/* Importadora Sky */}
          <div className="bg-[#161B22] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-80 overflow-hidden">
              <img 
                src="/skycapture.png" 
                alt="Importadora Sky"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#60A5FA] mb-2">Importadora Sky</h3>
              <p className="text-gray-400 mb-4">
                Website for import services from the United States.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gray-700 text-[#00E5FF] px-3 py-1 rounded-full">Wordpress</span>
                <span className="text-xs bg-gray-700 text-[#00E5FF] px-3 py-1 rounded-full">Custom Themes</span>
                <span className="text-xs bg-gray-700 text-[#00E5FF] px-3 py-1 rounded-full">Additional CSS</span>
              </div>
              <a 
                href="https://importadorasky.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-[#3B82F6] hover:text-[#60A5FA] font-semibold transition-colors"
              >
                View Website →
              </a>
            </div>
          </div>

          {/* Intragod */}
          <div className="bg-[#161B22] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-80 overflow-hidden">
              <img 
                src="/intracapture.png" 
                alt="Intragod v.01"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-[#60A5FA] mb-2">Intragod v.01</h3>
              <p className="text-gray-400 mb-4">
                Web application with a payment model that integrates multiple corporate functionalities.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-gray-700 text-[#00E5FF] px-3 py-1 rounded-full">Next.js</span>
                <span className="text-xs bg-gray-700 text-[#00E5FF] px-3 py-1 rounded-full">Intranet</span>
                <span className="text-xs bg-gray-700 text-[#00E5FF] px-3 py-1 rounded-full">Custom Modules</span>
                <span className="text-xs bg-gray-700 text-[#00E5FF] px-3 py-1 rounded-full">Scraping</span>
              </div>
              <a 
                href="https://api.whatsapp.com/send?phone=573239007932&text=I%20want%20my%20website%20right%20now!%F0%9F%92%BB" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-[#3B82F6] hover:text-[#60A5FA] font-semibold transition-colors"
              >
                Contact us for more information →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
