import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Pokemon({ index, pokemon, choose1, choose2 }) {
  // const classes = useStyles();
  const pokedexId = '#' + pokemon.id.toString().padStart(3, '0');
  return (
    <div className="pokemon-card">
      <Link to={`/pokemon/${pokemon.id}`} className="cardLink">
        <img className="listImage" src={pokemon.spritefront} />
        <span>{pokedexId}</span>
        <br></br>
        <span>{pokemon.name.english}</span>
      </Link>
      <button
        className="btn btn-choose1"
        onClick={() => {
          choose1(index);
        }}
      >
        1
      </button>
      <button
        className="btn btn-choose2"
        onClick={() => {
          choose2(index);
        }}
      >
        2
      </button>
    </div>
  );
}
