import React, { useState, useEffect } from 'react';
import PokemonDetailed from '../../components/PokemonDetailed';
import { Switch, useParams, Route } from 'react-router-dom';
import axios from 'axios';
import PokemonInfo from '../../components/PokemonInfo';

export default function SinglePokemon() {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios
      .get(`https://wbsgroup4pokefight.herokuapp.com/pokemon/${id}`)
      .then(response => {
        setPokemon(response.data);
        console.log('This is details: ' + response);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PokemonDetailed
        id={pokemon[0].id}
        name={pokemon[0].name.english}
        base={pokemon[0].base}
        type={pokemon[0].type}
      />
      <PokemonInfo id={id} />
    </div>
  );
}
