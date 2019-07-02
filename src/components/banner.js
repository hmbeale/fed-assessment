import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ImgCard from "./imgCard.js";

import Typography from "@material-ui/core/Typography";

import SideCol from "./sideCol.js";
import BannerImage from './bannerImage.js'

const useStyles = makeStyles(theme => ({
  grid2: {},
  title: {
    textAlign: "left",
    color: '#DC4105',
    fontSize: '40px',
    fontFamily: 'Passion One',
    //textShadow: '0px 0px #FFFFFF',
    textShadow: '1px 1px #FFFFFF, 2px 2px #8f8f8f',
  },
  subtitle: {
    textAlign: "left",
    color: "#147693",
    fontSize: '20px',
    fontFamily: 'Open Sans'
  },
  sideCol: {
    color: "#1A9EC5",
    
  }
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.grid2}>
      <SideCol />
      <Grid item xs={12} sm={5}>
        <Typography className={classes.title}>
          {" "}
          Welcome to my example page
        </Typography>
        <Typography className={classes.subtitle}>
          {" "}
          This is our new assessment
        </Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
        <BannerImage />
      </Grid>
      <SideCol />
    </Grid>
  );
}
