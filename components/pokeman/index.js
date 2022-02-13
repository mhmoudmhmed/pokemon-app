import Image from "next/image";
import React, { useState } from "react";
import ChoosenPokeman from "./choosenPokeman";
import PokemanCards from "./pokemanCards";
import styles from "./Styles.module.css";

const Pokeman = ({ pokemans }) => {
  const { name, weight, height, image, stats, id } = pokemans;
  const [random, setRandom] = useState(id);

  const handleRandom = () => {
    let newId = Math.floor(Math.random() * 100);
    setRandom(newId);
    console.log("newId", newId);
  };

  return (
    <div className={styles.container}>
      <ChoosenPokeman
        name={name}
        weight={weight}
        height={height}
        image={image}
      />
      <PokemanCards stats={stats} />
      <button className={styles.btn} onClick={handleRandom}>
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
