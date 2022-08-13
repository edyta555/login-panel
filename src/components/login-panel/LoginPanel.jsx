import Card from "../UI/card/Card";
import Button from "../UI/button/Button";

import styles from "./login-panel.module.scss";

const LoginPanel = () => {
  return (
    <Card customStyles={styles.container}>
      <form>
        <div className={styles["single-field"]}>
          <label htmlFor="email">E-Mail adress:</label>
          <input type="email" id="email" />
        </div>
        <div className={styles["single-field"]}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <div className={styles["button-container"]}>
          <Button type="submit">Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default LoginPanel;
