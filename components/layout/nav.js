import React from "react";
import styles from "./Styles.module.css";

const Nav = ({ pokemans }) => {
  const { color, name } = pokemans;

  return (
    <div className={styles.topHeader} style={{ background: color.name }}>
      {Array.from(Array(13), (e, i) => (
        <p className={styles.pokeName} key={i}>
          {name}
        </p>
      ))}
    </div>
  );
};

export default Nav;
