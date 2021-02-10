import React from "react";

import Pokemon from "../Pokemon";

import "./index.css";

export default function PokemonList({ allPokemon }) {
  return (
    <div className="pokemon-list">
      {allPokemon.map((pokemon) => {
        return <Pokemon key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
}
