import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const values = props.dataPoints.map((item) => item.value);
  const totalMax = Math.max(...values);

  return (
    <div className="chart">
      {props.dataPoints.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={totalMax}
          label={item.label}
        />
      ))}
    </div>
  );
}

export default Chart;
