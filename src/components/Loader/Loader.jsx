import React from "react";
import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <p className={styles.icon}></p>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
