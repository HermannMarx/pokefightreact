import './styles.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const HallOfFame = ({ allPokemon }) => {
  let [hall, setHall] = useState(null);

  useEffect(() => {
    axios
      .get('https://wbsgroup4pokefight.herokuapp.com/pokemon/fight/halloffame')
      .then(response => {
        setHall(response.data.data);
        console.log('This is Hall of fame' + hall);
      });
  }, []);

  return (
    <div className="hallOfFame">
      <ol>
        <li>
          <img src={hall[0].picture} />
          Name:
          {hall[0].name} Wins: {hall[0].victorycount}
        </li>
        <li>AAAAAAA</li>
        <li>BBBBBBBBb</li>
        <li>CCCCCCCC</li>
        <li>DDDDDDd</li>
        <li>EEEEEEEEe</li>
        <li>FFFFFFFf</li>
        <li>GGGGGGGGGGG</li>
        <li>HHHH</li>
        <li>IIIIIIII</li>
        {hall.map((pokemon, index) => {
          return (
            <li>
              <img src={pokemon.picture} />
              Name:
              {pokemon.name} Wins: {pokemon.victorycount}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default HallOfFame;
