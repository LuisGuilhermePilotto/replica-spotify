import React from "react";
import SongItem from "./SongItem";
import styles from "../styles/SongList.module.css";

const SongList = (songsArray) => {
  return (
    <div className={styles["song-List"]}>
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
      <p className={styles["song-list__see-more"]}>Ver Mais</p>
    </div>
  );
};

export default SongList;
