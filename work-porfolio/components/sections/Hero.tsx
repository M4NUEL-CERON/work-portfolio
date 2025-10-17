import { useTranslation } from '../../hooks/useTranslation';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
      <div className="text-center max-w-4xl mx-auto px-4 relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          {t('hero.greeting')} <span className="text-blue-400">{t('hero.name')}</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
          {t('hero.title')}
        </p>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#proyectos" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 inline-block hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1">{t('hero.viewProjects')}</a>
          <a href="#contacto" className="px-6 py-3 bg-transparent text-blue-400 border-2 border-blue-400 rounded-lg font-medium transition-all duration-300 inline-block hover:bg-blue-400 hover:text-gray-900">{t('hero.contact')}</a>
        </div>
      </div>
    </section>
  );
}
