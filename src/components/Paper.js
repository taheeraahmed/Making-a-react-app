import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      alignItems: 'center',
      padding: theme.spacing(1),
      margin: theme.spacing(2),
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={2}>
      </Paper>
    </div>
  );
}
