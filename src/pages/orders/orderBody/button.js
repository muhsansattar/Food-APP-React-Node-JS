import styles from "./../../../styles/orders.module.css";

const Button = (props) => {
  return (
    <div className={styles.buttonProgressHolder}>
      <button
        className={styles.ordersButtonsAB}
        onClick={(e) => {
          props.clicked(e.target.innerHTML);
        }}
      >
        {props.name}
      </button>
      <span className={styles.buttonsProgress}>6</span>
    </div>
  );
};

export default Button;
