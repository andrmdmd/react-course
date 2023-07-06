import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const titleChangedHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangedHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangedHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSubmit(expenseData);

    setAmount("");
    setDate("");
    setTitle("");
  };

  const cancelClickHandler = () => {
    props.onCancel(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            className="new-expense__input"
            onChange={titleChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            min="0.01"
            step="0.01"
            className="new-expense__input"
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={date}
            min="2019-01-01"
            max="2022-12-31"
            className="new-expense__input"
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="reset" className="alternative" onClick={cancelClickHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
