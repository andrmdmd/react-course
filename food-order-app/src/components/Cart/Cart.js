import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const RemoveItemHandler = (item) => {
    cartCtx.removeItem({ ...item, amount: 1 });
  };
  const AddItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  return (
    <div>
      {cartCtx.isEmpty && (
        <h2 className={styles["empty-cart-txt"]}>Nothing to see here...</h2>
      )}
      {!cartCtx.isEmpty && (
        <>
          <div className={styles["cart-items"]}>
            {cartCtx.items.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                onAdd={() => AddItemHandler(item)}
                onRemove={() => RemoveItemHandler(item)}
              />
            ))}
          </div>
          <div className={styles.total}>
            <span>Total amount</span>
            <span>${cartCtx.totalAmount.toFixed(2)}</span>
          </div>
        </>
      )}
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={`${cartCtx.isEmpty && styles.inactive} ${styles.button}`}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
