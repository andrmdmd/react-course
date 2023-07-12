import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import meals from './../../resources/meals.jpg';

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onCartClick} itemsInCart={props.itemsInCart}/>
      </header>
      <div className={styles['main-image']}><img src={meals} alt='a table with different meals'/></div>
    </>
  );
};

export default Header;
