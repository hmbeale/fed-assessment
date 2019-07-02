import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import testImage from '../images/random-mountain-pic_edit.png'

const useStyles = makeStyles(theme => ({
  root: {
    //borderStyle: 'dotted',
    //width: "100%",
    maxHeight: 200,
    //backgroundColor: theme.palette.background.paper     
  },
  img: {
      maxHeight:250,
      zIndex: 2000,
      position: 'relative'
  }
}));


export default function BannerImage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={testImage} alt="mountain" className={classes.img} /> 
    </div>
  );
}