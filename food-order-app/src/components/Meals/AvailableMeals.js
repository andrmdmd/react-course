import MealItem from "./MealItem";
import {DUMMY_MEALS} from './dummy-meals'
import styles from './AvailableMeals.module.css'
import Card from "../UI/Card";

const AvailableMeals = () => {
    return <Card className={styles.meals}>
        <ul>{DUMMY_MEALS.map(item => <MealItem meal={item}/>) }</ul>
    </Card>
}

export default AvailableMeals;