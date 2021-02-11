import React from 'react';
import './styles.css';

export default function PokemonDetails({ id, name, base, type }) {
  const pokedexId = '#' + id.toString().padStart(3, '0');
  const url =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
    id +
    '.png';
  return (
    <div>
      <h3>Entry: {pokedexId}</h3>
      <h1>{name}</h1>
      <p>Type: {type[0]}</p>
      {type.length === 2 ? <p>{type[1]}</p> : null}
      <p>Health Points: {base['HP']}</p>

      <img src={url} />
    </div>
  );
}
