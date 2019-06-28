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
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  radioGrid: {
    alignItems: "right",
    alignContent: "right"
  },
  sideCol: {
    color: '#1A9EC5'
  },
  grid1: {
    backgroundColor: '#147693',
  },
  grid2: {

  },
  grid3: {
    backgroundColor: '#1A9EC5',
  },
  grid3_1: {
    backgroundColor: '#147693',
  },
  grid4: {
    backgroundColor: '#1A9EC5',
  },
  grid4_1: {
    backgroundColor: '#147693',
  },
  grid5: {
    backgroundColor: '#1A9EC5',
  },
  grid5_1: {
    backgroundColor: '#147693',
  },
  grid8: {
    backgroundColor: '#147693',
  },
  darkTeal: {
    backgroundColor: '#147693',
  },
  lightTeal: {
    backgroundColor: '#1A9EC5'
  },
  g2Text: {
    textAlign: 'left',
    color: '#147693',
  },
  g3Text: {
    textAlign: 'left',
    color: 'white'
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.grid1}>
        <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
        <Grid item xs={8} direction="row">
          <ButtonAppBar />
        </Grid>
        <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
      </Grid>

      <Grid container spacing={3} className={classes.grid2}>
      <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
        <Grid item xs={5}>
          <Typography className={classes.g2Text}> Welcome to my example page</Typography>
          <Typography className={classes.g2Text}> This is our new assessment</Typography>
          
        </Grid>
        <Grid item xs={3}>
          <ImgCard />
        </Grid>
        <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
      </Grid>

      <Grid container spacing={3} className={classes.grid3}>
      <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
        <Box></Box>
        <Grid item xs={8} className={classes.grid3_1}>
          <Typography Typography className={classes.g3Text}>These are cards</Typography>
          <Typography Typography className={classes.g3Text}>These cards are cool & tell you things about animals! 
            Did you know a bird can run up to 65mph? And a cat can jump 26 feet in the air 
            to catch prey? Animals are so cool.</Typography>
        </Grid>
        <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
      </Grid>

      <Grid container spacing={3} className={classes.grid4}>
      <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
        <Grid item xs={6} className={classes.grid4_1}>
          <Box className={classes.paper}> </Box>
        </Grid>
        <Grid item xs={2} className={classes.grid4_1}>
          <Checkboxes />
        </Grid>
        <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
      </Grid>

      <Grid container spacing={3} className={classes.grid5}>
        <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
        
        <Grid item xs={2} className={classes.grid5_1}>
          <Card1 />
        </Grid>
        <Grid item xs={2} className={classes.grid5_1}>
          <Card2 />
        </Grid>
        <Grid item xs={2} className={classes.grid5_1}>
          <Card3 />
        </Grid>
        <Grid item xs={2} className={classes.grid5_1}>
          <Card4 />
        </Grid>
        <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
      </Grid>

      <Grid container spacing={3} className={classes.grid6}>
      <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
        <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
        <Grid item xs={4}>
          <Typography>Here is some constrained content</Typography>
        </Grid>
        <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>      
        <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>        
      </Grid>

      <Grid container spacing={3} className={classes.grid7}>
      <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
        <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>text</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>text</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>text</Paper>
        </Grid>
        <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
        <Grid item xs={2} >
          <Box className={classes.sideCol}></Box>
        </Grid>
      </Grid>

      <Grid container spacing={3} className={classes.grid8} className={classes.darkTeal}>
        <Grid item xs={12}>
          <Typography> footer </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
