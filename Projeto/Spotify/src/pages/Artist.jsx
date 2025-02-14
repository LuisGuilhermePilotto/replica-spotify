import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import styles from "../styles/Artist.module.css";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Artist = () => {
  const { id } = useParams();

  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.id === Number(id)
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongsObj) => currentSongsObj.artist === artistArray.name
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex].id;

  // console.log(randomIdFromArtist);

  return (
    <div className={styles.artist}>
      <div
        className={styles.artist__header}
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${artistObj.banner})`,
        }}
      >
        <h2 className={styles.artist__title}>{artistObj.name}</h2>
      </div>

      <div className={styles.artist__body}>
        <h2>Populares</h2>
        <SongList songsArray={songsArrayFromArtist} />
      </div>

      <Link to={`/song/${randomIdFromArtist}`}>
        <FontAwesomeIcon
          className={`${styles["single-item__icon"]} ${styles["single-item__icon--artist"]}`}
          icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;
