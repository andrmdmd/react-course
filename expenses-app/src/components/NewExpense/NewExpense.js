import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import FormPlaceholder from "./FormPlaceholder";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const formVisibilityHandler = (value) => {
    setFormVisible(value);
  };

  return (
    <div className="new-expense">
      {isFormVisible ? (
        <ExpenseForm onSubmit={props.onSubmit} onCancel={formVisibilityHandler}/>
      ) : (
        <FormPlaceholder onButtonClick={formVisibilityHandler}/>
      )}
    </div>
  );
};

export default NewExpense;
