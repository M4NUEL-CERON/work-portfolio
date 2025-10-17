import { useTranslation } from '../../hooks/useTranslation';

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id="habilidades" className="py-20 relative">
      <div className="absolute inset-0 bg-gray-800/50 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t('skills.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('skills.frontend')}</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 bg-blue-900 text-blue-300 rounded-full text-sm font-medium">React</span>
              <span className="px-4 py-2 bg-blue-900 text-blue-300 rounded-full text-sm font-medium">Next.js</span>
              <span className="px-4 py-2 bg-blue-900 text-blue-300 rounded-full text-sm font-medium">TypeScript</span>
              <span className="px-4 py-2 bg-blue-900 text-blue-300 rounded-full text-sm font-medium">Tailwind CSS</span>
              <span className="px-4 py-2 bg-blue-900 text-blue-300 rounded-full text-sm font-medium">JavaScript</span>
              <span className="px-4 py-2 bg-blue-900 text-blue-300 rounded-full text-sm font-medium">HTML5</span>
              <span className="px-4 py-2 bg-blue-900 text-blue-300 rounded-full text-sm font-medium">CSS3</span>
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('skills.backend')}</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 bg-green-900 text-green-300 rounded-full text-sm font-medium">Node.js</span>
              <span className="px-4 py-2 bg-green-900 text-green-300 rounded-full text-sm font-medium">Express</span>
              <span className="px-4 py-2 bg-green-900 text-green-300 rounded-full text-sm font-medium">MongoDB</span>
              <span className="px-4 py-2 bg-green-900 text-green-300 rounded-full text-sm font-medium">PostgreSQL</span>
              <span className="px-4 py-2 bg-green-900 text-green-300 rounded-full text-sm font-medium">REST APIs</span>
              <span className="px-4 py-2 bg-green-900 text-green-300 rounded-full text-sm font-medium">GraphQL</span>
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">{t('skills.tools')}</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-4 py-2 bg-purple-900 text-purple-300 rounded-full text-sm font-medium">Git</span>
              <span className="px-4 py-2 bg-purple-900 text-purple-300 rounded-full text-sm font-medium">Docker</span>
              <span className="px-4 py-2 bg-purple-900 text-purple-300 rounded-full text-sm font-medium">AWS</span>
              <span className="px-4 py-2 bg-purple-900 text-purple-300 rounded-full text-sm font-medium">Figma</span>
              <span className="px-4 py-2 bg-purple-900 text-purple-300 rounded-full text-sm font-medium">VS Code</span>
              <span className="px-4 py-2 bg-purple-900 text-purple-300 rounded-full text-sm font-medium">Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
