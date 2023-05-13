import React from "react";
import "../components/ScoreDisplay.css";

function ScoreDisplay(props) {
  return (
    <div>
      {props.isActive ? (
        <div className="scoredisplay-container">
          {props.score < 5 ? (
            <div>
              <i>
                Du scoret <b>{props.score}</b> av <b>{props.gameLength}</b> ord
                riktig... Prøv igjen for å score bedre?
              </i>
            </div>
          ) : (
            <div>
              <i>
                Du scoret faktisk <b>{props.score}</b> av{" "}
                <b>{props.gameLength}</b> ord riktig! Imponerende!
              </i>
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ScoreDisplay;
