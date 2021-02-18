import React, { useState } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import PokemonDetails from '../PokemonDetails';
import PokemonList from '../../components/PokemonList';
import PokeFighter from '../../components/PokeFighter';
import HallOfFame from '../../components/HallOfFame';
import './styles.css';
import axios from 'axios';

export default function AllPokemon({ allPokemon }) {
  const [fighter1, setFighter1] = useState(null);
  const [fighter2, setFighter2] = useState(null);
  const [viewHall, setViewHall] = useState(true);
  let [pokemon1, setPokemon1] = useState();
  let [pokemon2, setPokemon2] = useState();
  let [pokemon1HP, setPokemon1HP] = useState();
  let [pokemon1D, setPokemon1D] = useState();
  let [pokemon2HP, setPokemon2HP] = useState();
  let [pokemon2D, setPokemon2D] = useState();
  const [turn1, setTurn1] = useState(true);
  const [turn2, setTurn2] = useState(false);

  const choose1 = fighterId => {
    setFighter1(fighterId);

    setPokemon1({
      name: allPokemon[fighterId].name.english,
      id: allPokemon[fighterId].id,
      url: allPokemon[fighterId].spriteback,
      HP: allPokemon[fighterId].base.HP,
      Attack: allPokemon[fighterId].base.Attack,
      Defense: allPokemon[fighterId].base.Defense,
      Speed: allPokemon[fighterId].base.Speed
    });
    setPokemon1HP(allPokemon[fighterId].base.HP);
    setPokemon1D(allPokemon[fighterId].base.Defense);
  };
  const choose2 = fighterId => {
    setFighter2(fighterId);
    setPokemon2({
      name: allPokemon[fighterId].name.english,
      id: allPokemon[fighterId].id,
      url: allPokemon[fighterId].spritefront,
      HP: allPokemon[fighterId].base.HP,
      Attack: allPokemon[fighterId].base.Attack,
      Defense: allPokemon[fighterId].base.Defense,
      Speed: allPokemon[fighterId].base.Speed
    });
    setPokemon2HP(allPokemon[fighterId].base.HP);
    setPokemon2D(allPokemon[fighterId].base.Defense);
  };
  const fightEnd = () => {
    setFighter1(null);
    setFighter2(null);
    setTurn1(true);
    setTurn2(false);
    //post winner in db
  };
  const postResult = async winnerId => {
    const result = {
      pokemon1: pokemon1.id,
      pokemon2: pokemon2.id,
      winner: winnerId
    };
    const res = await axios.post(
      'https://wbsgroup4pokefight.herokuapp.com/pokemon/fight/create',
      result
    );
    const data = res.data;
    console.log(data);
  };
  const attack1 = () => {
    let hp = pokemon2HP - pokemon1.Attack;
    setPokemon2HP(hp);
    setTurn1(false);
    setTurn2(true);
    if (hp <= 0) {
      postResult(pokemon1.id);
      fightEnd();
      return alert('Player1 won the fight!');
    }
  };
  const attack2 = () => {
    let hp = pokemon1HP - pokemon1.Attack;
    setPokemon1HP(pokemon1HP => pokemon1HP - pokemon2.Attack);
    setTurn1(true);
    setTurn2(false);
    if (hp <= 0) {
      postResult(pokemon2.id);
      fightEnd();
      return alert('Player2 won the fight!');
    }
  };
  const defend1 = () => {
    setPokemon1HP(pokemon1HP => pokemon1HP + pokemon1D);
    setPokemon1D(0);
    setTurn1(false);
    setTurn2(true);
  };
  const defend2 = () => {
    setPokemon2HP(pokemon2HP => pokemon2HP + pokemon2D);
    setPokemon2D(0);
    setTurn1(true);
    setTurn2(false);
  };
  const run = (a, b) => {
    if (a > b) {
      setFighter1(null);
      setFighter2(null);
      alert('run successfull');
    } else {
      alert('Your run failed. Prepare to die!');
    }
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
        {fighter1 !== null ? (
          <div>
            <PokeFighter
              name={pokemon1.name}
              fighter={pokemon1}
              id={pokemon1.id}
              url={pokemon1.url}
              HP={pokemon1.HP}
              fightHP={pokemon1HP}
              Attack={pokemon1.Attack}
              Defense={pokemon1D}
              Speed={pokemon1.Speed}
            />
            {turn1 && pokemon1 && pokemon2 ? (
              <div className="fightButtons">
                <button onClick={() => attack1()}>Attack</button>
                <button onClick={() => defend1()}>Defend</button>
                <button onClick={() => run(pokemon1.Speed, pokemon2.Speed)}>
                  Run
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <p className="choose">Choose Pokemon 1</p>
        )}
        <p className="choose">VS</p>
        {fighter2 !== null ? (
          <div>
            <PokeFighter
              name={pokemon2.name}
              fighter={pokemon2}
              id={pokemon2.id}
              url={pokemon2.url}
              HP={pokemon2.HP}
              fightHP={pokemon2HP}
              Attack={pokemon2.Attack}
              Defense={pokemon2D}
              Speed={pokemon2.Speed}
            />
            {turn2 && pokemon1 && pokemon2 ? (
              <div className="fightButtons">
                <button onClick={() => attack2()}>Attack</button>
                <button onClick={() => defend2()}>Defend</button>
                <button onClick={() => run(pokemon2.Speed, pokemon1.Speed)}>
                  Run
                </button>
              </div>
            ) : null}
          </div>
        ) : (
          <p className="choose">Choose Pokemon 2</p>
        )}
      </div>
      <Switch>
        <Route path="/pokemon/:id">
          <PokemonDetails />
        </Route>
      </Switch>
      <HallOfFame
        allPokemon={allPokemon}
        onClick={() => console.log('It works')}
      />
      <PokemonList
        allPokemon={allPokemon}
        choose1={choose1}
        choose2={choose2}
      />
    </div>
  );
}
