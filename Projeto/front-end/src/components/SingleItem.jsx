import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import styles from "../styles/SingleItem.module.css";
import { Link } from "react-router-dom";

const SingleItem = ({ _id, name, image, banner, artist, idPath }) => {
  return (
    <Link to={`${idPath}/${_id}`} className={styles["single-item"]}>
      <div className={styles["single-item__div-image-button"]}>
        <div className={styles["single-item__div-image"]}>
          <img
            className={styles["single-item__image"]}
            src={image}
            alt={`Imagem do Artista ${name}`}
          />
        </div>

        <FontAwesomeIcon
          className={styles["single-item__icon"]}
          icon={faCirclePlay}
        />
      </div>
      <div className={styles["single-item__texts"]}>
        <div className={styles["single-item__2lines"]}>
          <p className={styles["single-item__title"]}>{name}</p>
        </div>
        <p className={styles["single-item__type"]}>{artist ?? "Artista"}</p>
      </div>
    </Link>
  );
};

export default SingleItem;
