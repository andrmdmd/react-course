import styles from "./UsersList.module.css";

const User = (props) => {
  return (
    <li>
      {props.name} ({props.age} years old)
    </li>
  );
};

const UsersList = (props) => {
  return (
    <div className={styles.users}>
      Users:
      <ul>
        {props.data.map((item, index) => (
          <User key={index} name={item.name} age={item.age} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
