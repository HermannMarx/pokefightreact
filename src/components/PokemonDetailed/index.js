import React from 'react';
import './styles.css';
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
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  div: {
    margin: 'auto'
  },
  card: {
    maxWidth: 345
  },
  media: {
    paddingTop: '56.25%',
    backgroundSize: 'contain',
    backgroundColor: 'grey'
  },
  expand: {
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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={classes.div}>
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <AddBoxOutlinedIcon />
            </IconButton>
          }
          title={name}
          subheader={pokedexId}
        />
        <CardMedia className={classes.media} image={srcUrl} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Its oversized claw is very powerful, but when it's not in battle,
            the claw just gets in the way.
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          <Typography variant="body1" color="textSecondary" component="p">
            Test
          </Typography>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            Stats
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Health: {base['HP']}</Typography>
            <Typography paragraph>Attack: {base['Attack']}</Typography>
            <Typography paragraph>Defense: {base['Defense']}</Typography>
            <Typography paragraph>
              Special Attack: {base['Sp. Attack']}
            </Typography>
            <Typography paragraph>
              Special Defense: {base['Sp. Defense']}
            </Typography>
            <Typography variant="body1" color="textPrimary" component="p">
              Speed: {base['Speed']}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
