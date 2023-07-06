import { useState } from "react";

export default function Form(props) {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedInterest, setExpectedInterest] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState("");

  const currentSavingsHandler = (event) => {
    setCurrentSavings(event.target.value);
  }

  const yearlySavingsHandler = (event) => {
    setYearlySavings(event.target.value);
  }

  const expectedInterestHandler = (event) => {
    setExpectedInterest(event.target.value);
  }

  const investmentDurationHandler = (event) => {
    setInvestmentDuration(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const results = {
        'current-savings': currentSavings,
        'yearly-contribution': yearlySavings,
        'expected-return': expectedInterest,
        'duration': investmentDuration
    };
    props.onSubmit(results);
  }
  
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" onChange={currentSavingsHandler}/>
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" onChange={yearlySavingsHandler}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" onChange={expectedInterestHandler}/>
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" onChange={investmentDurationHandler}/>
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button" >
          Calculate
        </button>
      </p>
    </form>
  );
}
