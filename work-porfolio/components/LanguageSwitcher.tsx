import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const changeLanguage = (locale: string) => {
    router.push(router.asPath, router.asPath, { locale });
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div 
        className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl border border-gray-700/50 backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:shadow-blue-500/20 hover:border-blue-500/50 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-blue-600/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl"></div>
        
        <div className="relative z-10 flex">
          <button
            onClick={() => changeLanguage('es')}
            className={`relative px-4 py-3 text-sm font-bold rounded-l-xl transition-all duration-300 transform hover:scale-105 ${
              router.locale === 'es' 
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25' 
                : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600'
            }`}
          >
            {/* Flag emoji with animation */}
            <span className="inline-block transform transition-transform duration-300 hover:rotate-12">
              🇪🇸
            </span>
            <span className="ml-2">ES</span>
            
            {/* Active indicator */}
            {router.locale === 'es' && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            )}
          </button>
          
          <button
            onClick={() => changeLanguage('en')}
            className={`relative px-4 py-3 text-sm font-bold rounded-r-xl transition-all duration-300 transform hover:scale-105 ${
              router.locale === 'en' 
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25' 
                : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600'
            }`}
          >
            {/* Flag emoji with animation */}
            <span className="inline-block transform transition-transform duration-300 hover:rotate-12">
              🇺🇸
            </span>
            <span className="ml-2">EN</span>
            
            {/* Active indicator */}
            {router.locale === 'en' && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            )}
          </button>
        </div>
        
        {/* Hover effect overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5 rounded-xl animate-pulse"></div>
        )}
      </div>
    </div>
  );
}
