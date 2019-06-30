import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  title: {
    color: "white"
  },
  checkBox: {
    display: "flex"
  }
}));

export default function Checkboxes() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div className={classes.checkBox}>
      <Typography variant="h6" className={classes.title}>
        I want to see:
      </Typography>
      <Checkbox
        value="checkedC"
        inputProps={{
          "aria-label": "uncontrolled-checkbox"
        }}
      />
      <Typography variant="h6" className={classes.title}>
        Birds
      </Typography>
      <Checkbox
        value="checkedC"
        inputProps={{
          "aria-label": "uncontrolled-checkbox"
        }}
      />
      <Typography variant="h6" className={classes.title}>
        Cats
      </Typography>
    </div>
  );
}
