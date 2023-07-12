import styles from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [newItemAdded, setNewItemAdded] = useState(false);

  useEffect(() => {
    if (cartCtx.items.length === 0) return;

    setNewItemAdded(true);
    const timer = setTimeout(() => {
      setNewItemAdded(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [cartCtx.items]);

  return (
    <button
      className={`${styles.button} ${newItemAdded && styles.bump}`}
      onClick={props.onClick}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      {!cartCtx.isEmpty && (
        <span className={styles.badge}>
          {cartCtx.items.reduce((count, item) => count + item.amount, 0)}
        </span>
      )}
    </button>
  );
};

export default HeaderCartButton;
