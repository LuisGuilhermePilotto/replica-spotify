import React from "react";
import logoSpotify from "../Assets/logos/spotify-logo.png";
import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={logoSpotify} alt="Logo Spotify" />
      </Link>
      <Link className={styles.header__link} to="/">
        <h1 /> Spotify <h1 />
      </Link>
    </div>
  );
};

export default Header;
