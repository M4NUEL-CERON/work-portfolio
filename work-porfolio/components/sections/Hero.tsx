import { useTranslation } from '../../hooks/useTranslation';
import { useState, useEffect } from 'react';

export default function Hero() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullText = "Manuel Cerón";

  useEffect(() => {
    // Start typing effect immediately when component mounts
    setIsVisible(true);
    
    // Typing effect for full text
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 120); // Faster typing: 120ms per character
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      



      <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
        {/* Enhanced name with underline animation */}
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 relative">
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">
                {typedText}
              </span>
              
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transform scale-x-0 animate-pulse" style={{ 
                animation: 'underlineGrow 2s ease-in-out infinite',
                width: '100%'
              }}></div>
            </span>
          </h1>
        </div>

        {/* Simplified title */}
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          <div className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
            {t('hero.title')}
          </div>
        </div>

        {/* Simplified description */}
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          <div className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </div>
        </div>

        {/* Simplified buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '1.4s' }}
        >
          <a 
            href="#proyectos" 
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-1"
          >
            {t('hero.viewProjects')}
          </a>
          
          <a 
            href="#contacto" 
            className="px-6 py-3 bg-transparent text-blue-400 border border-blue-400 rounded-lg font-medium transition-all duration-300 hover:bg-blue-400 hover:text-gray-900 hover:shadow-lg hover:shadow-blue-400/25 hover:-translate-y-1"
          >
            {t('hero.contact')}
          </a>
        </div>

      </div>

      <style jsx>{`
        @keyframes underlineGrow {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }
          50% {
            transform: scaleX(1);
            opacity: 1;
          }
          100% {
            transform: scaleX(0);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
