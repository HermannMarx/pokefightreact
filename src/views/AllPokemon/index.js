import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PokemonDetails from '../PokemonDetails';
import PokemonList from '../../components/PokemonList';

export default function AllPokemon({ allPokemon }) {
  return (
    <div>
      <Switch>
        <Route path="/pokemon/:id">
          <PokemonDetails />
        </Route>
      </Switch>
      <PokemonList allPokemon={allPokemon} />
    </div>
  );
}
