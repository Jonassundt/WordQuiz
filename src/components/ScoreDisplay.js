import React from "react";
import "../components/ScoreDisplay.css";

function ScoreDisplay(props) {
  return (
    <div>
      {props.isActive ? (
        <div className="scoredisplay-container">
          <div>
            Du scoret <b>{props.score}</b> av <b>{props.gameLength}</b> ord
            riktig.
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ScoreDisplay;
