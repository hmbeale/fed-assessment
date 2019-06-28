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

import Checkboxes from './checkBoxes.js'
import SimpleList from './simpleList.js'

const useStyles = makeStyles(theme => ({
    grid5: {
        backgroundColor: '#1A9EC5',
      },
      grid5_1: {
        backgroundColor: '#147693',
      },
  }));
  
  export default function Row7() {
    const classes = useStyles();
  
    return (
        
      
        <Grid container spacing={3} className={classes.grid7}>
      <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
        <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
        <Grid item xs={1}>
          <SimpleList />
        </Grid>
        <Grid item xs={2}>
          <Typography className={classes.paper}>have you heard</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography className={classes.paper}>picture of some things</Typography>
        </Grid>
        <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
        <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
      </Grid>
    );
  }