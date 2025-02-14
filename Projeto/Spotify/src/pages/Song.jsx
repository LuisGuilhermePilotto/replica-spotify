import React from "react";
import styles from "../styles/Song.module.css";
import Player from "../components/Player";
import { Link } from "react-router-dom";

const Song = () => {
  return (
    <div className={styles.song}>
      <div className={styles.song__container}>
        <div className={styles["song__image-container"]}>
          <img
            src="https://i.scdn.co/image/ab67616d00001e02dc16c0b3939b95e09076ec5e"
            alt="Imagem da Música"
          />
        </div>
      </div>

      <div className={styles.song__bar}>
        <Link to="/artist/1" className={styles["song__artist-image"]}>
          <img
            src="https://i.scdn.co/image/ab67616d00001e02dc16c0b3939b95e09076ec5e"
            alt="Imagem do Artista"
            width={75}
            height={75}
          />
        </Link>

        <Player />

        <div>
          <p className={styles.song__name}>A DANADA ME LIGOU</p>
          <p>MC TUTO </p>
        </div>
      </div>
    </div>
  );
};

export default Song;
