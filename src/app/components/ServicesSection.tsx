"use client"; // Para animaciones en scroll con Intersection Observer

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type { ServiceItem } from '@/types';

// Iconos específicos para cada servicio
const WebDevIcon = () => (
  <svg className="w-12 h-12 text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const MobileIcon = () => (
  <svg className="w-12 h-12 text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const DesignIcon = () => (
  <svg className="w-12 h-12 text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

const AIIcon = () => (
  <svg className="w-12 h-12 text-white mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);


const servicesData: ServiceItem[] = [
  {
    id: 'web',
    icon: 'code', 
    title: 'Desarrollo Web Avanzado',
    description: 'Aplicaciones web modernas, rápidas y escalables con las últimas tecnologías y frameworks (Next.js, React, Node.js).',
  },
  {
    id: 'mobile',
    icon: 'mobile',
    title: 'Aplicaciones Móviles Nativas e Híbridas',
    description: 'Experiencias móviles fluidas y de alto rendimiento Android, IOS y WebView.',
  },
  {
    id: 'uiux',
    icon: 'design',
    title: 'Diseño UI/UX Futurista',
    description: 'Interfaces atractivas con un enfoque en la experiencia del usuario, tendencias mas allá de lo común y 100% personalizadas.',
  },
  {
    id: 'ai',
    icon: 'ai',
    title: 'Soluciones con IA',
    description: 'Integración de inteligencia artificial para optimizar procesos y crear productos innovadores.',
  },
];

const serviceLinks: Record<string, string> = {
  web: '/desarrollo-web',
  mobile: '/aplicaciones-moviles',
  uiux: '/diseno-ui-ux',
  ai: '/soluciones-ia',
};

const ServiceCard: React.FC<{ item: ServiceItem, isVisible: boolean }> = ({ item, isVisible }) => {
  const IconComponent = item.id === 'web' ? WebDevIcon : item.id === 'mobile' ? MobileIcon : item.id === 'uiux' ? DesignIcon : AIIcon;
  
  return (
    <Link href={serviceLinks[item.id]} className="block">
      <div
        className={`bg-brand-dark-secondary p-8 rounded-xl shadow-xl hover:shadow-glow-blue transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className="flex justify-center md:justify-start">
          <IconComponent />
        </div>
        <h3 className="text-2xl font-semibold text-brand-blue-light mb-3 mt-2">{item.title}</h3>
        <p className="text-brand-muted-text leading-relaxed">{item.description}</p>
        <div className="mt-4 text-brand-blue hover:text-brand-blue-light transition-colors font-semibold">
          Conocer más →
        </div>
      </div>
    </Link>
  );
};


const ServicesSection: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<Record<string, boolean>>({});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({ ...prev, [entry.target.id]: true }));
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.1 } 
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [servicesData]);


  return (
    <section id="services" className="py-20 md:py-28 bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle">
          Transformamos ideas en realidad digital con tu propio enfoque personalizado e identidad de marca.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {servicesData.map((service, index) => (
            <div key={service.id} id={`service-${service.id}`} ref={el => { cardRefs.current[index] = el; }}>
              <ServiceCard item={service} isVisible={!!visibleCards[`service-${service.id}`]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;