import { useTranslation } from '../../hooks/useTranslation';
import { useState, useEffect, useRef } from 'react';

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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: t('projects.ecommerce.title'),
      description: t('projects.ecommerce.description'),
      gradient: 'from-blue-500 to-blue-700',
      shadowColor: 'shadow-blue-500/25',
      tags: [
        { name: 'React', color: 'bg-blue-900 text-blue-300' },
        { name: 'Node.js', color: 'bg-green-900 text-green-300' },
        { name: 'MongoDB', color: 'bg-yellow-900 text-yellow-300' }
      ]
    },
    {
      title: t('projects.taskManagement.title'),
      description: t('projects.taskManagement.description'),
      gradient: 'from-green-500 to-green-700',
      shadowColor: 'shadow-green-500/25',
      tags: [
        { name: 'Next.js', color: 'bg-blue-900 text-blue-300' },
        { name: 'TypeScript', color: 'bg-blue-900 text-blue-300' },
        { name: 'Prisma', color: 'bg-purple-900 text-purple-300' }
      ]
    },
    {
      title: t('projects.portfolio.title'),
      description: t('projects.portfolio.description'),
      gradient: 'from-purple-500 to-purple-700',
      shadowColor: 'shadow-purple-500/25',
      tags: [
        { name: 'React', color: 'bg-blue-900 text-blue-300' },
        { name: 'CSS3', color: 'bg-pink-900 text-pink-300' },
        { name: 'Vercel', color: 'bg-gray-700 text-gray-300' }
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="proyectos" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/40 backdrop-blur-sm"></div>
      
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-white text-lg font-bold z-10 relative">
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
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 relative">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    {project.title}
                  </span>
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-clip-text text-transparent">
                    {project.description}
                  </span>
                </p>
                
                {/* Enhanced Tags with staggered animation */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1 ${tag.color} rounded-full text-sm font-medium transform transition-all duration-500 hover:scale-110 hover:shadow-lg hover:-translate-y-1 border border-gray-600/50 hover:border-gray-500/70 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${0.4 + index * 0.2 + tagIndex * 0.1}s` }}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                {/* Enhanced Links with better styling */}
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="group/link text-blue-400 hover:text-blue-300 font-medium transform transition-all duration-300 hover:scale-105 relative overflow-hidden px-3 py-2 rounded-lg hover:bg-blue-400/10 border border-blue-400/20 hover:border-blue-400/40"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span>{t('projects.viewDemo')}</span>
                      <span className="transform transition-transform duration-300 group-hover/link:translate-x-1 text-sm">→</span>
                    </span>
                    <div className="absolute inset-0 bg-blue-400/10 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>
                  <a 
                    href="#" 
                    className="group/link text-blue-400 hover:text-blue-300 font-medium transform transition-all duration-300 hover:scale-105 relative overflow-hidden px-3 py-2 rounded-lg hover:bg-blue-400/10 border border-blue-400/20 hover:border-blue-400/40"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span>{t('projects.viewCode')}</span>
                      <span className="transform transition-transform duration-300 group-hover/link:translate-x-1 text-sm">→</span>
                    </span>
                    <div className="absolute inset-0 bg-blue-400/10 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>
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
