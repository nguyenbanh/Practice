import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEN from "../src/locales/en/translation.json";
import translationKR from "../src/locales/kr/translation.json";

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    lng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: translationEN },
      vi: { translation: translationKR },
    },
  });

export default i18n;
