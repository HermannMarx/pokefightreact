import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { Button } from "@material-ui/core";

import AllPokemon from "./views/AllPokemon";

import axios from "axios";

import "./App.css";

function App() {
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://wbsgroup4pokefight.herokuapp.com/pokemon")
      .then((response) => {
        setAllPokemon(response.data);
      });
  }, []);

  return (
    <div className="App">
      {allPokemon.length ? (
        <Switch>
          {/*
        <Route path="/pokemon/fight">
          <ViewPokeFight />
        </Route>
        <Route path="/pokemon/:id/:info">
          <ViewPokemonInfo />
        </Route>
        <Route path="/pokemon/:id">
          <ViewPokemon />
        </Route>*/}

          <Route path={["/", "/pokemon"]}>
            <AllPokemon allPokemon={allPokemon} />
          </Route>
        </Switch>
      ) : null}
    </div>
  );
}

export default App;
