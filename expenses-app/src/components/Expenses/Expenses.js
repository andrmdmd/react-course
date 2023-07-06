import { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2021");
  const onFilterHandler = (year) => {
    setFilterYear(year);
  };
  const filteredData = props.data.filter(
    (item) => item.date.getFullYear().toString() === filterYear
  );

  return (
    <div className="expenses">
      <ExpensesFilter selectedYear={filterYear} onFilter={onFilterHandler} />
      <ExpensesChart expenses={filteredData}/>
      <ExpensesList data={filteredData}/>
    </div>
  );
}

export default Expenses;
