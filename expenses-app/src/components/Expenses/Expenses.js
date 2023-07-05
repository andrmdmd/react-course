import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2020');
  const onFilterHandler = (year) => {
    console.log(year);
    setFilterYear(year);
  }
  return (
    <div className="expenses"> 
    <ExpensesFilter onFilter={onFilterHandler}/>
      {props.data.map((item) => (
        <ExpenseItem expense={item} />
      ))}
    </div>
  );
}

export default Expenses;
