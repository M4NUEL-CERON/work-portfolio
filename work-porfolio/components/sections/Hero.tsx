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
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/30 backdrop-blur-sm"></div>
      
      {/* Enhanced floating particles for Hero */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={`hero-particle-${i}`}
            className={`absolute rounded-full opacity-60 ${
              i % 3 === 0 ? 'w-2 h-2 bg-blue-400' : 
              i % 3 === 1 ? 'w-1 h-1 bg-cyan-400' : 
              'w-1.5 h-1.5 bg-purple-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `heroFloat ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
        {/* Enhanced name with multiple effects */}
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 relative">
            <span className="relative inline-block">
              {/* Text with gradient and glow */}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl relative inline-block">
                {typedText}
                {/* Glow effect - limited to text */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-blue-500/20 blur-xl -z-10 animate-pulse rounded-lg"></div>
              </span>
              
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transform scale-x-0 animate-pulse" style={{ 
                animation: 'underlineGrow 2s ease-in-out infinite',
                width: '100%'
              }}></div>
            </span>
          </h1>
        </div>

        {/* Enhanced title with typing effect */}
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          <div className="text-xl md:text-2xl text-gray-300 mb-4 font-medium relative">
            <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent relative inline-block">
              {t('hero.title')}
              {/* Subtle glow - limited to text */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 blur-sm -z-10 rounded-lg"></div>
            </span>
          </div>
        </div>

        {/* Enhanced description with better styling */}
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          <div className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            <span className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              {t('hero.description')}
            </span>
          </div>
        </div>

        {/* Refined buttons with elegant animations */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '1.4s' }}
        >
          <a 
            href="#proyectos" 
            className="group px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium transition-all duration-300 inline-block hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>{t('hero.viewProjects')}</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-1 text-sm">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
          
          <a 
            href="#contacto" 
            className="group px-6 py-3 bg-transparent text-blue-400 border border-blue-400 rounded-lg font-medium transition-all duration-300 inline-block hover:bg-blue-400 hover:text-gray-900 hover:shadow-lg hover:shadow-blue-400/25 transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>{t('hero.contact')}</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-1 text-sm">→</span>
            </span>
            <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
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
        
        @keyframes textGlow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(6, 182, 212, 0.6);
          }
        }
      `}</style>
    </section>
  );
}
