import React from 'react';
import ScrollToTop from 'react-scroll-up';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

import Pokemon from '../Pokemon';

import './index.css';

export default function PokemonList({ allPokemon, choose1, choose2 }) {
  return (
    <div className="pokemon-list">
      {allPokemon.map((pokemon, index) => {
        return (
          <Pokemon
            hash={`#${pokemon.id}`}
            key={pokemon.id}
            pokemon={pokemon}
            choose1={choose1}
            choose2={choose2}
            index={index}
          />
        );
      })}
      <ScrollToTop showUnder={160}>
        <ArrowUpwardOutlinedIcon />
      </ScrollToTop>
    </div>
  );
}
