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
import GridBase from "@material-ui/core/Grid";


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
  },
  grid: {
    flexGrow: 1,
    padding: 0,
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
          classname={classes.grid}>
          <Grid item xs={12} sm={6} lg={6} >
              <center>
              <img src={JustMe} style ={{border: 'double 6px transparent', marginBottom: 20, backgroundRepeat: 'no',background: "linear-gradient(#FE6B8B 30%, #FF8E53 90%)",boxShadow: '0 1px 7px 3px rgba(255, 105, 135, .3)',}} width="60%" alt="Bare et bilde av meg"/>
              </center>
            <Typography paragraph = {true} style={{lineHeight: '1.8'}}>
                <Typography variant='h1' style={{fontSize: 30, display: 'inline', fontWeight:'bold',}}>Heisann, </Typography>
                Jeg heter Taheera (uttales Tahira) og jeg er en {Age} år gammel jente fra Jessheim. 
                For øyeblikket studerer jeg <Highlighter word = 'datateknologi'/> på NTNU og begynner i 4.klasse nå til høsten. 
                Jeg har valgt retningen "Databaser og søk", og er veldig spent på hvilke utfordringer jeg får neste semester. 
  
            </Typography>
            <Typography paragraph = {true} style={{lineHeight: '1.8'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </Typography>

          </Grid>
          <Grid item xs={12} sm={6} lg={6} >
            <Typography variant='h3' className={ classes.h3 }>
              Hvorfor har jeg laget denne siden?
            </Typography>
            <Typography paragraph = {true} style={{lineHeight: '1.8'}}>
                Jeg <Highlighter word = 'kjeder meg'/> denne sommeren, og er relativt skuffet over at jeg <Highlighter word="ikke"/> fikk 
                relevant sommerjobb. DERFOR har jeg tatt saken i egne hender og har laget en liten nettside hvor jeg
                prøver å lære meg hvordan <Highlighter word="MaterialUI"/> og <Highlighter word="React"/> faktisk fungerer. Saaamtidig som jeg kan ha et annet sted (enn github) å legge 
                ut prosjekter jeg gjør.
            </Typography>
            <Typography variant='h3' className={ classes.h3 }>
              Planer for sommeren
            </Typography>
            <Typography paragraph = {true} style={{lineHeight: '1.8'}}>
              Vil tilføye at denne nettsiden ikke er det eneste jeg skal gjøre i sommer. Jeg har planer om å lage 
              en deep learning chatbot, dvs. en chatbot som bruker et nevralt nett for å lære seg å snakke. Jeg vil også
              lære meg hvordan <Highlighter word="Tensorflow"/> fungerer. Og tilslutt men ikke minst se litt på <Highlighter word="seaborn"/>, for lære meg å visualisere
              data på en fet måte.
              Python er defintivt favoritten her :,)
            </Typography>

            <Typography variant='h3' className={ classes.h3 }>
              Må finne ut hva mer jeg kan skrive
            </Typography>
            <Typography paragraph = {true} style={{lineHeight: '1.8'}}>
              Vil tilføye at denne nettsiden ikke er det eneste jeg skal gjøre i sommer. Jeg har planer om å lage 
              en deep learning chatbot, dvs. en chatbot som bruker et nevralt nett for å lære seg å snakke. Jeg vil også
              lære meg hvordan <Highlighter word="Tensorflow"/> fungerer. Og tilslutt men ikke minst se litt på <Highlighter word="seaborn"/>, 
              for lære meg å visualisere data på en fet måte.
              Python er defintivt favoritten her :,)
            </Typography>
            
            
          </Grid>

          <Typography paragraph = {true} style={{lineHeight: '1.8'}}>
              <Highlighter word = 'Obviously'/> synes jeg gradienter er veldig kule. Bruker det på alt her
            </Typography>
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
        <Typography variant="h2" paragraph = {true}>
          Fordi jeg kan
        </Typography>
        <Typography>
          Her vil jeg legge inn morsomme ting 
        </Typography>
      </TabPanel>
    </div>
  );
}
