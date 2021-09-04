import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';

const styles = {
    chip: {
        marginRight: '8px',
        boxShadow: '0 1px 6px 3px rgba(255, 105, 135, .3)',
        borderRadius: '80px',
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
        color: 'white',
    },
    link: {
        color: 'black',
        padding: '10pt',
        
        
    }
};


export default class EntryProject extends React.Component{
    render() {
        const chips_list = this.props.chips
        const listChips = chips_list.map((item) =>(
            <Chip label={item} style={styles.chip}/>
           )
        );
        return (
            <div>
                <Paper variant="outlined" 
                    style = {{
                        marginTop:20,
                        padding: 10,
                        paddingLeft:10,
                    }}
                    square>
                    <Grid 
                        alignItems="center"
                        justify="center"
                        container spacing={1}>
                        <Grid item xs={4} 
                            style = {{
                            }}>
                            <Typography variant ="body1">
                                <img height = "90%" width="90%" src={this.props.image} style ={{border: 'double 6px transparent', backgroundRepeat: 'no',background: "linear-gradient(#FE6B8B 30%, #FF8E53 90%)",boxShadow: '0 1px 7px 3px rgba(255, 105, 135, .3)',}} alt={this.props.title}/>
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Link href={this.props.linkPath}
                                        style={styles.link} >
                                <Typography variant ="h4">
                                    {this.props.title}
                                </Typography>
                            </Link>
                            <Typography variant ="body2" paragraph={true}>
                                <Box display='flex'
                                    flexWrap="wrap"
                                    alignContent="flex-start">
                                    {listChips}
                                </Box>
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