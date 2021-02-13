import React from 'react';
import ScrollToTop from 'react-scroll-up';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';

import Pokemon from '../Pokemon';

import './index.css';

export default function PokemonList({ allPokemon }) {
  return (
    <div className="pokemon-list">
      {allPokemon.map(pokemon => {
        return (
          <Pokemon hash={`#${pokemon.id}`} key={pokemon.id} pokemon={pokemon} />
        );
      })}
      <ScrollToTop showUnder={160}>
        <ArrowUpwardOutlinedIcon />
      </ScrollToTop>
    </div>
  );
}
