import React from "react";
import "./GameDisplay.css";
import Button from "@mui/material/Button";

//gameDisplay (shows the current word, and 3 options to choose from) also currentScore

function GameDisplay(props) {
  //takes in array [1,2,3] and returns randomized array ex: [3,1,2]
  function generateRandomSequence(arr) {
    let currentIndex = arr.length;
    let randomIndex, temp;
    // While there are elements to shuffle
    while (currentIndex !== 0) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // Swap it with the current element
      temp = arr[currentIndex];
      arr[currentIndex] = arr[randomIndex];
      arr[randomIndex] = temp;
    }
    return arr;
  }

  // let myRandomSelection = [1, 2, 3];
  let myRandomSelection = generateRandomSequence([1, 2, 3]);
  // Use this for showing options in random sequence

  let question = props.question;

  let currentWord = question[0] || "currentWord";

  function postSelection(idx) {
    console.log(idx);
    if (idx === 1) {
      props.postCorrect();
    } else {
      props.postIncorrect();
    }
  }

  return (
    <div className="game-display">
      <h3>Language Quiz</h3>
      {props.isGameActive ? (
        <div className="option-list">
          <h2 className="current-word">
            <i>{currentWord}</i>
          </h2>
          {myRandomSelection.map((key) => (
            <div className="option-selectable" key={key}>
              <Button
                variant="contained"
                color="primary"
                key={key}
                onClick={() => postSelection(key)}
                fullWidth
              >
                {question[key]}
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default GameDisplay;
