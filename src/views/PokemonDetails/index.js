import React, { useState, useEffect } from 'react';
import PokemonDetailed from '../../components/PokemonDetailed';
import { Switch, useParams, Route, Link } from 'react-router-dom';
import axios from 'axios';
import PokemonInfo from '../../components/PokemonInfo';
import './styles.css';
//Backdrop-Component:
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));
export default function PokemonDetails() {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState();
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  useEffect(async () => {
    await axios
      .get(`https://wbsgroup4pokefight.herokuapp.com/pokemon/${id}`)
      .then(response => {
        setPokemon(response.data.data);
        console.log(response.data.data[0]);

        setLoading(false);
      });
  }, []);
  if (isLoading) {
    return (
      <div className="loading">
        <CircularProgress color="inherit" />
      </div>
    );
  }
  return (
    <div className="detailBody">
      <Modal
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <PokemonDetailed
            id={pokemon.id}
            name={pokemon.name.english}
            abilities={pokemon.abilities}
            base={pokemon.base}
            type={pokemon.type}
            description={pokemon.description}
            family={pokemon.family.evolutionLine}
            height={pokemon.height}
            weight={pokemon.weight}
            starter={pokemon.starter}
            gen={pokemon.gen}
            image={pokemon.sprite}
          />
        </Fade>
      </Modal>
    </div>
  );
}
