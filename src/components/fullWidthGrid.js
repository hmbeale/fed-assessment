import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import ButtonAppBar from './buttonAppBar.js'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={8} direction = "row">
          <ButtonAppBar />
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}></Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>text</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>img</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=2 col</Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=2 col</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=8</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=2 col</Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=2 col</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=8</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=2 col</Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=2 col</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=8</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=2 col</Paper>
        </Grid>
      </Grid>
    </div>
  );
}