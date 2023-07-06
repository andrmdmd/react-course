import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
  if (props.data.length === 0)
    return <p>No expenses found...</p>;
    return <ul className="expenses-list">
        {props.data.map(item => <ExpenseItem key={item.id} expense={item}/>)}
    </ul>
}

export default ExpensesList;
