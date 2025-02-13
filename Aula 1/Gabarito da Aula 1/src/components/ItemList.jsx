import React from "react";
import styles from "../styles/ItemList.module.css";
import SingleItem from "./SingleItem";
import { Link } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  return (
    <div className={styles["item-list"]}>
      <div className={styles["item-list__header"]}>
        <h2>{title} Populares</h2>
        <Link className={styles["item-list__link"]} to={path}>
          Mostrar tudo
        </Link>
      </div>

      <div className={styles["item-list__container"]}>
        {itemsArray
          .filter((currentValue, index) => index < items)
          .map((currentObj, index) => (
            <SingleItem
              // id={currentObj.id}
              // name={currentObj.name}
              // image={currentObj.image}
              // banner={currentObj.banner}
              idPath={idPath}
              {...currentObj}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
