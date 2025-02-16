import React, { useState } from "react";
import styles from "../styles/Player.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faCirclePause,
} from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds - minutes * 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
};

const timeInSeconds = (timeString) => {
  const splitArray = timeString.split(":");
  const minutes = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);

  return seconds + minutes * 60;
};

const Player = ({ duration, _id, audio }) => {
  const audioPlayer = useRef();
  const progressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const durationInSeconds = timeInSeconds(duration);

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying)
        setCurrentTime(formatTime(audioPlayer.current.currentTime));

      progressBar.current.style.setProperty(
        "--_progress",
        (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying]);

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
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => playPause()}
        />
        <Link to={`/song/${_id}`}>
          <FontAwesomeIcon
            className={styles.player__icon}
            icon={faArrowAltCircleRight}
          />
        </Link>
      </div>

      <div className={styles.player__progress}>
        <p>{currentTime}</p>
        <div className={styles.player__bar}>
          <div
            ref={progressBar}
            className={styles["player__bar-progress"]}
          ></div>
        </div>
        <p>{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
