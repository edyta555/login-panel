import { useState } from "react";
import Header from "./components/header/Header";
import WelcomePanel from "./components/welcome-panel/WelcomePanel";
import LoginPanel from "./components/login-panel/LoginPanel";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logInHandler = () => {
    setIsLoggedIn(true);
  };

  const logOutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onLogOut={logOutHandler} />
      {isLoggedIn ? <WelcomePanel /> : <LoginPanel onLogIn={logInHandler} />}
    </div>
  );
}

export default App;
