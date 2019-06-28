import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import SimpleMenu1 from './menu1.js'
import SimpleMenu2 from './menu2.js'
import SimpleMenu3 from './menu3.js'

import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    color: 'white'
  },
  toolbar: {
    backgroundColor: '#147693',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            Example Page
          </Typography>
          <SimpleMenu1 />
          <SimpleMenu2 />
          <SimpleMenu3 />
        </Toolbar>
      
    </div>
  );
}