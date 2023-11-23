import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


//i18next  Configuration
const i18nOptions: InitOptions = {
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es: {
      translation: {
        // ... Traducción a español
      },
    },
    en: {
      translation: {
        // ... Translation to English
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(i18nOptions);

export default i18n;
