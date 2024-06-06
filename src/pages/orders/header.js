import styles from "./../../styles/orders.module.css";

const Header = () => {
  return (
    <header className={styles.topHeaders}>
      <div className={styles.appControls}>
        <div className={styles.circles}>
          <div className={styles.circles1}></div>
          <div className={styles.circles2}></div>
          <div
            className={styles.circles3}
            id={styles.headerControlsActive}
          ></div>
        </div>
        <div className={styles.circlesText}>
          <p className={styles.circlesText1}>closed</p>
          <p className={styles.circlesText2}>Buzy</p>
          <p className={styles.circlesText3}>Open</p>
        </div>
      </div>
      <div className={styles.payout}>
        <p>Payout</p>
        <p>0.00 OMR</p>
      </div>
      <div className={styles.belliconDiv}>
        <button>
          <i>I1</i>
        </button>
        <button>
          <i>I2</i>
        </button>
      </div>
      <div className={styles.headerSearchDiv}>
        <div>
          <button>En</button>
        </div>
        <div>
          <input type="search" placeholder="Search" />
          <i></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
