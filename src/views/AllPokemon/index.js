import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PokemonDetails from '../PokemonDetails';
import PokemonList from '../../components/PokemonList';
import PokeFighter from '../../components/PokeFighter';

export default function AllPokemon({ allPokemon }) {
  return (
    <div>
      <header>
        <img
          className="logo"
          src="https://fontmeme.com/permalink/210213/0c674bf6450b9b8545003e3d26a223a8.png"
        />
      </header>
      <div className="fightContainer">
        <PokeFighter fighter={allPokemon[0]} />
        <PokeFighter />
      </div>
      <Switch>
        <Route path="/pokemon/:id">
          <PokemonDetails />
        </Route>
      </Switch>
      <PokemonList allPokemon={allPokemon} />
    </div>
  );
}
