import { useState } from "react";

import Card from "../UI/card/Card";
import Button from "../UI/button/Button";

import styles from "./login-panel.module.scss";

const LoginPanel = ({ onLogIn }) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailIsCorrect, setEmailIsCorrect] = useState(true);
  const [passwordIsCorrect, setPasswordIsCorrect] = useState(true);
  const [formIsCorrect, setFormIsCorrect] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    onLogIn(enteredEmail, enteredPassword);
  };

  const emailChangeHandler = (event) => {
    const emailValue = event.target.value;
    setEnteredEmail(emailValue);
    setFormIsCorrect(
      emailValue.includes("@") &&
        emailValue.trim().length > 8 &&
        enteredPassword.trim().length > 4
    );
  };

  const passwordChangeHandler = (event) => {
    const passwordValue = event.target.value;
    setEnteredPassword(passwordValue);
    setFormIsCorrect(
      enteredEmail.includes("@") &&
        enteredEmail.trim().length > 8 &&
        passwordValue.trim().length > 4
    );
  };

  const emailCorrectHandler = () => {
    setEmailIsCorrect(
      enteredEmail.includes("@") && enteredEmail.trim().length > 8
    );
  };

  const passwordCorrectnessHandler = () => {
    setPasswordIsCorrect(enteredPassword.trim().length > 4);
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles["single-field"]} ${
            !emailIsCorrect && styles["incorect-value"]
          }`}
        >
          <label htmlFor="email">E-Mail adress:</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailCorrectHandler}
          />
        </div>
        <div
          className={`${styles["single-field"]} ${
            !passwordIsCorrect && styles["incorect-value"]
          }`}
        >
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordCorrectnessHandler}
          />
        </div>
        <div className={styles["button-container"]}>
          <Button buttonType="submit" disabled={!formIsCorrect}>
            Log in
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default LoginPanel;
