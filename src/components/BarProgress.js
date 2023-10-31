

function BarProgress({ progressScore }) {
  if (progressScore < 0 || progressScore > 100) {
    console.error("Progress should be between 0 and 100");
    return null;
  }


  const numOfColoredBars = Math.round((progressScore / 100) * 10);
  let barColorClass = 'bar-progress-ux-color-main'
  
  const bars = Array.from({ length: 10 }, (_, index) => (
    <div
      key={index}
      className={` ${index < numOfColoredBars ? barColorClass : ""} bar-progress-ux`}
    ></div>
  ));

  return <div className="bar-progress">{bars}</div>;
}

export default BarProgress;