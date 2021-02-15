import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
//Card-Component:
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  div: {
    margin: 'auto'
  },
  card: {
    maxWidth: 355,
    border: '5px solid #E95049',
    backgroundColor: '#E95030',
    background: 'rgb(255,255,255)',
    background:
      'radial-gradient(circle, #E6BC2F 50%, rgba(0,0,0,0.25252107679009106) 100%)'
  },
  media: {
    paddingTop: '56.25%',
    backgroundSize: 'contain',
    backgroundColor: 'rgb(255, 255, 255, 0.5)'
  },
  expand: {
    cursor: 'pointer',
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    textAlign: 'center'
  }
}));

export default function PokemonDetailed({ id, name, base, type }) {
  const pokedexId = '#' + id.toString().padStart(3, '0');
  const srcUrl = 'https://cdn.traction.one/pokedex/pokemon/' + id + '.png';
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={classes.div}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.header}
          action={
            <IconButton>
              <Link to="/pokemon">
                <CloseIcon style={{ color: 'black' }} />
              </Link>
            </IconButton>
          }
          title={name}
          subheader={pokedexId}
        />
        <CardMedia className={classes.media} image={srcUrl} />
        <CardContent>
          <p>
            Its oversized claw is very powerful, but when it's not in battle,
            the claw just gets in the way.
          </p>
          <br></br>
          <table className="info">
            <th>Type</th>
            <th>Abilities</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Evolution</th>
            <tr>
              <td>Type0</td>
              <td>Ability1</td>
              <td>2'04</td>
              <td>15.2 lbs.</td>
              <td>Bulbasaur</td>
            </tr>
            <tr>
              <td>Type1</td>
              <td>Ability2</td>
              <td></td>
              <td></td>
              <td>Ivysaur</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Venusaur</td>
            </tr>
          </table>
        </CardContent>

        <CardActions disableSpacing>
          <span
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            Stats
            <ExpandMoreIcon />
          </span>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <table className="base">
              <th>HP</th>
              <th>Attack</th>
              <th>Defense</th>
              <th>Special Attack</th>
              <th>Special Defense</th>
              <th>Speed</th>
              <tr>
                <td>{base['HP']}</td>
                <td>{base['Attack']}</td>
                <td>{base['Defense']}</td>
                <td>{base['Sp. Attack']}</td>
                <td>{base['Sp. Defense']}</td>
                <td>{base['Speed']}</td>
              </tr>
            </table>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
