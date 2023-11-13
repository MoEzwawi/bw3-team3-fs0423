import { useState } from "react";

const LanguagesDrop = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const languages = ["Italiano", "Inglese", "Spagnolo", "Francese", "Tedesco"];

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <select
        value={selectedLanguage}
        onChange={handleChange}
        id="footer-select"
      >
        <option value="">Seleziona una lingua</option>
        {languages.map((language, i) => (
          <option key={i} value={language}>
            {language}
          </option>
        ))}
      </select>
      {selectedLanguage && <p>Lingua selezionata: {selectedLanguage}</p>}
    </div>
  );
};

export default LanguagesDrop;
