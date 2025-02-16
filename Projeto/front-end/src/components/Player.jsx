import React from "react";
import styles from "../styles/Player.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Player = ({ duration, _id }) => {
  return (
    <div className={styles.player}>
      <div className={styles.player__controllers}>
        <Link to={`/song/${_id}`}>
          <FontAwesomeIcon
            className={styles.player__icon}
            icon={faArrowAltCircleLeft}
          />
        </Link>
        <FontAwesomeIcon
          className={`${styles["player__icon"]} ${styles["player__icon--play"]}`}
          icon={faCirclePlay}
        />
        <Link to={`/song/${_id}`}>
          <FontAwesomeIcon
            className={styles.player__icon}
            icon={faArrowAltCircleRight}
          />
        </Link>
      </div>

      <div className={styles.player__progress}>
        <p>00:00</p>
        <div className={styles.player__bar}>
          <div className={styles["player__bar-progress"]}></div>
        </div>
        <p>{duration}</p>
      </div>
    </div>
  );
};

export default Player;
