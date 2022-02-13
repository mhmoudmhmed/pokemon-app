import React from "react";
import styles from "./Styles.module.css";

const PokemanCards = ({ stats }) => {
  return (
    <div className={styles.cardsWrapper}>
      <ul className={styles.list}>
        {stats.map((st, index) => (
          <li className={styles.li} key={index}>
            <div className={`${styles.statsNumber} ${styles.cardShadow}`}>
              {st.base_stat}
            </div>
            <div className={`${styles.statsName} ${styles.cardShadow}`}>
              {st.stat.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemanCards;
