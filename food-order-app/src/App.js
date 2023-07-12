import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";
import Modal from "./components/UI/Modal";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import { DUMMY_MEALS } from "./components/Meals/dummy-meals.js";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartOpen, setCartOpen] = useState(false);
  return (
    <CartProvider>
      <Header
        onCartClick={() => {
          setCartOpen(true);
        }}
      />
      <main>
        <MealsSummary />
        <AvailableMeals meals={DUMMY_MEALS} />
      </main>
      {isCartOpen && (
        <Modal
          onBackdropClick={() => {
            setCartOpen(false);
          }}
        >
          <Cart
            onClose={() => {
              setCartOpen(false);
            }}
          />
        </Modal>
      )}
    </CartProvider>
  );
}

export default App;
