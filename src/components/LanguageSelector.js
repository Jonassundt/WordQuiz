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
  const [norwLanguage, setNorwLanguage] = useState("tysk");

  function handleUpdateLanguage(name) {
    setLanguage(name);
    props.onClick(name);
    if (name === "german") {
      setNorwLanguage("tysk");
    } else if (name === "spanish") {
      setNorwLanguage("spansk");
    } else {
      setNorwLanguage("fransk");
    }
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
      <h3>{norwLanguage.toUpperCase()}</h3>
    </div>
  );
}

export default LanguageSelector;
