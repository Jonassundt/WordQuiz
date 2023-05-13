import React from "react";
import "./LanguageFlag.css";

function LanguageFlag(props) {
  const key = props.id;
  const text = props.text;
  const img = props.img || "flagImg";
  const selectedLanguage = props.selectedLanguage;

  function handleClick() {
    props.onClick(text);
  }

  return (
    <div className="flagcontainer" onClick={handleClick}>
      <img
        src={img}
        alt={text}
        className={selectedLanguage === text ? "flag" : "flag grayscaled"}
      />
    </div>
  );
}

export default LanguageFlag;
