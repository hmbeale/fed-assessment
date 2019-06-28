import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import ButtonAppBar from "./buttonAppBar.js";
import ImgCard from "./imgCard.js";
import MediaCard from "./mediaCard.js";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Card1 from './card1.js'
import Card2 from './card2.js'
import Card3 from './card3.js'
import Card4 from './card4.js'

const useStyles = makeStyles(theme => ({
  grid2: {

  },  
  g2Text: {
        textAlign: 'left',
        color: '#147693',
      },
      sideCol: {
        color: '#1A9EC5'
      },
  }));
  
  export default function Banner() {
    const classes = useStyles();
  
    return (
      


        <Grid container spacing={3} className={classes.grid2}>
        <Grid item xs={2} >
            <Box className={classes.sideCol}></Box>
          </Grid>
          <Grid item xs={5}>
            <Typography className={classes.g2Text}> Welcome to my example page</Typography>
            <Typography className={classes.g2Text}> This is our new assessment</Typography>
            
          </Grid>
          <Grid item xs={3}>
            <ImgCard />
          </Grid>
          <Grid item xs={2} >
            <Box className={classes.sideCol}></Box>
          </Grid>
        </Grid>
    );
  }