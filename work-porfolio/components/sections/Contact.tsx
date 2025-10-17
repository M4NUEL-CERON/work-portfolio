import { useTranslation } from '../../hooks/useTranslation';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contacto" className="py-20 relative">
      <div className="absolute inset-0 bg-gray-800/40 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t('contact.title')}</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">{t('contact.subtitle')}</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('contact.description')}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <strong className="text-white w-20">{t('contact.email')}</strong>
                <span className="text-gray-300">manuel@ejemplo.com</span>
              </div>
              <div className="flex items-center">
                <strong className="text-white w-20">{t('contact.phone')}</strong>
                <span className="text-gray-300">+57 300 123 4567</span>
              </div>
              <div className="flex items-center">
                <strong className="text-white w-20">{t('contact.location')}</strong>
                <span className="text-gray-300">Colombia</span>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">LinkedIn</a>
              <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">GitHub</a>
              <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">Twitter</a>
            </div>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder={t('contact.form.name')} 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  required 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder={t('contact.form.email')} 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  required 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder={t('contact.form.subject')} 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  required 
                />
              </div>
              <div>
                <textarea 
                  placeholder={t('contact.form.message')} 
                  rows={5} 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  required
                ></textarea>
              </div>
              <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 inline-block hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 w-full">{t('contact.form.submit')}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
