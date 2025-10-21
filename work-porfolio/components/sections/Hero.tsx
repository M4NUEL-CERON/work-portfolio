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
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={`hero-particle-${i}`}
            className={`absolute rounded-full opacity-60 ${
              i % 4 === 0 ? 'w-2 h-2 bg-blue-400' : 
              i % 4 === 1 ? 'w-1 h-1 bg-cyan-400' : 
              i % 4 === 2 ? 'w-1.5 h-1.5 bg-purple-400' :
              'w-1 h-1 bg-green-400'
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

      {/* Side decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left side decorative elements */}
        <div className="absolute left-8 top-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute left-16 top-1/2 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute left-4 bottom-1/3 w-20 h-20 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Right side decorative elements */}
        <div className="absolute right-8 top-1/3 w-28 h-28 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute right-12 bottom-1/4 w-36 h-36 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute right-6 top-2/3 w-16 h-16 bg-gradient-to-br from-green-500/10 to-purple-500/10 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left side geometric shapes */}
        <div className="absolute left-12 top-1/5 w-8 h-8 bg-blue-400/20 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute left-6 top-3/5 w-6 h-6 bg-cyan-400/20 rotate-12 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
        <div className="absolute left-20 bottom-1/4 w-4 h-4 bg-purple-400/20 rotate-45 animate-spin" style={{ animationDuration: '25s' }}></div>
        
        {/* Right side geometric shapes */}
        <div className="absolute right-16 top-1/6 w-10 h-10 bg-green-400/20 rotate-12 animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }}></div>
        <div className="absolute right-8 top-2/5 w-5 h-5 bg-pink-400/20 rotate-45 animate-spin" style={{ animationDuration: '22s' }}></div>
        <div className="absolute right-12 bottom-1/5 w-7 h-7 bg-blue-400/20 rotate-12 animate-spin" style={{ animationDuration: '16s', animationDirection: 'reverse' }}></div>
      </div>

      {/* Cool Effects in Small Areas */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* 1. Matrix Code Rain - Top Left */}
        <div className="absolute left-4 top-8 w-32 h-20 overflow-hidden">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i}
              className="absolute text-green-400 font-mono text-xs animate-fall"
              style={{
                left: `${i * 15}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            >
              {['010101', '110011', '101010', '011001', '100110', '001100', '111000', '000111'][i]}
            </div>
          ))}
        </div>

        {/* 2. Energy Lines - Top Right */}
        <div className="absolute right-4 top-8 w-40 h-20">
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path d="M 0 50% Q 25% 30% 50% 50% T 100% 50%" 
                  stroke="url(#energyGradient)" 
                  strokeWidth="2" 
                  fill="none" 
                  className="animate-pulse" />
            <path d="M 0 70% Q 25% 50% 50% 70% T 100% 70%" 
                  stroke="url(#energyGradient)" 
                  strokeWidth="1" 
                  fill="none" 
                  className="animate-pulse" 
                  style={{ animationDelay: '0.5s' }} />
          </svg>
        </div>

        {/* 3. Sound Waves - Bottom Left */}
        <div className="absolute left-4 bottom-8 w-24 h-24">
          {Array.from({ length: 4 }).map((_, i) => (
            <div 
              key={i}
              className="absolute inset-0 border border-cyan-400/40 rounded-full animate-ping" 
              style={{ 
                animationDelay: `${i * 0.3}s`,
                animationDuration: '2s'
              }} 
            />
          ))}
        </div>

        {/* 4. Holographic Grid - Bottom Right */}
        <div className="absolute right-4 bottom-8 w-32 h-32">
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="hologramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#EC4899" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <rect x="10%" y="10%" width="80%" height="80%" 
                  stroke="url(#hologramGradient)" 
                  strokeWidth="1" 
                  fill="none" 
                  className="animate-pulse" />
            <line x1="50%" y1="10%" x2="50%" y2="90%" 
                  stroke="url(#hologramGradient)" 
                  strokeWidth="1" 
                  className="animate-pulse" 
                  style={{ animationDelay: '0.5s' }} />
            <line x1="10%" y1="50%" x2="90%" y2="50%" 
                  stroke="url(#hologramGradient)" 
                  strokeWidth="1" 
                  className="animate-pulse" 
                  style={{ animationDelay: '1s' }} />
          </svg>
        </div>

        {/* 5. Neural Network - Center Left */}
        <div className="absolute left-8 top-1/2 w-20 h-20">
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse" 
              style={{ 
                left: `${20 + (i % 3) * 30}px`, 
                top: `${20 + Math.floor(i / 3) * 30}px`,
                animationDelay: `${i * 0.2}s`
              }} 
            />
          ))}
        </div>

        {/* 6. Floating Particles - Center Right */}
        <div className="absolute right-8 top-1/2 w-20 h-20">
          {Array.from({ length: 5 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full animate-bounce" 
              style={{ 
                left: `${20 + (i * 15)}px`, 
                top: `${20 + (i * 12)}px`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: '2s'
              }} 
            />
          ))}
        </div>

        {/* 7. Digital Glitch - Top Center */}
        <div className="absolute left-1/2 top-4 transform -translate-x-1/2 w-24 h-8">
          <div className="text-cyan-400 font-mono text-xs animate-pulse">
            <div className="animate-pulse">01010101</div>
            <div className="animate-pulse" style={{ animationDelay: '0.5s' }}>11001100</div>
          </div>
        </div>

        {/* 8. Radar Scan - Bottom Center */}
        <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 w-16 h-16">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border border-green-400/60 rounded-full animate-spin" 
                 style={{ animationDuration: '4s' }} />
            <div className="absolute inset-2 border border-green-400/40 rounded-full animate-spin" 
                 style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-green-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
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
