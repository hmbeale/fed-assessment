import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import Box from '@material-ui/core/Box';


import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles(theme => ({
      sideCol: {
        color: '#1A9EC5'
      },
  }));
  
  export default function SideCol() {
    const classes = useStyles();
  
    return (
      
        <Hidden xsDown>
          <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
        </Hidden>

        
    );
  }