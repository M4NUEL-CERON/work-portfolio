import { useTranslation } from '../../hooks/useTranslation';
import { useState, useEffect, useRef } from 'react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiAstro, 
  SiVite, 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiHtml5, 
  SiCss3,
  SiAdonisjs,
  SiNodedotjs,
  SiPython,
  SiMysql,
  SiRedis,
  SiAmazon,
  SiGit,
  SiDocker,
  SiVercel,
  SiXml
} from 'react-icons/si';

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
    const totalTags = 18; // Total number of skill tags (updated count)
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < totalTags) {
        setVisibleTags(prev => [...prev, currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 80); // Faster animation
  };

  const frontendTags = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: 'Astro', icon: SiAstro, color: '#FF5D01' },
    { name: 'Vite', icon: SiVite, color: '#646CFF' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' }
  ];
  
  const backendTags = [
    { name: 'AdonisJS', icon: SiAdonisjs, color: '#5A45FF' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    { name: 'AWS', icon: SiAmazon, color: '#FF9900' },
    { name: 'REST APIs', icon: SiAmazon, color: '#FF9900' }
  ];
  
  const toolsTags = [
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'AWS Services', icon: SiAmazon, color: '#FF9900' },
    { name: 'Vercel', icon: SiVercel, color: '#000000' },
    { name: 'XML', icon: SiXml, color: '#FF6600' }
  ];

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
            className={`group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform transition-all duration-1000 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-blue-500/30 hover:border-blue-500/50 relative overflow-hidden ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-blue-300 transition-colors duration-300 relative z-10">
              {t('skills.frontend')}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center relative z-10">
              {frontendTags.map((tag, index) => {
                const IconComponent = tag.icon;
                return (
                  <div 
                    key={tag.name}
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-900 to-blue-800 text-blue-300 rounded-full text-sm font-medium transform transition-all duration-500 hover:scale-110 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-700 hover:text-blue-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1 border border-blue-700/50 hover:border-blue-500/70 ${
                      visibleTags.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <IconComponent 
                      className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" 
                      style={{ color: tag.color }}
                    />
                    <span className="transition-all duration-300">{tag.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Backend Card */}
          <div 
            className={`group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform transition-all duration-1000 hover:scale-105 hover:-rotate-1 hover:shadow-2xl hover:shadow-green-500/30 hover:border-green-500/50 relative overflow-hidden ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-transparent to-green-600/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-green-300 transition-colors duration-300 relative z-10">
              {t('skills.backend')}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center relative z-10">
              {backendTags.map((tag, index) => {
                const IconComponent = tag.icon;
                return (
                  <div 
                    key={tag.name}
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-900 to-green-800 text-green-300 rounded-full text-sm font-medium transform transition-all duration-500 hover:scale-110 hover:bg-gradient-to-r hover:from-green-800 hover:to-green-700 hover:text-green-200 hover:shadow-lg hover:shadow-green-500/25 hover:-translate-y-1 border border-green-700/50 hover:border-green-500/70 ${
                      visibleTags.includes(index + 7) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <IconComponent 
                      className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" 
                      style={{ color: tag.color }}
                    />
                    <span className="transition-all duration-300">{tag.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tools Card */}
          <div 
            className={`group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-gray-700 transform transition-all duration-1000 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-purple-500/30 hover:border-purple-500/50 relative overflow-hidden ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-purple-600/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-purple-300 transition-colors duration-300 relative z-10">
              {t('skills.tools')}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center relative z-10">
              {toolsTags.map((tag, index) => {
                const IconComponent = tag.icon;
                return (
                  <div 
                    key={tag.name}
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-900 to-purple-800 text-purple-300 rounded-full text-sm font-medium transform transition-all duration-500 hover:scale-110 hover:bg-gradient-to-r hover:from-purple-800 hover:to-purple-700 hover:text-purple-200 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1 border border-purple-700/50 hover:border-purple-500/70 ${
                      visibleTags.includes(index + 13) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${0.7 + index * 0.1}s` }}
                  >
                    <IconComponent 
                      className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" 
                      style={{ color: tag.color }}
                    />
                    <span className="transition-all duration-300">{tag.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
