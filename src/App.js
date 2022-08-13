import { useState } from "react";
import Header from "./components/header/Header";
import WelcomePanel from "./components/welcome-panel/WelcomePanel";
import LoginPanel from "./components/login-panel/LoginPanel";

import styles from "./app.module.scss";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logInHandler = (email, password) => {
    setIsLoggedIn(true);
  };

  const logOutHandler = (email, password) => {
    setIsLoggedIn(false);
  };
  return (
    <div className={styles.app}>
      <Header isLoggedIn={isLoggedIn} onLogOut={logOutHandler} />
      {isLoggedIn ? <WelcomePanel /> : <LoginPanel />}
    </div>
  );
}

export default App;
