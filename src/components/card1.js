import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  typography: {
    //fontSize: '20px',
    color: "#147693",
    textTransform: 'none',
    fontFamily: 'Open Sans'
  },
  button: {
    margin: 'auto'
  }
});

export default function Card1() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../images/cat.png')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
          This is card1
          </Typography>
          <br></br>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.typography}>
          Cats use thier whiskers to determine space between objects in the dark.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" className={classes.button}>
        <Typography className={classes.typography}>
          Click & go!
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}