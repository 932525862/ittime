import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импортируем переводы
import uzTranslations from './locales/uz/uz.json';
import krTranslations from './locales/kr/kr.json';
import ruTranslations from './locales/ru/ru.json';
import enTranslations from './locales/en/en.json';

const resources = {
  uz: {
    translation: uzTranslations
  },
  kr: {
    translation: krTranslations
  },
  ru: {
    translation: ruTranslations
  },
  en: {
    translation: enTranslations
  }
};

// Получаем сохраненный язык из localStorage или используем 'kr' по умолчанию
const savedLanguage = localStorage.getItem('i18nextLng') || 'kr';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'kr',
    interpolation: {
      escapeValue: false
    }
  });

// Сохраняем выбранный язык в localStorage при его изменении
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng);
});

export default i18n;
