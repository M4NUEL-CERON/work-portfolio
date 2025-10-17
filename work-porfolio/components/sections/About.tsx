import { useTranslation } from '../../hooks/useTranslation';
import { useState, useEffect, useRef } from 'react';

export default function About() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [projectsCount, setProjectsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counter animations
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    // Animate projects counter (10+)
    const projectsInterval = setInterval(() => {
      setProjectsCount(prev => {
        if (prev >= 10) {
          clearInterval(projectsInterval);
          return 10;
        }
        return prev + 1;
      });
    }, 100);

    // Animate years counter (2+)
    const yearsInterval = setInterval(() => {
      setYearsCount(prev => {
        if (prev >= 2) {
          clearInterval(yearsInterval);
          return 2;
        }
        return prev + 1;
      });
    }, 200);

    // Animate clients counter (100%)
    const clientsInterval = setInterval(() => {
      setClientsCount(prev => {
        if (prev >= 100) {
          clearInterval(clientsInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);
  };

  return (
    <section ref={sectionRef} id="sobre-mi" className="py-20 relative">
      <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title with fade-in */}
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t('about.title')}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content with staggered fade-in */}
          <div className="space-y-6">
            <div 
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.description1')}
              </p>
            </div>
            <div 
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.description2')}
              </p>
            </div>
          </div>

          {/* Stats with animated counters */}
          <div className="grid grid-cols-3 gap-8">
            <div 
              className={`text-center group transform transition-all duration-1000 hover:scale-110 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              <div className="relative">
                <h3 className="text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {projectsCount}+
                </h3>
                <div className="absolute inset-0 bg-blue-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{t('about.projectsCompleted')}</p>
            </div>

            <div 
              className={`text-center group transform transition-all duration-1000 hover:scale-110 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.8s' }}
            >
              <div className="relative">
                <h3 className="text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {yearsCount}+
                </h3>
                <div className="absolute inset-0 bg-blue-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{t('about.yearsExperience')}</p>
            </div>

            <div 
              className={`text-center group transform transition-all duration-1000 hover:scale-110 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '1s' }}
            >
              <div className="relative">
                <h3 className="text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {clientsCount}%
                </h3>
                <div className="absolute inset-0 bg-blue-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
              <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{t('about.satisfiedClients')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
