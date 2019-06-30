import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ButtonAppBar from "./buttonAppBar.js";


import SideCol from './sideCol.js'

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
        <SideCol />
        <Grid item xs={12} sm={8} direction="row">
          <ButtonAppBar />
        </Grid>
        <SideCol />
      </Grid>
    );
  }