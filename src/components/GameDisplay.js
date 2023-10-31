//gameDisplay (shows the current word, and 3 options to choose from) also currentScore
import ScoreDisplay from './ScoreDisplay'


const GameDisplay = (props) => {
  
  //takes in array [1,2,3] and returns randomized array ex: [3,1,2]
  const generateRandomSequence = (arr) => {
    let curr = arr.length;
    let randidx, temp;
    // While there are elements to shuffle
    while (curr !== 0) {
      // Pick a remaining element
      randidx = Math.floor(Math.random() * curr);
      curr--;
      // Swap it with the current element
      temp = arr[curr];
      arr[curr] = arr[randidx];
      arr[randidx] = temp;
    }
    return arr;
  }

  let myRandomSelection = generateRandomSequence([1, 2, 3]);
  // Use this for showing options in random sequence

  let question = props.question;

  let currentWord = question[0] || "currentWord";

  function postSelection(idx) {
    if (idx === 1) {
      props.postCorrect();
    } else {
      props.postIncorrect();
    }
  }

  return (
      <div>
        {/* <h3>Word Quiz</h3> */}
        {props.isGameActive ?
          (
            <div className="option-list">
              <h2 className="current-word">
                <i>{currentWord}</i>
              </h2>
              {myRandomSelection.map((key) => (
                <div className="option-selectable" key={key}>
                  <div
                    className='button-style'
                    onClick={() => postSelection(key)}>
                    {question[key]}
                  </div>
                </div>
              ))}
            </div>
          )
          :
          ''
        }
        {props.scoreboardActive ? (<ScoreDisplay
            score={props.score}
            gameLength={props.gameLength}
          />) : ''}
      </div>
  );
}

export default GameDisplay;
