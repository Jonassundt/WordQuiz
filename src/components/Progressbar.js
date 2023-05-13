import React from "react";
import "./Progressbar.css";
import LinearProgressWithLabel from "../components/LinearProgressWithLabel";

function Progressbar(props) {
  let progress = props.val;

  return (
    <div>
      <LinearProgressWithLabel value={progress} />
    </div>
  );
}

export default Progressbar;
