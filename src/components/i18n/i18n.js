import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en/translation.json";
import translationPT from "./locales/pt-BR/translation.json";
import translationES from "./locales/es/translation.json";

const savedLanguage = localStorage.getItem("appLanguage");

function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;

    if (browserLang.startsWith("pt")) {
        return "pt-BR";
    } else if (browserLang.startsWith("es")) {
        return "es";
    } else {
        return "en";
    }
}

const defaultLanguage = savedLanguage || detectBrowserLanguage();

const resources = {
    en: {
        translation: translationEN,
    },
    "pt-BR": {
        translation: translationPT,
    },
    es: {
        translation: translationES,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: defaultLanguage,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

i18n.on("languageChanged", (lng) => {
    localStorage.setItem("appLanguage", lng);
});

export default i18n;
