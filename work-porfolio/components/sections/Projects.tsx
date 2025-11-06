import { useTranslation } from '../../hooks/useTranslation';
import { useState, useEffect, useRef } from 'react';
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiNextdotjs, 
  SiTypescript, 
  SiPrisma,
  SiCss3,
  SiVercel
} from 'react-icons/si';

export default function Projects() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1, // Reducido de 0.3 a 0.1 para ser más sensible
        rootMargin: '0px 0px -50px 0px' // Añade un margen para detectar antes
      }
    );

    if (sectionRef.current) {
      // Verificar si ya está visible al montar (para móviles)
      const rect = sectionRef.current.getBoundingClientRect();
      const isAlreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isAlreadyVisible) {
        setIsVisible(true);
      } else {
        observer.observe(sectionRef.current);
      }
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.description'),
      gradient: 'from-blue-500 to-blue-700',
      shadowColor: 'shadow-blue-500/25',
      tags: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' }
      ]
    },
    {
      title: t('projects.taskManagement.title'),
      description: t('projects.taskManagement.description'),
      gradient: 'from-green-500 to-green-700',
      shadowColor: 'shadow-green-500/25',
      tags: [
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Prisma', icon: SiPrisma, color: '#2D3748' }
      ]
    },
    {
      title: t('projects.portfolio.title'),
      description: t('projects.portfolio.description'),
      gradient: 'from-purple-500 to-purple-700',
      shadowColor: 'shadow-purple-500/25',
      tags: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
        { name: 'Vercel', icon: SiVercel, color: '#000000' }
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="proyectos" className="py-20 relative overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced title with gradient */}
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
            <span className="bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-transparent relative inline-block">
              {t('projects.title')}
              {/* Subtle glow effect - limited to text */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-blue-300/20 to-white/10 blur-sm -z-10 rounded-lg"></div>
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700/50 transform transition-all duration-700 hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:${project.shadowColor} hover:border-gray-600/50 relative ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${0.2 + index * 0.2}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Enhanced Image/Header */}
              <div className={`h-40 md:h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-white text-base md:text-lg font-bold z-10 relative px-4 text-center">
                  <span className="bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent">
                    {project.title}
                  </span>
                </span>
                <div className={`absolute inset-0 bg-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-500 ${hoveredCard === index ? 'scale-100' : ''}`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-white/5 blur-xl -z-10 group-hover:bg-white/10 transition-all duration-500"></div>
              </div>

              {/* Enhanced Content */}
              <div className="p-4 md:p-6 relative z-10">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-blue-300 transition-colors duration-300 relative">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    {project.title}
                  </span>
                </h3>
                <p className="text-sm md:text-base text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-clip-text text-transparent">
                    {project.description}
                  </span>
                </p>
                
                {/* Enhanced Tags with Skills style */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                  {project.tags.map((tag, tagIndex) => {
                    const IconComponent = tag.icon;
                    return (
                      <div
                        key={tagIndex}
                        className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-blue-900/40 text-blue-200 rounded-full text-xs md:text-sm font-medium border border-blue-600/40 shadow-[0_0_10px_-2px_rgba(59,130,246,0.4)] transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:bg-blue-800/50 hover:border-blue-400/70 hover:text-blue-100 ${
                          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                        style={{ transitionDelay: `${0.4 + index * 0.2 + tagIndex * 0.1}s` }}
                      >
                        <IconComponent
                          className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:rotate-12"
                          style={{ color: tag.color }}
                        />
                        <span className="transition-all duration-300">{tag.name}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Enhanced Buttons with better responsive design */}
                <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                  <button 
                    type="button"
                    className="group/link flex-1 text-blue-400 hover:text-blue-300 font-medium transform transition-all duration-300 hover:scale-105 relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 rounded-lg hover:bg-blue-400/10 border border-blue-400/20 hover:border-blue-400/40 text-sm md:text-base"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-1.5 md:gap-2">
                      <span>{t('projects.viewDemo')}</span>
                      <span className="transform transition-transform duration-300 group-hover/link:translate-x-1 text-sm md:text-base">→</span>
                    </span>
                    <div className="absolute inset-0 bg-blue-400/10 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                  <button 
                    type="button"
                    className="group/link flex-1 text-blue-400 hover:text-blue-300 font-medium transform transition-all duration-300 hover:scale-105 relative overflow-hidden px-3 py-2 md:px-4 md:py-2.5 rounded-lg hover:bg-blue-400/10 border border-blue-400/20 hover:border-blue-400/40 text-sm md:text-base"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-1.5 md:gap-2">
                      <span>{t('projects.viewCode')}</span>
                      <span className="transform transition-transform duration-300 group-hover/link:translate-x-1 text-sm md:text-base">→</span>
                    </span>
                    <div className="absolute inset-0 bg-blue-400/10 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>
              </div>

              {/* 3D Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${hoveredCard === index ? 'opacity-100' : ''}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
