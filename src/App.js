import { useState } from "react";
import Header from "./components/Header/Header";

import styles from "./app.module.scss";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const logInHandler = (email, password) => {
    setIsLoggedIn(true);
  };

  const logOutHandler = (email, password) => {
    setIsLoggedIn(false);
  };
  return (
    <div className={styles.App}>
      <Header isLoggedIn={isLoggedIn} onLogOut={logOutHandler} />
    </div>
  );
}

export default App;
