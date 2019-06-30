import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Box from '@material-ui/core/Box';


import SideCol from './sideCol.js'

import Checkboxes from './checkBoxes.js'

const useStyles = makeStyles(theme => ({
    grid4: {
        backgroundColor: '#1A9EC5',
      },
      grid4_1: {
        backgroundColor: '#147693',
      },
      sideCol: {
        color: '#1A9EC5'
      },
  }));
  
  export default function CheckboxGroup() {
    const classes = useStyles();
  
    return (
        <Grid container spacing={3} className={classes.grid4}>
        <SideCol />
          <Grid item xs={12} sm = {5} className={classes.grid4_1}>
            <Box className={classes.paper}> </Box>
          </Grid>
          <Grid item xs={12} sm = {3} className={classes.grid4_1}>
            <Checkboxes />
          </Grid>
          <SideCol />
        </Grid>
    );
  }