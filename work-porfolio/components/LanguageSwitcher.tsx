import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    router.push(router.asPath, router.asPath, { locale });
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-gray-800 rounded-lg shadow-lg">
        <button
          onClick={() => changeLanguage('es')}
          className={`px-3 py-2 text-sm font-medium rounded-l-lg transition-colors ${
            router.locale === 'es' 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-300 hover:text-white hover:bg-gray-700'
          }`}
        >
          ES
        </button>
        <button
          onClick={() => changeLanguage('en')}
          className={`px-3 py-2 text-sm font-medium rounded-r-lg transition-colors ${
            router.locale === 'en' 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-300 hover:text-white hover:bg-gray-700'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
