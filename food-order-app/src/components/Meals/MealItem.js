import styles from "./MealItem.module.css";

const MealItem = (props) => {
  const meal = props.meal;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={styles.description}>{meal.description}</div>
        <div className={styles.price}>${meal.price.toFixed(2)}</div>
      </div>
    </li>
  );
};

export default MealItem;
