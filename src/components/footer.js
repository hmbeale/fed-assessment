import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";


import Typography from '@material-ui/core/Typography';


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
          <Typography className={classes.typography}> © 2019 Example Company Name. All rights reserved. </Typography>
        </Grid>
      </Grid>
    );
  }