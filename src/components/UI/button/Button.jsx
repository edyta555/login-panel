import styles from "./button.module.scss";

const Button = ({ buttonType, children }) => {
  return (
    <button type={buttonType || "button"} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
