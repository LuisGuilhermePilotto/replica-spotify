import React from "react";
import styles from "../styles/SongItem.module.css";
import { Link } from "react-router-dom";

const SongItem = ({ image, name, duration, artist, audio, id, index }) => {
  return (
    <Link to={`/song/${id}`} className={styles["song-item"]}>
      <div className={styles["song-item__number-album"]}>
        <p>{index + 1}</p>
        <div className={styles["song-item__album"]}>
          <img
            src={image}
            alt={`Imagem da Música ${name}`}
            className={styles["song-item__image"]}
          />
          <p className={styles["song-item__name"]}>{name}</p>
        </div>
      </div>
      <p>{duration}</p>
    </Link>
  );
};

export default SongItem;
