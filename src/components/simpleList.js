import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
         
      <List component="nav" aria-label="Secondary mailbox folders">
      <Divider />
        <ListItem>
          <ListItemText primary="Thing 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Another thing" />
        </ListItem>
        <ListItem>
          <ListItemText primary="THE thing" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Thingamabob" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Thingles" />
        </ListItem>
        
      </List>
    </div>
  );
}