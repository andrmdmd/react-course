import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import meals from './../../resources/meals.jpg';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}><img src={meals} alt='a table with different meals'/></div>
    </>
  );
};

export default Header;
