import React from "react";
import styles from "./Styles.module.css";

const ChoosenPokeman = ({ name, weight, height, image }) => {
  return (
    <div className={styles.pokemanWrapper}>
      <div className={styles.image}>
        <div className={`${styles.heightCard} ${styles.card}`}>{` ${
          height / 10
        }m `}</div>

        <img className="mx-auto" src={image} alt={name} />

        <div className={`${styles.widthCard} ${styles.card}`}>{` ${
          weight / 10
        }kg `}</div>
      </div>
      <p className={styles.name}> {name} </p>
    </div>
  );
};

export default ChoosenPokeman;
