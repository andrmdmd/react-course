function ResultItem(props) {
  return (
    <tr>
      <td>{props.data.year}</td>
      <td>${props.data.savingsEndOfYear.toFixed(2)}</td>
      <td>${props.data.yearlyInterest.toFixed(2)}</td>
      <td>{(props.data.savingsEndOfYear - props.initInv - props.data.yearlyContribution * props.data.year).toFixed(2)}%</td>
      <td>{props.initInv + props.data.yearlyContribution * props.data.year}</td>
    </tr>
  );
}

export default ResultItem;
