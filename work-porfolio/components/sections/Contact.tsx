import { useTranslation } from '../../hooks/useTranslation';
import { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('juanmanuelceronfernandez123@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '573004737692'; // Remove + and spaces
    const message = 'Hola! Me interesa contactarte.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: '#', 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: 'GitHub', 
      href: '#', 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    { 
      name: 'X (Twitter)', 
      href: '#', 
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} id="contacto" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 via-gray-700/40 to-gray-800/50 backdrop-blur-sm"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
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
              {t('contact.title')}
              {/* Subtle glow effect - limited to text */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-blue-300/20 to-white/10 blur-sm -z-10 rounded-lg"></div>
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            {/* Enhanced subtitle and description */}
            <div 
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 group">
                <h3 className="text-3xl font-bold text-white mb-4 relative z-10 group-hover:text-blue-300 transition-colors duration-300">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    {t('contact.subtitle')}
                  </span>
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed relative z-10 group-hover:text-white transition-colors duration-300">
                  <span className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-clip-text text-transparent">
                    {t('contact.description')}
                  </span>
                </p>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-blue-400/5 blur-xl -z-10 group-hover:bg-blue-400/10 transition-all duration-500"></div>
              </div>
            </div>

            {/* Contact details */}
            <div 
              className={`space-y-6 transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              {/* Enhanced Email */}
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-red-500/50 transition-all duration-500 group cursor-pointer overflow-hidden" onClick={copyEmail}>
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/5 via-transparent to-red-600/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="flex items-center relative z-10">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center group-hover:from-red-500 group-hover:to-red-600 transition-all duration-300 shadow-lg shadow-red-500/25">
                    <img 
                      src="/images/logo-png-whitout-bg.jpg" 
                      alt="Gmail" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium">Gmail</p>
                    <p className="text-white font-medium group-hover:text-red-300 transition-colors duration-300">
                      juanmanuelceronfernandez123@gmail.com
                    </p>
                    {emailCopied && (
                      <p className="text-blue-400 text-xs mt-1">✓ Copiado al portapapeles</p>
                    )}
                  </div>
                  {/* Enhanced Copy icon */}
                  <div className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-all duration-300">
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-red-400/5 blur-xl -z-10 group-hover:bg-red-400/10 transition-all duration-500"></div>
              </div>

              {/* Enhanced WhatsApp */}
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-green-500/50 transition-all duration-500 group cursor-pointer overflow-hidden" onClick={openWhatsApp}>
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 via-transparent to-green-600/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="flex items-center relative z-10">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center group-hover:from-green-500 group-hover:to-green-600 transition-all duration-300 shadow-lg shadow-green-500/25">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium">WhatsApp</p>
                    <p className="text-white font-medium group-hover:text-green-300 transition-colors duration-300">+57 300 473 7692</p>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-green-400/5 blur-xl -z-10 group-hover:bg-green-400/10 transition-all duration-500"></div>
              </div>

              {/* Enhanced Google Maps */}
              <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 group overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <div className="flex items-center relative z-10">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/25">
                    <img 
                      src="/images/logo-maps-whitout-bg.webp" 
                      alt="Google Maps" 
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-medium">Google Maps</p>
                    <p className="text-white font-medium group-hover:text-blue-300 transition-colors duration-300">Popayán, Cauca, Colombia</p>
                    <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">🇨🇴 Colombia</p>
                  </div>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-blue-400/5 blur-xl -z-10 group-hover:bg-blue-400/10 transition-all duration-500"></div>
              </div>
            </div>

            {/* Enhanced Social links */}
            <div 
              className={`flex gap-4 transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              {socialLinks.map((link, index) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="group/link flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 relative overflow-hidden p-4 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 backdrop-blur-sm"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {link.icon}
                    <span className="text-sm">{link.name}</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5 transform -skew-x-12 -translate-x-full group-hover/link:translate-x-full transition-transform duration-1000"></div>
                  <div className="absolute inset-0 bg-blue-400/5 blur-xl -z-10 group-hover/link:bg-blue-400/10 transition-all duration-500"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Contact form */}
          <div 
            className={`bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-gray-700/50 backdrop-blur-sm transform transition-all duration-1000 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 hover:border-blue-500/50 relative overflow-hidden ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder={t('contact.form.name')} 
                  className={`w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:scale-105 focus:shadow-lg focus:shadow-blue-500/25 ${
                    focusedField === 'name' ? 'ring-2 ring-blue-500 scale-105 shadow-lg shadow-blue-500/25' : ''
                  }`}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required 
                />
                <div className={`absolute inset-0 bg-blue-500/10 rounded-lg scale-0 transition-transform duration-300 origin-center ${
                  focusedField === 'name' ? 'scale-100' : ''
                }`}></div>
              </div>

              <div className="relative">
                <input 
                  type="email" 
                  placeholder={t('contact.form.email')} 
                  className={`w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:scale-105 focus:shadow-lg focus:shadow-blue-500/25 ${
                    focusedField === 'email' ? 'ring-2 ring-blue-500 scale-105 shadow-lg shadow-blue-500/25' : ''
                  }`}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required 
                />
                <div className={`absolute inset-0 bg-blue-500/10 rounded-lg scale-0 transition-transform duration-300 origin-center ${
                  focusedField === 'email' ? 'scale-100' : ''
                }`}></div>
              </div>

              <div className="relative">
                <input 
                  type="text" 
                  placeholder={t('contact.form.subject')} 
                  className={`w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:scale-105 focus:shadow-lg focus:shadow-blue-500/25 ${
                    focusedField === 'subject' ? 'ring-2 ring-blue-500 scale-105 shadow-lg shadow-blue-500/25' : ''
                  }`}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  required 
                />
                <div className={`absolute inset-0 bg-blue-500/10 rounded-lg scale-0 transition-transform duration-300 origin-center ${
                  focusedField === 'subject' ? 'scale-100' : ''
                }`}></div>
              </div>

              <div className="relative">
                <textarea 
                  placeholder={t('contact.form.message')} 
                  rows={5} 
                  className={`w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:scale-105 focus:shadow-lg focus:shadow-blue-500/25 resize-none ${
                    focusedField === 'message' ? 'ring-2 ring-blue-500 scale-105 shadow-lg shadow-blue-500/25' : ''
                  }`}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                ></textarea>
                <div className={`absolute inset-0 bg-blue-500/10 rounded-lg scale-0 transition-transform duration-300 origin-center ${
                  focusedField === 'message' ? 'scale-100' : ''
                }`}></div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`group w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-all duration-500 transform hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden ${
                  isSubmitting ? 'animate-pulse' : ''
                }`}
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Enviando...' : t('contact.form.submit')}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
