import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ButtonAppBar from "./buttonAppBar.js";


import SideCol from './sideCol.js'

const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: '#147693',
        padding: '0px'
      },
      sideCol: {
        color: '#1A9EC5'
      },
      item: {
        
      }
  }));
  
  export default function TopMenuBar() {
    const classes = useStyles();
  
    return (
      

<Grid container spacing={3} className={classes.container}>
        <SideCol />
        <Grid item xs={12} sm={8} direction="row className={classes.item}">
          <ButtonAppBar />
        </Grid>
        <SideCol />
      </Grid>
    );
  }