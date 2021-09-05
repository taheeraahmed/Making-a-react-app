import React from 'react';
import Grid from "@material-ui/core/Grid";
import JustMe from "../../../images/pb.jpg";
import Typography from "@material-ui/core/Typography";
import {Highlighter} from "./Highlighter/Highlighter";
import {makeStyles} from "@material-ui/core/styles";

export const FrontPage = () => {
    const useStyles = makeStyles({
        grid: {
            flexGrow: 1,
            padding: 0,
        },
        h3: {
            textAlign: 'left',
            fontSize: 25,
            paddingTop:30,
        }
    });

    const classes = useStyles();
    let d = new Date();
    let Age = d.getFullYear() - 1996

    return (
        <Grid container spacing={4}
              style ={{paddingTop: '23px', paddingRight:'10px'}}
              direction="row"
              justify="center"
              className={classes.grid}>
            <Grid item xs={12} sm={6} lg={6} >
                <div className="image" style={{textAlign: "center"}}>
                    <img src={JustMe} style ={{border: 'double 6px transparent', marginBottom: 20, backgroundRepeat: 'no',background: "linear-gradient(#FE6B8B 30%, #FF8E53 90%)",boxShadow: '0 1px 7px 3px rgba(255, 105, 135, .3)',}} width="60%" alt="Bare et bilde av meg"/>
                </div>
                <Typography paragraph = {true} style={{lineHeight: '1.8'}}>
                    <Typography variant='h1' style={{fontSize: 30, display: 'inline', fontWeight:'bold',}}>Heisann, </Typography>
                    Jeg heter Taheera (uttales Tahira) og jeg er en {Age} år gammel jente fra Jessheim.
                    For øyeblikket studerer jeg <Highlighter word = 'datateknologi'/> på NTNU og begynner i 4.klasse nå til høsten.
                    Jeg har valgt retningen "Databaser og søk", og er veldig spent på hvilke utfordringer jeg får neste semester.

                </Typography>

            </Grid>
            <Grid item xs={12} sm={6} lg={6} >
                <Typography variant='h3' className={ classes.h3 }>
                    Hvorfor har jeg laget denne siden?
                </Typography>
                <Typography paragraph = {true} style={{lineHeight: '1.8'}}>
                    Jeg <Highlighter word = 'kjeder meg'/> denne sommeren, og er relativt skuffet over at jeg <Highlighter word="ikke"/> fikk
                    relevant sommerjobb. DERFOR har jeg tatt saken i egne hender og laget en liten nettside hvor jeg
                    prøver å lære meg hvordan <Highlighter word="MaterialUI"/> og <Highlighter word="React"/> faktisk fungerer. Saaamtidig som jeg kan ha et annet sted (enn github) å legge
                    ut prosjekter jeg gjør.
                </Typography>
                <Typography variant='h3' className={ classes.h3 }>
                    Planer for sommeren
                </Typography>
                <Typography paragraph = {true} style={{lineHeight: '1.8'}}>
                    Denne nettsiden er ikke det eneste jeg skal lage i sommer. Jeg har planer om å implementere
                    en en <Highlighter word="chatbot"/> som bruker et nevralt nett for å lære seg å snakke. Jeg vil også
                    lære meg hvordan <Highlighter word="Tensorflow"/> fungerer. Og tilslutt men ikke minst se litt på <Highlighter word="seaborn"/>, for lære meg å visualisere
                    data på en fet måte.
                    Python er defintivt favoritten her :,)
                </Typography>
                <Typography paragraph = {true} style={{lineHeight: '1.8'}}>
                    <Highlighter word = 'Obviously'/> synes jeg gradienter er veldig kule. Bruker det på alt her
                </Typography>

            </Grid>

        </Grid>
    );
};