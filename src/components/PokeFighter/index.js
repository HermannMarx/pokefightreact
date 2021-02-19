import './styles.css';
const PokeFighter = ({
  name,
  fighter,
  id,
  url,
  HP,
  fightHP,
  Attack,
  Defense
}) => {
  return (
    <div className="pokeFighter">
      <h3>{name}</h3>
      <div className="pokeCenter">
        <img src={url} alt="pokefighter" />
        <div className="pokeInfo">
          <p>
            HP: {fightHP}/{HP}
          </p>
          <p>Attack: {Attack}</p>
          <p>Defense: {Defense}</p>
        </div>
      </div>
    </div>
  );
};

export default PokeFighter;
