import React from "react";
import globalStyles from "../../styles/globalStyles.module.scss";
import styles from "./Navigation.module.scss";

import logo from "../../assets/logo.png";

const Navigation = ({ scrolled }) => {
  return (
    <nav className={`${styles.navigation} ${scrolled ? styles.navScrolled : ""}`}>
      <div className={`${globalStyles.container} ${styles.navigationContainer}`}>
        <div className={styles.navigationWrapper}>
          <span className={styles.logoWrapper}>
            <img src={logo} alt="Isukagudu Preschool" className={styles.logo} />
          </span>
          <div className={styles.menuItems}>
            <a href="#home" className={styles.menuItem}>
              Home
            </a>
            <a href="#about" className={styles.menuItem}>
              About
            </a>
            <a href="#programs" className={styles.menuItem}>
              Programs
            </a>
            <a href="#contact" className={styles.menuItem}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
