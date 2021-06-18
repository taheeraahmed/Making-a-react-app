import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

/* const useStyles = makeStyles((theme) => ({
    chip:{
      borderRadius: '80px',
      color: '#ffffff',
      background: 'radial-gradient(circle at right, #FE6B8B 30%, #FF8E53 90%)',
    }
  }));
 */


export default class ProjectChips extends React.Component {
    /* const classes = useStyles(); */
    render(){
      return (
        <div>
            <Chip /* className={classes.chip} */
                label={this.props.name}/>
        </div>
    );
  }
}