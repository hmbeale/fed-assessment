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
      g6Text: {
        textAlign: 'left',
        color: '#147693',
      }
  }));
  
  export default function Row6() {
    const classes = useStyles();
  
    return (
        
      
        <Grid container spacing={3} className={classes.grid6}>
        <Grid item xs={2} >
            <Box className={classes.sideCol}></Box>
          </Grid>
          <Grid item xs={1} >
            <Box className={classes.sideCol}></Box>
          </Grid>
          <Grid item xs={6}>
            <Typography className = {classes.g6Text}>Here is some constrained content</Typography>
            <Typography className = {classes.g6Text}>Where the metal hits the meat player-coach but upsell so please use "solutionise" instead of solution ideas! :). Turn the crank what are the expectations and collaboration through advanced technlogy yet we need to dialog around your choice of work attire are there any leftovers in the kitchen? those options are already baked in with this model, yet clear blue water.
  Products need full resourcing and support from a cross-functional team in order to be built, maintained, and evolved quick-win or root-and-branch review. We need to get all stakeholders up to speed and in the right place nobody's fault it could have been managed better drink from the firehose we need to make the new version clean and sexy crisp ppt.
  Net net mobile friendly. Synergize productive mindfulness bench mark, loop back. Quick win synergize productive mindfulness nor hit the ground running yet when does this sunset?
  </Typography>
          </Grid>
          <Grid item xs={1} >
            <Box className={classes.sideCol}></Box>
          </Grid>      
          <Grid item xs={2} >
            <Box className={classes.sideCol}></Box>
          </Grid>        
        </Grid>
    );
  }