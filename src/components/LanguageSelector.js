import React from "react";
import { useState } from "react";
import LanguageFlag from "./LanguageFlag";
import frenchFlag from "../images/french.jpeg";
import germanFlag from "../images/german.jpeg";
import spanishFlag from "../images/spanish.jpeg";
import "../components/LanguageSelector.css";

function LanguageSelector(props) {
  let languages = ["german", "spanish", "french"];
  let flags = [germanFlag, spanishFlag, frenchFlag];
  const [language, setLanguage] = useState("german");

  function handleUpdateLanguage(name) {
    setLanguage(name);
    props.onClick(name);
  }

  return (
    <div>
      <div className="language-selector-container">
        {languages.map((lang, index) => (
          <LanguageFlag
            key={index}
            text={lang}
            img={flags[index]}
            onClick={handleUpdateLanguage}
            selectedLanguage={language}
          />
        ))}
      </div>
      <h3>{language.toUpperCase()}</h3>
    </div>
  );
}

export default LanguageSelector;
