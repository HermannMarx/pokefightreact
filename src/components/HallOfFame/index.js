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
        console.log(response.data.data);
        console.log('This is Hall of fame' + hall);
      });
  }, []);

  return (
    <div className="hallOfFame">
      <ol>
        {hall !== null
          ? hall.map((pokemon, index) => {
              return (
                <li>
                  <img src={pokemon.picture} />
                  Name:
                  {pokemon.name} Wins: {pokemon.victorycount}
                </li>
              );
            })
          : null}
      </ol>
      <button onClick={() => closeHall()}>Close</button>
    </div>
  );
};

export default HallOfFame;
