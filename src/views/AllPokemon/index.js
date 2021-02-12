import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PokemonList from '../../components/PokemonList';

export default function AllPokemon({ allPokemon }) {
  return (
    <div>
      <Switch>
        <Route></Route>
      </Switch>
      <PokemonList allPokemon={allPokemon} />
    </div>
  );
}
