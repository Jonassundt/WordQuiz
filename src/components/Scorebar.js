import React, { useEffect, useRef } from "react";
import "../components/Scorebar.css";

function Scorebar({ val }) {
  const barRef = useRef(null);

  useEffect(() => {
    if (barRef.current) {
      barRef.current.style.setProperty("--progress", `${val}%`);
    }
  }, [val]);

  return (
    <div className="progress">
      <div ref={barRef} className="bar" />
    </div>
  );
}

export default Scorebar;
