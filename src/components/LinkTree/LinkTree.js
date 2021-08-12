import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import JustMe from '../../images/pb.jpg';
import './LinkTree.css';

const useStyles = makeStyles({
  root: {
    background: 'transparent',
    border: '1px solid white',
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '30px 10px 30px 10px',
    marginTop: '10px',
    fontSize: 12,
    borderRadius: 10,
    textTransform: 'inital',
  },
});


export default function LinkTree() {
  const classes = useStyles();
  return (
    <div class="bodyLink">
      <div class="headerLink">
      <img src={JustMe} style ={{border: 'double 3px white', borderRadius:3000,}} width="120px" alt="Bare et bilde av meg"/>
        <h4>
            Taheera Ahmed
        </h4>
        <Button 
          fullWidth = "true"
          size="large"
          href="https://vsco.co/taheeraahmed/gallery"
          className={classes.root}>
          VSCO
        </Button>
        <Button 
          fullWidth = "true"
          size="large"
          href="https://www.linkedin.com/in/taheera-ahmed-997750158/"
          className={classes.root}>
          LinkedIn
        </Button>
        <Button 
          fullWidth = "true"
          size="large"
          href="https://github.com/taheeraahmed"
          className={classes.root}>
          Github
        </Button>
        <Button 
          fullWidth = "true"
          size="large"
          href="mailto:taheera@hotmail.com"
          className={classes.root}>
          Send meg en mail!
        </Button>
      </div>
    </div>

  );
}