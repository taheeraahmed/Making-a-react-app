import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import MyLink from '../Link/Link';
import ProjectChips from '../ProjectChips/ProjectChips';
import { Box } from '@material-ui/core';

export class EntryProjects extends React.Component{
    constructor(props){
        super(props)
        this.state = { link : 'Frarthur' }
    }
    render(){
        return (
            <div>
                <Paper variant="outlined" 
                    style = {{
                        height:150,
                        padding:10,
                        marginTop:20,
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
                                <MyLink href={this.props.linkPath} >
                                    {this.props.linkName}
                                </MyLink>
                                <Box display='flex'
                                    flexWrap="wrap"
                                    alignContent="flex-start">
                                        <Box pr={0.5}>
                                            <ProjectChips name="Python"/>
                                        </Box>
                                        <Box pr={0.5}>
                                            <ProjectChips name="Kunstig Intelligens"/>
                                        </Box>   
                                </Box>
                                {/* aListOfStuff =  ['Python', 'Kunstig Intelligens', 'NLP', 'TensorFlow']}
                                {/* <ProjectChips list={aListOfStuff}> */}
                                
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