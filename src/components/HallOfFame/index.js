import './styles.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const HallOfFame = ({ allPokemon, closeHall }) => {
  let [hall, setHall] = useState(null);

  useEffect(() => {
    axios
      .get('https://wbsgroup4pokefight.herokuapp.com/pokemon/fight/halloffame')
      .then(response => {
        setHall(response.data.data);
      });
  }, []);

  return (
    <div className="hallOfFame">
      <h1>Hall Of Fame</h1>
      <ol className="hof-list">
        {hall !== null
          ? hall.map((pokemon, index) => {
              return (
                <li className="hof-list-item">
                  <img className="hof-list-item-image" src={pokemon.picture} />
                  {pokemon.name} {pokemon.victorycount}
                </li>
              );
            })
          : null}
      </ol>
      <p>--Click Anywhere To Close--</p>
    </div>
  );
};

export default HallOfFame;
