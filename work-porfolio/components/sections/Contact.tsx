import { useTranslation } from '../../hooks/useTranslation';
import { useState, useEffect, useRef } from 'react';

export default function Contact() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const socialLinks = [
    { name: 'LinkedIn', href: '#' },
    { name: 'GitHub', href: '#' },
    { name: 'Twitter', href: '#' }
  ];

  return (
    <section ref={sectionRef} id="contacto" className="py-20 relative">
      <div className="absolute inset-0 bg-gray-800/40 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title with fade-in */}
        <div 
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t('contact.title')}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <div className="space-y-8">
            {/* Subtitle and description */}
            <div 
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">{t('contact.subtitle')}</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('contact.description')}
              </p>
            </div>

            {/* Contact details */}
            <div 
              className={`space-y-4 transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="flex items-center group">
                <strong className="text-white w-20 group-hover:text-blue-300 transition-colors duration-300">{t('contact.email')}</strong>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">manuel@ejemplo.com</span>
              </div>
              <div className="flex items-center group">
                <strong className="text-white w-20 group-hover:text-blue-300 transition-colors duration-300">{t('contact.phone')}</strong>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">+57 300 123 4567</span>
              </div>
              <div className="flex items-center group">
                <strong className="text-white w-20 group-hover:text-blue-300 transition-colors duration-300">{t('contact.location')}</strong>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Colombia</span>
              </div>
            </div>

            {/* Social links */}
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
                  className="group/link text-blue-400 hover:text-blue-300 font-medium transform transition-all duration-300 hover:scale-110 relative overflow-hidden"
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 bg-blue-400/10 scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Contact form */}
          <div 
            className={`bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 transform transition-all duration-1000 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
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
