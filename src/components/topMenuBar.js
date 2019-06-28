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
    grid1: {
        backgroundColor: '#147693',
      },
      sideCol: {
        color: '#1A9EC5'
      },
  }));
  
  export default function TopMenuBar() {
    const classes = useStyles();
  
    return (
      

<Grid container spacing={3} className={classes.grid1}>
        <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
        <Grid item xs={8} direction="row">
          <ButtonAppBar />
        </Grid>
        <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
      </Grid>
    );
  }