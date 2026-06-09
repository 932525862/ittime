import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">{t('notFound.title')}</h1>
        <h2 className="text-4xl font-semibold text-gray-600 mt-4">{t('notFound.subtitle')}</h2>
        <p className="text-gray-500 mt-4 mb-8">
          {t('notFound.description')}
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          {t('notFound.button')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
