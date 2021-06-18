import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export class EntryProjects extends React.Component{
    render(){
        return (
            <div>
                <Paper variant="outlined" 
                    style = {{
                        height:150,
                        padding:10,
                        marginTop:30,
                        paddingLeft:10,
                    }}
                    square>
                    <Grid 
                        alignItems="center"
                        justify="center"
                        container spacing={1}>
                        <Grid item xs={4} 
                            style = {{
                                height:150,
                            }}>
                            <Typography variant ="body">
                                <img height = "150" src="data:image/png;base64,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"/>
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant ="h4">
                                tittel
                            </Typography>
                            <Typography variant ="body2" paragraph={true}>
                                <Link href="#" >
                                    Link
                                </Link>
                            </Typography>
                            <Typography variant ="body">
                                Beskrivelse
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}