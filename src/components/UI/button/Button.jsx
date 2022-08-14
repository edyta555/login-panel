import styles from "./button.module.scss";

const Button = ({ buttonType, disabled, children }) => {
  return (
    <button
      type={buttonType || "button"}
      className={styles.button}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
