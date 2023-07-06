import Chart from "../Chart/Chart";

function ExpensesChart(props) {
  const chartDataPoints = Array.from({ length: 12 }, (_, index) => {
    const date = new Date(0, index);
    return {
      label: date.toLocaleString("en-US", { month: "short" }),
      value: 0,
    };
  });

  for(const expense of props.expenses){
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
}

export default ExpensesChart;
