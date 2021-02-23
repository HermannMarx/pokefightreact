import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function Pokemon({
  index,
  pokemon,
  choose1,
  choose2,
  select1,
  select2
}) {
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
      <div className="btn-choose-container">
        {select1 ? (
          <button
            className="btn btn-choose"
            onClick={() => {
              choose1(index);
            }}
          >
            Select
          </button>
        ) : null}
        {select2 ? (
          <button
            className="btn btn-choose"
            onClick={() => {
              choose2(index);
            }}
          >
            Select
          </button>
        ) : null}
      </div>
    </div>
  );
}
