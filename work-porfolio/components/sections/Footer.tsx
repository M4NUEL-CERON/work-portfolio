import { useTranslation } from '../../hooks/useTranslation';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black/60 backdrop-blur-sm text-white py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p>&copy; 2024 Manuel. {t('footer.copyright')}</p>
      </div>
    </footer>
  );
}
