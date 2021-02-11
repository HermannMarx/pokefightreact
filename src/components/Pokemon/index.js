import React from 'react';

import './index.css';

export default function Pokemon({ pokemon }) {
  const srcImageUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
    pokemon.id +
    '.png';
  return (
    <div className="pokemon-card">
      {/*<img src={pokemon.image} alt="" />*/}
      <img src={srcImageUrl} alt="" />
      <p>{pokemon.id}</p>
    </div>
  );
}
