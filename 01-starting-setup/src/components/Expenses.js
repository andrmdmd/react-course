import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses"> 
      {props.data.map((item) => (
        <ExpenseItem expense={item} />
      ))}
    </div>
  );
}

export default Expenses;
