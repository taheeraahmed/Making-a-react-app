import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const styles = {
    img: { 
        padding:10, 
        fill: "white", 
        width:"60%", 
        height:"60%",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        border: 'double 4px transparent',
        boxShadow: '0 1px 7px 3px rgba(255, 105, 135, .3)',
    }
};

export class EntryCV extends React.Component{
    render (){
    return (
        <div>
            <Paper 
                variant="outlined"
                style = {{
                    padding:25,
                    marginTop:10,
                }}
                square>
            <Grid 
                alignItems="center"
                justify="center"
                container spacing={1}>
            <Grid item xs={2}>
                    <img src={this.props.image} style={styles.img} />
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
            <Grid item xs={6}
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