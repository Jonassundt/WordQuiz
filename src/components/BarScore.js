
function BarScore({ score }) {
  if (score < 0 || score > 100) {
    console.error("Score should be between 0 and 100");
    return null;
  }

  const numOfColoredBars = Math.round((score / 100) * 10);

  let barColor;
  if (numOfColoredBars < 2) {
    barColor = "red";
  } else if (numOfColoredBars < 4) {
    barColor = "yellow";
  } else if(numOfColoredBars < 6) {
    barColor = "green";
  } else{
    barColor='lightgreen'
  }

  const bars = Array.from({ length: 10 }, (_, index) => (
    <div
      key={index}
      className={`bar ${index < numOfColoredBars ? barColor : "empty"}`}
    ></div>
  ));

  return <div className="scorebar-progress">{bars}</div>;
}

export default BarScore;
