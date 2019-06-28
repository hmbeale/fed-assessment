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

const useStyles = makeStyles(theme => ({
    grid8: {
        
      },
      darkTeal: {
        backgroundColor: '#147693',
      },
      typography: {
        color: 'white'
      }
  }));
  
  export default function Footer() {
    const classes = useStyles();
  
    return (
        
      
        <Grid container spacing={3} className={classes.grid8} className={classes.darkTeal}>
        <Grid item xs={12}>
          <Typography className={classes.typography}> footer </Typography>
        </Grid>
      </Grid>
    );
  }