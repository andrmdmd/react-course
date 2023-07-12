import styles from "./MealItemForm.module.css";
import Input from "../UI/Input";
import { useRef } from "react";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const enteredAmount = Number(amountInputRef.current.value);
    //if (enteredAmount <= 0) return;
    props.onSubmit(enteredAmount);
  };
  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount-" + props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <div>
        <button type="submit">+</button>
      </div>
    </form>
  );
};

export default MealItemForm;
