import styles from "./Button.module.scss";

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className={styles.buttonWrapper}>
      {label}
    </button>
  );
};

export default Button;
