import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from '@material-ui/core/Divider';

import SideCol from "./sideCol.js";

import SimpleList from "./simpleList.js";
import ImgCard2 from './imgCard2.js'

const useStyles = makeStyles(theme => ({
  grid5: {
    backgroundColor: "#1A9EC5"
  },
  grid5_1: {
    backgroundColor: "#147693"
  }
}));

export default function Trifold() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.grid7}>
      <SideCol />
      <Grid item xs={12} sm={2}>
        <Box className={classes.sideCol}></Box>
      </Grid>
      <Grid item xs={12} sm={1}>
        <SimpleList />
      </Grid>
      <Grid item xs={12} sm={2}>
      <Divider />
        <Typography className={classes.paper}>Have you heard</Typography>
        <Typography className={classes.paper}>
          There was a duck at a store. He ate for free. I should have ordered
          him more expensive food! The lesson here is DUCKS EAT FOR FREE at that
          restaurant.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={1}>
      <Divider />
        <Typography className={classes.paper}>
          picture of some things
        </Typography>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Box className={classes.sideCol}>
          <ImgCard2 />
        </Box>
      </Grid>
      <SideCol />
    </Grid>
  );
}
