import React from "react";

import styles from "../styles/ItemList.module.css";
import SingleItem from "./SingleItem";

const ItemList = ({ title, items }) => {
  console.log(items);

  return (
    <div className={styles["item-list"]}>
      <div className={styles["item-list__header"]}>
        <h2>{title} Populares</h2>
        <a className={styles["item-list__link"]} href="/">
          Mostrar tudo
        </a>
      </div>

      <div className={styles["item-list__container"]}>
        {items === 8 ? (
          <>
            for (let index = 0; index < 8; index++) {
               <SingleItem />   
            }
          </>
        ) : (
          <>
            for (let index = 0; index < 16; index++) {
                 <SingleItem />
            }
          </>
        )}
      </div>
    </div>
  );
};

export default ItemList;
