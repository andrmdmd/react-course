import ResultItem from "./ResultItem";

function Results(props) {


  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(item => <ResultItem key={Math.random()} data={item} initInv = {props.initialInvestment}/>)}
      </tbody>
    </table>
  );
}

export default Results;
