import React from "react";
import Page from "../components/layout/page";
import Pokeman from "../components/pokeman";

export default function Home({ pokemans }) {
  console.log("pokemans", pokemans);

  return (
    <Page pokemans={pokemans}>
      <Pokeman pokemans={pokemans} />
    </Page>
  );
}

export async function getServerSideProps() {
  const id = Math.floor(Math.random() * 100);

  const [pokemanRes, speciesRes] = await Promise.all([
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`),
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`),
  ]);

  const [pokeman, speciesPokeman] = await Promise.all([
    pokemanRes.json(),
    speciesRes.json(),
  ]);

  const paddedId = ("00" + id).slice(-3);
  pokeman.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;

  return { props: { pokemans: { ...pokeman, ...speciesPokeman } } };
}
