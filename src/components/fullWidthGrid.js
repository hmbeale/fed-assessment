import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import TopMenuBar from './topMenuBar.js'
import Banner from './banner.js'
import Row3 from './row3.js'
import Row4 from './row4.js'
import Row5 from './row5.js'
import Row6 from './row6.js'
import Row7 from './row7.js'
import Footer from './footer.js'

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
  darkTeal: {
    backgroundColor: '#147693',
  },
  lightTeal: {
    backgroundColor: '#1A9EC5'
  },

}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopMenuBar />
      <Banner />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
      <Row7 />
      <Footer />

    </div>
  );
}
