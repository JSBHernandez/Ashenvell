import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Desarrollo Web Avanzado | Vondervaltz",
  description: "Aplicaciones web modernas, rápidas y escalables con las últimas tecnologías y frameworks como Next.js, React, Node.js, HTML, CSS, JavaScript y WordPress.",
  keywords: "desarrollo web, Next.js, React, Node.js, WordPress, HTML, CSS, JavaScript, aplicaciones web",
};

export default function DesarrolloWebPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D1117] to-[#161B22]">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-[#00E5FF] mb-6">
                Desarrollo Web Avanzado
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8">
                Aplicaciones web modernas, rápidas y escalables con las últimas tecnologías y frameworks
              </p>
              <Link
                href="/#contact"
                className="inline-block bg-[#3B82F6] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#60A5FA] transition-colors shadow-lg"
              >
                Solicitar Presupuesto
              </Link>
            </div>
          </div>
        </section>

        {/* Descripción Detallada */}
        <section className="py-20 px-4 bg-[#161B22]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-8 text-center">
              ¿Por qué elegir nuestro desarrollo web?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Rendimiento Superior</h3>
                <p className="text-gray-400">
                  Sitios web optimizados para cargar en milisegundos, mejorando la experiencia del usuario y el SEO.
                </p>
              </div>
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Diseño Responsivo</h3>
                <p className="text-gray-400">
                  Interfaces que se adaptan perfectamente a cualquier dispositivo: móvil, tablet o desktop.
                </p>
              </div>
              <div className="bg-[#0D1117] p-6 rounded-xl">
                <div className="text-[#3B82F6] text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-[#60A5FA] mb-3">Seguridad Avanzada</h3>
                <p className="text-gray-400">
                  Implementación de las mejores prácticas de seguridad para proteger tu sitio y tus usuarios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tecnologías */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              Tecnologías que Dominamos
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#161B22] p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">Frameworks Modernos</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>Next.js</strong> - Framework React para producción con SSR y SSG</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>React</strong> - Biblioteca JavaScript para interfaces de usuario</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>Node.js</strong> - Entorno de ejecución para JavaScript en el servidor</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#161B22] p-8 rounded-xl border border-gray-800">
                <h3 className="text-2xl font-semibold text-[#60A5FA] mb-4">Tecnologías Base</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>HTML5</strong> - Estructura semántica y accesible</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>CSS3 / Tailwind</strong> - Estilos modernos y responsivos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>JavaScript / TypeScript</strong> - Lógica robusta y tipado seguro</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00E5FF] mr-2">▸</span>
                    <span><strong>WordPress</strong> - CMS para gestión de contenido</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Proceso de Trabajo */}
        <section className="py-20 px-4 bg-[#161B22]">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-[#00E5FF] mb-12 text-center">
              Nuestro Proceso de Desarrollo
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: "01", title: "Análisis", desc: "Entendemos tus necesidades y objetivos" },
                { num: "02", title: "Diseño", desc: "Creamos prototipos y mockups interactivos" },
                { num: "03", title: "Desarrollo", desc: "Codificamos con las mejores prácticas" },
                { num: "04", title: "Entrega", desc: "Lanzamos y ofrecemos soporte continuo" },
              ].map((step) => (
                <div key={step.num} className="text-center">
                  <div className="text-5xl font-bold text-[#3B82F6] mb-4">{step.num}</div>
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#00E5FF] mb-6">
              ¿Listo para llevar tu proyecto web al siguiente nivel?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Contáctanos hoy y descubre cómo podemos ayudarte a crear la aplicación web de tus sueños
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-[#3B82F6] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#60A5FA] transition-colors shadow-lg"
              >
                Iniciar Proyecto
              </Link>
              <Link
                href="/#portfolio"
                className="bg-transparent border-2 border-[#3B82F6] text-[#3B82F6] px-8 py-4 rounded-lg font-semibold hover:bg-[#3B82F6] hover:text-white transition-colors"
              >
                Ver Portafolio
              </Link>
            </div>
          </div>
        </section>
      </div>
  );
}
