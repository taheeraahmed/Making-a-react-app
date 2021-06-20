import React from 'react';
import Chip from '@material-ui/core/Chip';



export default class ProjectChips extends React.Component {
    render(){
      const list = ['Python', 'Kunstig Intelligens', 'Natural Language Processing','Tensorflow']
      const listItems = list.map((item) =>(
        <Chip label={item} style={{marginRight: '4px'}}/>
       )
      );

      return (
        <div>
          {listItems}
        </div>
    );
  } 
}