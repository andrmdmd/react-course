import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  isEmpty: true,
  totalAmount: 0.0,
};

const cartReducer = (state, action) => {
  let newItems = [...state.items];
  let newTotalAmount = state.totalAmount;
  if (action.type === "ADD") {
    if (state.items.some((meal) => meal.id === action.item.id)) {
      const foundMeal = state.items.find((meal) => meal.id === action.item.id);
      foundMeal.amount += action.item.amount;
    } else {
      newItems = state.items.concat(action.item);
    }
    newTotalAmount += action.item.price * action.item.amount;
  } else if (action.type === "REMOVE") {
    const foundMeal = state.items.find((meal) => meal.id === action.item.id);
    const foundMealIndex = state.items.indexOf(foundMeal);
    if (foundMeal.amount === 1) {
      state.items.splice(foundMealIndex, 1);
    } else {
      foundMeal.amount--;
    }
    newTotalAmount -= action.item.price;
  }
  return { items: newItems, isEmpty: newItems.length === 0, totalAmount: newTotalAmount };
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCart = (item) => {
    dispatchCartAction({ type: "REMOVE", item: item });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    isEmpty: cartState.isEmpty,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
