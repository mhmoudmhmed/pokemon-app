import Image from "next/image";
import React, { useState } from "react";
import ChoosenPokeman from "./choosenPokeman";
import PokemanCards from "./pokemanCards";
import styles from "./Styles.module.css";

const Pokeman = ({ pokemans, handleRandom }) => {
  const { name, weight, height, image, stats, id } = pokemans;

  return (
    <div className={styles.container}>
      <ChoosenPokeman
        name={name}
        weight={weight}
        height={height}
        image={image}
      />
      <PokemanCards stats={stats} />
      <button className={styles.btn} onClick={() => handleRandom(id)}>
        GOTCHA!
        <img
          className={styles.iconImg}
          src={"https://d.top4top.io/p_223565rfm1.png"}
          alt="pokemon icon"
        />
      </button>
    </div>
  );
};

export default Pokeman;
