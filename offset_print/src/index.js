import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

// import global_en from "./translations/en/global.json"
// import global_sq from "./translations/sq/global.json"
// import global_mk from "./translations/mk/global.json"
// import i18next from "i18next"
// import {I18nextProvider, initReactI18next} from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";

// i18next
//     .use(initReactI18next)
//     .use(LanguageDetector)
//     .init({
//     interpolation: {escapeValue: false},
//     lng: "en",
//     resources:{
//         en: {
//             global: global_en
//         },
//         sq: {
//             global: global_sq
//         },
//         mk:{
//             global: global_mk
//         }
//     },
//         fallbackLng: "en"
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      {/*<I18nextProvider i18n={i18next}>*/}
          <BrowserRouter>
             <App />
          </BrowserRouter>
      {/*</I18nextProvider>*/}

  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
