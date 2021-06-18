import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import JustMe from '../images/pb.jpg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import LocalPizzaOutlinedIcon from '@material-ui/icons/LocalPizzaOutlined';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import LocalAirportOutlinedIcon from '@material-ui/icons/LocalAirportOutlined';
import FitnessCenterOutlinedIcon from '@material-ui/icons/FitnessCenterOutlined';
import { ListTech } from './ListTech/ListTech.js';
import { EntryCV } from './EntryCV/EntryCV.js';
import { Highlighter } from './Highlighter/Highlighter.js'

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
  },
  h2 :{
    textAlign: 'center',
  },
  h3: {
    textAlign: 'left',
    fontSize: 25,
    paddingTop:30,
  },
  backgroundIcon: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    width: 80,
    height: 80,
    borderRadius: 100,
    color: '#ffffff'
  },
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
          <Typography variant="h2">
            Om meg
          </Typography>
        <Box display="flex" p={1} >
          <Box p={1} width="33%">
            <img src={JustMe} width="300"alt="cam"/>
          </Box>
          <Box p={1} width="33%" >
            <Typography paragraph = {true}>
              Heisann, 
              jeg heter Taheera (uttales Tahira) og jeg er en 24 år gammel jente fra Jessheim. 
              For øyeblikket studerer jeg <Highlighter word = 'datateknologi'/> på NTNU og begynner i 4.klasse
            </Typography>
            <Typography paragraph = {true}>
              Jeg <Highlighter word = 'kjeder meg'/> denne sommeren. Derfor bestemte jeg meg for å lage en aldri så liten nettside for å
              prøve å lære meg hvordan MaterialUI og React faktisk fungerer. Ville sagt jeg delvis
              skjønner meg litt mer på det
            </Typography>
            <Typography paragraph = {true}>
            <Highlighter word = 'Obviously'/> synes jeg gradienter er veldig kule. Bruker det på alt her
            </Typography>
          </Box>
          <Box p={1} width="33%">
            <Typography>
            </Typography>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h2">
          CV
        </Typography>
        <Typography 
          paragraph={true}
          variant="h3" 
          className={ classes.h3 }>
          Nøkkelord
        </Typography>
        <ListTech/>
        <Typography 
          paragraph={true}
          variant="h3" 
          className={ classes.h3 }>
          Utdannelse
        </Typography>
        <EntryCV description="Datateknologi er en kombinasjon av programmering, matematikk og kunnskap om teknologiske løsninger 
          innenfor IT. Begynner i 4.klasse til høsten og har valgt hovedprofilen Databaser og Søk"
          occupationAndPlace = 'Datateknologi, NTNU'
          time='Aug 2017 - Jun 2023'/>
        <EntryCV occupationAndPlace = 'Jessheim Videregående Skole'
          time='Aug 2012 - Jun 2015'
          description="Gikk studiespesialiserende med valgfag som engelsk, matte, fysikk og kjemi"/>
        <Typography 
          paragraph={true}
          variant="h3" 
          className={ classes.h3 }>
          Frivillig arbeid
        </Typography>
        <EntryCV description="Datateknologi er en kombinasjon av programmering, matematikk og kunnskap om teknologiske løsninger 
          innenfor IT. Begynner i 4.klasse til høsten og har valgt hovedprofilen Databaser og Søk"
          occupationAndPlace = 'Datateknologi, NTNU'
          time='Aug 2017 - Jun 2023'/>
        <EntryCV description="Datateknologi er en kombinasjon av programmering, matematikk og kunnskap om teknologiske løsninger 
          innenfor IT. Begynner i 4.klasse til høsten og har valgt hovedprofilen Databaser og Søk"
          occupationAndPlace = 'Datateknologi, NTNU'
          time='Aug 2017 - Jun 2023'/>
        <EntryCV description="Datateknologi er en kombinasjon av programmering, matematikk og kunnskap om teknologiske løsninger 
          innenfor IT. Begynner i 4.klasse til høsten og har valgt hovedprofilen Databaser og Søk"
          occupationAndPlace = 'Datateknologi, NTNU'
          time='Aug 2017 - Jun 2023'/>
        <EntryCV description="Datateknologi er en kombinasjon av programmering, matematikk og kunnskap om teknologiske løsninger 
          innenfor IT. Begynner i 4.klasse til høsten og har valgt hovedprofilen Databaser og Søk"
          occupationAndPlace = 'Datateknologi, NTNU'
          time='Aug 2017 - Jun 2023'/>
      <Typography 
          paragraph={true}
          variant="h3" 
          className={ classes.h3 }>
          Jobberfaringer
        </Typography>
        <EntryCV description="Datateknologi er en kombinasjon av programmering, matematikk og kunnskap om teknologiske løsninger 
          innenfor IT. Begynner i 4.klasse til høsten og har valgt hovedprofilen Databaser og Søk"
          occupationAndPlace = 'Datateknologi, NTNU'
          time='Aug 2017 - Jun 2023'/>
        <EntryCV description="Datateknologi er en kombinasjon av programmering, matematikk og kunnskap om teknologiske løsninger 
          innenfor IT. Begynner i 4.klasse til høsten og har valgt hovedprofilen Databaser og Søk"
          occupationAndPlace = 'Datateknologi, NTNU'
          time='Aug 2017 - Jun 2023'/>
        <EntryCV description="Datateknologi er en kombinasjon av programmering, matematikk og kunnskap om teknologiske løsninger 
          innenfor IT. Begynner i 4.klasse til høsten og har valgt hovedprofilen Databaser og Søk"
          occupationAndPlace = 'Datateknologi, NTNU'
          time='Aug 2017 - Jun 2023'/>
        <EntryCV description="Datateknologi er en kombinasjon av programmering, matematikk og kunnskap om teknologiske løsninger 
          innenfor IT. Begynner i 4.klasse til høsten og har valgt hovedprofilen Databaser og Søk"
          occupationAndPlace = 'Datateknologi, NTNU'
          time='Aug 2017 - Jun 2023'/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h2" >
            Prosjekter
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography variant="h2">
          Fordi jeg kan
        </Typography>
      </TabPanel>
    </div>
  );
}
