import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Card1 from './card1.js'
import Card2 from './card2.js'
import Card3 from './card3.js'
import Card4 from './card4.js'

import SideCol from './sideCol.js'

const useStyles = makeStyles(theme => ({
    grid5: {
        backgroundColor: '#1A9EC5',
      },
      grid5_1: {
        backgroundColor: '#147693',
      },
      sideCol: {
        color: '#1A9EC5'
      },
  }));
  
  export default function CardGroup() {
    const classes = useStyles();
  
    return (
        
      <Grid container spacing={3} className={classes.grid5}>
      <SideCol />
      
      <Grid item xs={12} sm = {2} className={classes.grid5_1}>
        <Card1 />
      </Grid>
      <Grid item xs={12} sm = {2} className={classes.grid5_1}>
        <Card2 />
      </Grid>
      <Grid item xs={12} sm = {2} className={classes.grid5_1}>
        <Card3 />
      </Grid>
      <Grid item xs={12} sm = {2} className={classes.grid5_1}>
        <Card4 />
      </Grid>
      <SideCol />
    </Grid>
    );
  }