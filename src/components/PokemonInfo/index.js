import React, { useState, useEffect } from 'react';
import { useParams, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

const PokemonInfo = ({ id }) => {
  const [isLoading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(`https://wbsgroup4pokefight.herokuapp.com/pokemon/${id}/base`)
      .then(response => {
        setPokemon(response.data);
        console.log('This is Info: ' + response);
        setLoading(false);
        console.log(id);
        // console.log(info);
      });
  }, []);

  if (isLoading || pokemon === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to={`/pokemon/${id}/base`}>Fight Info</Link>
      <Switch>
        <Route path={`/pokemon/${id}/base`}>
          <div>HP: {pokemon.HP}</div>
          <div>Attack: {pokemon.Attack}</div>
          <div>Defense: {pokemon.Defense}</div>
          <div>Sp. Attack: {pokemon.Attack}</div>
          <div>Sp. Defense: {pokemon.Defense}</div>
          <div>Speed: {pokemon.Speed}</div>
        </Route>
        <Route path={`/pokemon/${id}`}></Route>
      </Switch>
    </div>
  );
};

export default PokemonInfo;
