import React from "react";
import styles from "../styles/Song.module.css";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();
  const songtObj = songsArray.filter(
    (currentSongsObj) => currentSongsObj._id === id
  )[0];
  const artistObj = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === songtObj.artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongsObj) => currentSongsObj.artist === artistObj.name
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;

  return (
    <div className={styles.song}>
      <div className={styles.song__container}>
        <div className={styles["song__image-container"]}>
          <img src={songtObj.image} alt={`Imagem da Música ${songtObj.name}`} />
        </div>
      </div>

      <div className={styles.song__bar}>
        <Link
          to={`/artist/${artistObj._id}`}
          className={styles["song__artist-image"]}
        >
          <img
            src={artistObj.image}
            alt={`Imagem do Artista ${artistObj.name}`}
            width={75}
            height={75}
          />
        </Link>

        <Player
          duration={songtObj.duration}
          _id={randomIdFromArtist}
          audio={songtObj.audio}
        />

        <div>
          <p className={styles.song__name}>{songtObj.name}</p>
          <p>{artistObj.name} </p>
        </div>
      </div>
    </div>
  );
};

export default Song;
