import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from '@material-ui/core/Divider';

import SideCol from "./sideCol.js";
import SimpleList from "./simpleList.js";
import ImgCard2 from './imgCard2.js'
import ThingSubdivide from './thingSubdivide.js'

const useStyles = makeStyles(theme => ({
  grid5: {
    backgroundColor: "#1A9EC5"
  },
  grid5_1: {
    backgroundColor: "#147693"
  },
  typography: {
    textAlign: "left",
    color: "#147693"
  },
  title: {
    textAlign: "left",
    fontSize: '20px',
    color: "#147693"
  },
  divider: {
    color: "#147693"
  }
}));


export default function Trifold() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.grid7}>
      <SideCol />
      <Grid item xs={12} sm = {1}>
        <Box className={classes.sideCol}></Box>
      </Grid>

      
      <Grid item xs={12} sm={2}>
        <Divider className = {classes.divider}/>
        <Typography className = {classes.typography} className = {classes.title}>List of things</Typography>
        <br></br>
        <SimpleList />
      </Grid>
      
      <Grid item xs={12} sm={2}>
      <Divider className = {classes.divider}/>
        <Typography className = {classes.typography} className = {classes.title}>Have you heard</Typography>
        <br></br>
        <Typography className = {classes.typography}>
          There was a duck at a store. 
          <br></br>
          <br></br>
          He ate for free. I should have ordered
          him more expensive food! 
          <br></br>
          <br></br>
          The lesson here is DUCKS EAT FOR FREE at that
          restaurant.
        </Typography>
      </Grid>
      
      <Grid item xs={12} sm={2}>
      <Divider className = {classes.divider}/>
        <Typography className = {classes.typography} className = {classes.title}>
          Picture of some things
        </Typography>
        <br></br>
        <ThingSubdivide />
      </Grid>

      <Grid item xs={12} sm = {1}>
        <Box className={classes.sideCol}></Box>
      </Grid>

      <SideCol />
    </Grid>
  );
}
