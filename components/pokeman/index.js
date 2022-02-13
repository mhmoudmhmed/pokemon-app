import Image from "next/image";
import React, { useState } from "react";
import ChoosenPokeman from "./choosenPokeman";
import PokemanCards from "./pokemanCards";
import styles from "./Styles.module.css";

const Pokeman = ({ pokemans }) => {
  const [newPok, setNewPok] = useState([]);
  const { name, weight, height, image, stats, id } = pokemans;

  const handleChange = () => {
    let cards = pokemans;
    const newHand = [];

    function get_rand() {
      let rand = Math.floor(Math.random() * 100);
      if (
        !newHand ||
        (typeof newHand === "string" && !newHand.includes(rand))
      ) {
        newHand.push(rand);
      } else {
        get_rand(cards);
      }
    }

    // for (let i = 0; i < 5; i++) {
    //   get_rand(cards);
    // }

    get_rand(cards);
    setNewPok(newHand);
    console.log(newHand);
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
      <button className={styles.btn} onClick={handleChange}>
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
