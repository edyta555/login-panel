import Card from "../UI/card/Card";
import Button from "../UI/button/Button";

import styles from "./login-panel.module.scss";

const LoginPanel = () => {
  return (
    <Card customStyles={styles.container}>
      <form>
        <div className={styles.singleField}>
          <label htmlFor="email">E-Mail adress</label>
          <input type="email" id="email" />
        </div>
        <div className={styles.singleField}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className={styles.buttonContainer}>
          <Button type="submit" className={styles.button}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default LoginPanel;
