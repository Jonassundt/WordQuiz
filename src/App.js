import Progressbar from "./components/Progressbar";
import LanguageSelector from "./components/LanguageSelector";
import GameDisplay from "./components/GameDisplay";
import { useState, useEffect } from "react";
import {
  german_english,
  french_english,
  spanish_english,
  german_norwegian,
  french_norwegian,
  spanish_norwegian,
} from "./dictionaries/listsOfLanguages";
import ScoreDisplay from "./components/ScoreDisplay";
import Scorebar from "./components/Scorebar";

import Button from "@mui/material/Button";

function App() {
  const [languageDict, setLanguageDict] = useState(german_norwegian);

  let gameLength = 10;

  const [question, setQuestion] = useState(["ger1", "eng1", "ger3", "ger2"]);
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [scoreDisplayActive, setScoreDisplayActive] = useState(false);
  const [answered, setAnswered] = useState(0);
  const [progressValue, setProgressValue] = useState(0);
  const [progressScore, setProgressScore] = useState(0);
  const [language, setLanguage] = useState("german");

  // useEffect(() => {}, [language]);

  //Generates question based on the dictionaries.
  function generateQuestion() {
    let mydict = languageDict[0];
    let mydict_a = languageDict[1];
    let ans = [];
    let randNum = Math.floor(Math.random() * mydict.length);
    ans.push(mydict_a[randNum]);
    ans.push(mydict[randNum]); //simplify
    let randNum1 = Math.floor(Math.random() * mydict.length);
    let randNum2 = Math.floor(Math.random() * mydict.length);
    while (
      randNum1 === randNum ||
      randNum2 === randNum ||
      randNum1 === randNum2
    ) {
      randNum1 = Math.floor(Math.random() * mydict.length);
      randNum2 = Math.floor(Math.random() * mydict.length);
    }
    ans.push(mydict[randNum1]);
    ans.push(mydict[randNum2]);
    return ans;
  }

  function toggleButton() {
    setScore(0);
    setAnswered(0);
    setProgressScore(0);
    setProgressValue(0);
    if (gameActive) {
      //reset the game
      setProgressScore(0);
      setProgressValue(0);
    } else {
      //Start the game, run the gameplay:
      updateQuestion();
      setScoreDisplayActive(false);
    }
    setGameActive(!gameActive); //toggles
  }

  //Updates, and sets the question.
  function updateQuestion() {
    let newQuestion = generateQuestion();
    setQuestion(newQuestion);
  }

  function postAnswerPoints(num) {
    let newScore = score + num;
    let newAnswered = answered + 1;
    //num { 0 or 1}, updates score and answer
    setScore(newScore);
    setAnswered(newAnswered);
    //Checks if game is over
    if (answered >= gameLength - 1) {
      //game over
      // console.log("GAME OVER.");
      setGameActive(false);
      setScoreDisplayActive(true);
    }
    setProgressScore((newScore * 100) / gameLength);
    setProgressValue((newAnswered * 100) / gameLength);
    //update Question after answer is posted
    updateQuestion();
  }

  function handleUpdateLanguage(language) {
    //reset the game
    setProgressScore(0);
    setProgressValue(0);
    setGameActive(false);
    setScoreDisplayActive(false);
    setLanguage(language);
    if (language === "german") {
      // setLanguageDict(german_english);
      setLanguageDict(german_norwegian);
    } else if (language === "spanish") {
      setLanguageDict(spanish_norwegian);
    } else {
      setLanguageDict(french_norwegian);
    }
  }

  return (
    <div className="App">
      <div className={`main-container ${language}-bg`}>
        <div className="content-container">
          <div className="language-selector-div">
            <LanguageSelector onClick={handleUpdateLanguage} />
          </div>
          <div className="toggle-button-div">
            <Button fullWidth variant="contained" onClick={toggleButton}>
              {gameActive ? "Reset" : "Start"}
            </Button>
          </div>
          <div className="progressBar-div">
            <Progressbar val={progressValue} />
          </div>
          <div className="scorebar-container">
            <Scorebar val={progressScore} />
          </div>

          <div className="gameDisplay-div">
            <GameDisplay
              question={question}
              postCorrect={() => postAnswerPoints(1)}
              postIncorrect={() => postAnswerPoints(0)}
              isGameActive={gameActive}
            />
          </div>

          <ScoreDisplay
            isActive={scoreDisplayActive}
            score={score}
            gameLength={gameLength}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
