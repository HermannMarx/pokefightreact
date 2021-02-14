import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
//Chip-Component:
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import './index.css';
// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     justifyContent: 'center',
//     flexWrap: 'wrap',
//     '& > *': {
//       margin: theme.spacing(1.5)
//     },
//     padding: 20,
//     width: 100
//   },
//   avatar: {
//     width: '35%',
//     height: 'auto'
//   },
//   clickable: {
//     width: '100%',
//     height: 'auto'
//   }
// }));

export default function Pokemon({ pokemon }) {
  // const classes = useStyles();
  const pokedexId = '#' + pokemon.id.toString().padStart(3, '0');
  const srcImageUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
    pokemon.id +
    '.png';
  return (
    <div className="pokemon-card">
      <Link to={`/pokemon/${pokemon.id}`} className="cardLink">
        <img className="listImage" src={srcImageUrl} />
        <span>{pokedexId}</span>
        <br></br>
        <span>{pokemon.name.english}</span>
      </Link>
    </div>
  );
}
