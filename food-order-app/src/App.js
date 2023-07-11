import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";

function App() {
  return (
    <div>
      <Header/>
      <MealsSummary/>
      <AvailableMeals/>
    </div>
  );
}

export default App;
