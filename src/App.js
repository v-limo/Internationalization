import React from "react";
import { useTranslation } from "react-i18next";

import "./App.css";

function App() {
  const { t, i18n } = useTranslation();

  const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "Arabic" },
    { code: "fi", name: "Finnish" },
    { code: "sw", name: "Swahili" },
  ];

  const handleLanguageChange = async (code) => {
    await i18n.changeLanguage(code); // the code (ie en) is the important thing here, works without await but the line is async.
  };

  const currentLanguageCode = i18n.language;

  const currentLanguageName = languages.find(
    (l) => l.code === currentLanguageCode
    // || l.code.contains(currentLanguageCode)
  )?.name;

  console.log(currentLanguageName);

  return (
    <div className="App">
      <h2>{t(`welcome`)}</h2>
      <div className="selections">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
          >
            {lang.name}
          </button>
        ))}
      </div>
      <p>{t("current_date", { date: new Date() })}</p>
      <p>Testing for none translated content</p>
      <p>Current selected language : {currentLanguageName}</p>
    </div>
  );
}

export default App;
