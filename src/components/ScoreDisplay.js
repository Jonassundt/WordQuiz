
function ScoreDisplay(props) {
  //props: isActive, score, gameLength

  return (
    <div>
      {props.score < 5 ?
        (<div>
          <i>
            Du scoret <b>{props.score}</b> av <b>{props.gameLength}</b> ord riktig... Prøv igjen for å score bedre?
              </i>
        </div>)
        :
        (<div>
          <i>
            Du scoret faktisk <b>{props.score}</b> av{" "}
            <b>{props.gameLength}</b> ord riktig! Imponerende!
              </i>
        </div>)
      }
    </div>
  );
}

export default ScoreDisplay;
