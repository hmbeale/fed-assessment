import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listItemText : {
    color: "#147693"
  },
  title: {
    textAlign: "left",
    fontSize: '20px',
    color: "#147693"
  },
  list: {
    listStyle: 'circle'
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className = {classes.typography} className = {classes.title}>
          List of Things
        </Typography>   
      <List component="nav" aria-label="Secondary mailbox folders" className = {classes.list}>
        <ListItem>
          <ListItemText primary="Thing 1" className = {classes.listItemText} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Another thing" className = {classes.listItemText}/>
        </ListItem>
        <ListItem>
          <ListItemText primary="THE thing" className = {classes.listItemText}/>
        </ListItem>
        <ListItem>
          <ListItemText primary="Thingamabob" className = {classes.listItemText}/>
        </ListItem>
        <ListItem>
          <ListItemText primary="Thingles" className = {classes.listItemText}/>
        </ListItem>
        
      </List>
    </div>
  );
}