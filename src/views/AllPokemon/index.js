import React, { useState } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import PokemonDetails from '../PokemonDetails';
import PokemonList from '../../components/PokemonList';
import PokeFighter from '../../components/PokeFighter';
import './styles.css';

export default function AllPokemon({ allPokemon }) {
  const [fighter1, setFighter1] = useState(0);
  const [fighter2, setFighter2] = useState(1);

  const choose1 = fighterId => {
    setFighter1(fighterId);
  };
  const choose2 = fighterId => {
    setFighter2(fighterId);
  };

  return (
    <div>
      <header>
        <img
          className="logo"
          src="https://fontmeme.com/permalink/210213/0c674bf6450b9b8545003e3d26a223a8.png"
        />
      </header>
      <div className="fightContainer">
        <PokeFighter
          name={allPokemon[fighter1].name[0].english}
          fighter={allPokemon[fighter1]}
          id={allPokemon[fighter1].id}
          url={allPokemon[fighter1].spriteback}
          HP={allPokemon[fighter1].base[0].HP}
          Attack={allPokemon[fighter1].base[0].Attack}
          Defense={allPokemon[fighter1].base[0].Defense}
        />
        <PokeFighter
          name={allPokemon[fighter2].name[0].english}
          fighter={allPokemon[fighter2]}
          id={allPokemon[fighter2].id}
          url={allPokemon[fighter2].spritefront}
          HP={allPokemon[fighter1].base[0].HP}
          Attack={allPokemon[fighter1].base[0].Attack}
          Defense={allPokemon[fighter1].base[0].Defense}
        />
      </div>
      <Switch>
        <Route path="/pokemon/:id">
          <PokemonDetails />
        </Route>
      </Switch>
      <PokemonList
        allPokemon={allPokemon}
        choose1={choose1}
        choose2={choose2}
      />
    </div>
  );
}
