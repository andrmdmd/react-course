import styles from "./UsersList.module.css";
import Card from "../UI/Card";

const User = (props) => {
  const deleteUser = () => {
    props.onDelete(props.id);
  }
  return (
    <li>
      {props.name} ({props.age} years old)
      <button onClick={deleteUser}>X</button>
    </li>
  );
};

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      Users:
      <ul>
        {props.data.map((item, index) => (
          <User key={index} id={index} name={item.name} age={item.age} onDelete={props.onDelete}/>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
