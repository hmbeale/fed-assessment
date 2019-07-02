import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    //width: "100%",
    //maxWidth: 360,
    //backgroundColor: theme.palette.background.paper
    //textAlign: "left",
  },
  li: {
    color: "#147693",
    alignItems: "left",
    textAlign: "left",
  },
}));

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <li className={classes.li}>
        Thing 1          
      </li>
      <li className={classes.li}>
      Another thing          
      </li>
      <li className={classes.li}>
      THE thing          
      </li>
      <li className={classes.li}>
      Thingamabob          
      </li>
      <li className={classes.li}>
      Thingles          
      </li>
    </div>
  );
}