import React from "react";
import styles from "../styles/Main.module.css";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className={styles.main}>
      <ItemList title="Artistas" items={8} />
      <ItemList title="Músicas" items={16} />
    </div>
  );
};

export default Main;
