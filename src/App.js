import LanguageSelector from "./components/LanguageSelector";
import GameDisplay from "./components/GameDisplay";
import { useState } from "react";
import {
  german_english,
  french_english,
  spanish_english,
  german_norwegian,
  french_norwegian,
  spanish_norwegian,
} from "./dictionaries/listsOfLanguages";
import ScoreDisplay from "./components/ScoreDisplay";
import BarScore from './components/BarScore'
import BarProgress from './components/BarProgress'

import Button from "@mui/material/Button";

function App() {

  const [languageDict, setLanguageDict] = useState(german_norwegian);
  const [question, setQuestion] = useState(["ger1", "eng1", "ger3", "ger2"]); //note
  const [isGameActive, setIsGameActive] = useState(false);

  const [score, setScore] = useState(0);
  const [scoreboard, setScoreboard] = useState(false);

  const [answered, setAnswered] = useState(0); //number of questions answered

  const [progressValue, setProgressValue] = useState(0); //progress in game (0, 10, 20, ... 100)
  const [gameScore, setGameScore] = useState(0);

  const [language, setLanguage] = useState("german"); //note

  let gameLength = 10; //num of questions


  //Generates question based on the dictionaries.
  const generateQuestion = () => {
    let mydict = languageDict[0];
    let mydict_a = languageDict[1];
    let ans = [];
    let randNum = Math.floor(Math.random() * mydict.length);
    ans.push(mydict_a[randNum], mydict[randNum]);
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

  const toggleButton = () => {
    setScore(0);
    setAnswered(0);
    setGameScore(0);
    setProgressValue(0);
    if (!isGameActive) {
      //Start the game, run the gameplay:
      updateQuestion();
      setScoreboard(false);
    }
    setIsGameActive(!isGameActive); //toggles
  }

  //Updates, and sets the question.
  const updateQuestion = () => {
    let newQuestion = generateQuestion();
    setQuestion(newQuestion);
  }

  //num { 0 or 1}, updates score and answer
  const postAnswerPoints = (num) => {
    let newScore = score + num;
    let newAnswered = answered + 1;
    setScore(newScore);
    setAnswered(newAnswered);
    //Checks if game is over
    if (answered >= gameLength - 1) {//game over
      setIsGameActive(false);
      setScoreboard(true);
    }
    setGameScore((newScore * 100) / gameLength);
    setProgressValue((newAnswered * 100) / gameLength);
    //update Question after answer is posted
    updateQuestion();
  }

  const handleUpdateLanguage = (language) => {
    //reset the game
    setGameScore(0);
    setProgressValue(0);
    setIsGameActive(false);
    setScoreboard(false);
    setLanguage(language);

    if (language === "german") {
      setLanguageDict(german_norwegian);
    } else if (language === "spanish") {
      setLanguageDict(spanish_norwegian);
    } else {
      setLanguageDict(french_norwegian);
    }
  }

  return (
    <div className={`App ${language}-bg`}>
      <div className={`main-container`}>
        <div>

          <div>
            <LanguageSelector onClick={handleUpdateLanguage} />
          </div>

          <div className='center-parent'>
            <div className='gameplay-container '>
              <div className='fullwidth'>
                <Button fullWidth variant="contained" onClick={toggleButton}>
                  {isGameActive ? "Reset" : "Start"}
                </Button>
              </div>

              <div className="progressBar-div">
                {/* {`ProgressValue: ${progressValue}`} */}
                <BarProgress progressScore={progressValue} />
              </div>

              <div>
                {/* {`gameScore: ${gameScore}`} */}
                <BarScore score={gameScore} />
              </div>


              <div className='game-display'>
                {/* <div>Scoreboard: {scoreboard ? 'yes' : 'no'}</div> */}
                <GameDisplay
                  question={question}
                  postCorrect={() => postAnswerPoints(1)}
                  postIncorrect={() => postAnswerPoints(0)}
                  isGameActive={isGameActive}

                  scoreboardActive={scoreboard}
                  score={score}
                  gameLength={gameLength}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
