import { useTranslation } from '../../hooks/useTranslation';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="sobre-mi" className="py-20 relative">
      <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t('about.title')}</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.description2')}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">10+</h3>
              <p className="text-gray-300">{t('about.projectsCompleted')}</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">2+</h3>
              <p className="text-gray-300">{t('about.yearsExperience')}</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">100%</h3>
              <p className="text-gray-300">{t('about.satisfiedClients')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
