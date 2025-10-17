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
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      {/* Additional floating particles for Hero */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`hero-particle-${i}`}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `heroFloat ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
        {/* Greeting with fade-in and slide-up */}
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-blue-400">
              {typedText}
            </span>
          </h1>
        </div>

        {/* Title with fade-in and slide-up */}
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
            {t('hero.title')}
          </p>
        </div>

        {/* Description with fade-in and slide-up */}
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
        </div>

        {/* Buttons with enhanced animations */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '1.4s' }}
        >
          <a 
            href="#proyectos" 
            className="group px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-all duration-500 inline-block hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10">{t('hero.viewProjects')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </a>
          
          <a 
            href="#contacto" 
            className="group px-6 py-3 bg-transparent text-blue-400 border-2 border-blue-400 rounded-lg font-medium transition-all duration-500 inline-block hover:bg-blue-400 hover:text-gray-900 hover:shadow-2xl hover:shadow-blue-400/25 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10">{t('hero.contact')}</span>
            <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </a>
        </div>

      </div>

      <style jsx>{`
        @keyframes heroFloat {
          0%, 100% {
            opacity: 0;
            transform: translateY(0px) scale(0);
          }
          25% {
            opacity: 0.6;
            transform: translateY(-20px) scale(1);
          }
          75% {
            opacity: 0.2;
            transform: translateY(-40px) scale(0.5);
          }
        }
      `}</style>
    </section>
  );
}
