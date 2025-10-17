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
    <section ref={sectionRef} id="proyectos" className="py-20 relative">
      <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title with fade-in */}
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t('projects.title')}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-700 transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:${project.shadowColor} ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${0.2 + index * 0.2}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image/Header */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-white text-lg font-medium z-10">{project.title}</span>
                <div className={`absolute inset-0 bg-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-500 ${hoveredCard === index ? 'scale-100' : ''}`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>
                
                {/* Tags with staggered animation */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1 ${tag.color} rounded-full text-sm transform transition-all duration-500 hover:scale-110 hover:shadow-lg ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${0.4 + index * 0.2 + tagIndex * 0.1}s` }}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                {/* Links with enhanced hover effects */}
                <div className="flex gap-4">
                  <a 
                    href="#" 
                    className="group/link text-blue-400 hover:text-blue-300 font-medium transform transition-all duration-300 hover:scale-105 relative overflow-hidden"
                  >
                    <span className="relative z-10">{t('projects.viewDemo')}</span>
                    <div className="absolute inset-0 bg-blue-400/10 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </a>
                  <a 
                    href="#" 
                    className="group/link text-blue-400 hover:text-blue-300 font-medium transform transition-all duration-300 hover:scale-105 relative overflow-hidden"
                  >
                    <span className="relative z-10">{t('projects.viewCode')}</span>
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
