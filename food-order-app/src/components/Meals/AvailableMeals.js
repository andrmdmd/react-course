import MealItem from "./MealItem";

import styles from './AvailableMeals.module.css'
import Card from "../UI/Card";

const AvailableMeals = (props) => {
    return <Card className={styles.meals}>
        <ul>{props.meals.map((item, index) => <MealItem meal={item} key={index} id={index} onItemAdd={props.onItemAdd}/>) }</ul>
    </Card>
}

export default AvailableMeals;