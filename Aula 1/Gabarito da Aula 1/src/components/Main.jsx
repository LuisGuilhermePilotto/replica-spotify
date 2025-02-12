import React from "react";
import styles from "../styles/Main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles["item-list"]}>
        <div className={styles["item-list__header"]}>
          <h2>Artistas Populares</h2>
          <a className={styles["item-list__link"]} href="/">
            Mostrar tudo
          </a>
        </div>

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
      </div>
    </div>
  );
};

export default Main;
