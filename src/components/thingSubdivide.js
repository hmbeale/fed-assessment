import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ImgCard2 from "./imgCard2";

const useStyles = makeStyles(theme => ({
  typography: {
    color: "#147693",
    textAlign: "left",
  },
  container: {
      flexGrow: 1
  }
}));

export default function SimpleMenu1() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12} sm={6}>
          <ImgCard2 />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography className={classes.typography}>
            These guys are pretty coo’. Thing one and thing 2. You'll like what
            they do. Such fun from so few!
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
