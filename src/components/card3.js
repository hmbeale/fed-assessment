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
    color: "#147693",
    textTransform: 'none',
    fontFamily: 'Open Sans'
  },
  button: {
    margin: 'auto'
  },
  cardContent: {
    minHeight: '170px'
  }
});

export default function Card3() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      
        <CardMedia
          className={classes.media}
          image={require('../images/cat.png')}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.typography}>
          This is card3
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.typography}>
          The cheetah is the only cat that can't retract its claws.
          </Typography>
        </CardContent>
      
      <CardActions>
        <Button size="small" color="primary" className={classes.button}> 
        <Typography variant="body2" color="textSecondary" component="p" className={classes.typography}>
          Click & go!
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}