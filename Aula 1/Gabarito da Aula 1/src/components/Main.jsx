import React from "react";
import styles from "../styles/Main.module.css";
import ItemList from "./ItemList";
import { artistArray } from "../Assets/database/artists";
import { songsArray } from "../Assets/database/songs";

const Main = () => {
  return (
    <div className={styles.main}>
      <ItemList
        title="Artistas"
        items={8}
        itemsArray={artistArray}
        path="/artists"
        idPath="/artist"
      />
      <ItemList
        title="Músicas"
        items={16}
        itemsArray={songsArray}
        path="/songs"
        idPath="/song"
      />
    </div>
  );
};

export default Main;
