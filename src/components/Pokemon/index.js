import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Pokemon({ index, pokemon, choose1, choose2 }) {
  // const classes = useStyles();
  const pokedexId = '#' + pokemon.id.toString().padStart(3, '0');
  const srcImageUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
    pokemon.id +
    '.png';
  return (
    <div className="pokemon-card">
      <Link to={`/pokemon/${pokemon.id}`} className="cardLink">
        <img className="listImage" src={srcImageUrl} />
        <span>{pokedexId}</span>
        <br></br>
        <span>{pokemon.name[0].english}</span>
      </Link>
      <div className="chooseButtons">
        <button
          onClick={() => {
            choose1(index);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            console.log(index);
            console.log(choose2);
            choose2(index);
          }}
        >
          2
        </button>
      </div>
    </div>
  );
}
