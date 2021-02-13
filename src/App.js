import React, { useState, useEffect } from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import AllPokemon from './views/AllPokemon/index';
import LandingPage from './views/LandingPage/LandingPage';
import PokemonDetails from './views/PokemonDetails/index';
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
      <Switch>
        {/*
        <Route path="/pokemon/fight">
          <ViewPokeFight />
        </Route>*/}
        {/* <Route path="/pokemon/:id">
          <PokemonDetails />
        </Route> */}

        <Route path={'/pokemon'}>
          <AllPokemon allPokemon={allPokemon} />
        </Route>
        <Route path={'/'}>
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
