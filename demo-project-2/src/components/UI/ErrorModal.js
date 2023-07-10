import styles from "./ErrorModal.module.css";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <div className={styles.backdrop} onClick={props.onDismiss}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>{props.text}</div>
        <footer className={styles.actions}>
          <button onClick={props.onDismiss}>OK</button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
