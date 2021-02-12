import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import AllPokemon from './views/AllPokemon';
import PokemonDetails from './views/PokemonDetails';
import axios from 'axios';
import './App.css';

function App() {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    axios
      .get('https://wbsgroup4pokefight.herokuapp.com/pokemon')
      .then(response => {
        setAllPokemon(response.data);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src="https://fontmeme.com/permalink/210212/0c674bf6450b9b8545003e3d26a223a8.png" />
        </div>
      </header>
      {allPokemon.length ? (
        <Switch>
          {/*
        <Route path="/pokemon/fight">
          <ViewPokeFight />
        </Route>
        <Route path="/pokemon/:id/:info">
          <ViewPokemonInfo />
        </Route>*/}
          {/* <Route path="/pokemon/:id">
            <PokemonDetails />
          </Route> */}

          <Route path={['/', '/pokemon']}>
            <AllPokemon allPokemon={allPokemon} />
          </Route>
        </Switch>
      ) : null}
    </div>
  );
}

export default App;
