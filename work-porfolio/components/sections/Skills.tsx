import { useTranslation } from '../../hooks/useTranslation';
import { useState, useEffect, useRef } from 'react';

export default function Skills() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [visibleTags, setVisibleTags] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate tags appearance
          animateTags();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateTags = () => {
    const totalTags = 19; // Total number of skill tags
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < totalTags) {
        setVisibleTags(prev => [...prev, currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  };

  const frontendTags = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'];
  const backendTags = ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'GraphQL'];
  const toolsTags = ['Git', 'Docker', 'AWS', 'Figma', 'VS Code', 'Vercel'];

  return (
    <section ref={sectionRef} id="habilidades" className="py-20 relative">
      <div className="absolute inset-0 bg-gray-800/50 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title with fade-in */}
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t('skills.title')}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend Card */}
          <div 
            className={`group bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform transition-all duration-1000 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-blue-500/20 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-blue-300 transition-colors duration-300">
              {t('skills.frontend')}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {frontendTags.map((tag, index) => (
                <span 
                  key={tag}
                  className={`px-4 py-2 bg-blue-900 text-blue-300 rounded-full text-sm font-medium transform transition-all duration-500 hover:scale-110 hover:bg-blue-800 hover:text-blue-200 hover:shadow-lg ${
                    visibleTags.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Backend Card */}
          <div 
            className={`group bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform transition-all duration-1000 hover:scale-105 hover:-rotate-1 hover:shadow-2xl hover:shadow-green-500/20 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-green-300 transition-colors duration-300">
              {t('skills.backend')}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {backendTags.map((tag, index) => (
                <span 
                  key={tag}
                  className={`px-4 py-2 bg-green-900 text-green-300 rounded-full text-sm font-medium transform transition-all duration-500 hover:scale-110 hover:bg-green-800 hover:text-green-200 hover:shadow-lg ${
                    visibleTags.includes(index + 7) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Tools Card */}
          <div 
            className={`group bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform transition-all duration-1000 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-purple-500/20 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-purple-300 transition-colors duration-300">
              {t('skills.tools')}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {toolsTags.map((tag, index) => (
                <span 
                  key={tag}
                  className={`px-4 py-2 bg-purple-900 text-purple-300 rounded-full text-sm font-medium transform transition-all duration-500 hover:scale-110 hover:bg-purple-800 hover:text-purple-200 hover:shadow-lg ${
                    visibleTags.includes(index + 13) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${0.7 + index * 0.1}s` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
