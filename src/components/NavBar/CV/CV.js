import Typography from "@material-ui/core/Typography";
import ListTech from "./ListTech/ListTech";
import {EntryCV} from "./EntryCV/EntryCV";
import database from "../../../icons/database.svg";
import school from "../../../icons/school.svg";
import web from "../../../icons/web.svg";
import customerService from "../../../icons/customerService.svg";
import drama from "../../../icons/drama.svg";
import locomotive from "../../../icons/locomotive.svg";
import pizzaSlice from "../../../icons/pizzaSlice.svg";
import hospital from "../../../icons/hospital.svg";
import airport from "../../../icons/airport.svg";
import gymnastics from "../../../icons/gymnastics.svg";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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

export const CV = () => {
    const classes = useStyles();

    return (
        <>
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
                     occupationAndPlace = 'Datateknologi sivilingeniør, NTNU'
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

        </>
    );
};
