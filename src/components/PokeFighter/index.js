import './index.css';
const PokeFighter = ({ fighter }) => {
  console.log(fighter);
  console.log('This is URL' + fighter);

  return (
    <div className="fightContainer">
      Pokefighter
      <div>
        <img src="" alt="pokefighter" />
      </div>
      <button>Attack</button>
      <button>Defend</button>
      <button>Run</button>
    </div>
  );
};

export default PokeFighter;
