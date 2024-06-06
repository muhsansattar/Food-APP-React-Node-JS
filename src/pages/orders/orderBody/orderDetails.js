import styles from "./../../../styles/orders.module.css";

const OrderDetails = (props) => {
  return (
    <div className={styles.ordersDetails}>
      <div className={styles.ordersDetailsIcons}></div>
      <div className={styles.ordersDetailsContent}>
        <div className={styles.ordersDetailsContentFirstDiv}>
          <h1>Order {props.id}</h1>
          <p className={styles.ordersDetailsContentFirstDivP}>
            {props.items}items
          </p>
          <p className={styles.ordersDetailsContentFirstDivP}>{props.time}</p>
        </div>
        <div className={styles.ordersDetailsContentButtons}>
          <button className={styles.ordersDetailsContentButtonsB}>23</button>
          <button className={styles.ordersDetailsContentButtonsB}>cash</button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
