import React from "react";
import "../components/ScoreDisplay.css";

function ScoreDisplay(props) {
  return (
    <div>
      {props.isActive ? (
        <div className="scoredisplay-container">
          <div>
            [You scored <b>{props.score}</b> out of <b>{props.gameLength}</b>{" "}
            words correctly.]
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ScoreDisplay;
