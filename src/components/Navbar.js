import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import JustMe from '../images/pb.jpg';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles({
  root: {
    background: 'white',
  },
  indicator: {
    border: 'double 2px transparent',
    backgroundImage: 'linear-gradient(transparent, transparent), radial-gradient(circle at top left, #FF8E53 30%,#FE6B8B 90% )',
  },
  tabs: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    fontSize: 20,
  }
});

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          className={classes.tabs}
          classes={{ indicator: classes.indicator }}
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          elevation={0}
        >
          <LinkTab label="Om meg" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="CV" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Prosjekter" href="/spam" {...a11yProps(2)} />
          <LinkTab label="Fordi jeg kan" href="/spam" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h2>
          Om meg
        </h2>
        <Box display="flex" p={1} >
          <Box p={1} width="33%">
            <img src={JustMe} width="300"alt="cam"/>
          </Box>
          <Box p={1} width="33%" >
            <Typography paragraph = {true}>
              Heisann, 
              jeg heter Taheera (uttales Tahira) og jeg er en 24 år gammel jente fra Jessheim. 
              For øyeblikket studerer jeg datateknologi på NTNU og begynner i 4.klasse
            </Typography>
            <Typography paragraph = {true}>
              Jeg kjeder meg denne sommeren. Derfor bestemte jeg meg for å lage en aldri så liten nettside for å
              prøve å lære meg hvordan MaterialUI og React faktisk fungerer. Ville sagt jeg delvis
              skjønner meg litt mer på det
            </Typography>
            <Typography paragraph = {true}>
              Obviously synes jeg gradienter er veldig kule. Bruker det på alt her
            </Typography>
          </Box>
          <Box p={1} width="33%">
            <Typography>
            </Typography>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h2>
          CV
        </h2>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h2>
          Prosjekter
        </h2>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h2>
          Fordi jeg kan
        </h2>
      </TabPanel>
    </div>
  );
}
