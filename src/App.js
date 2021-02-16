import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import AllPokemon from './views/AllPokemon/index';
import LandingPage from './views/LandingPage/LandingPage';
import axios from 'axios';

import './App.css';

function App() {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    axios
      .get('https://wbsgroup4pokefight.herokuapp.com/pokemon')
      .then(response => {
        setAllPokemon(response.data.data);
      });
  }, []);

  return (
    <div className="App">
      {allPokemon.length ? (
        <Switch>
          {/*
        <Route path="/pokemon/fight">
          <ViewPokeFight />
          </Route>*/}
          <Route path={'/pokemon'}>
            <AllPokemon allPokemon={allPokemon} />
          </Route>
          <Route path={'/'}>
            <LandingPage />
          </Route>
        </Switch>
      ) : null}
    </div>
  );
}

export default App;
