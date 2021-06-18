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
  paper: {
    padding:10,
    marginTop:10,
    paddingLeft:10,
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
        <Typography variant="h2">
          CV
        </Typography>
        <Typography 
          paragraph={true}
          variant="h3" 
          className={ classes.h3 }>
          &gt; Tekniske kunnskaper
        </Typography>
        <ListTech></ListTech>
        <Typography 
          paragraph={true}
          variant="h3" 
          className={ classes.h3 }>
          &gt; Utdannelse
        </Typography>
        <Paper 
          variant="outlined"
          className = {classes.paper} 
          square>
          <Grid 
            alignItems="center"
            justify="center"
            container spacing={1}>
          <Grid item xs={1}>
                <StorageOutlinedIcon style={{borderRadius: 100, padding:10, fill: "white", width:"50%", height:"50%",background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}} />
           </Grid>
          <Grid item xs={4}
              alignItems="center"
              justify="center">
              <Typography variant="overline"
                >
                  <Box>
                    Datateknologi, NTNU i Trondheim
                  </Box>
              </Typography>
              <Typography variant="overline">
                <Box>
                  2017-2023
                </Box>
              </Typography>
            </Grid>
          <Grid item xs={7}
              alignItems="center"
              justify="center">
              <Typography>
                Datateknologi er en kombinasjon av programmering, matematikk og kunnskap om teknologiske løsninger 
                innenfor IT. Begynner i 4.klasse til høsten og har valgt hovedprofilen "Databaser og Søk" 
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper 
          variant="outlined"
          className = {classes.paper} 
          square>
          <Grid 
            alignItems="center"
            justify="center"
            container spacing={1}>
          <Grid item xs={1}>
                <SchoolOutlinedIcon style={{borderRadius: 100, padding:10, fill: "white", width:"50%", height:"50%",background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}} />
           </Grid>
            <Grid item xs={4}
              alignItems="center"
              justify="center">
              <Typography variant="overline"
                >
                  <Box>
                    Jessheim videregående skole
                  </Box>
              </Typography>
              <Typography variant="overline">
                <Box>
                  2012-2015
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={7}
              alignItems="center"
              justify="center">
              <Typography>
                Gikk studiespesialiserende med valgfag som fysikk, matte, kjemi og engelsk.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Typography 
          paragraph={true}
          variant="h3" 
          className={ classes.h3 }>
          &gt; Jobberfaringer
        </Typography>
        <Paper 
          variant="outlined"
          className = {classes.paper} 
          square>
          <Grid 
            alignItems="center"
            justify="center"
            container spacing={1}>
          <Grid item xs={1}>
                <LocalPizzaOutlinedIcon style={{borderRadius: 100, padding:10, fill: "white", width:"50%", height:"50%",background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}} />
           </Grid>
            <Grid item xs={4}
              alignItems="center"
              justify="center">
              <Typography variant="overline"
                >
                  <Box>
                    Sjåfør, Peppes Pizza
                  </Box>
              </Typography>
              <Typography variant="overline">
                <Box>
                  Aug 2016 - Aug 2021
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={7}
              alignItems="center"
              justify="center">
              <Typography>
                Her leverte jeg glede, i form av pizza, på døren til mange på Jessheim! 
                Hadde deltidsstilling som sjåfør med andre ord og jobber her hovedsakelig i sommerferiene.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper 
          variant="outlined"
          className = {classes.paper} 
          square>
          <Grid 
            alignItems="center"
            justify="center"
            container spacing={1}>
          <Grid item xs={1}>
                <LocalHospitalOutlinedIcon  style={{borderRadius: 100, padding:10, fill: "white", width:"50%", height:"50%",background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}} />
           </Grid>
            <Grid item xs={4}
              alignItems="center"
              justify="center">
              <Typography variant="overline"
                >
                  <Box>
                    Medic, Forsvaret
                  </Box>
              </Typography>
              <Typography variant="overline">
                <Box>
                  Aug 2015- Aug 2016
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={7}
              alignItems="center"
              justify="center">
              <Typography>
              Fullførte førstegangstjenesten min på Madlaleiren. I løpet av denne tiden lærte jeg grunnleggende førstehjelp. 
              I tillegg hjalp jeg til på sykestuen på Madla samt. diverse militærøvelser i regi av Sjøforsvarets befalsskole.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper 
          variant="outlined"
          className = {classes.paper} 
          square>
          <Grid 
            alignItems="center"
            justify="center"
            container spacing={1}>
          <Grid item xs={1}>
                <LocalAirportOutlinedIcon  style={{borderRadius: 100, padding:10, fill: "white", width:"50%", height:"50%",background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}} />
           </Grid>
            <Grid item xs={4}
              alignItems="center"
              justify="center">
              <Typography variant="overline"
                >
                  <Box>
                    Servicemedarbeider, SSP
                  </Box>
              </Typography>
              <Typography variant="overline">
                <Box>
                  Feb 2014- Jun 2015
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={7}
              alignItems="center"
              justify="center">
              <Typography>
                Jobbet på Pizza Hut på Oslo Lufthavn. Her hadde jeg ansvar for å både rydde etter besøkende, lage pizza mm.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper 
          variant="outlined"
          className = {classes.paper} 
          square>
          <Grid 
            alignItems="center"
            justify="center"
            container spacing={1}>
          <Grid item xs={1}>
                <FitnessCenterOutlinedIcon   style={{borderRadius: 100, padding:10, fill: "white", width:"50%", height:"50%",background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"}} />
           </Grid>
            <Grid item xs={4}
              alignItems="center"
              justify="center">
              <Typography variant="overline"
                >
                  <Box>
                    Hjelpetrener, Ullensaker Gym og Turn
                  </Box>
              </Typography>
              <Typography variant="overline">
                <Box>
                  Jan 2012- Jan 2015
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={7}
              alignItems="center"
              justify="center">
              <Typography>
                Her jobbet jeg med barn i alderen fra 4-14 år. Jeg jobbet i et team av andre trenere og lærte barna å turne
              </Typography>
            </Grid>
          </Grid>
        </Paper>
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
