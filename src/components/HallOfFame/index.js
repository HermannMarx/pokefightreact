import './styles.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const HallOfFame = ({ allPokemon, closeHall }) => {
  let [hall, setHall] = useState(null);

  useEffect(() => {
    axios
      .get(
        'https://wbsgroup4pokefight.herokuapp.com/pokemon/fight/halloffame?limit=5'
      )
      .then(response => {
        setHall(response.data.data);
      });
  }, []);

  return (
    <div className="hallOfFame">
      <ul className="hof-list">
        <li className="hof-header">
          <h2>HALL OF FAME</h2>
        </li>
        <li className="hof-list-item">
          <div className="hof-list-item-content">
            <span>#Rank</span>
            <span></span>
            <img className="hof-list-item-image" />
            <span>Name</span> <span>WINS</span>
          </div>
        </li>
        {hall !== null
          ? hall.map((pokemon, index) => {
              return (
                <li className="hof-list-item">
                  <div className="hof-list-item-content">
                    <span>#{index + 1}</span>
                    <img
                      className="hof-list-item-image"
                      src={pokemon.picture}
                    />
                    <span>{pokemon.name}</span>{' '}
                    <span>{pokemon.victorycount}</span>
                  </div>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};

export default HallOfFame;
