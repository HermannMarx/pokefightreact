import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import AllPokemon from './views/AllPokemon/index';
import LandingPage from './views/LandingPage/LandingPage';
import axios from 'axios';

import './App.css';

function App() {
  const [allPokemon, setAllPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://wbsgroup4pokefight.herokuapp.com/pokemon')
      .then(response => {
        setAllPokemon(response.data.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Switch>
        {/*
        <Route path="/pokemon/fight">
          <ViewPokeFight />
          </Route>*/}
        <Route path={'/pokemon'}>
          <AllPokemon isLoading={isLoading} allPokemon={allPokemon} />
        </Route>
        <Route path={'/'}>
          <LandingPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
