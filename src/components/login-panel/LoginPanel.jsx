import { useState } from "react";

import Card from "../UI/card/Card";
import Button from "../UI/button/Button";

import styles from "./login-panel.module.scss";

const LoginPanel = ({ onLogIn }) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    onLogIn(enteredEmail, enteredPassword);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={styles["single-field"]}>
          <label htmlFor="email">E-Mail adress:</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
        </div>
        <div className={styles["single-field"]}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className={styles["button-container"]}>
          <Button buttonType="submit">Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default LoginPanel;
