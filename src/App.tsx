import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages, languages } from './Locales/i18n'

function App() {
  const { t, i18n } = useTranslation();
  
  const handleChangeLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
  }
  
  return (
    <div>
      <p>{t('hello')}</p>
      <p>{t('bye')}</p>
      { languages.map(lang=> (
        <button key={lang} onClick={() => handleChangeLanguage(lang)}>
          {t(`language_${lang}`)}
        </button>
      ))}
    </div>
  );
}

export default App;
