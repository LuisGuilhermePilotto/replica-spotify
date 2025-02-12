import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import styles from "../styles/SingleItem.module.css";

const SingleItem = () => {
  return (
    <div className={styles["single-item"]}>
      <div className={styles["single-item__div-image-button"]}>
        <div className={styles["single-item__div-image"]}>
          <img
            className={styles["single-item__image"]}
            src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
            alt="Henrique & Juliano"
          />
        </div>

        <FontAwesomeIcon
          className={styles["single-item__icon"]}
          icon={faCirclePlay}
        />
      </div>
      <div className={["single-item__texts"]}>
        <p className={["single-item__title"]}>Henrique & Juliano</p>
        <p className={["single-item__type"]}>Artista</p>
      </div>
    </div>
  );
};

export default SingleItem;
