import React from "react";
import styles from "../styles/SongItem.module.css";
import { Link } from "react-router-dom";

const SongItem = () => {
  return (
    <Link to="/song/1" className={styles["song-item"]}>
      <div className={styles["song-item__number-album"]}>
        <p>1</p>
        <div className={styles["song-item__album"]}>
          <img
            src="https://i.scdn.co/image/ab67616d00001e02a8e9382ce68ad5d8758bd998"
            alt="Imagem da Música"
            className={styles["song-item__image"]}
          />
          <p className={styles["song-item__name"]}>EAI COMO C TA</p>
        </div>
      </div>
      <p>2.30</p>
    </Link>
  );
};

export default SongItem;
