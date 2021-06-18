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
                                <img height = "150" src={this.props.imagePath}/>
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant ="h4">
                                {this.props.title}
                            </Typography>
                            <Typography variant ="body2" paragraph={true}>
                                <Link href={this.props.linkPath} >
                                    {this.props.linkName}
                                </Link>
                            </Typography>
                            <Typography variant ="body">
                                {this.props.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }
}