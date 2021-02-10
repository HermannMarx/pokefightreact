import React from "react";

import "./index.css";

export default function Pokemon({ pokemon }) {
  return (
    <div className="pokemon-card">
      {/*<img src={pokemon.image} alt="" />*/}
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
        alt=""
      />
      <p>{pokemon.name.english}</p>
    </div>
  );
}
