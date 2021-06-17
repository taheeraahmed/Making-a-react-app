import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  chip:{
    padding: '15px 10px',
    border: 'double 4px transparent',
    borderRadius: '80px',
    backgroundImage: 'linear-gradient(white, white), radial-gradient(circle at top left, #FE6B8B 30%, #FF8E53 90%)',
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
    backgroundColor: '#ffffff',
    margin: 7,
    "&&:hover": {
        transitionDelay: 2,
        border: 'double 4px transparent',
        borderRadius: '80px',
        backgroundImage: 'linear-gradient(white, white), radial-gradient(circle at top left, #FF8E53 30%,#FE6B8B 90% )',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        boxShadow: '0 1px 7px 3px rgba(255, 105, 135, .3)',
    },
  }
}));

export default function Info() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Chip 
            className={classes.chip}
            avatar={<HomeIcon/>} 
            label="Trondheim/Jessheim" />
        <Chip 
            className={classes.chip}
            avatar={<SchoolIcon/>} 
            label="Datateknologi, Norges Teknisk og Naturvitenskapelig Universitet" />
        <Chip 
            className={classes.chip}
            avatar={<GitHubIcon/>} 
            label="@taheeraahmed" 
            component="a" 
            href="https://github.com/taheeraahmed" clickable />
        <Chip 
            className={classes.chip}
            avatar={<MailIcon/>} 
            label="taheera@hotmail.com" 
            component="a" href="mailto:taheera@hotmail.com" clickable />
        <Chip 
            className={classes.chip}
            avatar={<LinkedInIcon/>} 
            label="Taheera Ahmed" 
            component="a" 
            href="https://www.linkedin.com/in/taheera-ahmed-997750158/" clickable />
    </div>
  );
}
