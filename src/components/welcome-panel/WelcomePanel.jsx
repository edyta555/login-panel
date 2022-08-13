import Card from "../UI/card/Card";

import styles from "./welcome-panel.module.scss";

const WelcomePanel = () => {
  return (
    <Card customStyles={styles.container}>
      <h2>Successful login!</h2>
    </Card>
  );
};

export default WelcomePanel;
