import { useState } from "react";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [user, setUser] = useState({ name: "", age: "" });
  const buttonClick = (event) => {
    event.preventDefault();
    if (isNaN(user.age)) {
      alert("Age must be a number!");
      return;
    }
    const ageNum = Number(user.age);
    if (ageNum <= 0) {
      alert("Age must be greater than 0!");
      return;
    }
    props.onSubmit({ name: user.name, age: ageNum });
  };
  return (
    <form className={styles.input}>
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
  );
};

export default AddUser;
