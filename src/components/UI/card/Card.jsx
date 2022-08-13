import React from "react";

import styles from "./card.module.scss";

const Card = ({ customStyles, children }) => {
  return (
    <div className={`${styles["card-container"]} ${customStyles}`}>{children}</div>
  );
};

export default Card;
