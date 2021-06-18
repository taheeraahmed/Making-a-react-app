import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';


export class EntryCV extends React.Component{
    render (){
    return (
        <div>
            <Paper 
                variant="outlined"
                style = {{
                    padding:20,
                    marginTop:10,
                    paddingLeft:10,
                }}
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
                        {this.props.occupationAndPlace}
                    </Box>
                </Typography>
                <Typography variant="overline">
                    <Box>
                        {this.props.time}
                    </Box>
                </Typography>
                </Grid>
            <Grid item xs={7}
                alignItems="center"
                justify="center">
                <Typography>
                    {this.props.description}
                </Typography>
                </Grid>
            </Grid>
            </Paper>
        </div>
        );
    };
}