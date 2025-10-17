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
    // Animate projects counter (5+)
    const projectsInterval = setInterval(() => {
      setProjectsCount(prev => {
        if (prev >= 5) {
          clearInterval(projectsInterval);
          return 5;
        }
        return prev + 1;
      });
    }, 100);

    // Animate years counter (1+)
    const yearsInterval = setInterval(() => {
      setYearsCount(prev => {
        if (prev >= 1) {
          clearInterval(yearsInterval);
          return 1;
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
    <section ref={sectionRef} id="sobre-mi" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/40 to-gray-900/50 backdrop-blur-sm"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
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
              {t('about.title')}
              {/* Subtle glow effect - limited to text */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-blue-300/20 to-white/10 blur-sm -z-10 rounded-lg"></div>
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Enhanced text content with advanced animations */}
          <div className="space-y-8">
            <div 
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 group">
                <p className="text-lg text-gray-300 leading-relaxed relative z-10 group-hover:text-white transition-colors duration-300">
                  <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
                    {t('about.description1')}
                  </span>
                </p>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-blue-400/5 blur-xl -z-10 group-hover:bg-blue-400/10 transition-all duration-500"></div>
              </div>
            </div>
            <div 
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 group">
                <p className="text-lg text-gray-300 leading-relaxed relative z-10 group-hover:text-white transition-colors duration-300">
                  <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent">
                    {t('about.description2')}
                  </span>
                </p>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-purple-400/5 blur-xl -z-10 group-hover:bg-purple-400/10 transition-all duration-500"></div>
              </div>
            </div>
          </div>

          {/* Enhanced stats with advanced animations */}
          <div className="grid grid-cols-3 gap-6">
            <div 
              className={`text-center group transform transition-all duration-1000 hover:scale-110 hover:-translate-y-2 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 group overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      {projectsCount}+
                    </span>
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm font-medium">
                    {t('about.projectsCompleted')}
                  </p>
                </div>
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-blue-400/5 blur-xl -z-10 group-hover:bg-blue-400/15 transition-all duration-500"></div>
              </div>
            </div>

            <div 
              className={`text-center group transform transition-all duration-1000 hover:scale-110 hover:-translate-y-2 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.8s' }}
            >
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-green-500/50 transition-all duration-500 group overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold mb-2 group-hover:text-green-300 transition-colors duration-300">
                    <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                      {yearsCount}+
                    </span>
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm font-medium">
                    {t('about.yearsExperience')}
                  </p>
                </div>
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-transparent to-green-600/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-green-400/5 blur-xl -z-10 group-hover:bg-green-400/15 transition-all duration-500"></div>
              </div>
            </div>

            <div 
              className={`text-center group transform transition-all duration-1000 hover:scale-110 hover:-translate-y-2 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '1s' }}
            >
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 group overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-4xl font-bold mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                      {clientsCount}%
                    </span>
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm font-medium">
                    {t('about.satisfiedClients')}
                  </p>
                </div>
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-purple-600/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-purple-400/5 blur-xl -z-10 group-hover:bg-purple-400/15 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
