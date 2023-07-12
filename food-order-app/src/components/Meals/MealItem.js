import CartContext from "../../store/cart-context";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const meal = props.meal;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      ...meal,
      id: props.id,
      amount: amount
    })
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={styles.description}>{meal.description}</div>
        <div className={styles.price}>${meal.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onSubmit={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
