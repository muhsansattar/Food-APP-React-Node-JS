import styles from "./../../styles/orders.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faEnvelope,
  faTableColumns,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footerMenu}>
      <nav className={styles.navMenu}>
        <div className={styles.active}>
          <a href="#" className={styles.navMenuA} id={styles.navMenuAActive}>
            <FontAwesomeIcon icon={faTableColumns} className="fa-2x" />
            Dashboard
          </a>
        </div>
        <div>
          <a href="#" className={styles.navMenuA}>
            <FontAwesomeIcon icon={faCartShopping} className="fa-2x" />
            Orders
          </a>
        </div>
        <div>
          <a href="#" className={styles.navMenuA}>
            <FontAwesomeIcon icon={faEnvelope} className="fa-2x" />
            Menu
          </a>
        </div>
        <div>
          <a href="#" className={styles.navMenuA}>
            <FontAwesomeIcon icon={faUser} className="fa-2x" />
            Account
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
