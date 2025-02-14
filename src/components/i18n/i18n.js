import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import ptBR from './locales/pt-BR/translation.json';
import es from './locales/es/translation.json';

const resources = {
    en: { translation: en },
    'pt-BR': { translation: ptBR },
    es: { translation: es },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)

export default i18n;
