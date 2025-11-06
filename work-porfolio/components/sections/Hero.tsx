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
      



      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 items-center">
          {/* Content - Left side */}
          <div className="text-center md:text-left md:ml-32">
        {/* Enhanced name with underline animation */}
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <h1 className="text-4xl pt-20 sm:text-7xl font-bold text-white mb-4 relative">
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

        {/* Title with glow effect */}
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          <div className="text-xl md:text-2xl mb-3 font-medium relative">
            <span className="bg-gradient-to-r from-white via-blue-300 to-white bg-clip-text text-transparent relative inline-block">
              {t('hero.title')}
              {/* Subtle glow effect - limited to text */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-blue-300/20 to-white/10 blur-sm -z-10 rounded-lg"></div>
            </span>
          </div>
        </div>

        {/* Simplified description */}
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: '1s' }}
        >
          <div className="text-lg text-gray-400 mb-6 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            {t('hero.description')}
          </div>
        </div>

        {/* Simplified buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start transform transition-all duration-1000 ${
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
            className="mb-10 px-6 py-3 bg-transparent text-blue-400 border border-blue-400 rounded-lg font-medium transition-all duration-300 hover:bg-blue-400 hover:text-gray-900 hover:shadow-lg hover:shadow-blue-400/25 hover:-translate-y-1"
          >
            {t('hero.contact')}
          </a>
        </div>
          </div>

          {/* Photo Frame - Right side */}
          <div className="flex md:justify-right md:ml-28 mb-5 md:mb-0 justify-center">
            <div className="relative group">
              {/* Main frame */}
              <div className="relative w-72 h-72 rounded-2xl overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20 transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-blue-500/30">
                {/* Your photo */}
                <img 
                  src="/images/WhatsApp Image 2025-08-06 at 1.41.40 PM.jpeg" 
                  alt="Manuel Cerón" 
                  className="w-full h-full object-cover"
                />
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl border-2 border-blue-400/50 animate-pulse"></div>
                
                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-blue-400/60"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-blue-400/60"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-blue-400/60"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-blue-400/60"></div>
              </div>
              
              {/* Floating particles around frame */}
              <div className="absolute -top-2 -left-2 w-3 h-3 bg-blue-400/40 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-cyan-400/40 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-400/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-cyan-400/40 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
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
