import React from "react";
import logoSpotify from "../Assets/logos/spotify-logo.png";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logoSpotify} alt="Logo Spotify" />
      <a className={styles.header__link} href="/">
        <h1 /> Spotify <h1 />
      </a>
    </div>
  );
};

export default Header;
