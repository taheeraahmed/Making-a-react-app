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
}));

export default function Info() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Chip 
            avatar={<HomeIcon style={{ color: "#black" }}/>} 
            label="Trondheim/Jessheim" />
        <Chip avatar={<SchoolIcon/>} label="Datateknologi, Norges Teknisk og Naturvitenskapelig Universitet" />
        <Chip avatar={<GitHubIcon/>} label="@taheeraahmed" component="a" href="https://github.com/taheeraahmed" clickable />
        <Chip avatar={<MailIcon/>} label="taheera@hotmail.com" component="a" href="mailto:taheera@hotmail.com" clickable />
        <Chip avatar={<LinkedInIcon/>} label="Taheera Ahmed" component="a" href="https://www.linkedin.com/in/taheera-ahmed-997750158/" clickable />
    </div>
  );
}
