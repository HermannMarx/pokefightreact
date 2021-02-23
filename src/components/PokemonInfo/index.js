import React, { useState, useEffect } from 'react';
import { useParams, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

const PokemonInfo = ({ id }) => {
  const [isLoading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const [turn, setTurn] = useState(false);

  const switchTurn = () => {
    if (turn === false) setTurn(true);
    else setTurn(false);
  };

  useEffect(() => {
    axios
      .get(`https://wbsgroup4pokefight.herokuapp.com/pokemon/${id}/base`)
      .then(response => {
        setPokemon(response.data);
        setLoading(false);
      });
  }, []);

  if (isLoading || pokemon === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to={turn !== true ? `/pokemon/${id}/base` : `/pokemon/${id}`}>
        <button
          onClick={() => {
            switchTurn();
          }}
        >
          Fight Info
        </button>
      </Link>
      <Switch>
        <Route path={`/pokemon/${id}/base`}>
          <div>HP: {pokemon.HP}</div>
          <div>Attack: {pokemon.Attack}</div>
          <div>Defense: {pokemon.Defense}</div>
          <div>Sp. Attack: {pokemon['Sp. Attack']}</div>
          <div>Sp. Defense: {pokemon['Sp. Defense']}</div>
          <div>Speed: {pokemon.Speed}</div>
        </Route>
        <Route path={`/pokemon/${id}`}></Route>
      </Switch>
    </div>
  );
};

export default PokemonInfo;
