import React from 'react';
//Chip-Component:
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import './index.css';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1.5)
    },
    padding: 20,
    width: 100
  },
  avatar: {
    width: '35%',
    height: 'auto'
  },
  clickable: {
    width: '100%',
    height: 'auto'
  }
}));

export default function Pokemon({ pokemon }) {
  const classes = useStyles();
  const pokedexId = '#' + pokemon.id.toString().padStart(3, '0');
  const srcImageUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
    pokemon.id +
    '.png';
  return (
    <div className="pokemon-card">
      {/* <Chip
        avatar={<Avatar alt="P" src={srcImageUrl} />}
        label={`${pokedexId} ${pokemon.name.english}`}
        component="a"
        href={`/pokemon/${pokemon.id}`}
        clickable
        color="inherit"
      /> */}
      <a href={`/pokemon/${pokemon.id}`}>
        <img className="listImage" src={srcImageUrl} />
        <span>
          {pokedexId} {pokemon.name.english}
        </span>
      </a>
    </div>
  );
}
