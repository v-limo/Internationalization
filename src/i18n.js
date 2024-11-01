import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // load translations from locales
  .use(LanguageDetector) // automatically deter user browser language
  .use(initReactI18next) // 
  .init({
    fallbackLng: "en", // default language, use ar make Arabic the default language
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // location of translation, Note, they should be in public folder
    },
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        if (value instanceof Date) {
          return new Intl.DateTimeFormat(lng).format(value);
        }
        return value;
      },
    },
  });
