import { useTranslation } from '../../hooks/useTranslation';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="proyectos" className="py-20 relative">
      <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t('projects.title')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <span className="text-white text-lg font-medium">{t('projects.ecommerce.title')}</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">{t('projects.ecommerce.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('projects.ecommerce.description')}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-yellow-900 text-yellow-300 rounded-full text-sm">MongoDB</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">{t('projects.viewDemo')}</a>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">{t('projects.viewCode')}</a>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700">
            <div className="h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
              <span className="text-white text-lg font-medium">{t('projects.taskManagement.title')}</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">{t('projects.taskManagement.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('projects.taskManagement.description')}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-purple-900 text-purple-300 rounded-full text-sm">Prisma</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">{t('projects.viewDemo')}</a>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">{t('projects.viewCode')}</a>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
              <span className="text-white text-lg font-medium">{t('projects.portfolio.title')}</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">{t('projects.portfolio.title')}</h3>
              <p className="text-gray-300 mb-4">
                {t('projects.portfolio.description')}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-pink-900 text-pink-300 rounded-full text-sm">CSS3</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">Vercel</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">{t('projects.viewDemo')}</a>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">{t('projects.viewCode')}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
