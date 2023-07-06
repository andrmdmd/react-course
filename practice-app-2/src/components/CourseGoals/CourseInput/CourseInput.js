import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";
import styled from "styled-components";

const FormControl = styled.div`

  margin: 2rem;
  display: flex;
  flex-direction: column;
    justify-content: space-around;


&label {
  font-weight: bold;
  display: block;
  margin-bottom: 20px;
  font-size: 20px;
  color: #f4b266;
}

&input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
  margin; 1rem;
}

&input:focus {
  outline: none;
}
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsValid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl>
        <label>Course Goal</label>
        <input
          type="text"
          className={!isValid && "invalid"}
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
