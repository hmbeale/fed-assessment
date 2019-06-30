import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import TopMenuBar from './topMenuBar.js'
import Banner from './banner.js'
import CardsDescription from './cardsDescription.js'
import CheckboxGroup from './checkboxGroup.js'
import CardGroup from './cardGroup.js'
import BlockText from './blockText.js'
import Trifold from './trifold.js'
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
      <CardsDescription />
      <CheckboxGroup />
      <CardGroup />
      <BlockText />
      <Trifold />
      <Footer />

    </div>
  );
}
