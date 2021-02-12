import React, { useState, useEffect } from 'react';
import PokemonDetailed from '../../components/PokemonDetailed';
import { Switch, useParams, Route } from 'react-router-dom';
import axios from 'axios';
import PokemonInfo from '../../components/PokemonInfo';
import './styles.css';
//Backdrop-Component:
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: 'black'
  }
}));
export default function SinglePokemon() {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState();
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get(`https://wbsgroup4pokefight.herokuapp.com/pokemon/${id}`)
      .then(response => {
        setPokemon(response.data);
        console.log(response);
        setLoading(false);
      });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="detailBody">
      <Backdrop className={classes.backdrop} open={open}>
        <PokemonDetailed
          id={pokemon[0].id}
          name={pokemon[0].name.english}
          base={pokemon[0].base}
          type={pokemon[0].type}
        />
      </Backdrop>
    </div>
  );
}
