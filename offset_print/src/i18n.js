import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


import global_en from "./translations/en/global.json"
import global_sq from "./translations/sq/global.json"
import global_mk from "./translations/mk/global.json"


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        resources: {
            en: {
                translation: global_en
            },
            sq: {
                translation: global_sq
            },
            mk: {
                translation: global_mk
            }
        }
    });

export default i18n;