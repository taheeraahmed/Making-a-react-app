import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import JustMe from '../images/pb.jpg';
import { EntryCV } from './EntryCV/EntryCV.js';
import { Highlighter } from './Highlighter/Highlighter.js'
import { ProjectList } from './EntryProjects/ProjectList.js'
import database from '../icons/database.svg'
import school from '../icons/school.svg'
import airport from '../icons/airport.svg'
import gymnastics from '../icons/gymnastics.svg'
import hospital from '../icons/hospital.svg'
import pizzaSlice from '../icons/pizzaSlice.svg'
import locomotive from '../icons/locomotive.svg'
import web from '../icons/web.svg'
import drama from '../icons/drama.svg'
import customerService from '../icons/customerService.svg'
import ListTech2 from './ListTech/ListTech';

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
  h3: {
    textAlign: 'left',
    fontSize: 25,
    paddingTop:30,
  }
});

var d = new Date();
var Age = d.getFullYear() - 1996

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0}>
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
        <Grid container spacing={4} 
          style ={{paddingTop: '23px', paddingRight:'10px'}} 
          direction="row"
          justify="center"
          alignItems="center">
          <Grid item xs={12} sm={4} >
            <center>
              <img src={JustMe} style ={{border: 'double 6px transparent', backgroundRepeat: 'no',background: "linear-gradient(#FE6B8B 30%, #FF8E53 90%)",boxShadow: '0 1px 7px 3px rgba(255, 105, 135, .3)',}} width="100%" alt="Bare et bilde av meg"/>
            </center>
          
          </Grid>
          <Grid item xs={12} sm={8} >
            <Typography paragraph = {true}>
                Heisann, 
                jeg heter Taheera (uttales Tahira) og jeg er en {Age} år gammel jente fra Jessheim. 
                For øyeblikket studerer jeg <Highlighter word = 'datateknologi'/> på NTNU og begynner i 4.klasse nå til høsten
            </Typography>
            <Typography paragraph = {true}>
                Jeg <Highlighter word = 'kjeder meg'/> denne sommeren, og relativt skuffet over at jeg <Highlighter word="ikke fikk noen sommerjobb"/>. DERFOR har jeg
                tatt saken i egne hender og har laget en liten nettside hvor jeg
                prøver å lære meg hvordan <Highlighter word="MaterialUI og React"/> faktisk fungerer. Saaamtidig som jeg kan ha et annet sted (enn github) å legge 
                ut prosjekter jeg gjør.
            </Typography>
            <Typography paragraph = {true}>
              Har lyst til å legge til at denne nettsiden ikke er det eneste jeg skal gjøre i sommer. Skal også prøve å lære meg hvordan <Highlighter word="Tensorflow"/> fungerer samt, seaborn (begge er Python bibllioteker). 
              Python er defintivt favoritten her :,)
            </Typography>
            <Typography paragraph = {true}>
              <Highlighter word = 'Obviously'/> synes jeg gradienter er veldig kule. Bruker det på alt her
            </Typography>
            <Typography>
              Dersom du har lyst kan du også sjekke ut vsco-en min :3 
            </Typography>
            
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography 
          paragraph={true}
          variant="h3"  
          className={ classes.h3 }>
          Nøkkelord
        </Typography>
        <ListTech2/>
        <Typography 
          paragraph={true}
          variant="h3" 
          className={ classes.h3 }>
          Utdannelse
        </Typography>
        <EntryCV description="Datateknologi er en kombinasjon av programmering, matematikk og kunnskap om teknologiske løsninger 
          innenfor IT. Begynner i 4.klasse til høsten og har valgt hovedprofilen Databaser og Søk"
          occupationAndPlace = 'Datateknologi, NTNU'
          time='Aug 2017 - Jun 2023'
          image={database}/>
        <EntryCV occupationAndPlace = 'Jessheim Videregående Skole'
          time='Aug 2012 - Jun 2015'
          description="Gikk studiespesialiserende med valgfag som engelsk, matte, fysikk og kjemi"
          image={school}/>
        <Typography 
          paragraph={true}
          variant="h3" 
          className={ classes.h3 }>
          Frivillig arbeid
        </Typography>
        <EntryCV description='Fotogjengen tar bilder av alle arrangementer som skjer på Studentersamfundet i Trondheim. 
          Målet for webutviklerne i fotogjengen er å lage en helt ny nettside hvor bildene kan lastes opp, vises og lagres.'
          occupationAndPlace = 'Webutvikler, Studentersamfundet'
          time='Aug 2020 - d.d.'
          image={web}/>
        <EntryCV description='E&T dagen er en bedriftsmesse som blir arrangert på NTNU Gløshaugen. Her hadde jeg ansvar for å kontakte forskjellige bedrifter til messen,'
          occupationAndPlace = 'Bedriftskontakt, E&T-dagen'
          time='Feb 2019 - Feb 2020'
          image={customerService}/>
        <EntryCV description="Skapte god stemning og kos. Dette gjorde vi blant annet ved å f.eks. ordne snacks og lage mat til de andre arbeiderne i Omegarevyen"
          occupationAndPlace = 'Velferdsarbeider, Omegarevyen'
          time='Jul 2018 - Feb 2019'
          image={drama}/>
        <EntryCV description="Som medlem av denne komitéen vedlikeholder man (blant annet) et 111 år gammelt lokomotiv som står på campus Gløshaugen på NTNU i Trondheim"
          occupationAndPlace = 'Loccomotivkomitée, Sct. Omega Broderskab'
          time='Jun 2017 - Sep 2019'
          image={locomotive}/>
      <Typography 
          paragraph={true}
          variant="h3" 
          className={ classes.h3 }>
          Jobberfaringer
        </Typography>
        <EntryCV description="Her leverte jeg glede, i form av pizza, på døren til mange på Jessheim! Hadde deltidsstilling som sjåfør med andre ord og jobber her hovedsakelig i sommerferiene."
          occupationAndPlace = 'Sjåfør, Peppes Pizza Jessheim'
          time='Aug 2016 - Aug 2020'
          image={pizzaSlice}/>
        <EntryCV description="Fullførte førstegangstjenesten min på Madlaleiren. I løpet av denne tiden lærte jeg grunnleggende førstehjelp. I tillegg hjalp jeg til på sykestuen på Madla samt. diverse militærøvelser i regi av Sjøforsvarets befalsskole."
          occupationAndPlace = 'Medic, Sjøforsvaret'
          time='Aug 2015 - Jun 2016'
          image = {hospital}/>
        <EntryCV description="Jobbet på Pizza Hut på Oslo Lufthavn. Her hadde jeg ansvar for å både rydde etter besøkende, lage pizza mm."
          occupationAndPlace = 'Servicemedarbeider, SSP'
          time='Feb 2014 - Jun 2015'
          image = {airport}/>
        <EntryCV description="Her jobbet jeg med barn i alderen fra 4-14 år. Jeg jobbet i et team av andre trenere og lærte barna å turne."
          occupationAndPlace = 'Hjelpetrener, Ullensaker Gym og Turn'
          time='Jan 2012 - Jan 2015'
          image = {gymnastics}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h2" >
            Prosjekter
        </Typography>
          <ProjectList/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography variant="h2">
          Fordi jeg kan
        </Typography>
      </TabPanel>
    </div>
  );
}
