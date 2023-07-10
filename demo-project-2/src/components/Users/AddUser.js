import { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";

const AddUser = (props) => {
  const [user, setUser] = useState({ name: "", age: "" });
  const buttonClick = (event) => {
    event.preventDefault();
    if(user.age.trim().length === 0){
      props.onError("Invalid input", "Enter a valid number (non-empty field)");
      return;
    }
    if (isNaN(user.age)) {
      props.onError("Invalid input", "Enter a valid number (a numeric value)");
      return;
    }
    if (+user.age <= 0) {
      props.onError("Invalid input", "Enter a valid number (>0)");
      return;
    }
    props.onSubmit({ name: user.name, age: +user.age });
  };
  return (
    <Card className={styles.input}>
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={user.name}
          onChange={(event) => {
            setUser({ ...user, name: event.target.value });
          }}
        ></input>

        <label htmlFor="age">Age (years) </label>
        <input
          type="text"
          id="age"
          value={user.age.toString()}
          onChange={(event) => {
            setUser({ ...user, age: event.target.value });
          }}
        ></input>
        <button type="submit" onClick={buttonClick}>
          Add user
        </button>
      </form>
    </Card>
  );
};

export default AddUser;
